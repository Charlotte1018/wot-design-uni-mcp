# Drawer 抽屉

有些时候, `Dialog` 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, `Drawer` 拥有和 `Dialog` 几乎相同的 API, 在 UI 上带来不一样的体验.

:::tip

在 Vue 3 之后的版本 v-model 可以用于任何一个组件，`visible.sync` 已被移除，请使用 `v-model="visibilityBinding"` 来控制抽屉组件的显示和隐藏状态。

:::

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (例如: [VitePress](https://vitepress.vuejs.org/)).

:::

## 不添加 Title

当你不需要标题的时候，你可以将它移除。

## 自定义内容

像 `Dialog` 组件一样，`Drawer` 也可以用来显示多种不同的交互。

## 自定义头部

`header` 可用于自定义显示标题的区域。 为了保持可用性，除了使用此插槽外，使用 `title` 属性，或使用 `titleId` 插槽属性来指定哪些元素应该读取为抽屉标题。

