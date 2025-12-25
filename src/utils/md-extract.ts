/**
 * 将短横线分隔的字符串转换为帕斯卡命名法(PascalCase)
 * @example toPascalCase("find-button") => "FindButton"
 */
export const toPascalCase = (str: string) => {
  return str
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

/**
 * 移除 markdown 中的 YAML frontmatter
 */
export const removeFrontmatter = (content: string) => {
  return content.replace(/^---\n([\s\S]*?)\n---\n+/, '');
};

/**
 * 从 Markdown 中提取指定部分
 * @param markdown 要提取的 Markdown 内容
 * @param startMatch 要提取的部分的起始标记
 * @param endMatch 要提取的部分的结束标记，默认是下一个 ## 标题
 * @returns 提取的部分内容，如果未找到则返回 undefined
 */
export const extractSection = (
  markdown: string,
  startMatch: string,
  endMatch: RegExp = /\n## [^#]/
) => {
  const startIndex = markdown.indexOf(startMatch);

  if (startIndex !== -1) {
    let startPos = startIndex + 1;
    let endPos = markdown.length;

    // 查找下一个 ## 标题（但不是 ### 标题）
    const nextHeadingMatch = markdown.slice(startPos).match(endMatch);

    if (nextHeadingMatch?.index !== undefined && nextHeadingMatch.index >= 0) {
      endPos = startPos + nextHeadingMatch.index;
    }

    // 提取完整的指定部分
    return markdown.slice(startIndex, endPos).trim();
  }

  return undefined;
};

/**
 * 移除指定部分
 * @param markdown 要处理的 Markdown 内容
 * @param startMatch 要移除的部分的起始标记
 * @param endMatch 要移除的部分的结束标记
 * @returns 移除后的内容
 */
export const removeSection = (
  markdown: string,
  startMatch: string,
  endMatch: RegExp = /\n## [^#]/
) => {
  const section = extractSection(markdown, startMatch, endMatch);

  if (section) {
    return markdown.replace(section, '');
  }
  return markdown;
};

/**
 * 从 :::demo 标记中提取示例信息（Find-Plus 格式）
 * @param markdown Markdown 内容
 * @returns 示例信息数组
 */
export const extractDemoBlocks = (markdown: string) => {
  // 匹配 :::demo 块: :::demo 描述\n组件名/示例名\n:::
  const demoRegex = /:::demo\s*(.*?)\n\n([\w-]+\/[\w-]+)\n\n:::/g;
  const demos: Array<{ name: string; description: string; path: string }> = [];

  let match;
  while ((match = demoRegex.exec(markdown)) !== null) {
    const description = match[1].trim();
    const path = match[2].trim();
    const name = path.split('/')[1]; // 获取示例名称

    demos.push({
      name,
      description,
      path,
    });
  }

  return demos;
};

/**
 * 从 Wot-Design-Uni 格式的文档中提取示例信息
 * 格式：## 标题\n描述\n```html\n代码\n```\n```scss\n样式\n```
 * @param markdown Markdown 内容
 * @returns 示例信息数组，包含 name、description 和 code
 */
export const extractExamplesFromDoc = (markdown: string) => {
  const examples: Array<{ name: string; description: string; code?: string }> = [];
  
  // 匹配所有 ## 标题开头的部分
  // 使用更宽松的匹配，不依赖行首锚点
  const sectionRegex = /(?:^|\n)## ([^\n]+)\n([\s\S]*?)(?=\n## |$)/g;
  
  let match;
  while ((match = sectionRegex.exec(markdown)) !== null) {
    const title = match[1].trim();
    const content = match[2].trim();
    
    // 处理 API 相关章节（Attributes、Events、外部样式类等）
    if (
      title.includes('Attributes') ||
      title.includes('Events') ||
      title.includes('Slots') ||
      title.includes('Exposes') ||
      title.includes('Methods') ||
      title.includes('外部样式类') ||
      title.includes(' API')
    ) {
      // 提取整个表格部分（匹配所有以 | 开头的连续行，直到遇到空行或非表格行）
      // 表格格式：| 列1 | 列2 | ... |
      // 匹配所有连续的表格行（包括表头、分隔行和数据行）
      const tableLines: string[] = [];
      const lines = content.split('\n');
      let inTable = false;
      
      for (const line of lines) {
        const trimmedLine = line.trim();
        // 如果行以 | 开头，说明是表格行
        if (trimmedLine.startsWith('|')) {
          tableLines.push(line);
          inTable = true;
        } else if (inTable && trimmedLine === '') {
          // 遇到空行，表格结束
          break;
        } else if (inTable && !trimmedLine.startsWith('|')) {
          // 遇到非表格行，表格结束
          break;
        }
      }
      
      if (tableLines.length > 0) {
        // 提取表格前的描述文字（标题后的第一段非空文字）
        const firstTableLineIndex = lines.findIndex(line => line.trim().startsWith('|'));
        const descText = lines.slice(0, firstTableLineIndex).join('\n').trim();
        // 移除开头的空行，提取实际描述
        const description = descText.split('\n').find(line => line.trim() && !line.startsWith('|'))?.trim() || title;
        
        // 组合所有表格行
        const tableContent = tableLines.join('\n').trim();
        
        examples.push({
          name: title,
          description: description,
          code: tableContent,
        });
      }
      continue;
    }
    
    // 提取描述（标题后的第一段文字，直到代码块或空行）
    const descriptionMatch = content.match(/^([^`\n]+(?:\n(?!```)[^`\n]+)*?)(?=\n```|\n\n|$)/s);
    const description = descriptionMatch 
      ? descriptionMatch[1].trim().replace(/\n+/g, ' ').trim()
      : title;
    
    // 提取所有代码块（html、scss、vue 等）
    const htmlBlocks: string[] = [];
    const styleBlocks: string[] = [];
    const scriptBlocks: string[] = [];
    
    const codeBlockRegex = /```(html|scss|css|vue|javascript|js|ts|typescript)?\n([\s\S]*?)```/g;
    
    let codeMatch;
    while ((codeMatch = codeBlockRegex.exec(content)) !== null) {
      const lang = (codeMatch[1] || '').toLowerCase();
      const code = codeMatch[2].trim();
      
      if (lang === 'html' || lang === 'vue' || !lang) {
        // HTML/Vue 代码，作为 template 部分
        htmlBlocks.push(code);
      } else if (lang === 'scss' || lang === 'css') {
        // 样式代码，作为 style 部分
        styleBlocks.push(code);
      } else {
        // 其他代码（js/ts），作为 script 部分
        scriptBlocks.push(code);
      }
    }
    
    // 如果没有找到代码块，跳过这个示例
    if (htmlBlocks.length === 0 && styleBlocks.length === 0 && scriptBlocks.length === 0) {
      continue;
    }
    
    // 组合代码块
    const parts: string[] = [];
    
    // Template 部分
    if (htmlBlocks.length > 0) {
      parts.push(`<template>\n${htmlBlocks.join('\n\n')}\n</template>`);
    } else {
      parts.push(`<template>\n</template>`);
    }
    
    // Script 部分
    if (scriptBlocks.length > 0) {
      parts.push(`<script lang="ts" setup>\n${scriptBlocks.join('\n\n')}\n</script>`);
    } else {
      parts.push(`<script lang="ts" setup>\n</script>`);
    }
    
    // Style 部分
    if (styleBlocks.length > 0) {
      parts.push(`<style lang="scss">\n${styleBlocks.join('\n\n')}\n</style>`);
    }
    
    examples.push({
      name: title,
      description: description || title,
      code: parts.join('\n\n'),
    });
  }
  
  return examples;
};

