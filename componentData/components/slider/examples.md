## Slider 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-slider v-model="value"/>
</template>

<script lang="ts" setup>
const value = ref<number>(30)
</script>
```

### 双滑块

双滑块

```vue
<template>
<wd-slider v-model="value" />
</template>

<script lang="ts" setup>
const value = ref<number[]>([10, 30])
</script>
```

### 最大值最小值

最大值最小值

```vue
<template>
<wd-slider v-model="value" :min="4" :max="1000" />
</template>

<script lang="ts" setup>
</script>
```

### 隐藏文案

隐藏文案

```vue
<template>
<wd-slider v-model="value" hide-label/>

<wd-slider v-model="value" hide-min-max />
</template>

<script lang="ts" setup>
</script>
```

### 禁用

禁用

```vue
<template>
<wd-slider v-model="value" disabled />
</template>

<script lang="ts" setup>
</script>
```

### Methods

对外暴露函数

| 事件名称 | 说明 | 参数 | 最低版本 |
|--------|------|-----|---------|
| initSlider | 初始化slider宽度数据 | - | 1.2.25 |

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |
| custom-min-class | 最小值自定义样式 | - |
| custom-max-class | 最大值自定义样式 | - |

