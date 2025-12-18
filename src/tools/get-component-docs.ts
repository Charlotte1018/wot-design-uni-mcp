import { getComponentDocumentation } from '../utils/components.js';

/**
 * 获取 Find-Plus 特定组件的文档
 */
export async function getComponentDocs(componentName: string) {
  if (!componentName) {
    return '请提供组件名称';
  }

  return await getComponentDocumentation(componentName);
}

