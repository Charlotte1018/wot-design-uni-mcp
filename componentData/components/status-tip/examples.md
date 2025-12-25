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

需要自定义图片时，可以在

```vue
<template>
<wd-status-tip image="https://wot-ui.cn/assets/panda.jpg" tip="查看我的头像" />
</template>

<script lang="ts" setup>
</script>
```

### 自定义图片内容

使用插槽

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

使用插槽

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

<style lang="css" scoped>
.bottom-actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
```

### attributes

Attributes

| 参数       | 说明                                               | 类型                          | 可选值                                                          | 默认值                                                        | 最低版本         |
| ---------- | -------------------------------------------------- | ----------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------- | ---------------- |
| image      | 缺省图片类型，支持传入图片 URL                     | string                        | search / network / content / collect / comment / halo / message | network                                                       | -                |
| image-size | 图片大小，默认单位为 `px`                          | `string`/`number`/`ImageSize` | -                                                               | -                                                             | -                |
| tip        | 提示文案                                           | string                        | -                                                               | -                                                             | -                |
| image-mode | 预览图片的 mode 属性                               | `ImageMode`                   | -                                                               | aspectFit                                                     | 1.2.12           |
| url-prefix | 图片路径前缀，指向图片所在目录，用于拼接图片 URL。 | string                        | -                                                               | https://registry.npmmirror.com/wot-design-uni-assets/*/files/ | 1.3.11 |

### ImageSize

| 参数   | 说明                      | 类型             | 可选值 | 默认值 | 最低版本 |
| ------ | ------------------------- | ---------------- | ------ | ------ | -------- |
| height | 图片高度，默认单位为 `px` | string / number | -      | -      | 1.2.12   |
| width  | 图片宽度，默认单位为 `px` | string / number | -      | -      | 1.2.12   |

