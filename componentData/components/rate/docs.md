# Rate 评分

用于评分

## 基础用法

## 尺寸

## 允许半选

## 辅助文字

用辅助文字直接地表达对应分数

## 可清空

## 更多种类的图标

当有多层评价时，可以用不同类型的图标区分评分层级。

## 只读

只读的评分用来展示分数， 允许出现半星。

## 自定义样式

您可以为 rate 组件设定自定义样式。 使用 `css` 或 `scss` 改变全局或局部的颜色。 我们设置了一些全局颜色变量：`--fin-rate-void-color`、`--fin-rate-fill-color`、`--fin-rate-disabled-void-color` 和 `--fin-rate-text-color`。 您可以像这样使用：`:root { --fin-rate-void-color: red; --fin-rate-fill-color: blue; }`。

### 默认变量

| 变量                            | 默认颜色                          |
| ----------------------------- | ----------------------------- |
| --fin-rate-void-color          | var(--fin-border-color-darker) |
| --fin-rate-fill-color          | #f7ba2a                       |
| --fin-rate-disabled-void-color | var(--fin-fill-color)          |
| --fin-rate-text-color          | var(--fin-text-color-primary)  |
