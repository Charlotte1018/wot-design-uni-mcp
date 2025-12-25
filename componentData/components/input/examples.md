## Input 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-input type="text" v-model="value" placeholder="请输入用户名" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref<string>('')
function handleChange(event) {
  console.log(event)
}
</script>
```

### 禁用

禁用

```vue
<template>
<wd-input v-model="value" disabled />
</template>

<script lang="ts" setup>
</script>
```

### 只读

只读

```vue
<template>
<wd-input v-model="value" readonly />
</template>

<script lang="ts" setup>
</script>
```

### 清空按钮

清空按钮

```vue
<template>
<wd-input v-model="value" clearable @change="handleChange"/>
</template>

<script lang="ts" setup>
</script>
```

### 有值且聚焦时展示清空按钮

有值且聚焦时展示清空按钮

```vue
<template>
<wd-input v-model="value" clear-trigger="focus" clearable @change="handleChange"/>
</template>

<script lang="ts" setup>
</script>
```

### 点击清除按钮时不自动聚焦

点击清除按钮时不自动聚焦

```vue
<template>
<wd-input type="text" :focus-when-clear="false" v-model="value" clearable />
</template>

<script lang="ts" setup>
</script>
```

### 密码输入框

密码输入框

```vue
<template>
<wd-input v-model="value" clearable show-password @change="handleChange"/>
</template>

<script lang="ts" setup>
</script>
```

### 前后icon

前后icon

```vue
<template>
<wd-input
  v-model="value"
  prefix-icon="dong"
  suffix-icon="list"
  @change="handleChange"/>
</template>

<script lang="ts" setup>
</script>
```

### 限制字数输入

限制字数输入

```vue
<template>
<wd-input v-model="value" :maxlength="20" show-word-limit @change="handleChange"/>
</template>

<script lang="ts" setup>
</script>
```

### 设置label标题

设置label标题

```vue
<template>
<wd-input type="text" label="基本用法" v-model="value" placeholder="请输入..." />
</template>

<script lang="ts" setup>
</script>
```

### 必填样式

必填样式

```vue
<template>
<wd-input v-model="value" placeholder="请输入..." label="必填" required></wd-input>
</template>

<script lang="ts" setup>
</script>
```

### 输入框大小

输入框大小

```vue
<template>
<wd-input type="text" label="基本用法" size="large" v-model="value" placeholder="请输入..." />
</template>

<script lang="ts" setup>
</script>
```

### 错误状态

错误状态

```vue
<template>
<wd-input type="text" v-model="value" placeholder="请输入用户名" error />
</template>

<script lang="ts" setup>
</script>
```

### 垂直居中

垂直居中

```vue
<template>
<wd-input type="text" label="基本用法" v-model="value" center />
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名               | 说明                 | 最低版本 |
| ------------------ | -------------------- | -------- |
| custom-class       | 根节点样式           | -        |
| custom-input-class | input 外部自定义样式 | -        |
| custom-label-class | label 外部自定义样式 | -        |

