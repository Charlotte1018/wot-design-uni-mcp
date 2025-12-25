## SortButton 组件示例

### 基本用法

使用

```vue
<template>
<wd-sort-button title="价格" v-model="value" @change="handleChange" />
</template>

<script lang="ts" setup>
const value = ref<number>(0)

function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 按钮重置

双箭头状态下(默认状态)通过设置

```vue
<template>
<wd-sort-button title="价格" allow-reset/>
</template>

<script lang="ts" setup>
</script>
```

### 优先切换为降序

设置

```vue
<template>
<wd-sort-button v-model="value" desc-first title="价格" />
</template>

<script lang="ts" setup>
</script>
```

### 取消展示下划线

当只有一个排序按钮时，应该不展示下划线，设置

```vue
<template>
<wd-sort-button v-model="value" :line="false" title="价格" />
</template>

<script lang="ts" setup>
</script>
```

### attributes

Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|-----|------|-----|-------|-------|--------|
| v-model | 选中的箭头方向：1 升序，0 重置状态，-1 降序。 | number | -1,0,1 | 0或-1 | - |
| title | 排序按钮展示的文案。 | string | - |	- | - |
| allow-reset | 展示双箭头时，允许手动重置按钮。 | boolean | - | false | - |
| desc-first | 优先切换为降序，不开启则默认优先切换为升序 | boolean | - | false | - |
| line | 展示下划线，当只有一个排序按钮时，应该不展示下划线 | boolean | - | true | - |

### events

Events

| 事件名称 | 说明 | 参数 | 最低版本 |
|---------|-----|-----|---------|
| change | 监听排序修改 | `{ value }` | - |

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

