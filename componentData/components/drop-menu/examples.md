## DropMenu 组件示例

### 基础用法

基础用法需要绑定

```vue
<template>
<view @click="closeOutside">
  <wd-drop-menu>
    <wd-drop-menu-item v-model="value1" :options="option1" @change="handleChange1" />
    <wd-drop-menu-item v-model="value2" :options="option2" @change="handleChange2" />
  </wd-drop-menu>
</view>
</template>

<script lang="ts" setup>
import { useQueue } from '@/uni_modules/wot-design-uni'

const { closeOutside } = useQueue()
const value1 = ref<number>(0)
const value2 = ref<number>(0)

const option1 = ref<Record<string, any>[]>([
  { label: '全部商品', value: 0 },
  { label: '新款商品', value: 1 },
  { label: '活动商品', value: 2 }
])
const option2 = ref<Record<string, any>[]>([
  { label: '综合', value: 0 },
  { label: '销量', value: 1 },
  { label: '上架时间', value: 2 }
])

function handleChange1({ value }) {
  console.log(value)
}
function handleChange2({ value }) {
  console.log(value)
}
</script>
```

### 自定义菜单内容

插槽

```vue
<template>
<wd-drop-menu>
  <wd-drop-menu-item v-model="value" :options="option" @change="handleChange" />
  <wd-drop-menu-item title="筛选" ref="dropMenu" @opened="handleOpened">
    <view>
      <wd-slider v-model="sliderValue" ref="slider" />
      <wd-cell title="标题文字" value="内容" />
      <wd-cell title="标题文字" label="描述信息" value="内容" />
      <wd-button block size="large" suck @click="confirm">主要按钮</wd-button>
    </view>
  </wd-drop-menu-item>
</wd-drop-menu>
</template>

<script lang="ts" setup>
const dropMenu = ref()
const slider = ref<SliderInstance>() // slider 1.2.25支持

const value = ref<number>(0)
const sliderValue = ref<number>(30)
const option = ref<Record<string, any>[]>([
  { label: '全部商品', value: 0 },
  { label: '新款商品', value: 1 },
  { label: '活动商品', value: 2 }
])
function handleChange({ value }) {
  console.log(value)
}

function confirm() {
  dropMenu.value.close()
}

function handleOpened() {
  slider.value?.initSlider()
}
</script>
```

### 自定义菜单选项

自己通过 flex 布局做自定义筛选展示。

```vue
<template>
<view style="display: flex; background: #fff; text-align: center;">
  <wd-drop-menu style="flex: 1; min-width: 0;">
    <wd-drop-menu-item v-model="value1" :options="option" @change="handleChange1" />
  </wd-drop-menu>
  <view style="flex: 1;">
    <wd-sort-button v-model="value2" title="上架时间" @change="handleChange2" />
  </view>
</view>
</template>

<script lang="ts" setup>
</script>
```

### 自定义菜单图标el-tagtextstylevertical-alignmiddlemargin-left8pxeffectplain137el-tag

通过

```vue
<template>
<wd-drop-menu>
  <wd-drop-menu-item title="地图" icon="location" icon-size="14px" />
</wd-drop-menu>
</template>

<script lang="ts" setup>
</script>
```

### 异步打开关闭el-tagtextstylevertical-alignmiddlemargin-left8pxeffectplain137el-tag

异步打开/关闭<el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.3.7</el-tag>

```vue
<template>
<wd-message-box></wd-message-box>
<wd-drop-menu>
  <wd-drop-menu-item v-model="value" :options="option" :before-toggle="handleBeforeToggle" />
</wd-drop-menu>
</template>

<script lang="ts" setup>
import { useMessage } from '@/uni_modules/wot-design-uni'
import type { DropMenuItemBeforeToggle } from '@/uni_modules/wot-design-uni/components/wd-drop-menu-item/types'

const messageBox = useMessage()

const value = ref<number>(0)

const option = ref<Record<string, any>[]>([
  { label: '全部商品', value: 0 },
  { label: '新款商品', value: 1, tip: '这是补充信息' },
  { label: '这是比较长的筛选条件这是比较长的筛选条件', value: 2 }
])

// 通过对话框确认是否打开/关闭下拉菜单
const handleBeforeToggle: DropMenuItemBeforeToggle = ({ status, resolve }) => {
  messageBox
    .confirm({
      title: `${status ? '异步打开' : '异步关闭'}`,
      msg: `${status ? '确定要打开下拉菜单吗' : '确定要关闭下拉菜单吗'}`
    })
    .then(() => {
      resolve(true)
    })
    .catch(() => {
      resolve(false)
    })
}
</script>
```

### 向上展开

向上展开

```vue
<template>
<wd-drop-menu direction="up">
  <wd-drop-menu-item v-model="value1" :options="option1" @change="handleChange1" />
  <wd-drop-menu-item v-model="value2" :options="option2" @change="handleChange2" />
</wd-drop-menu>
</template>

<script lang="ts" setup>
</script>
```

### 禁用菜单

禁用菜单

```vue
<template>
<wd-drop-menu>
  <wd-drop-menu-item v-model="value1" disabled :options="option2" @change="handleChange1" />
  <wd-drop-menu-item v-model="value2" :options="option1" @change="handleChange2" />
</wd-drop-menu>
</template>

<script lang="ts" setup>
</script>
```

### dropmenu-attributes

DropMenu Attributes

| 参数                 | 说明                                 | 类型    | 可选值    | 默认值 | 最低版本 |
| -------------------- | ------------------------------------ | ------- | --------- | ------ | -------- |
| direction            | 菜单展开方向，可选值为`up` 或 `down` | string  | up / down | down   | -        |
| modal                | 是否展示蒙层                         | boolean | -         | true   | -        |
| close-on-click-modal | 是否点击蒙层时关闭                   | boolean | -         | true   | -        |
| duration             | 菜单展开收起动画时间，单位 ms        | number  | -         | 200    | -        |

### dropmenuitem-attributes

DropMenuItem Attributes

| 参数          | 说明                                                                   | 类型                          | 可选值 | 默认值     | 最低版本 |
| ------------- | ---------------------------------------------------------------------- | ----------------------------- | ------ | ---------- | -------- |
| v-model       | 当前选中项对应选中的 value                                             | string / number               | -      | -          | -        |
| disabled      | 禁用菜单                                                               | boolean                       | -      | false      | -        |
| options       | 列表数据，对应数据结构 `[{label: '标题', value: '0', tip: '提示文字'}]` | array                         | -      | -          | -        |
| icon-name     | 选中的图标名称(可选名称在 wd-icon 组件中)                              | string                        | -      | check      | -        |
| title         | 菜单标题                                                               | string                        | -      | -          | -        |
| icon          | 菜单图标                                                               | string                        | -      | arrow-down | -        |
| icon-size     | 菜单图标尺寸                                                           | string                        | -      | 14px       | \_       |
| before-toggle | 下拉菜单打开或者关闭前触发，`reslove(true)`时继续执行打开或关闭操作    | function({ status, resolve }) | -      | -          | 1.3.7    |
| value-key     | 选项对象中，value 对应的 key                                           | string                        | -      | value      | -        |
| label-key     | 选项对象中，展示的文本对应的 key                                       | string                        | -      | label      | -        |
| tip-key       | 选项对象中，选项说明对应的 key                                         | string                        | -      | tip        | -        |
| popup-height  | popup弹出容器的高度，不设置默认为80%                                       | string                        | -      | -        | 1.13.0 |
| root-portal    | 是否从页面中脱离出来，用于解决各种 fixed 失效问题                     | boolean                       | -      | false      | 1.11.0 |

### dropdownitem-events

DropdownItem Events

| 方法名 | 说明             | 参数                                                                          | 最低版本 |
| ------ | ---------------- | ----------------------------------------------------------------------------- | -------- |
| change | 绑定值变化时触发 | event.detail = { value, selectedItem }, value 为选中值，selectedItem 为选中项 | -        |
| close  | 关闭菜单         | -                                                                             | -        |
| open   | 展开菜单         | -                                                                             | -        |
| closed | 菜单完全关闭     | -                                                                             | -        |
| opened | 菜单展开完成     | -                                                                             | -        |

### dropdownitem-methods

通过设置

| 方法名 | 说明     | 参数 | 返回值 | 最低版本 |
| ------ | -------- | ---- | ------ | -------- |
| close  | 关闭菜单 | -    | -      | -        |
| open   | 展开菜单 | -    | -      | -        |

### DropMenu外部样式类

DropMenu 外部样式类

| 类名         | 说明                | 最低版本 |
| ------------ | ------------------- | -------- |
| custom-class | DropMenu 根节点样式 | -        |

### DropMenuItem外部样式类

DropMenuItem 外部样式类

| 类名               | 说明                        | 最低版本         |
| ------------------ | --------------------------- | ---------------- |
| custom-class       | DropMenuItem 根节点样式     | -                |
| custom-title       | DropMenuItem 左侧文字样式   | -                |
| custom-icon        | DropMenuItem 右侧 icon 样式 | -                |
| custom-popup-class | 自定义下拉菜单 popup 样式类 | 1.5.0 |
| custom-popup-style | 自定义下拉菜单 popup 样式   | 1.5.0 |

