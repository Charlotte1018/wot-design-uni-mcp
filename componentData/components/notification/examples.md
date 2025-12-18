## Notification 组件示例

### basic

FinD Plus 注册了 `$notify` 方法并且它接受一个 Object 作为其参数。 在最简单的情况下，你可以通过设置 `title` 和 `message` 属性来设置通知的标题和正文内容。 默认情况下，通知在4500毫秒后自动关闭，但你可以通过设置 `duration` 属性来自定义通知的展示时间。 如果你将它设置为 `0`，那么通知将不会自动关闭。 需要注意的是 `duration` 接收一个 `Number`，单位为毫秒。

```vue
<template>
  <fin-button plain @click="open1"> Closes automatically </fin-button>
  <fin-button plain @click="open2"> Won't close automatically </fin-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { FinNotification } from '@jdt/find-plus'

const open1 = () => {
  FinNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

const open2 = () => {
  FinNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  })
}
</script>
```

### different-types

FinD Plus 为 Notification 组件准备了四种通知类型：`success`, `warning`, `info`, `error`。 他们可以设置 `type` 字段来修改，除上述的四个值之外的值会被忽略。 同时，我们也为 Notification 的各种 type 注册了单独的方法，可以在不传入 `type` 字段的情况下像 `open3` 和 `open4` 那样直接调用。

```vue
<template>
  <fin-button plain @click="open0"> Primary </fin-button>
  <fin-button plain @click="open1"> Success </fin-button>
  <fin-button plain @click="open2"> Warning </fin-button>
  <fin-button plain @click="open3"> Info </fin-button>
  <fin-button plain @click="open4"> Error </fin-button>
</template>

<script lang="ts" setup>
import { FinNotification } from '@jdt/find-plus'

const open0 = () => {
  FinNotification({
    title: 'Primary',
    message: 'This is a primary message',
    type: 'primary',
  })
}

const open1 = () => {
  FinNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  FinNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  FinNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  FinNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>
```

### positioning

使用 `position` 属性设置 Notification 的弹出位置， 支持四个选项：`top-right`、`top-left`、`bottom-right` 和 `bottom-left`， 默认为 `top-right`。

```vue
<template>
  <fin-button plain @click="open1"> Top Right </fin-button>
  <fin-button plain @click="open2"> Bottom Right </fin-button>
  <fin-button plain @click="open3"> Bottom Left </fin-button>
  <fin-button plain @click="open4"> Top Left </fin-button>
</template>

<script lang="ts" setup>
import { FinNotification } from '@jdt/find-plus'

const open1 = () => {
  FinNotification({
    title: 'Custom Position',
    message: "I'm at the top right corner",
  })
}

const open2 = () => {
  FinNotification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right',
  })
}

const open3 = () => {
  FinNotification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left',
  })
}

const open4 = () => {
  FinNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left',
  })
}
</script>
```

### offsetting

Notification 提供设置偏移量的功能，通过设置 `offset` 字段，可以使弹出的消息距屏幕边缘偏移一段距离。 注意在同一时刻，每一个的 Notification 实例应当具有一个相同的偏移量。

```vue
<template>
  <fin-button plain @click="open"> Notification with offset </fin-button>
</template>

<script lang="ts" setup>
import { FinNotification } from '@jdt/find-plus'

const open = () => {
  FinNotification.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}
</script>
```

### raw-html

将 `dangerouslyUseHTMLString` 属性设置为 true，`message` 属性就会被当作 HTML 片段处理。

```vue
<template>
  <fin-button plain @click="open"> Use HTML String </fin-button>
</template>

<script lang="ts" setup>
import { FinNotification } from '@jdt/find-plus'

const open = () => {
  FinNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
```

### no-close

将 ` showClose ` 属性设置为 `false` 即可隐藏关闭按钮。

```vue
<template>
  <fin-button plain @click="open"> Hide close button </fin-button>
</template>

<script lang="ts" setup>
import { FinNotification } from '@jdt/find-plus'

const open = () => {
  FinNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>
```

