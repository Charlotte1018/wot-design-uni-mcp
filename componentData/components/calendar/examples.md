## Calendar 组件示例

### basic

设置 `value` 来指定当前显示的月份。 如果 `value` 未指定，则显示当月。 `value` 支持 `v-model` 双向绑定。

```vue
<template>
  <fin-calendar v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>
```

### range

设置 `range` 属性指定日历的显示范围。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。

```vue
<template>
  <fin-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]" />
</template>
```

### header



```vue
<template>
  <fin-calendar ref="calendar">
    <template #header="{ date }">
      <span>Custom header content</span>
      <span>{{ date }}</span>
      <fin-button-group>
        <fin-button size="small" @click="selectDate('prev-year')">
          Previous Year
        </fin-button>
        <fin-button size="small" @click="selectDate('prev-month')">
          Previous Month
        </fin-button>
        <fin-button size="small" @click="selectDate('today')">Today</fin-button>
        <fin-button size="small" @click="selectDate('next-month')">
          Next Month
        </fin-button>
        <fin-button size="small" @click="selectDate('next-year')">
          Next Year
        </fin-button>
      </fin-button-group>
    </template>
  </fin-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CalendarDateType, CalendarInstance } from '@jdt/find-plus'

const calendar = ref<CalendarInstance>()
const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return
  calendar.value.selectDate(val)
}
</script>
```

