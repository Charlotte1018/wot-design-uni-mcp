#  InputNumber 计数器

由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

## 基本用法

通过 `v-model` 绑定输入值，可以通过 `change` 事件监听到输入值的变化。

## 设置步长

设置 `step` 步长，即每次value变化的绝对值。

## 设置最小最大值

设置 `min` 最小值，`max` 最大值。`min` 默认为1。

## 禁用

设置 `disabled` 属性。

## 禁用输入框

设置 `disable-input` 属性。

## 禁用按钮

可以单独禁用增加或减少按钮。

## 无输入框

设置 `without-input` ，不展示输入框。

## 设置小数精度

设置 `precision` 属性，默认为0。

## 严格步数倍数

设置 `step-strictly` 属性，强制输入框输入内容为 `step` 的倍数（当用户输入完成后触发change时，会更正输入框内容）。

## 修改输入框宽度

设置 `input-width` 设置宽度，该值接受1个字符串，可以是表示尺寸的任何单位。

## 允许空值，设置 placeholder

设置 `allow-null` 属性允许空值，设置 `placeholder` 提示填写。

## 非立即更新模式

设置 `immediate-change` 为 `false`，输入框内容变化时不会立即触发 `change` 事件，仅在失焦或点击按钮时触发。

## 初始化时自动更新

设置 `update-on-init` 属性控制是否在初始化时更新 `v-model` 为修正后的值。

- 当 `update-on-init="true"`（默认）时，会将初始值修正到符合 `min`、`max`、`step`、`precision` 等规则的有效值，并同步更新 `v-model`
- 当 `update-on-init="false"` 时，保持初始值不修正（不改变 `v-model`），但仍会进行显示格式化（如精度处理）

## 异步变更

通过 `before-change` 可以在输入值变化前进行校验和拦截。

## 长按加减

设置 `long-press` 属性，允许长按加减。

## 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

