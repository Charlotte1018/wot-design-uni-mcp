## Rate 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-rate v-model="value" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref<number>(1)

function changeValue({ value }) {
  console.log(value)
}
</script>
```

### 只读

只读

```vue
<template>
<wd-rate v-model="value" readonly />
</template>

<script lang="ts" setup>
</script>
```

### 禁用

禁用

```vue
<template>
<wd-rate :modelValue="2" disabled />
</template>

<script lang="ts" setup>
</script>
```

### 修改颜色

修改颜色

```vue
<template>
<wd-rate v-model="value" active-color="linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)" />
<wd-rate v-model="value" :active-color="['linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)', 'linear-gradient(315deg, rgba(245,34,34,1) 0%,rgba(255,117,102,1) 100%)']" />
</template>

<script lang="ts" setup>
</script>
```

### 修改icon

修改icon

```vue
<template>
<wd-rate v-model="value" icon="wd-icon-dong" active-icon="wd-icon-dong" active-color="#4D80F0"/>
</template>

<script lang="ts" setup>
</script>
```

### 修改大小、间隔

修改大小、间隔

```vue
<template>
<wd-rate v-model="value" size="30px" space="10px"/>
</template>

<script lang="ts" setup>
</script>
```

### 允许半选

允许半选

```vue
<template>
<wd-rate v-model="value" allow-half />
</template>

<script lang="ts" setup>
</script>
```

### 允许清空评分

允许清空评分

```vue
<template>
<wd-rate v-model="value" clearable />
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

