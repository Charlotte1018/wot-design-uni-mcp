## Search 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-search v-model="value" @focus="focus" @blur="blur" @search="search" @clear="clear" @cancel="cancel" @change="change" maxlength="10" />
</template>

<script lang="ts" setup>
const value = ref<string>('')

function focus() {
  console.log('聚焦')
}
function blur() {
  console.log('失焦')
}
function search() {
  console.log('搜索')
}
function clear() {
  console.log('重置')
}
function cancel() {
  console.log('取消')
}
function change({ value }) {
  console.log('输入', value)
}
</script>
```

### 浅色主题

浅色主题

```vue
<template>
<wd-search light />
</template>

<script lang="ts" setup>
</script>
```

### 输入框提示文案靠左

输入框提示文案靠左

```vue
<template>
<wd-search placeholder-left />
</template>

<script lang="ts" setup>
</script>
```

### 隐藏取消按钮

隐藏取消按钮

```vue
<template>
<wd-search hide-cancel />
</template>

<script lang="ts" setup>
</script>
```

### 禁用

禁用

```vue
<template>
<wd-search disabled />

<wd-search hide-cancel disabled />
</template>

<script lang="ts" setup>
</script>
```

### 自定义左侧插槽

自定义左侧插槽

```vue
<template>
<wd-search v-model="value">
  <template #prefix>
    <wd-popover mode="menu" :content="menu" @menuclick="changeSearchType">
      <view class="search-type">
        <text>{{ searchType }}</text>
        <wd-icon custom-class="icon-arrow" name="fill-arrow-down"></wd-icon>
      </view>
    </wd-popover>
  </template>
</wd-search>
</template>

<script lang="ts" setup>
const searchType = ref<string>('全部')
const value = ref<string>('')
const menu = ref([
  {
    content: '全部'
  },
  {
    content: '订单号'
  },
  {
    content: '退款单号'
  }
])

function changeSearchType({ item, index }) {
  searchType.value = item.content
}
</script>

<style lang="scss">
.search-type {
  position: relative;
  height: 30px;
  line-height: 30px;
  padding: 0 8px 0 16px;
}
.search-type::after {
  position: absolute;
  content: '';
  width: 1px;
  right: 0;
  top: 5px;
  bottom: 5px;
  background: rgba(0, 0, 0, 0.25);
}
.search-type {
  :deep(.icon-arrow) {
    display: inline-block;
    font-size: 20px;
    vertical-align: middle;
  }
}
</style>
```

### 自定义文案

自定义文案

```vue
<template>
<wd-search placeholder="请输入订单号/订单名称" cancel-txt="搜索" />
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
| custom-input-class | input 外部自定义样式 | 1.6.0 |

