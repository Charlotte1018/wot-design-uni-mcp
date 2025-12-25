# Form 表单 

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，常见的 form 表单为`单元格`形式的展示，即左侧为表单的标题描述，右侧为表单的输入。

其中，`Input 输入框`、`Textarea 输入框`、`Picker 选择器`、 `Calendar 日历选择器`、 `ColPicker 多列选择器`、`SelectPicker 单复选选择器`、`Cell 单元格` 和 `DatetimePicker 日期时间选择器`具有`单元格`的展示形式，同时也支持 `prop` 和 `rules` 属性，我们称之为`表单项组件`，而 `InputNumber 计数器` 、 `Switch 开关` 和 `Upload 上传` 等组件则需要使用 `Cell 单元格` 进行包裹使用。

结合 `wd-form` 组件，可以实现对以上组件的规则校验。

> 对于表单组件，建议对 wd-cell-group 开启 border 属性，这样每条 cell 就会有边框线隔离开，这样表单的划分比较清晰。

## 基础用法

在表单中，使用 `model` 指定表单数据对象，每个 `表单项组件` 代表一个表单项，使用 `prop` 指定表单项字段 ，使用 `rules` 属性定义校验规则。

::: details 查看基础用法示例
::: code-group

:::

## 校验错误提示方式

1. `message`：默认为输入框下方用文字进行提示
2. `toast`：以"toast"提示的方式弹出错误信息，每次只弹出最前面的那个表单域的错误信息
3. `none`：不会进行任何提示

::: details 错误提示方式
::: code-group

:::

## 校验规则

本章节演示四种自定义校验及提示规则：`正则校验`、`函数校验`、`函数返回错误提示`和`异步函数校验`。

::: details 查看校验规则示例
::: code-group

:::

## 动态表单

表单项动态增减。

::: details 查看动态表单示例
::: code-group

:::

## 指定字段校验

`validate` 方法可以传入一个 `prop` 参数，指定校验的字段，可以实现在表单组件的`blur`、`change`等事件触发时对该字段的校验。`prop` 参数也可以是一个字段数组，指定多个字段进行校验。

::: details 查看指定字段校验示例
::: code-group

:::

## 不对隐藏组件做校验 <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.6.0</el-tag>

在表单中，如果某个组件使用 `v-if` 隐藏，则不会对该组件进行校验。

## 复杂表单

结合`Input 输入框`、`Textarea 输入框`、`Picker 选择器`、 `Calendar 日历选择器`、 `ColPicker 多列选择器`、`SelectPicker 单复选选择器`、`Cell 单元格` 和 `DatetimePicker 日期时间选择器`实现一个复杂表单。

::: details 查看复杂表单示例
::: code-group

:::

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | 0.2.0    |
