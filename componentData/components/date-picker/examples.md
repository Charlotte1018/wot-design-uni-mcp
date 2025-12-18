## DatePicker 组件示例

### enter-date

基本单位由 `type` 属性指定。 通过 `shortcuts` 配置快捷选项， 通过 `disabledDate` 函数，来设置禁用掉的日期。

```vue
<template>
  <fin-radio-group v-model="size" label="size control" size="small">
    <fin-radio-button label="large">large</fin-radio-button>
    <fin-radio-button label="default">default</fin-radio-button>
    <fin-radio-button label="small">small</fin-radio-button>
  </fin-radio-group>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <fin-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day"
        :size="size"
      />
    </div>
    <div class="block">
      <span class="demonstration">Picker with quick options</span>
      <fin-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        :size="size"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### other-measurements



```vue
<template>
  <div class="demo-date-picker">
    <div class="container">
      <div class="block">
        <span class="demonstration">Week</span>
        <fin-date-picker
          v-model="value1"
          type="week"
          format="[Week] ww"
          placeholder="Pick a week"
        />
      </div>
      <div class="block">
        <span class="demonstration">Month</span>
        <fin-date-picker
          v-model="value2"
          type="month"
          placeholder="Pick a month"
        />
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">Year</span>
        <fin-date-picker
          v-model="value3"
          type="year"
          placeholder="Pick a year"
        />
      </div>
      <div class="block">
        <span class="demonstration">Dates</span>
        <fin-date-picker
          v-model="value4"
          type="dates"
          placeholder="Pick one or more dates"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .container {
  flex: 1;
  border-right: solid 1px var(--fin-border-color);
}
.demo-date-picker .container .block {
  border-right: none;
}
.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--fin-border-color);
}
.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### date-range

在选择日期范围时，默认情况下左右面板会联动。 如果希望两个面板各自独立切换当前月份，可以使用 `unlink-panels` 属性解除联动。

```vue
<template>
  <fin-radio-group v-model="size" label="size control" size="small">
    <fin-radio-button label="large">large</fin-radio-button>
    <fin-radio-button label="default">default</fin-radio-button>
    <fin-radio-button label="small">small</fin-radio-button>
  </fin-radio-group>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <fin-date-picker
        v-model="value1"
        type="daterange"
        range-separator="→"
        start-placeholder="Start date"
        end-placeholder="End date"
        :size="size"
      />
    </div>
    <div class="block">
      <span class="demonstration">With quick options</span>
      <fin-date-picker
        v-model="value2"
        type="daterange"
        unlink-panels
        range-separator="→"
        start-placeholder="Start date"
        end-placeholder="End date"
        :shortcuts="shortcuts"
        :size="size"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### month-range

在选择月份范围时，默认情况下左右面板会联动。 如果希望两个面板各自独立切换当前年份，可以使用 `unlink-panels` 属性解除联动。

```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <fin-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="→"
        start-placeholder="Start month"
        end-placeholder="End month"
      />
    </div>
    <div class="block">
      <span class="demonstration">With quick options</span>
      <fin-date-picker
        v-model="value2"
        type="monthrange"
        unlink-panels
        range-separator="→"
        start-placeholder="Start month"
        end-placeholder="End month"
        :shortcuts="shortcuts"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: 'This month',
    value: [new Date(), new Date()],
  },
  {
    text: 'This year',
    value: () => {
      const end = new Date()
      const start = new Date(new Date().getFullYear(), 0)
      return [start, end]
    },
  },
  {
    text: 'Last 6 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 6)
      return [start, end]
    },
  },
]
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### default-value



```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">date</span>
      <fin-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a date"
        :default-value="new Date(2010, 9, 1)"
      />
    </div>
    <div class="block">
      <span class="demonstration">daterange</span>
      <fin-date-picker
        v-model="value2"
        type="daterange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### date-formats



```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Emits Date object</span>
      <div class="demonstration">Value: {{ value1 }}</div>
      <fin-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
      />
    </div>
    <div class="block">
      <span class="demonstration">Use value-format</span>
      <div class="demonstration">Value：{{ value2 }}</div>
      <fin-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
      />
    </div>
    <div class="block">
      <span class="demonstration">Timestamp</span>
      <div class="demonstration">Value：{{ value3 }}</div>
      <fin-date-picker
        v-model="value3"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
        value-format="x"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### default-time

默认情况下，开始日期和结束日期的时间部分都是选择日期当日的 `00:00:00`。 通过 `default-time` 可以分别指定开始日期和结束日期的具体时刻。 它接受最多两个日期对象的数组。 其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。

```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <p>Component value：{{ value }}</p>
      <fin-date-picker
        v-model="value"
        type="daterange"
        start-placeholder="Start date"
        end-placeholder="End date"
        :default-time="defaultTime"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
</style>
```

### custom-prefix-icon

当你从其他vue组件或由渲染函数生成的组件中导入组件时, 你可以设置 `prefix-icon` 属性来定制前缀内容

```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">set prefix-icon</span>
      <fin-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day"
        :prefix-icon="customPrefix"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { h, ref, shallowRef } from 'vue'

const value1 = ref('')

const customPrefix = shallowRef({
  render() {
    return h('p', 'pre')
  },
})
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### custom-content



```vue
<template>
  <div class="demo-date-picker">
    <fin-date-picker
      v-model="value"
      type="date"
      placeholder="Pick a day"
      format="YYYY/MM/DD"
      value-format="YYYY-MM-DD"
    >
      <template #default="cell">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span class="text">{{ cell.text }}</span>
          <span v-if="isHoliday(cell)" class="holiday" />
        </div>
      </template>
    </fin-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('2021-10-29')
const holidays = [
  '2021-10-01',
  '2021-10-02',
  '2021-10-03',
  '2021-10-04',
  '2021-10-05',
  '2021-10-06',
  '2021-10-07',
]

const isHoliday = ({ dayjs }) => {
  return holidays.includes(dayjs.format('YYYY-MM-DD'))
}
</script>

<style scoped>
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.cell.current .text {
  background: #626aef;
  color: #fff;
}
.cell .holiday {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--fin-color-danger);
  border-radius: 50%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
```

