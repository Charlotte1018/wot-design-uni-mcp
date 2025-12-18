## Dialog 组件示例

### basic-usage

需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。 Dialog 分为两个部分：`body` 和 `footer`，`footer` 需要具名为 `footer` 的 `slot`。 `title` 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 `before-close` 的用法。

```vue
<template>
  <fin-button text @click="dialogVisible = true">
    click to open the Dialog
  </fin-button>

  <fin-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <fin-button @click="dialogVisible = false">Cancel</fin-button>
        <fin-button type="primary" @click="dialogVisible = false">
          Confirm
        </fin-button>
      </span>
    </template>
  </fin-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FinMessageBox } from '@jdt/find-plus'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  FinMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
```

### customization-content



```vue
<template>
  <fin-button text @click="dialogTableVisible = true">
    open a Table nested Dialog
  </fin-button>

  <fin-dialog v-model="dialogTableVisible" title="Shipping address">
    <fin-table :data="gridData">
      <fin-table-column property="date" label="Date" width="150" />
      <fin-table-column property="name" label="Name" width="200" />
      <fin-table-column property="address" label="Address" />
    </fin-table>
  </fin-dialog>

  <!-- Form -->
  <fin-button text @click="dialogFormVisible = true">
    open a Form nested Dialog
  </fin-button>

  <fin-dialog v-model="dialogFormVisible" title="Shipping address">
    <fin-form :model="form">
      <fin-form-item label="Promotion name" :label-width="formLabelWidth">
        <fin-input v-model="form.name" autocomplete="off" />
      </fin-form-item>
      <fin-form-item label="Zones" :label-width="formLabelWidth">
        <fin-select v-model="form.region" placeholder="Please select a zone">
          <fin-option label="Zone No.1" value="shanghai" />
          <fin-option label="Zone No.2" value="beijing" />
        </fin-select>
      </fin-form-item>
    </fin-form>
    <template #footer>
      <span class="dialog-footer">
        <fin-button @click="dialogFormVisible = false">Cancel</fin-button>
        <fin-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </fin-button>
      </span>
    </template>
  </fin-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

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
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
</script>
<style scoped>
.fin-button--text {
  margin-right: 15px;
}
.fin-select {
  width: 300px;
}
.fin-input {
  width: 300px;
}
</style>
```

### customization-header



```vue
<template>
  <fin-button @click="visible = true">
    Open Dialog with customized header
  </fin-button>
  <fin-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <fin-button type="danger" @click="close">
          <fin-icon class="fin-icon--left"><ErrorSolid /></fin-icon>
          Close
        </fin-button>
      </div>
    </template>
    This is dialog content.
  </fin-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FinButton, FinDialog } from '@jdt/find-plus'
import { ErrorSolid } from '@jdt/find-plus-icons-vue'

const visible = ref(false)
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
}
</style>
```

### nested-dialog

通常我们不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。 如果必须要在一个对话框内展示另一个对话框，可以将内部嵌套的对话框属性 `append-to-body` 设置为 true，嵌套的对话框将附加到 body 而不是其父节点，这样两个对话框都可以被正确地渲染。

```vue
<template>
  <fin-button text @click="outerVisible = true">
    open the outer Dialog
  </fin-button>

  <fin-dialog v-model="outerVisible" title="Outer Dialog">
    <template #default>
      <fin-dialog
        v-model="innerVisible"
        width="30%"
        title="Inner Dialog"
        append-to-body
      />
    </template>
    <template #footer>
      <div class="dialog-footer">
        <fin-button @click="outerVisible = false">Cancel</fin-button>
        <fin-button type="primary" @click="innerVisible = true">
          open the inner Dialog
        </fin-button>
      </div>
    </template>
  </fin-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>
```

### centered-content

将`center`设置为`true`即可使标题和底部居中。 `center`仅影响标题和底部区域。 Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS 样式。

```vue
<template>
  <fin-button text @click="centerDialogVisible = true">
    Click to open the Dialog
  </fin-button>

  <fin-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <span class="dialog-footer">
        <fin-button @click="centerDialogVisible = false">Cancel</fin-button>
        <fin-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </fin-button>
      </span>
    </template>
  </fin-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>
```

### align-center

设置 `align-center` 为 `true` 使对话框水平垂直居中。 由于对话框垂直居中在弹性盒子中，所以`top`属性将不起作用。

```vue
<template>
  <fin-button text @click="centerDialogVisible = true">
    Click to open the Dialog
  </fin-button>

  <fin-dialog
    v-model="centerDialogVisible"
    title="Warning"
    width="30%"
    align-center
  >
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <span class="dialog-footer">
        <fin-button @click="centerDialogVisible = false">Cancel</fin-button>
        <fin-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </fin-button>
      </span>
    </template>
  </fin-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>
```

### destroy-on-close

需要注意的是，当这个属性被启用时，在 `transition.beforeEnter` 事件卸载前，除了 `overlay`、`header (可选)`与`footer(可选)` ，Dialog 内不会有其它任何其它的 DOM 节点存在。

```vue
<template>
  <fin-button text @click="centerDialogVisible = true">
    Click to open Dialog
  </fin-button>

  <fin-dialog
    v-model="centerDialogVisible"
    title="Notice"
    width="30%"
    destroy-on-close
    center
  >
    <span>
      Notice: before dialog gets opened for the first time this node and the one
      bellow will not be rendered
    </span>
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <fin-button @click="centerDialogVisible = false">Cancel</fin-button>
        <fin-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </fin-button>
      </span>
    </template>
  </fin-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>
```

### draggable-dialog

设置`draggable`属性为`true`以做到拖拽

```vue
<template>
  <fin-button text @click="dialogVisible = true">
    Click to open Dialog
  </fin-button>

  <fin-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <span>It's a draggable Dialog</span>
    <template #footer>
      <span class="dialog-footer">
        <fin-button @click="dialogVisible = false">Cancel</fin-button>
        <fin-button type="primary" @click="dialogVisible = false">
          Confirm
        </fin-button>
      </span>
    </template>
  </fin-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>
```

