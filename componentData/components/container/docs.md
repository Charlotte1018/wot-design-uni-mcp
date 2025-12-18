# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<fin-container>`：外层容器。 当子元素中包含 `<fin-header>` 或 `<fin-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<fin-header>`：顶栏容器。

`<fin-aside>`：侧边栏容器。

`<fin-main>`：主要区域容器。

`<fin-footer>`：底栏容器。

:::tip

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<fin-container>`的直接子元素必须是后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 `<fin-container>`

:::

## 常见页面布局

<style lang="scss">
@use '../../examples/container/common-layout.scss';
</style>

## 例子

