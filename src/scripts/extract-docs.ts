#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { join, basename } from 'node:path';
import {
  DOC_FILE_NAME,
  EXAMPLE_FILE_NAME,
  EXTRACTED_COMPONENTS_DATA_PATH,
  EXTRACTED_COMPONENTS_LIST_PATH,
  EXTRACTED_DATA_DIR,
  EXTRACTED_METADATA_PATH,
} from '../constants/path.js';
import {
  extractDemoBlocks,
  extractSection,
  removeFrontmatter,
  removeSection,
  toPascalCase,
} from '../utils/md-extract.js';
import { parseMDMatter } from '../utils/matter-parse.js';
import { writeJsonFile } from '../utils/write.js';

/**
 * 提取的组件示例信息
 */
export interface ExampleInfoList {
  /** 示例名称 */
  name: string;
  /** 示例标题/描述 */
  description: string;
  /** 示例代码 */
  code?: string;
}

/**
 * 提取的组件数据
 */
export interface ComponentData {
  /** 组件名称 (PascalCase) */
  name: string;
  /** 组件目录名 (kebab-case) */
  dirName: string;
  /** 组件文档 */
  documentation: string;
  /** 组件标题 */
  title?: string;
  /** 组件描述 */
  description?: string;
  /** 代码示例信息 */
  exampleInfoList?: ExampleInfoList[];
}

/**
 * 提取的组件索引
 */
export type ComponentIndex = Array<
  Pick<ComponentData, 'name' | 'dirName' | 'title' | 'description'>
>;

/**
 * 提取结果元数据
 */
export interface MetaDataResult {
  /** 提取时间 */
  extractedAt: string;
  /** 提取的组件数量 */
  extractedCount: number;
  /** 组件总数 */
  componentCount: number;
  /** Find-Plus 版本 */
  findPlusVersion: string;
}

// 清理不需要的内容，减少上下文
const DOC_CLEANUP_EMPTY_LINE = /\n{3,}/g;

/**
 * 处理组件数据
 */
async function processComponent(
  docsPath: string,
  examplesPath: string,
  componentFileName: string
): Promise<ComponentData | null> {
  const componentDocPath = join(docsPath, componentFileName);
  const dirName = basename(componentFileName, '.md');

  if (!existsSync(componentDocPath)) {
    console.log(`⚠️ 跳过 ${dirName} - 文档不存在`);
    return null;
  }

  const componentName = toPascalCase(dirName);
  console.log(`📝 正在处理 ${componentName}...`);

  const componentData: ComponentData = {
    name: componentName,
    dirName: dirName,
    documentation: '',
  };

  try {
    // 读取并解析文档
    const docContent = await readFile(componentDocPath, 'utf-8');
    const mdMatter = await parseMDMatter(componentDocPath);
    
    componentData.title = mdMatter?.title;
    componentData.description = docContent.split('\n').find(line => 
      line.trim() && !line.startsWith('#') && !line.startsWith('---')
    )?.trim();

    // 处理文档内容
    const initHandleDoc = (doc: string) => {
      const handleList = [
        removeFrontmatter,
        // 移除 API 部分（保留在单独的 API 文档中）
        (doc: string) => {
          const apiIndex = doc.indexOf('## ');
          if (apiIndex === -1) return doc;
          
          // 查找所有 ## 标题
          const sections = doc.split(/(?=\n## )/);
          const filteredSections = sections.filter(section => {
            const trimmed = section.trim();
            return !trimmed.startsWith('## ') || 
                   (!trimmed.includes(' API') && 
                    !trimmed.includes('Attributes') && 
                    !trimmed.includes('Events') && 
                    !trimmed.includes('Slots') &&
                    !trimmed.includes('Exposes'));
          });
          return filteredSections.join('\n');
        },
      ];
      return handleList.reduce((acc, handle) => handle(acc), doc);
    };

    let handleDocResult = initHandleDoc(docContent);

    // 提取示例信息
    componentData.exampleInfoList = extractDemoBlocks(handleDocResult);

    // 移除 :::demo 块，只保留文字说明
    handleDocResult = handleDocResult.replace(/:::demo[\s\S]*?:::/g, '');

    componentData.documentation = handleDocResult.replace(
      DOC_CLEANUP_EMPTY_LINE,
      '\n\n'
    );

    // 读取示例文件
    const componentExamplesPath = join(examplesPath, dirName);
    if (existsSync(componentExamplesPath) && componentData.exampleInfoList) {
      console.log(`  🔍 找到 ${componentData.exampleInfoList.length} 个示例`);

      for (const exampleInfo of componentData.exampleInfoList) {
        const exampleFilePath = join(componentExamplesPath, `${exampleInfo.name}.vue`);

        try {
          if (existsSync(exampleFilePath)) {
            exampleInfo.code = await readFile(exampleFilePath, 'utf-8');
          } else {
            console.warn(`  ⚠️ 示例文件不存在: ${exampleFilePath}`);
          }
        } catch (error) {
          console.error(
            `  ❌ 读取示例 ${exampleInfo.name} 时出错:`,
            (error as Error).message
          );
        }
      }

      console.log(`  ✅ 已处理 ${componentData.exampleInfoList.length} 个示例`);
    }

    return componentData;
  } catch (error) {
    console.error(
      `  ❌ 处理 ${componentName} 时出错:`,
      (error as Error).message
    );
    return null;
  }
}

/**
 * 处理所有组件并导出数据的主函数
 */
async function extractAllData(findPlusRepoPath: string) {
  // 确保数据目录存在
  await mkdir(EXTRACTED_DATA_DIR, { recursive: true });

  const docsPath = join(findPlusRepoPath, 'docs/zh-CN/component');
  const examplesPath = join(findPlusRepoPath, 'docs/examples');
  const packageJsonPath = join(findPlusRepoPath, 'package.json');

  console.log(`🔍 从 ${docsPath} 抓取文档信息`);

  if (!existsSync(docsPath)) {
    console.error(
      `❌ 错误: 未找到 ${docsPath} 目录，请传入正确的 Find-Plus 目录。`
    );
    process.exit(1);
  }

  // 获取版本信息
  let findPlusVersion = 'unknown';
  if (existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
      // Find-Plus 使用 workspace，从 packages/element-plus 获取版本
      const elementPlusPackageJson = join(
        findPlusRepoPath,
        'packages/element-plus/package.json'
      );
      if (existsSync(elementPlusPackageJson)) {
        const epPackage = JSON.parse(readFileSync(elementPlusPackageJson, 'utf-8'));
        findPlusVersion = epPackage.version || 'unknown';
      }
    } catch (error) {
      console.warn('⚠️ 无法读取版本信息');
    }
  }

  // 获取所有组件文档文件
  const componentFiles = await readdir(docsPath);
  const mdFiles = componentFiles.filter(
    (file) =>
      file.endsWith('.md') &&
      !file.startsWith('_') &&
      file !== 'style.md' &&
      file !== 'color.md' &&
      file !== 'icon.md'
  );

  console.log(`🙈 共找到 ${mdFiles.length} 个组件\n`);

  const componentDataMap: Record<string, ComponentData> = {};
  let processedCount = 0;

  for (const file of mdFiles) {
    const componentData = await processComponent(docsPath, examplesPath, file);
    if (componentData) {
      componentDataMap[componentData.name] = componentData;
      processedCount++;
    }
  }

  console.log(
    `✅ 成功处理了 ${processedCount} 个组件，共 ${mdFiles.length} 个`
  );

  // 创建元数据
  const metaDataResult: MetaDataResult = {
    extractedAt: new Date().toISOString(),
    extractedCount: processedCount,
    componentCount: mdFiles.length,
    findPlusVersion,
  };

  // 创建组件列表索引
  const componentsIndex: ComponentIndex = Object.values(componentDataMap).map(
    ({ name, dirName, title, description }) => ({
      name,
      dirName,
      title,
      description,
    })
  );

  await writeJsonFile(EXTRACTED_COMPONENTS_LIST_PATH, componentsIndex);
  await writeJsonFile(EXTRACTED_METADATA_PATH, metaDataResult);

  // 创建组件目录
  await mkdir(EXTRACTED_COMPONENTS_DATA_PATH, { recursive: true });

  // 将组件数据写入对应目录
  for (const componentData of Object.values(componentDataMap)) {
    const componentDir = join(
      EXTRACTED_COMPONENTS_DATA_PATH,
      componentData.dirName
    );
    await mkdir(componentDir, { recursive: true });

    // 写入文档
    await writeFile(join(componentDir, DOC_FILE_NAME), componentData.documentation);

    // 写入示例
    let examplesMarkdown = `## ${componentData.name} 组件示例\n\n`;

    componentData.exampleInfoList?.forEach((example) => {
      examplesMarkdown += `### ${example.name}\n\n${example.description}\n\n\`\`\`vue\n${example.code || ''}\`\`\`\n\n`;
    });

    await writeFile(join(componentDir, EXAMPLE_FILE_NAME), examplesMarkdown);
  }

  console.log(`🎉 文档提取完成！数据已保存到 ${EXTRACTED_DATA_DIR}`);
  console.log(`📊 版本信息: Find-Plus ${findPlusVersion}`);
}

export default extractAllData;

