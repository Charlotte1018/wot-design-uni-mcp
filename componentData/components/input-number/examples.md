## InputNumber 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-input-number v-model="value" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref<number>(1)
function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 设置步长

设置步长

```vue
<template>
<wd-input-number v-model="value" @change="handleChange" :step="2" />
</template>

<script lang="ts" setup>
</script>
```

### 设置最小最大值

设置最小最大值

```vue
<template>
<wd-input-number v-model="value" @change="handleChange" :min="3" :max="10" />
</template>

<script lang="ts" setup>
</script>
```

### 禁用

禁用

```vue
<template>
<wd-input-number v-model="value" @change="handleChange" disabled />
</template>

<script lang="ts" setup>
</script>
```

### 禁用输入框

禁用输入框

```vue
<template>
<wd-input-number v-model="value" @change="handleChange" disable-input />
</template>

<script lang="ts" setup>
</script>
```

### 禁用按钮

可以单独禁用增加或减少按钮。

```vue
<template>
<!-- 禁用减号按钮 -->
<wd-input-number v-model="value" @change="handleChange" disable-minus />

<!-- 禁用加号按钮 -->
<wd-input-number v-model="value" @change="handleChange" disable-plus />
</template>

<script lang="ts" setup>
</script>
```

### 无输入框

无输入框

```vue
<template>
<wd-input-number v-model="value" @change="handleChange" without-input />
</template>

<script lang="ts" setup>
</script>
```

### 设置小数精度

设置小数精度

```vue
<template>
<wd-input-number v-model="value" @change="handleChange" :precision="2" :step="0.1" />
</template>

<script lang="ts" setup>
</script>
```

### 严格步数倍数

严格步数倍数

```vue
<template>
<wd-input-number v-model="value" @change="handleChange" step-strictly :step="2" />
</template>

<script lang="ts" setup>
</script>
```

### 修改输入框宽度

修改输入框宽度

```vue
<template>
<wd-input-number v-model="value" @change="handleChange" input-width="70px" />
</template>

<script lang="ts" setup>
</script>
```

### 允许空值，设置 placeholder

允许空值，设置 placeholder

```vue
<template>
<wd-input-number v-model="value" allow-null placeholder="不限" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref<number|string>('')
function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 非立即更新模式

非立即更新模式

```vue
<template>
<!-- 立即更新模式（默认） -->
<wd-input-number v-model="value1" @change="handleChange" :immediate-change="true" />

<!-- 非立即更新模式 -->
<wd-input-number v-model="value2" @change="handleChange" :immediate-change="false" />
</template>

<script lang="ts" setup>
const value1 = ref<number>(1)
const value2 = ref<number>(1)
function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 初始化时自动更新

初始化时自动更新

```vue
<template>
<!-- 自动更新初始值（默认） -->
<wd-input-number v-model="value1" @change="handleChange" :update-on-init="true" :min="3" :max="15" :step="2" step-strictly />

<!-- 不更新初始值，保持原始值 -->
<wd-input-number v-model="value2" @change="handleChange" :update-on-init="false" :min="3" :max="15" :step="2" step-strictly />
</template>

<script lang="ts" setup>
const value1 = ref<number>(1) // 会自动修正为4（≥3的最小2的倍数）
const value2 = ref<number>(1) // 保持为1，不会修正但会格式化显示
function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 异步变更

异步变更

```vue
<template>
<wd-input-number v-model="value" :before-change="beforeChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from '@/uni_modules/wot-design-uni'
import type { InputNumberBeforeChange } from '@/uni_modules/wot-design-uni/components/wd-input-number/types'
const { loading, close } = useToast()

const value = ref<number>(1)
 
const beforeChange: InputNumberBeforeChange = (value) => {
  loading({ msg: `正在更新到${value}...` })
  return new Promise((resolve) => {
    setTimeout(() => {
      close()
      resolve(true)
    }, 500)
  })
}
</script>
```

### 长按加减

长按加减

```vue
<template>
<wd-input-number v-model="value" long-press @change="handleChange" />
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

