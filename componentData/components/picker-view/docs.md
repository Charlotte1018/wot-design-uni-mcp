#  PickerView 选择器视图

选择器视图，用于从一组数据中选择单个或多个值。

## 基本用法

单列选择器，给 `columns` 传入一个数值数组，设置 `v-model` 绑定值。选项可以为字符串，也可以为对象，如果为对象则默认取选项 `label` 属性为选项内容进行渲染，`v-model` 获取的值为选项 `value` 属性的值，如果选项 `value` 属性不存在，则取选项 `label` 的值。

当 `columns` 选项为对象时，其数据结构为：

| 参数 | 类型 | 说明 | 最低版本 |
|-----|-----|------|---------|
| value | string / number / boolean | 选项值，如果 value 属性不存在，则使用 label 作为选项的值 | - |
| label | string | 选项文本内容 | - |
| disabled | boolean | 选项是否禁用 | - |

## 禁用选项

选项可以为对象，设置 `disabled` 属性。

## 加载中

设置 `loading` 属性。

## 多列

`columns` 属性设置为二维数组，`value` 为数组。

## 多级联动

传入 `column-change` 属性，其类型为 `function`，接收 pickerView 实例、选中项、当前修改列的下标、resolve 作为入参，根据选中项和列下标进行判断，通过 pickerView 实例暴露出来的 `setColumnData` 方法修改其他列的数据源，当修改完成后需要执行 `resolve()` 告知组件修改完成以继续执行，如果 `column-change` 包含异步操作，也可以使组件按照异步顺序进行执行。

## Methods

| 方法名称 | 说明 | 参数 | 最低版本 |
|---------|-----|-----|---------|
| getLabels | 获取所有列选中项的文本，返回值为一个数组 | - |
| getColumnIndex | 获取某一列的选中项下标 | columnIndex | - |
| getColumnData | 获取某一列的选项 | columnIndex | - |
| setColumnData | 设置某一列的选项 | columnIndex, values | - |
| resetColumns | 重置列数据为指定列数据 | columns（类型与props中columns相同） | 1.3.9 |

## 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |
