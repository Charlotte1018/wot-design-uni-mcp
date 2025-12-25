# Transition 动画

用于在元素进入或离开时应用过渡效果。

## 基本用法

将元素包裹在 `wd-transition` 标签中，并设置 `show` 来切换显隐，设置 `name` 选择动画。

## 动画类型

`wd-transition` 内置了常用的动画，如 `fade`、`slide`、`zoom-in` 等。

## 动画时间

可以通过 `duration` 设置动画执行时间，动画拆分为 `enter` 进入动画和 `leave` 离开动画，`duration` 可以分别设置进入动画执行时间和离开动画执行时间： `{ enter: 300, leave: 500 }`。

## 自定义动画

可以通过 `enter-class`、`enter-active-class`、`enter-to-class`、`leave-class`、`leave-active-class`、`leave-to-class` 设置自定义动画的类名。

在动画进入时，会给标签设置 `enter-class` 和 `enter-active-class` 样式，在下一帧切换为 `enter-to-class` 和 `enter-active-class` 样式，因此进入动画是从 `enter-class` 样式切换为 `enter-to-class` 样式状态，`enter-active-class` 设置 `transition` 相关属性。

在动画离开时，会给标签设置 `leave-class` 和 `leave-active-class` 样式，在下一帧切换为 `leave-to-class` 和 `leave-active-class` 样式，因此离开动画是从 `leave-class` 样式切换为 `leave-to-class` 样式状态，`leave-active-class` 设置 `transition` 相关属性。

## 外部样式类

| 类名               | 说明                                                                                                                   | 最低版本 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| custom-class       | 根节点样式                                                                                                             | -        |
| enter-class        | 定义进入过渡的开始状态，在元素被插入前生效，在插入的下一帧移除                                                         | -        |
| enter-active-class | 定义动画执行期间的状态，在整个进入动画中应用；在元素被插入前生效，在动画结束后移除；可以定义 transition 相关属性       | -        |
| enter-to-class     | 定义进入过渡的结束状态，在元素被插入的下一帧生效，在动画结束后移除                                                     | -        |
| leave-class        | 定义离开过渡的开始状态，在离开动画触发时立即生效，在下一帧移除                                                         | -        |
| leave-active-class | 定义动画执行期间的状态，在整个离开动画中应用；在离开动画触发时立即生效，在动画结束后移除；可以定义 transition 相关属性 | -        |
| leave-to-class     | 定义离开过渡的结束状态，在离开动画触发时的下一帧生效，在动画结束后移除                                                 | -        |
