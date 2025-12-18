## TreeV2 组件示例

### basic



```vue
<template>
  <fin-tree-v2 :data="data" :props="props" :height="208" />
</template>
<script lang="ts" setup>
interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'node'
): Tree[] => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber =
        deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined,
      }
    })
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
const data = createData(4, 30, 40)
</script>
```

### selectable



```vue
<template>
  <fin-tree-v2 :data="data" :props="props" show-checkbox :height="208" />
</template>
<script lang="ts" setup>
interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'node'
): Tree[] => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber =
        deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined,
      }
    })
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
const data = createData(4, 30, 40)
</script>
```

### disabled

在示例中，属性在 defaultProps 中声明了 `disabled`，一些节点被设置为 `disabled：true`。 相应的复选框已禁用，不能点击。

```vue
<template>
  <fin-tree-v2 :data="data" :props="props" show-checkbox :height="208" />
</template>
<script lang="ts" setup>
interface Tree {
  id: string
  label: string
  children?: Tree[]
  disabled: boolean
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'node'
): Tree[] => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber =
        deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined,
        disabled: nodeKey.includes('2'),
      }
    })
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
  disabled: 'disabled',
}
const data = createData(4, 30, 40)
</script>
```

### default-state

分别通过 `default-expanded-keys` 和 `default-checked-keys` 设置默认展开和默认选中的节点。

```vue
<template>
  <fin-tree-v2
    :data="data"
    :height="208"
    :props="props"
    show-checkbox
    :default-checked-keys="defaultCheckedKeys"
    :default-expanded-keys="defaultExpandedKeys"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'node'
): Tree[] => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber =
        deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined,
      }
    })
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
const data = createData(4, 30, 40)
const checkedKeys: string[] = []
const expanedKeys: string[] = []
for (const datum of data) {
  const children = datum.children
  if (children) {
    expanedKeys.push(datum.id)
    checkedKeys.push(children[0].id)
    break
  }
}

const defaultCheckedKeys = ref(checkedKeys)
const defaultExpandedKeys = ref(expanedKeys)
</script>
```

### custom-node



```vue
<template>
  <fin-tree-v2 :data="data" :props="props" :height="208">
    <template #default="{ node }">
      <span class="prefix" :class="{ 'is-leaf': node.isLeaf }">[FinDPlus]</span>
      <span>{{ node.label }}</span>
    </template>
  </fin-tree-v2>
</template>
<script lang="ts" setup>
interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'node'
): Tree[] => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber =
        deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined,
      }
    })
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
const data = createData(4, 30, 40)
</script>

<style scoped>
.prefix {
  color: var(--fin-color-primary);
  margin-right: 10px;
}
.prefix.is-leaf {
  color: var(--fin-color-success);
}
</style>
```

### filter

在需要对节点进行过滤时，调用 Tree 实例的 `filter` 方法， 参数为关键字。 需要注意的是，此时需要设置 `filter-method`，值为过滤函数。

```vue
<template>
  <fin-input
    v-model="query"
    placeholder="Please enter keyword"
    @input="onQueryChanged"
  />
  <fin-tree-v2
    ref="treeRef"
    :data="data"
    :props="props"
    :filter-method="filterMethod"
    :height="208"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { FinTreeV2 } from '@jdt/find-plus'
import type { TreeNode } from '@jdt/find-plus/es/components/tree-v2/src/types'

interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'node'
): Tree[] => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber =
        deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined,
      }
    })
}

const query = ref('')
const treeRef = ref<InstanceType<typeof FinTreeV2>>()
const data = createData(4, 30, 5)
const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}

const onQueryChanged = (query: string) => {
  // TODO: fix typing when refactor tree-v2
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  treeRef.value!.filter(query)
}
const filterMethod = (query: string, node: TreeNode) => {
  return node.label!.includes(query)
}
</script>
```

