## UseMessage 组件示例

### Alert 弹框

alert 弹框只有确定按钮，用于强提醒。

```vue
<template>
<wd-message-box></wd-message-box>
<wd-button @click="alert">alert</wd-button>
</template>

<script lang="ts" setup>
import { useMessage } from '@/uni_modules/wot-design-uni'
const message = useMessage()

function alert() {
  message.alert('操作成功')
}
</script>
```

### Confirm 弹框

用于提示用户操作。

```vue
<template>
<wd-message-box />
<wd-button @click="confirm">confirm</wd-button>
</template>

<script lang="ts" setup>
import { useMessage } from '@/uni_modules/wot-design-uni'
const message = useMessage()

function confirm() {
  message
    .confirm({
      msg: '提示文案',
      title: '标题'
    })
    .then(() => {
      console.log('点击了确定按钮')
    })
    .catch(() => {
      console.log('点击了取消按钮')
    })
}
</script>
```

### Prompt 弹框

prompt 会展示一个输入框，并可以进行输入校验。

```vue
<template>
<wd-message-box />
<wd-button @click="prompt">prompt</wd-button>
</template>

<script lang="ts" setup>
import { useMessage } from '@/uni_modules/wot-design-uni'
const message = useMessage()

function prompt() {
  message
    .prompt({
      title: '请输入邮箱',
      inputPattern: /.+@.+\..+/i,
      inputError: '邮箱格式不正确'
    })
    .then((resp) => {
      console.log(resp)
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>
```

