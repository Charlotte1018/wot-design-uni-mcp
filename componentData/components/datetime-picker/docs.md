# DateTimePicker 日期时间选择器

在同一个选择器里选择日期和时间

:::tip

日期时间选择器来自日期选择器和时间选择器的组合。 关于属性的更详细解释，请参阅日期选择器和时间选择器。

:::

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (例如: [VitePress](https://vitepress.vuejs.org/)).

:::

## 日期和时间点

## 日期时间格式

使用`format`指定输入框的格式。 使用`value-format`指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。

在 [这里](https://day.js.org/docs/en/display/format#list-of-all-available-formats) 查看 Day.js 支持的所有格式。

:::warning

请一定要注意传入参数的大小写是否正确

:::

## 下拉列表中的日期和时间格式

使用 `date-format` 和 `time-format` 控制下拉列表面板输入框中显示的文本格式

## 日期和时间范围

## 默认的起始与结束时刻

## 事件

| 事件名             | 说明                                                            | 回调参数               |
| --------------- | ------------------------------------------------------------- | ------------------ |
| change          | 用户确认选定的值时触发                                                   | value              |
| blur            | 在组件 Input 失去焦点时触发                                             | `(e: FocusEvent)`  |
| focus           | 在组件 Input 获得焦点时触发                                             | `(e: FocusEvent)`  |
| calendar-change | 如果用户没有选择日期，那默认展示当前日的月份。 选中日历日期后会执行的回调，只有当 `datetimerange` 才生效 | [Date, Date]       |
| visible-change  | 当 DateTimePicker 的下拉列表出现/消失时触发                                | 出现时为true，隐藏时为false |

## 方法

| 方法名   | 说明           | 参数 |
| ----- | ------------ | -- |
| focus | 使 input 获取焦点 | —  |
