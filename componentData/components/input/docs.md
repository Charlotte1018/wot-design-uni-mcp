---
title: Input 输入框
lang: zh-CN
---

# Input 输入框

通过鼠标或键盘输入字符

:::warning

Input 为受控组件，它 **总会显示 Vue 绑定值**。

在正常情况下，`input` 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用 `v-model`)。 否则，输入框的值将不会改变。

不支持 `v-model` 修饰符。

:::

## 基础用法

## 禁用状态

## 只读状态

## 一键清空

## 格式化

在 `formatter`的情况下显示值，我们通常同时使用 `parser`

## 密码框

## 带图标的输入框

带有图标标记输入类型

## 文本域

用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 `input` 元素转换为原生的 `textarea` 元素。

## 自适应文本域

设置文字输入类型的 `autosize` 属性使得根据内容自动调整的高度。 你可以给 `autosize` 提供一个包含有最大和最小高度的对象，让输入框自动调整。

## 复合型输入框

可以在输入框中前置或后置一个元素，通常是标签或按钮。

## 尺寸

## 输入长度限制

## 常见问题

#### ElInput 组件的宽度为什么在设置了 `clearable` 时会发生变化

典型问题： [#7287](https://github.com/element-plus/element-plus/issues/7287)

PS: 由于ElInput 组件没有默认宽度，当显示 clearable 图标时, 组件的宽度将被撑开，可以通过设置固定宽度属性来解决。

```vue
<fin-input v-model="input" clearable style="width: 200px" />
```
