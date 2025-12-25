## Loading 组件示例

### 基本用法

基本用法，适用于按钮加载状态和页面轻提示。

```vue
<template>
<wd-loading />
</template>

<script lang="ts" setup>
</script>
```

### 修改指示器类型

修改指示器类型

```vue
<template>
<wd-loading type="outline" />
</template>

<script lang="ts" setup>
</script>
```

### 修改颜色

修改颜色

```vue
<template>
<wd-loading color="#ffffff" custom-class="loading-black" />

<!-- 以下为错误写法 -->
<wd-loading color="#fff" />
<wd-loading color="green" />
<wd-loading color="rgba(255,255,255,1)" />
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
:deep(.loading-black) {
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 4px;
}
</style>
```

### 修改指示器大小

修改指示器大小

```vue
<template>
<wd-loading :size="20" />
<wd-loading :size="30" />
<wd-loading size="50px" />
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

