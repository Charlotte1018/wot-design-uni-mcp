## Link 组件示例

### basic



```vue
<template>
  <div>
    <fin-link href="https://element-plus.org" target="_blank">default</fin-link>
    <fin-link type="primary">primary</fin-link>
    <fin-link type="success">success</fin-link>
    <fin-link type="warning">warning</fin-link>
    <fin-link type="danger">danger</fin-link>
    <fin-link type="info">info</fin-link>
  </div>
</template>
<style scoped>
.fin-link {
  margin-right: 8px;
}
.fin-link .fin-icon--right.fin-icon {
  vertical-align: text-bottom;
}
</style>
```

### disabled



```vue
<template>
  <div>
    <fin-link disabled>default</fin-link>
    <fin-link type="primary" disabled>primary</fin-link>
    <fin-link type="success" disabled>success</fin-link>
    <fin-link type="warning" disabled>warning</fin-link>
    <fin-link type="danger" disabled>danger</fin-link>
    <fin-link type="info" disabled>info</fin-link>
  </div>
</template>
<style scoped>
.fin-link {
  margin-right: 8px;
}
.fin-link .fin-icon--right.fin-icon {
  vertical-align: text-bottom;
}
</style>
```

### underline



```vue
<template>
  <div>
    <fin-link :underline="false">Without Underline</fin-link>
    <fin-link>With Underline</fin-link>
  </div>
</template>
<style scoped>
.fin-link {
  margin-right: 8px;
}
.fin-link .fin-icon--right.fin-icon {
  vertical-align: text-bottom;
}
</style>
```

### with-icon



```vue
<template>
  <div>
    <fin-link :icon="Edit">Edit</fin-link>
    <fin-link>
      Check<fin-icon class="fin-icon--right"><Visible /></fin-icon>
    </fin-link>
  </div>
</template>

<script setup lang="ts">
import { Edit, Visible } from '@jdt/find-plus-icons-vue'
</script>

<style scoped>
.fin-link {
  margin-right: 8px;
}
</style>
```

