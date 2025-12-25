# ConfigProvider 全局配置

用于全局配置 `Wot` 组件，提供深色模式、主题定制等能力。

## 深色模式

将 ConfigProvider 组件的 `theme` 属性设置为 `dark`，可以开启深色模式。

深色模式会全局生效，使页面上的所有 `Wot` 组件变为深色风格。

:::tip
值得注意的是，开启 `Wot` 的深色模式只会影响 `Wot` 组件的 `UI`，并不会影响全局的文字颜色或背景颜色，你可以参考以下 `CSS` 来设置一些全局样式：
:::

## 动态切换

通过动态设置 `theme` 属性，可以在浅色风格和深色风格之间进行切换。

## 定制主题

`Wot` 组件通过丰富的 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 `CSS` 变量，可以实现定制主题、动态切换主题等效果。

### 示例

这些变量的默认值被定义在 `page` 节点上，如果要转 `H5`，默认值被定义在 `:root` 节点上

### 通过 CSS 覆盖

你可以直接在代码中覆盖这些 `CSS` 变量，`Button` 组件的样式会随之发生改变：

### 通过 ConfigProvider 覆盖

`ConfigProvider` 组件提供了覆盖 `CSS` 变量的能力，你需要在根节点包裹一个 `ConfigProvider` 组件，并通过 `theme-vars` 属性来配置一些主题变量

### 在 TypeScript 中使用
在 TypeScript 中定义 `themeVars` 时，建议使用 **wot-design-uni** 提供的 **ConfigProviderThemeVars** 类型，可以提供完善的类型提示：

:::tip
注意：ConfigProvider 仅影响它的子组件的样式，不影响全局 root 节点。
:::

## 全局共享

> 需要配合虚拟根组件([uni-ku-root](https://github.com/uni-ku/root)) 来做全局共享

### 安装

::: code-group

:::

### 引入

- CLI项目: 直接编辑 根目录下的 vite.config.(js|ts)
- HBuilderX项目: 需要在根目录下 创建 vite.config.(js|ts)

:::tip
若存在改变 pages.json 的插件，需要将 UniKuRoot 放置其后
:::

### 使用

1. 创建根组件并处理全局配置组件

- CLI项目: 在 **src** 目录下创建下 App.ku.vue
- HBuilderX项目: 在 **根** 目录下创建 App.ku.vue

:::tip
在 App.ku.vue 中标签 `<KuRootView />` 代表指定视图存放位置
:::

2. 编写控制主题组合式函数

3. 在任意视图文件中使用切换主题模式

## 外部样式类

| 类名         | 说明       | 最低版本         |
| ------------ | ---------- | ---------------- |
| custom-class | 根节点样式 | 1.3.9 |
| custom-style | 根节点样式 | 1.3.9 |