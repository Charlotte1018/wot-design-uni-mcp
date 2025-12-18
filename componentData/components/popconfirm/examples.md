## Popconfirm 组件示例

### basic-usage

在 Popconfirm 中，只有 `title` 属性可用，`content` 属性会被忽略。

```vue
<template>
  <fin-popconfirm title="Are you sure to delete this?">
    <template #reference>
      <fin-button>Delete</fin-button>
    </template>
  </fin-popconfirm>
</template>
```

### customize



```vue
<template>
  <fin-popconfirm
    width="220"
    confirm-button-text="OK"
    cancel-button-text="No, Thanks"
    :icon="InfoSolid"
    icon-color="#626AEF"
    title="Are you sure to delete this?"
  >
    <template #reference>
      <fin-button>Delete</fin-button>
    </template>
  </fin-popconfirm>
</template>

<script setup lang="ts">
import { InfoSolid } from '@jdt/find-plus-icons-vue'
</script>
```

### trigger-event



```vue
<template>
  <fin-popconfirm
    confirm-button-text="Yes"
    cancel-button-text="No"
    :icon="InfoSolid"
    icon-color="#626AEF"
    title="Are you sure to delete this?"
    @confirm="confirmEvent"
    @cancel="cancelEvent"
  >
    <template #reference>
      <fin-button>Delete</fin-button>
    </template>
  </fin-popconfirm>
</template>

<script setup lang="ts">
import { InfoSolid } from '@jdt/find-plus-icons-vue'

const confirmEvent = () => {
  console.log('confirm!')
}
const cancelEvent = () => {
  console.log('cancel!')
}
</script>
```

