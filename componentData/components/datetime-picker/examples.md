## DatetimePicker 组件示例

### date-and-time

通过设置`type`属性为`datetime`，即可在同一个选择器里同时进行日期和时间的选择。 快捷方式的使用方法与 Date Picker 相同。

```vue
<template>
  <div class="demo-datetime-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <fin-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      />
    </div>
    <div class="block">
      <span class="demonstration">With shortcuts</span>
      <fin-date-picker
        v-model="value2"
        type="datetime"
        placeholder="Select date and time"
        :shortcuts="shortcuts"
      />
    </div>
    <div class="block">
      <span class="demonstration">With default time</span>
      <fin-date-picker
        v-model="value3"
        type="datetime"
        placeholder="Select date and time"
        :default-time="defaultTime"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)

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
</script>
<style scoped>
.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}
.demo-datetime-picker .block:last-child {
  border-right: none;
}
.demo-datetime-picker .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### date-and-time-formats



```vue
<template>
  <div class="demo-datetime-picker">
    <div class="block">
      <span class="demonstration">Emits Date object</span>
      <div class="demonstration">Value: {{ value1 }}</div>
      <fin-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY/MM/DD HH:mm:ss"
      />
    </div>
    <div class="block">
      <span class="demonstration">Use value-format</span>
      <div class="demonstration">Value：{{ value2 }}</div>
      <fin-date-picker
        v-model="value2"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY/MM/DD hh:mm:ss"
        value-format="YYYY-MM-DD h:m:s a"
      />
    </div>
    <div class="block">
      <span class="demonstration">Timestamp</span>
      <div class="demonstration">Value：{{ value3 }}</div>
      <fin-date-picker
        v-model="value3"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY/MM/DD hh:mm:ss"
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
.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}
.demo-datetime-picker .block:last-child {
  border-right: none;
}
.demo-datetime-picker .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### date-and-time-formats-panel



```vue
<template>
  <div class="demo-datetime-picker">
    <div class="block">
      <fin-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY-MM-DD HH:mm:ss"
        date-format="MMM DD, YYYY"
        time-format="HH:mm"
      />
    </div>
    <div class="line" />
    <div class="block">
      <fin-date-picker
        v-model="value2"
        type="datetimerange"
        start-placeholder="Start date"
        end-placeholder="End date"
        format="YYYY-MM-DD HH:mm:ss"
        date-format="YYYY/MM/DD ddd"
        time-format="A hh:mm:ss"
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
.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}
.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
}
.line {
  width: 1px;
  background-color: var(--fin-border-color);
}
</style>
```

### date-and-time-range

设置`type`为`datetimerange`即可选择日期和时间范围

```vue
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <fin-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
    />
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <fin-date-picker
      v-model="value2"
      type="datetimerange"
      :shortcuts="shortcuts"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref<[Date, Date]>([
  new Date(2000, 10, 10, 10, 10),
  new Date(2000, 10, 11, 10, 10),
])
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
.block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}
.block:last-child {
  border-right: none;
}
.block .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### default-time

使用`datetimerange`进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的`00:00:00`作为起始与结束的时刻；通过选项`default-time`可以控制选中起始与结束日期时所使用的具体时刻。 我们可以使用 `default-time` 属性来控制它。 `default-time`接受一个数组，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。 第一项控制开始日期的时间值，第二项控制结束日期的时间值。

```vue
<template>
  <div class="block">
    <span class="demonstration">Start and end date time 12:00:00</span>
    <fin-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="defaultTime1"
    />
  </div>
  <div class="block">
    <span class="demonstration"
      >Start date time 12:00:00, end date time 08:00:00</span
    >
    <fin-date-picker
      v-model="value2"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="defaultTime2"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')

const defaultTime1 = new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'
const defaultTime2: [Date, Date] = [
  new Date(2000, 1, 1, 12, 0, 0),
  new Date(2000, 2, 1, 8, 0, 0),
] // '12:00:00', '08:00:00'
</script>
<style scoped>
.block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  flex: 1;
}
.block:last-child {
  border-right: none;
}
.block .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

