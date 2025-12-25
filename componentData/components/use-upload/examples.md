## UseUpload 组件示例

### 基础用法

基础用法

```vue
<template>
</template>

<script lang="ts" setup>
import { useUpload } from '@/uni_modules/wot-design-uni'

const { startUpload, abort, chooseFile, UPLOAD_STATUS } = useUpload()

// 选择文件
const files = await chooseFile({
  accept: 'image',
  multiple: true,
  maxCount: 9
})

// 开始上传
const file = {
  url: 'file://temp/image.png',
  status: UPLOAD_STATUS.PENDING,
  percent: 0
}

startUpload(file, {
  action: 'https://upload-url',
  onSuccess(res) {
    console.log('上传成功', res)
  },
  onError(err) {
    console.log('上传失败', err) 
  },
  onProgress(progress) {
    console.log('上传进度', progress)
  }
})

// 中断上传
abort()
</script>
```

