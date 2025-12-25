## CalendarView 组件示例

### 基本使用

基本使用

```vue
<template>
<wd-calendar-view v-model="value" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref(Date.now())

function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 日期多选

日期多选

```vue
<template>
<wd-calendar-view type="dates" v-model="value" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref([])

function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 周类型选择

周类型选择

```vue
<template>
<wd-calendar-view type="week" v-model="value" :first-day-of-week="1" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref(Date.now())

function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 月类型选择

月类型选择

```vue
<template>
<wd-calendar-view type="month" v-model="value" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref(Date.now())

function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 范围选择

范围选择

```vue
<template>
<wd-calendar-view type="daterange" v-model="value" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref([])

function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 日期时间类型

日期时间类型

```vue
<template>
<wd-calendar-view type="datetime" v-model="value" @change="handleChange" />

<wd-calendar-view type="datetime" v-model="value" @change="handleChange" hide-second :time-filter="timeFilter" />
</template>

<script lang="ts" setup>
const value = ref('')

function handleChange({ value }) {
  console.log(value)
}

const value = ref('')

const timeFilter = ({ type, values }) => {
  if (type === 'minute') {
    // 只展示 0,10,20,30,40,50 分钟选项
    return values.filter((item) => {
      return item % 10 === 0
    })
  }

  return values
}

function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 范围选择允许选中同一日期

范围选择允许选中同一日期

```vue
<template>
<wd-calendar-view type="daterange" v-model="value" allow-same-day @change="handleChange" />
</template>

<script lang="ts" setup>
</script>
```

### 格式化日期

格式化日期

```vue
<template>
<wd-calendar-view type="daterange" v-model="value" allow-same-day :formatter="formatter" @change="handleChange"></wd-calendar-view>
</template>

<script lang="ts" setup>
const value = ref([])

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

function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 最大范围限制

最大范围限制

```vue
<template>
<wd-calendar-view type="daterange" :max-range="3" v-model="value" @change="handleChange" />
</template>

<script lang="ts" setup>
</script>
```

### 展示面板标题

展示面板标题

```vue
<template>
<wd-calendar-view type="daterange" :show-panel-title="false" v-model="value" @change="handleChange" />
</template>

<script lang="ts" setup>
</script>
```

### Methods

Methods

| 方法名称       | 说明                                                                                                         | 参数 | 最低版本 |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ---- | -------- |
| scrollIntoView | 使当前日期或者选中日期滚动到可视区域，并监听滚动，在面板从 隐藏状态（如 display: none） 切换为展示状态时调用 | -    |

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

