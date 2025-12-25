# CountTo 数字滚动

数字滚动组件。

## 基本用法

设置 `endVal` 属性，表示最终值。
设置 `startVal` 属性，表示起始值。
设置 `duration` 属性，表示从起始值到结束值数字变动的时间。
设置 `autoplay` 属性，表示是否自动播放。
设置 `decimals` 属性，表示保留的小数位数。
设置 `decimal` 属性，表示小数点符号。
设置 `prefix` 属性，表示数字前缀。
设置 `suffix` 属性，表示数字后缀。
设置 `fontSize` 属性，表示字体大小。
设置 `color` 属性，表示文本颜色。

## 设置主题

通过<code>type</code>参数设置文本主题，我们提供了五类属性：<code>primary</code> <code>error</code> <code>success</code> <code>warning</code> <code>default-默认</code>。

## 手动控制

通过 `start` 方法开始倒计时，通过 `pause` 方法暂停倒计时，通过 `reset` 方法重置倒计时。

## Methods

| 方法名 | 说明                                                        | 参数 | 最低版本 |
| ------ | ----------------------------------------------------------- | ---- | -------- |
| start  | 开始动画                                                    | —    | 1.3.8    |
| pause  | 暂停动画                                                    | —    | 1.3.8    |
| reset  | 重置动画，若 `auto-start` 为 `true`，重设后会自动开始倒计时 | —    | 1.3.8    |

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | 1.3.8    |
| custom-style | 根节点样式 | 1.3.8    |
