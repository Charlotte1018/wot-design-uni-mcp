## DatetimePickerView 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-toast />

<wd-datetime-picker-view v-model="value" label="日期选择" @change="handleChange" />
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'
const toast = useToast()
const value = ref<number>(Date.now())

function onChange1({ value }) {
  toast.show('选择了' + new Date(value))
}
</script>
```

### date 类型

date 类型

```vue
<template>
<wd-datetime-picker-view type="date" v-model="value" label="年月日" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
</script>
```

### year-month 类型

year-month 类型

```vue
<template>
<wd-datetime-picker-view type="year-month" v-model="value" label="年月" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
</script>
```

### year 类型

year 类型

```vue
<template>
<wd-datetime-picker-view type="year" v-model="value" label="年" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
</script>
```

### time 类型

time 类型

```vue
<template>
<wd-datetime-picker-view type="time" v-model="value" label="时分" />
</template>

<script lang="ts" setup>
const value4 = ref<string>('11:12')
</script>
```

### time 类型（带秒）

time 类型（带秒）

```vue
<template>
<wd-datetime-picker-view type="time" v-model="value" label="时分秒" use-second />
</template>

<script lang="ts" setup>
const value = ref<string>('11:12:30')
</script>
```

### datetime 类型（带秒）

datetime 类型（带秒）

```vue
<template>
<wd-datetime-picker-view type="datetime" v-model="value" label="年月日时分秒" use-second />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
</script>
```

### 修改内部格式

修改内部格式

```vue
<template>
<wd-datetime-picker-view v-model="value" label="内部格式" :formatter="formatter" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())

const formatter = (type, value) => {
  switch (type) {
    case 'year':
      return value + '年'
    case 'month':
      return value + '月'
    case 'date':
      return value + '日'
    case 'hour':
      return value + '时'
    case 'minute':
      return value + '分'
    default:
      return value
  }
}
</script>
```

### 过滤选项

过滤选项

```vue
<template>
<wd-datetime-picker-view v-model="value" label="过滤选项" :filter="filter" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())

const filter = (type, values) => {
  if (type === 'minute') {
    return values.filter((value) => value % 5 === 0)
  }
  return values
}
</script>
```

