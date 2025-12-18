## TimePicker 组件示例

### basic

提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开`arrow-control`属性则通过界面上的箭头进行选择。

```vue
<template>
  <div class="example-basic">
    <fin-time-picker v-model="value1" placeholder="Arbitrary time" />
    <fin-time-picker
      v-model="value2"
      arrow-control
      placeholder="Arbitrary time"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref()
const value2 = ref()
</script>

<style>
.example-basic .fin-date-editor {
  margin: 8px;
}
</style>
```

### basic-range

通过 `disabledHours`，`disabledMinutes` 和 `disabledSeconds` 限制可选时间范围。,

```vue
<template>
  <div class="example-basic">
    <fin-time-picker
      v-model="value1"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      :disabled-seconds="disabledSeconds"
      placeholder="Arbitrary time"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(new Date(2016, 9, 10, 18, 30))

const makeRange = (start: number, end: number) => {
  const result: number[] = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
const disabledHours = () => {
  return makeRange(0, 16).concat(makeRange(19, 23))
}
const disabledMinutes = (hour: number) => {
  if (hour === 17) {
    return makeRange(0, 29)
  }
  if (hour === 18) {
    return makeRange(31, 59)
  }
}
const disabledSeconds = (hour: number, minute: number) => {
  if (hour === 18 && minute === 30) {
    return makeRange(1, 59)
  }
}
</script>

<style>
.example-basic .fin-date-editor {
  margin: 8px;
}
</style>
```

### range

添加`is-range`属性即可选择时间范围。 同样支持 `arrow-control` 属性。

```vue
<template>
  <div class="demo-range">
    <fin-time-picker
      v-model="value1"
      is-range
      range-separator="To"
      start-placeholder="Start time"
      end-placeholder="End time"
    />
    <fin-time-picker
      v-model="value2"
      is-range
      arrow-control
      range-separator="To"
      start-placeholder="Start time"
      end-placeholder="End time"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref<[Date, Date]>([
  new Date(2016, 9, 10, 8, 40),
  new Date(2016, 9, 10, 9, 40),
])
const value2 = ref<[Date, Date]>([
  new Date(2016, 9, 10, 8, 40),
  new Date(2016, 9, 10, 9, 40),
])
</script>

<style>
.demo-range .fin-date-editor {
  margin: 8px;
}

.demo-range .fin-range-separator {
  box-sizing: content-box;
}
</style>
```

