# Picker 选择器

Picker 组件为 popup 和 pickerView 的组合。

## 基本用法

`columns` 设置选项数据源，选项可以为字符串，也可以为对象，如果为对象则默认取 `label` 属性为选项内容进行渲染。`label` 设置左侧文本内容，`v-model` 设置选中项的值。label 可以不传。可以通过 `label-width` 设置标题宽度，默认为 '33%'，监听 `confirm` 事件，获取选中值，传出一个 event 对象，event `event = { value, selectedItems }`，value 为绑定值，selectedItems 为选中选项的对象。

当 `columns` 选项为对象时，其数据结构为：

| 参数     | 类型                      | 说明                                                     | 最低版本 |
| -------- | ------------------------- | -------------------------------------------------------- | -------- |
| value    | string / number / boolean | 选项值，如果 value 属性不存在，则使用 label 作为选项的值 | -        |
| label    | string                    | 选项文本内容                                             | -        |
| disabled | boolean                   | 选项是否禁用                                             | -        |

## 禁用

设置 `disabled` 属性。

## 只读

设置 `readonly` 属性。

## 清空按钮

设置 `clearable` 属性。

## 文案标题

设置 `title` 属性。

## 加载中

设置 `loading` 属性。

## 多列

`columns` 属性设置为二维数组，`value` 为数组。

## 多级联动

传入 `column-change` 属性，其类型为 `function`，接收 pickerView 实例、选中项、当前修改列的下标、resolve 作为入参，根据选中项和列下标进行判断，通过 pickerView 实例暴露出来的 `setColumnData` 方法修改其他列的数据源，当修改完成后需要执行 `resolve()` 告知组件修改完成以继续执行，如果 `column-change` 包含异步操作，也可以使组件按照异步顺序进行执行。

> 每次修改完后都需要调用 resolve() 通知组件。

## 选择器大小

通过设置 `size` 修改选择器大小，将 `size` 设置为 'large' 时字号为 16px。

## 必填属性

设置 `required` 属性，展示必填样式。

## 错误状态

设置 `error` 属性，选择器的值显示为红色。

## 值靠右展示

设置 `align-right` 属性，选择器的值靠右展示。

## 确定前校验

设置 `before-confirm` 函数，在用户点击`确定`按钮时，会执行 `before-confirm` 函数，并传入 `value` 、 `resolve` 和 `picker` 参数，可以对 `value` 进行校验，并通过 `resolve` 函数告知组件是否确定通过，`resolve` 接受1个 boolean 值，`resolve(true)` 表示选项通过，`resolve(false)` 表示选项不通过，不通过时不会关闭 `picker`弹窗。可以通过 `picker` 参数直接设置 `loading`、`columns` 等属性。

## 唤起项插槽

开启 `use-default-slot` ，设置默认插槽修改唤起picker组件的形式。

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|------|------|------|--------|--------|----------|
| v-model | 选中项，如果为多列选择器，则其类型应为数组 | string/number/boolean/array | - | - | - |
| columns | 选择器数据，可以为字符串数组，也可以为对象数组，如果为二维数组，则为多列选择器 | array | - | - | - |
| loading | 加载中 | boolean | - | false | - |
| loading-color | 加载的颜色，只能使用十六进制的色值写法，且不能使用缩写 | string | - | #4D80F0 | - |
| columns-height | picker内部滚筒高 | number | - | 231 | - |
| value-key | 选项对象中，value对应的 key | string | - | value | - |
| label-key | 选项对象中，展示的文本对应的 key | string | - | label | - |
| title | 弹出层标题 | string | - | - | - |
| cancel-button-text | 取消按钮文案 | string | - | 取消 | - |
| confirm-button-text | 确认按钮文案 | string | - | 完成 | - |
| label | 选择器左侧文案 | string | - | - | - |
| placeholder | 选择器占位符 | string | - | 请选择 | - |
| disabled | 禁用 | boolean | - | false | - |
| readonly | 只读 | boolean | - | false | - |
| display-format | 自定义展示文案的格式化函数，返回一个字符串 | function | - | - | - |
| column-change | 接收 pickerView 实例、选中项、当前修改列的下标、resolve 作为入参，根据选中项和列下标进行判断，通过 pickerView 实例暴露出来的 `setColumnData` 方法修改其他列的数据源 | function | - | - | - |
| size | 设置选择器大小 | string | large | - | - |
| label-width | 设置左侧标题宽度 | string | - | 33% | - |
| error | 是否为错误状态，错误状态时右侧内容为红色 | boolean | - | false | - |
| required | 表单属性，必填 | boolean | - | false | - |
| marker-side | 必填标记位置 | string | before / after | before | 1.12.0 |
| align-right | 选择器的值靠右展示 | boolean | - | false | - |
| use-label-slot | label 使用插槽 | boolean | - | false | - |
| use-default-slot | 使用默认插槽 | boolean | - | false | - |
| before-confirm | 确定前校验函数，接收 (value, resolve, picker) 参数，通过 resolve 继续执行 picker，resolve 接收1个boolean参数 | function | - | - | - |
| close-on-click-modal | 点击遮罩是否关闭 | boolean | - | true | - |
| z-index | 弹窗层级 | number | - | 15 | - |
| safe-area-inset-bottom | 弹出面板是否设置底部安全距离（iphone X 类型的机型） | boolean | - | true | - |
| ellipsis | 是否超出隐藏 | boolean | - | false | - |
| prop | 表单域 `model` 字段名，在使用表单校验功能的情况下，该属性是必填的 | string | - | - | - |
| rules | 表单验证规则，结合`wd-form`组件使用 | `FormItemRule []` | - | `[]` | - |
| immediate-change | 是否在手指松开时立即触发picker-view的 change 事件。若不开启则会在滚动动画结束后触发 change 事件，1.2.25版本起提供，仅微信小程序和支付宝小程序支持 | boolean | - | false | 1.2.25 |
| clearable | 显示清空按钮 | boolean | - | false | 1.11.0 |
| root-portal | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 | boolean | - | false | 1.11.0 |

### FormItemRule 数据结构

| 键名      | 说明                                                    | 类型                                  |
| --------- | ------------------------------------------------------- | ------------------------------------- |
| required  | 是否为必选字段                                          | `boolean`                             |
| message   | 错误提示文案                                            | `string`                              |
| validator | 通过函数进行校验，可以返回一个 `Promise` 来进行异步校验 | `(value, rule) => boolean \| Promise` |
| pattern   | 通过正则表达式进行校验，正则无法匹配表示校验不通过      | `RegExp`                              |

## Events

| 事件名称 | 说明                   | 参数                                                                                                        | 最低版本 |
| -------- | ---------------------- | ----------------------------------------------------------------------------------------------------------- | -------- |
| confirm  | 点击右侧按钮触发       |  { value, selectedItems }， value 为选中值(多列则为数组)，selectedItems为选中项(多列则为数组) | -        |
| cancel   | 点击左侧按钮触发       | -                                                                                                           | -        |
| open     | 打开选择器弹出层时触发 | -                                                                                                           | -        |
| clear    | 点击清空按钮时触发     | -                                                                                                    | 1.11.0    |

## Methods

| 方法名称 | 说明           | 参数 | 最低版本 |
| -------- | -------------- | ---- | -------- |
| open     | 打开picker弹框 | -    | -        |
| close    | 关闭picker弹框 | -    | -        |

## Slot

| name    | 说明         | 最低版本 |
| ------- | ------------ | -------- |
| default | 使用默认插槽 | -        |
| label   | 左侧标题插槽 | -        |

## 外部样式类

| 类名               | 说明                      | 最低版本 |
| ------------------ | ------------------------- | -------- |
| custom-class       | 根节点样式                | -        |
| custom-view-class  | pickerView 外部自定义样式 | -        |
| custom-label-class | label 外部自定义样式      | -        |
| custom-value-class | value 外部自定义样式      | -        |
