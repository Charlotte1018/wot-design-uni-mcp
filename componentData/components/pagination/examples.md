## Pagination 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-pagination v-model="value" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref<number>(1)
function handleChange({ value }) {
  console.log(value)
}
</script>
```

### Icon图标

Icon图标

```vue
<template>
<wd-pagination v-model="value" @change="handleChange" show-icon ></wd-pagination>
</template>

<script lang="ts" setup>
</script>
```

### 文字提示

文字提示

```vue
<template>
<wd-pagination 
  v-model="value" 
  :total="total" 
  :page-size="page" 
  @change="handleChange" 
  show-icon 
  show-message
/>
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

