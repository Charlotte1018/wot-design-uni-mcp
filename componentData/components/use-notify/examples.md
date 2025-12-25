## UseNotify 组件示例

### 基本用法

需要在页面中引入 wd-notify 组件作为挂载点。

```vue
<template>
<wd-notify />
<wd-button @click="showNotify">notify</wd-button>
</template>

<script lang="ts" setup>
import { useNotify } from '@/uni_modules/wot-design-uni'

const { showNotify } = useNotify()

function showNotify() {
  showNotify('通知内容')
}
</script>
```

### 通知类型

通知类型

```vue
<template>
</template>

<script lang="ts" setup>
// 主要通知
showNotify({ type: 'primary', message: '通知内容' })

// 成功通知
showNotify({ type: 'success', message: '通知内容' })

// 危险通知
showNotify({ type: 'danger', message: '通知内容' })

// 警告通知
showNotify({ type: 'warning', message: '通知内容' })
</script>
```

### 自定义样式

自定义样式

```vue
<template>
</template>

<script lang="ts" setup>
showNotify({
  message: '自定义颜色',
  color: '#ad0000',
  background: '#ffe1e1'
})

showNotify({
  message: '自定义位置',
  position: 'bottom'
})

showNotify({
  message: '自定义时长',
  duration: 1000
})
</script>
```

