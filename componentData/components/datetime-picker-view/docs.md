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

