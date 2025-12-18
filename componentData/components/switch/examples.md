## Switch 组件示例

### basic

绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--fin-switch-on-color` 属性与 `--fin-switch-off-color` 属性来设置开关的背景色。

```vue
<template>
  <fin-switch v-model="value1" />
  <fin-switch
    v-model="value2"
    class="ml-2"
    style="--fin-switch-on-color: #13ce66; --fin-switch-off-color: #ff4949"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
```

### sizes



```vue
<template>
  <fin-switch
    v-model="value"
    size="large"
    active-text="Open"
    inactive-text="Close"
  />
  <br />
  <fin-switch v-model="value" active-text="Open" inactive-text="Close" />
  <br />
  <fin-switch
    v-model="value"
    size="small"
    active-text="Open"
    inactive-text="Close"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
</script>
```

### text-description

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

```vue
<template>
  <fin-switch
    v-model="value1"
    class="mb-2"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <fin-switch
    v-model="value2"
    class="mb-2"
    style="--fin-switch-on-color: #13ce66; --fin-switch-off-color: #ff4949"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <fin-switch
    v-model="value3"
    inline-prompt
    active-text="是"
    inactive-text="否"
  />
  <fin-switch
    v-model="value4"
    class="ml-2"
    inline-prompt
    style="--fin-switch-on-color: #13ce66; --fin-switch-off-color: #ff4949"
    active-text="Y"
    inactive-text="N"
  />
  <fin-switch
    v-model="value6"
    class="ml-2"
    width="60"
    inline-prompt
    active-text="超出省略"
    inactive-text="超出省略"
  />
  <fin-switch
    v-model="value5"
    class="ml-2"
    inline-prompt
    style="--fin-switch-on-color: #13ce66; --fin-switch-off-color: #ff4949"
    active-text="完整展示多个内容"
    inactive-text="多个内容"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
const value6 = ref(true)
</script>
```

### custom-icons

使用 `inactive-icon` 和 `active-icon` 属性来添加图标。 使用 `inline-prompt` 属性来控制图标显示在点内。

```vue
<template>
  <fin-switch v-model="value1" :active-icon="Check" :inactive-icon="Close" />
  <br />
  <fin-switch
    v-model="value2"
    class="mt-2"
    style="margin-left: 24px"
    inline-prompt
    :active-icon="Check"
    :inactive-icon="Close"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Check, Close } from '@jdt/find-plus-icons-vue'
const value1 = ref(true)
const value2 = ref(true)
</script>
```

### extended-value-types

你可以设置 `active-value` 和 `inactive-value` 属性， 它们接受 `Boolean`、`String` 或 `Number` 类型的值。

```vue
<template>
  <fin-tooltip :content="'Switch value: ' + value" placement="top">
    <fin-switch
      v-model="value"
      style="--fin-switch-on-color: #13ce66; --fin-switch-off-color: #ff4949"
      active-value="100"
      inactive-value="0"
    />
  </fin-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('100')
</script>
```

### disabled

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

```vue
<template>
  <fin-switch v-model="value1" disabled />
  <fin-switch v-model="value2" class="ml-2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
```

### loading

设置`loading`属性，接受一个`Boolean`，设置`true`即加载中状态。

```vue
<template>
  <fin-switch v-model="value1" loading />
  <fin-switch v-model="value2" loading class="ml-2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>
```

### prevent-switching

设置`beforeChange`属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。

```vue
<template>
  <fin-switch
    v-model="value1"
    :loading="loading1"
    :before-change="beforeChange1"
  />
  <fin-switch
    v-model="value2"
    class="ml-2"
    :loading="loading2"
    :before-change="beforeChange2"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { FinMessage } from '@jdt/find-plus'

const value1 = ref(false)
const value2 = ref(false)
const loading1 = ref(false)
const loading2 = ref(false)

const beforeChange1 = () => {
  loading1.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      loading1.value = false
      FinMessage.success('Switch success')
      return resolve(true)
    }, 1000)
  })
}

const beforeChange2 = () => {
  loading2.value = true
  return new Promise((_, reject) => {
    setTimeout(() => {
      loading2.value = false
      FinMessage.error('Switch failed')
      return reject(new Error('Error'))
    }, 1000)
  })
}
</script>
```

### custom-action-icon

使用 `inactive-action-icon` 和 `active-action-icon` 属性来添加图标。

```vue
<template>
  <fin-switch
    v-model="value1"
    :active-action-icon="Visible"
    :inactive-action-icon="Invisible"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Invisible, Visible } from '@jdt/find-plus-icons-vue'
const value1 = ref(true)
</script>
```

