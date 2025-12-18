# DatePicker 日期选择器

用于选择或输入日期

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (e.g: [VitePress](https://vitepress.vuejs.org/)).

:::

## 选择某一天

以”日“为基本单位，基础的日期选择控件

## 其他日期单位

通过扩展基础的日期选择，可以选择周、月、年或多个日期

## 选择一段时间

你可以通过如下例子来学习如何设置一个日期范围选择器。

## 选择月份范围

你当然还可以选择一个月的范围。

## 默认值

日期选择器会在用户未选择任何日期的时候默认展示当天的日期。 你也可以使用 `default-value` 来修改这个默认的日期。 请注意该值需要是一个可以解析的 `new Date()` 对象。

如果类型是 `daterange`, `default-value` 则会设置左边窗口的默认值。

## 日期格式

使用`format`指定输入框的格式。 使用 `value-format` 指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。

在 [这里](https://day.js.org/docs/en/display/format#list-of-all-available-formats) 查看 Day.js 支持的所有格式。

:::warning

请一定要注意传入参数的大小写是否正确

:::

## 默认显示日期

在选择日期范围时，你可以指定起始日期和结束日期的默认时间。

## 设置自定义前缀的内容

前缀内容可以被自定义。

## 自定义内容

弹出框的内容是可以自定义的，在插槽内你可以获取到当前单元格的数据

更详细的数据类型，请查看下表

```ts
interface DateCell {
  column: number
  customClass: string
  disabled: boolean
  end: boolean
  inRange: boolean
  row: number
  selected: Dayjs
  isCurrent: boolean
  isSelected: boolean
  start: boolean
  text: number
  timestamp: number
  date: Date
  dayjs: Dayjs
  type: 'normal' | 'today' | 'week' | 'next-month' | 'prev-month'
}
```

## 国际化

由于 FinD Plus 的默认语言为英语，如果你需要设置其它的语言，请参考[国际化](/zh-CN/guide/i18n)文档。

要注意的是：日期相关的文字（月份，每一周的第一天等等）也都是通过国际化来配置的。

## 类型声明

<details>
  <summary>显示类型声明</summary>

```ts
import type { Options as PopperOptions } from '@popperjs/core'

type TimeLikeType = 'datetime' | 'datetimerange'
```

</details>
