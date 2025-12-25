## Fab 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-fab :disabled="disabled" :type="type" :position="position" :direction="direction">
  <wd-button @click="showToast('一键三连')" :disabled="disabled" custom-class="custom-button" type="primary" round>
    <wd-icon name="github-filled" size="22px"></wd-icon>
  </wd-button>
  <wd-button @click="showToast('我要收藏')" :disabled="disabled" custom-class="custom-button" type="success" round>
    <wd-icon name="star" size="22px"></wd-icon>
  </wd-button>

  <wd-button @click="showToast('我要投币')" :disabled="disabled" custom-class="custom-button" type="error" round>
    <wd-icon name="money-circle" size="22px"></wd-icon>
  </wd-button>
  <wd-button @click="showToast('我要点赞')" :disabled="disabled" custom-class="custom-button" type="warning" round>
    <wd-icon name="thumb-up" size="22px"></wd-icon>
  </wd-button>
</wd-fab>
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'
const { show: showToast } = useToast()
const type = ref<'primary' | 'success' | 'info' | 'warning' | 'error' | 'default'>('primary')
const position = ref<'left-top' | 'right-top' | 'left-bottom' | 'right-bottom' | 'left-center' | 'right-center' | 'top-center' | 'bottom-center'>(
  'left-bottom'
)
const direction = ref<'top' | 'right' | 'bottom' | 'left'>('top')
const disabled = ref<boolean>(false)
</script>

<style lang="scss">
:deep(.custom-button) {
  min-width: auto !important;
  box-sizing: border-box;
  width: 32px !important;
  height: 32px !important;
  border-radius: 16px !important;
  margin: 8rpx;
}

:deep(.custom-radio) {
  height: 32px !important;
  line-height: 32px !important;
}
</style>
```

### 动作菜单展开/收起

动作菜单展开/收起

```vue
<template>
<wd-fab v-model:active="active"></wd-fab>
</template>

<script lang="ts" setup>
const active = ref<boolean>(false)
</script>
```

### 可拖动按钮

可拖动按钮

```vue
<template>
<wd-fab :draggable="true"></wd-fab>
</template>

<script lang="ts" setup>
</script>
```

### 自定义触发器

自定义触发器

```vue
<template>
<wd-fab position="left-bottom" :expandable="false">
  <template #trigger>
    <wd-button @click="handleClick" icon="share" type="error">分享给朋友</wd-button>
  </template>
</wd-fab>
</template>

<script lang="ts" setup>
const handleClick = () => {
  console.log('点击了')
}
</script>
```

### Methods

Methods

| 方法名 | 说明     | 参数 | 最低版本 |
| ------ | -------- | ---- | -------- |
| open   | 展开菜单 | -    | 0.1.57   |
| close  | 收起菜单 | -    | 0.1.57   |

### 外部样式类

外部样式类

| 类名         | 说明         | 最低版本 |
| ------------ | ------------ | -------- |
| custom-class | 自定义样式类 | 0.1.57   |

