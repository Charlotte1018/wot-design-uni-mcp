import matter from 'gray-matter';
import { readFile } from 'node:fs/promises';

/**
 * 解析 Markdown 文件的 frontmatter
 */
export async function parseMDMatter(filePath: string) {
  try {
    const content = await readFile(filePath, 'utf-8');
    const { data } = matter(content);
    return data;
  } catch (error) {
    console.error(`解析 frontmatter 失败: ${filePath}`, error);
    return null;
  }
}

