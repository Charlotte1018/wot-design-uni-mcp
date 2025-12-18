## Dropdown 组件示例

### basic-usage

通过组件 `slot` 来设置下拉触发的元素以及需要通过具名 `slot` 为 `dropdown` 来设置下拉菜单。 默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。

```vue
<template>
  <fin-dropdown>
    <span class="fin-dropdown-link">
      Dropdown List
      <fin-icon class="fin-icon--right">
        <arrow-down />
      </fin-icon>
    </span>
    <template #dropdown>
      <fin-dropdown-menu>
        <fin-dropdown-item>Action 1</fin-dropdown-item>
        <fin-dropdown-item>Action 2</fin-dropdown-item>
        <fin-dropdown-item>Action 3</fin-dropdown-item>
        <fin-dropdown-item disabled>Action 4</fin-dropdown-item>
        <fin-dropdown-item divided>Action 5</fin-dropdown-item>
      </fin-dropdown-menu>
    </template>
  </fin-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@jdt/find-plus-icons-vue'
</script>
<style scoped>
.example-showcase .fin-dropdown-link {
  cursor: pointer;
  color: var(--fin-color-primary);
  display: flex;
  align-items: center;
}
</style>
```

### triggering-element

设置 `split-button` 属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为 `true` 即可。 如果你想要在第三和第四个选项之间添加一个分隔符，你只需要为第四个选项添加一个 `divider` 的 CSS class。

```vue
<template>
  <div class="flex flex-wrap items-center">
    <fin-dropdown>
      <fin-button type="primary">
        Dropdown List<fin-icon class="fin-icon--right"><arrow-down /></fin-icon>
      </fin-button>
      <template #dropdown>
        <fin-dropdown-menu>
          <fin-dropdown-item>Action 1</fin-dropdown-item>
          <fin-dropdown-item>Action 2</fin-dropdown-item>
          <fin-dropdown-item>Action 3</fin-dropdown-item>
          <fin-dropdown-item>Action 4</fin-dropdown-item>
          <fin-dropdown-item>Action 5</fin-dropdown-item>
        </fin-dropdown-menu>
      </template>
    </fin-dropdown>
    <fin-dropdown split-button type="primary" @click="handleClick">
      Dropdown List
      <template #dropdown>
        <fin-dropdown-menu>
          <fin-dropdown-item>Action 1</fin-dropdown-item>
          <fin-dropdown-item>Action 2</fin-dropdown-item>
          <fin-dropdown-item>Action 3</fin-dropdown-item>
          <fin-dropdown-item>Action 4</fin-dropdown-item>
          <fin-dropdown-item>Action 5</fin-dropdown-item>
        </fin-dropdown-menu>
      </template>
    </fin-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@jdt/find-plus-icons-vue'

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}
</script>
<style scoped>
.example-showcase .fin-dropdown + .fin-dropdown {
  margin-left: 15px;
}
.example-showcase .fin-dropdown-link {
  cursor: pointer;
  color: var(--fin-color-primary);
  display: flex;
  align-items: center;
}
</style>
```

### how-to-trigger

将 `trigger` 属性设置为 click 即可， 默认为 `hover`。

```vue
<template>
  <fin-row class="block-col-2">
    <fin-col :span="8">
      <span class="demonstration">hover to trigger</span>
      <fin-dropdown>
        <span class="fin-dropdown-link">
          Dropdown List<fin-icon class="fin-icon--right"
            ><arrow-down
          /></fin-icon>
        </span>
        <template #dropdown>
          <fin-dropdown-menu>
            <fin-dropdown-item :icon="Plus">Action 1</fin-dropdown-item>
            <fin-dropdown-item :icon="SuccessSolid">
              Action 2
            </fin-dropdown-item>
            <fin-dropdown-item :icon="Add">Action 3</fin-dropdown-item>
            <fin-dropdown-item :icon="Check">Action 4</fin-dropdown-item>
            <fin-dropdown-item :icon="Success">Action 5</fin-dropdown-item>
          </fin-dropdown-menu>
        </template>
      </fin-dropdown>
    </fin-col>
    <fin-col :span="8">
      <span class="demonstration">click to trigger</span>
      <fin-dropdown trigger="click">
        <span class="fin-dropdown-link">
          Dropdown List<fin-icon class="fin-icon--right"
            ><arrow-down
          /></fin-icon>
        </span>
        <template #dropdown>
          <fin-dropdown-menu>
            <fin-dropdown-item :icon="Plus">Action 1</fin-dropdown-item>
            <fin-dropdown-item :icon="SuccessSolid">
              Action 2
            </fin-dropdown-item>
            <fin-dropdown-item :icon="Add">Action 3</fin-dropdown-item>
            <fin-dropdown-item :icon="Check">Action 4</fin-dropdown-item>
            <fin-dropdown-item :icon="Success">Action 5</fin-dropdown-item>
          </fin-dropdown-menu>
        </template>
      </fin-dropdown>
    </fin-col>
    <fin-col :span="8">
      <span class="demonstration">right click to trigger</span>
      <fin-dropdown trigger="contextmenu">
        <span class="fin-dropdown-link">
          Dropdown List<fin-icon class="fin-icon--right"
            ><arrow-down
          /></fin-icon>
        </span>
        <template #dropdown>
          <fin-dropdown-menu>
            <fin-dropdown-item :icon="Plus">Action 1</fin-dropdown-item>
            <fin-dropdown-item :icon="SuccessSolid">
              Action 2
            </fin-dropdown-item>
            <fin-dropdown-item :icon="Add">Action 3</fin-dropdown-item>
            <fin-dropdown-item :icon="Check">Action 4</fin-dropdown-item>
            <fin-dropdown-item :icon="Success">Action 5</fin-dropdown-item>
          </fin-dropdown-menu>
        </template>
      </fin-dropdown>
    </fin-col>
  </fin-row>
</template>

<script lang="ts" setup>
import {
  Add,
  ArrowDown,
  Check,
  Plus,
  Success,
  SuccessSolid,
} from '@jdt/find-plus-icons-vue'
</script>

<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### menu-hiding-behavior

下拉菜单默认在点击菜单项后会被隐藏，将 hide-on-click 属性设置为 false 可以关闭此功能。

```vue
<template>
  <fin-dropdown :hide-on-click="false">
    <span class="fin-dropdown-link">
      Dropdown List<fin-icon class="fin-icon--right"><arrow-down /></fin-icon>
    </span>
    <template #dropdown>
      <fin-dropdown-menu>
        <fin-dropdown-item>Action 1</fin-dropdown-item>
        <fin-dropdown-item>Action 2</fin-dropdown-item>
        <fin-dropdown-item>Action 3</fin-dropdown-item>
        <fin-dropdown-item disabled>Action 4</fin-dropdown-item>
        <fin-dropdown-item divided>Action 5</fin-dropdown-item>
        <fin-dropdown-item divided>Action 6</fin-dropdown-item>
      </fin-dropdown-menu>
    </template>
  </fin-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@jdt/find-plus-icons-vue'
</script>
<style scoped>
.example-showcase .fin-dropdown + .fin-dropdown {
  margin-left: 15px;
}
.example-showcase .fin-dropdown-link {
  cursor: pointer;
  color: var(--fin-color-primary);
  display: flex;
  align-items: center;
}
</style>
```

### command-event



```vue
<template>
  <fin-dropdown @command="handleCommand">
    <span class="fin-dropdown-link">
      Dropdown List<fin-icon class="fin-icon--right"><arrow-down /></fin-icon>
    </span>
    <template #dropdown>
      <fin-dropdown-menu>
        <fin-dropdown-item command="a">Action 1</fin-dropdown-item>
        <fin-dropdown-item command="b">Action 2</fin-dropdown-item>
        <fin-dropdown-item command="c">Action 3</fin-dropdown-item>
        <fin-dropdown-item command="d" disabled>Action 4</fin-dropdown-item>
        <fin-dropdown-item command="e" divided>Action 5</fin-dropdown-item>
      </fin-dropdown-menu>
    </template>
  </fin-dropdown>
</template>

<script lang="ts" setup>
import { FinMessage } from '@jdt/find-plus'
import { ArrowDown } from '@jdt/find-plus-icons-vue'

const handleCommand = (command: string | number | object) => {
  FinMessage(`click on item ${command}`)
}
</script>
<style scoped>
.example-showcase .fin-dropdown-link {
  cursor: pointer;
  color: var(--fin-color-primary);
  display: flex;
  align-items: center;
}
</style>
```

### dropdown-methods



```vue
<template>
  <div style="font-size: 14px">
    <p>open(close) the Dropdown list2 will close(open) the Dropdown List1.</p>
  </div>
  <div style="margin: 15px">
    <fin-button @click="showClick">show</fin-button>
  </div>
  <fin-dropdown
    ref="dropdown1"
    trigger="contextmenu"
    style="margin-right: 30px"
  >
    <span class="fin-dropdown-link"> Dropdown List1 </span>
    <template #dropdown>
      <fin-dropdown-menu>
        <fin-dropdown-item>Action 1</fin-dropdown-item>
        <fin-dropdown-item>Action 2</fin-dropdown-item>
        <fin-dropdown-item>Action 3</fin-dropdown-item>
        <fin-dropdown-item disabled>Action 4</fin-dropdown-item>
        <fin-dropdown-item divided>Action 5</fin-dropdown-item>
      </fin-dropdown-menu>
    </template>
  </fin-dropdown>

  <fin-dropdown trigger="contextmenu" @visible-change="handleVisible2">
    <span class="fin-dropdown-link"> Dropdown List2 </span>
    <template #dropdown>
      <fin-dropdown-menu>
        <fin-dropdown-item>Action 1</fin-dropdown-item>
        <fin-dropdown-item>Action 2</fin-dropdown-item>
        <fin-dropdown-item>Action 3</fin-dropdown-item>
        <fin-dropdown-item disabled>Action 4</fin-dropdown-item>
        <fin-dropdown-item divided>Action 5</fin-dropdown-item>
      </fin-dropdown-menu>
    </template>
  </fin-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownInstance } from '@jdt/find-plus'

const dropdown1 = ref<DropdownInstance>()
function handleVisible2(visible: any) {
  if (!dropdown1.value) return
  if (visible) {
    dropdown1.value.handleClose()
  } else {
    dropdown1.value.handleOpen()
  }
}
function showClick() {
  if (!dropdown1.value) return
  dropdown1.value.handleOpen()
}
</script>
<style scoped>
.example-showcase .fin-dropdown-link {
  cursor: pointer;
  color: var(--fin-color-primary);
  display: flex;
  align-items: center;
}
</style>
```

### sizes

使用 `size` 属性配置尺寸，可选的尺寸大小有: `large`, `default` 或 `small`

```vue
<template>
  <fin-dropdown size="large" split-button type="primary">
    Large
    <template #dropdown>
      <fin-dropdown-menu>
        <fin-dropdown-item>Action 1</fin-dropdown-item>
        <fin-dropdown-item>Action 2</fin-dropdown-item>
        <fin-dropdown-item>Action 3</fin-dropdown-item>
        <fin-dropdown-item>Action 4</fin-dropdown-item>
      </fin-dropdown-menu>
    </template>
  </fin-dropdown>

  <fin-dropdown split-button type="primary">
    Default
    <template #dropdown>
      <fin-dropdown-menu>
        <fin-dropdown-item>Action 1</fin-dropdown-item>
        <fin-dropdown-item>Action 2</fin-dropdown-item>
        <fin-dropdown-item>Action 3</fin-dropdown-item>
        <fin-dropdown-item>Action 4</fin-dropdown-item>
      </fin-dropdown-menu>
    </template>
  </fin-dropdown>

  <fin-dropdown size="small" split-button type="primary">
    Small
    <template #dropdown>
      <fin-dropdown-menu>
        <fin-dropdown-item>Action 1</fin-dropdown-item>
        <fin-dropdown-item>Action 2</fin-dropdown-item>
        <fin-dropdown-item>Action 3</fin-dropdown-item>
        <fin-dropdown-item>Action 4</fin-dropdown-item>
      </fin-dropdown-menu>
    </template>
  </fin-dropdown>
</template>
<style scoped>
.example-showcase .fin-dropdown + .fin-dropdown {
  margin-left: 15px;
}
</style>
```

