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

<style lang="scss">
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

禁用遮罩点击

```vue
<template>
<wd-popup v-model="show" position="bottom" :close-on-click-modal="false" closable custom-style="height: 200px;" @close="handleClose"></wd-popup>
</template>

<script lang="ts" setup>
</script>
```

### 禁用遮罩

禁用遮罩

```vue
<template>
<wd-popup v-model="show" position="bottom" :modal="false" closable custom-style="height: 200px;" @close="handleClose"></wd-popup>
</template>

<script lang="ts" setup>
</script>
```

### 开启底部安全区

开启底部安全区

```vue
<template>
<wd-popup v-model="show" position="bottom" :safe-area-inset-bottom="true" custom-style="height: 200px;" @close="handleClose"></wd-popup>
</template>

<script lang="ts" setup>
</script>
```

### root-portal

root-portal

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

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

