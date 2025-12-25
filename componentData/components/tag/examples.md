## Tag 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-tag custom-class="space">标签</wd-tag>
<wd-tag custom-class="space" type="primary">标签</wd-tag>
<wd-tag custom-class="space" type="danger">标签</wd-tag>
<wd-tag custom-class="space" type="warning">标签</wd-tag>
<wd-tag custom-class="space" type="success">标签</wd-tag>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
:deep(.space) {
  margin: 0 10px 10px;
}
</style>
```

### 幽灵标签

幽灵标签

```vue
<template>
<wd-tag plain>标签</wd-tag>
<wd-tag type="primary" plain>标签</wd-tag>
<wd-tag type="danger" plain>标签</wd-tag>
<wd-tag type="warning" plain>标签</wd-tag>
<wd-tag type="success" plain>标签</wd-tag>
</template>

<script lang="ts" setup>
</script>
```

### 标记标签

标记标签

```vue
<template>
<wd-tag mark>标签</wd-tag>
<wd-tag type="primary" mark>标签</wd-tag>
<wd-tag type="danger" mark>标签</wd-tag>
<wd-tag type="warning" mark>标签</wd-tag>
<wd-tag type="success" mark>标签</wd-tag>
</template>

<script lang="ts" setup>
</script>
```

### 幽灵标记标签

幽灵标记标签

```vue
<template>
<wd-tag mark plain>标签</wd-tag>
<wd-tag type="primary" mark plain>标签</wd-tag>
<wd-tag type="danger" mark plain>标签</wd-tag>
<wd-tag type="warning" mark plain>标签</wd-tag>
<wd-tag type="success" mark plain>标签</wd-tag>
</template>

<script lang="ts" setup>
</script>
```

### 圆角标签

圆角标签

```vue
<template>
<wd-tag round>标签</wd-tag>
<wd-tag type="primary" round>标签</wd-tag>
<wd-tag type="danger" round>标签</wd-tag>
<wd-tag type="warning" round>标签</wd-tag>
<wd-tag type="success" round>标签</wd-tag>
</template>

<script lang="ts" setup>
</script>
```

### 设置图标

设置图标

```vue
<template>
<wd-tag custom-class="space" icon="clock" mark>标签</wd-tag>
<wd-tag custom-class="space" mark use-icon-slot>
  <text>插槽</text>
  <template #icon>
    <wd-icon name="clock" />
  </template>
</wd-tag>
</template>

<script lang="ts" setup>
</script>
```

### 自定义颜色

自定义颜色

```vue
<template>
<wd-tag color="#0083ff" bg-color="#d0e8ff">标签</wd-tag>
<wd-tag color="#FAA21E" bg-color="#FAA21E" plain>标签</wd-tag>
</template>

<script lang="ts" setup>
</script>
```

### 可关闭

可关闭

```vue
<template>
<wd-tag closable round type="primary">标签</wd-tag>
</template>

<script lang="ts" setup>
</script>
```

### 新增标签

新增标签

```vue
<template>
<wd-tag v-for="(tag, index) in tags" :key="index" custom-class="space" round closable @close="handleClose(index)">{{item}}</wd-tag>
<wd-tag custom-class="space" round dynamic @confirm="handleConfirm"></wd-tag>

<wd-tag custom-class="space" round dynamic @confirm="handleConfirm">
  <template #add>
    <wd-icon name="pin" size="12px"></wd-icon>
    <text style="margin-left: 4px">自定义</text>
  </template>
</wd-tag>
</template>

<script lang="ts" setup>
const tags = ref(['标签一', '标签二'])

function handleClose(order) {
  tags.value = tags.value.filter((value, index) => index !== order)
  console.log('close:index' + order)
}

function handleConfirm({ value }) {
  if (!value) return
  tags.value = [...tags.value, value]
}
</script>
```

### 事件

事件

```vue
<template>
<wd-tag v-for="(tag, index) in tags" :key="index" round closable @click="handleClick(index)" @close="handleClose(index)">{{tag.value}}</wd-tag>
</template>

<script lang="ts" setup>
const tags = ref([
  {
    plain: true,
    closable: true,
    type: 'primary',
    value: '标签一'
  }
])

function handleClick(index) {
  console.log('click:index' + index)
}
function handleClose(order) {
  tags.value = tags.value.filter((value, index) => index !== order)
  console.log('close:index' + order)
}
</script>
```

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

