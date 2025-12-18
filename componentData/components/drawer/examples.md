## Drawer 组件示例

### no-title

通过设置 `with-header` 属性为 **false** 来控制是否显示标题。 如果你的应用需要具备可访问性，请务必设置好 `title`。

```vue
<template>
  <fin-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </fin-button>

  <fin-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </fin-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>
```

### customization-content



```vue
<template>
  <fin-button text @click="table = true"
    >Open Drawer with nested table</fin-button
  >
  <fin-button text @click="dialog = true"
    >Open Drawer with nested form</fin-button
  >
  <fin-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="rtl"
    size="50%"
  >
    <fin-table :data="gridData">
      <fin-table-column property="date" label="Date" width="150" />
      <fin-table-column property="name" label="Name" width="200" />
      <fin-table-column property="address" label="Address" />
    </fin-table>
  </fin-drawer>

  <fin-drawer
    ref="drawerRef"
    v-model="dialog"
    title="I have a nested form inside!"
    :before-close="handleClose"
    direction="ltr"
    class="demo-drawer"
  >
    <div class="demo-drawer__content">
      <fin-form :model="form">
        <fin-form-item label="Name" :label-width="formLabelWidth">
          <fin-input v-model="form.name" autocomplete="off" />
        </fin-form-item>
        <fin-form-item label="Area" :label-width="formLabelWidth">
          <fin-select
            v-model="form.region"
            placeholder="Please select activity area"
          >
            <fin-option label="Area1" value="shanghai" />
            <fin-option label="Area2" value="beijing" />
          </fin-select>
        </fin-form-item>
      </fin-form>
      <div class="demo-drawer__footer">
        <fin-button @click="cancelForm">Cancel</fin-button>
        <fin-button type="primary" :loading="loading" @click="onClick">{{
          loading ? 'Submitting ...' : 'Submit'
        }}</fin-button>
      </div>
    </div>
  </fin-drawer>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { FinDrawer, FinMessageBox } from '@jdt/find-plus'

const formLabelWidth = '80px'
let timer

const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const gridData = [
  {
    date: '2016-05-02',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-04',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-01',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-03',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
]

const drawerRef = ref<InstanceType<typeof FinDrawer>>()
const onClick = () => {
  drawerRef.value!.close()
}

const handleClose = (done) => {
  if (loading.value) {
    return
  }
  FinMessageBox.confirm('Do you want to submit?')
    .then(() => {
      loading.value = true
      timer = setTimeout(() => {
        done()
        // 动画关闭需要一定的时间
        setTimeout(() => {
          loading.value = false
        }, 400)
      }, 2000)
    })
    .catch(() => {
      // catch error
    })
}

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}
</script>
```

### customization-header



```vue
<template>
  <fin-button @click="visible = true">
    Open Drawer with customized header
  </fin-button>
  <fin-drawer v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
      <fin-button type="danger" @click="close">
        <fin-icon class="fin-icon--left"><ErrorSolid /></fin-icon>
        Close
      </fin-button>
    </template>
    This is drawer content.
  </fin-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FinButton, FinDrawer } from '@jdt/find-plus'
import { ErrorSolid } from '@jdt/find-plus-icons-vue'

const visible = ref(false)
</script>
```

