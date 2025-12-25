## Sidebar 组件示例

### 基础用法

基础用法

```vue
<template>
<wd-sidebar v-model="active">
  <wd-sidebar-item :value="0" label="标签名称" />
  <wd-sidebar-item :value="1" label="标签名称" />
  <wd-sidebar-item :value="2" label="标签名称" />
</wd-sidebar>
</template>

<script lang="ts" setup>
const active = ref(0)
</script>
```

### 徽标提示

徽标提示

```vue
<template>
<wd-sidebar v-model="active">
  <wd-sidebar-item :value="0" label="标签名称" is-dot />
  <wd-sidebar-item :value="1" label="标签名称" badge="5" />
  <wd-sidebar-item :value="2" label="标签名称" />
</wd-sidebar>
</template>

<script lang="ts" setup>
</script>
```

### 禁用选项

禁用选项

```vue
<template>
<wd-sidebar v-model="active">
  <wd-sidebar-item :value="0" label="标签名称" />
  <wd-sidebar-item :value="1" label="标签名称" disabled />
  <wd-sidebar-item :value="2" label="标签名称" />
</wd-sidebar>
</template>

<script lang="ts" setup>
</script>
```

### 监听切换事件

监听切换事件

```vue
<template>
<wd-sidebar v-model="active" @change="handleChange">
  <wd-sidebar-item :value="0" label="标签名称 1" />
  <wd-sidebar-item :value="1" label="标签名称 2" />
  <wd-sidebar-item :value="2" label="标签名称 3" />
</wd-sidebar>
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'

const toast = useToast()
const active = ref<number>(1)

function handleChange({ value, label }) {
  toast.show(`当前标签名 ${label}`)
}
</script>
```

### 异步切换

异步切换

```vue
<template>
<wd-sidebar v-model="active" :before-change="beforeChange">
  <wd-sidebar-item :value="0" label="标签名称" />
  <wd-sidebar-item :value="1" label="标签名称" disabled />
  <wd-sidebar-item :value="2" label="标签名称" />
</wd-sidebar>
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'
import type { SidebarBeforeChange } from '@/uni_modules/wot-design-uni/components/wd-sidebar/types'
import { ref } from 'vue'
const { loading: showLoading, close: closeLoading } = useToast()

const toast = useToast()
const active = ref<number>(1)

const beforeChange: SidebarBeforeChange = ({ value, resolve }) => {
  showLoading('切换中')
  setTimeout(() => {
    closeLoading()
    resolve(true)
  }, 2000)
}
</script>
```

### 锚点用法示例

sidebar 组件的锚点用法可以帮助用户在长页面上快速导航到特定的部分。

```vue
<template>



</template>

<script lang="ts" setup>
</script>
```

### 切换页面用法示例

sidebar 组件在每次切换激活项时，跳转到指定的页面，且无法通过滚动导航到下一个 sidebar 项。

```vue
<template>



</template>

<script lang="ts" setup>
</script>
```

### 自定义图标用法示例

自定义图标用法示例

```vue
<template>



</template>

<script lang="ts" setup>
</script>
```

### attributes

Attributes

| 参数               | 说明                                                                                                                                  | 类型             | 可选值 | 默认值 | 最低版本         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------ | ------ | ---------------- |
| modelValue / v-model | 当前导航项的索引                                                                                                                      | string / number | -      | 0      | 0.1.49           |
| before-change      | 切换导航项前钩子，可以在切换标签前执行特定的逻辑，接收 { value, resolve } 参数，通过 resolve 继续执行，resolve 接收 1 个 boolean 参数 | function         | -      | -      | 1.4.0 |

### events

Events

| 事件名称 | 说明           | 参数                                       | 最低版本 |
| -------- | -------------- | ------------------------------------------ | -------- |
| change   | 选项切换时触发 | `(value: number \| string, label: string)` | 0.1.49   |

### slots

Slots

| name    | 说明       | 参数 | 最低版本 |
| ------- | ---------- | ---- | -------- |
| default | 自定义展示 | -    | 0.1.49   |

### 外部样式类

外部样式类

| 类名        | 说明         | 最低版本 |
| ----------- | ------------ | -------- |
| customStyle | 自定义样式   | 0.1.49   |
| customClass | 自定义样式类 | 0.1.49   |

### sidebaritem-attributes

SidebarItem Attributes

| 参数        | 说明                                                                                     | 类型                       | 可选值 | 默认值 | 最低版本 |
| ----------- | ---------------------------------------------------------------------------------------- | -------------------------- | ------ | ------ | -------- |
| label       | 当前选项标题                                                                             | string                     | -      | -      | 0.1.49   |
| value       | 当前选项的值，唯一标识                                                                   | `number / string`         | -      | -      | 0.1.49   |
| icon        | 图标                                                                                     | string                     | -      | -      | 0.1.49   |
| badge       | 徽标属性，徽标显示值                                                                     | `number / string / null` | -      | -      | 0.1.49   |
| isDot       | 徽标属性，是否点状徽标                                                                   | boolean                    | -      | false  | 0.1.49   |
| max         | 徽标属性，徽标最大值                                                                     | number                     | -      | 99     | 0.1.49   |
| disabled    | 是否禁用                                                                                 | boolean                    | -      | false  | 0.1.49   |
| badge-props | 自定义徽标的属性，传入的对象会被透传给 [Badge 组件的 props](/component/badge#attributes) | BadgeProps                 | -      | -      | 0.1.50   |

### sidebaritem-slots

SidebarItem Slots

| name | 说明       | 参数 | 最低版本 |
| ---- | ---------- | ---- | -------- |
| icon | 自定义图标 | -    | 0.1.49   |

### SidebarItem外部样式类

SidebarItem 外部样式类

| 类名        | 说明         | 最低版本 |
| ----------- | ------------ | -------- |
| customStyle | 自定义样式   | 0.1.49   |
| customClass | 自定义样式类 | 0.1.49   |

