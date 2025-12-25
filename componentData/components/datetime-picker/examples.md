## DatetimePicker 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-datetime-picker v-model="value" label="日期选择" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
function handleConfirm({ value }) {
  console.log(new Date(value))
}
</script>
```

### 设置默认值

设置默认值

```vue
<template>
<wd-datetime-picker v-model="value" :default-value="defaultValue" label="日期选择" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
const value = ref<string>('')
const defaultValue = ref<number>(Date.now())

function handleConfirm({ value }) {
  console.log(new Date(value))
}
</script>
```

### date 类型

date 类型

```vue
<template>
<wd-datetime-picker type="date" v-model="value" label="年月日" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
</script>
```

### year-month 类型

year-month 类型

```vue
<template>
<wd-datetime-picker type="year-month" v-model="value" label="年月" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
</script>
```

### year 类型

year 类型

```vue
<template>
<wd-datetime-picker type="year" v-model="value" label="年" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
</script>
```

### time 类型

time 类型

```vue
<template>
<wd-datetime-picker type="time" v-model="value" label="时分" />
</template>

<script lang="ts" setup>
const value4 = ref<string>('09:20')
</script>
```

### time 类型（带秒）

time 类型（带秒）

```vue
<template>
<wd-datetime-picker type="time" v-model="value" label="时分秒" use-second />
</template>

<script lang="ts" setup>
const value = ref<string>('09:20:30')
</script>
```

### datetime 类型（带秒）

datetime 类型（带秒）

```vue
<template>
<wd-datetime-picker type="datetime" v-model="value" label="年月日时分秒" use-second />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
</script>
```

### 修改展示格式

修改展示格式

```vue
<template>
<wd-datetime-picker v-model="value" label="展示格式" :displayFormat="displayFormat" />
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now())
const displayFormat = (items) => {
  return `${items[0].label}年${items[1].label}月${items[2].label}日 ${items[3].label}:${items[4].label}`
}
</script>
```

### 修改弹出层内部格式

修改弹出层内部格式

```vue
<template>
<wd-datetime-picker v-model="value" label="内部格式" :formatter="formatter" />
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
<wd-datetime-picker v-model="value" label="过滤选项" :filter="filter" />
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

### 选择器大小

选择器大小

```vue
<template>
<wd-datetime-picker label="日期选择" size="large" v-model="value" />
</template>

<script lang="ts" setup>
</script>
```

### 必填属性

必填属性

```vue
<template>
<wd-datetime-picker label="必填属性" error v-model="value" required/>
</template>

<script lang="ts" setup>
</script>
```

### 错误状态

错误状态

```vue
<template>
<wd-datetime-picker label="日期选择" error v-model="value" />
</template>

<script lang="ts" setup>
</script>
```

### 值靠右展示

值靠右展示

```vue
<template>
<wd-datetime-picker label="日期选择" align-right v-model="value" />
</template>

<script lang="ts" setup>
</script>
```

### 确定前校验

确定前校验

```vue
<template>
<wd-toast></wd-toast>
<wd-datetime-picker label="before-confirm" v-model="value" :before-confirm="beforeConfirm" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
const value = ref<string>('')

const toast = useToast()
const beforeConfirm = (value, resolve, picker) => {
  picker.setLoading(true)
  setTimeout(() => {
    picker.setLoading(false)
    if (value > Date.now()) {
      resolve(false)
      toast.error('不能选择大于今天的日期')
    } else {
      resolve(true)
    }
  }, 2000)
}

function handleConfirm({ value }) {
  console.log(new Date(value))
}
</script>
```

### 唤起项插槽

设置默认插槽修改唤起picker组件的形式。

```vue
<template>
<wd-datetime-picker  v-model="value">
  <wd-button>插槽唤起</wd-button>
</wd-datetime-picker>
</template>

<script lang="ts" setup>
</script>
```

### 时间范围选择

时间范围选择

```vue
<template>
<wd-datetime-picker label="日期选择" v-model="value" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
const value = ref<any[]>(['', Date.now()])

function handleConfirm({ value }) {
  console.log(new Date(value))
}
</script>
```

### 范围选择tab标签展示格式

范围选择tab标签展示格式

```vue
<template>
<wd-datetime-picker v-model="value" label="范围tab展示格式" :display-format-tab-label="displayFormatTabLabel" @confirm="handleConfirm"></wd-datetime-picker>
</template>

<script lang="ts" setup>
const value = ref<any[]>(['', Date.now()])

function handleConfirm({ value }) {
  console.log(new Date(value))
}

const displayFormatTabLabel = (items) => {
  return `${items[0].label}年${items[1].label}月${items[2].label}日 ${items[3].label}:${items[4].label}`
}
</script>
```

### Methods

Methods

| 方法名称 | 说明 | 参数 | 最低版本 |
|--------|------|-----|---------|
| open | 打开picker弹框 | - |
| close | 关闭picker弹框 | - |

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-view-class | pickerView 外部自定义样式 | - |
| custom-cell-class | pickerView cell 外部自定义样式 | 1.3.8 |
| custom-label-class | label 外部自定义样式 | - |
| custom-value-class | value 外部自定义样式 | - |

