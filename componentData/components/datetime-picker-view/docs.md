#  DatetimePickerView 日期时间选择器视图

为 Picker 组件的封装，在其内部构建好日期时间选项。

## 基本用法

`v-model` 设置绑定值，默认为 `datetime` 类型，展示年月日时分，绑定值为 `时间戳` 类型，如果为 `time` 类型，绑定值为字符串。

## date 类型

`date` 类型只展示年月日。

## year-month 类型

`year-month` 类型只展示年月。

## year 类型

`year` 类型只展示年月。

## time 类型

`time` 类型只展示时分，绑定值为 `HH:mm` 格式。

## time 类型（带秒）

`time` 类型设置 `use-second` 属性可以展示时分秒，绑定值为 `HH:mm:ss` 格式。

## datetime 类型（带秒）

`datetime` 类型设置 `use-second` 属性可以展示年月日时分秒，绑定值为时间戳。

## 修改内部格式

给 `formatter` 属性传入一个函数，接收 `type` 和 `value` 值，返回展示的文本内容。`type` 有 `year`、`month`、`date`、`hour`、`minute` 类型，`value` 为 `number` 类型。
使用自定义`formatter`会关闭内置的默认`display-format`函数。

## 过滤选项

给 `filter` 属性传入一个函数，接收 `type` 和 `values` 值，返回列的选项列表。`type` 有 `year`、`month`、`date`、`hour`、`minute` 类型，`values` 为 number数组。

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|-----|------|-----|-------|-------|---------|
| v-model | 选中项，当 type 为 time 时，类型为字符串，否则为 `timestamp` | `string` / `timestamp` | - | - |
| type | 选择器类型 | string | date / year-month / time / year | datetime | - |
| loading | 加载中 | boolean | - | false | - |
| loading-color | 加载的颜色，只能使用十六进制的色值写法，且不能使用缩写 | string | - | #4D80F0 | - |
| columns-height | picker内部滚筒高 | number | - | 231 | - |
| item-height | picker item的高度 | number | - | 35 | 1.13.0 |
| formatter | 自定义弹出层选项文案的格式化函数，返回一个字符串 | function | - | - | - |
| filter | 自定义过滤选项的函数，返回列的选项数组 | function | - | - | - |
| minDate | 最小日期，13 位的时间戳    | `timestamp` | - | 当前日期 - 10年 | - |
| maxDate | 最大日期，13 位的时间戳  | `timestamp` | - | 当前日期 + 10年 | - |
| minHour | 最小小时，time类型时生效 | number | - | 0 | - |
| maxHour | 最大小时，time类型时生效 | number | - | 23 | - |
| minMinute | 最小分钟，time类型时生效 | number | - | 0 | - |
| maxMinute | 最大分钟，time类型时生效 | number | - | 59 | - |
| immediate-change | 是否在手指松开时立即触发picker-view的 change 事件。若不开启则会在滚动动画结束后触发 change 事件，1.2.25版本起提供，仅微信小程序和支付宝小程序支持。 | boolean | - | false | 1.2.25 |
| use-second | 是否显示秒选择，仅在 time 和 datetime 类型下生效 | boolean | - | false | 1.10.0 |

## Events

| 事件名称 | 说明 | 参数 | 最低版本 |
|--------|------|-----|---------|
| change | 切换选项时触发 | 选中的值 `{ value }`，value 为当前选中日期的时间戳，'time' 类型则为字符串 | - |
| pickstart | 当滚动选择开始时候触发事件 | - | - | - |
| pickend | 当滚动选择结束时候触发事件 | - | - | - |
