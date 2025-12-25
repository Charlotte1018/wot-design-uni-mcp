## CountTo 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-count-to :endVal="2024" suffix="年" color="#16baaa"></wd-count-to>
<wd-count-to prefix="￥" :startVal="0" :decimals="2" :endVal="186.321" :fontSize="32" suffix="%" color="#1e9fff"></wd-count-to>
<wd-count-to prefix="￥" :startVal="0" :decimals="2" :endVal="21286.321" :fontSize="32" suffix="%" color="#ff5722"></wd-count-to>
<wd-count-to prefix="￥" :startVal="0" :decimals="2" :endVal="21286.321" :fontSize="32" suffix="%" color="#ffb800" :duration="2000"></wd-count-to>
</template>

<script lang="ts" setup>
</script>
```

### 设置主题

通过<code>type</code>参数设置文本主题，我们提供了五类属性：<code>primary</code> <code>error</code> <code>success</code> <code>warning</code> <code>default-默认</code>。

```vue
<template>
<wd-count-to type="primary" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></wd-count-to>
<wd-count-to type="error" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></wd-count-to>
<wd-count-to type="success" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></wd-count-to>
<wd-count-to type="warning" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></wd-count-to>
<wd-count-to type="info" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></wd-count-to>
</template>

<script lang="ts" setup>
</script>
```

### 手动控制

手动控制

```vue
<template>
<wd-count-to
  ref="countTo"
  :auto-start="false"
  prefix="￥"
  :startVal="1000"
  :decimals="3"
  :endVal="9999.32"
  :fontSize="32"
  suffix="%"
  color="#1e9fff"
></wd-count-to>
<wd-grid clickable border>
  <wd-grid-item text="开始" icon="play-circle-stroke" @itemclick="start" />
  <wd-grid-item text="暂停" icon="pause-circle" @itemclick="pause" />
  <wd-grid-item text="重置" icon="refresh" @itemclick="reset" />
</wd-grid>
</template>

<script lang="ts" setup>
import type { CountToInstance } from '@/uni_modules/wot-design-uni/components/wd-count-to/types'

const countTo = ref<CountToInstance>()

const start = () => {
  countTo.value!.start()
}
const pause = () => {
  countTo.value!.pause()
}
const reset = () => {
  countTo.value!.reset()
}
</script>
```

### Methods

Methods

| 方法名 | 说明                                                        | 参数 | 最低版本 |
| ------ | ----------------------------------------------------------- | ---- | -------- |
| start  | 开始动画                                                    | —    | 1.3.8    |
| pause  | 暂停动画                                                    | —    | 1.3.8    |
| reset  | 重置动画，若 `auto-start` 为 `true`，重设后会自动开始倒计时 | —    | 1.3.8    |

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | 1.3.8    |
| custom-style | 根节点样式 | 1.3.8    |

