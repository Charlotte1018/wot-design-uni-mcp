## Progress 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-progress :percentage="30" />
</template>

<script lang="ts" setup>
</script>
```

### 隐藏进度文字

隐藏进度文字

```vue
<template>
<wd-progress :percentage="60" hide-text></wd-progress>
</template>

<script lang="ts" setup>
</script>
```

### 设置状态

设置状态

```vue
<template>
<wd-progress :percentage="100" hide-text status="success" />
<wd-progress :percentage="70" hide-text status="danger" />
</template>

<script lang="ts" setup>
</script>
```

### 修改颜色

修改颜色

```vue
<template>
<wd-progress :percentage="80" color="#00c740"></wd-progress>

<wd-progress :percentage="100" :color="['#00c740', '#ffb300', '#e2231a', '#0083ff']" />

<wd-progress :percentage="percentage" :color="colorObject" />
</template>

<script lang="ts" setup>
import type { ProgressColor } from '@/uni_modules/wot-design-uni/components/wd-progress/types'

const colorObject = ref<ProgressColor>([
  {
    color: 'yellow',
    percentage: 30
  },
  {
    color: 'red',
    percentage: 60
  },
  {
    color: 'blue',
    percentage: 80
  },
  {
    color: 'black',
    percentage: 90
  }
])
const percentage = ref<number>(100)
</script>
```

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

