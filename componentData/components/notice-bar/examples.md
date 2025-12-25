## NoticeBar 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-notice-bar text="这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息" prefix="warn-bold" />
</template>

<script lang="ts" setup>
</script>
```

### 类型修改

类型修改

```vue
<template>
<wd-notice-bar text="这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息" prefix="warn-bold" custom-class="space" />
<wd-notice-bar text="这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息" prefix="check-outline" type="info" custom-class="space" />
<wd-notice-bar text="这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息" prefix="wifi-error" type="danger" />
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
:deep(.space) {
  margin-bottom: 10px;
}
</style>
```

### 插槽演示

插槽演示

```vue
<template>
<wd-notice-bar>
  <template #prefix>
    <wd-icon class="prefix" name="warn-bold">占位符</wd-icon>
  </template>
  通知被禁或时段内消息屏蔽可能造成消…
  <template #suffix>
    <div style="color: #4d80f0">查看</div>
  </template>
</wd-notice-bar>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
:deep(.prefix) {
  font-size: 18px;
  padding-right: 4px;
  width: 18px;
  height: 18px;
}
</style>
```

### 多行展示

多行展示

```vue
<template>
<wd-notice-bar text="这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息" wrapable :scrollable="false" />
</template>

<script lang="ts" setup>
</script>
```

### 可关闭的

可关闭的

```vue
<template>
<wd-notice-bar text="这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息" closable />
</template>

<script lang="ts" setup>
</script>
```

### 自定义颜色

自定义颜色

```vue
<template>
<wd-notice-bar
  text="这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息"
  prefix="check-outline"
  closable
  color="#34D19D"
  background-color="#f0f9eb"
/>
</template>

<script lang="ts" setup>
</script>
```

### 多文本轮播

一个

```vue
<template>
<wd-notice-bar :text="textArray" prefix="check-outline" @next="onNext" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const textArray = ref([
  '欢迎使用wot design uni',
  '该组件库基于uniapp ->Vue3, ts构建',
  '项目地址：https://github.com/Moonofweisheng/wot-design-uni',
  '我们的目标是打造最强uniapp组件库',
  '诚挚邀请大家共同建设',
  '这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息'
])

const onNext = (index: number) => {
  console.log('展示下一条，index: ', index)
  console.log('文本是：' + textArray.value[index])
}
</script>
```

### 垂直滚动

1.

```vue
<template>
<wd-notice-bar prefix="warn-bold" direction="vertical" :text="textArray" :delay="3" custom-class="space" />
<wd-notice-bar prefix="warn-bold" direction="vertical" text="只有一条消息不会滚动" :delay="3" custom-class="space" />
</template>

<script lang="ts" setup>
</script>
```

### 重置播放动画el-tagtextstylevertical-alignmiddlemargin-left8pxeffectplain1313el-tag

重置播放动画 <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.3.13</el-tag>

```vue
<template>
<wd-notice-bar ref="notice" prefix="warn-bold" direction="vertical" :text="textArray" :delay="3" />
<wd-button @click="handleReset">重置播放动画</wd-button>
</template>

<script lang="ts" setup>
// uni_modules
import { type NoticeBarInstance } from '@/uni_modules/wot-design-uni/components/wd-notice-bar/types'
// npm
// import { type NoticeBarInstance } from 'wot-design-uni/components/wd-notice-bar/types'

const notice = ref<NoticeBarInstance>()

const textArray = ref([
  '欢迎使用wot design uni',
  '该组件库基于uniapp ->Vue3, ts构建',
  '项目地址：https://github.com/Moonofweisheng/wot-design-uni',
  '我们的目标是打造最强uniapp组件库',
  '诚挚邀请大家共同建设',
  '这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息'
])

function handleReset() {
  notice.value?.reset()
}
</script>
```

### attributes

Attributes

| 参数             | 说明                                   | 类型                       | 可选值                  | 默认值       | 最低版本 |
| ---------------- | -------------------------------------- | -------------------------- | ----------------------- | ------------ | -------- |
| text             | 设置通知栏文案                         | `string` `string[]`        | -                       | -            | -        |
| type             | 设置通知栏类型                         | `string`                   | info / warning / danger | warning      | -        |
| prefix           | 设置左侧图标，使用 icon 章节中的图标名 | `string`                   | -                       | -            | -        |
| scrollable       | 是否可以滚动                           | `boolean`                  | -                       | true         | -        |
| delay            | 滚动动画初始延时，单位 秒(s)           | `number`                   | -                       | 1            | -        |
| speed            | 滚动速度，单位 px/s                    | `number`                   | -                       | 50           | -        |
| closable         | 是否可以关闭                           | `boolean`                  | -                       | false        | -        |
| wrapable         | 是否换行展示                           | `boolean`                  | -                       | false        | -        |
| color            | 文字、图标颜色                         | `string`                   | -                       | -            | -        |
| background-color | 背景颜色                               | `string`                   | -                       | -            | -        |
| direction        | 滚动方向                               | `NoticeBarScrollDirection` | `horizontal` `vertical` | `horizontal` | -        |

### events

Events

| 事件名称 | 说明             | 参数                                                                           | 最低版本 |
| -------- | ---------------- | ------------------------------------------------------------------------------ | -------- |
| close    | 关闭按钮点击时   | -                                                                              | -        |
| next     | 下一次滚动前触发 | index: `number`                                                                | -        |
| click    | 点击时触发       | `{ text: string, index: number }`，其中`text`为当前文本，`index`为当前文本索引 | 1.2.16   |

### methods

Methods

| 方法名称 | 说明 | 参数 | 最低版本 |
|---------|-----|-----|---------|
| reset | 用于重置播放动画| - | 1.3.13 |

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

