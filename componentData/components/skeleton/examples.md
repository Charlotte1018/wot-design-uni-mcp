## Skeleton 组件示例

### 骨架图风格

骨架图风格

```vue
<template>
// 头像骨架屏
<wd-skeleton theme="avatar" />
// 图片骨架屏
<wd-skeleton theme="image" />
// 文本骨架屏
<wd-skeleton theme="text" />
// 段落骨架屏
<wd-skeleton theme="paragraph" />
</template>

<script lang="ts" setup>
</script>
```

### 宫格骨架屏

宫格骨架屏

```vue
<template>
<wd-skeleton :row-col="grid" />
</template>

<script lang="ts" setup>
const grid = [
  [
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' }
  ],
  [
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' }
  ]
]
</script>
```

### 单元格骨架屏

单元格骨架屏

```vue
<template>
<view style="display: flex">
  <wd-skeleton :row-col="[{ size: '48px', type: 'circle' }]" />
  <wd-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" :row-col="[{ width: '50%' }, { width: '100%' }]" />
</view>
<view style="display: flex; margin-top: 20px">
  <wd-skeleton :row-col="[{ size: '48px', type: 'rect' }]" />
  <wd-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" :row-col="[{ width: '50%' }, { width: '100%' }]" />
</view>
</template>

<script lang="ts" setup>
</script>
```

### 图片组合骨架屏

图片组合骨架屏

```vue
<template>
<view>
  <wd-skeleton :row-col="imageGroup" />
  <wd-skeleton :custom-style="{ marginTop: '20px' }" :row-col="imageGroup" />
</view>
</template>

<script lang="ts" setup>
const imageGroup = [
  { height: '171px' }, 1, { width: '107px' }, 
  [{ width: '93px' }, { width: '32px', marginLeft: '41px' }]
]
</script>
```

### 加载动画

加载动画

```vue
<template>
<wd-skeleton animation="gradient" theme="paragraph" />
<view style="display: flex">
  <wd-skeleton :row-col="[{ size: '48px', type: 'circle' }]" />
  <wd-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" animation="flashed" theme="paragraph" />
</view>
</template>

<script lang="ts" setup>
</script>
```

### 插槽内容

可以通过插槽写入展示的内容，当请求结束，将loading设置为false，此时会隐藏骨架组件，同时展示插槽内容。

```vue
<template>
<wd-skeleton 
  :row-col="[
    [
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' }
    ],
    [
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' }
    ]
  ]" 
  :loading="showContent"
>
  <wd-grid>
    <wd-grid-item icon-size="32px" icon="picture" text="文字" />
    <wd-grid-item icon-size="32px" icon="picture" text="文字" />
    <wd-grid-item icon-size="32px" icon="picture" text="文字" />
    <wd-grid-item icon-size="32px" icon="picture" text="文字" />
    <wd-grid-item icon-size="32px" icon="picture" text="文字" />
  </wd-grid>
</wd-skeleton>
</template>

<script lang="ts" setup>
const showContent = ref(true)
</script>
```

