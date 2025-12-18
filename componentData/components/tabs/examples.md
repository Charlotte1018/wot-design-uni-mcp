## Tabs 组件示例

### basic

Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。

```vue
<template>
  <fin-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <fin-tab-pane label="User" name="first">User</fin-tab-pane>
    <fin-tab-pane label="Config" name="second">Config</fin-tab-pane>
    <fin-tab-pane label="Role" name="third">Role</fin-tab-pane>
    <fin-tab-pane label="Task" name="fourth">Task</fin-tab-pane>
  </fin-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from '@jdt/find-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style>
.demo-tabs > .fin-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
```

### card-style

只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。

```vue
<template>
  <fin-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <fin-tab-pane label="User" name="first">User</fin-tab-pane>
    <fin-tab-pane label="Config" name="second">Config</fin-tab-pane>
    <fin-tab-pane label="Role" name="third">Role</fin-tab-pane>
    <fin-tab-pane label="Task" name="fourth">Task</fin-tab-pane>
  </fin-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from '@jdt/find-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style>
.demo-tabs > .fin-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
```

### border-card

将 `type` 设置为 `border-card`。

```vue
<template>
  <fin-tabs type="border-card">
    <fin-tab-pane label="User">User</fin-tab-pane>
    <fin-tab-pane label="Config">Config</fin-tab-pane>
    <fin-tab-pane label="Role">Role</fin-tab-pane>
    <fin-tab-pane label="Task">Task</fin-tab-pane>
  </fin-tabs>
</template>
```

### tab-position

标签一共有四个方向的设置 `tabPosition="left|right|top|bottom"`

```vue
<template>
  <fin-radio-group v-model="tabPosition" style="margin-bottom: 30px">
    <fin-radio-button label="top">top</fin-radio-button>
    <fin-radio-button label="right">right</fin-radio-button>
    <fin-radio-button label="bottom">bottom</fin-radio-button>
    <fin-radio-button label="left">left</fin-radio-button>
  </fin-radio-group>

  <fin-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <fin-tab-pane label="User">User</fin-tab-pane>
    <fin-tab-pane label="Config">Config</fin-tab-pane>
    <fin-tab-pane label="Role">Role</fin-tab-pane>
    <fin-tab-pane label="Task">Task</fin-tab-pane>
  </fin-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const tabPosition = ref('left')
</script>
<style>
.demo-tabs > .fin-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.fin-tabs--right .fin-tabs__content,
.fin-tabs--left .fin-tabs__content {
  height: 100%;
}
</style>
```

### custom-tab



```vue
<template>
  <fin-tabs type="border-card" class="demo-tabs">
    <fin-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <fin-icon><Date /></fin-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </fin-tab-pane>
    <fin-tab-pane label="Config">Config</fin-tab-pane>
    <fin-tab-pane label="Role">Role</fin-tab-pane>
    <fin-tab-pane label="Task">Task</fin-tab-pane>
  </fin-tabs>
</template>

<script lang="ts" setup>
import { Date } from '@jdt/find-plus-icons-vue'
</script>
<style>
.demo-tabs > .fin-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .fin-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
```

### dynamic-tabs



```vue
<template>
  <fin-tabs
    v-model="editableTabsValue"
    type="card"
    editable
    class="demo-tabs"
    @edit="handleTabsEdit"
  >
    <fin-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </fin-tab-pane>
  </fin-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabPaneName } from '@jdt/find-plus'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
])

const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: 'remove' | 'add'
) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
</script>
<style>
.demo-tabs > .fin-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
```

### customized-add-button-icon



```vue
addIcon
<template>
  <fin-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    editable
    @edit="handleTabsEdit"
  >
    <template #addIcon>
      <fin-icon><Check /></fin-icon>
    </template>
    <fin-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </fin-tab-pane>
  </fin-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Check } from '@jdt/find-plus-icons-vue'
import type { TabPaneName } from '@jdt/find-plus'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
])

const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: 'remove' | 'add'
) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
</script>
<style>
.demo-tabs > .fin-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
```

### customized-trigger



```vue
<template>
  <div style="margin-bottom: 20px">
    <fin-button size="small" @click="addTab(editableTabsValue)">
      add tab
    </fin-button>
  </div>
  <fin-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
  >
    <fin-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </fin-tab-pane>
  </fin-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
])

const addTab = (targetName: string) => {
  const newTabName = `${++tabIndex}`
  editableTabs.value.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content',
  })
  editableTabsValue.value = newTabName
}
const removeTab = (targetName: string) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>
<style>
.demo-tabs > .fin-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
```

