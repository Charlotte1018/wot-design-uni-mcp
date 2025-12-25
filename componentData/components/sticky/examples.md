## Sticky 组件示例

### 基本用法

需要吸顶的内容包裹在

```vue
<template>
<wd-sticky>
  <wd-button type="success">基础用法</wd-button>
</wd-sticky>
</template>

<script lang="ts" setup>
</script>
```

### 动态插入

动态插入

```vue
<template>
<view style="margin-top: 20px;">
  <wd-button type="error" v-if="show">点击插入</wd-button>
  <wd-sticky>
    <wd-button type="success" v-if="show">动态插入</wd-button>
  </wd-sticky>
</view>
</template>

<script lang="ts" setup>
const show = ref<boolean>(false)

function display() {
  show.value = true
}

onShow(() => {
  setTimeout(display, 5000)
})
</script>

<style lang="scss" scoped>
page{
  height: 200vh;
}
</style>
```

### 吸顶距离

吸顶距离

```vue
<template>
<wd-sticky :offset-top="50">
  <wd-button>吸顶距离</wd-button>
</wd-sticky>
</template>

<script lang="ts" setup>
</script>
```

### 指定容器

指定容器

```vue
<template>
<wd-sticky-box>
  <view class="container">
    <wd-sticky>
      <wd-button type="warning">指定容器</wd-button>
    </wd-sticky>
  </view>
</wd-sticky-box>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.container{
    height: 150px;width: 100vw;
}
</style>
```

### sticky-attributes

Sticky Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|-----|------|-----|-------|-------|--------|
| z-index | 堆叠顺序 | number | - | 1 | - |
| offset-top | 吸顶距离 | number | - | 0 | - |

### Sticky外部样式类

Sticky 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

### StickyBox外部样式类

Sticky Box 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

