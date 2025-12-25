## Curtain 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-button @click="handleClick">展示幕帘</wd-button>
<wd-curtain v-model="value" :src="img" :to="link"></wd-curtain>
</template>

<script lang="ts" setup>
const value = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick() {
  value.value = true
}
</script>
```

### 设置幕帘图片宽高

设置幕帘图片宽高

```vue
<template>
<wd-button @click="handleClick">展示幕帘</wd-button>
<wd-curtain v-model="value" :src="img" :to="link" width="280"></wd-curtain>
</template>

<script lang="ts" setup>
const value = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick() {
  value.value = true
}
</script>
```

### 修改关闭按钮位置

修改关闭按钮位置

```vue
<template>
<wd-button @click="handleClick">展示幕帘</wd-button>
<wd-curtain v-model="value" :src="img" :to="link" close-position="top" width="280"></wd-curtain>
</template>

<script lang="ts" setup>
const value = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick() {
  value.value = true
}
</script>
```

### 设置遮罩点击可关闭幕帘

设置遮罩点击可关闭幕帘

```vue
<template>
<wd-button @click="handleClick">展示幕帘</wd-button>
<wd-curtain v-model="value" :src="img" :to="link" close-position="bottom-right" width="280" close-on-click-modal></wd-curtain>
</template>

<script lang="ts" setup>
const value = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick() {
  value.value = true
}
</script>
```

### 外部样式类

外部样式类

| 类名               | 说明           | 最低版本         |
| ------------------ | -------------- | ---------------- |
| custom-class       | 根节点样式     | -                |
| custom-close-class | 关闭按钮样式类 | 1.5.0 |
| custom-close-style | 关闭按钮样式   | 1.5.0 |

