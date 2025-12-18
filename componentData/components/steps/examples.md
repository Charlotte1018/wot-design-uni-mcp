## Steps 组件示例

### basic

设置 `active` 属性，接受一个 `Number`，表明步骤的 index，从 0 开始。 需要定宽的步骤条时，设置 `space` 属性即可，它接受 `Number`， 单位为 `px`， 如果不设置，则为自适应。 设置 `finish-status` 属性可以改变已经完成的步骤的状态。

```vue
<template>
  <fin-steps :active="active" finish-status="success">
    <fin-step title="Step 1" />
    <fin-step title="Step 2" />
    <fin-step title="Step 3" />
  </fin-steps>

  <fin-button style="margin-top: 12px" @click="next">Next step</fin-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>
```

### with-status

也可以使用 `title` 具名插槽，可以用 `slot` 的方式来取代属性的设置， 在本文档最后的列表中有所有的插槽可供参考。

```vue
<template>
  <fin-steps :space="200" :active="1" finish-status="success">
    <fin-step title="Done" />
    <fin-step title="Processing" />
    <fin-step title="Step 3" />
  </fin-steps>
</template>
```

### centered



```vue
<template>
  <fin-steps :active="2" align-center>
    <fin-step title="Step 1" description="Some description" />
    <fin-step title="Step 2" description="Some description" />
    <fin-step title="Step 3" description="Some description" />
    <fin-step title="Step 4" description="Some description" />
  </fin-steps>
</template>
```

### with-description



```vue
<template>
  <fin-steps :active="1">
    <fin-step title="Step 1" description="Some description" />
    <fin-step title="Step 2" description="Some description" />
    <fin-step title="Step 3" description="Some description" />
  </fin-steps>
</template>
```

### with-icon

通过 `icon` 属性来设置图标， 图标的类型可以参考 Icon 组件的文档， 除此以外，还能通过具名 `slot` 来使用自定义的图标。

```vue
<template>
  <fin-steps :active="1">
    <fin-step title="Step 1" :icon="Edit" />
    <fin-step title="Step 2" :icon="Upload" />
    <fin-step title="Step 3" :icon="Picture" />
  </fin-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, Upload } from '@jdt/find-plus-icons-vue'
</script>
```

### vertical

只需要在 `fin-steps` 元素中设置 `direction` 属性为 `vertical` 即可。

```vue
<template>
  <div style="height: 300px">
    <fin-steps direction="vertical" :active="1">
      <fin-step title="Step 1" />
      <fin-step title="Step 2" />
      <fin-step title="Step 3" />
    </fin-steps>
  </div>
</template>
```

### simple



```vue
<template>
  <fin-steps :space="200" :active="1" simple>
    <fin-step title="Step 1" :icon="Edit" />
    <fin-step title="Step 2" :icon="Upload" />
    <fin-step title="Step 3" :icon="Picture" />
  </fin-steps>

  <fin-steps
    :active="1"
    finish-status="success"
    simple
    style="margin-top: 20px"
  >
    <fin-step title="Step 1" />
    <fin-step title="Step 2" />
    <fin-step title="Step 3" />
  </fin-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, Upload } from '@jdt/find-plus-icons-vue'
</script>
```

### small



```vue
<template>
  <fin-steps small :active="1">
    <fin-step title="Step 1" description="Some description" />
    <fin-step title="Step 2" description="Some description" />
    <fin-step title="Step 3" description="Some description" />
  </fin-steps>
  <h3>垂直</h3>
  <fin-steps style="height: 300px" small :active="1" direction="vertical">
    <fin-step title="Step 1" description="Some description" />
    <fin-step title="Step 2" description="Some description" />
    <fin-step title="Step 3" description="Some description" />
  </fin-steps>
</template>
```

