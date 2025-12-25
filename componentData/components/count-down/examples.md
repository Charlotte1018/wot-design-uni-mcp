## CountDown 组件示例

### 基础用法

基础用法

```vue
<template>
<wd-count-down :time="time" />
</template>

<script lang="ts" setup>
const time = ref<number>(30 * 60 * 60 * 1000)
</script>
```

### 自定义格式

自定义格式

```vue
<template>
<wd-count-down :time="time" :format="format" />
</template>

<script lang="ts" setup>
const format = ref<string>('DD 天 HH 时 mm 分 ss 秒')
const time = ref<number>(30 * 60 * 60 * 1000)
</script>
```

### 毫秒级渲染

毫秒级渲染

```vue
<template>
<wd-count-down :time="time" :millisecond="true" />
</template>

<script lang="ts" setup>
const time = ref<number>(30 * 60 * 60 * 1000)
</script>
```

### 自定义样式

自定义样式

```vue
<template>
<wd-count-down :time="time">
  <template #default="{ current }">
    <span class="custom-count-down">{{ current.hours }}</span>
    <span class="custom-count-down-colon">:</span>
    <span class="custom-count-down">{{ current.minutes }}</span>
    <span class="custom-count-down-colon">:</span>
    <span class="custom-count-down">{{ current.seconds }}</span>
  </template>
</wd-count-down>
</template>

<script lang="ts" setup>
const time = ref<number>(30 * 60 * 60 * 1000)
</script>

<style lang="scss">
.custom-count-down {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #f0883a;
  border-radius: 2px;
}

.custom-count-down-colon {
  display: inline-block;
  margin: 0 4px;
  color: #f0883a;
}
</style>
```

### 手动控制

手动控制

```vue
<template>
<wd-count-down ref="countDown" :time="3000" millisecond :auto-start="false" format="ss:SSS" @finish="onFinish"></wd-count-down>
<wd-grid clickable border>
  <wd-grid-item text="开始" icon="play-circle-stroke" @itemclick="start" />
  <wd-grid-item text="暂停" icon="pause-circle" @itemclick="pause" />
  <wd-grid-item text="重置" icon="refresh" @itemclick="reset" />
</wd-grid>
</template>

<script lang="ts" setup>
const { show: showToast } = useToast()

const countDown = ref<any>(null)

const start = () => {
  countDown.value.start()
}
const pause = () => {
  countDown.value.pause()
}
const reset = () => {
  countDown.value.reset()
}
const onFinish = () => showToast('倒计时结束')
</script>
```

### Methods

Methods

| 方法名 | 说明           | 参数                  | 最低版本 |
| -------- | ---------------- | --------------------- | -------- |
| start    | 开始倒计时       | —                     | 0.1.58   |
| pause    | 暂停倒计时       | —                     | 0.1.58   |
| reset     | 重置倒计时，若 `auto-start` 为 `true`，重设后会自动开始倒计时       | —                     | 0.1.58   |

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

