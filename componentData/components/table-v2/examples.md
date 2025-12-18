## TableV2 组件示例

### basic



```vue
<template>
  <fin-table-v2
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
    fixed
  />
</template>

<script lang="ts" setup>
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 1000)
</script>
```

### auto-resizer



```vue
<template>
  <div style="height: 400px">
    <fin-auto-resizer>
      <template #default="{ height, width }">
        <fin-table-v2
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </fin-auto-resizer>
  </div>
</template>

<script lang="ts" setup>
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)
</script>
```

### cell-templating



```vue
<template>
  <fin-table-v2
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
    fixed
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import {
  FinButton,
  FinIcon,
  FinTag,
  FinTooltip,
  TableV2FixedDir,
} from '@jdt/find-plus'
import { Time } from '@jdt/find-plus-icons-vue'

import type { Column } from '@jdt/find-plus'

let id = 0

const dataGenerator = () => ({
  id: `random-id-${++id}`,
  name: 'Tom',
  date: '2020-10-1',
})

const columns: Column<any>[] = [
  {
    key: 'date',
    title: 'Date',
    dataKey: 'date',
    width: 150,
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({ cellData: date }) => (
      <fin-tooltip content={dayjs(date).format('YYYY/MM/DD')}>
        {
          <span class="flex items-center">
            <fin-icon class="mr-3">
              <Time />
            </fin-icon>
            {dayjs(date).format('YYYY/MM/DD')}
          </span>
        }
      </fin-tooltip>
    ),
  },
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 150,
    align: 'center',
    cellRenderer: ({ cellData: name }) => <fin-tag>{name}</fin-tag>,
  },
  {
    key: 'operations',
    title: 'Operations',
    cellRenderer: () => (
      <>
        <fin-button size="small">Edit</fin-button>
        <fin-button size="small" type="danger">
          Delete
        </fin-button>
      </>
    ),
    width: 150,
    align: 'center',
  },
]

const data = ref(Array.from({ length: 200 }).map(dataGenerator))
</script>
```

### selection



```vue
<template>
  <div style="height: 400px">
    <fin-auto-resizer>
      <template #default="{ height, width }">
        <fin-table-v2
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </fin-auto-resizer>
  </div>
</template>

<script lang="tsx" setup>
import { ref, unref } from 'vue'
import { FinCheckbox } from '@jdt/find-plus'

import type { FunctionalComponent } from 'vue'
import type { CheckboxValueType, Column } from '@jdt/find-plus'

type SelectionCellProps = {
  value: boolean
  intermediate?: boolean
  onChange: (value: CheckboxValueType) => void
}

const SelectionCell: FunctionalComponent<SelectionCellProps> = ({
  value,
  intermediate = false,
  onChange,
}) => {
  return (
    <FinCheckbox
      onChange={onChange}
      modelValue={value}
      indeterminate={intermediate}
    />
  )
}

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        checked: false,
        parentId: null,
      }
    )
  })

const columns: Column<any>[] = generateColumns(10)
columns.unshift({
  key: 'selection',
  width: 50,
  cellRenderer: ({ rowData }) => {
    const onChange = (value: CheckboxValueType) => (rowData.checked = value)
    return <SelectionCell value={rowData.checked} onChange={onChange} />
  },

  headerCellRenderer: () => {
    const _data = unref(data)
    const onChange = (value: CheckboxValueType) =>
      (data.value = _data.map((row) => {
        row.checked = value
        return row
      }))
    const allSelected = _data.every((row) => row.checked)
    const containsChecked = _data.some((row) => row.checked)

    return (
      <SelectionCell
        value={allSelected}
        intermediate={containsChecked && !allSelected}
        onChange={onChange}
      />
    )
  },
})

const data = ref(generateData(columns, 200))
</script>
```

### inline-editing



```vue
<template>
  <div style="height: 400px">
    <fin-auto-resizer>
      <template #default="{ height, width }">
        <fin-table-v2
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </fin-auto-resizer>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { FinInput } from '@jdt/find-plus'

import type { FunctionalComponent } from 'vue'
import type { Column, InputInstance } from '@jdt/find-plus'

type SelectionCellProps = {
  value: string
  intermediate?: boolean
  onChange: (value: string) => void
  forwardRef: (el: InputInstance) => void
}

const InputCell: FunctionalComponent<SelectionCellProps> = ({
  value,
  onChange,
  forwardRef,
}) => {
  return (
    <FinInput ref={forwardRef as any} onInput={onChange} modelValue={value} />
  )
}

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        editing: false,
        parentId: null,
      }
    )
  })

const columns: Column<any>[] = generateColumns(10)
columns[0] = {
  ...columns[0],
  title: 'Editable Column',
  cellRenderer: ({ rowData, column }) => {
    const onChange = (value: string) => {
      rowData[column.dataKey!] = value
    }
    const onEnterEditMode = () => {
      rowData.editing = true
    }

    const onExitEditMode = () => (rowData.editing = false)
    const input = ref()
    const setRef = (el) => {
      input.value = el
      if (el) {
        el.focus?.()
      }
    }

    return rowData.editing ? (
      <InputCell
        forwardRef={setRef}
        value={rowData[column.dataKey!]}
        onChange={onChange}
        onBlur={onExitEditMode}
        onKeydownEnter={onExitEditMode}
      />
    ) : (
      <div class="table-v2-inline-editing-trigger" onClick={onEnterEditMode}>
        {rowData[column.dataKey!]}
      </div>
    )
  },
}

const data = ref(generateData(columns, 200))
</script>

<style>
.table-v2-inline-editing-trigger {
  border: 1px transparent dotted;
  padding: 4px;
}

.table-v2-inline-editing-trigger:hover {
  border-color: var(--fin-color-primary);
}
</style>
```

### row-class



```vue
<template>
  <fin-table-v2
    :columns="columns"
    :data="data"
    :row-class="rowClass"
    :width="700"
    :height="400"
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import {
  FinButton,
  FinIcon,
  FinTag,
  FinTooltip,
  TableV2FixedDir,
} from '@jdt/find-plus'
import { Time } from '@jdt/find-plus-icons-vue'

import type { Column, RowClassNameGetter } from '@jdt/find-plus'

let id = 0

const dataGenerator = () => ({
  id: `random-id-${++id}`,
  name: 'Tom',
  date: '2020-10-1',
})

const columns: Column<any>[] = [
  {
    key: 'date',
    title: 'Date',
    dataKey: 'date',
    width: 150,
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({ cellData: date }) => (
      <FinTooltip content={dayjs(date).format('YYYY/MM/DD')}>
        {
          <span class="flex items-center">
            <FinIcon class="mr-3">
              <Time />
            </FinIcon>
            {dayjs(date).format('YYYY/MM/DD')}
          </span>
        }
      </FinTooltip>
    ),
  },
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 150,
    align: 'center',
    cellRenderer: ({ cellData: name }) => <FinTag>{name}</FinTag>,
  },
  {
    key: 'operations',
    title: 'Operations',
    cellRenderer: () => (
      <>
        <FinButton size="small">Edit</FinButton>
        <FinButton size="small" type="danger">
          Delete
        </FinButton>
      </>
    ),
    width: 150,
    align: 'center',
    flexGrow: 1,
  },
]

const data = ref(Array.from({ length: 200 }).map(dataGenerator))

const rowClass = ({ rowIndex }: Parameters<RowClassNameGetter<any>>[0]) => {
  if (rowIndex % 10 === 5) {
    return 'bg-red-100'
  } else if (rowIndex % 10 === 0) {
    return 'bg-blue-200'
  }
  return ''
}
</script>
```

### sticky-rows



```vue
<template>
  <fin-table-v2
    :columns="columns"
    :data="tableData"
    :fixed-data="fixedData"
    :width="700"
    :height="400"
    :row-class="rowClass"
    fixed
    @scroll="onScroll"
  />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const rowClass = ({ rowIndex }) => {
  if (rowIndex < 0 || (rowIndex + 1) % 5 === 0) return 'sticky-row'
}

const stickyIndex = ref(0)

const fixedData = computed(() =>
  data.slice(stickyIndex.value, stickyIndex.value + 1)
)

const tableData = computed(() => {
  return data.slice(1)
})

const onScroll = ({ scrollTop }) => {
  stickyIndex.value = Math.floor(scrollTop / 250) * 5
}
</script>

<style>
.fin-fin-table-v2__fixed-header-row {
  background-color: var(--fin-color-primary-light-5);
  font-weight: bold;
}
</style>
```

### fixed-columns



```vue
<template>
  <fin-table-v2
    :columns="columns"
    :data="data"
    :sort-by="sortBy"
    :width="700"
    :height="400"
    fixed
    @column-sort="onSort"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TableV2FixedDir, TableV2SortOrder } from '@jdt/find-plus'

import type { SortBy } from '@jdt/find-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
let data = generateData(columns, 200)

columns[0].fixed = true
columns[1].fixed = TableV2FixedDir.LEFT
columns[9].fixed = TableV2FixedDir.RIGHT

for (let i = 0; i < 3; i++) columns[i].sortable = true

const sortBy = ref<SortBy>({
  key: 'column-0',
  order: TableV2SortOrder.ASC,
})

const onSort = (_sortBy: SortBy) => {
  data = data.reverse()
  sortBy.value = _sortBy
}
</script>
```

### grouping-header



```vue
<template>
  <fin-table-v2
    fixed
    :columns="fixedColumns"
    :data="data"
    :header-height="[50, 40, 50]"
    :header-class="headerClass"
    :width="700"
    :height="400"
  >
    <template #header="props">
      <customized-header v-bind="props" />
    </template>
  </fin-table-v2>
</template>
<script lang="tsx" setup>
import { TableV2FixedDir, TableV2Placeholder } from '@jdt/find-plus'

import type { FunctionalComponent } from 'vue'
import type {
  HeaderClassNameGetter,
  TableV2CustomizedHeaderSlotParam,
} from '@jdt/find-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })
const columns = generateColumns(15)
const data = generateData(columns, 200)

const fixedColumns = columns.map((column, columnIndex) => {
  let fixed: TableV2FixedDir | undefined = undefined
  if (columnIndex < 3) fixed = TableV2FixedDir.LEFT
  if (columnIndex > 12) fixed = TableV2FixedDir.RIGHT
  return { ...column, fixed, width: 100 }
})

const CustomizedHeader: FunctionalComponent<
  TableV2CustomizedHeaderSlotParam
> = ({ cells, columns, headerIndex }) => {
  if (headerIndex === 2) return cells

  const groupCells = [] as typeof cells
  let width = 0
  let idx = 0

  columns.forEach((column, columnIndex) => {
    if (column.placeholderSign === TableV2Placeholder)
      groupCells.push(cells[columnIndex])
    else {
      width += cells[columnIndex].props!.column.width
      idx++

      const nextColumn = columns[columnIndex + 1]
      if (
        columnIndex === columns.length - 1 ||
        nextColumn.placeholderSign === TableV2Placeholder ||
        idx === (headerIndex === 0 ? 4 : 2)
      ) {
        groupCells.push(
          <div
            class="flex items-center justify-center custom-header-cell"
            role="columnheader"
            style={{
              ...cells[columnIndex].props!.style,
              width: `${width}px`,
            }}
          >
            Group width {width}
          </div>
        )
        width = 0
        idx = 0
      }
    }
  })
  return groupCells
}

const headerClass = ({
  headerIndex,
}: Parameters<HeaderClassNameGetter<any>>[0]) => {
  if (headerIndex === 1) return 'fin-primary-color'
  return ''
}
</script>

<style>
.fin-fin-table-v2__header-row .custom-header-cell {
  border-right: 1px solid var(--fin-border-color);
}

.fin-fin-table-v2__header-row .custom-header-cell:last-child {
  border-right: none;
}

.fin-primary-color {
  background-color: var(--fin-color-primary);
  color: var(--fin-color-white);
  font-size: 14px;
  font-weight: bold;
}

.fin-primary-color .custom-header-cell {
  padding: 0 4px;
}
</style>
```

### filter



```vue
<template>
  <fin-table-v2
    fixed
    :columns="fixedColumns"
    :data="data"
    :width="700"
    :height="400"
  />
</template>
<script lang="tsx" setup>
import { ref } from 'vue'
import {
  FinButton,
  FinCheckbox,
  FinIcon,
  FinPopover,
  TableV2FixedDir,
} from '@jdt/find-plus'
import { FunnelSolid } from '@jdt/find-plus-icons-vue'

import type { HeaderCellSlotProps } from '@jdt/find-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })
const columns = generateColumns(10)
const data = ref(generateData(columns, 200))

const shouldFunnelSolid = ref(false)
const popoverRef = ref()

const onFunnelSolid = () => {
  popoverRef.value.hide()
  if (shouldFunnelSolid.value) {
    data.value = generateData(columns, 100, 'FunnelSolided-')
  } else {
    data.value = generateData(columns, 200)
  }
}

const onReset = () => {
  shouldFunnelSolid.value = false
  onFunnelSolid()
}

columns[0].headerCellRenderer = (props: HeaderCellSlotProps) => {
  return (
    <div class="flex items-center justify-center">
      <span class="mr-2 text-xs">{props.column.title}</span>
      <FinPopover ref={popoverRef} trigger="click" {...{ width: 200 }}>
        {{
          default: () => (
            <div class="FunnelSolid-wrapper">
              <div class="FunnelSolid-group">
                <FinCheckbox v-model={shouldFunnelSolid.value}>
                  FunnelSolid Text
                </FinCheckbox>
              </div>
              <div class="fin-table-v2__demo-FunnelSolid">
                <FinButton text onClick={onFunnelSolid}>
                  Confirm
                </FinButton>
                <FinButton text onClick={onReset}>
                  Reset
                </FinButton>
              </div>
            </div>
          ),
          reference: () => (
            <FinIcon class="cursor-pointer">
              <FunnelSolid />
            </FinIcon>
          ),
        }}
      </FinPopover>
    </div>
  )
}

const fixedColumns = columns.map((column, columnIndex) => {
  let fixed: TableV2FixedDir | undefined = undefined
  if (columnIndex < 2) fixed = TableV2FixedDir.LEFT
  if (columnIndex > 9) fixed = TableV2FixedDir.RIGHT
  return { ...column, fixed, width: 100 }
})
</script>

<style>
.fin-table-v2__demo-FunnelSolid {
  border-top: var(--fin-border);
  margin: 12px -12px -12px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
}
</style>
```

### sort



```vue
<template>
  <fin-table-v2
    :columns="columns"
    :data="data"
    :sort-by="sortState"
    :width="700"
    :height="400"
    fixed
    @column-sort="onSort"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TableV2SortOrder } from '@jdt/find-plus'
import type { SortBy } from '@jdt/find-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
let data = generateData(columns, 200)

columns[0].sortable = true

const sortState = ref<SortBy>({
  key: 'column-0',
  order: TableV2SortOrder.ASC,
})

const onSort = (sortBy: SortBy) => {
  console.log(sortBy)
  data = data.reverse()
  sortState.value = sortBy
}
</script>
```

### controlled-sort



```vue
<template>
  <fin-table-v2
    v-model:sort-state="sortState"
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
    fixed
    @column-sort="onSort"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TableV2SortOrder } from '@jdt/find-plus'
import type { SortBy, SortState } from '@jdt/find-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = ref(generateData(columns, 200))

columns[0].sortable = true
columns[1].sortable = true

const sortState = ref<SortState>({
  'column-0': TableV2SortOrder.DESC,
  'column-1': TableV2SortOrder.ASC,
})

const onSort = ({ key, order }: SortBy) => {
  sortState.value[key] = order
  data.value = data.value.reverse()
}
</script>
```

### cross-hovering



```vue
<template>
  <div style="height: 400px">
    <fin-auto-resizer>
      <template #default="{ height, width }">
        <fin-table-v2
          :columns="columns"
          :cell-props="cellProps"
          :class="kls"
          :data="data"
          :width="width"
          :height="height"
        />
      </template>
    </fin-auto-resizer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
columns.unshift({
  key: 'column-n-1',
  width: 50,
  title: 'Row No.',
  cellRenderer: ({ rowIndex }) => `${rowIndex + 1}`,
  align: 'center',
})
const data = generateData(columns, 200)

const cellProps = ({ columnIndex }) => {
  const key = `hovering-col-${columnIndex}`
  return {
    ['data-key']: key,
    onMouseenter: () => {
      kls.value = key
    },
    onMouseleave: () => {
      kls.value = ''
    },
  }
}

const kls = ref<string>('')
</script>

<style>
.hovering-col-0 [data-key='hovering-col-0'],
.hovering-col-1 [data-key='hovering-col-1'],
.hovering-col-2 [data-key='hovering-col-2'],
.hovering-col-3 [data-key='hovering-col-3'],
.hovering-col-4 [data-key='hovering-col-4'],
.hovering-col-5 [data-key='hovering-col-5'],
.hovering-col-6 [data-key='hovering-col-6'],
.hovering-col-7 [data-key='hovering-col-7'],
.hovering-col-8 [data-key='hovering-col-8'],
.hovering-col-9 [data-key='hovering-col-9'],
.hovering-col-10 [data-key='hovering-col-10'] {
  background: var(--fin-table-row-hover-bg-color);
}

[data-key='hovering-col-0'] {
  font-weight: bold;
  user-select: none;
  pointer-events: none;
}
</style>
```

### colspan



```vue
<template>
  <fin-table-v2
    fixed
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
  >
    <template #row="props">
      <Row v-bind="props" />
    </template>
  </fin-table-v2>
</template>

<script lang="ts" setup>
import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const colSpanIndex = 1
columns[colSpanIndex].colSpan = ({ rowIndex }) => (rowIndex % 4) + 1
columns[colSpanIndex].align = 'center'

const Row = ({ rowData, rowIndex, cells, columns }) => {
  const colSpan = columns[colSpanIndex].colSpan({ rowData, rowIndex })
  if (colSpan > 1) {
    let width = Number.parseInt(cells[colSpanIndex].props.style.width)
    for (let i = 1; i < colSpan; i++) {
      width += Number.parseInt(cells[colSpanIndex + i].props.style.width)
      cells[colSpanIndex + i] = null
    }
    const style = {
      ...cells[colSpanIndex].props.style,
      width: `${width}px`,
      backgroundColor: 'var(--fin-color-primary-light-3)',
    }
    cells[colSpanIndex] = cloneVNode(cells[colSpanIndex], { style })
  }

  return cells
}
</script>
```

### rowspan



```vue
<template>
  <fin-table-v2
    fixed
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
  >
    <template #row="props">
      <Row v-bind="props" />
    </template>
  </fin-table-v2>
</template>

<script lang="ts" setup>
import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const rowSpanIndex = 0
columns[rowSpanIndex].rowSpan = ({ rowIndex }) =>
  rowIndex % 2 === 0 && rowIndex <= data.length - 2 ? 2 : 1

const Row = ({ rowData, rowIndex, cells, columns }) => {
  const rowSpan = columns[rowSpanIndex].rowSpan({ rowData, rowIndex })
  if (rowSpan > 1) {
    const cell = cells[rowSpanIndex]
    const style = {
      ...cell.props.style,
      backgroundColor: 'var(--fin-color-primary-light-3)',
      height: `${rowSpan * 50 - 1}px`,
      alignSelf: 'flex-start',
      zIndex: 1,
    }
    cells[rowSpanIndex] = cloneVNode(cell, { style })
  }
  return cells
}
</script>
```

### spans



```vue
<template>
  <fin-table-v2
    fixed
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
  >
    <template #row="props">
      <Row v-bind="props" />
    </template>
  </fin-table-v2>
</template>

<script lang="tsx" setup>
import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const colSpanIndex = 1
columns[colSpanIndex].colSpan = ({ rowIndex }) => (rowIndex % 4) + 1
columns[colSpanIndex].align = 'center'

const rowSpanIndex = 0
columns[rowSpanIndex].rowSpan = ({ rowIndex }) =>
  rowIndex % 2 === 0 && rowIndex <= data.length - 2 ? 2 : 1

const Row = ({ rowData, rowIndex, cells, columns }) => {
  const colSpan = columns[colSpanIndex].colSpan({ rowData, rowIndex })
  if (colSpan > 1) {
    let width = Number.parseInt(cells[colSpanIndex].props.style.width)
    for (let i = 1; i < colSpan; i++) {
      width += Number.parseInt(cells[colSpanIndex + i].props.style.width)
      cells[colSpanIndex + i] = null
    }
    const style = {
      ...cells[colSpanIndex].props.style,
      width: `${width}px`,
      backgroundColor: 'var(--fin-color-primary-light-3)',
    }
    cells[colSpanIndex] = cloneVNode(cells[colSpanIndex], { style })
  }

  const rowSpan = columns[rowSpanIndex].rowSpan({ rowData, rowIndex })
  if (rowSpan > 1) {
    const cell = cells[rowSpanIndex]
    const style = {
      ...cell.props.style,
      backgroundColor: 'var(--fin-color-danger-light-3)',
      height: `${rowSpan * 50}px`,
      alignSelf: 'flex-start',
      zIndex: 1,
    }
    cells[rowSpanIndex] = cloneVNode(cell, { style })
  } else {
    const style = cells[rowSpanIndex].props.style
    // override the cell here for creating a pure node without pollute the style
    cells[rowSpanIndex] = (
      <div style={{ ...style, width: `${style.width}px` }} />
    )
  }
  return cells
}
</script>
```

### tree-data



```vue
<template>
  <fin-table-v2
    v-model:expanded-row-keys="expandedRowKeys"
    :columns="columns"
    :data="treeData"
    :width="700"
    :expand-column-key="expandColumnKey"
    :height="400"
    fixed
    @row-expand="onRowExpanded"
    @expanded-rows-change="onExpandedRowsChange"
  />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { TableV2FixedDir } from '@jdt/find-plus'

import type {
  ExpandedRowsChangeHandler,
  RowExpandHandler,
} from '@jdt/find-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10).map((column, columnIndex) => {
  let fixed!: TableV2FixedDir
  if (columnIndex < 2) fixed = TableV2FixedDir.LEFT
  if (columnIndex > 8) fixed = TableV2FixedDir.RIGHT
  return { ...column, fixed }
})

const data = generateData(columns, 200)

const expandColumnKey = 'column-0'

// add some sub items
for (let i = 0; i < 50; i++) {
  data.push(
    {
      ...data[0],
      id: `${data[0].id}-sub-${i}`,
      parentId: data[0].id,
      [expandColumnKey]: `Sub ${i}`,
    },
    {
      ...data[2],
      id: `${data[2].id}-sub-${i}`,
      parentId: data[2].id,
      [expandColumnKey]: `Sub ${i}`,
    },
    {
      ...data[2],
      id: `${data[2].id}-sub-sub-${i}`,
      parentId: `${data[2].id}-sub-${i}`,
      [expandColumnKey]: `Sub-Sub ${i}`,
    }
  )
}

function unflatten(
  data: ReturnType<typeof generateData>,
  rootId = null,
  dataKey = 'id',
  parentKey = 'parentId'
) {
  const tree: any[] = []
  const childrenMap = {}

  for (const datum of data) {
    const item = { ...datum }
    const id = item[dataKey]
    const parentId = item[parentKey]

    if (Array.isArray(item.children)) {
      childrenMap[id] = item.children.concat(childrenMap[id] || [])
    } else if (!childrenMap[id]) {
      childrenMap[id] = []
    }
    item.children = childrenMap[id]

    if (parentId !== undefined && parentId !== rootId) {
      if (!childrenMap[parentId]) childrenMap[parentId] = []
      childrenMap[parentId].push(item)
    } else {
      tree.push(item)
    }
  }

  return tree
}

const treeData = computed(() => unflatten(data))

const expandedRowKeys = ref<string[]>([])

const onRowExpanded = ({ expanded }: Parameters<RowExpandHandler<any>>[0]) => {
  console.log('Expanded:', expanded)
}

const onExpandedRowsChange = (
  expandedKeys: Parameters<ExpandedRowsChangeHandler>[0]
) => {
  console.log(expandedKeys)
}
</script>
```

### dynamic-height



```vue
<template>
  <fin-table-v2
    :columns="columns"
    :data="data"
    :sort-by="sort"
    :estimated-row-height="40"
    :width="700"
    :height="400"
    fixed
    @column-sort="onColumnSort"
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import {
  FinButton,
  FinTag,
  TableV2FixedDir,
  TableV2SortOrder,
} from '@jdt/find-plus'

import type { Column } from '@element-plus/components/table-v2'

const longText =
  'Quaerat ipsam necessitatibus eum quibusdam est id voluptatem cumque mollitia.'
const midText = 'Corrupti doloremque a quos vero delectus consequatur.'
const shortText = 'Eius optio fugiat.'

const textList = [shortText, midText, longText]

// generate random number in range 0 to 2

let id = 0

const dataGenerator = () => ({
  id: `random:${++id}`,
  name: 'Tom',
  date: '2016-05-03',
  description: textList[Math.floor(Math.random() * 3)],
})

const columns: Column<any>[] = [
  {
    key: 'id',
    title: 'Id',
    dataKey: 'id',
    width: 150,
    sortable: true,
    fixed: TableV2FixedDir.LEFT,
  },
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 150,
    align: 'center',
    cellRenderer: ({ cellData: name }) => <FinTag>{name}</FinTag>,
  },
  {
    key: 'description',
    title: 'Description',
    dataKey: 'description',
    width: 150,
    cellRenderer: ({ cellData: description }) => (
      <div style="padding: 10px 0;">{description}</div>
    ),
  },
  {
    key: 'operations',
    title: 'Operations',
    cellRenderer: () => (
      <>
        <FinButton size="small">Edit</FinButton>
        <FinButton size="small" type="danger">
          Delete
        </FinButton>
      </>
    ),
    width: 150,
    align: 'center',
  },
]
const data = ref(
  Array.from({ length: 200 })
    .map(dataGenerator)
    .sort((a, b) => (a.name > b.name ? 1 : -1))
)

const sort = { key: 'name', order: TableV2SortOrder.ASC }

const onColumnSort = (sortBy) => {
  const order = sortBy.order === 'asc' ? 1 : -1
  const dataClone = [...data.value]
  dataClone.sort((a, b) => (a[sortBy.key] > b[sortBy.key] ? order : -order))
  sort.value = sortBy
  data.value = dataClone
}
</script>
```

### detailed-view



```vue
<template>
  <fin-table-v2
    :columns="columns"
    :data="data"
    :estimated-row-height="50"
    :expand-column-key="columns[0].key"
    :width="700"
    :height="400"
  >
    <template #row="props">
      <Row v-bind="props" />
    </template>
  </fin-table-v2>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const detailedText = `Velit sed aspernatur tempora. Natus consequatur officiis dicta vel assumenda.
Itaque est temporibus minus quis. Ipsum commodiab porro vel voluptas illum.
Qui quam nulla et dolore autem itaque est.
Id consequatur ipsum ea fuga et odit eligendi impedit.
Maiores officiis occaecati et magnam et sapiente est velit sunt.
Non et tempore temporibus. Excepturi et quos. Minus distinctio aut.
Voluptatem ea excepturi omnis vel. Non aperiam sit sed laboriosam eaque omnis deleniti.
Est molestiae omnis non et nulla repudiandae fuga sit.`

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = ref(
  generateData(columns, 200).map((data) => {
    data.children = [
      {
        id: `${data.id}-detail-content`,
        detail: detailedText,
      },
    ]
    return data
  })
)

const Row = ({ cells, rowData }) => {
  if (rowData.detail) return <div class="p-6">{rowData.detail}</div>
  return cells
}

Row.inheritAttrs = false
</script>

<style>
.fin-table-v2__row-depth-0 {
  height: 50px;
}

.fin-table-v2__cell-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
```

### footer



```vue
<template>
  <fin-table-v2
    :columns="columns"
    :data="data"
    :row-height="40"
    :width="700"
    :height="400"
    :footer-height="50"
    fixed
  >
    <template #footer
      ><div
        class="flex items-center"
        style="
          justify-content: center;
          height: 100%;
          background-color: var(--fin-color-primary-light-7);
        "
      >
        Display a message in the footer
      </div>
    </template>
  </fin-table-v2>
</template>

<script lang="ts" setup>
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)
</script>
```

### empty



```vue
<template>
  <fin-table-v2
    :columns="columns"
    :data="[]"
    :row-height="40"
    :width="700"
    :height="400"
    :footer-height="50"
  >
    <template #empty>
      <div class="flex items-center justify-center h-100%">
        <fin-empty />
      </div>
    </template>
  </fin-table-v2>
</template>

<script lang="tsx" setup>
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const columns = generateColumns(10)
</script>
```

### overlay



```vue
<template>
  <fin-table-v2
    :columns="columns"
    :data="data"
    :row-height="40"
    :width="700"
    :height="400"
  >
    <template #overlay>
      <div
        class="fin-loading-mask"
        style="display: flex; align-items: center; justify-content: center"
      >
        <fin-icon
          class="is-loading"
          color="var(--fin-color-primary)"
          :size="26"
        >
          <loading-icon />
        </fin-icon>
      </div>
    </template>
  </fin-table-v2>
</template>

<script lang="ts" setup>
import { Loading as LoadingIcon } from '@jdt/find-plus-icons-vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)
</script>
<style>
.example-showcase .fin-table-v2__overlay {
  z-index: 9;
}
</style>
```

### manual-scroll



```vue
<template>
  <div class="mb-4 flex items-center">
    <fin-form-item label="Scroll pixels" class="mr-4">
      <fin-input v-model="scrollDelta" />
    </fin-form-item>
    <fin-form-item label="Scroll rows">
      <fin-input v-model="scrollRows" />
    </fin-form-item>
  </div>
  <div class="mb-4 flex items-center">
    <fin-button @click="scrollByPixels"> Scroll by pixels </fin-button>
    <fin-button @click="scrollByRows"> Scroll by rows </fin-button>
  </div>
  <div style="height: 400px">
    <fin-auto-resizer>
      <template #default="{ height, width }">
        <fin-table-v2
          ref="tableRef"
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </fin-auto-resizer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TableV2Instance } from '@jdt/find-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)
const tableRef = ref<TableV2Instance>()
const scrollDelta = ref(200)
const scrollRows = ref(10)

function scrollByPixels() {
  tableRef.value?.scrollToTop(scrollDelta.value)
}

function scrollByRows() {
  tableRef.value?.scrollToRow(scrollRows.value)
}
</script>
```

