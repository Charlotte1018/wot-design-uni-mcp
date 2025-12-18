# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

:::tip

组件默认使用 Flex 布局，不需要手动设置 `type="flex"`。

请注意父容器避免使用 `inline` 相关样式，会导致组件宽度不能撑满。

:::

## 基础布局

使用列创建基础网格布局。

## 分栏间隔

支持列间距。

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

## 列偏移

您可以指定列偏移量。

## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

## 基于断点的隐藏类

FinD Plus 额外提供了一系列类名，用于在某些条件下隐藏元素。 这些类名可以添加在任何 DOM 元素或自定义组件上。 如果需要，请自行引入以下文件：

```js
import '@jdt/find-plus/theme-chalk/display.css'
```

这些类名为：

- `hidden-xs-only` - 当视口在 `xs` 尺寸时隐藏
- `hidden-sm-only` - 当视口在 `sm` 尺寸时隐藏
- `hidden-sm-and-down` - 当视口在 `sm` 及以下尺寸时隐藏
- `hidden-sm-and-up` - 当视口在 `sm` 及以上尺寸时隐藏
- `hidden-md-only` - 当视口在 `md` 尺寸时隐藏
- `hidden-md-and-down` - 当视口在 `md` 及以下尺寸时隐藏
- `hidden-md-and-up` - 当视口在 `md` 及以上尺寸时隐藏
- `hidden-lg-only` - 当视口在 `lg` 尺寸时隐藏
- `hidden-lg-and-down` - 当视口在 `lg` 及以下尺寸时隐藏
- `hidden-lg-and-up` - 当视口在 `lg` 及以上尺寸时隐藏
- `hidden-xl-only` - 当视口在 `xl` 尺寸时隐藏
