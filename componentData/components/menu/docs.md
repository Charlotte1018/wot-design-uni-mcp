# Menu 菜单

为网站提供导航功能的菜单。

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (e.g: [VitePress](https://vitepress.vuejs.org/)).

:::

## 顶栏

顶部栏菜单可以在各种场景中使用。

## 左右

## 侧栏

垂直菜单，可内嵌子菜单。

## Collapse 折叠面板

垂直导航菜单可以被折叠

## Menu Methods

| 方法名   | 说明             | 参数                            |
| ----- | -------------- | ----------------------------- |
| open  | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |
