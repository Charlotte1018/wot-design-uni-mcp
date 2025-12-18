# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (e.g: [VitePress](https://vitepress.vuejs.org/)).

:::

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::tip

`before-close` 只会在用户点击关闭按钮或者对话框的遮罩区域时被调用。 如果你在 `footer` 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 `before-close` 的相关逻辑。

:::

## 自定义内容

对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 FinD Plus 的表格和表单。

## 自定义头部

`header` 可用于自定义显示标题的区域。 为了保持可用性，除了使用此插槽外，使用 `title` 属性，或使用 `titleId` 插槽属性来指定哪些元素应该读取为对话框标题。

## 嵌套的对话框

如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 `append-to-body` 属性。

## 内容居中

对话框的内容可以居中。

:::tip

Dialog 的内容是懒渲染的——在被第一次打开之前，传入的默认 slot 不会被立即渲染到 DOM 上。 因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。

:::

## 居中对话框

从屏幕中心打开对话框。

## 关闭时销毁

启用此功能时，默认栏位下的内容将使用 `v-if` 指令销毁。 当出现性能问题时，可以启用此功能。

## 可拖拽对话框

试着拖动一下`header`部分吧

:::tip

当 `modal` 的值为 false 时，请一定要确保 `append-to-body` 属性为 **true**，由于 `Dialog` 使用 `position: relative` 定位，当外层的遮罩层被移除时，`Dialog` 则会根据当前 DOM 上的祖先节点来定位，因此可能造成定位问题。

:::

## FAQ

#### 在 SFC 文件中使用对话框，scope 样式不会生效。

典型议题：[#10515](https://github.com/element-plus/element-plus/issues/10515)

PS：既然对话框是使用 `Teleport` 渲染的，建议在全局范围写入根节点的样式。

#### 当对话框被显示及隐藏时，页面元素会来回移动（抖动）。

典型议题：[#10481](https://github.com/element-plus/element-plus/issues/10481)

PS：建议将滚动区域放置在一个挂载的 vue 节点，如 `<div id="app" />` 下，并对 body 使用 `overflow: hidden` 样式。
