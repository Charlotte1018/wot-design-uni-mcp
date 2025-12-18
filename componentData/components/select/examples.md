## Select 组件示例

### basic-usage

适用广泛的基础单选 `v-model` 的值为当前被选中的 `fin-option` 的 value 属性值

```vue
<template>
  <fin-select v-model="value" class="m-2" placeholder="Select" size="large">
    <fin-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </fin-select>
  <fin-select v-model="value" class="m-2" placeholder="Select">
    <fin-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </fin-select>
  <fin-select v-model="value" class="m-2" placeholder="Select" size="small">
    <fin-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </fin-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```

### disabled-option

在 `fin-option` 中，设定 `disabled` 值为 true，即可禁用该选项

```vue
<template>
  <fin-select v-model="value" placeholder="Select">
    <fin-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </fin-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```

### disabled

为 `fin-select` 设置 `disabled`属性，则整个选择器不可用。

```vue
<template>
  <fin-select v-model="value" disabled placeholder="Select">
    <fin-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </fin-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```

### clearable

为 `fin-select` 设置 `clearable` 属性，则可将选择器清空。 需要注意的是，`clearable` 属性仅适用于单选。

```vue
<template>
  <fin-select v-model="value" clearable placeholder="Select">
    <fin-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </fin-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```

### multiple

为 `fin-select` 设置 `multiple` 属性即可启用多选， 此时 `v-model` 的值为当前选中值所组成的数组。 默认情况下选中值会以 Tag 组件的形式展现， 你也可以设置 `collapse-tags` 属性将它们合并为一段文字。 您可以使用 `collapse-tags-tooltip` 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。

```vue
<template>
  <div class="m-4">
    <p>default</p>
    <fin-select
      v-model="value1"
      multiple
      placeholder="Select"
      style="width: 240px"
    >
      <fin-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </fin-select>
  </div>
  <div class="m-4">
    <p>use collapse-tags</p>
    <fin-select
      v-model="value2"
      multiple
      collapse-tags
      placeholder="Select"
      style="width: 240px"
    >
      <fin-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </fin-select>
  </div>
  <div class="m-4">
    <p>use collapse-tags-tooltip</p>
    <fin-select
      v-model="value3"
      multiple
      collapse-tags
      collapse-tags-tooltip
      placeholder="Select"
      style="width: 240px"
    >
      <fin-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </fin-select>
  </div>
  <div class="m-4">
    <p>use max-collapse-tags</p>
    <fin-select
      v-model="value4"
      multiple
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="3"
      placeholder="Select"
      style="width: 240px"
    >
      <fin-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </fin-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
const value4 = ref([])
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```

### custom-template

将自定义的 HTML 模板插入 `fin-option` 的 slot 中即可。

```vue
<template>
  <fin-select v-model="value" placeholder="Select">
    <fin-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
      <span
        style="
          float: right;
          color: var(--fin-text-color-secondary);
          font-size: 13px;
        "
        >{{ item.value }}</span
      >
    </fin-option>
  </fin-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const cities = [
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]
</script>
```

### grouping

使用 `fin-option-group` 对备选项进行分组，它的 `label` 属性为分组名

```vue
<template>
  <fin-select v-model="value" placeholder="Select">
    <fin-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label"
    >
      <fin-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </fin-option-group>
  </fin-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    label: 'Popular cities',
    options: [
      {
        value: 'Shanghai',
        label: 'Shanghai',
      },
      {
        value: 'Beijing',
        label: 'Beijing',
      },
    ],
  },
  {
    label: 'City name',
    options: [
      {
        value: 'Chengdu',
        label: 'Chengdu',
      },
      {
        value: 'Shenzhen',
        label: 'Shenzhen',
      },
      {
        value: 'Guangzhou',
        label: 'Guangzhou',
      },
      {
        value: 'Dalian',
        label: 'Dalian',
      },
    ],
  },
]
</script>
```

### filterable

为`fin-select`添加`filterable`属性即可启用搜索功能。 默认情况下，Select 会找出所有 `label` 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。 `filter-method` 为一个 `Function`，它会在输入值发生变化时调用，参数为当前输入值。

```vue
<template>
  <fin-select v-model="value" filterable placeholder="Select">
    <fin-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </fin-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```

### remote-search

从服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将`filterable`和`remote`设置为`true`，同时传入一个`remote-method`。 `remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。 需要注意的是，如果 `fin-option` 是通过 `v-for` 指令渲染出来的，此时需要为 `fin-option` 添加 `key` 属性， 且其值需具有唯一性，比如这个例子中的 `item.value`。

```vue
<template>
  <div class="flex flex-wrap">
    <div class="m-4">
      <p>default</p>
      <fin-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="Please enter a keyword"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <fin-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </fin-select>
    </div>
    <div class="m-4">
      <p>use remote-show-suffix</p>
      <fin-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="Please enter a keyword"
        remote-show-suffix
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <fin-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </fin-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface ListItem {
  value: string
  label: string
}

const list = ref<ListItem[]>([])
const options = ref<ListItem[]>([])
const value = ref<string[]>([])
const loading = ref(false)

onMounted(() => {
  list.value = states.map((item) => {
    return { value: `value:${item}`, label: `label:${item}` }
  })
})

const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options.value = []
  }
}

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
</script>
```

### allow-create

通过使用 `allow-create` 属性，用户可以通过输入框创建新项目。 为了使 `allow-create` 正常工作， `filterable` 的值必须为 `true`。 本例还使用了 `default-first-option` 属性， 在该属性为 `true` 的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。

```vue
<template>
  <fin-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    :reserve-keyword="false"
    placeholder="Choose tags for your article"
  >
    <fin-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </fin-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string[]>([])
const options = [
  {
    value: 'HTML',
    label: 'HTML',
  },
  {
    value: 'CSS',
    label: 'CSS',
  },
  {
    value: 'JavaScript',
    label: 'JavaScript',
  },
]
</script>
```

### value-key

通过使用 `value-key` 属性，可以正确处理带有重复label的数据。 这样虽然`label` 是重复的，但任可通过 `id` 来确认唯一性。

```vue
<template>
  <div class="m-4">
    <fin-select v-model="value" value-key="id" placeholder="Select">
      <fin-option
        v-for="item in options"
        :key="item.id"
        :label="item.label"
        :value="item"
      />
    </fin-select>
    <p>
      selected option's description:
      {{ value ? value.desc : 'no select' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Option = {
  id: number
  label: string
  desc: string
}
const value = ref<Option>()
const options = ref([
  { id: 1, label: 'Option A', desc: 'Option A - 230506' },
  { id: 2, label: 'Option B', desc: 'Option B - 230506' },
  { id: 3, label: 'Option C', desc: 'Option C - 230506' },
  { id: 4, label: 'Option A', desc: 'Option A - 230507' },
])
</script>
```

