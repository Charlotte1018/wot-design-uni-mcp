## FloatingPanel 组件示例

### 基本用法

FloatingPanel 的初始高度会取

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

你可以通过

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

<style lang="css" scoped>
.inner-content {
  padding: 1rem;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
</style>
```

### 仅头部拖拽

默认情况下，<b>FloatingPanel</b> 的头部区域和内容区域都可以被拖拽，你可以通过

```vue
<template>
<wd-floating-panel :contentDraggable="false">
  <view class="inner-content">内容区不可以拖拽</view>
</wd-floating-panel>
</template>

<script lang="ts" setup>
</script>

<style lang="css" scoped>
.inner-content {
  padding: 1rem;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
</style>
```

### attributes

Attributes

| 参数                | 说明                                        | 类型     | 可选值 | 默认值                      | 最低版本         |
| ------------------- | ------------------------------------------- | -------- | ------ | --------------------------- | ---------------- |
| v-model:height      | 当前面板的显示高度                          | number   | -      | `0`                         | 1.3.12 |
| anchors             | 设置自定义锚点, 单位 `px`                   | number[] | -      | `[100, windowHeight * 0.6]` | 1.3.12 |
| duration            | 动画时长，单位`ms`，设置为 `0` 可以禁用动画 | number   | -      | `300`                       | 1.3.12 |
| contentDraggable    | 允许拖拽内容容器                            | boolean  | -      | `true`                      | 1.3.12 |
| safeAreaInsetBottom | 是否开启底部安全区适配                      | boolean  | -      | `false`                     | 1.3.12 |
| showScrollbar       | 是否开启滚动条                              | boolean  | -      | `true`                      | 1.3.12 |

### slots

Slots

| 名称 | 说明     | 最低版本         |
| ---- | -------- | ---------------- |
| —    | 默认插槽 | 1.3.12 |

### events

Events

| 方法名       | 说明                             | 参数                 | 最低版本         |
| ------------ | -------------------------------- | -------------------- | ---------------- |
| heightChange | 面板显示高度改变且结束拖动后触发 | `{ height: number }` | 1.3.12 |

### 外部样式类

外部样式类

| 类名         | 说明         | 最低版本         |
| ------------ | ------------ | ---------------- |
| custom-class | 根节点样式类 | 1.3.12 |
| custom-style | 根节点样式   | 1.3.12 |

