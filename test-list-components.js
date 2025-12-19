#!/usr/bin/env node

// 测试 list-components 工具
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('=== 测试路径计算 ===');
console.log('当前 __dirname:', __dirname);

// 模拟 dist 目录中的情况
const distPath = join(__dirname, 'dist');
const distSrcPath = join(__dirname, 'dist', 'src');

console.log('\n测试从 dist 目录计算:');
console.log('dist 路径:', distPath);
console.log('包含 /dist:', distPath.includes('/dist'));
console.log('计算的项目根目录:', distPath.split('/dist')[0]);

console.log('\n测试从 dist/src 目录计算:');
console.log('dist/src 路径:', distSrcPath);
console.log('包含 /dist:', distSrcPath.includes('/dist'));
console.log('计算的项目根目录:', distSrcPath.split('/dist')[0]);

// 导入并测试路径常量
console.log('\n=== 测试路径常量 ===');

try {
  const { EXTRACTED_COMPONENTS_LIST_PATH } = await import('./dist/chunk-776B67GN.js');
  
  console.log('组件列表文件路径:', EXTRACTED_COMPONENTS_LIST_PATH);
  
  const fs = await import('node:fs');
  console.log('文件是否存在:', fs.existsSync(EXTRACTED_COMPONENTS_LIST_PATH));
  
  if (fs.existsSync(EXTRACTED_COMPONENTS_LIST_PATH)) {
    const content = fs.readFileSync(EXTRACTED_COMPONENTS_LIST_PATH, 'utf-8');
    const data = JSON.parse(content);
    console.log('✅ 成功读取组件列表！');
    console.log('组件数量:', data.length);
    console.log('前 3 个组件:', data.slice(0, 3).map(c => c.name).join(', '));
  } else {
    console.error('❌ 组件列表文件不存在！');
    console.log('期望路径:', EXTRACTED_COMPONENTS_LIST_PATH);
    console.log('实际存在的路径:', join(__dirname, 'componentData', 'components-index.json'));
  }
} catch (error) {
  console.error('❌ 测试失败:', error.message);
}

