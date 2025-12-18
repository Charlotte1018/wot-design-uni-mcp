## Breadcrumb 组件示例

### basic

在 `fin-breadcrumb` 中使用 `fin-breadcrumb-item` 标签表示从首页开始的每一级。 该组件接受一个 `String` 类型的参数 `separator`来作为分隔符。 默认值为 '/'。

```vue
<template>
  <fin-breadcrumb separator="/">
    <fin-breadcrumb-item :to="{ path: '/' }">homepage</fin-breadcrumb-item>
    <fin-breadcrumb-item
      ><a href="/">promotion management</a></fin-breadcrumb-item
    >
    <fin-breadcrumb-item>promotion list</fin-breadcrumb-item>
    <fin-breadcrumb-item>promotion detail</fin-breadcrumb-item>
  </fin-breadcrumb>
</template>
```

### icon

通过设置 `separator-class` 可使用相应的 `iconfont` 作为分隔符，注意这将使 `separator` 失效。

```vue
<template>
  <fin-breadcrumb :separator-icon="ArrowRight">
    <fin-breadcrumb-item :to="{ path: '/' }">homepage</fin-breadcrumb-item>
    <fin-breadcrumb-item>promotion management</fin-breadcrumb-item>
    <fin-breadcrumb-item>promotion list</fin-breadcrumb-item>
    <fin-breadcrumb-item>promotion detail</fin-breadcrumb-item>
  </fin-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@jdt/find-plus-icons-vue'
</script>
```

