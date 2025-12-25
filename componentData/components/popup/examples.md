## Popup 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-popup v-model="show" custom-style="border-radius:32rpx;" @close="handleClose">
  <text class="custom-txt">弹弹弹</text>
</wd-popup>
</template>

<script lang="ts" setup>
</script>

<style lang="css" scoped>
.custom-txt {
  color: black;
  width: 400rpx;
  height: 400rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40rpx;
  border-radius: 32rpx;
}
</style>
```

### 弹出位置

弹出位置

```vue
<template>
<wd-popup v-model="show" position="top" custom-style="height: 200px;" @close="handleClose"></wd-popup>
</template>

<script lang="ts" setup>
</script>
```

### 关闭按钮

关闭按钮

```vue
<template>
<wd-popup v-model="show" position="bottom" closable custom-style="height: 200px;" @close="handleClose"></wd-popup>
</template>

<script lang="ts" setup>
</script>
```

### 禁用遮罩点击

设置

```vue
<template>
<wd-popup v-model="show" position="bottom" :close-on-click-modal="false" closable custom-style="height: 200px;" @close="handleClose"></wd-popup>
</template>

<script lang="ts" setup>
</script>
```

### 禁用遮罩

设置

```vue
<template>
<wd-popup v-model="show" position="bottom" :modal="false" closable custom-style="height: 200px;" @close="handleClose"></wd-popup>
</template>

<script lang="ts" setup>
</script>
```

### 开启底部安全区

设置

```vue
<template>
<wd-popup v-model="show" position="bottom" :safe-area-inset-bottom="true" custom-style="height: 200px;" @close="handleClose"></wd-popup>
</template>

<script lang="ts" setup>
</script>
```

### root-portal

当使用

```vue
<template>
<wd-popup v-model="show" root-portal position="center" custom-style="height: 200px;" @close="handleClose">
  <text class="custom-txt">我被传送到了根节点中</text>
</wd-popup>
</template>

<script lang="ts" setup>
</script>
```

### 禁止滚动穿透

使用组件时，会发现内容部分滚动到底时，继续划动会导致底层页面的滚动，这就是滚动穿透。

```vue
<template>
<!-- page-meta 只能是页面内的第一个节点 -->
<page-meta :page-style="`overflow:${show ? 'hidden' : 'visible'};`"></page-meta>

<wd-popup v-model="show" lock-scroll position="bottom" :safe-area-inset-bottom="true" custom-style="height: 200px;" @close="handleClose"></wd-popup>
</template>

<script lang="ts" setup>
</script>
```

### attributes

Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|-----|-----|------|-------|-------|---------|
| v-model | 弹出层是否显示 | boolean | - | - | - |
| position | 弹出位置 | string | center / top / right / bottom / left | center | - |
| closable | 关闭按钮 | boolean | - | false | - |
| close-on-click-modal | 点击遮罩是否关闭 | boolean | - | true | - |
| duration | 动画持续时间 | number / boolean | - | 300(ms) | - |
| z-index | 设置层级 | number | - | 10 | - |
| custom-style | 自定义弹出层样式 | string | - | - | - |
| modal | 是否显示遮罩 | boolean | - | true | - |
| modal-style | 自定义modal蒙层样式 | string | - | - | - |
| hide-when-close | 是否当关闭时将弹出层隐藏(display: none) | boolean | - | true | - |
| lazy-render | 弹层内容懒渲染，触发展示时才渲染内容 | boolean | - | true | - |
| safe-area-inset-bottom | 弹出面板是否设置底部安全距离（iphone X 类型的机型） | boolean | - | false | - |
| transition | 动画类型，参见 wd-transition 组件的name | string | fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in | - | - |
| lock-scroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | boolean | - | true | 0.1.30 |
| root-portal | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 | boolean | - | false | 1.11.0 |

### events

Events

| 事件名称 | 说明 | 参数 | 最低版本 |
|---------|-----|-----|---------|
| close | 弹出层关闭时触发 | - | - |
| click-modal | 点击遮罩时触发 | - | - |
| before-enter | 进入前触发 | - | - |
| enter | 进入时触发 | - | - |
| after-enter | 进入后触发 | - | - |
| before-leave | 离开前触发 | - | - |
| leave | 离开时触发 | - | - |
| after-leave | 离开后触发| - | - |

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

