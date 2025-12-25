#  Steps 步骤条

用于引导用户按照流程完成任务或向用户展示当前状态。

:::tip 破坏性更新提醒
`1.2.10`版本`step`组件废弃了`title-slot`、`icon-slot`和`description-slot`等三个控制插槽使用的字段，新增支持直接使用`title`、`icon`和`description`插槽，同时废弃了`default`插槽。
:::

## 基本用法

`active` 为步骤进度，为 number 类型，步骤的下标。

## 水平居中

设置 `align-center` 水平居中，只对横向步骤条有效。

## 设置标题和描述信息

可以通过 `title` 和 `description` 设置步骤的标题和描述信息。如果不设置标题，则会使用默认的文案。

## 修改图标

可以通过 `icon` 属性设置步骤的图标，传入图标的名称，也可以通过 `icon` 的 slot 插槽自定义图标，使用插槽需要设置 `icon-slot` 为 `true`。

## 竖向步骤条

设置 `vertical` 属性。

## 点状步骤

设置 `dot` 属性。

## 修改状态

设置 `status`，支持 'finished'（完成）、'process'（进行中）、'error'（失败） 三种状态。

## Step Slot

| name | 说明 | 最低版本 |
|------|-----|---------|
| icon | 图标 | 1.2.10 |
| title | 标题 | 1.2.10 |
| description | 描述 | 1.2.10 |

## Steps 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|-----|---------|
| custom-class | 根节点样式 | - |

## Step 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |
