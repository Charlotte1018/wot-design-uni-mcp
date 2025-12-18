## Menu 组件示例

### basic

导航菜单默认为垂直模式，通过将 mode 属性设置为 horizontal 来使导航菜单变更为水平模式。 另外，在菜单中通过 sub-menu 组件可以生成二级菜单。 Menu 还提供了`background-color`、`text-color`和`active-text-color`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

```vue
<template>
  <fin-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <fin-menu-item index="1">Processing Center</fin-menu-item>
    <fin-sub-menu index="2">
      <template #title>Workspace</template>
      <fin-menu-item index="2-1">item one</fin-menu-item>
      <fin-menu-item index="2-2">item two</fin-menu-item>
      <fin-menu-item index="2-3">item three</fin-menu-item>
      <fin-sub-menu index="2-4">
        <template #title>item four</template>
        <fin-menu-item index="2-4-1">item one</fin-menu-item>
        <fin-menu-item index="2-4-2">item two</fin-menu-item>
        <fin-menu-item index="2-4-3">item three</fin-menu-item>
      </fin-sub-menu>
    </fin-sub-menu>
    <fin-menu-item index="3" disabled>Info</fin-menu-item>
    <fin-menu-item index="4">Orders</fin-menu-item>
  </fin-menu>
  <div class="h-6" />
  <fin-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <fin-menu-item index="1">Processing Center</fin-menu-item>
    <fin-sub-menu index="2">
      <template #title>Workspace</template>
      <fin-menu-item index="2-1">item one</fin-menu-item>
      <fin-menu-item index="2-2">item two</fin-menu-item>
      <fin-menu-item index="2-3">item three</fin-menu-item>
      <fin-sub-menu index="2-4">
        <template #title>item four</template>
        <fin-menu-item index="2-4-1">item one</fin-menu-item>
        <fin-menu-item index="2-4-2">item two</fin-menu-item>
        <fin-menu-item index="2-4-3">item three</fin-menu-item>
      </fin-sub-menu>
    </fin-sub-menu>
    <fin-menu-item index="3" disabled>Info</fin-menu-item>
    <fin-menu-item index="4">Orders</fin-menu-item>
  </fin-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
```

### left-and-right

您可以将菜单项放置在左边或右边。

```vue
<template>
  <fin-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <fin-menu-item index="0">
      <img
        style="width: 100px"
        src="/images/find-plus-logo.png"
        alt="Find logo"
      />
    </fin-menu-item>
    <div class="flex-grow" />
    <fin-menu-item index="1">Processing Center</fin-menu-item>
    <fin-sub-menu index="2">
      <template #title>Workspace</template>
      <fin-menu-item index="2-1">item one</fin-menu-item>
      <fin-menu-item index="2-2">item two</fin-menu-item>
      <fin-menu-item index="2-3">item three</fin-menu-item>
      <fin-sub-menu index="2-4">
        <template #title>item four</template>
        <fin-menu-item index="2-4-1">item one</fin-menu-item>
        <fin-menu-item index="2-4-2">item two</fin-menu-item>
        <fin-menu-item index="2-4-3">item three</fin-menu-item>
      </fin-sub-menu>
    </fin-sub-menu>
  </fin-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
```

### vertical

通过 fin-menu-item-group 组件可以实现菜单进行分组，分组名可以通过 title 属性直接设定，也可以通过具名 slot 来设定。

```vue
<template>
  <fin-row class="tac">
    <fin-col :span="12">
      <h5 class="mb-2">Default colors</h5>
      <fin-menu
        default-active="2"
        class="fin-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <fin-sub-menu index="1">
          <template #title>
            <fin-icon><location /></fin-icon>
            <span>Navigator One</span>
          </template>
          <fin-menu-item-group title="Group One">
            <fin-menu-item index="1-1">item one</fin-menu-item>
            <fin-menu-item index="1-2">item two</fin-menu-item>
          </fin-menu-item-group>
          <fin-menu-item-group title="Group Two">
            <fin-menu-item index="1-3">item three</fin-menu-item>
          </fin-menu-item-group>
          <fin-sub-menu index="1-4">
            <template #title>item four</template>
            <fin-menu-item index="1-4-1">item one</fin-menu-item>
          </fin-sub-menu>
        </fin-sub-menu>
        <fin-menu-item index="2">
          <fin-icon><icon-menu /></fin-icon>
          <span>Navigator Two</span>
        </fin-menu-item>
        <fin-menu-item index="3" disabled>
          <fin-icon><document /></fin-icon>
          <span>Navigator Three</span>
        </fin-menu-item>
        <fin-menu-item index="4">
          <fin-icon><setting /></fin-icon>
          <span>Navigator Four</span>
        </fin-menu-item>
      </fin-menu>
    </fin-col>
    <fin-col :span="12">
      <h5 class="mb-2">Custom colors</h5>
      <fin-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="fin-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <fin-sub-menu index="1">
          <template #title>
            <fin-icon><location /></fin-icon>
            <span>Navigator One</span>
          </template>
          <fin-menu-item-group title="Group One">
            <fin-menu-item index="1-1">item one</fin-menu-item>
            <fin-menu-item index="1-2">item two</fin-menu-item>
          </fin-menu-item-group>
          <fin-menu-item-group title="Group Two">
            <fin-menu-item index="1-3">item three</fin-menu-item>
          </fin-menu-item-group>
          <fin-sub-menu index="1-4">
            <template #title>item four</template>
            <fin-menu-item index="1-4-1">item one</fin-menu-item>
          </fin-sub-menu>
        </fin-sub-menu>
        <fin-menu-item index="2">
          <fin-icon><icon-menu /></fin-icon>
          <span>Navigator Two</span>
        </fin-menu-item>
        <fin-menu-item index="3" disabled>
          <fin-icon><document /></fin-icon>
          <span>Navigator Three</span>
        </fin-menu-item>
        <fin-menu-item index="4">
          <fin-icon><setting /></fin-icon>
          <span>Navigator Four</span>
        </fin-menu-item>
      </fin-menu>
    </fin-col>
  </fin-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@jdt/find-plus-icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
```

### collapse



```vue
<template>
  <fin-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <fin-radio-button :label="false">expand</fin-radio-button>
    <fin-radio-button :label="true">collapse</fin-radio-button>
  </fin-radio-group>
  <fin-menu
    default-active="2"
    class="fin-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <fin-sub-menu index="1">
      <template #title>
        <fin-icon><location /></fin-icon>
        <span>Navigator One</span>
      </template>
      <fin-menu-item-group>
        <template #title><span>Group One</span></template>
        <fin-menu-item index="1-1">item one</fin-menu-item>
        <fin-menu-item index="1-2">item two</fin-menu-item>
      </fin-menu-item-group>
      <fin-menu-item-group title="Group Two">
        <fin-menu-item index="1-3">item three</fin-menu-item>
      </fin-menu-item-group>
      <fin-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <fin-menu-item index="1-4-1">item one</fin-menu-item>
      </fin-sub-menu>
    </fin-sub-menu>
    <fin-menu-item index="2">
      <fin-icon><icon-menu /></fin-icon>
      <template #title>Navigator Two</template>
    </fin-menu-item>
    <fin-menu-item index="3" disabled>
      <fin-icon><document /></fin-icon>
      <template #title>Navigator Three</template>
    </fin-menu-item>
    <fin-menu-item index="4">
      <fin-icon><setting /></fin-icon>
      <template #title>Navigator Four</template>
    </fin-menu-item>
  </fin-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@jdt/find-plus-icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.fin-menu-vertical-demo:not(.fin-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
```

