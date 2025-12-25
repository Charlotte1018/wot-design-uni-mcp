## Swiper 组件示例

### 基础用法

设置

```vue
<template>
<wd-swiper :list="swiperList" autoplay v-model:current="current" @click="handleClick" @change="onChange"></wd-swiper>
</template>

<script lang="ts" setup>
const current = ref<number>(0)

const swiperList = ref([
  'https://wot-ui.cn/assets/redpanda.jpg',
  'https://wot-ui.cn/assets/capybara.jpg',
  'https://wot-ui.cn/assets/panda.jpg',
  'https://wot-ui.cn/assets/moon.jpg',
  'https://wot-ui.cn/assets/meng.jpg'
])
function handleClick(e) {
  console.log(e)
}
function onChange(e) {
  console.log(e)
}
</script>
```

### 点条状指示器

点条状指示器

```vue
<template>
<wd-swiper :list="swiperList" autoplay v-model:current="current" :indicator="{ type: 'dots-bar' }" @click="handleClick" @change="onChange"></wd-swiper>
</template>

<script lang="ts" setup>
</script>
```

### 数字指示器

数字指示器

```vue
<template>
<wd-swiper
  :list="swiperList"
  autoplay
  v-model:current="current"
  :indicator="{ type: 'fraction' }"
  indicatorPosition="bottom-right"
  @click="handleClick"
  @change="onChange"
></wd-swiper>
</template>

<script lang="ts" setup>
</script>
```

### 视频轮播el-tagtextstylevertical-alignmiddlemargin-left8pxeffectplain1313el-tag

:::danger 请注意

```vue
<template>
<wd-swiper :list="videoList" autoplay :indicator="false" indicator-position="bottom-right"></wd-swiper>
</template>

<script lang="ts" setup>
const videoList = ref([
  'https://unpkg.com/wot-design-uni-assets@1.0.3/VID_115503.mp4',
  'https://unpkg.com/wot-design-uni-assets@1.0.3/VID_150752.mp4',
  'https://unpkg.com/wot-design-uni-assets@1.0.3/VID_155516.mp4',
  'https://wot-ui.cn/assets/moon.jpg'
])
</script>
```

### 手动播放视频

手动播放视频

```vue
<template>
<wd-swiper :list="videoList" autoplay :autoplayVideo="false" :indicator="{ type: 'fraction' }" indicator-position="top-right"></wd-swiper>
</template>

<script lang="ts" setup>
const videoList = ref([
  'https://unpkg.com/wot-design-uni-assets/VID_115503.mp4',
  'https://unpkg.com/wot-design-uni-assets/VID_150752.mp4',
  'https://unpkg.com/wot-design-uni-assets/VID_155516.mp4'
])
</script>
```

### 播放视频时停止轮播

播放视频时停止轮播

```vue
<template>
<wd-swiper
  :list="videoList"
  autoplay
  stopAutoplayWhenVideoPlay
  :autoplayVideo="false"
  :indicator="{ type: 'fraction' }"
  indicator-position="top-right"
></wd-swiper>
</template>

<script lang="ts" setup>
const videoList = ref([
  'https://unpkg.com/wot-design-uni-assets/VID_115503.mp4',
  'https://unpkg.com/wot-design-uni-assets/VID_150752.mp4',
  'https://unpkg.com/wot-design-uni-assets/VID_155516.mp4'
])
</script>
```

### 手动切换

手动切换

```vue
<template>
<wd-swiper
  :list="swiperList"
  :autoplay="false"
  v-model:current="current"
  :indicator="{ showControls: true }"
  :loop="false"
  @click="handleClick"
  @change="onChange"
></wd-swiper>
</template>

<script lang="ts" setup>
</script>
```

### 卡片样式

卡片样式

```vue
<template>
<view class="card-swiper">
  <wd-swiper
    autoplay
    v-model:current="current"
    custom-indicator-class="custom-indicator-class"
    custom-image-class="custom-image"
    custom-next-image-class="custom-image-prev"
    custom-prev-image-class="custom-image-prev"
    :indicator="{ type: 'dots' }"
    :list="swiperList"
    previousMargin="24px"
    nextMargin="24px"
  ></wd-swiper>
</view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.card-swiper {
  --wot-swiper-radius: 0;
  --wot-swiper-item-padding: 0 24rpx;
  --wot-swiper-nav-dot-color: #e7e7e7;
  --wot-swiper-nav-dot-active-color: #4d80f0;
  padding-bottom: 24rpx;
  :deep(.custom-indicator-class) {
    bottom: -16px;
  }
  :deep(.custom-image) {
    border-radius: 12rpx;
  }
  :deep(.custom-image-prev) {
    height: 168px !important;
  }
}
</style>
```

### 同时展示2个滑块

同时展示 2 个滑块

```vue
<template>
<view class="card-swiper">
  <wd-swiper
    autoplay
    v-model:current="current"
    :display-multiple-items="2"
    custom-indicator-class="custom-indicator-class"
    custom-image-class="custom-image"
    custom-next-image-class="custom-image-prev"
    custom-prev-image-class="custom-image-prev"
    :indicator="{ type: 'dots' }"
    :list="swiperList"
    previousMargin="24px"
    nextMargin="24px"
  ></wd-swiper>
</view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.card-swiper {
  --wot-swiper-radius: 0;
  --wot-swiper-item-padding: 0 24rpx;
  --wot-swiper-nav-dot-color: #e7e7e7;
  --wot-swiper-nav-dot-active-color: #4d80f0;
  padding-bottom: 24rpx;
  :deep(.custom-indicator-class) {
    bottom: -16px;
  }
  :deep(.custom-image) {
    border-radius: 12rpx;
  }
  :deep(.custom-image-prev) {
    height: 168px !important;
  }
}
</style>
```

### 垂直方向

垂直方向

```vue
<template>
<wd-swiper
  :list="swiperList"
  direction="vertical"
  indicatorPosition="right"
  autoplay
  v-model:current="current"
  :indicator="{ type: 'dots-bar' }"
  @click="handleClick"
  @change="onChange"
></wd-swiper>
</template>

<script lang="ts" setup>
</script>
```

### 自定义指示器

自定义指示器

```vue
<template>
<wd-swiper :list="swiperList" direction="vertical" indicatorPosition="right" autoplay v-model:current="current" @click="handleClick" @change="onChange">
  <template #indicator="{ current, total }">
    <view class="custom-indicator" style="position: absolute; bottom: 24rpx; right: 24rpx">{{ current + 1 }}/{{ total }}</view>
  </template>
</wd-swiper>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.custom-indicator {
  padding: 0 12rpx;
  height: 48rpx;
  line-height: 48rpx;
  border-radius: 45%;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-size: 24rpx;
}
</style>
```

### 指定valueKey和textKey

指定valueKey和textKey

```vue
<template>
<wd-swiper value-key="url" text-key="title" :custom-text-style="color:#fff" :list="customSwiperList" autoplay v-model:current="current" @click="handleClick" @change="onChange"></wd-swiper>
</template>

<script lang="ts" setup>
const current = ref<number>(0)

const customSwiperList = ref([
  { url: 'https://wot-ui.cn/assets/redpanda.jpg', title: '小熊猫！' },
  { url: 'https://wot-ui.cn/assets/capybara.jpg', title: '卡！皮！巴！拉！' },
  { url: 'https://wot-ui.cn/assets/panda.jpg', title: '大熊猫！' },
  { url: 'https://wot-ui.cn/assets/moon.jpg', title: '诗画中国！' }
])
</script>

<style lang="scss" scoped>
:deep(.customTextClass) {
  position: absolute;
  top: 24rpx;
  right: 24rpx;
  color: #ffffff;
  font-size: 24rpx;
  text-shadow: 0 0 8rpx #000000;
}
</style>
```

### 属性控制切换

属性控制切换

```vue
<template>
<wd-swiper :loop="isLoop" :autoplay="false" :list="swiperList" v-model:current="current" />
<wd-gap />
<wd-cell-group>
  <wd-cell title="loop">
    <wd-switch v-model="isLoop" size="24px" />
  </wd-cell>
  <wd-cell title="current" :value="current.toString()" />
</wd-cell-group>
<view style="display: flex; justify-content: space-between">
  <wd-button @click="current--">prev</wd-button>
  <wd-button type="success" @click="current++">next</wd-button>
</view>
</template>

<script lang="ts" setup>
const current = ref <number>(0)
const isLoop = ref(false)
</script>
```

### 插槽用法

默认插槽可以自定义轮播项的内容。

```vue
<template>
<wd-swiper
  :list="swiperList"
  autoplay
  v-model:current="current"
  :indicator="{ type: 'dots-bar' }"
  @click="handleClick"
  @change="onChange"
>
  <template #default="{ item }">
    <image :src="item as string" mode="aspectFill" style="width: 100%; height: 100%" />
  </template>
</wd-swiper>
</template>

<script lang="ts" setup>
</script>
```

### attributes

Attributes

| 参数                      | 说明                                                               | 类型                              | 可选值                                                                                                 | 默认值       | 最低版本         |
| ------------------------- | ------------------------------------------------------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------ | ---------------- |
| autoplay                  | 是否自动播放                                                       | `boolean`                         | -                                                                                                      | true         | 0.1.22           |
| v-model:current           | 控制当前轮播在哪一项（下标）                                       | `number`                          | -                                                                                                      | 0            | 0.1.22           |
| direction                 | 轮播滑动方向                                                       | `DirectionType`                   | `horizontal, vertical`                                                                                 | horizontal   | 0.1.22           |
| displayMultipleItems      | 同时显示的滑块数量                                                 | `number`                          | -                                                                                                      | 1            | 0.1.22           |
| duration                  | 滑动动画时长                                                       | `number`                          | -                                                                                                      | 300          | 0.1.22           |
| easingFunction            | 切换缓动动画类型（微信小程序、快手小程序、京东小程序）             | `EasingType`                      | -                                                                                                      | default      | 0.1.22           |
| height                    | 轮播的高度                                                         | `string / number`                | -                                                                                                      | 192          | 0.1.22           |
| interval                  | 轮播间隔时间                                                       | `number`                          | -                                                                                                      | 5000         | 0.1.22           |
| list                      | 图片列表                                                           | `string[] / SwiperList[]`        | -                                                                                                      | -            | 0.1.22           |
| loop                      | 是否循环播放                                                       | `boolean`                         | -                                                                                                      | true         | 0.1.22           |
| nextMargin                | 后边距                                                             | `string / number`                | -                                                                                                      | 0            | 0.1.22           |
| indicatorPosition         | 指示器展示位置                                                     | `IndicatorPositionType`           | `left, top-left, top, top-right, bottom-left, bottom, bottom-right, right`                             | bottom       | 0.1.22           |
| previousMargin            | 前边距                                                             | `string / number`                | -                                                                                                      | 0            | 0.1.22           |
| snapToEdge                | 边距是否应用到第一个、最后一个元素                                 | `boolean`                         | -                                                                                                      | false        | 0.1.22           |
| indicator                 | 指示器全部配置                                                     | `SwiperIndicatorProps / boolean` | -                                                                                                      | true         | 0.1.22           |
| imageMode                 | 图片裁剪、缩放的模式                                               | `string`                          | 参考官方文档[mode](https://uniapp.dcloud.net.cn/component/image.html#mode-%E6%9C%89%E6%95%88%E5%80%BC) | `aspectFill` | 0.1.55           |
| autoplayVideo             | 视频是否自动播放，默认自动播放                                     | `boolean`                         | -                                                                                                      | true         | 1.3.13 |
| stopPreviousVideo         | 切换轮播项时是否停止上一个视频的播放，默认切换时停止播放上一个视频 | `boolean`                         | -                                                                                                      | true         | 1.3.13 |
| stopAutoplayWhenVideoPlay | 视频播放时是否停止自动轮播                                         | `boolean`                         | -                                                                                                      | false        | 1.3.13 |
| customStyle               | 外部自定义样式                                                     | `string`                          | -                                                                                                      | ''           | 0.1.22           |
| value-key          | 选项对象中，value 对应的 key        | `string`       | -       | `value`           | 1.3.7   |
| text-key          | 选项对象中，标题 text 对应的 key        | `string`       | -       | `text`           | 1.3.13   |
| adjust-height      | 自动以指定滑块的高度为整个容器的高度。当 vertical 为 true 时，默认不调整，仅支付宝小程序支持。| `string`       | `'first' / 'current' / 'highest' / 'none'`       |   `highest`  | 1.3.13   |
| adjust-vertical-height | vertical 为 true 时强制使 adjust-height 生效。仅支付宝小程序支持。 | `boolean`       | -       | `false`           | 1.3.13   |
｜ muted | 视频是否静音播放 | `boolean` | - | `true` | 1.6.0 |
| videoLoop | 视频是否循环播放 | `boolean` | - | `true` | 1.6.0 |



### DirectionType

轮播滑动方向，可选值为 `'horizontal'` 和 `'vertical'`。

### EasingType

切换缓动动画类型，可选值为 `'default'`、`'linear'`、`'easeInCubic'`、`'easeOutCubic'` 和 `'easeInOutCubic'`。

### IndicatorPositionType

页码信息展示位置，可选值为 `'left'`、`'top-left'`、`'top'`、`'top-right'`、`'bottom-left'`、`'bottom'`、`'bottom-right'` 和 `'right'`。

### SwiperList

轮播图项的列表配置，包括 图片或视频地址`value`、视频封面`poster` 、文件资源的类型`type`等属性，支持扩展属性。指定`type`后组件将不在内部判断文件类型，以`type`为准。
| name      | 说明          | 最低版本 |
| --------- | ------------ | -------- |
| value | 图片或视频地址 |-   |
| poster | 视频封面 |-   |
| type | 用于指定文件资源的类型，可选值`image`、`video` | 1.4.0 |


### SwiperIndicatorProps

| 参数                | 说明                       | 类型                  | 可选值                                                                     | 默认值     | 最低版本 |
| ------------------- | -------------------------- | --------------------- | -------------------------------------------------------------------------- | ---------- | -------- |
| current             | 当前轮播在哪一项（下标）   | Number                | -                                                                          | 0          | 0.1.22   |
| direction           | 轮播滑动方向               | DirectionType         | `horizontal, vertical`                                                     | horizontal | 0.1.22   |
| min-show-num        | 小于这个数字不会显示导航器 | Number                | -                                                                          | 2          | 0.1.22   |
| 参数                | 说明                       | 类型                  | 可选值                                                                     | 默认值     | 最低版本 |
| ------------------- | -------------------------- | --------------------- | -------------------------------------------------------------------------- | ---------- | -------- |
| current             | 当前轮播在哪一项（下标）   | Number                | -                                                                          | 0          | 0.1.22   |
| direction           | 轮播滑动方向               | DirectionType         | `horizontal, vertical`                                                     | horizontal | 0.1.22   |
| min-show-num        | 小于这个数字不会显示导航器 | Number                | -                                                                          | 2          | 0.1.22   |
| pagination-position | 页码信息展示位置           | IndicatorPositionType | `left, top-left, top, top-right, bottom-left, bottom, bottom-right, right` | bottom     | 0.1.22   |
| show-controls       | 是否显示控制按钮           | Boolean               | -                                                                          | false      | 0.1.22   |
| total               | 总共的项数                 | Number                | -                                                                          | 0          | 0.1.22   |
| type                | 导航器类型                 | SwiperIndicatorType   | `dots, dots-bar, fraction `                                                | dots       | 0.1.22   |
| autoplay            | 是否自动播放               | boolean               | -                                                                          | true       | 0.1.22   |

### events

Events

| 事件名称 | 说明             | 参数                                                        | 最低版本 |
| -------- | ---------------- | ----------------------------------------------------------- | -------- |
| click    | 点击轮播项时触发 | `(index: number, item: SwiperList \| string)`                                           | 0.1.22   |
| change   | 轮播切换时触发   | `(current: number, source: 'autoplay' \| 'touch' \| 'nav')	` | 0.1.22   |

### 外部样式类

外部样式类

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

