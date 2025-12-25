## ActionSheet 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-toast />
<wd-button @click="showActions">弹出菜单</wd-button>
<wd-action-sheet v-model="show" :actions="actions" @close="close" @select="select" />
</template>

<script lang="ts" setup>
const show = ref<boolean>(false)
const actions = ref([
  {
    name: '选项1'
  },
  {
    name: '选项2'
  },
  {
    name: '选项3',
    subname: '描述信息'
  }
])

function showActions() {
  show.value = true
}

function close() {
  show.value = false
}

const toast = useToast()

function select({ item, index }) {
  toast.show(`当前选中项: ${item.title}, 下标: ${index}`)
}
</script>
```

### 选项状态

可以设置 颜色、禁用、加载 等状态。

```vue
<template>
<wd-button @click="showActions">弹出菜单</wd-button>
<wd-action-sheet v-model="show" :actions="actions" @close="close" />
</template>

<script lang="ts" setup>
const show = ref<boolean>(false)
const actions = ref([
  {
    name: '颜色',
    color: '#0083ff'
  },
  {
    name: '禁用',
    disabled: true
  },
  {
    loading: true
  }
])
function showActions() {
  show.value = true
}

function close() {
  show.value = false
}
</script>
```

### 取消按钮

取消按钮

```vue
<template>
<wd-action-sheet v-model="show" :actions="actions" @close="close" cancel-text="取消" />
</template>

<script lang="ts" setup>
</script>
```

### 自定义单行面板

自定义单行面板

```vue
<template>
<wd-button @click="showActions">弹出菜单</wd-button>
<wd-action-sheet v-model="show" :panels="panels" @close="close" @select="select" />

<wd-button @click="showActions">弹出菜单</wd-button>
<wd-action-sheet v-model="show" :panels="panels" @close="close" @select="select" />
</template>

<script lang="ts" setup>
const show = ref<boolean>(false)
const panels = ref([
  {
    iconUrl: '//img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
    title: '微信好友'
  }
])
function showActions() {
  show.value = true
}

function close() {
  show.value = false
}
const toast = useToast()

function select({ item, index }) {
  toast.show(`当前选中项: ${item.title}, 下标: ${index}`)
}

const show = ref<boolean>(false)
const panels = ref([
  [
    {
      iconUrl: '//img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
      title: '微信好友'
    }
  ],
  [
    {
      iconUrl: '//img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
      title: '微信好友'
    }
  ]
])

function showActions() {
  show.value = true
}

function close() {
  show.value = false
}
const toast = useToast()

function select({ item, index }) {
  toast.show(`当前选中项: ${item.title}, 下标: ${index}`)
}
</script>
```

### 标题

标题

```vue
<template>
<wd-action-sheet v-model="show" title="标题" @close="close">
  <view style="padding: 15px 15px 150px 15px;">内容</view>
</wd-action-sheet>
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名                | 说明            | 最低版本 |
| ------------------- | --------------- | -------- |
| custom-class        | 根节点样式      | -        |
| custom-header-class | header 头部样式 | -        |

