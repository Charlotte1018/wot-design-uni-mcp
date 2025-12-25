## ImgCropper 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-img-cropper
  v-model="show"
  :img-src="src"
  @confirm="handleConfirm"
  @cancel="handleCancel"
>
</wd-img-cropper>
<view class="profile">
  <view v-if="!imgSrc" class="img" @click="upload">
    <wd-icon name="fill-camera" custom-class="img-icon"></wd-icon>
  </view>
  <wd-img v-if="imgSrc" round width="200px" height="200px" :src="imgSrc" mode="aspectFit" custom-class="profile-img" @click="upload" />
  <view style="font-size: 14px;">点击上传头像</view>
</view>
</template>

<script lang="ts" setup>
const src = ref<string>('')
const imgSrc = ref<string>('')
const show = ref<boolean>(false)

function upload() {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      const tempFilePaths = res.tempFilePaths[0]
      src.value = tempFilePaths
      show.value = true
    }
  })
}
function handleConfirm(event) {
  const { tempFilePath } = event
  imgSrc.value = tempFilePath
}
function imgLoaderror(res) {
  console.log('加载失败', res)
}
function imgLoaded(res) {
  console.log('加载成功', res)
}
function handleCancel(event) {
  console.log('取消', event)
}
</script>
```

### 自定义裁剪比例

自定义裁剪比例

```vue
<template>
<wd-img-cropper
  v-model="show"
  :img-src="src"
  aspect-ratio="3:2"
  @confirm="handleConfirm"
  @cancel="handleCancel"
>
</wd-img-cropper>

<wd-img-cropper
  v-model="show"
  :img-src="src"
  aspect-ratio="16:9"
  @confirm="handleConfirm"
  @cancel="handleCancel"
>
</wd-img-cropper>

<wd-img-cropper
  v-model="show"
  :img-src="src"
  aspect-ratio="16:10"
  @confirm="handleConfirm"
  @cancel="handleCancel"
>
</wd-img-cropper>
</template>

<script lang="ts" setup>
</script>
```

### 裁剪后上传

裁剪后上传

```vue
<template>
<wd-img-cropper
  v-model="show"
  :img-src="src"
  @confirm="handleConfirmUpload"
  @cancel="handleCancel"
>
</wd-img-cropper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUpload, useToast } from '@/uni_modules/wot-design-uni'
import { type UploadFileItem } from '@/uni_modules/wot-design-uni/components/wd-upload/types'

const { startUpload, UPLOAD_STATUS } = useUpload()
const { show: showToast } = useToast()

const show = ref(false)
const src = ref('')
const imgSrc = ref('')

async function handleConfirmUpload(event) {
  const { tempFilePath } = event
  
  // 构建上传文件对象
  const file: UploadFileItem = {
    url: tempFilePath,
    status: UPLOAD_STATUS.PENDING,
    percent: 0,
    uid: new Date().getTime()
  }

  try {
    // 开始上传
    await startUpload(file, {
      action: 'https://your-upload-url',
      onSuccess() {
        imgSrc.value = tempFilePath
        showToast({
          msg: '上传成功'
        })
      },
      onError() {
        showToast({
          msg: '上传失败'
        })
      },
      onProgress(res) {
        console.log('上传进度:', res.progress)
      }
    })
  } catch (error) {
    console.error('上传失败:', error)
  }
}
</script>
```

### Methods

对外暴露函数

| 事件名称 | 说明 | 参数 | 最低版本 |
|--------|------|-----|---------|
| setRoate | 设置图片旋转角度 | deg (设置的旋转角度)| - |
| resetImg | 重置图片的角度、缩放、位置 | - | - |

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

