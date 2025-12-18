## Badge 组件示例

### basic

数量值可接受 Number 或 String。

```vue
<template>
  <fin-badge :value="12" class="item">
    <fin-button>comments</fin-button>
  </fin-badge>
  <fin-badge :value="3" class="item">
    <fin-button>replies</fin-button>
  </fin-badge>
  <fin-badge :value="1" class="item" type="primary">
    <fin-button>comments</fin-button>
  </fin-badge>
  <fin-badge :value="2" class="item" type="warning">
    <fin-button>replies</fin-button>
  </fin-badge>

  <fin-dropdown trigger="click">
    <span class="fin-dropdown-link">
      Click Me
      <fin-icon class="fin-icon--right"><BottomSolid /></fin-icon>
    </span>
    <template #dropdown>
      <fin-dropdown-menu>
        <fin-dropdown-item class="clearfix">
          comments
          <fin-badge class="mark" :value="12" />
        </fin-dropdown-item>
        <fin-dropdown-item class="clearfix">
          replies
          <fin-badge class="mark" :value="3" />
        </fin-dropdown-item>
      </fin-dropdown-menu>
    </template>
  </fin-dropdown>
</template>

<script lang="ts" setup>
import { BottomSolid } from '@jdt/find-plus-icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

.fin-dropdown {
  margin-top: 1.1rem;
}
</style>
```

### customize

当 value 是 String 时，可以显示自定义文字。

```vue
<template>
  <fin-badge value="new" class="item">
    <fin-button>comments</fin-button>
  </fin-badge>
  <fin-badge value="hot" class="item">
    <fin-button>replies</fin-button>
  </fin-badge>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```

### dot

使用 `is-dot` 属性。 是个布尔值。

```vue
<template>
  <fin-badge is-dot class="item">query</fin-badge>
  <fin-badge is-dot class="item">
    <fin-button class="share-button" :icon="Relation" type="primary" />
  </fin-badge>
</template>

<script lang="ts" setup>
import { Relation } from '@jdt/find-plus-icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```

