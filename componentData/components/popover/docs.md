# Popover 气泡卡片

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (例如: [VitePress](https://vitepress.vuejs.org/)).

:::

## 基础用法

与Tooltip相似，Popover也是基于`ElPopper`的构建。 因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。

## 内容可扩展

可以在 Popover 中嵌套其它组件， 以下为嵌套表格的例子。

## 嵌套操作

当然，你还可以嵌套操作， 它比使用dialog更加轻量。

## 指令

您可以使用指令性方式弹出窗口，但这种方法**不再推荐** ，因为这使得应用程序变得复杂， 您可以参考虚拟触发来实现一样的效果。

