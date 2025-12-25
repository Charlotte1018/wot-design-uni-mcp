## Textarea 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-textarea v-model="value" placeholder="请填写评价" />
</template>

<script lang="ts" setup>
const value = ref<string>('')
</script>
```

### 禁用

禁用

```vue
<template>
<wd-textarea v-model="value" disabled></wd-textarea>
</template>

<script lang="ts" setup>
</script>
```

### 只读

只读

```vue
<template>
<wd-textarea v-model="value" readonly></wd-textarea>
</template>

<script lang="ts" setup>
</script>
```

### 清空按钮

清空按钮

```vue
<template>
<wd-textarea v-model="value" :maxlength="120" clearable show-word-limit />
</template>

<script lang="ts" setup>
</script>
```

### 有值且聚焦时展示清空按钮

有值且聚焦时展示清空按钮

```vue
<template>
<wd-textarea clear-trigger="focus" v-model="value14" :maxlength="120" clearable show-word-limit />
</template>

<script lang="ts" setup>
</script>
```

### 点击清除按钮时不自动聚焦

点击清除按钮时不自动聚焦

```vue
<template>
<wd-textarea v-model="value" :focus-when-clear="false" :maxlength="120" clearable show-word-limit />
</template>

<script lang="ts" setup>
</script>
```

### 高度自适应

高度自适应

```vue
<template>
<wd-textarea v-model="value" auto-height />
</template>

<script lang="ts" setup>
</script>
```

### 前置 icon

前置 icon

```vue
<template>
<wd-textarea v-model="value" prefix-icon="dong"></wd-textarea>
</template>

<script lang="ts" setup>
</script>
```

### 设置 label 标题

设置 label 标题

```vue
<template>
<wd-cell-group border>
  <wd-textarea label="基本用法" clearable v-model="value" placeholder="请输入..." />
</wd-cell-group>
</template>

<script lang="ts" setup>
</script>
```

### 必填样式

必填样式

```vue
<template>
<wd-textarea v-model="value" placeholder="请输入..." label="必填" required></wd-textarea>
</template>

<script lang="ts" setup>
</script>
```

### 输入框大小

输入框大小

```vue
<template>
<wd-textarea label="基本用法" size="large" v-model="value" placeholder="请输入..." />
</template>

<script lang="ts" setup>
</script>
```

### 错误状态

错误状态

```vue
<template>
<wd-textarea v-model="value" placeholder="请输入用户名" error />
</template>

<script lang="ts" setup>
</script>
```

### 垂直居中

垂直居中

```vue
<template>
<wd-textarea label="基本用法" v-model="value" center />
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名                            | 说明                        | 最低版本 |
| ------------------------------- | --------------------------- | -------- |
| custom-class                    | 根节点样式                  | -        |
| custom-textarea-container-class | textarea 容器外部自定义样式 | -        |
| custom-textarea-class           | textarea 外部自定义样式     | -        |

