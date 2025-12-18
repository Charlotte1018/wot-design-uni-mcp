## Loading 组件示例

### basic

FinD Plus 提供了两种调用 Loading 的方法：指令和服务。 对于自定义指令 `v-loading`，只需要绑定 `boolean` 值即可。 默认状况下，Loading 遮罩会插入到绑定元素的子节点。 通过添加 `body` 修饰符，可以使遮罩插入至 Dom 中的 body 上。

```vue
<template>
  <fin-table v-loading="loading" :data="tableData" style="width: 100%">
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)

const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
</script>

<style>
body {
  margin: 0;
}
.example-showcase .fin-loading-mask {
  z-index: 9;
}
</style>
```

### customization

在绑定了`v-loading`指令的元素上添加`element-loading-text`属性，其值会被渲染为加载文案，并显示在加载图标的下方。 类似地，`element-loading-spinner`、`element-loading-background` 和 `element-loading-svg` 属性分别用来设定 svg 图标、背景色值、加载图标。

```vue
<template>
  <fin-table
    v-loading="loading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(122, 122, 122, 0.8)"
    :data="tableData"
    style="width: 100%"
  >
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
  <fin-button @click="changeElementLoadingText">切换elementLoading</fin-button>
  <fin-table
    v-loading="loading"
    :element-loading-svg="svg"
    class="custom-loading-svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    :data="tableData"
    style="width: 100%"
  >
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)
const elementLoadingText = ref('Loading...')
const svg = `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>loading</title><path fill="#2e6cff" d="M16 2.031c0.69 0 1.25 0.56 1.25 1.25v4.5c0 0.69-0.56 1.25-1.25 1.25s-1.25-0.56-1.25-1.25v0-4.5c0-0.69 0.56-1.25 1.25-1.25zM16 23c0.69 0 1.25 0.56 1.25 1.25v4.5c0 0.69-0.56 1.25-1.25 1.25s-1.25-0.56-1.25-1.25v0-4.5c0-0.69 0.56-1.25 1.25-1.25zM29.984 16.016c0 0.69-0.56 1.25-1.25 1.25h-4.5c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25v0h4.5c0.69 0 1.25 0.56 1.25 1.25zM9.016 16.016c0 0.69-0.56 1.25-1.25 1.25h-4.5c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25v0h4.5c0.69 0 1.25 0.56 1.25 1.25zM25.888 6.127c0.226 0.226 0.366 0.539 0.366 0.884s-0.14 0.658-0.366 0.884l-3.182 3.182c-0.225 0.217-0.531 0.351-0.868 0.351-0.69 0-1.25-0.56-1.25-1.25 0-0.338 0.134-0.644 0.351-0.869l3.182-3.182c0.226-0.226 0.538-0.366 0.884-0.366s0.657 0.14 0.884 0.366v0zM11.061 20.954c0.226 0.226 0.366 0.539 0.366 0.884s-0.14 0.658-0.366 0.884l-3.181 3.182c-0.228 0.235-0.546 0.381-0.899 0.381-0.69 0-1.25-0.56-1.25-1.25 0-0.353 0.146-0.672 0.381-0.899l3.182-3.182c0.226-0.226 0.538-0.366 0.883-0.366s0.657 0.14 0.883 0.366v0zM25.888 25.904c-0.226 0.226-0.538 0.366-0.884 0.366s-0.657-0.14-0.884-0.366l-3.182-3.182c-0.217-0.225-0.351-0.531-0.351-0.869 0-0.69 0.56-1.25 1.25-1.25 0.337 0 0.644 0.134 0.869 0.351l3.182 3.182c0.226 0.226 0.366 0.539 0.366 0.884s-0.14 0.658-0.366 0.884v0zM11.061 11.077c-0.226 0.226-0.538 0.366-0.883 0.366s-0.657-0.14-0.883-0.366l-3.182-3.182c-0.236-0.228-0.382-0.546-0.382-0.899 0-0.69 0.56-1.25 1.25-1.25 0.353 0 0.671 0.146 0.899 0.381l3.182 3.182c0.226 0.226 0.366 0.539 0.366 0.884s-0.14 0.658-0.366 0.884v0z"></path></svg>
      `
const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]

const changeElementLoadingText = () => {
  elementLoadingText.value = Math.random() > 0.5 ? 'Loading....' : '完成加载'
}
</script>
<style>
.example-showcase .fin-loading-mask {
  z-index: 9;
}
</style>
```

### fullscreen

当使用指令方式时，全屏遮罩需要添加`fullscreen`修饰符（遮罩会插入至 body 上） 此时若需要锁定屏幕的滚动，可以使用`lock`修饰符； 当使用服务方式时，遮罩默认即为全屏，无需额外设置。

```vue
<template>
  <fin-button
    v-loading.fullscreen.lock="fullscreenLoading"
    type="primary"
    @click="openFullScreen1"
  >
    As a directive
  </fin-button>
  <fin-button type="primary" @click="openFullScreen2">
    As a service
  </fin-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FinLoading } from '@jdt/find-plus'

const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}

const openFullScreen2 = () => {
  const loading = FinLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
</script>
```

