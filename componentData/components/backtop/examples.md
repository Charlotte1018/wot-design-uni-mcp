## Backtop 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-backtop :scrollTop="scrollTop"></wd-backtop>
</template>

<script lang="ts" setup>
const scrollTop = ref<number>(0)
onPageScroll((e) => {
  scrollTop.value = e.scrollTop
})
</script>
```

### 自定义图标

自定义图标

```vue
<template>
<wd-backtop :scrollTop="scrollTop">
    <text>TOP<text>
  </wd-backtop>
</template>

<script lang="ts" setup>
</script>
```

### 自定义样式

自定义样式

```vue
<template>
<wd-backtop :scrollTop="scrollTop" customStyle="background: #007aff;color:white;"></wd-backtop>
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
| custom-style | 根节点样式 | -        |

