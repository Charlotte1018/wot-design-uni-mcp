# Button 按钮

按钮用于触发一个操作，如提交表单或打开链接。

## 基本用法

基本按钮。

## 禁用

设置 `disabled` 属性。

## 幽灵按钮

设置 `plain` 属性。

## 细边框幽灵按钮

设置 `hairline` 属性。

## 按钮大小

设置 `size` ，支持 'small'、'medium'、'large'，默认为 'medium'。

## 加载中按钮

设置 `loading` 属性，让按钮处于加载中状态。加载中的按钮是禁止点击的。

## 文字按钮

将 `type` 设置为 `text`。文字按钮不支持其他颜色。

## 图标按钮

将 `type` 设置为 `icon`，同时设置 `icon` 属性，icon 为图标的类名，可以直接使用 `Icon 图标` 章节中的图标类名。

## 带图标的按钮

设置 `icon` 属性，不需要设置 `type` 为 `icon`，即可以直接使用带图标的按钮。

结合`classPrefix`可以使用自定义图标，参见 [Icon 自定义图标](/component/icon#自定义图标)。

## 块状按钮

设置 `block` 属性。

## 自定义样式

通过 `custom-class` 和 `custom-style` 属性可以自定义按钮的样式，这里我们使用`custom-class`给按钮添加一个 `Material Design 3` 风格的`box-shadow`。

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
