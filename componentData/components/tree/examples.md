## Tree 组件示例

### basic



```vue
<template>
  <fin-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>

<script lang="ts" setup>
interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>
```

### selectable

本例还展示了动态加载节点数据的方法。

```vue
<template>
  <fin-tree
    :props="props"
    :load="loadNode"
    lazy
    show-checkbox
    @check-change="handleCheckChange"
  />
</template>

<script lang="ts" setup>
import type Node from '@jdt/find-plus/es/components/tree/src/model/node'
let count = 1

interface Tree {
  name: string
}

const props = {
  label: 'name',
  children: 'zones',
}

const handleCheckChange = (
  data: Tree,
  checked: boolean,
  indeterminate: boolean
) => {
  console.log(data, checked, indeterminate)
}

const loadNode = (node: Node, resolve: (data: Tree[]) => void) => {
  if (node.level === 0) {
    return resolve([{ name: 'Root1' }, { name: 'Root2' }])
  }
  if (node.level > 3) return resolve([])

  let hasChild = false
  if (node.data.name === 'region1') {
    hasChild = true
  } else if (node.data.name === 'region2') {
    hasChild = false
  } else {
    hasChild = Math.random() > 0.5
  }

  setTimeout(() => {
    let data: Tree[] = []
    if (hasChild) {
      data = [
        {
          name: `zone${count++}`,
        },
        {
          name: `zone${count++}`,
        },
      ]
    } else {
      data = []
    }

    resolve(data)
  }, 500)
}
</script>
```

### custom-leaf

由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点， 所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。 同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。

```vue
<template>
  <fin-tree :props="props" :load="loadNode" lazy show-checkbox />
</template>

<script lang="ts" setup>
import type Node from '@jdt/find-plus/es/components/tree/src/model/node'

interface Tree {
  name: string
  leaf?: boolean
}

const props = {
  label: 'name',
  children: 'zones',
  isLeaf: 'leaf',
}

const loadNode = (node: Node, resolve: (data: Tree[]) => void) => {
  if (node.level === 0) {
    return resolve([{ name: 'region' }])
  }
  if (node.level > 1) return resolve([])

  setTimeout(() => {
    const data: Tree[] = [
      {
        name: 'leaf',
        leaf: true,
      },
      {
        name: 'zone',
      },
    ]

    resolve(data)
  }, 500)
}
</script>
```

### disabled

在示例中，通过 disabled 设置禁用状态。 相应的复选框已禁用，不能点击。

```vue
<template>
  <fin-tree :data="data" :props="defaultProps" show-checkbox />
</template>

<script lang="ts" setup>
const defaultProps = {
  children: 'children',
  label: 'label',
  disabled: 'disabled',
}

const data = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 3,
        label: 'Level two 2-1',
        children: [
          {
            id: 4,
            label: 'Level three 3-1-1',
          },
          {
            id: 5,
            label: 'Level three 3-1-2',
            disabled: true,
          },
        ],
      },
      {
        id: 2,
        label: 'Level two 2-2',
        disabled: true,
        children: [
          {
            id: 6,
            label: 'Level three 3-2-1',
          },
          {
            id: 7,
            label: 'Level three 3-2-2',
            disabled: true,
          },
        ],
      },
    ],
  },
]
</script>
```

### default-state

分别通过 `default-expanded-keys` 和 `default-checked-keys` 设置默认展开和默认选中的节点。 需要注意的是，此时必须设置 `node-key`， 其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。

```vue
<template>
  <fin-tree
    :data="data"
    show-checkbox
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
    :props="defaultProps"
  />
</template>

<script lang="ts" setup>
const defaultProps = {
  children: 'children',
  label: 'label',
}
const data = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
]
</script>
```

### checking-tree

本例展示如何获取和设置选中节点。 获取和设置各有两种方式：通过 node 或通过 key。 如果需要通过 key 来获取或设置，则必须设置 `node-key`。

```vue
<template>
  <fin-tree
    ref="treeRef"
    :data="data"
    show-checkbox
    default-expand-all
    node-key="id"
    highlight-current
    :props="defaultProps"
  />

  <div class="buttons">
    <fin-button @click="getCheckedNodes">get by node</fin-button>
    <fin-button @click="getCheckedKeys">get by key</fin-button>
    <fin-button @click="setCheckedNodes">set by node</fin-button>
    <fin-button @click="setCheckedKeys">set by key</fin-button>
    <fin-button @click="resetChecked">reset</fin-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FinTree } from '@jdt/find-plus'
import type Node from '@jdt/find-plus/es/components/tree/src/model/node'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}

const treeRef = ref<InstanceType<typeof FinTree>>()

const getCheckedNodes = () => {
  console.log(treeRef.value!.getCheckedNodes(false, false))
}
const getCheckedKeys = () => {
  console.log(treeRef.value!.getCheckedKeys(false))
}
const setCheckedNodes = () => {
  treeRef.value!.setCheckedNodes(
    [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 9,
        label: 'Level three 1-1-1',
      },
    ] as Node[],
    false
  )
}
const setCheckedKeys = () => {
  treeRef.value!.setCheckedKeys([3], false)
}
const resetChecked = () => {
  treeRef.value!.setCheckedKeys([], false)
}

const defaultProps = {
  children: 'children',
  label: 'label',
}

const data: Tree[] = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
]
</script>
```

### customized-node

可以通过两种方法进行树节点内容的自定义：`render-content` 和 scoped slot。 使用 `render-content` 指定渲染函数，该函数返回需要的节点区内容即可。 渲染函数的用法请参考 Vue 文档。 使用 scoped slot 会传入两个参数 `node` 和 `data`，分别表示当前节点的 Node 对象和当前节点的数据。 注意：由于 JSFiddle 不支持 JSX 语法，所以 `render-content` 示例无法在那里运行。 但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。

```vue
<template>
  <div class="custom-tree-container">
    <p>Using render-content</p>
    <fin-tree
      :data="dataSource"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent"
    />
    <p>Using scoped slot</p>
    <fin-tree
      :data="dataSource"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <a @click="append(data)"> Append </a>
            <a style="margin-left: 8px" @click="remove(node, data)"> Delete </a>
          </span>
        </span>
      </template>
    </fin-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type Node from '@jdt/find-plus/es/components/tree/src/model/node'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}
let id = 1000

const append = (data: Tree) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}

const remove = (node: Node, data: Tree) => {
  const parent = node.parent
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

const renderContent = (
  h,
  {
    node,
    data,
    store,
  }: {
    node: Node
    data: Tree
    store: Node['store']
  }
) => {
  return h(
    'span',
    {
      class: 'custom-tree-node',
    },
    h('span', null, node.label),
    h(
      'span',
      null,
      h(
        'a',
        {
          onClick: () => append(data),
        },
        'Append '
      ),
      h(
        'a',
        {
          style: 'margin-left: 8px',
          onClick: () => remove(node, data),
        },
        'Delete'
      )
    )
  )
}

const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
])
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
```

### custom-node-class

使用 `props.class` 来建立节点的类名。

```vue
<template>
  <div class="custom-tree-node-container">
    <fin-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :props="{ class: customNodeClass }"
    />
  </div>
</template>

<script lang="ts" setup>
import type Node from '@jdt/find-plus/es/components/tree/src/model/node'

interface Tree {
  id: number
  label: string
  isPenultimate?: boolean
  children?: Tree[]
}

const customNodeClass = (data: Tree, node: Node) => {
  if (data.isPenultimate) {
    return 'is-penultimate'
  }
  return null
}

const data: Tree[] = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        isPenultimate: true,
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    isPenultimate: true,
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    isPenultimate: true,
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
]
</script>

<style>
.is-penultimate > .fin-tree-node__content {
  color: #626aef;
}

.fin-tree-node.is-expanded.is-penultimate > .fin-tree-node__children {
  display: flex;
  flex-direction: row;
}
.is-penultimate > .fin-tree-node__children > div {
  width: 25%;
}
</style>
```

### filtering

调用 Tree 实例对象的 `filter` 方法来过滤树节点。 方法的参数就是过滤关键字。 需要注意的是，此时需要设置 `filter-node-method` 属性，其值为过滤函数。

```vue
<template>
  <fin-input v-model="filterText" placeholder="Filter keyword" />

  <fin-tree
    ref="treeRef"
    class="filter-tree"
    :data="data"
    :props="defaultProps"
    default-expand-all
    :filter-node-method="filterNode"
  />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { FinTree } from '@jdt/find-plus'

interface Tree {
  [key: string]: any
}

const filterText = ref('')
const treeRef = ref<InstanceType<typeof FinTree>>()

const defaultProps = {
  children: 'children',
  label: 'label',
}

watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

const filterNode = (value: string, data: Tree) => {
  if (!value) return true
  return data.label.includes(value)
}

const data: Tree[] = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
]
</script>
```

### accordion



```vue
<template>
  <fin-tree
    :data="data"
    :props="defaultProps"
    accordion
    @node-click="handleNodeClick"
  />
</template>

<script lang="ts" setup>
interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>
```

### draggable



```vue
<template>
  <fin-tree
    :allow-drop="allowDrop"
    :allow-drag="allowDrag"
    :data="data"
    draggable
    default-expand-all
    node-key="id"
    @node-drag-start="handleDragStart"
    @node-drag-enter="handleDragEnter"
    @node-drag-leave="handleDragLeave"
    @node-drag-over="handleDragOver"
    @node-drag-end="handleDragEnd"
    @node-drop="handleDrop"
  />
</template>

<script lang="ts" setup>
import type Node from '@jdt/find-plus/es/components/tree/src/model/node'
import type { DragEvents } from '@jdt/find-plus/es/components/tree/src/model/useDragNode'
import type {
  AllowDropType,
  NodeDropType,
} from '@jdt/find-plus/es/components/tree/src/tree.type'

const handleDragStart = (node: Node, ev: DragEvents) => {
  console.log('drag start', node)
}
const handleDragEnter = (
  draggingNode: Node,
  dropNode: Node,
  ev: DragEvents
) => {
  console.log('tree drag enter:', dropNode.label)
}
const handleDragLeave = (
  draggingNode: Node,
  dropNode: Node,
  ev: DragEvents
) => {
  console.log('tree drag leave:', dropNode.label)
}
const handleDragOver = (draggingNode: Node, dropNode: Node, ev: DragEvents) => {
  console.log('tree drag over:', dropNode.label)
}
const handleDragEnd = (
  draggingNode: Node,
  dropNode: Node,
  dropType: NodeDropType,
  ev: DragEvents
) => {
  console.log('tree drag end:', dropNode && dropNode.label, dropType)
}
const handleDrop = (
  draggingNode: Node,
  dropNode: Node,
  dropType: NodeDropType,
  ev: DragEvents
) => {
  console.log('tree drop:', dropNode.label, dropType)
}
const allowDrop = (draggingNode: Node, dropNode: Node, type: AllowDropType) => {
  if (dropNode.data.label === 'Level two 3-1') {
    return type !== 'inner'
  } else {
    return true
  }
}
const allowDrag = (draggingNode: Node) => {
  return !draggingNode.data.label.includes('Level three 3-1-1')
}

const data = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
</script>
```

