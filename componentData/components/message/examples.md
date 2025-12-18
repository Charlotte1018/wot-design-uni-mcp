## Message 组件示例

### basic

Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释。 文末有 options 列表，可以结合 Notification 的文档理解它们。 FinD Plus 注册了一个全局的 `$message`方法用于调用。 Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

```vue
<template>
  <fin-button :plain="true" @click="open">Show message</fin-button>
  <fin-button :plain="true" @click="openVn">VNode</fin-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { FinMessage } from '@jdt/find-plus'

const open = () => {
  FinMessage('this is a message.')
}

const openVn = () => {
  FinMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>
```

### different-types

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 `type` 字段可以定义不同的状态，默认为`info`。 此时正文内容以 `message` 的值传入。 同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 type 字段的情况下像 `open4` 那样直接调用。

```vue
<template>
  <fin-button :plain="true" @click="open0">primary</fin-button>
  <fin-button :plain="true" @click="open2">success</fin-button>
  <fin-button :plain="true" @click="open3">warning</fin-button>
  <fin-button :plain="true" @click="open1">info</fin-button>
  <fin-button :plain="true" @click="open4">error</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage } from '@jdt/find-plus'

const open0 = () => {
  FinMessage({
    message: 'Congrats, this is a primary message.',
    type: 'primary',
  })
}
const open1 = () => {
  FinMessage('this is a message.')
}
const open2 = () => {
  FinMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  FinMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  FinMessage.error('Oops, this is a error message.')
}
</script>
```

### dark

通过设置dark将Message定义为深色模式

```vue
<template>
  <fin-button :plain="true" dark @click="open0">primary</fin-button>
  <fin-button :plain="true" dark @click="open2">success</fin-button>
  <fin-button :plain="true" dark @click="open3">warning</fin-button>
  <fin-button :plain="true" dark @click="open1">message</fin-button>
  <fin-button :plain="true" dark @click="open4">error</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage } from '@jdt/find-plus'

const open0 = () => {
  FinMessage({
    message: 'Congrats, this is a primary message.',
    type: 'primary',
    dark: true,
    showClose: true,
  })
}

const open1 = () => {
  FinMessage({
    message: 'this is a message.',
    dark: true,
  })
}
const open2 = () => {
  FinMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    dark: true,
    showClose: true,
  })
}
const open3 = () => {
  FinMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
    dark: true,
  })
}
const open4 = () => {
  FinMessage.error({
    message: 'Oops, this is a error message.',
    dark: true,
  })
}
</script>
```

### closable

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 true 此外，和 Notification 一样，Message 拥有可控的 `duration`， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为`0`便表示该消息不会被自动关闭。

```vue
<template>
  <fin-button :plain="true" @click="open0">primary</fin-button>
  <fin-button :plain="true" @click="open1">message</fin-button>
  <fin-button :plain="true" @click="open2">success</fin-button>
  <fin-button :plain="true" @click="open3">warning</fin-button>
  <fin-button :plain="true" @click="open4">error</fin-button>
  <fin-button :plain="true" @click="open5">不关闭</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage } from '@jdt/find-plus'

const open0 = () => {
  FinMessage({
    type: 'primary',
    showClose: true,
    message: 'This is a primary message.',
  })
}

const open1 = () => {
  FinMessage({
    showClose: true,
    message: 'This is a message.',
  })
}
const open2 = () => {
  FinMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  FinMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  FinMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error',
  })
}
const open5 = () => {
  FinMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error',
    duration: 0,
  })
}
</script>
```

### centered-content



```vue
<template>
  <fin-button plain @click="openCenter">Centered text</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage } from '@jdt/find-plus'

const openCenter = () => {
  FinMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
}
</script>
```

### raw-html

将`dangerouslyUseHTMLString`属性设置为 true,`message` 就会被当作 HTML 片段处理。

```vue
<template>
  <fin-button :plain="true" @click="openHTML">Use HTML String</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage } from '@jdt/find-plus'

const openHTML = () => {
  FinMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
```

### grouping

设置 `grouping` 为 true，内容相同的 `message` 将被合并。

```vue
<template>
  <fin-button :plain="true" @click="open('primary')">Show primary</fin-button>
  <fin-button :plain="true" @click="open('success')">Show success</fin-button>
  <fin-button :plain="true" @click="open('warning')">Show warning</fin-button>
  <fin-button :plain="true" @click="open('info')">Show info</fin-button>
  <fin-button :plain="true" @click="open('error')">Show error</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage } from '@jdt/find-plus'

const open = (type) => {
  FinMessage({
    message: 'this is a message.',
    grouping: true,
    type,
    duration: 0,
  })
}
</script>
```

