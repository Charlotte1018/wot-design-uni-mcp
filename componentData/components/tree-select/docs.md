# TreeSelect 树形选择

含有下拉菜单的树形选择器，结合了 `fin-tree` 和 `fin-select` 两个组件的功能。

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (e.g: [VitePress](https://vitepress.vuejs.org/)).

:::

## 基础用法

树状选择器

## 选择任意级别

当属性 `check-strictly=true` 时，任何节点都可以被选择，否则只有子节点可被选择。

:::tip

当使用 `show-checkbox`时，由于 `check-on-click-node` 默认值是 false，这时候只能通过 checkbox 来选中，当然您也可以将其设置成 true，这样点击整个 node 都可以用来完成选择

:::

## 多选

通过点击或复选框选择多个选项。

## 禁用选项

使用 disabled 字段禁用选项。

## 可筛选

使用关键字筛选或自定义筛选方法。 `filterMethod`可以自定义数据筛选的方法， `filterNodeMethod`可以自定义节点数据筛选的方法。

## 自定义内容

自定义树节点的内容。

## 懒加载

树节点懒加载，更加适合于数据量大的列表。

## 类型声明

<details>
  <summary>显示类型声明</summary>

```ts
type CacheOption = {
  value: string | number | boolean | object
  currentLabel: string | number
  isDisabled: boolean
}
```

</details>
