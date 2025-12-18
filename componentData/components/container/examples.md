## Container 组件示例

### layout-hm



```vue
<template>
  <div class="common-layout">
    <fin-container>
      <fin-header>Header</fin-header>
      <fin-main>Main</fin-main>
    </fin-container>
  </div>
</template>
```

### layout-hmf



```vue
<template>
  <div class="common-layout">
    <fin-container>
      <fin-header>Header</fin-header>
      <fin-main>Main</fin-main>
      <fin-footer>Footer</fin-footer>
    </fin-container>
  </div>
</template>
```

### layout-am



```vue
<template>
  <div class="common-layout">
    <fin-container>
      <fin-aside width="200px">Aside</fin-aside>
      <fin-main>Main</fin-main>
    </fin-container>
  </div>
</template>
```

### layout-ham



```vue
<template>
  <div class="common-layout">
    <fin-container>
      <fin-header>Header</fin-header>
      <fin-container>
        <fin-aside width="200px">Aside</fin-aside>
        <fin-main>Main</fin-main>
      </fin-container>
    </fin-container>
  </div>
</template>
```

### layout-hamf



```vue
<template>
  <div class="common-layout">
    <fin-container>
      <fin-header>Header</fin-header>
      <fin-container>
        <fin-aside width="200px">Aside</fin-aside>
        <fin-container>
          <fin-main>Main</fin-main>
          <fin-footer>Footer</fin-footer>
        </fin-container>
      </fin-container>
    </fin-container>
  </div>
</template>
```

### layout-ahm



```vue
<template>
  <div class="common-layout">
    <fin-container>
      <fin-aside width="200px">Aside</fin-aside>
      <fin-container>
        <fin-header>Header</fin-header>
        <fin-main>Main</fin-main>
      </fin-container>
    </fin-container>
  </div>
</template>
```

### layout-ahmf



```vue
<template>
  <div class="common-layout">
    <fin-container>
      <fin-aside width="200px">Aside</fin-aside>
      <fin-container>
        <fin-header>Header</fin-header>
        <fin-main>Main</fin-main>
        <fin-footer>Footer</fin-footer>
      </fin-container>
    </fin-container>
  </div>
</template>
```

### example



```vue
<template>
  <fin-container class="layout-container-demo" style="height: 500px">
    <fin-aside width="200px">
      <fin-scrollbar>
        <fin-menu :default-openeds="['1', '3']">
          <fin-sub-menu index="1">
            <template #title>
              <fin-icon><message /></fin-icon>Navigator One
            </template>
            <fin-menu-item-group>
              <template #title>Group 1</template>
              <fin-menu-item index="1-1">Option 1</fin-menu-item>
              <fin-menu-item index="1-2">Option 2</fin-menu-item>
            </fin-menu-item-group>
            <fin-menu-item-group title="Group 2">
              <fin-menu-item index="1-3">Option 3</fin-menu-item>
            </fin-menu-item-group>
            <fin-sub-menu index="1-4">
              <template #title>Option4</template>
              <fin-menu-item index="1-4-1">Option 4-1</fin-menu-item>
            </fin-sub-menu>
          </fin-sub-menu>
          <fin-sub-menu index="2">
            <template #title>
              <fin-icon><icon-menu /></fin-icon>Navigator Two
            </template>
            <fin-menu-item-group>
              <template #title>Group 1</template>
              <fin-menu-item index="2-1">Option 1</fin-menu-item>
              <fin-menu-item index="2-2">Option 2</fin-menu-item>
            </fin-menu-item-group>
            <fin-menu-item-group title="Group 2">
              <fin-menu-item index="2-3">Option 3</fin-menu-item>
            </fin-menu-item-group>
            <fin-sub-menu index="2-4">
              <template #title>Option 4</template>
              <fin-menu-item index="2-4-1">Option 4-1</fin-menu-item>
            </fin-sub-menu>
          </fin-sub-menu>
          <fin-sub-menu index="3">
            <template #title>
              <fin-icon><setting /></fin-icon>Navigator Three
            </template>
            <fin-menu-item-group>
              <template #title>Group 1</template>
              <fin-menu-item index="3-1">Option 1</fin-menu-item>
              <fin-menu-item index="3-2">Option 2</fin-menu-item>
            </fin-menu-item-group>
            <fin-menu-item-group title="Group 2">
              <fin-menu-item index="3-3">Option 3</fin-menu-item>
            </fin-menu-item-group>
            <fin-sub-menu index="3-4">
              <template #title>Option 4</template>
              <fin-menu-item index="3-4-1">Option 4-1</fin-menu-item>
            </fin-sub-menu>
          </fin-sub-menu>
        </fin-menu>
      </fin-scrollbar>
    </fin-aside>

    <fin-container>
      <fin-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <fin-dropdown>
            <fin-icon style="margin-right: 8px; margin-top: 1px"
              ><setting
            /></fin-icon>
            <template #dropdown>
              <fin-dropdown-menu>
                <fin-dropdown-item>View</fin-dropdown-item>
                <fin-dropdown-item>Add</fin-dropdown-item>
                <fin-dropdown-item>Delete</fin-dropdown-item>
              </fin-dropdown-menu>
            </template>
          </fin-dropdown>
          <span>Tom</span>
        </div>
      </fin-header>

      <fin-main>
        <fin-scrollbar>
          <fin-table :data="tableData">
            <fin-table-column prop="date" label="Date" width="140" />
            <fin-table-column prop="name" label="Name" width="120" />
            <fin-table-column prop="address" label="Address" />
          </fin-table>
        </fin-scrollbar>
      </fin-main>
    </fin-container>
  </fin-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@jdt/find-plus-icons-vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>
.layout-container-demo .fin-header {
  position: relative;
  background-color: var(--fin-color-primary-light-7);
  color: var(--fin-text-color-primary);
}
.layout-container-demo .fin-aside {
  color: var(--fin-text-color-primary);
  background: var(--fin-color-primary-light-8);
}
.layout-container-demo .fin-menu {
  border-right: none;
}
.layout-container-demo .fin-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
```

