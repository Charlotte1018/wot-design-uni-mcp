## Navbar 组件示例

### 基础用法

基础用法

```vue
<template>
<wd-navbar title="标题"></wd-navbar>
</template>

<script lang="ts" setup>
</script>
```

### 返回上级

在导航栏实现返回上级功能。

```vue
<template>
<wd-navbar title="标题" left-text="返回" left-arrow @click-left="handleClickLeft"></wd-navbar>
</template>

<script lang="ts" setup>
function handleClickLeft() {
  uni.navigateBack()
}
</script>
```

### 右侧按钮

在导航栏右侧添加可点击的按钮。

```vue
<template>
<wd-toast></wd-toast>

<wd-navbar title="标题" left-text="返回" left-arrow right-text="按钮" @click-left="handleClickLeft" @click-right="handleClickRight"></wd-navbar>
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'

const { show: showToast } = useToast()


function handleClickRight() {
  showToast('按钮')
}
</script>
```

### 使用插槽

通过

```vue
<template>
<wd-navbar title="标题" left-text="返回" left-arrow>
  <template #right>
    <wd-icon name="search" size="18" />
  </template>
</wd-navbar>
</template>

<script lang="ts" setup>
</script>
```

### 固定在顶部

固定在顶部

```vue
<template>
<wd-navbar fixed placeholder title="Navbar 导航条" left-arrow safeAreaInsetTop></wd-navbar>
</template>

<script lang="ts" setup>
</script>
```

### 禁用按钮

禁用按钮

```vue
<template>
<wd-navbar title="标题" left-text="返回" right-text="按钮" left-arrow left-disabled right-disabled></wd-navbar>
</template>

<script lang="ts" setup>
</script>
```

### 胶囊样式

胶囊样式

```vue
<template>
<wd-navbar title="标题" left-text="返回" right-text="设置" left-arrow>
  <template #capsule>
    <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
  </template>
</wd-navbar>
</template>

<script lang="ts" setup>
function handleBack() {
  uni.navigateBack({})
}

function handleBackHome() {
  uni.reLaunch({ url: '/pages/index/Index' })
}
</script>
```

### 带搜索栏

带搜索栏

```vue
<template>
<wd-navbar left-text="返回" right-text="设置" left-arrow>
  <template #title>
    <view class="search-box">
      <wd-search v-model="keyword" hide-cancel placeholder-left></wd-search>
    </view>
  </template>
</wd-navbar>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.search-box {
  display: flex;
  height: 100%;
  align-items: center;
  --wot-search-padding: 0;
  --wot-search-side-padding: 0;
  :deep() {
    .wd-search {
      background: transparent;
    }
  }
}
</style>
```

### navbar-attributes

Navbar Attributes

| 参数          | 说明     | 类型    | 可选值 | 默认值 | 最低版本 |
| ------------- | -------- | ------- | ------ | ------ | -------- |
| title         | 卡片标题 | string  | -      | ''     | 0.1.33   |
| leftText      | 左侧文案 | string  | -      | ''     | 0.1.33   |
| rightText     | 右侧文案 | string  | -      | ''     | 0.1.33   |
| leftArrow     | 显示左侧箭头 | boolean | true, false | false | 0.1.33   |
| bordered      | 显示下边框 | boolean | true, false | true  | 0.1.33   |
| fixed         | 固定到顶部 | boolean | true, false | false | 0.1.33   |
| placeholder   | 固定在顶部时，在标签位置生成一个等高的占位元素 | boolean | true, false | false | 0.1.33   |
| zIndex        | 导航栏 z-index | number | -      | 1      | 0.1.33   |
| safeAreaInsetTop | 开启顶部安全区适配 | boolean | true, false | false | 0.1.33   |
| leftDisabled  | 禁用左侧按钮，禁用时透明度降低，且无法点击 | boolean | true, false | false | 0.1.33   |
| rightDisabled | 禁用右侧按钮，禁用时透明度降低，且无法点击 | boolean | true, false | false | 0.1.33   |

### navbar-events

Navbar Events

| 事件名称     | 说明                          | 参数                                           | 最低版本 |
| ------------ | ----------------------------- | ---------------------------------------------- | --------- |
| click-left   | 点击左侧按钮时触发            | -                                              | 0.1.33    |
| click-right  | 点击右侧按钮时触发            | -                                              | 0.1.33    |

### navbarcapsule-events

NavbarCapsule Events

| 事件名称     | 说明                          | 参数                                           | 最低版本 |
| ------------ | ----------------------------- | ---------------------------------------------- | --------- |
| back         | 点击返回按钮时触发             | -                                              | 0.1.33    |
| back-home    | 点击返回首页按钮时触发          | -                                              | 0.1.33    |

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式类 | 0.1.33 |
| custom-style | 根节点样式 | 0.1.33 |

