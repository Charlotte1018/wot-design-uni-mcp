# Tab 标签页

标签页组件，用于在不同的内容区域之间进行切换。

## 基本用法

`v-model` 为绑定值，可以为 number 类型（选中的 tab 的下标）和 string 类型（标签名）。

:::tip 提示
当`v-model`为`number`类型时，`wd-tab`可以不必设置`name`。同时如果 value 超出了 tab 数量，会用 0 自动兜底。
:::

## name 匹配

为`wd-tab`设置`name`作为唯一标识。

## 使用徽标<el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.4.0</el-tag>

使用`bage-props`设置徽标属性，可以参考[Badge 组件的 props](/component/badge#attributes)。

## 自动调整底部条宽度

设置 `auto-line-width` 属性，自动调整底部条宽度为文本内容宽度。

## 粘性布局

设置 `sticky` 属性，使用粘性布局。可以设置 `offset-top` 属性，当距离窗口顶部多少像素时，固定标签头。在`H5`端使用自定义导航栏时需要参考[sticky 的吸顶距离](/component/sticky.html#吸顶距离)进行配置。

## 禁用 Tab

在 `wd-tab` 上设置 `disabled` 属性，禁用某个页签。

## 点击事件

监听页签的点击事件.

## 手势滑动

设置 `swipeable` 属性，支持手势滑动。

## 切换动画

设置 `animated` 属性，开启切换标签内容时的过渡动画。

## 左对齐超出即可滚动 <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.4.0</el-tag>

`slidable`设置为`always`时，所有的标签会向左侧收缩对齐，超出即可滑动。

---

标签页在标签数大于等于 6 个时，可以滑动；当标签数大于等于 10 个时，将会显示导航地图，便于快速定位到某个标签。可以通过设置 `slidable-num` 修改可滑动的数量阈值；设置 `map-num` 修改显示导航地图的阈值。`slidable`设置为`always`时，所有的标签会向左侧收缩对齐，超出即可滑动。

## 在弹出框中使用

微信小程序端，在弹出框中使用本组件时，需要调用 `updateLineStyle` 方法更新激活项样式，参见[常见问题](/guide/common-problems.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E5%9C%A8%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%8A%E4%BD%BF%E7%94%A8popup%E3%80%81actionsheet%E3%80%81dropdownitem%E7%AD%89%E5%BC%B9%E5%87%BA%E6%A1%86%E7%BB%84%E4%BB%B6%E5%8C%85%E8%A3%B9slider%E3%80%81tabs%E7%AD%89%E7%BB%84%E4%BB%B6%E6%97%B6-slider%E3%80%81tabs%E8%A1%A8%E7%8E%B0%E5%BC%82%E5%B8%B8)。

## Methods

对外暴露函数

| 事件名称        | 说明                                                                                                | 参数                                                                   | 最低版本 |
| --------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------- |
| setActive       | 设置激活项，参数分别为：`value` 激活值，`init` 是否已初始化 ，`setScroll` 是否设置 scroll-view 滚动 | `(value: number \| string, init: boolean, setScroll: boolean) => void` | -        |
| scrollIntoView  | 使选中项滚动到可视区域                                                                              | -                                                                      | -        |
| updateLineStyle | 更新激活项边框线样式，参数`animation`用于是否开启动画，默认开启                                     | `(animation: boolean) => void`                                         | -        |

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
