## TooltipV2 组件示例

### basic-usage



```vue
<template>
  <fin-tooltip-v2 aria-label="content" placement="left">
    <template #trigger>
      <fin-button circle
        ><fin-icon><Plus /></fin-icon
      ></fin-button>
    </template>
    Basic tooltip
  </fin-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@jdt/find-plus-icons-vue'
</script>
```

### a11y



```vue
<template>
  <fin-tooltip-v2 :aria-label="title">
    <template #trigger>
      <fin-button
        ><fin-icon><Delete /></fin-icon
      ></fin-button>
    </template>
    {{ content }}
  </fin-tooltip-v2>
</template>

<script setup lang="ts">
import { Delete } from '@jdt/find-plus-icons-vue'
const content = 'Delete'
const title = 'Delete item'
</script>
```

### transition



```vue
<template>
  <!-- eslint-disable vue/require-toggle-inside-transition  -->
  <fin-tooltip-v2 aria-label="content" placement="top" content-class="scale-in">
    <template #trigger>
      <fin-button circle
        ><fin-icon><Plus /></fin-icon
      ></fin-button>
    </template>
    <div>content</div>
  </fin-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@jdt/find-plus-icons-vue'
</script>

<style>
@keyframes scale-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.fin-tooltip-v2__content.scale-in {
  animation: scale-in var(--fin-transition-duration) ease-out forwards;
}
</style>
```

### full-transition



```vue
<template>
  <fin-tooltip-v2 full-transition :transition-props="transitionProps">
    <template #trigger>
      <fin-button circle
        ><fin-icon><Plus /></fin-icon
      ></fin-button>
    </template>
    <div>content</div>
  </fin-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@jdt/find-plus-icons-vue'

const transitionProps = {
  name: 'fin-fade-in-linear',
}
</script>
```

### render-to-root



```vue
<template>
  <fin-tooltip-v2 aria-label="content" teleported to="body">
    <template #trigger>
      <fin-button>hover me</fin-button>
    </template>
    <div>I am attached to document.body</div>
  </fin-tooltip-v2>
</template>
```

### arrow



```vue
<template>
  <fin-tooltip-v2 aria-label="content" show-arrow always-on placement="top">
    <template #trigger>
      <fin-button circle
        ><fin-icon><Plus /></fin-icon
      ></fin-button>
    </template>
    Basic tooltip
  </fin-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@jdt/find-plus-icons-vue'
</script>
```

