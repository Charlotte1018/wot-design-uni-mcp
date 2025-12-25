## UseCountDown 组件示例

### 基础用法

基础用法

```vue
<template>
</template>

<script lang="ts" setup>
import { useCountDown } from '@/uni_modules/wot-design-uni'

const { start, pause, reset, current } = useCountDown({
  time: 60 * 1000,
  onChange(current) {
    console.log('剩余时间', current)
  },
  onFinish() {
    console.log('倒计时结束')
  }
})

// 开始倒计时
start()

// 暂停倒计时
pause()

// 重置倒计时
reset()

// 获取当前时间
console.log(current.value)
</script>
```

