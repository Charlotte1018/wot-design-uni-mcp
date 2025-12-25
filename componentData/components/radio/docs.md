#  Radio 单选框

单选框，用于在一组备选项中进行单选。

## 基本用法

`v-model` 为绑定值，即选中的 `wd-radio` 的 `value` 值。

## 修改图标形状

修改 `shape` 属性，可选值为 'dot'、'button'、'check'，默认为 'check'。

> <div style="color: #FA4350;font-weight: 500;">注意：</div>
> <div>内容项在3项以内，且有比较重要的信息备选（如付款类型选择等）可考虑采用圆形组件。因为会跟圆形复选框容易混淆，且会造成当前表单页页面结构不统一，<span style="color: #FA4350;font-weight: 500;">一般情况不建议使用点状单选。</span></div>

## 表单模式

设置 `cell` 属性，开启表单模式单选框组。

开启表单模式时，如果同时设置 `shape` 为 `button` 开启表单模式单选按钮组模式。

## 同行展示

设置 `inline` 属性，使单选框在同一行展示。

## 修改选中的颜色

设置 `checked-color` 属性。

## 禁用

可以在 `radio-group` 上面设置 `disabled`，禁用所有单选框，也可以在单个单选框上面设置 `disabled` 属性，禁用某个单选框。

## 尺寸

设置 `size` 属性，可选 `large`。

## Props优先级

radio设置的props优先级比radioGroup上设置的props优先级更高

