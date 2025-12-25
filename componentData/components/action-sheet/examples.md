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

设置 颜色、禁用、加载 等状态。

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

自定义单行面板时，

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

### attributes

Attributes

| 参数                   | 说明                                                                          | 类型    | 可选值 | 默认值  | 最低版本 |
| ---------------------- | ----------------------------------------------------------------------------- | ------- | ------ | ------- | -------- |
| v-model                | 设置菜单显示隐藏                                                              | boolean | -      | -       | -        |
| actions                | 菜单选项                                                                      | array   | -      | []      | -        |
| panels                 | 自定义面板项,可以为字符串数组，也可以为对象数组，如果为二维数组，则为多行展示 | array   | -      | []      | -        |
| title                  | 标题                                                                          | string  | -      | -       | -        |
| cancel-text            | 取消按钮文案                                                                  | string  | -      | -       | -        |
| close-on-click-action  | 点击选项后是否关闭菜单                                                        | boolean | -      | true    | -        |
| close-on-click-modal   | 点击遮罩是否关闭                                                              | boolean | -      | true    | -        |
| duration               | 动画持续时间                                                                  | number  | -      | 200(ms) | -        |
| z-index                | 菜单层级                                                                      | number  | -      | 10      | -        |
| lazy-render            | 弹层内容懒渲染，触发展示时才渲染内容                                          | boolean | -      | true    | -    |
| safe-area-inset-bottom | 弹出面板是否设置底部安全距离（iphone X 类型的机型）                           | boolean | -      | true    | -    |

### events

Events

| 事件名称   | 说明                     | 参数                                                                                                                                              | 最低版本 |
| ---------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| select     | 点击选项时触发           | 菜单选项或自定义面板一维数组 （item: 选项对象, index: 选项下标），自定义面板二维数组（item: 选项对象, rowIndex: 选项行下标, colIndex 选项列下标） | -        |
| open       | 弹出层打开时触发         | -                                                                                                                                                 | -        |
| opened     | 弹出层打开动画结束时触发 | -                                                                                                                                                 | -        |
| close      | 弹出层关闭时触发         | -                                                                                                                                                 | -        |
| closed     | 弹出层关闭动画结束时触发 | -                                                                                                                                                 | -        |
| click-modal | 点击遮罩时触发           | -                                                                                                                                                 | -        |
| cancel     | 点击取消按钮时触发       | -                                                                                                                                                 | -        |

### 外部样式类

外部样式类

| 类名                | 说明            | 最低版本 |
| ------------------- | --------------- | -------- |
| custom-class        | 根节点样式      | -        |
| custom-header-class | header 头部样式 | -        |

