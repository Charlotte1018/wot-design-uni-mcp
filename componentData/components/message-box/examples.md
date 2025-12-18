## MessageBox 组件示例

### alert

调用 `FinMessageBox.alert` 方法以打开 alert 框。 它模拟了系统的 `alert`，无法通过按下 ESC 或点击框外关闭。 此例中接收了两个参数，`message`和`title`。 值得一提的是，窗口被关闭后，它默认会返回一个`Promise`对象便于进行后续操作的处理。 若不确定浏览器是否支持`Promise`，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。

```vue
<template>
  <fin-button text @click="open">Click to open the Message Box</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage, FinMessageBox } from '@jdt/find-plus'
import type { Action } from '@jdt/find-plus'

const open = () => {
  FinMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      FinMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>
```

### content-title

通过`contentTitle`可以定义MessageBox消息正文标题

```vue
<template>
  <fin-button text @click="open">副标题</fin-button>
  <fin-button text @click="open2">副标题+icon</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage, FinMessageBox } from '../../../packages/element-plus/index'

const open = () => {
  FinMessageBox.confirm('proxy will permanently delete the file. Continue?', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    contentTitle: '副标题',
  })
    .then(() => {
      FinMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      FinMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}

const open2 = () => {
  FinMessageBox.confirm('proxy will permanently delete the file. Continue?', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
    contentTitle: '副标题',
  })
    .then(() => {
      FinMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      FinMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
```

### confirm

调用 `FinMessageBox.confirm` 方法以打开 confirm 框。它模拟了系统的 `confirm`。 Message Box 组件也拥有极高的定制性，我们可以传入 `options` 作为第三个参数，它是一个字面量对象。 `type` 字段表明消息类型，可以为`success`，`error`，`info`和 `warning`，无效的设置将会被忽略。 需要注意的是，第二个参数 `title` 必须定义为 `String` 类型，如果是 `Object`，会被当做为 `options`使用。 在这里我们返回了一个 `Promise` 来处理后续响应。

```vue
<template>
  <fin-button text @click="open">Click to open the Message Box</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage, FinMessageBox } from '@jdt/find-plus'

const open = () => {
  FinMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      FinMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      FinMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
```

### prompt

调用 `FinMessageBox.prompt` 方法以打开 prompt 框。它模拟了系统的 `prompt`。 可以用 `inputPattern` 字段自己规定匹配模式， 使用 `inputValidator` 来指定验证方法，它应该返回 `Boolean` 或 `String`。 返回 `false` 或 `String` 表示验证失败， 返回的字符串将用作 `inputErrorMessage`，用来提示用户错误原因。 此外，可以用 `inputPlaceholder` 字段来定义输入框的占位符。

```vue
<template>
  <fin-button text @click="open">Click to open Message Box</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage, FinMessageBox } from '@jdt/find-plus'

const open = () => {
  FinMessageBox.prompt('Please input your e-mail', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: 'Invalid Email',
  })
    .then(({ value }) => {
      FinMessage({
        type: 'success',
        message: `Your email is:${value}`,
      })
    })
    .catch(() => {
      FinMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}
</script>
```

### use-vnode



```vue
<template>
  <fin-button plain @click="open">Common VNode</fin-button>
  <fin-button plain @click="open1">Dynamic props</fin-button>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { FinMessageBox, FinSwitch } from '@jdt/find-plus'

const open = () => {
  FinMessageBox({
    title: 'Message',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const open1 = () => {
  const checked = ref<boolean | string | number>(false)
  FinMessageBox({
    title: 'Message',
    // Should pass a function if VNode contains dynamic props
    message: () =>
      h(FinSwitch, {
        modelValue: checked.value,
        'onUpdate:modelValue': (val: boolean | string | number) => {
          checked.value = val
        },
      }),
  })
}
</script>
```

### use-html

将 `dangerouslyUseHTMLString` 属性设置为 true，`message` 属性就会被当作 HTML 片段处理。

```vue
<template>
  <fin-button text @click="open">Click to open Message Box</fin-button>
</template>

<script lang="ts" setup>
import { FinMessageBox } from '@jdt/find-plus'

const open = () => {
  FinMessageBox.alert(
    '<strong>proxy is <i>HTML</i> string</strong>',
    'HTML String',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
</script>
```

### distinguishable-close-cancel

默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，Promise 的 reject 回调和 `callback` 回调的参数均为 'cancel'。 如果将`distinguishCancelAndClose`属性设置为 true，则上述两种行为的参数分别为 'cancel' 和 'close'。

```vue
<template>
  <fin-button text @click="open">Click to open Message Box</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage, FinMessageBox } from '@jdt/find-plus'
import type { Action } from '@jdt/find-plus'
const open = () => {
  FinMessageBox.confirm(
    'You have unsaved changes, save and proceed?',
    'Confirm',
    {
      distinguishCancelAndClose: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Discard Changes',
    }
  )
    .then(() => {
      FinMessage({
        type: 'info',
        message: 'Changes saved. Proceeding to a new route.',
      })
    })
    .catch((action: Action) => {
      FinMessage({
        type: 'info',
        message:
          action === 'cancel'
            ? 'Changes discarded. Proceeding to a new route.'
            : 'Stay in the current route',
      })
    })
}
</script>
```

### centered-content

将 `center` 属性设置为 `true` 可将内容居中显示。

```vue
<template>
  <fin-button text @click="open">Click to open Message Box</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage, FinMessageBox } from '@jdt/find-plus'

const open = () => {
  FinMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      center: true,
    }
  )
    .then(() => {
      FinMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      FinMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
```

### customized-icon



```vue
<template>
  <fin-button text @click="open">Click to open Message Box</fin-button>
</template>

<script lang="ts" setup>
import { markRaw } from 'vue'
import { FinMessageBox } from '@jdt/find-plus'
import { Delete } from '@jdt/find-plus-icons-vue'

const open = () => {
  FinMessageBox.confirm(
    'It will permanently delete the file. Continue?',
    'Warning',
    {
      type: 'warning',
      icon: markRaw(Delete),
    }
  )
}
</script>
```

### draggable

设置`draggable`属性为`true`来开启拖拽弹窗能力。

```vue
<template>
  <fin-button text @click="open">Click to open Message Box</fin-button>
</template>

<script lang="ts" setup>
import { FinMessage, FinMessageBox } from '@jdt/find-plus'

const open = () => {
  FinMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      draggable: true,
    }
  )
    .then(() => {
      FinMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      FinMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
```

