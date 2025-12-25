## Divider 组件示例

### 基本使用

默认渲染一条水平分割线。

```vue
<template>
<wd-divider></wd-divider>
</template>

<script lang="ts" setup>
</script>
```

### 展示文本

使用默认插槽在分割线中间插入内容。

```vue
<template>
<wd-divider>展示文本</wd-divider>
</template>

<script lang="ts" setup>
</script>
```

### 自定义渲染内容

使用默认插槽在分割线中间插入自定义内容。

```vue
<template>
<wd-divider>
  <wd-icon name="arrow-down" size="20" color="#1989fa" />
</wd-divider>
</template>

<script lang="ts" setup>
</script>
```

### 内容位置

内容位置

```vue
<template>
<wd-divider>中间</wd-divider>
<wd-divider content-position="left">左侧</wd-divider>
<wd-divider content-position="right">右侧</wd-divider>
</template>

<script lang="ts" setup>
</script>
```

### 虚线

虚线

```vue
<template>
<wd-divider dashed>虚线分割</wd-divider>
</template>

<script lang="ts" setup>
</script>
```

### 自定义颜色

自定义颜色

```vue
<template>
<wd-divider color="#4D80F0">自定义颜色</wd-divider>
</template>

<script lang="ts" setup>
</script>
```

### 垂直分割线

垂直分割线

```vue
<template>
<view class="content">
  文本
  <wd-divider vertical />
  文本
  <wd-divider vertical dashed />
  文本
  <wd-divider vertical :hairline="false" />
  文本
  <wd-divider vertical color="#1989fa" />
  文本
</view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.content {
  padding: 12rpx 15px;
}
</style>
```

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

