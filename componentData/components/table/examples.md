## Table 组件示例

### basic

当 `fin-table` 元素中注入 `data` 对象数组后，在 `fin-table-column` 中用 `prop` 属性来对应对象中的键名即可填入数据，用 `label` 属性来定义表格的列名。 可以使用 `width` 属性来定义列宽。

```vue
<template>
  <fin-table :data="tableData" style="width: 100%">
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

### size

可通过`size`属性设置不同类型的表格

```vue
<template>
  <fin-table :data="tableData" style="width: 100%" size="large">
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
  <fin-table :data="tableData" style="width: 100%">
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
  <fin-table :data="tableData" style="width: 100%" size="small">
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

### striped

`stripe` 可以创建带斑马纹的表格。 如果 `true`, 表格将会带有斑马纹。

```vue
<template>
  <fin-table :data="tableData" stripe style="width: 100%">
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

### with-border

默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 `border` 属性，把该属性设置为 `true` 即可启用。

```vue
<template>
  <fin-table :data="tableData" border style="width: 100%">
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

### with-status

可以通过指定 Table 组件的 `row-class-name` 属性来为 Table 中的某一行添加 class， 这样就可以自定义每一行的样式了。

```vue
<template>
  <fin-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
</template>

<script lang="ts" setup>
interface User {
  date: string
  name: string
  address: string
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style>
.fin-table .warning-row {
  --fin-table-tr-bg-color: var(--fin-color-warning-light-9);
}
.fin-table .success-row {
  --fin-table-tr-bg-color: var(--fin-color-success-light-9);
}
</style>
```

### fixed-header

只要在 `fin-table` 元素中定义了 `height` 属性，即可实现固定表头的表格，而不需要额外的代码。

```vue
<template>
  <fin-table :data="tableData" height="250" style="width: 100%">
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

### fixed-column

固定列需要使用 `fixed` 属性，它接受 `Boolean` 值。 如果为 `true`, 列将被左侧固定. 它还接受传入字符串，left 或 right，表示左边固定还是右边固定。

```vue
<template>
  <fin-table :data="tableData" style="width: 100%">
    <fin-table-column fixed prop="date" label="Date" width="150" />
    <fin-table-column prop="name" label="Name" width="120" />
    <fin-table-column prop="state" label="State" width="120" />
    <fin-table-column prop="city" label="City" width="120" />
    <fin-table-column prop="address" label="Address" width="600" />
    <fin-table-column prop="zip" label="Zip" width="120" />
    <fin-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <fin-button link type="primary" size="small" @click="handleClick"
          >Detail</fin-button
        >
        <fin-button link type="primary" size="small">Edit</fin-button>
      </template>
    </fin-table-column>
  </fin-table>
</template>

<script lang="ts" setup>
const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
</script>
```

### fixed-column-and-header

固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。

```vue
<template>
  <fin-table :data="tableData" style="width: 100%" height="250">
    <fin-table-column fixed prop="date" label="Date" width="150" />
    <fin-table-column prop="name" label="Name" width="120" />
    <fin-table-column prop="state" label="State" width="120" />
    <fin-table-column prop="city" label="City" width="320" />
    <fin-table-column prop="address" label="Address" width="600" />
    <fin-table-column prop="zip" label="Zip" width="120" />
  </fin-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]
</script>
```

### fixed-header-with-fluid-header

通过设置 `max-height` 属性为 `fin-table` 指定最大高度。 此时若表格所需的高度大于最大高度，则会显示一个滚动条。

```vue
<template>
  <fin-table :data="tableData" style="width: 100%" max-height="250">
    <fin-table-column fixed prop="date" label="Date" width="150" />
    <fin-table-column prop="name" label="Name" width="120" />
    <fin-table-column prop="state" label="State" width="120" />
    <fin-table-column prop="city" label="City" width="120" />
    <fin-table-column prop="address" label="Address" width="600" />
    <fin-table-column prop="zip" label="Zip" width="120" />
    <fin-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <fin-button
          link
          type="primary"
          size="small"
          @click.prevent="deleteRow(scope.$index)"
        >
          Remove
        </fin-button>
      </template>
    </fin-table-column>
  </fin-table>
  <fin-button class="mt-4" style="width: 100%" @click="onAddItem"
    >Add Item</fin-button
  >
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const now = new Date()

const tableData = ref([
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  })
}
</script>
```

### grouping-header

只需要将fin-table-column 放置于fin-table-column 中，你可以实现组头。

```vue
<template>
  <fin-table :data="tableData" style="width: 100%">
    <fin-table-column prop="date" label="Date" width="150" />
    <fin-table-column label="Delivery Info">
      <fin-table-column prop="name" label="Name" width="120" />
      <fin-table-column label="Address Info">
        <fin-table-column prop="state" label="State" width="120" />
        <fin-table-column prop="city" label="City" width="120" />
        <fin-table-column prop="address" label="Address" />
        <fin-table-column prop="zip" label="Zip" width="120" />
      </fin-table-column>
    </fin-table-column>
  </fin-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]
</script>
```

### fixed-column-and-header

组头的属性 `fixed` 由最外层 `fin-table-column`决定

```vue
<template>
  <fin-table :data="tableData" style="width: 100%" height="250">
    <fin-table-column fixed prop="date" label="Date" width="150" />
    <fin-table-column prop="name" label="Name" width="120" />
    <fin-table-column prop="state" label="State" width="120" />
    <fin-table-column prop="city" label="City" width="320" />
    <fin-table-column prop="address" label="Address" width="600" />
    <fin-table-column prop="zip" label="Zip" width="120" />
  </fin-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]
</script>
```

### single-select

Table 组件提供了单选的支持， 只需要配置 `highlight-current-row` 属性即可实现单选。 之后由 `current-change` 事件来管理选中时触发的事件，它会传入 `currentRow`，`oldCurrentRow`。 如果需要显示索引，可以增加一列 `fin-table-column`，设置 `type` 属性为 `index` 即可显示从 1 开始的索引号。

```vue
<template>
  <fin-table
    ref="singleTableRef"
    :data="tableData"
    highlight-current-row
    style="width: 100%"
    @current-change="handleCurrentChange"
  >
    <fin-table-column type="index" width="50" />
    <fin-table-column property="date" label="Date" width="120" />
    <fin-table-column property="name" label="Name" width="120" />
    <fin-table-column property="address" label="Address" />
  </fin-table>
  <div style="margin-top: 20px">
    <fin-button @click="setCurrent(tableData[1])">Select second row</fin-button>
    <fin-button @click="setCurrent()">Clear selection</fin-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FinTable } from '@jdt/find-plus'

interface User {
  date: string
  name: string
  address: string
}

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof FinTable>>()

const setCurrent = (row?: User) => {
  singleTableRef.value!.setCurrentRow(row)
}
const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val
}
const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

### multi-select

实现多选非常简单: 手动添加一个 `fin-table-column`，设 `type` 属性为 `selection` 即可； 除了多选，这里还使用到了 `show-overflow-tooltip`属性。 默认情况下，如果单元格内容过长，会占用多行显示。 若需要单行显示可以使用 `show-overflow-tooltip` 属性，它接受一个 `Boolean`， 为 `true` 时多余的内容会在 hover 时以 tooltip 的形式显示出来。

```vue
<template>
  <fin-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <fin-table-column type="selection" width="55" />
    <fin-table-column label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </fin-table-column>
    <fin-table-column property="name" label="Name" width="120" />
    <fin-table-column
      property="address"
      label="Address"
      show-overflow-tooltip
    />
  </fin-table>
  <div style="margin-top: 20px">
    <fin-button @click="toggleSelection([tableData[1], tableData[2]])"
      >Toggle selection status of second and third rows</fin-button
    >
    <fin-button @click="toggleSelection()">Clear selection</fin-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FinTable } from '@jdt/find-plus'

interface User {
  date: string
  name: string
  address: string
}

const multipleTableRef = ref<InstanceType<typeof FinTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

### sort

在列中设置 `sortable` 属性即可实现以该列为基准的排序， 接受一个 `Boolean`，默认为 `false`。 可以通过 Table 的 `default-sort` 属性设置默认的排序列和排序顺序。 可以使用 `sort-method` 或者 `sort-by` 使用自定义的排序规则。 如果需要后端排序，需将 `sortable` 设置为 `custom`，同时在 Table 上监听 `sort-change` 事件， 在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。 在本例中，我们还使用了 `formatter` 属性，它用于格式化指定列的值， 接受一个 `Function`，会传入两个参数：`row` 和 `column`， 可以根据自己的需求进行处理。

```vue
<template>
  <fin-table
    :data="tableData"
    :default-sort="{ prop: 'date', order: 'descending' }"
    style="width: 100%"
  >
    <fin-table-column prop="date" label="Date" sortable width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" :formatter="formatter" />
  </fin-table>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from '@jdt/find-plus'

interface User {
  date: string
  name: string
  address: string
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

### filter

在列中设置 `filters` 和 `filter-method` 属性即可开启该列的筛选， filters 是一个数组，`filter-method` 是一个方法，它用于决定某些数据是否显示， 会传入三个参数：`value`, `row` 和 `column`。

```vue
<template>
  <fin-button @click="resetDateFilter">reset date filter</fin-button>
  <fin-button @click="clearFilter">reset all filters</fin-button>
  <fin-table
    ref="tableRef"
    row-key="date"
    :data="tableData"
    style="width: 100%"
  >
    <fin-table-column
      prop="date"
      label="Date"
      sortable
      width="180"
      column-key="date"
      :filters="[
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' },
      ]"
      :filter-method="filterHandler"
    />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" :formatter="formatter" />

    <fin-table-column
      prop="tag"
      label="Tag"
      width="100"
      :filters="[
        { text: 'Home', value: 'Home' },
        { text: 'Office', value: 'Office' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <fin-tag
          :type="scope.row.tag === 'Home' ? '' : 'success'"
          disable-transitions
          >{{ scope.row.tag }}</fin-tag
        >
      </template>
    </fin-table-column>
  </fin-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TableColumnCtx, TableInstance } from '@jdt/find-plus'

interface User {
  date: string
  name: string
  address: string
  tag: string
}

const tableRef = ref<TableInstance>()

const resetDateFilter = () => {
  tableRef.value!.clearFilter(['date'])
}
// TODO: improvement typing when refactor table
const clearFilter = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  tableRef.value!.clearFilter()
}
const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}
const filterTag = (value: string, row: User) => {
  return row.tag === value
}
const filterHandler = (
  value: string,
  row: User,
  column: TableColumnCtx<User>
) => {
  const property = column['property']
  return row[property] === value
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
]
</script>
```

### custom-column

通过 `slot` 可以获取到 row, column, \$index 和 store（table 内部的状态管理）的数据，用法参考 demo。

```vue
<template>
  <fin-table :data="tableData" style="width: 100%">
    <fin-table-column label="Date" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <fin-icon><Time /></fin-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </fin-table-column>
    <fin-table-column label="Name" width="180">
      <template #default="scope">
        <fin-popover
          effect="light"
          trigger="hover"
          placement="top"
          width="auto"
        >
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <fin-tag>{{ scope.row.name }}</fin-tag>
          </template>
        </fin-popover>
      </template>
    </fin-table-column>
    <fin-table-column label="Operations">
      <template #default="scope">
        <fin-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</fin-button
        >
        <fin-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</fin-button
        >
      </template>
    </fin-table-column>
  </fin-table>
</template>

<script lang="ts" setup>
import { Time } from '@jdt/find-plus-icons-vue'

interface User {
  date: string
  name: string
  address: string
}

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

### custom-header

通过设置 [slot](https://v3.vuejs.org/guide/component-slots.html) 来自定义表头。

```vue
<template>
  <fin-table :data="filterTableData" style="width: 100%">
    <fin-table-column label="Date" prop="date" />
    <fin-table-column label="Name" prop="name" />
    <fin-table-column align="right">
      <template #header>
        <fin-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <fin-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</fin-button
        >
        <fin-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</fin-button
        >
      </template>
    </fin-table-column>
  </fin-table>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

interface User {
  date: string
  name: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

### expandable-row

通过设置 type="expand" 和 slot 可以开启展开行功能， fin-table-column 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 slot 相同。

```vue
<template>
  switch parent border: <fin-switch v-model="parentBorder" /> switch child
  border: <fin-switch v-model="childBorder" />
  <fin-table :data="tableData" :border="parentBorder" style="width: 100%">
    <fin-table-column type="expand">
      <template #default="props">
        <div m="4">
          <p m="t-0 b-2">State: {{ props.row.state }}</p>
          <p m="t-0 b-2">City: {{ props.row.city }}</p>
          <p m="t-0 b-2">Address: {{ props.row.address }}</p>
          <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
          <h3>Family</h3>
          <fin-table :data="props.row.family" :border="childBorder">
            <fin-table-column label="Name" prop="name" />
            <fin-table-column label="State" prop="state" />
            <fin-table-column label="City" prop="city" />
            <fin-table-column label="Address" prop="address" />
            <fin-table-column label="Zip" prop="zip" />
          </fin-table>
        </div>
      </template>
    </fin-table-column>
    <fin-table-column label="Date" prop="date" />
    <fin-table-column label="Name" prop="name" />
  </fin-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const parentBorder = ref(false)
const childBorder = ref(false)
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
]
</script>
```

### tree-and-lazy

支持树类型的数据的显示。 当 row 中包含 `children` 字段时，被视为树形数据。 渲染嵌套数据需要 prop 的 ` row-key `。 此外，子行数据可以异步加载。 设置 Table 的` lazy `属性为 true 与加载函数 `load` 。 通过指定 row 中的` hasChildren `字段来指定哪些行是包含子节点。 `children` 与` hasChildren `都可以通过 `tree-props `配置。

```vue
<template>
  <div>
    <fin-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
    >
      <fin-table-column prop="date" label="Date" sortable />
      <fin-table-column prop="name" label="Name" sortable />
      <fin-table-column prop="address" label="Address" sortable />
    </fin-table>

    <fin-table
      :data="tableData1"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <fin-table-column prop="date" label="Date" />
      <fin-table-column prop="name" label="Name" />
      <fin-table-column prop="address" label="Address" />
    </fin-table>
  </div>
</template>
<script lang="ts" setup>
interface User {
  id: number
  date: string
  name: string
  address: string
  hasChildren?: boolean
  children?: User[]
}

const load = (
  row: User,
  treeNode: unknown,
  resolve: (date: User[]) => void
) => {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])
  }, 1000)
}

const tableData: User[] = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ],
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const tableData1: User[] = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    hasChildren: true,
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

### summary

将 `show-summary` 设置为` true `就会在表格尾部展示合计行。 默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过` sum-text `配置），其余列会将本列所有数值进行求合操作，并显示出来。 当然，你也可以定义自己的合计逻辑。 使用 `summary-method` 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中， 具体可以参考本例中的第二个表格。

```vue
<template>
  <fin-table :data="tableData" border show-summary style="width: 100%">
    <fin-table-column prop="id" label="ID" width="180" />
    <fin-table-column prop="name" label="Name" />
    <fin-table-column prop="amount1" sortable label="Amount 1" />
    <fin-table-column prop="amount2" sortable label="Amount 2" />
    <fin-table-column prop="amount3" sortable label="Amount 3" />
  </fin-table>

  <fin-table
    :data="tableData"
    border
    height="200"
    :summary-method="getSummaries"
    show-summary
    style="width: 100%; margin-top: 20px"
  >
    <fin-table-column prop="id" label="ID" width="180" />
    <fin-table-column prop="name" label="Name" />
    <fin-table-column prop="amount1" label="Cost 1 ($)" />
    <fin-table-column prop="amount2" label="Cost 2 ($)" />
    <fin-table-column prop="amount3" label="Cost 3 ($)" />
  </fin-table>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from '@jdt/find-plus'

interface Product {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
}

interface SummaryMethodProps<T = Product> {
  columns: TableColumnCtx<T>[]
  data: T[]
}

const getSummaries = (param: SummaryMethodProps) => {
  const { columns, data } = param
  const sums: string[] = []
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = 'Total Cost'
      return
    }
    const values = data.map((item) => Number(item[column.property]))
    if (!values.every((value) => Number.isNaN(value))) {
      sums[index] = `$ ${values.reduce((prev, curr) => {
        const value = Number(curr)
        if (!Number.isNaN(value)) {
          return prev + curr
        } else {
          return prev
        }
      }, 0)}`
    } else {
      sums[index] = 'N/A'
    }
  })

  return sums
}

const tableData: Product[] = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
]
</script>
```

### rowspan-and-colspan

通过给 table 传入` span-method `方法可以实现合并行或列， 方法的参数是一个对象，里面包含当前行` row`、当前列 ` column`、当前行号` rowIndex`、当前列号 ` columnIndex` 四个属性。 该函数可以返回一个包含两个元素的数组，第一个元素代表 ` rowspan`，第二个元素代表 ` colspan`。 也可以返回一个键名为` rowspan` 和` colspan` 的对象。

```vue
<template>
  <div>
    <fin-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%"
    >
      <fin-table-column prop="id" label="ID" width="180" />
      <fin-table-column prop="name" label="Name" />
      <fin-table-column prop="amount1" sortable label="Amount 1" />
      <fin-table-column prop="amount2" sortable label="Amount 2" />
      <fin-table-column prop="amount3" sortable label="Amount 3" />
    </fin-table>

    <fin-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <fin-table-column prop="id" label="ID" width="180" />
      <fin-table-column prop="name" label="Name" />
      <fin-table-column prop="amount1" label="Amount 1" />
      <fin-table-column prop="amount2" label="Amount 2" />
      <fin-table-column prop="amount3" label="Amount 3" />
    </fin-table>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from '@jdt/find-plus'

interface User {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
}

interface SpanMethodProps {
  row: User
  column: TableColumnCtx<User>
  rowIndex: number
  columnIndex: number
}

const arraySpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}

const objectSpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
  if (columnIndex === 0) {
    if (rowIndex % 2 === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      }
    }
  }
}

const tableData: User[] = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
]
</script>
```

### custom-index

通过给` type=index` 的列传入 index 属性，可以自定义索引。 该属性传入数字时，将作为索引的起始值。 也可以传入一个方法，它提供当前行的行号（从 `0` 开始）作为参数，返回值将作为索引展示。

```vue
<template>
  <fin-table :data="tableData" style="width: 100%">
    <fin-table-column type="index" :index="indexMethod" />
    <fin-table-column prop="date" label="Date" width="180" />
    <fin-table-column prop="name" label="Name" width="180" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
</template>

<script lang="ts" setup>
const indexMethod = (index: number) => {
  return index * 2
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
</script>
```

### table-layout



```vue
<template>
  <fin-radio-group v-model="tableLayout">
    <fin-radio-button label="fixed" />
    <fin-radio-button label="auto" />
  </fin-radio-group>
  <fin-table :data="tableData" :table-layout="tableLayout">
    <fin-table-column prop="date" label="Date" />
    <fin-table-column prop="name" label="Name" />
    <fin-table-column prop="address" label="Address" />
  </fin-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tableLayout = ref('fixed')

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

