# Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (e.g: [VitePress](https://vitepress.vuejs.org/)).

:::

## 基础用法

有两种触发子菜单的方式

## 可清空

通过 `clearable` 设置输入框可清空

## 仅显示最后一级

可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。

## 多选

在标签中添加 `:props="props"` 并设置 `props = { multiple: true }` 来开启多选模式。

正确用法：

```html
<template>
  <fin-cascader :props="props" />
</template>
<script lang="ts">
  export default {
    setup() {
      return {
        props: {
          // props.
          multiple: true,
        },
      }
    },
  }
</script>
```

错误用法：

```html
<template>
  <!--  Object literal binging here is invalid syntax for cascader  -->
  <fin-cascader :props="{ multiple: true }" />
</template>
```

## 选择任意一级选项

在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。 启用该功能后，可让父子节点取消关联，选择任意一级选项。

## 动态加载

当选中某一级时，动态加载该级下的选项。

## 可搜索

可以快捷地搜索选项并选择。

## 自定义节点内容

可以自定义备选项的节点内容

## 级联面板

级联面板是级联选择器的核心组件，与级联选择器一样，有单选、多选、动态加载等多种功能。

## CascaderProps

| 属性             | 说明                                                   | 类型                                                     | 默认值      |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------ | -------- |
| expandTrigger  | 次级菜单的展开方式                                            | ^[enum]`'click' \| 'hover'`                           | click    |
| multiple       | 是否多选                                                 | ^[boolean]                                             | false    |
| checkStrictly  | 是否严格的遵守父子节点不互相关联                                     | ^[boolean]                                             | false    |
| emitPath       | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | ^[boolean]                                             | true     |
| lazy           | 是否动态加载子节点，需与 lazyLoad 方法结合使用                         | ^[boolean]                                             | false    |
| lazyLoad       | 加载动态数据的方法，仅在 lazy 为 true 时有效                         | ^[Function]`(node: Node, resolve: Resolve) => void` | —        |
| value          | 指定选项的值为选项对象的某个属性值                                    | ^[string]                                              | value    |
| label          | 指定选项标签为选项对象的某个属性值                                    | ^[string]                                              | label    |
| children       | 指定选项的子选项为选项对象的某个属性值                                  | ^[string]                                              | children |
| disabled       | 指定选项的禁用为选项对象的某个属性值                                   | ^[string]                                              | disabled |
| leaf           | 指定选项的叶子节点的标志位为选项对象的某个属性值                             | ^[string]                                              | leaf     |
| hoverThreshold | hover 时展开菜单的灵敏度阈值                                    | ^[number]                                              | 500      |

## 类型声明

<details>
  <summary>显示类型声明</summary>

```ts
type CascaderNodeValue = string | number
type CascaderNodePathValue = CascaderNodeValue[]
type CascaderValue =
  | CascaderNodeValue
  | CascaderNodePathValue
  | (CascaderNodeValue | CascaderNodePathValue)[]

type Resolve = (data: any) => void

type ExpandTrigger = 'click' | 'hover'

type LazyLoad = (node: Node, resolve: Resolve) => void

type isDisabled = (data: CascaderOption, node: Node) => boolean

type isLeaf = (data: CascaderOption, node: Node) => boolean

interface CascaderOption extends Record<string, unknown> {
  label?: string
  value?: CascaderNodeValue
  children?: CascaderOption[]
  disabled?: boolean
  leaf?: boolean
}

interface CascaderProps {
  expandTrigger?: ExpandTrigger
  multiple?: boolean
  checkStrictly?: boolean
  emitPath?: boolean
  lazy?: boolean
  lazyLoad?: LazyLoad
  value?: string
  label?: string
  children?: string
  disabled?: string | isDisabled
  leaf?: string | isLeaf
  hoverThreshold?: number
}

class Node {
  readonly uid: number
  readonly level: number
  readonly value: CascaderNodeValue
  readonly label: string
  readonly pathNodes: Node[]
  readonly pathValues: CascaderNodePathValue
  readonly pathLabels: string[]

  childrenData: ChildrenData
  children: Node[]
  text: string
  loaded: boolean
  /**
   * Is it checked
   *
   * @default false
   */
  checked: boolean
  /**
   * Used to indicate the intermediate state of unchecked and fully checked child nodes
   *
   * @default false
   */
  indeterminate: boolean
  /**
   * Loading Status
   *
   * @default false
   */
  loading: boolean

  // getter
  isDisabled: boolean
  isLeaf: boolean
  valueByOption: CascaderNodeValue | CascaderNodePathValue

  // method
  appendChild(childData: CascaderOption): Node
  calcText(allLevels: boolean, separator: string): string
  broadcast(event: string, ...args: unknown[]): void
  emit(event: string, ...args: unknown[]): void
  onParentCheck(checked: boolean): void
  onChildCheck(): void
  setCheckState(checked: boolean): void
  doCheck(checked: boolean): void
}

Node as CascaderNode
```

</details>
