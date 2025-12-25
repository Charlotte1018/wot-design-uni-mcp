## Img 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-img :width="100" :height="100" :src="joy" />
</template>

<script lang="ts" setup>
// import { joy } from '../images/joy'
const joy = 'data:image/jpeg;base64,...' // 图片文件base64

// vite.config.(js|ts)

import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // ...
    uni({
      vueOptions: {
        template: {
          transformAssetUrls: {
            tags: {
              'wd-img': ['src']
            }
          }
        }
      }
    })
  ]
})
</script>
```

### 插槽

插槽

```vue
<template>
<template>
  <wd-img :width="100" :height="100" src="https://www.123.com/a.jpg">
    <template #error>
      <view class="error-wrap">加载失败</view>
    </template>
    <template #loading>
      <view class="loading-wrap">
        <wd-loading />
      </view>
    </template>
  </wd-img>
</template>

<style>
.error-wrap {
  width: 100%;
  height: 100%;
  background-color: red;
  color: white;
  line-height: 100px;
  text-align: center;
}

.loading-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
</template>

<script lang="ts" setup>
</script>
```

### 填充模式

填充模式

```vue
<template>
<wd-img :width="100" :height="100" mode="center" :src="joy" />
</template>

<script lang="ts" setup>
</script>
```

### 圆形设置

圆形设置

```vue
<template>
<wd-img :width="100" :height="100" round :src="joy" />
</template>

<script lang="ts" setup>
</script>
```

### 可预览

可预览

```vue
<template>
<wd-img :width="100" :height="100" :src="joy" :enable-preview="true" />

<wd-img :width="100" :height="100" :src="joy" :preview-src="img" :enable-preview="true" />
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名         | 说明                 | 最低版本 |
| ------------ | -------------------- | -------- |
| custom-class | 根节点样式           | -        |
| custom-image | image 外部自定义样式 | -        |

