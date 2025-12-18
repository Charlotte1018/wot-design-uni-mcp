## Popover 组件示例

### basic-usage

`trigger` 属性被用来决定 popover 的触发方式，支持的触发方式： `hover`、`click`、`focus` 或 `contextmenu`。 如果你想手动控制它，可以设置 `:visible` 属性。

```vue
<template>
  <fin-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <fin-button class="m-2">Hover to activate</fin-button>
    </template>
  </fin-popover>

  <fin-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <fin-button class="m-2">Click to activate</fin-button>
    </template>
  </fin-popover>

  <fin-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <fin-button class="m-2">Focus to activate</fin-button>
    </template>
  </fin-popover>

  <fin-popover
    ref="popover"
    title="Title"
    :width="200"
    trigger="contextmenu"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <fin-button class="m-2">contextmenu to activate</fin-button>
    </template>
  </fin-popover>

  <fin-popover
    :visible="visible"
    placement="bottom"
    title="Title"
    :width="200"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <fin-button class="m-2" @click="visible = !visible"
        >Manual to activate</fin-button
      >
    </template>
  </fin-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<style scoped>
.fin-button + .fin-button {
  margin-left: 8px;
}
</style>
```

### nested-information

利用插槽取代 `content` 属性

```vue
<template>
  <div style="display: flex; align-items: center">
    <fin-popover placement="right" :width="400" trigger="click">
      <template #reference>
        <fin-button style="margin-right: 16px">Click to activate</fin-button>
      </template>
      <fin-table :data="gridData">
        <fin-table-column width="150" property="date" label="date" />
        <fin-table-column width="100" property="name" label="name" />
        <fin-table-column width="300" property="address" label="address" />
      </fin-table>
    </fin-popover>

    <fin-popover
      :width="300"
      popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
    >
      <template #reference>
        <fin-avatar
          src="https://avatars.githubusercontent.com/u/72015883?v=4"
        />
      </template>
      <template #default>
        <div
          class="demo-rich-conent"
          style="display: flex; gap: 16px; flex-direction: column"
        >
          <fin-avatar
            :size="60"
            src="https://avatars.githubusercontent.com/u/72015883?v=4"
            style="margin-bottom: 8px"
          />
          <div>
            <p
              class="demo-rich-content__name"
              style="margin: 0; font-weight: 500"
            >
              Find Plus
            </p>
            <p
              class="demo-rich-content__mention"
              style="margin: 0; font-size: 14px; color: var(--fin-color-info)"
            >
              Find Plus
            </p>
          </div>

          <p class="demo-rich-content__desc" style="margin: 0">
            Find Plus ed component library for developers, designers and product
            managers
          </p>
        </div>
      </template>
    </fin-popover>
  </div>
</template>

<script lang="ts" setup>
const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]
</script>
```

### nested-operation



```vue
<template>
  <fin-popover :visible="visible" placement="top" :width="160">
    <p>确定关闭弹框吗？</p>
    <div style="text-align: right; margin: 0">
      <fin-button size="small" text @click="visible = false">取消</fin-button>
      <fin-button size="small" type="primary" @click="visible = false"
        >确定</fin-button
      >
    </div>
    <template #reference>
      <fin-button @click="visible = true">Delete</fin-button>
    </template>
  </fin-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
```

### directive-usage



```vue
<template>
  <fin-button v-popover="popoverRef" v-click-outside="onClickOutside"
    >Click me</fin-button
  >

  <fin-popover
    ref="popoverRef"
    trigger="click"
    title="With title"
    virtual-triggering
    persistent
  >
    <span> Some content </span>
  </fin-popover>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from '@jdt/find-plus'
const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}
</script>
```

