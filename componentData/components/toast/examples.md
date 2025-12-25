## Toast 组件示例

### 基本用法

需要在页面中引入该组件，作为挂载点。

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

### 成功异常警告常规

成功、异常、警告、常规

```vue
<template>
  <view></view>
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

使用

```vue
<template>
  <view></view>
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

### 提示位置

设置

```vue
<template>
  <view></view>
</template>

<script lang="ts" setup>
// 顶部提示
toast.show({
  position: 'top',
  msg: '提示信息'
})

// 局中提示
toast.show({
  position: 'middle',
  msg: '提示信息'
})

// 底部提示
toast.show({
  position: 'bottom',
  msg: '提示信息'
})
</script>
```

### 排版方向

排版方向

```vue
<template>
  <view></view>
</template>

<script lang="ts" setup>
// 纵向排版
toast.success({
  msg: '纵向排版',
  direction: 'vertical'
})
</script>
```

### 关闭提示

关闭提示

```vue
<template>
  <view></view>
</template>

<script lang="ts" setup>
toast.close()
</script>
```

### loading提示

loading 提示

```vue
<template>
  <view></view>
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

### attributes

Attributes

| 参数         | 说明                                     | 类型     | 可选值                                     | 默认值     | 最低版本         |
|--------------|------------------------------------------|----------|--------------------------------------------|------------|------------------|
| selector     | 选择器                                   | string   | -                                          | ''         | -                |
| msg          | 提示信息                                 | string   | -                                          | ''         | 1.7.0 |
| direction    | 排列方向                                 | string   | vertical / horizontal                      | horizontal | 1.7.0 |
| iconName     | 图标类型                                 | string   | success / error / warning / loading / info | ''         | 1.7.0 |
| iconSize     | 图标大小                                 | number   | -                                          | -          | 1.7.0 |
| loadingType  | 加载类型                                 | string   | outline / ring                             | outline    | 1.7.0 |
| loadingColor | 加载颜色                                 | string   | -                                          | #4D80F0    | 1.7.0 |
| loadingSize  | 加载大小                                 | number   | -                                          | -          | 1.7.0 |
| iconColor    | 图标颜色                                 | string   | -                                          | -          | 1.7.0 |
| position     | 提示信息框的位置                         | string   | top / middle-top / middle / bottom         | middle-top | 1.7.0 |
| zIndex       | 层级                                     | number   | -                                          | 100        | 1.7.0 |
| cover        | 是否存在遮罩层                           | boolean  | -                                          | false      | 1.7.0 |
| iconClass    | 图标类名                                 | string   | -                                          | ''         | 1.7.0 |
| classPrefix  | 类名前缀，用于使用自定义图标             | string   | -                                          | wd-icon    | 1.7.0 |
| opened       | 完全展示后的回调函数                     | Function | -                                          | -          | 1.7.0 |
| closed       | 完全关闭时的回调函数                     | Function | -                                          | -          | 1.7.0 |

### methods

Methods

| 方法名称 | 说明                                      | 参数    | 最低版本 |
| -------- | ----------------------------------------- | ------- | -------- |
| success  | 成功提示                                  | options | -        |
| error    | 错误提示                                  | options | -        |
| info     | 常规提示                                  | options | -        |
| warning  | 警告提示                                  | options | -        |
| loading  | 加载提示                                  | options | -        |
| close    | 手动关闭消息提示框，是 Toast 实例上的方法 | -       | -        |

### 外部样式类

外部样式类

| 类名              | 说明           | 最低版本 |
| ----------------- | -------------- | -------- |
| custom-class      | 根节点样式     | -        |

