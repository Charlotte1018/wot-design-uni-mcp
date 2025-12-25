## Switch 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-switch v-model="checked" />
</template>

<script lang="ts" setup>
const checked = ref<boolean>(true)
</script>
```

### 修改值

修改值

```vue
<template>
<wd-switch v-model="checked" active-value="沃特" inactive-value="商家后台" />
</template>

<script lang="ts" setup>
</script>
```

### 修改颜色

修改颜色

```vue
<template>
<wd-switch v-model="checked" active-color="#13ce66" inactive-color="#f00" />
</template>

<script lang="ts" setup>
</script>
```

### 自定义大小

自定义大小

```vue
<template>
<wd-switch v-model="checked" size="24px" />
</template>

<script lang="ts" setup>
</script>
```

### 修改前钩子

修改前钩子

```vue
<template>
<wd-switch v-model="checked" :before-change="beforeChange" @change="handleChange" />
</template>

<script lang="ts" setup>
import { useMessage } from '@/uni_modules/wot-design-uni'

const message = useMessage()

const beforeChange = ({ value, resolve }) => {
  message
    .confirm('是否切换开关')
    .then(() => {
      resolve(true)
    })
    .catch(() => {
      resolve(false)
    })
}
</script>
```

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|-----|---------|
| custom-class | 根节点样式 | - |

