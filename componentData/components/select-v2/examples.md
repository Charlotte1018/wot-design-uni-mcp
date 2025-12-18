## SelectV2 组件示例

### basic-usage



```vue
<template>
  <fin-select-v2
    v-model="value"
    :options="options"
    placeholder="Please select"
    size="large"
  />
  <fin-select-v2
    v-model="value"
    :options="options"
    placeholder="Please select"
  />
  <fin-select-v2
    v-model="value"
    :options="options"
    placeholder="Please select"
    size="small"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>

<style scoped>
.example-showcase .fin-select-v2 {
  margin-right: 20px;
}
</style>
```

### multiple



```vue
<template>
  <fin-select-v2
    v-model="value"
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = ref(
  Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${initials[idx % 10]}${idx}`,
  }))
)
</script>
```

### hide-extra-tags



```vue
<template>
  <div class="m-4">
    <p>use collapse-tags</p>
    <fin-select-v2
      v-model="value"
      :options="options"
      placeholder="Please select"
      style="width: 240px"
      multiple
      collapse-tags
    />
  </div>
  <div class="m-4">
    <p>use collapse-tags-tooltip</p>
    <fin-select-v2
      v-model="value2"
      :options="options"
      placeholder="Please select"
      style="width: 240px"
      multiple
      collapse-tags
      collapse-tags-tooltip
    />
  </div>
  <div class="m-4">
    <p>use max-collapse-tags</p>
    <fin-select-v2
      v-model="value3"
      :options="options"
      placeholder="Please select"
      style="width: 240px"
      multiple
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="3"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const value2 = ref([])
const value3 = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>
```

### filterable



```vue
<template>
  <fin-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>
```

### disabled



```vue
<template>
  <fin-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px; margin-right: 16px; vertical-align: middle"
    multiple
  />
  <fin-select-v2
    v-model="value"
    disabled
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px; vertical-align: middle"
    multiple
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
  disabled: idx % 10 === 0,
}))
</script>
```

### grouping



```vue
<template>
  <fin-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = Array.from({ length: 10 }).map((_, idx) => {
  const label = idx + 1
  return {
    value: `Group ${label}`,
    label: `Group ${label}`,
    options: Array.from({ length: 10 }).map((_, idx) => ({
      value: `Option ${idx + 1 + 10 * label}`,
      label: `${initials[idx % 10]}${idx + 1 + 10 * label}`,
    })),
  }
})
</script>
```

### customized-option



```vue
<template>
  <fin-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
  >
    <template #default="{ item }">
      <span style="margin-right: 8px">{{ item.label }}</span>
      <span style="color: var(--fin-text-color-secondary); font-size: 13px">
        {{ item.value }}
      </span>
    </template>
  </fin-select-v2>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>
```

### clearable



```vue
<template>
  <fin-select-v2
    v-model="value1"
    :options="options"
    placeholder="Please select"
    style="width: 240px; margin-right: 16px; vertical-align: middle"
    multiple
    clearable
  />
  <fin-select-v2
    v-model="value2"
    :options="options"
    placeholder="Please select"
    style="width: 240px; vertical-align: middle"
    clearable
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value1 = ref([])
const value2 = ref()
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>
```

### allow-create



```vue
<template>
  <div style="flex: auto">
    <div>
      <fin-select-v2
        v-model="value1"
        :options="options"
        placeholder="Please select"
        style="width: 240px; margin-right: 16px; vertical-align: middle"
        allow-create
        filterable
        multiple
        clearable
      />
      <fin-select-v2
        v-model="value2"
        :options="options"
        placeholder="Please select"
        style="width: 240px; vertical-align: middle"
        allow-create
        filterable
        clearable
      />
    </div>
    <div>
      <p style="margin-top: 20px; margin-bottom: 8px">
        set reserve-keyword false
      </p>
      <fin-select-v2
        v-model="value3"
        :options="options"
        placeholder="Please select"
        style="width: 240px; margin-right: 16px; vertical-align: middle"
        allow-create
        filterable
        multiple
        clearable
        :reserve-keyword="false"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value1 = ref([])
const value2 = ref()
const value3 = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>
```

### remote-search

从服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将`filterable`和`remote`设置为`true`，同时传入一个`remote-method`。 `remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。

```vue
<template>
  <fin-select-v2
    v-model="value"
    style="width: 240px"
    multiple
    filterable
    remote
    :remote-method="remoteMethod"
    clearable
    :options="options"
    :loading="loading"
    placeholder="Please enter a keyword"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
const list = states.map((item): ListItem => {
  return { value: `value:${item}`, label: `label:${item}` }
})

interface ListItem {
  value: string
  label: string
}

const value = ref([])
const options = ref<ListItem[]>([])
const loading = ref(false)

const remoteMethod = (query: string) => {
  if (query !== '') {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options.value = []
  }
}
</script>
```

### use-valueKey



```vue
<template>
  <fin-select-v2
    v-model="value"
    :options="options"
    placeholder="Please select"
    value-key="name"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref({ name: 'Option 1', test: 'test 0' })
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: {
    name: `Option ${idx + 1}`,
    test: `test ${idx % 3}`,
  },
  label: `${initials[idx % 10]}${idx}`,
}))
</script>

<style scoped>
.example-showcase .fin-select-v2 {
  margin-right: 20px;
}
</style>
```

### props



```vue
<template>
  <fin-select-v2
    v-model="value"
    :options="options"
    :props="props"
    placeholder="Please select"
    style="width: 240px"
    filterable
    multiple
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const props = {
  label: 'name',
  value: 'id',
}
const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  id: `Option ${idx + 1}`,
  name: `${initials[idx % 10]}${idx}`,
}))
</script>
```

