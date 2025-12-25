# Cell 单元格

单元格为列表中的单个展示项。

## 基本用法

`Cell` 可以单独使用，也可以和 `CellGroup` 组合使用。

## 图标设置

设置 `icon` 属性，值可以为 Icon 章节中的图标名，也可以通过 icon 的 slot 自定义图标位置。

> 自定义图标，如果有多个 cell，需保证所有图标的宽度是一致的且垂直居中。使用 icon 属性且为 Icon 章节的字体图标，则宽度会自动一致且垂直居中；cell 图标的大小是宽 16px，高 16px，large 尺寸图标宽度 18px，高度 18px，距离右侧文字距离 15px。如果使用插槽，可以通过`custom-icon-class`进行设置。

## 分组标题

可以在 `cell-group` 上设置 `title` 和 `value` 属性。

## 单元格大小

通过设置 `size` 修改单元格大小，将 `size` 设置为 'large' 时左侧标题字号为 16px。

## 展示边框线

在 `wd-cell-group` 上设置 `border` 属性，会给每个 cell 加上边框，最后一个 cell 则不展示边框，其他具有 `cell` 类型的表单组件也支持边框展示，如 input、picker。

## 点击反馈

通过设置 `clickable` 开启点击反馈，之后可以监听`click`事件。

## 页面跳转

通过设置 `is-link` 属性显示导航箭头和点击态，设置 `to` 属性，指定跳转地址，可以设置 replace 替换掉历史堆栈中的当前页面。

`is-link`会默认开启`clickable`。

可以只设置 `is-link` 用于展示右箭头和点击态。

## 垂直居中

通过设置 `center` 设置内容垂直居中对齐，默认顶部居中。

## 表单属性 - 必填

设置 `required` 属性。

## 表单属性 - 上下结构

设置 `vertical` 属性。

## 设置左侧宽度

设置 `title-width` 属性，label 内容超出则会 ... 隐藏，如果有个性化需求，使用插槽实现。

## 内容省略

设置 `ellipsis` 属性，右侧内容超出时会以省略号显示。

## 自定义内容

`cell` 提供了 `icon`、`title`、`label`和默认 value 的插槽。

## CellGroup Slot

> CellGroup 必须首先开启`use-slot`,插槽才生效。使用插槽时请通过外部自定义样式类来控制样式。

| name  | 说明         | 最低版本 |
| ----- | ------------ | -------- |
| title | 分组标题     | -        |
| value | 分组右侧内容 | -        |

## Cell Slot

| name    | 说明                                      | 最低版本 |
| ------- | ----------------------------------------- | -------- |
| title   | 标题                                      | -        |
| default | 右侧内容，使用时不需要设置 `#default` | -        |
| icon    | 图标                                      | -        |
| label   | 描述信息                                  | -        |

## CellGroup 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

## Cell 外部样式类

| 类名               | 说明                           | 最低版本 |
| ------------------ | ------------------------------ | -------- |
| custom-class       | 根节点样式                     | -        |
| custom-icon-class  | icon 外部自定义样式  | -        |
| custom-label-class | label 外部自定义样式 | -        |
| custom-value-class | value 外部自定义样式 | -        |
| custom-title-class | title 外部自定义样式 | -        |
