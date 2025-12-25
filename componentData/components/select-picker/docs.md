# SelectPicker 单复选选择器

用于从一组选项中进行单选或多选。

## 基本用法

`label` 设置左侧文本内容；

`columns` 设置数据源，一维数组，每个选项包含 `value`(选项值) 和 `label`(选项名称)；

`v-model` 设置选中项的值，数据类型为 `Array` | `String` `Number` 或 `Boolean`；

## 类型切换

`type` 默认值为 `checkbox`， 为默认值时，value 值类型为 `Array` 类型

设置 `type` 值为 `radio` ，开启单选类型，value 值类型为 `String` `Number` 或 `Boolean`。

## 禁用

设置 `disabled` 属性。

## 只读

设置 `readonly` 属性。

## 清空

设置 `clearable` 属性

## 禁用选项

`columns` 每个选项支持 `disabled` 属性。

## 展示格式化

设置 `display-format` 属性，其类型为 `function`，接收当前选中项（当类型`checkbox`时 参数是 数组类型，类型为`radio` 时参数是 `String` `Number` 或 `Boolean` 类型）, 当前的选项数组 `columns`，返回要展示的字符串。

## 确定前校验

设置 `before-confirm` 函数，在用户点击`确定`按钮时，会执行 `before-confirm` 函数，并传入`value`(选中项 也就是当前选择的值） 和 `resolve` 参数，可以对 `value` 进行校验，并通过 `resolve` 函数告知组件是否确定通过，`resolve` 接受 1 个 boolean 值，`resolve(true)` 表示选项通过，`resolve(false)` 表示选项不通过，不通过时不会关闭弹窗。

## 设置标题

设置 `title` 属性，修改弹出层的标题。

## 错误状态

设置 `error` 属性，选择器的值显示为红色。

## 必填样式

设置 `required` 属性，展示必填样式。

## 选择器大小

通过设置 `size` 修改选择器大小，将 `size` 设置为 'large' 时字号为 16px。

## 值靠右展示

设置 `align-right` 属性，选择器的值靠右展示。

## 可搜索

设置 `filterable` 属性支持本地搜索，设置 `filter-placeholder` 属性设置搜索框的占位符。

## 自动完成

`radio`类型，设置 `show-confirm` 属性支持控制确认按钮的显示，设置为`false`可自动完成。

## 自定义选择器

如果默认的 cell 类型的展示格式不满足需求，可以通过默认插槽进行自定义选择器样式。

## 选项数据结构

| 键名     | 说明     | 类型    | 是否必填 | 最低版本 |
| -------- | -------- | ------- | -------- | -------- |
| value    | 选项值   | string  | 是       | -        |
| label    | 选项名   | string  | 是       | -        |
| disabled | 禁用选项 | boolean | 否       | -        |

## Methods

| 方法名称 | 说明     | 参数 | 最低版本 |
| -------- | -------- | ---- | -------- |
| open     | 打开弹窗 | -    | -        |
| close    | 关闭弹窗 | -    | -        |

## 外部样式类

| 类名                 | 说明                     | 最低版本 |
| -------------------- | ------------------------ | -------- |
| custom-class         | 根节点样式               | -        |
| custom-label-class   | label 外部自定义样式     | -        |
| custom-value-class   | value 外部自定义样式     | -        |
| custom-content-class | 弹出层内容区域自定义样式 | -        |
