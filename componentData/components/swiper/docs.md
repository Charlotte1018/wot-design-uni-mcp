# Swiper 轮播

用于创建轮播，它支持水平和垂直方向的滑动，可以自定义样式和指示器位置，支持视频和图片资源的轮播，支持设置轮播标题和自定义标题样式。

:::danger 请注意
嵌入视频仅在`h5`、`微信小程序`和`钉钉小程序`支持，其余端不支持，请了解后使用。
:::

## 基础用法

通过设置 `autoplay` 属性控制轮播图是否自动播放，设置 `v-model:current` 属性初始化轮播图展示的滑块，监听滑块 `click` 来处理点击事件，而每一页轮播结束后，会触发 `change` 事件。

## 点条状指示器

## 数字指示器

## 视频轮播<el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.3.13</el-tag>

:::danger 请注意
嵌入视频仅在`h5`、`微信小程序`和`钉钉小程序`支持，其余端不支持，请了解后使用。
:::

## 手动播放视频

## 播放视频时停止轮播

## 手动切换

## 卡片样式

设置 `previousMargin` 和 `nextMargin` 实现卡片轮播的样式。

## 同时展示 2 个滑块

设置 `display-multiple-items` 属性，控制同时展示的滑块数量。

## 垂直方向

`direction` 设置为 `vertical` 后滑块会纵向排列。

## 自定义指示器

通过 `indicator` 插槽可以自定义指示器的样式。

## 指定valueKey和textKey

通过`value-key` 属性指定 `list` 中每个对象图片地址字段，默认为 `value`。

通过`text-key` 属性指定 `list` 中每个对象标题字段，默认为 `text`。
:::tip 提示
当前`swiper`提供的标题样式为顶部靠右，如需自定义样式，请使用外部样式类`customTextClass`或者自定义样式`customTextStyle`，使用`text-key`时请确认你的组件库版本是否包含此功能。
:::

## 属性控制切换

## 插槽用法

通过默认插槽可以自定义轮播项的内容。

## Slot

| name      | 说明         | 参数                                 | 最低版本 |
| --------- | ------------ | ------------------------------------ | -------- |
| indicator | 自定义指示器 | `{ current: number, total: number }` | 1.13.0   |
| default   | item展示内容 | `{ item: string | SwiperList, index: number }`       | 1.13.0   |

## 外部样式类

| 类名                 | 说明                 | 最低版本 |
| -------------------- | -------------------- | -------- |
| customClass          | 外部自定义类名       | 0.1.22   |
| customIndicatorClass       | 自定义指示器类名     | 0.1.22   |
| customImageClass     | 自定义图片类名，1.3版本将废弃，请使用`customItemClass`代替 | 0.1.22   |
| customPrevImageClass | 自定义上一个图片类名，1.3版本将废弃，请使用`customPrevClass`代替 | 0.1.22   |
| customNextImageClass | 自定义下一个图片类名，1.3版本将废弃，请使用`customNextClass`代替 | 0.1.22   |
| customItemClass     | 自定义子项类名       | 1.3.13   |
| customPrevClass | 自定义上一个子项类名 | 1.3.13   |
| customNextClass | 自定义下一个子项类名 | 1.3.13   |
| customTextClass | 自定义文字标题类名 | 1.3.13   |
| customTextStyle | 自定义文字标题样式 | 1.3.13   |
