# Curtain 幕帘

一般用于公告类的图片弹窗。

## 基本用法

通过 `v-model` 属性设置显示隐藏，必填项。

`src` 为幕帘图片地址（只支持在线地址），值为 `string` 类型，必填项。

`to` 为幕帘点击访问链接，值为 `string` 类型，非必填项。

## 设置幕帘图片宽高

设置 `width`，默认高度为图片原始比例与传入`width`计算所得, 必填项。

## 修改关闭按钮位置

设置 `close-position`，默认为 'inset'，可选值 'top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'。

## 设置遮罩点击可关闭幕帘

设置 `close-on-click-modal` 属性，值为`boolean` 类型，非必填项。

## 外部样式类

| 类名               | 说明           | 最低版本         |
| ------------------ | -------------- | ---------------- |
| custom-class       | 根节点样式     | -                |
| custom-close-class | 关闭按钮样式类 | 1.5.0 |
| custom-close-style | 关闭按钮样式   | 1.5.0 |
