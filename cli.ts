#!/usr/bin/env node
import { fileURLToPath } from 'node:url';
import extractAllData from './src/scripts/extract-docs.js';

const args = process.argv.slice(2);
const command = args[0];

async function main() {
  if (command === 'extract') {
    const repoPath = args[1] || './find-plus';
    console.log(`📦 开始从 ${repoPath} 提取 Find-Plus 组件文档...`);
    await extractAllData(repoPath);
  } else {
    // 默认启动 MCP 服务器
    await import('./src/server.js');
  }
}

main().catch((error) => {
  console.error('执行失败:', error);
  process.exit(1);
});

