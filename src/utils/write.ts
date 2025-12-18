import { writeFile } from 'node:fs/promises';

/**
 * 将 JSON 数据写入文件
 */
export async function writeJsonFile(filePath: string, data: any) {
  try {
    await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`✅ 已写入: ${filePath}`);
  } catch (error) {
    console.error(`❌ 写入失败: ${filePath}`, error);
    throw error;
  }
}

