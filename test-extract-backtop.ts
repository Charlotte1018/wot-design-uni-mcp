#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, basename } from 'node:path';
import {
  DOC_FILE_NAME,
  EXAMPLE_FILE_NAME,
  EXTRACTED_COMPONENTS_DATA_PATH,
  EXTRACTED_DATA_DIR,
} from './src/constants/path.js';
import {
  extractExamplesFromDoc,
  removeFrontmatter,
  toPascalCase,
} from './src/utils/md-extract.js';
import { parseMDMatter } from './src/utils/matter-parse.js';

// 清理不需要的内容，减少上下文
const DOC_CLEANUP_EMPTY_LINE = /\n{3,}/g;

async function testExtractBacktop() {
  const wotDesignUniRepoPath = '../wot-design-uni';
  const docsPath = join(wotDesignUniRepoPath, 'docs/component');
  const componentFileName = 'backtop.md';
  const componentDocPath = join(docsPath, componentFileName);
  const dirName = basename(componentFileName, '.md');

  if (!existsSync(componentDocPath)) {
    console.error(`❌ 文档不存在: ${componentDocPath}`);
    return;
  }

  const componentName = toPascalCase(dirName);
  console.log(`📝 正在处理 ${componentName}...\n`);

  // 读取并解析文档
  const docContent = await readFile(componentDocPath, 'utf-8');
  const mdMatter = await parseMDMatter(componentDocPath);
  
  const title = mdMatter?.title;
  const description = docContent.split('\n').find(line => 
    line.trim() && !line.startsWith('#') && !line.startsWith('---')
  )?.trim();

  console.log(`标题: ${title || '未找到'}`);
  console.log(`描述: ${description || '未找到'}\n`);

  // 处理文档内容
  let handleDocResult = removeFrontmatter(docContent);
  
  // 移除 API 部分
  const apiIndex = handleDocResult.indexOf('## ');
  if (apiIndex !== -1) {
    const sections = handleDocResult.split(/(?=\n## )/);
    const filteredSections = sections.filter(section => {
      const trimmed = section.trim();
      return !trimmed.startsWith('## ') || 
             (!trimmed.includes(' API') && 
              !trimmed.includes('Attributes') && 
              !trimmed.includes('Events') && 
              !trimmed.includes('Slots') &&
              !trimmed.includes('Exposes') &&
              !trimmed.includes('外部样式类'));
    });
    handleDocResult = filteredSections.join('\n');
  }

  // 从文档中提取示例信息
  const exampleInfoList = extractExamplesFromDoc(handleDocResult);
  
  console.log(`\n📦 提取到 ${exampleInfoList.length} 个示例:\n`);
  exampleInfoList.forEach((example, index) => {
    console.log(`${index + 1}. ${example.name}`);
    console.log(`   描述: ${example.description}`);
    console.log(`   代码长度: ${example.code?.length || 0} 字符\n`);
  });

  // 移除代码块，只保留文字说明
  handleDocResult = handleDocResult.replace(/```[\s\S]*?```/g, '');
  const documentation = handleDocResult.replace(DOC_CLEANUP_EMPTY_LINE, '\n\n');

  // 保存到文件
  await mkdir(EXTRACTED_DATA_DIR, { recursive: true });
  await mkdir(EXTRACTED_COMPONENTS_DATA_PATH, { recursive: true });
  
  const componentDir = join(EXTRACTED_COMPONENTS_DATA_PATH, dirName);
  await mkdir(componentDir, { recursive: true });

  // 写入文档
  await writeFile(join(componentDir, DOC_FILE_NAME), documentation);
  console.log(`✅ 文档已保存到: ${join(componentDir, DOC_FILE_NAME)}\n`);

  // 写入示例
  let examplesMarkdown = `## ${componentName} 组件示例\n\n`;
  exampleInfoList.forEach((example) => {
    examplesMarkdown += `### ${example.name}\n\n${example.description}\n\n\`\`\`vue\n${example.code || ''}\`\`\`\n\n`;
  });

  await writeFile(join(componentDir, EXAMPLE_FILE_NAME), examplesMarkdown);
  console.log(`✅ 示例已保存到: ${join(componentDir, EXAMPLE_FILE_NAME)}\n`);

  // 显示第一个示例的代码预览
  if (exampleInfoList.length > 0 && exampleInfoList[0].code) {
    console.log('📄 第一个示例代码预览:\n');
    console.log('─'.repeat(60));
    const preview = exampleInfoList[0].code.split('\n').slice(0, 30).join('\n');
    console.log(preview);
    if (exampleInfoList[0].code.split('\n').length > 30) {
      console.log('... (更多内容)');
    }
    console.log('─'.repeat(60));
  }
}

testExtractBacktop().catch((error) => {
  console.error('执行失败:', error);
  process.exit(1);
});

