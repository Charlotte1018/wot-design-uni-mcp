import { loadComponentsList } from '../utils/components.js';

/**
 * 列出所有 Find-Plus 组件
 */
export async function listComponents() {
  const components = await loadComponentsList();

  if (components.length === 0) {
    return '未找到任何组件，请先执行 extract 命令提取组件文档';
  }

  // 格式化组件列表
  const formattedList = components
    .map((component) => {
      let info = `- **${component.name}**`;
      if (component.title) {
        info += ` (${component.title})`;
      }
      if (component.description) {
        info += `\n  ${component.description}`;
      }
      return info;
    })
    .join('\n\n');

  return `## Find-Plus 可用组件列表\n\n共 ${components.length} 个组件：\n\n${formattedList}`;
}

