import { listComponentExamples } from '../utils/components.js';

/**
 * 获取 Find-Plus 特定组件的代码示例
 */
export async function getComponentExamples(componentName: string) {
  if (!componentName) {
    return '请提供组件名称';
  }

  return await listComponentExamples(componentName);
}

