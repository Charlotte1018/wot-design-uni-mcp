# Empty 空状态

空状态时的占位提示。

## 基础用法

## 自定义图片

通过设置 `image` 属性传入图片 URL。

## 图片尺寸

通过使用 `image-size` 属性来控制图片大小。

## 底部内容

使用默认插槽可在底部插入内容。

## 自定义样式

您可以为empty组件设置自定义样式。 使用 `css/scss` 语言来更改全局或局部颜色。 我们设置了一些全局颜色变量：`--fin-empty-fill-color-0`、`--fin-empty-fill-color-1`、`--fin-empty-fill-color-2`、……、`--fin-empty-fill-color-9`。 您可以使用类似 `:root { --fin-empty-fill-color-0: red; --fin-empty-fill-color-1: blue; }` 等变量。 但通常，如果你想要更改样式，你需要更改所有颜色，因为这些颜色是一个组合。

### 默认变量

| 变量                      | 颜色                    |
| ----------------------- | --------------------- |
| --fin-empty-fill-color-0 | var(--fin-color-white) |
| --fin-empty-fill-color-1 | #fcfcfd               |
| --fin-empty-fill-color-2 | #f8f9fb               |
| --fin-empty-fill-color-3 | #f7f8fc               |
| --fin-empty-fill-color-4 | #eeeff3               |
| --fin-empty-fill-color-5 | #edeef2               |
| --fin-empty-fill-color-6 | #e9ebef               |
| --fin-empty-fill-color-7 | #e5e7e9               |
| --fin-empty-fill-color-8 | #e0e3e9               |
| --fin-empty-fill-color-9 | #d5d7de               |
