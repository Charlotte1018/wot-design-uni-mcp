# Calendar 日历选择器

提供日历单选、多选、范围选择、周维度、月维度等功能。

## 基本使用

`type` 默认为 `date` 类型，设置 `v-model` 绑定值（13 位时间戳格式），监听 `@confirm` 事件获取选中值。`min-date` 最小日期默认为当前日期往前推 6 个月，`max-date` 最大日期默认为当前日期往后推 6 个月，日历的日期只展示最小日期到最大日期之间的日期。label 可以不传。可以通过 `label-width` 设置标题宽度，默认为 '33%'。

> `min-date`和`max-date`这两个值尽量不要设置过大，避免大量数据的计算和传递导致页面性能低下。

## 日期多选

设置 `type` 为 `dates` 类型，此时 `value` 为数组。

## 周类型选择

设置 `type` 为 `week` 类型，如果 `value` 有初始值，建议将周起始日 `first-day-of-week` 设置为 1（周一），避免选中样式和回显匹配不上。

## 月类型选择

设置 `type` 为 `month` 类型，此时 `value` 有值时其值为月的第一天。

## 范围选择

`type` 支持 `daterange`（日期范围选择）、`weekrange`（周范围选择）、`monthrange`（月范围选择） 类型，此时 `value` 为数组格式。

## 日期时间类型

设置 `type` 为 `datetime` 类型，可以选择到时分秒，设置 `type` 为 `datetimerange` 为范围选择。

可以设置 `hide-second`，使时间只展示到分钟级别；设置 `time-filter` 属性，可以自定义过滤 时分秒 选项，该属性接收 { type: string, values: array } 参数，返回一个新的数组，type 值为 'hour'、'minute' 或 'second'，values 为 picker 数据列表。

## 日周月切换

设置 `show-type-switch` 属性，展示 日周月 切换功能，支持在日周月类型 `date、week、month` 之间进行来回切换，可以通过 `type` 属性设置初始类型。如果 `type` 为 range 类型如 `daterange`，则日历可以在 `daterange、weekrange、monthrange` 之间进行来回切换。

## 快捷操作

设置 `show-confirm` 属性为 `false`，不展示确定按钮，只对 `date、daterange、week、weekrange、month、monthrange` 类型有效。

## 范围选择允许选中同一日期

设置 `allow-same-day` 属性，范围选择允许用户选择同一天、同一周、同一个月。

## 格式化日期

设置 `formatter` 参数，其值为函数类型，接收一个 `object` 参数，返回一个对象，对象的属性保持跟入参的属性一致，其属性如下：

| 属性       | 类型            | 说明                                        | 最低版本 |
| ---------- | --------------- | ------------------------------------------- | -------- |
| type       | CalendarDayType | 可选值见[CalendarDayType](#calendardaytype) | -        |
| date       | timestamp       | 13 位的时间戳                               | -        |
| text       | string          | 日期文本内容                                | -        |
| topInfo    | string          | 上方提示信息                                | -        |
| bottomInfo | string          | 下方提示信息                                | -        |
| disabled   | boolean         | 是否禁用                                    | -        |

### CalendarDayType

| 类型              | 说明                                 | 最低版本         |
| ----------------- | ------------------------------------ | ---------------- |
| selected          | 单日期选中                           | -                |
| start             | 范围开始日期                         | -                |
| end               | 范围结束日期                         | -                |
| middle            | 范围开始与结束之间的日期             | -                |
| same              | 范围开始与结束日期同一天             | -                |
| current           | 当前日期                             | -                |
| multiple-middle   | 多日期范围选择，开始与结束之间的日期 | 1.5.0 |
| multiple-selected | 多日期范围选择，选中的日期           | 1.5.0 |

## 快捷选项

设置 `shortcuts` 属性，配置快捷选项列表，传入 `on-shortcuts-click` 属性，`on-shortcuts-click` 是个函数，接收 { item, index } 参数，item 为当前选项，index 为当前选项的下标。当快捷选项被点击时，会调用 `on-shortcuts-click`，接收到日历新的选中值。`text` 为选项的必传字段，其他字段根据自己需要自行传入。

## 自定义展示

设置 `display-format` 属性可以自定义表单回显，`inner-display-format` 属性自定义范围选择类型的面板内部回显。

`display-format` 为函数，接收 `value`（当前值，type 为范围类型时为时间戳数组，其他类型为 number）、`type`（当前日历类型） 两个参数。

`inner-display-format` 为函数，会调用两次，接收 `value`（开始日期或结束日期，类型为 number）、`rangeType`（'start' - 开始日期, 'end' - 结束日期）、`type`（当前日历类型）三个参数。

## 确定前校验

设置 `before-confirm` 函数，在用户点击`确定`按钮时，会执行 `before-confirm` 函数，并传入 `value` 和 `resolve` 参数，可以对 `value` 进行校验，并通过 `resolve` 函数告知组件是否确定通过，`resolve` 接受 1 个 boolean 值，`resolve(true)` 表示选项通过，`resolve(false)` 表示选项不通过，不通过时不会关闭弹窗。

## 最大范围限制

设置 `max-range` 属性，设置范围选择的最大限制。

## 设置周起始日

设置 `first-day-of-week` 属性，默认为 0，即周日，设置为 1 则为周一，依此类推。

## 自定义选择器

如果默认的 cell 类型的展示格式不满足需求，可以通过默认插槽进行自定义选择器样式。

## 使用组件实例方法

通过 ref 可以获取到 Calendar 实例并调用实例方法，通过 `with-cell` 可以屏蔽组件内部的 cell 选择器。

## Methods

| 方法名称 | 说明     | 参数 | 最低版本 |
| -------- | -------- | ---- | -------- |
| open     | 打开面板 | -    | -        |
| close    | 关闭面板 | -    | -        |

## 外部样式类

| 类名               | 说明                 | 最低版本 |
| ------------------ | -------------------- | -------- |
| custom-class       | 根节点样式           | -        |
| custom-label-class | label 外部自定义样式 | -        |
| custom-value-class | value 外部自定义样式 | -        |
