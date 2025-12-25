## Circle 组件示例

### 基础用法

基础用法

```vue
<template>
<wd-circle v-model="current" :text="`进度：${current}%`"></wd-circle>
</template>

<script lang="ts" setup>
const current = ref<number>(10)
</script>
```

### 宽度控制

宽度控制

```vue
<template>
<wd-circle v-model="current" :strokeWidth="15"></wd-circle>
</template>

<script lang="ts" setup>
</script>
```

### 颜色定制

颜色定制

```vue
<template>
<wd-circle v-model="current" color="#1C64FD" layer-color="#EBEEF5"></wd-circle>
</template>

<script lang="ts" setup>
</script>
```

### 渐变色

渐变色

```vue
<template>
<wd-circle v-model="current" :color="gradientColor"></wd-circle>
</template>

<script lang="ts" setup>
const gradientColor = {
  '0%': '#ffd01e',
  '100%': '#ee0a24'
}
</script>
```

### 进度条展开方向

进度条展开方向

```vue
<template>
<wd-circle v-model="current" :clockwise="false"></wd-circle>
</template>

<script lang="ts" setup>
</script>
```

### 大小定制

大小定制

```vue
<template>
<wd-circle v-model="current" :size="300"></wd-circle>
</template>

<script lang="ts" setup>
</script>
```

### Circle 外部样式类

Circle 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

