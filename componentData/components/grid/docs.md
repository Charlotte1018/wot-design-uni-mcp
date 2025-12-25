# Grid 宫格

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

## 基础用法

基础用法需要绑定 `icon` 值以及 `text` 属性。默认显示一行。

`icon` 为 `wd-icon` 标签中的 `name` 属性。

## 自定义列数

`column` 可以用来自定义宫格列数。未定义 `column` 属性时，默认显示为一行，定义该属性后，组件内部根据 `column` 属性自行划分行数。

## 自定义背景颜色

`bg-color` 可以用来自定义宫格背景颜色。

## 开启边框

`border` 可以用来开启边框线展示。

## 内容插槽

通过默认插槽可以自定义 `GridItem` 的内容。

## 单个插槽

通过插槽 `icon` 可以插入 `GridItem` 中的图标位。

通过插槽 `text` 可以插入 `GridItem` 中的文字位。

注意:

1. 使用单个插槽或者自定义样式时，需要用户使用 `custom-class` 控制 每一个 `GridItem` 的高度，保证每一个 `GridItem` 的高度相同且符合用户预期。

2. 使用 icon 插槽时，如果插槽大小超过`icon-size`设置的值时，需要调整`icon-size`属性使其大小等于插槽尺寸。

## 自定义样式

通过设置 `custom-class` 可以自定义 `GridItem` 的样式。

可以在 `custom-class` 样式属性中设定 `GridItem` 的宽、高度等属性。

注意:

- 设定宽高这类可能会影响布局的属性时，请将 `custom-class` 作用到当前 `Grid` 下的所有 `GridItem` 以确保所有 `GridItem` 样式相同。

- **如果想改变 `GridItem` 高度, 不要直接设置 `Grid` 的高度, 修改单独的** `GridItem`。

- **如果想改变 `icon` 大小设置 `icon-size` 属性, `custom-icon` 不能改变当前 icon 宽高。**

## 正方形格子

通过 `square` 属性开启正方形格属性。此时显示每一个 `GridItem` 都为正方形。

注意: 使用 `square` 不要自定义 `GridItem` 的高度样式。

## 设定格间隙

通过 `gutter` 属性设置格子之间的距离。

## 页面导航

通过 `clickable` 属性开启可点击状态, 可以绑定 `click` 事件。

通过 `link-type` 属性设置页面跳转方式。

通过 `url` 属性设置跳转链接, 通过 `url` 属性设置 URL 跳转链接。

## 提示信息

设置 `is-dot` 属性后，会在图标右上角展示一个小红点。

设置 `type` | `max` | `value` , 使用方式同组件 `wd-badge` 中的同名属性。

## Grid Slot

| name    | 说明     | 最低版本 |
| ------- | -------- | -------- |
| default | 宫格内容 | -        |

## GridItem Slot

| name    | 说明                           | 最低版本 |
| ------- | ------------------------------ | -------- |
| default | 宫格中每一格的默认显示全部内容 | -        |
| icon    | 宫格中图标位内容               | -        |
| text    | 宫格中文本位内容               | -        |

## Grid 外部样式类

| 类名         | 说明            | 最低版本 |
| ------------ | --------------- | -------- |
| custom-class | Grid 根节点样式 | -        |

## GridItem 外部样式类

| 类名         | 说明                    | 最低版本 |
| ------------ | ----------------------- | -------- |
| custom-class | GridItem 根节点样式     | -        |
| custom-text  | GridItem 下方文字样式   | -        |
| custom-icon  | GridItem 上方 icon 样式 | -        |
