## Tag 组件示例

### basic

由 `type` 属性来选择 tag 的类型。 也可以通过 `color` 属性来自定义背景色。

```vue
<template>
  <fin-tag>Tag 1</fin-tag>
  <fin-tag class="ml-2" type="success">Tag 2</fin-tag>
  <fin-tag class="ml-2" type="info">Tag 3</fin-tag>
  <fin-tag class="ml-2" type="warning">Tag 4</fin-tag>
  <fin-tag class="ml-2" type="danger">Tag 5</fin-tag>
  <fin-tag class="ml-2" type="neutral">Tag 6</fin-tag>
</template>
```

### removable

设置 `closable` 属性可以定义一个标签是否可移除。 它接受一个 `Boolean`。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 `disable-transitions` 属性，它接受一个 `Boolean`，`true` 为关闭。 当 Tag 被移除时会触发 `close` 事件。

```vue
<template>
  <fin-tag
    v-for="tag in tags"
    :key="tag.name"
    class="mx-1"
    closable
    :type="tag.type"
  >
    {{ tag.name }}
  </fin-tag>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref([
  { name: 'Tag 1', type: '' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' },
  { name: 'Tag 6', type: 'neutral' },
])
</script>
```

### editable



```vue
<template>
  <fin-tag
    v-for="tag in dynamicTags"
    :key="tag"
    class="mx-1"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)"
  >
    {{ tag }}
  </fin-tag>
  <fin-input
    v-if="inputVisible"
    ref="InputRef"
    v-model="inputValue"
    class="ml-1 w-20"
    size="small"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
  />
  <fin-button
    v-else
    class="button-new-tag ml-1"
    size="small"
    @click="showInput"
  >
    + New Tag
  </fin-button>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { FinInput } from '@jdt/find-plus'

const inputValue = ref('')
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const inputVisible = ref(false)
const InputRef = ref<InstanceType<typeof FinInput>>()

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
</script>
```

### sizes

使用 `size` 属性来设置额外尺寸, 可选值包括 `large`, `default` 或 `small`.

```vue
<template>
  <fin-row>
    <fin-tag class="mx-1" size="large">Large</fin-tag>
    <fin-tag class="mx-1">Default</fin-tag>
    <fin-tag class="mx-1" size="small">Small</fin-tag>
  </fin-row>

  <fin-row class="mt-4">
    <fin-tag class="mx-1" size="large" closable>Large</fin-tag>
    <fin-tag class="mx-1" closable>Default</fin-tag>
    <fin-tag class="mx-1" size="small" closable>Small</fin-tag>
  </fin-row>
</template>
```

### theme

通过设置 `effect` 属性来改变主题，默认为 `light`。

```vue
<template>
  <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
    <span class="tag-group__title m-1 line-height-2">Dark</span>
    <fin-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="dark"
    >
      {{ item.label }}
    </fin-tag>
  </div>
  <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
    <span class="tag-group__title m-1">Light</span>
    <fin-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="light"
    >
      {{ item.label }}
    </fin-tag>
  </div>
  <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
    <span class="tag-group__title m-1">Plain</span>
    <fin-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </fin-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TagProps } from '@jdt/find-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: '', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
  { type: 'neutral', label: 'Tag 6' },
])
</script>
```

### rounded



```vue
<template>
  <div class="flex flex-wrap gap-2 my-2">
    <fin-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="dark"
      round
    >
      {{ item.label }}
    </fin-tag>
  </div>
  <div class="flex flex-wrap gap-2">
    <fin-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="light"
      round
    >
      {{ item.label }}
    </fin-tag>
  </div>
  <div class="flex flex-wrap gap-2 my-2">
    <fin-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="plain"
      round
    >
      {{ item.label }}
    </fin-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TagProps } from '@jdt/find-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: '', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
  { type: 'neutral', label: 'Tag 6' },
])
</script>
```

