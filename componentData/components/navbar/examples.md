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

使用插槽

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

<style lang="scss">
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

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式类 | 0.1.33 |
| custom-style | 根节点样式 | 0.1.33 |

