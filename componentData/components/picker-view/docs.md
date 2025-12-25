#  PickerView 选择器视图

选择器视图，用于从一组数据中选择单个或多个值。

## 基本用法

单列选择器，给 `columns` 传入一个数值数组，设置 `v-model` 绑定值。选项可以为字符串，也可以为对象，如果为对象则默认取选项 `label` 属性为选项内容进行渲染，`v-model` 获取的值为选项 `value` 属性的值，如果选项 `value` 属性不存在，则取选项 `label` 的值。

当 `columns` 选项为对象时，其数据结构为：

| 参数 | 类型 | 说明 | 最低版本 |
|-----|-----|------|---------|
| value | string / number / boolean | 选项值，如果 value 属性不存在，则使用 label 作为选项的值 | - |
| label | string | 选项文本内容 | - |
| disabled | boolean | 选项是否禁用 | - |

## 禁用选项

选项可以为对象，设置 `disabled` 属性。

## 加载中

设置 `loading` 属性。

## 多列

`columns` 属性设置为二维数组，`value` 为数组。

## 多级联动

传入 `column-change` 属性，其类型为 `function`，接收 pickerView 实例、选中项、当前修改列的下标、resolve 作为入参，根据选中项和列下标进行判断，通过 pickerView 实例暴露出来的 `setColumnData` 方法修改其他列的数据源，当修改完成后需要执行 `resolve()` 告知组件修改完成以继续执行，如果 `column-change` 包含异步操作，也可以使组件按照异步顺序进行执行。

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|-----|------|-----|-------|-------|---------|
| v-model | 选中项，如果为多列选择器，则其类型应为数组 | string / number / boolean / array | - | - | - |
| columns | 选择器数据，可以为字符串数组，也可以为对象数组，如果为二维数组，则为多列选择器 | array | - | - | - |
| loading | 加载中 | boolean | - | false | - |
| loading-color | 加载的颜色，只能使用十六进制的色值写法，且不能使用缩写 | string | - | #4D80F0 | - |
| columns-height | picker内部滚筒高 | number | - | 231 | - |
| item-height | picker item的高度 | number | - | 35 | 1.13.0 |
| value-key | 选项对象中，value对应的 key | string | - | value | - |
| label-key | 选项对象中，展示的文本对应的 key | string | - | label | - |
| column-change | 接收 pickerView 实例、选中项、当前修改列的下标、resolve 作为入参，根据选中项和列下标进行判断，通过 pickerView 实例暴露出来的 `setColumnData` 方法修改其他列的数据源。 | function | - | - | - |
| immediate-change | 是否在手指松开时立即触发picker-view的 change 事件。若不开启则会在滚动动画结束后触发 change 事件，1.2.25版本起提供，仅微信小程序和支付宝小程序支持。 | boolean | - | false | 1.2.25 |

 

## Methods

| 方法名称 | 说明 | 参数 | 最低版本 |
|---------|-----|-----|---------|
| getLabels | 获取所有列选中项的文本，返回值为一个数组 | - |
| getColumnIndex | 获取某一列的选中项下标 | columnIndex | - |
| getColumnData | 获取某一列的选项 | columnIndex | - |
| setColumnData | 设置某一列的选项 | columnIndex, values | - |
| resetColumns | 重置列数据为指定列数据 | columns（类型与props中columns相同） | 1.3.9 |

## Events

| 事件名称 | 说明 | 参数 | 最低版本 |
|--------|------|------|--------|
| change | 选项值修改时触发 | event = { value, picker, index }, 单列: picker实例, 选中项值, 选中项下标; 多列: picker实例, 所有列选中项值, 当前列的下标 | - |
| pickstart | 当滚动选择开始时候触发事件 | - | - |
| pickend | 当滚动选择结束时候触发事件 | - | - |

## 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |
