## SortButton 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-sort-button title="价格" v-model="value" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref<number>(0)

function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 按钮重置

按钮重置

```vue
<template>
<wd-sort-button title="价格" allow-reset/>
</template>

<script lang="ts" setup>
</script>
```

### 优先切换为降序

优先切换为降序

```vue
<template>
<wd-sort-button v-model="value" desc-first title="价格" />
</template>

<script lang="ts" setup>
</script>
```

### 取消展示下划线

取消展示下划线

```vue
<template>
<wd-sort-button v-model="value" :line="false" title="价格" />
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

