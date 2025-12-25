# Textarea 文本域

用于输入多行文本信息。

## 基本用法

可以通过 `v-model` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

## 禁用

通过设置 `disabled` 属性，实现禁用文本域。

## 只读

通过设置 `readonly` 属性，实现文本域只读。

## 清空按钮

通过设置 `clearable` 属性实现清空按钮，设置`show-word-limit`与`maxlength`实现字数限制。

## 有值且聚焦时展示清空按钮
设置 `clear-trigger` 属性，可以控制是否聚焦时才展示清空按钮。

:::warning 注意
支付宝小程序暂不支持 `clear-trigger` 属性，且某种情况下清空按钮无法点击，原因参考此[issue](https://github.com/ant-design/ant-design-mini/issues/1255)（希望可以早点解决，所以直接给蚂蚁的组件库提了个issue）。
:::

## 点击清除按钮时不自动聚焦

设置`focus-when-clear` 属性，可以控制点击清除按钮时是否自动聚焦。

## 高度自适应

通过设置 `auto-height` 属性，实现高度自适应。

## 前置 icon

设置前置 icon `prefix-icon`，icon 为 [icon](/component/icon) 章节中的图标，如果没有你需要的图标，则使用 `prefix` 插槽进行自定义插入。

## 设置 label 标题

设置 `label` 标题，可以和 `cell-group` 组合使用，形成 `cell` 展示类型。可以通过 `label-width` 设置标题宽度，默认为 '33%'。

## 必填样式

设置了 `label` 的情况下，设置 `required` 属性，展示必填样式。

## 输入框大小

通过设置 `size` 修改输入框大小，将 `size` 设置为 'large' 时字号为 16px。

## 错误状态

设置 `error` 属性，输入框的值显示为红色。

## 垂直居中

当设置 `label` 标题时，默认为顶部居中，设置 `center` 属性可以使标题和输入框垂直居中。

## Slot

| name   | 说明         | 最低版本 |
| ------ | ------------ | -------- |
| label  | 左侧标题插槽 | -        |
| prefix | 前置插槽     | -        |

## 外部样式类

| 类名                            | 说明                        | 最低版本 |
| ------------------------------- | --------------------------- | -------- |
| custom-class                    | 根节点样式                  | -        |
| custom-textarea-container-class | textarea 容器外部自定义样式 | -        |
| custom-textarea-class           | textarea 外部自定义样式     | -        |
