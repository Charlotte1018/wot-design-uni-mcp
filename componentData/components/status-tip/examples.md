## StatusTip 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-status-tip image="search" tip="当前搜索无结果" />
<wd-status-tip image="network" tip="该页面暂时无法访问" />
<wd-status-tip image="content" tip="暂无内容" />
<wd-status-tip image="collect" tip="暂无收藏" />
<wd-status-tip image="comment" tip="当前没有联系人名单哦～" />
<wd-status-tip image="halo" tip="支付失败，请重新订购" />
<wd-status-tip image="message" tip="已订阅全部消息" />
</template>

<script lang="ts" setup>
</script>
```

### 自定义大小

自定义大小

```vue
<template>
<wd-status-tip
  :image-size="{
          height: 200,
          width: 300
  }"
  image="search"
  tip="当前搜索无结果"
/>
</template>

<script lang="ts" setup>
</script>
```

### 自定义图片

自定义图片

```vue
<template>
<wd-status-tip image="https://wot-ui.cn/assets/panda.jpg" tip="查看我的头像" />
</template>

<script lang="ts" setup>
</script>
```

### 自定义图片内容

自定义图片内容

```vue
<template>
<wd-status-tip tip="自定义图片内容">
  <template #image>
    <wd-icon name="ie-filled" size="100px"></wd-icon>
  </template>
</wd-status-tip>
</template>

<script lang="ts" setup>
</script>
```

### 自定义底部内容

自定义底部内容

```vue
<template>
<wd-status-tip image="content" tip="当前搜索无结果">
  <template #bottom>
    <view class="bottom-actions">
      <wd-button type="info">重新加载</wd-button>
    </view>
  </template>
</wd-status-tip>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.bottom-actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
```

