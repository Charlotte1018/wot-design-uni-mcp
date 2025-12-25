## Img 组件示例

### 基本用法

基础用法与原生 image 标签一致，可以设置

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

使用

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

<script lang="ts" setup>
</script>

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

设置

```vue
<template>
<wd-img :width="100" :height="100" :src="joy" :enable-preview="true" />

<wd-img :width="100" :height="100" :src="joy" :preview-src="img" :enable-preview="true" />
</template>

<script lang="ts" setup>
</script>
```

### attributes

Attributes

| 参数                   | 说明                                               | 类型            | 可选值                                                                                                                                                                             | 默认值        | 最低版本         |
| ---------------------- | -------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------- |
| src                    | 图片链接                                           | string          | -                                                                                                                                                                                  | -             | -                |
| width                  | 宽度，默认单位为 px                                | number / string | -                                                                                                                                                                                  | -             | -                |
| height                 | 高度，默认单位为 px                                | number / string | -                                                                                                                                                                                  | -             | -                |
| mode                   | 填充模式                                           | ImageMode       | 'top left' / 'top right' / 'bottom left' / 'bottom right' / 'right' / 'left' / 'center' / 'bottom' / 'top' / 'heightFix' / 'widthFix' / 'aspectFill' / 'aspectFit' / 'scaleToFill' | 'scaleToFill' | -                |
| round                  | 是否显示为圆形                                     | boolean         | -                                                                                                                                                                                  | false         | -                |
| radius                 | 圆角大小，默认单位为 px                            | number / string | -                                                                                                                                                                                  | -             | -                |
| enable-preview         | 是否支持点击预览                                   | boolean         | -                                                                                                                                                                                  | false         | 1.2.11           |
| show-menu-by-longpress | 开启长按图片显示识别小程序码菜单，仅微信小程序支持 | boolean         | -                                                                                                                                                                                  | false         | 1.3.11 |
| preview-src             | 预览图片链接                                     | string           |  -                                                                                 | -             | 1.8.0 |

### events

Events

| 事件名称 | 说明                 | 参数                        | 最低版本 |
| -------- | -------------------- | --------------------------- | -------- |
| click    | 点击事件             | (event: MouseEvent) => void | -        |
| load     | 当图片载入完毕时触发 | `{height, width}`           | -        |
| error    | 当错误发生时触发     | `{errMsg}`                  | -        |

### slots

Slots

| 名称    | 说明               | 最低版本 |
| ------- | ------------------ | -------- |
| loading | 图片加载时展示     | 1.2.21   |
| error   | 图片加载失败后展示 | 1.2.21   |

### 外部样式类

外部样式类

| 类名         | 说明                 | 最低版本 |
| ------------ | -------------------- | -------- |
| custom-class | 根节点样式           | -        |
| custom-image | image 外部自定义样式 | -        |

