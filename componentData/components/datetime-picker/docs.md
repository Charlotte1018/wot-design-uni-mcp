# DatetimePicker 日期时间选择器

为 DatetimePickerView 组件的封装，在其内部构建好日期时间选项。

## 基本用法

`v-model` 设置绑定值，默认为 `datetime` 类型，展示年月日时分，绑定值为 `时间戳` 类型，如果为 `time` 类型，绑定值为字符串。label 可以不传。可以通过 `label-width` 设置标题宽度，默认为 `33%`。

## 设置默认值

`default-value` 设置默认日期，打开面板时面板自动选到默认日期。

## date 类型

`date` 类型只展示年月日。

## year-month 类型

`year-month` 类型只展示年月。

## year 类型

`year` 类型只展示年。

## time 类型

`time` 类型只展示时分，绑定值为 `HH:mm` 格式。

## time 类型（带秒）

`time` 类型设置 `use-second` 属性可以展示时分秒，绑定值为 `HH:mm:ss` 格式。

## datetime 类型（带秒）

`datetime` 类型设置 `use-second` 属性可以展示年月日时分秒，绑定值为时间戳。

## 修改展示格式

给 `display-format` 属性传入一个函数，接收所有选中项数组，返回展示的文本内容。

## 修改弹出层内部格式

给 `formatter` 属性传入一个函数，接收 `type` 和 `value` 值，返回展示的文本内容。`type` 有 `year`、`month`、`date`、`hour`、`minute` 类型，`value` 为 `number` 类型。
使用自定义`formatter`会关闭内置的默认`display-format`函数。

## 过滤选项

给 `filter` 属性传入一个函数，接收 `type` 和 `values` 值，返回列的选项列表。`type` 有 `year`、`month`、`date`、`hour`、`minute` 类型，`values` 为 number数组。

## 选择器大小

通过设置 `size` 修改选择器大小，将 `size` 设置为 'large' 时字号为 16px。

## 必填属性

设置 `required` 属性开启表单必填。

## 错误状态

设置 `error` 属性，选择器的值显示为红色。

## 值靠右展示

设置 `align-right` 属性，选择器的值靠右展示。

## 确定前校验

设置 `before-confirm` 函数，在用户点击`确定`按钮时，会执行 `before-confirm` 函数，并传入 `value`(time 类型为字符串，其他为时间戳，当picker为区间选择时，`value`为数组) 、 `resolve` 和 `picker` 参数，可以对 `value` 进行校验，并通过 `resolve` 函数告知组件是否确定通过，`resolve` 接受1个 boolean 值，`resolve(true)` 表示选项通过，`resolve(false)` 表示选项不通过，不通过时不会关闭 `picker`弹窗。可以通过 `picker` 参数直接设置 `loading` 等属性。

:::tip 提示
在调用 `resolve` 之前须确保 `picker` 参数 `loading` 的加载状态为 `false` ，否则无法正确触发组件的 `@confirm` 事件。
:::

## 唤起项插槽

设置默认插槽修改唤起picker组件的形式。

## 时间范围选择

当 `v-model` 为 `Array` 类型, 时间范围选择开启。

## 范围选择tab标签展示格式

给 `display-format-tab-label` 属性传入一个函数，接收所有选中项数组，返回展示的文本内容。

## Methods

| 方法名称 | 说明 | 参数 | 最低版本 |
|--------|------|-----|---------|
| open | 打开picker弹框 | - |
| close | 关闭picker弹框 | - |

## Slot

| name | 说明 | 最低版本 |
|------|-----|---------|
| default | 使用默认插槽 | - |
| label | 左侧标题插槽 | - |

## 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-view-class | pickerView 外部自定义样式 | - |
| custom-cell-class | pickerView cell 外部自定义样式 | 1.3.8 |
| custom-label-class | label 外部自定义样式 | - |
| custom-value-class | value 外部自定义样式 | - |
