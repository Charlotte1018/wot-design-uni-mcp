## Overlay 组件示例

### 基础用法

使用

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

<style lang="scss" scoped>
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

### attributes

Attributes

| 参数        | 说明               | 类型              | 可选值 | 默认值 | 最低版本 |
| ----------- | ------------------ | ----------------- | ------ | ------ | -------- |
| show        | 是否展示遮罩层     | `boolean`         | true   | false  | -        |
| duration    | 动画时长，单位毫秒 | `string / number` | -      | 300    | -        |
| lockScroll  | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | `boolean`         | false  | true   | -        |
| zIndex      | 层级               | `number`          | -      | 10     | -        |
| customStyle | 自定义样式         | `string`          | -      | -      | -        |

