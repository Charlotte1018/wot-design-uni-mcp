#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
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

async function testExtractButton() {
  const wotDesignUniRepoPath = '../wot-design-uni';
  const docsPath = join(wotDesignUniRepoPath, 'docs/component');
  const componentFileName = 'button.md';
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

  // 从文档中提取示例信息
  const exampleInfoList = extractExamplesFromDoc(handleDocResult);
  
  console.log(`\n📦 提取到 ${exampleInfoList.length} 个示例:\n`);
  exampleInfoList.forEach((example, index) => {
    console.log(`${index + 1}. ${example.name}`);
    console.log(`   描述: ${example.description}`);
    console.log(`   代码长度: ${example.code?.length || 0} 字符`);
    // 如果是 API 章节，显示前几行
    if (example.name.includes('Attributes') || example.name.includes('Events') || example.name.includes('外部样式类')) {
      const preview = example.code?.split('\n').slice(0, 5).join('\n') || '';
      console.log(`   预览: ${preview}...\n`);
    } else {
      console.log('');
    }
  });

  // 移除代码块，只保留文字说明
  handleDocResult = handleDocResult.replace(/```[\s\S]*?```/g, '');
  const documentation = handleDocResult.replace(DOC_CLEANUP_EMPTY_LINE, '\n\n');

  // 保存到文件
  await import('node:fs/promises').then(({ mkdir }) => mkdir(EXTRACTED_DATA_DIR, { recursive: true }));
  await import('node:fs/promises').then(({ mkdir }) => mkdir(EXTRACTED_COMPONENTS_DATA_PATH, { recursive: true }));
  
  const componentDir = join(EXTRACTED_COMPONENTS_DATA_PATH, dirName);
  await import('node:fs/promises').then(({ mkdir }) => mkdir(componentDir, { recursive: true }));

  // 写入文档
  await writeFile(join(componentDir, DOC_FILE_NAME), documentation);
  console.log(`✅ 文档已保存到: ${join(componentDir, DOC_FILE_NAME)}\n`);

  // 写入示例
  let examplesMarkdown = `## ${componentName} 组件示例\n\n`;
  exampleInfoList.forEach((example) => {
    examplesMarkdown += `### ${example.name}\n\n${example.description}\n\n`;
    // 如果是 API 章节，使用 markdown 格式；否则使用 vue 代码块
    if (example.name.toLowerCase().includes('attributes') || 
        example.name.toLowerCase().includes('events') || 
        example.name.includes('外部样式类') ||
        example.name.toLowerCase().includes('slots') ||
        example.name.toLowerCase().includes('exposes') ||
        example.name.toLowerCase().includes('methods')) {
      examplesMarkdown += `${example.code || ''}\n\n`;
    } else {
      // 确保代码块结尾标记另起一行
      const code = example.code || '';
      const codeWithNewline = code.endsWith('\n') ? code : `${code}\n`;
      examplesMarkdown += `\`\`\`vue\n${codeWithNewline}\`\`\`\n\n`;
    }
  });

  await writeFile(join(componentDir, EXAMPLE_FILE_NAME), examplesMarkdown);
  console.log(`✅ 示例已保存到: ${join(componentDir, EXAMPLE_FILE_NAME)}\n`);
}

testExtractButton().catch((error) => {
  console.error('执行失败:', error);
  process.exit(1);
});

