## InputNumber 组件示例

### basic

要使用它，只需要在 `<fin-input-number>` 元素中使用 `v-model` 绑定变量即可，变量的初始值即为默认值。

```vue
<template>
  <fin-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>
```

### disabled

`disabled`属性接受一个 `Boolean`，设置为`true`即可禁用整个组件。 ，如果你只需要控制数值在某一范围内，可以设置 `min` 属性和 `max` 属性， 默认最小值为 `0`。

```vue
<template>
  <fin-input-number v-model="num" :disabled="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>
```

### readonly

`readonly`属性接受一个 `Boolean`，设置为`true`即让整个组件只读。 ，如果你只需要控制数值在某一范围内，可以设置 `min` 属性和 `max` 属性， 默认最小值为 `0`。

```vue
<template>
  <fin-input-number v-model="num" readonly />
  <fin-input-number v-model="num2" readonly />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const num2 = ref(11)
</script>
```

### steps

设置 `step` 属性可以控制步长。

```vue
<template>
  <fin-input-number v-model="num" :step="2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(5)
</script>
```

### step-strictly

`step-strictly`属性接受一个`Boolean`。 如果这个属性被设置为 `true`，则只能输入步进的倍数。

```vue
<template>
  <fin-input-number v-model="num" :step="2" step-strictly />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(2)
</script>
```

### precision

设置 `precision` 属性可以控制数值精度，接收一个 `Number`。

```vue
<template>
  <fin-input-number v-model="num" :precision="2" :step="0.1" :max="10" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>
```

### size



```vue
<template>
  <fin-input-number v-model="num1" size="large" />
  <fin-input-number v-model="num2" class="mx-4" />
  <fin-input-number v-model="num3" size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num1 = ref(1)
const num2 = ref(2)
const num3 = ref(3)
</script>
```

### controlled

设置 `controls-position` 属性可以控制按钮位置。

```vue
<template>
  <fin-input-number
    v-model="num"
    :min="1"
    :max="10"
    controls-position="right"
    size="large"
    @change="handleChange"
  />
  <fin-input-number
    v-model="num"
    class="mx-4"
    :min="1"
    :max="10"
    controls-position="right"
    @change="handleChange"
  />
  <fin-input-number
    v-model="num"
    :min="1"
    :max="10"
    size="small"
    controls-position="right"
    @change="handleChange"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>
```

