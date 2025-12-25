## Sticky 组件示例

### 基本用法

基本用法

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

<style lang="scss">
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

<style lang="scss">
.container{
    height: 150px;width: 100vw;
}
</style>
```

### Sticky 外部样式类

Sticky 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

### Sticky Box 外部样式类

Sticky Box 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

