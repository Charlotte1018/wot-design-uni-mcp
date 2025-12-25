## Calendar 组件示例

### 基本使用

基本使用

```vue
<template>
<wd-calendar v-model="value" label="日期选择" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### 日期多选

日期多选

```vue
<template>
<wd-calendar type="dates" v-model="value" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
const value = ref<number[]>([])
function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### 周类型选择

周类型选择

```vue
<template>
<wd-calendar type="week" v-model="value" :first-day-of-week="1" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### 月类型选择

月类型选择

```vue
<template>
<wd-calendar type="month" v-model="value" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### 范围选择

范围选择

```vue
<template>
<wd-calendar type="daterange" v-model="value" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
const value = ref<number[]>([])
function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### 日期时间类型

日期时间类型

```vue
<template>
<wd-calendar type="datetime" v-model="value" @confirm="handleConfirm" />

<wd-calendar type="datetime" v-model="value" @confirm="handleConfirm" hide-second :time-filter="timeFilter" />
</template>

<script lang="ts" setup>
const value = ref<string>('')
function handleConfirm({ value }) {
  console.log(value)
}

const value = ref<string>('')

function timeFilter({ type, values }) {
  if (type === 'minute') {
    // 只展示 0,10,20,30,40,50 分钟选项
    return values.filter((item) => {
      return item % 10 === 0
    })
  }
  return values
}
function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### 日周月切换

日周月切换

```vue
<template>
<wd-calendar label="日周月切换" :first-day-of-week="1" show-type-switch v-model="value" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
</script>
```

### 快捷操作

快捷操作

```vue
<template>
<wd-calendar label="快捷操作" :show-confirm="false" v-model="value" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
</script>
```

### 范围选择允许选中同一日期

范围选择允许选中同一日期

```vue
<template>
<wd-calendar type="daterange" v-model="value" allow-same-day @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
</script>
```

### 格式化日期

格式化日期

```vue
<template>
<wd-calendar type="daterange" v-model="value" allow-same-day :formatter="formatter" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
const value = ref<number[]>([])

function handleConfirm({ value }) {
  console.log(value)
}

const formatter = (day) => {
  const date = new Date(day.date)
  const now = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const da = date.getDate()
  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth()
  const nowDa = now.getDate()

  if (year === nowYear && month === nowMonth && da === nowDa) {
    day.topInfo = '今天'
  }

  if (month === 5 && da === 18) {
    day.topInfo = '618大促'
  }

  if (month === 10 && da === 11) {
    day.topInfo = '京东双11'
  }

  if (day.type === 'start') {
    day.bottomInfo = '开始'
  }

  if (day.type === 'end') {
    day.bottomInfo = '结束'
  }

  if (day.type === 'same') {
    day.bottomInfo = '开始/结束'
  }

  return day
}
</script>
```

### 快捷选项

快捷选项

```vue
<template>
<wd-calendar
  label="快捷选项"
  :shortcuts="shortcuts "
  :on-shortcuts-click="onShortcutsClick"
  type="daterange"
  v-model="value"
  @confirm="handleConfirm"
/>
</template>

<script lang="ts" setup>
const shortcuts = ref<Record<string, any>[]>([
  {
    text: '近7天',
    id: 7
  },
  {
    text: '近15天',
    id: 15
  },
  {
    text: '近30天',
    id: 30
  }
])
const value = ref<string>('')

const onShortcutsClick = ({ item }) => {
  const dayDiff = item.id
  const endDate = Date.now() - 24 * 60 * 60 * 1000
  const startDate = endDate - dayDiff * 24 * 60 * 60 * 1000

  return [startDate, endDate]
}

function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### 自定义展示

自定义展示

```vue
<template>
<wd-calendar
  label="自定义展示"
  type="daterange"
  v-model="value"
  :display-format="displayFormat"
  :inner-display-format="innerDisplayFormat"
  @confirm="handleConfirm"
/>
</template>

<script lang="ts" setup>
import { dayjs } from '@/uni_modules/wot-design-uni'

const value = ref<string>('')

const displayFormat = (value) => {
  return dayjs(value[0]).format('YY年MM月DD日') + ' - ' + dayjs(value[1]).format('YY年MM月DD日')
}

const innerDisplayFormat = (value, rangeType) => {
  if (!value) {
    return rangeType === 'start' ? '活动开始时间' : '活动结束时间'
  }

  return dayjs(value).format('YY年MM月DD日')
}

function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### 确定前校验

确定前校验

```vue
<template>
<wd-toast />

<wd-calendar label="before-confirm" v-model="value" :before-confirm="beforeConfirm" />
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'

const toast = useToast()

const value = ref<string>('')

const beforeConfirm = ({ value, resolve }) => {
  if (value > Date.now()) {
    toast.error('该日期暂无数据')
    resolve(false)
  } else {
    resolve(true)
  }
}

function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### 最大范围限制

最大范围限制

```vue
<template>
<wd-calendar type="daterange" :max-range="3" v-model="value" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
</script>
```

### 自定义选择器

如果默认的 cell 类型的展示格式不满足需求，可以通过默认插槽进行自定义选择器样式。

```vue
<template>
<view style="margin-bottom: 10px;">当前选中日期：{{ formatValue }}</view>
<wd-calendar v-model="value" @confirm="handleConfirm">
  <wd-button>选择日期</wd-button>
</wd-calendar>
</template>

<script lang="ts" setup>
const value = ref<string>('')
const formatValue = ref<string>('')

function handleConfirm({ value }) {
  formatValue.value = new Date(value).toString()
}
</script>
```

### 使用组件实例方法

使用组件实例方法

```vue
<template>
<wd-button @click="openCalendar">打开日历</wd-button>

<wd-calendar ref="calendar" :with-cell="false" v-model="value" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CalendarInstance } from '@/uni_modules/wot-design-uni/components/wd-calendar/types'

const calendar = ref<CalendarInstance>()
const value = ref<number>(Date.now())

function openCalendar() {
  calendar.value?.open()
}

function closeCalendar() {
  calendar.value?.close()
}

function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### Methods

Methods

| 方法名称 | 说明     | 参数 | 最低版本 |
| -------- | -------- | ---- | -------- |
| open     | 打开面板 | -    | -        |
| close    | 关闭面板 | -    | -        |

### 外部样式类

外部样式类

| 类名               | 说明                 | 最低版本 |
| ------------------ | -------------------- | -------- |
| custom-class       | 根节点样式           | -        |
| custom-label-class | label 外部自定义样式 | -        |
| custom-value-class | value 外部自定义样式 | -        |

