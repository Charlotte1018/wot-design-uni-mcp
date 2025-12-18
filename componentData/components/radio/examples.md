## Radio 组件示例

### basic-usage

要使用 Radio 组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应 Radio `label`属性的值， `label`可以是`String`、`Number` 或 `Boolean`。

```vue
<template>
  <div class="mb-2 flex items-center text-sm">
    <fin-radio-group v-model="radio1" class="ml-4">
      <fin-radio label="1" size="large">Option 1</fin-radio>
      <fin-radio label="2" size="large">Option 2</fin-radio>
    </fin-radio-group>
  </div>
  <div class="my-2 flex items-center text-sm">
    <fin-radio-group v-model="radio2" class="ml-4">
      <fin-radio label="1">Option 1</fin-radio>
      <fin-radio label="2">Option 2</fin-radio>
    </fin-radio-group>
  </div>
  <div class="my-4 flex items-center text-sm">
    <fin-radio-group v-model="radio3" class="ml-4">
      <fin-radio label="1" size="small">Option 1</fin-radio>
      <fin-radio label="2" size="small">Option 2</fin-radio>
    </fin-radio-group>
  </div>
  <div class="mb-2 flex items-center text-sm">
    <fin-radio-group v-model="radio3" disabled class="ml-4">
      <fin-radio label="1" size="small">Option 1</fin-radio>
      <fin-radio label="2" size="small">Option 2</fin-radio>
    </fin-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
</script>
```

### disabled

你只需要为单选框设置 `disabled` 属性就能控制其禁用状态。

```vue
<template>
  <fin-radio v-model="radio" disabled label="disabled">Option A</fin-radio>
  <fin-radio v-model="radio" disabled label="selected and disabled"
    >Option B</fin-radio
  >
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('selected and disabled')
</script>
```

### radio-button-group

结合`fin-radio-group`元素和子元素`fin-radio`可以实现单选组， 为 `fin-radio-group` 绑定 `v-model`，再为 每一个 `fin-radio` 设置好 `label` 属性即可， 另外，还可以通过 `change` 事件来响应变化，它会传入一个参数 `value` 来表示改变之后的值。

```vue
<template>
  <fin-radio-group v-model="radio">
    <fin-radio :label="3">Option A</fin-radio>
    <fin-radio :label="6">Option B</fin-radio>
    <fin-radio :label="9">Option C</fin-radio>
  </fin-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
</script>
```

### button-style

只需要把 `fin-radio` 元素换成 `fin-radio-button` 元素即可， 此外，FinD Plus 还提供了 `size` 属性用来控制单选框的大小。

```vue
<template>
  <div>
    <fin-radio-group v-model="radio1" size="large">
      <fin-radio-button label="New York" />
      <fin-radio-button label="Washington" />
      <fin-radio-button label="Los Angeles" />
      <fin-radio-button label="Chicago" />
    </fin-radio-group>
  </div>
  <div style="margin-top: 20px">
    <fin-radio-group v-model="radio2">
      <fin-radio-button label="New York" />
      <fin-radio-button label="Washington" />
      <fin-radio-button label="Los Angeles" />
      <fin-radio-button label="Chicago" />
    </fin-radio-group>
  </div>
  <div style="margin-top: 20px">
    <fin-radio-group v-model="radio3" size="small">
      <fin-radio-button label="New York" />
      <fin-radio-button label="Washington" disabled />
      <fin-radio-button label="Los Angeles" />
      <fin-radio-button label="Chicago" />
    </fin-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('New York')
const radio2 = ref('New York')
const radio3 = ref('New York')
</script>
```

### with-borders

设置 `border` 属性为 true 可以渲染为带有边框的单选框。

```vue
<template>
  <div>
    <fin-radio-group v-model="radio1">
      <fin-radio label="1" size="large" border>Option A</fin-radio>
      <fin-radio label="2" size="large" border>Option B</fin-radio>
    </fin-radio-group>
  </div>
  <div style="margin-top: 20px">
    <fin-radio-group v-model="radio2">
      <fin-radio label="1" border>Option A</fin-radio>
      <fin-radio label="2" border>Option B</fin-radio>
    </fin-radio-group>
  </div>
  <div style="margin-top: 20px">
    <fin-radio-group v-model="radio3" size="small">
      <fin-radio label="1" border>Option A</fin-radio>
      <fin-radio label="2" border disabled>Option B</fin-radio>
    </fin-radio-group>
  </div>
  <div style="margin-top: 20px">
    <fin-radio-group v-model="radio4" size="small" disabled>
      <fin-radio label="1" border>Option A</fin-radio>
      <fin-radio label="2" border>Option B</fin-radio>
    </fin-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
</script>
```

