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

