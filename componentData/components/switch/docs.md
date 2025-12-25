#  Switch 开关

用来打开或关闭选项。

## 基本用法

`v-model` 为绑定值，默认为 boolean 类型。

## 修改值

通过 `active-value` 属性修改开关打开时的值，`inactive-value` 属性修改开关关闭时的值。

## 修改颜色

通过 `active-color` 属性修改开关打开时的颜色，`inactive-color` 属性修改开关关闭时的颜色。

## 自定义大小

设置 `size` 修改开关大小。

## 禁用

设置 `disabled` 属性。

## 修改前钩子

设置 `before-change` 属性，修改前钩子，接收 { value, resolve } 参数，`resolve(true)` 表示修改通过，`resolve(false)` 表示不修改。

## 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|-----|---------|
| custom-class | 根节点样式 | - |
