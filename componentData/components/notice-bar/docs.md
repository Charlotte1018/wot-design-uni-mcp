# NoticeBar 通知栏

通知栏组件，用于在页面顶部展示通知提醒。

## 基本用法

设置 `text` 文本内容和 `prefix` 左侧图标。

## 类型修改

设置 `type` 可修改通知类型，通知类型共有三种 `info`|`warning`|`danger`，默认值为`warning`。

## 插槽演示

## 多行展示

设置 `wrapable` 属性为 `true` 且同时禁止滚动 `scrollable` 即可开启多行展示。

## 可关闭的

设置 `closable` 属性，使通知栏可以关闭。

## 自定义颜色

设置 `color` 修改文字和图标颜色，设置 `background-color` 修改背景颜色。

## 多文本轮播

将一个`string[]`传递给`text`属性，即可开启多文本轮播，并且会在展示下一条文本时触发`next`事件，该事件接收一个`number`参数，代表的是当前展示的文本数组索引

## 垂直滚动

1. `direction`传递`vertical`即可开启垂直滚动，目前仅支持一个方向的垂直滚动
2. `text`为数组时才会进行滚动

## 重置播放动画 <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.3.13</el-tag>
通过`ref`获取组件实例，调用`reset`方法即可重置播放动画。当你遇到`NoticeBar`的播放动画异常的情况时，可以调用`reset`方法重置动画。  

例如：在`APP-VUE`端，`Tabbar`页面使用`NoticeBar`时，从其它界面返回到`NoticeBar`页面，会偶发`NoticeBar`动画异常，此时可以调用`reset`方法重置动画。

参考issues：[#358](https://github.com/Moonofweisheng/wot-design-uni/issues/358)、[#650](https://github.com/Moonofweisheng/wot-design-uni/issues/650)

## Methods

| 方法名称 | 说明 | 参数 | 最低版本 |
|---------|-----|-----|---------|
| reset | 用于重置播放动画| - | 1.3.13 |

## Slot

| name    | 说明         | 类型 | 最低版本 |
| ------- | ------------ | ---- | -------- |
| prefix  | 前置图标     | -    | -        |
| suffix  | 后置插槽     | -    | -        |
| default | 通知文本内容 | -    | -        |

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
