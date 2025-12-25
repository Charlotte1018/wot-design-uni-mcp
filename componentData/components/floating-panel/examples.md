## FloatingPanel 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-floating-panel>
  <wd-cell-group border>
    <wd-cell v-for="item in data" :key="item" :title="item" />
  </wd-cell-group>
</wd-floating-panel>
</template>

<script lang="ts" setup>
const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
</script>
```

### 自定义锚点

自定义锚点

```vue
<template>
<wd-floating-panel v-model:height="height" :anchors="anchors" @heightChange="handleHeightChange">
  <view class="inner-content">自定义锚点 {{ anchors }} - {{ height.toFixed(0) }}</view>
</wd-floating-panel>
</template>

<script lang="ts" setup>
const height = ref<number>(0)
const windowHeight = ref<number>(0)
const anchors = ref<number[]>([])

const handleHeightChange = ({ height }: { height: number }) => {
  console.log(height)
}

onLoad(() => {
  windowHeight.value = uni.getSystemInfoSync().windowHeight
  anchors.value = [100, Math.round(0.4 * windowHeight.value), Math.round(0.7 * windowHeight.value)]
  height.value = anchors.value[1]
})
</script>

<style lang="scss">
.inner-content {
  padding: 1rem;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
</style>
```

### 仅头部拖拽

仅头部拖拽

```vue
<template>
<wd-floating-panel :contentDraggable="false">
  <view class="inner-content">内容区不可以拖拽</view>
</wd-floating-panel>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.inner-content {
  padding: 1rem;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
</style>
```

### 外部样式类

外部样式类

| 类名         | 说明         | 最低版本         |
| ------------ | ------------ | ---------------- |
| custom-class | 根节点样式类 | 1.3.12 |
| custom-style | 根节点样式   | 1.3.12 |

