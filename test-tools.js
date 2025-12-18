#!/usr/bin/env node

// 简单的测试脚本，验证提取的工具是否能正常工作
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function testTools() {
  console.log('🧪 开始测试 Find-Plus MCP 工具...\n');

  // 测试 1: 读取组件索引
  console.log('📝 测试 1: 读取组件索引');
  try {
    const indexPath = join(__dirname, 'componentData/components-index.json');
    const indexData = JSON.parse(await readFile(indexPath, 'utf-8'));
    console.log(`✅ 成功读取 ${indexData.length} 个组件`);
    console.log(`   示例: ${indexData.slice(0, 3).map(c => c.name).join(', ')}...\n`);
  } catch (error) {
    console.error('❌ 读取组件索引失败:', error.message, '\n');
  }

  // 测试 2: 读取元数据
  console.log('📝 测试 2: 读取元数据');
  try {
    const metadataPath = join(__dirname, 'componentData/metadata.json');
    const metadata = JSON.parse(await readFile(metadataPath, 'utf-8'));
    console.log(`✅ 提取时间: ${metadata.extractedAt}`);
    console.log(`   版本: Find-Plus ${metadata.findPlusVersion}`);
    console.log(`   组件数: ${metadata.extractedCount}\n`);
  } catch (error) {
    console.error('❌ 读取元数据失败:', error.message, '\n');
  }

  // 测试 3: 读取 Button 组件文档
  console.log('📝 测试 3: 读取 Button 组件文档');
  try {
    const buttonDocPath = join(__dirname, 'componentData/components/button/docs.md');
    const buttonDoc = await readFile(buttonDocPath, 'utf-8');
    console.log(`✅ Button 文档长度: ${buttonDoc.length} 字符`);
    console.log(`   开头: ${buttonDoc.substring(0, 50).replace(/\n/g, ' ')}...\n`);
  } catch (error) {
    console.error('❌ 读取 Button 文档失败:', error.message, '\n');
  }

  // 测试 4: 读取 Button 组件示例
  console.log('📝 测试 4: 读取 Button 组件示例');
  try {
    const buttonExamplesPath = join(__dirname, 'componentData/components/button/examples.md');
    const buttonExamples = await readFile(buttonExamplesPath, 'utf-8');
    const exampleCount = (buttonExamples.match(/###/g) || []).length;
    console.log(`✅ Button 示例数量: ${exampleCount} 个`);
    console.log(`   示例文档长度: ${buttonExamples.length} 字符\n`);
  } catch (error) {
    console.error('❌ 读取 Button 示例失败:', error.message, '\n');
  }

  // 测试 5: 检查 Vue 代码块
  console.log('📝 测试 5: 检查 Vue 代码块格式');
  try {
    const buttonExamplesPath = join(__dirname, 'componentData/components/button/examples.md');
    const buttonExamples = await readFile(buttonExamplesPath, 'utf-8');
    const vueBlocks = buttonExamples.match(/```vue[\s\S]*?```/g) || [];
    console.log(`✅ 找到 ${vueBlocks.length} 个 Vue 代码块`);
    if (vueBlocks.length > 0) {
      const firstBlock = vueBlocks[0];
      const hasTemplate = firstBlock.includes('<template>');
      const hasScript = firstBlock.includes('<script');
      console.log(`   示例代码包含: template=${hasTemplate}, script=${hasScript}\n`);
    }
  } catch (error) {
    console.error('❌ 检查 Vue 代码块失败:', error.message, '\n');
  }

  console.log('🎉 测试完成！');
  console.log('\n💡 下一步：');
  console.log('   1. 配置 Claude Desktop');
  console.log('   2. 在 Claude 中尝试: "Find-Plus 有哪些组件？"');
  console.log('   3. 或者: "显示 Button 组件的文档"');
}

testTools().catch(console.error);

