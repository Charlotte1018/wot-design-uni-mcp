## Upload 组件示例

### basic

通过 `slot` 你可以传入自定义的上传按钮类型和文字提示。 可通过设置 `limit` 和 `on-exceed` 来限制上传文件的个数和定义超出限制时的行为。 可通过设置 `before-remove` 来阻止文件移除操作。

```vue
<template>
  <fin-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
    <fin-button type="primary">Click to upload</fin-button>
    <template #tip>
      <div class="fin-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </fin-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { FinMessage, FinMessageBox } from '@jdt/find-plus'

import type { UploadProps, UploadUserFile } from '@jdt/find-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'find plus logo',
    url: 'https://find-plus/images/find-plus-logo.png',
  },
  {
    name: 'find plus logo2',
    url: 'https://find-plus/images/find-plus-logo.png',
  },
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  FinMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return FinMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
</script>
```

### limit-cover

设置 `limit` 和 `on-exceed` 可以在选中时自动替换上一个文件。

```vue
<template>
  <fin-upload
    ref="upload"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :limit="1"
    :on-exceed="handleExceed"
    :auto-upload="false"
  >
    <template #trigger>
      <fin-button type="primary">select file</fin-button>
    </template>
    <fin-button class="ml-3" type="success" @click="submitUpload">
      upload to server
    </fin-button>
    <template #tip>
      <div class="fin-upload__tip text-red">
        limit 1 file, new file will cover the old file
      </div>
    </template>
  </fin-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { genFileId } from '@jdt/find-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from '@jdt/find-plus'

const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const submitUpload = () => {
  upload.value!.submit()
}
</script>
```

### avatar



```vue
<template>
  <fin-upload
    class="avatar-uploader"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <fin-icon v-else class="avatar-uploader-icon"><Plus /></fin-icon>
  </fin-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FinMessage } from '@jdt/find-plus'
import { Plus } from '@jdt/find-plus-icons-vue'

import type { UploadProps } from '@jdt/find-plus'

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    FinMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    FinMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .fin-upload {
  border: 1px dashed var(--fin-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--fin-transition-duration-fast);
}

.avatar-uploader .fin-upload:hover {
  border-color: var(--fin-color-primary);
}

.fin-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
```

### photo-wall



```vue
<template>
  <fin-upload
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
  >
    <fin-icon><Plus /></fin-icon>
  </fin-upload>

  <fin-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </fin-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Plus } from '@jdt/find-plus-icons-vue'

import type { UploadProps, UploadUserFile } from '@jdt/find-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'plant-1.png',
    url: '/images/plant-1.png',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'plant-2.png',
    url: '/images/plant-2.png',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'figure-1.png',
    url: '/images/figure-1.png',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'figure-2.png',
    url: '/images/figure-2.png',
  },
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
</script>
```

### custom-thumbnail



```vue
<template>
  <fin-upload action="#" list-type="picture-card" :auto-upload="false">
    <fin-icon><Plus /></fin-icon>

    <template #file="{ file }">
      <div>
        <img class="fin-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="fin-upload-list__item-actions">
          <span
            class="fin-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <fin-icon><zoom-in /></fin-icon>
          </span>
          <span
            v-if="!disabled"
            class="fin-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <fin-icon><Download /></fin-icon>
          </span>
          <span
            v-if="!disabled"
            class="fin-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <fin-icon><Delete /></fin-icon>
          </span>
        </span>
      </div>
    </template>
  </fin-upload>

  <fin-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </fin-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@jdt/find-plus-icons-vue'

import type { UploadFile } from '@jdt/find-plus'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}
</script>
```

### file-list-with-thumbnail



```vue
<template>
  <fin-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    list-type="picture"
  >
    <fin-button type="primary">Click to upload</fin-button>
    <template #tip>
      <div class="fin-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </fin-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { UploadProps, UploadUserFile } from '@jdt/find-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (file) => {
  console.log(file)
}
</script>
```

### file-list



```vue
<template>
  <fin-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :on-change="handleChange"
  >
    <fin-button type="primary">Click to upload</fin-button>
    <template #tip>
      <div class="fin-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </fin-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import type { UploadProps, UploadUserFile } from '@jdt/find-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  fileList.value = fileList.value.slice(-3)
}
</script>
```

### drag-and-drop



```vue
<template>
  <fin-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
  >
    <fin-icon class="fin-icon--upload"><Upload /></fin-icon>
    <div class="fin-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="fin-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </fin-upload>
</template>

<script lang="ts" setup>
import { Upload } from '@jdt/find-plus-icons-vue'
</script>
```

### manual



```vue
<template>
  <fin-upload
    ref="uploadRef"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false"
  >
    <template #trigger>
      <fin-button type="primary">select file</fin-button>
    </template>

    <fin-button class="ml-3" type="success" @click="submitUpload">
      upload to server
    </fin-button>

    <template #tip>
      <div class="fin-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </fin-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadInstance } from '@jdt/find-plus'

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>
```

