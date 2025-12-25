## Swiper 组件示例

### 基础用法

基础用法

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

### 视频轮播<el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.3.13</el-tag>

视频轮播<el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.3.13</el-tag>

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

<style lang="scss">
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

### 同时展示 2 个滑块

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

<style lang="scss">
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

<style lang="scss">
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

<style lang="scss">
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

通过默认插槽可以自定义轮播项的内容。

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

