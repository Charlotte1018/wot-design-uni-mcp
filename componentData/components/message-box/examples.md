## MessageBox 组件示例

### Alert 弹框

alert 弹框只有确定按钮，用于强提醒。

```vue
<template>
<wd-message-box></wd-message-box>
<wd-button @click="alert">alert</wd-button>

<wd-message-box />
<wd-button @click="alert">alert</wd-button>

<wd-message-box />
<wd-button @click="alert">alert</wd-button>
</template>

<script lang="ts" setup>
import { useMessage } from '@/uni_modules/wot-design-uni'
const message = useMessage()

function alert() {
  message.alert('操作成功')
}

import { useMessage } from '@/uni_modules/wot-design-uni'
const message = useMessage()

function alert() {
  message.alert({
    msg: '提示文案',
    title: '标题'
  })
}

import { useMessage } from '@/uni_modules/wot-design-uni'
const message = useMessage()

function alert() {
  message.alert({
    msg: '以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文',
    title: '标题'
  })
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
      inputValue: value1.value,
      inputPattern: /.+@.+\..+/i
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

### 插槽

插槽

```vue
<template>
<wd-message-box selector="wd-message-box-slot">
  <wd-rate custom-class="custom-rate-class" v-model="rate" />
</wd-message-box>

<wd-button @click="withSlot">custom</wd-button>
</template>

<script lang="ts" setup>
import { useMessage } from '@/uni_modules/wot-design-uni'
const rate = ref<number>(1)
const message = useMessage('wd-message-box-slot')

function withSlot() {
  message
    .confirm({
      title: '评分'
    })
    .then(() => {
      message.alert(`你的评分为：${rate.value}分`)
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<style lang="scss">
:deep(.custom-rate-class) {
  display: block;
  height: 22px;
}
</style>
```

### 确认前置处理

确认前置处理

```vue
<template>
<wd-toast />
<wd-message-box />
<wd-button @click="beforeConfirm">beforeConfirm</wd-button>
</template>

<script lang="ts" setup>
import { useMessage, useToast } from '@/uni_modules/wot-design-uni'
const message = useMessage()
const toast = useToast()

function beforeConfirm() {
  message
    .confirm({
      msg: '是否删除',
      title: '提示',
      beforeConfirm: ({ resolve }) => {
        toast.loading('删除中...')
        setTimeout(() => {
          toast.close()
          resolve(true)
          toast.success('删除成功')
        }, 2000)
      }
    })
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
}
</script>
```

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

