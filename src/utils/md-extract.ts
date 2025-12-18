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
 * 从 :::demo 标记中提取示例信息
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

