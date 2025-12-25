## Overlay 组件示例

### 基础用法

基础用法

```vue
<template>
<wd-button type="primary" @click="show = true">显示遮罩层</wd-button>
<wd-overlay :show="show" @click="show = false" />
</template>

<script lang="ts" setup>
</script>
```

### 嵌入内容

嵌入内容

```vue
<template>
<wd-button type="primary" @click="show = true">嵌入内容</wd-button>
<wd-overlay :show="show" @click="show = false">
  <view class="wrapper">
    <view class="block" @click.stop="" />
  </view>
</wd-overlay>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
```

