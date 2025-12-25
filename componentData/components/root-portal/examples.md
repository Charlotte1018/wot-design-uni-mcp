## RootPortal 组件示例

### 基本用法

使用

```vue
<template>
<wd-button type="primary" @click="show = true">显示弹窗</wd-button>
<wd-root-portal v-if="show">
  <view class="modal">
    <view class="modal-content">
      <text>这是一个全局弹窗</text>
      <wd-button @click="show = false">关闭</wd-button>
    </view>
  </view>
</wd-root-portal>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
</style>
```

### slots

Slots

| 名称    | 说明                         | 最低版本 |
| ------- | ---------------------------- | -------- |
| default | 默认插槽，用于渲染传送内容   | 1.11.0   |

