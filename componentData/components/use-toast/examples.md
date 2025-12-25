## UseToast 组件示例

### 基本用法

需要在页面中引入 wd-toast 组件作为挂载点。

```vue
<template>
<wd-toast />
<wd-button @click="showToast">toast</wd-button>
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'

const toast = useToast()

function showToast() {
  toast.show('提示信息')
}
</script>
```

### 成功、异常、警告、常规

成功、异常、警告、常规

```vue
<template>
</template>

<script lang="ts" setup>
toast.show('提示信息')
toast.success('操作成功')
toast.error('手机验证码输入错误，请重新输入')
toast.warning('提示信息')
toast.info('常规提示信息')
</script>
```

### 使用图标

使用图标

```vue
<template>
</template>

<script lang="ts" setup>
// 使用组件库内部图标
toast.show({
  iconClass: 'star',
  msg: '使用组件库内部图标'
})

// 使用自定义图标
toast.show({
  iconClass: 'kehuishouwu',
  classPrefix: 'fish',
  msg: '使用自定义图标'
})
</script>
```

### loading 提示

loading 提示

```vue
<template>
</template>

<script lang="ts" setup>
toast.loading('加载中...')

toast.loading({
  loadingType: 'ring',
  msg: '加载中...'
})

toast.close()
</script>
```

