## Upload 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-upload :file-list="fileList" image-mode="aspectFill" :action="action" @change="handleChange"></wd-upload>
</template>

<script lang="ts" setup>
const fileList = ref<any[]>([
  {
    url: 'https://img12.360buyimg.com//n0/jfs/t1/29118/6/4823/55969/5c35c16bE7c262192/c9fdecec4b419355.jpg'
  }
])

const action: string = 'https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload'

function handleChange({ fileList: files }) {
  fileList.value = files
}
</script>
```

### 双向绑定 `1.3.8`

双向绑定 `1.3.8`

```vue
<template>
<wd-upload v-model:file-list="fileList1" image-mode="aspectFill" :action="action"></wd-upload>
</template>

<script lang="ts" setup>
const fileList = ref<any[]>([
  {
    url: 'https://img12.360buyimg.com//n0/jfs/t1/29118/6/4823/55969/5c35c16bE7c262192/c9fdecec4b419355.jpg'
  }
])

const action: string = 'https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload'
</script>
```

### 禁用

禁用

```vue
<template>
<wd-upload
  :file-list="fileList"
  action="https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload"
  @change="handleChange"
  disabled
></wd-upload>
</template>

<script lang="ts" setup>
</script>
```

### 多选上传

多选上传

```vue
<template>
<wd-upload
  :file-list="fileList"
  multiple
  action="https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload"
  @change="handleChange"
></wd-upload>
</template>

<script lang="ts" setup>
</script>
```

### 最大上传数限制

最大上传数限制

```vue
<template>
<wd-upload
  :file-list="fileList"
  :limit="3"
  action="https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload"
  @change="handleChange"
></wd-upload>
</template>

<script lang="ts" setup>
</script>
```

### 覆盖上传

覆盖上传

```vue
<template>
<wd-upload
  :file-list="fileList"
  reupload
  action="https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload"
  @change="handleChange"
></wd-upload>
</template>

<script lang="ts" setup>
</script>
```

### 拦截预览图片操作

拦截预览图片操作

```vue
<template>
<wd-upload
  :file-list="fileList"
  action="https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload"
  @change="handleChange"
  :before-preview="beforePreview"
></wd-upload>
</template>

<script lang="ts" setup>
import { useToast, useMessage } from '@/uni_modules/wot-design-uni'

const messageBox = useMessage()
const toast = useToast()
const fileList = ref<any[]>([
  {
    url: 'https://img12.360buyimg.com//n0/jfs/t1/29118/6/4823/55969/5c35c16bE7c262192/c9fdecec4b419355.jpg'
  }
])

const beforePreview = ({ file, resolve }) => {
  messageBox
    .confirm({
      msg: '是否预览图片',
      title: '提示'
    })
    .then(() => {
      resolve(true)
    })
    .catch(() => {
      toast.show('取消预览操作')
    })
}

function handleChange({ fileList }) {
  fileList.value = fileList
}
</script>
```

### 上传前置处理

上传前置处理

```vue
<template>
<wd-upload
  :file-list="fileList"
  action="https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload"
  @change="handleChange"
  :before-upload="beforeUpload"
></wd-upload>
</template>

<script lang="ts" setup>
import { useToast, useMessage } from '@/uni_modules/wot-design-uni'

const messageBox = useMessage()
const toast = useToast()
const fileList = ref<any[]>([
  {
    url: 'https://img12.360buyimg.com//n0/jfs/t1/29118/6/4823/55969/5c35c16bE7c262192/c9fdecec4b419355.jpg'
  }
])

const beforeUpload = ({ files, resolve }) => {
  messageBox
    .confirm({
      msg: '是否上传',
      title: '提示'
    })
    .then(() => {
      resolve(true)
    })
    .catch(() => {
      toast.show('取消上传操作')
    })
}

function handleChange({ fileList }) {
  fileList.value = fileList
}
</script>
```

### 移除图片前置处理

移除图片前置处理

```vue
<template>
<wd-upload
  :file-list="fileList"
  action="https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload"
  @change="handleChange"
  :before-remove="beforeRemove"
></wd-upload>
</template>

<script lang="ts" setup>
import { useToast, useMessage } from '@/uni_modules/wot-design-uni'

const messageBox = useMessage()
const toast = useToast()
const fileList = ref<any[]>([
  {
    url: 'https://img12.360buyimg.com//n0/jfs/t1/29118/6/4823/55969/5c35c16bE7c262192/c9fdecec4b419355.jpg'
  }
])

const beforeRemove = ({ file, fileList, resolve }) => {
  messageBox
    .confirm({
      msg: '是否删除',
      title: '提示'
    })
    .then(() => {
      toast.success('删除成功')
      resolve(true)
    })
    .catch(() => {
      toast.show('取消删除操作')
    })
}

function handleChange({ fileList }) {
  fileList.value = fileList
}
</script>
```

### 选择文件前置处理

选择文件前置处理

```vue
<template>
<wd-upload
  :file-list="fileList"
  action="https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload"
  @change="handleChange"
  :before-choose="beforeChoose"
></wd-upload>
</template>

<script lang="ts" setup>
import { useToast, useMessage } from '@/uni_modules/wot-design-uni'

const messageBox = useMessage()
const toast = useToast()
const fileList = ref<any[]>([
  {
    url: 'https://img12.360buyimg.com//n0/jfs/t1/29118/6/4823/55969/5c35c16bE7c262192/c9fdecec4b419355.jpg'
  }
])

const beforeChoose = ({fileList, resolve}) => {
  messageBox
    .confirm({
      msg: '是否选择',
      title: '提示'
    })
    .then(() => {
      resolve(true)
    })
    .catch(() => {
      toast.show('取消选择操作')
    })
}

function handleChange({ fileList }) {
  fileList.value = fileList
}
</script>
```

### 上传至云存储

上传至云存储

```vue
<template>
<wd-upload :file-list="files" :action="host" :build-form-data="buildFormData" @change="handleChange"></wd-upload>




</template>

<script lang="ts" setup>
</script>
```

### 自定义唤起上传样式

使用默认插槽可以修改唤起上传的样式。

```vue
<template>
<wd-upload :file-list="fileList" action="https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload" @change="handleChange">
    <wd-button>上传</wd-button>
</wd-upload>
</template>

<script lang="ts" setup>
const fileList = ref<any[]>([
  {
    url: 'https://img12.360buyimg.com//n0/jfs/t1/29118/6/4823/55969/5c35c16bE7c262192/c9fdecec4b419355.jpg'
  }
])
</script>
```

### 上传视频

上传视频

```vue
<template>
<wd-upload accept="video" multiple :file-list="fileList" :action="action" @change="handleChange"></wd-upload>
</template>

<script lang="ts" setup>
const action = ref<string>('https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload')

const fileList = ref([])

function handleChange({ fileList }) {
  fileList.value = fileList
}
</script>
```

### 同时上传视频和图片

同时上传视频和图片

```vue
<template>
<wd-upload accept="media" multiple :file-list="fileList" :action="action" @change="handleChange"></wd-upload>
</template>

<script lang="ts" setup>
const action = ref<string>('https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload')

const fileList = ref([])

function handleChange({ fileList }) {
  fileList.value = fileList
}
</script>
```

### 仅上传文件

仅上传文件

```vue
<template>
<wd-upload accept="file" multiple :file-list="fileList" :action="action" @change="handleChange"></wd-upload>
</template>

<script lang="ts" setup>
const action = ref<string>('https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload')

const fileList = ref([])

function handleChange({ fileList }) {
  fileList.value = fileList
}
</script>
```

### 上传视频图片和文件

上传视频图片和文件

```vue
<template>
<wd-upload accept="all" multiple :file-list="fileList" :action="action" @change="handleChange"></wd-upload>
</template>

<script lang="ts" setup>
const action = ref<string>('https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload')

const fileList = ref([])

function handleChange({ fileList }) {
  fileList.value = fileList
}
</script>
```

### 手动触发上传

手动触发上传

```vue
<template>
<wd-upload
  ref="uploader"
  :auto-upload="false"
  :file-list="fileList"
  action="https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload"
  @change="handleChange"
></wd-upload>
<wd-button @click="onUploadClick()">开始上传</wd-button>
</template>

<script lang="ts" setup>
const uploader = ref()

const onUploadClick = () => {
  uploader.value?.submit()
}
</script>
```

### 自定义上传方法

自定义上传方法

```vue
<template>
<wd-upload v-model:file-list="fileList" :upload-method="customUpload"></wd-upload>
</template>

<script lang="ts" setup>
import type { UploadMethod, UploadFile } from '@/uni_modules/wot-design-uni/components/wd-upload/types'

const fileList = ref<UploadFile[]>([])
const customUpload: UploadMethod = (file, formData, options) => {
  const uploadTask = uni.uploadFile({
    url: action,
    header: options.header,
    name: options.name,
    fileName: options.name,
    fileType: options.fileType,
    formData,
    filePath: file.url,
    success(res) {
      if (res.statusCode === options.statusCode) {
        // 设置上传成功
        options.onSuccess(res, file, formData)
      } else {
        // 设置上传失败
        options.onError({ ...res, errMsg: res.errMsg || '' }, file, formData)
      }
    },
    fail(err) {
      // 设置上传失败
      options.onError(err, file, formData)
    }
  })
  // 设置当前文件加载的百分比
  uploadTask.onProgressUpdate((res) => {
    options.onProgress(res, file)
  })
}
</script>
```

### 自定义预览样式

自定义预览样式

```vue
<template>
<wd-upload v-model:file-list="fileList" accept="image" image-mode="aspectFill" :action="action">
  <template #preview-cover="{ file,index }">
            <!-- 小程序拿不到文件 -->
    <view class="preview-cover">{{ file?.name||`文件${index+1}` }}</view>
  </template>
</wd-upload>
<style>
  .preview-cover {
  margin-top: 10rpx;
  text-align: center;
}
</style>
</template>

<script lang="ts" setup>
const fileList = ref<UploadFile[]>([])
const action: string = 'https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload'
</script>
```

### 根据文件拓展名过滤

根据文件拓展名过滤

```vue
<template>
<wd-upload
  v-model:file-list="fileList"
  :extension="['.jpg', '.png']"
  action="https://mockapi.eolink.com/xxx"
></wd-upload>
</template>

<script lang="ts" setup>
</script>
```

### Methods

Methods

| 方法名称 | 说明         | 参数 | 最低版本         |
| -------- | ------------ | ---- | ---------------- |
| submit   | 手动开始上传 | -    | 1.3.8 |

### Upload 外部样式类

Upload 外部样式类

| 类名                 | 说明                     | 最低版本 |
| -------------------- | ------------------------ | -------- |
| custom-class         | 根节点样式类             | -        |
| custom-evoke-class   | 自定义上传按钮样式类     | -        |
| custom-preview-class | 自定义预览图片列表样式类 | -        |

