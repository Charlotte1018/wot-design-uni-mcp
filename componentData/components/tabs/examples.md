## Tabs 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-tabs v-model="tab">
  <block v-for="item in 4" :key="item">
    <wd-tab :title="`标签${item}`">
      <view class="content">内容{{ item}}</view>
    </wd-tab>
  </block>
</wd-tabs>
</template>

<script lang="ts" setup>
const tab = ref<number>(0)
</script>

<style lang="scss">
.content {
  line-height: 120px;
  text-align: center;
}
</style>
```

### name 匹配

name 匹配

```vue
<template>
<wd-tabs v-model="tab">
  <block v-for="item in tabs" :key="item">
    <wd-tab :title="`${item}`" :name="item">
      <view class="content">内容{{ item }}</view>
    </wd-tab>
  </block>
</wd-tabs>
</template>

<script lang="ts" setup>
const tabs = ref(['这', '是', '一', '个', '例子'])
const tab = ref('例子')
</script>

<style lang="scss">
.content {
  line-height: 120px;
  text-align: center;
}
</style>
```

### 使用徽标<el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.4.0</el-tag>

使用徽标<el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.4.0</el-tag>

```vue
<template>
<wd-tabs v-model="tabWithBadge" @change="handleChange">
  <wd-tab v-for="(item, index) in tabsWithBadge" :key="index" :title="`${item.title}`" :badge-props="item.badgeProps">
    <view class="content">{{ item.title }}徽标</view>
  </wd-tab>
</wd-tabs>
</template>

<script lang="ts" setup>
const tabWithBadge = ref(0)
const tabsWithBadge = ref([
  {
    title: '普通数值',
    badgeProps: {
      modelValue: 10,
      right: '-8px'
    }
  },
  {
    title: '最大值',
    badgeProps: {
      modelValue: 100,
      max: 99,
      right: '-8px'
    }
  },
  {
    title: '点状',
    badgeProps: {
      isDot: true,
      right: '-8px',
      showZero: true
    }
  }
])
</script>
```

### 自动调整底部条宽度

自动调整底部条宽度

```vue
<template>
<wd-tabs v-model="tab" @change="handleChange" auto-line-width>
  <block v-for="item in tabs" :key="item">
    <wd-tab :title="`${item}`" :name="item">
      <view class="content">内容{{ tab }}</view>
    </wd-tab>
  </block>
</wd-tabs>
</template>

<script lang="ts" setup>
const tabs = ref(['Wot', 'Design', 'Uni'])
const tab = ref('Design')
</script>
```

### 粘性布局

粘性布局

```vue
<template>
<wd-tabs v-model="tab" sticky>
  <block v-for="item in 4" :key="item">
    <wd-tab :title="`标签${item}`">
      <view class="content">内容{{ item}}</view>
    </wd-tab>
  </block>
</wd-tabs>
</template>

<script lang="ts" setup>
</script>
```

### 禁用 Tab

禁用 Tab

```vue
<template>
<wd-tabs v-model="tab">
  <block v-for="item in 4" :key="item">
    <wd-tab :title="`标签${item}`" :disabled="item === 1">
      <view class="content">内容{{ item }}</view>
    </wd-tab>
  </block>
</wd-tabs>
</template>

<script lang="ts" setup>
</script>
```

### 点击事件

监听页签的点击事件.

```vue
<template>
<wd-tabs v-model="tab" @click="handleClick">
  <block v-for="item in 4" :key="item">
    <wd-tab :title="`标签${item}`">
      <view class="content">内容{{ item }}</view>
    </wd-tab>
  </block>
</wd-tabs>
</template>

<script lang="ts" setup>
</script>
```

### 手势滑动

手势滑动

```vue
<template>
<wd-tabs v-model="tab" swipeable>
  <block v-for="item in 4" :key="item">
    <wd-tab :title="`标签${item}`">
      <view class="content">内容{{ item }}</view>
    </wd-tab>
  </block>
</wd-tabs>
</template>

<script lang="ts" setup>
</script>
```

### 切换动画

切换动画

```vue
<template>
<wd-tabs v-model="tab" animated>
  <block v-for="item in 4" :key="item">
    <wd-tab :title="`标签${item}`">
      <view class="content">内容{{ item }}</view>
    </wd-tab>
  </block>
</wd-tabs>
</template>

<script lang="ts" setup>
</script>
```

### 左对齐超出即可滚动 <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.4.0</el-tag>

左对齐超出即可滚动 <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.4.0</el-tag>

```vue
<template>
<wd-tabs v-model="tab" slidable="always">
  <block v-for="item in 5" :key="item">
    <wd-tab :title="`超大标签${item}`">
      <view class="content">内容{{ item }}</view>
    </wd-tab>
  </block>
</wd-tabs>
</template>

<script lang="ts" setup>
</script>
```

### 在弹出框中使用

在弹出框中使用

```vue
<template>
<wd-button @click="handleClick">打开弹窗</wd-button>
<wd-popup v-model="showPopup" position="bottom" @after-enter="handlePopupShow" closable custom-style="height: 200px;padding: 0 24rpx;">
  <view class="title">在弹出框中使用</view>
  <wd-tabs v-model="tab" ref="tabsRef">
    <wd-tab v-for="item in tabs" :key="item" :title="`${item}`" :name="item">
      <view class="content">内容{{ tab }}</view>
    </wd-tab>
  </wd-tabs>
</wd-popup>
</template>

<script lang="ts" setup>
const tab = ref<number>(3)
const tabs = ref(['这', '是', '一', '个', '例子'])

const showPopup = ref(false) // 控制popup显示
const tabsRef = ref<TabsInstance>() // 获取分段器实例
/**
 * 点击按钮打开popup
 */
function handleOpenClick() {
  showPopup.value = true
}
/**
 * popup打开后更新分段器样式
 */
function handlePopupShow() {
  tabsRef.value?.updateLineStyle(false)
}
</script>

<style lang="scss">
.title {
  display: flex;
  font-size: 32rpx;
  align-items: center;
  justify-content: center;
  padding: 24rpx 0;
}
</style>
```

### Methods

对外暴露函数

| 事件名称        | 说明                                                                                                | 参数                                                                   | 最低版本 |
| --------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------- |
| setActive       | 设置激活项，参数分别为：`value` 激活值，`init` 是否已初始化 ，`setScroll` 是否设置 scroll-view 滚动 | `(value: number \| string, init: boolean, setScroll: boolean) => void` | -        |
| scrollIntoView  | 使选中项滚动到可视区域                                                                              | -                                                                      | -        |
| updateLineStyle | 更新激活项边框线样式，参数`animation`用于是否开启动画，默认开启                                     | `(animation: boolean) => void`                                         | -        |

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

