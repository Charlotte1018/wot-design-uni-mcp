## Resize 组件示例

### 基本用法

> 不要给此组件增加任何外部样式

```vue
<template>
<wd-resize @resize="handleResize">
  <view :style="`background: #4d80f0; width: ${width};height: ${height}`"></view>
</wd-resize>
</template>

<script lang="ts" setup>
const width = ref<string>('')
const height = ref<string>('')

onReady(() => {
  setTimeout(() => {
    width.value = '100px'
    height.value = '100px'
  }, 1500)
})

function handleResize(detail: Record<string, string | number>) {
  const { height, width, top, right, bottom, left } = detail
  console.log(height, width, top, right, bottom, left)
}
</script>
```

### attributes

Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|-----|------|-----|-------|--------|---------|
| custom-style | 自定义根节点样式 | string | - | - | - |
| custom-class | 自定义根节点样式类 | string | - | - | - |
| custom-container-class | 自定义容器样式类 | string | - | - | - |

### events

Events

| 事件名称 | 说明 | 参数 | 最低版本 |
|--------|------|-----|---------|
| resize | 尺寸发生变化时触发 | `{width: number, height: number, top: number, right: number, bottom: number, left: number}` | - |

### slots

Slots

| 插槽名称 | 说明 | 最低版本 |
|---------|------|---------|
| default | 需要监听尺寸变化的内容 | - |

