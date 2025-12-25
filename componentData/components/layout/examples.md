## Layout 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-row>
  <wd-col :span="24"><view class="bg-dark1">span: 24</view></wd-col>
</wd-row>
<wd-row>
  <wd-col :span="12"><view class="bg-dark">span: 12</view></wd-col>
  <wd-col :span="12"><view class="bg-light">span: 12</view></wd-col>
</wd-row>
<wd-row>
  <wd-col :span="8"><view class="bg-dark">span: 8</view></wd-col>
  <wd-col :span="8"><view class="bg-light">span: 8</view></wd-col>
  <wd-col :span="8"><view class="bg-dark">span: 8</view></wd-col>
</wd-row>
<wd-row>
  <wd-col :span="6"><view class="bg-dark">span: 6</view></wd-col>
  <wd-col :span="6"><view class="bg-light">span: 6</view></wd-col>
  <wd-col :span="6"><view class="bg-dark">span: 6</view></wd-col>
  <wd-col :span="6"><view class="bg-light">span: 6</view></wd-col>
</wd-row>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.bg-dark1,
.bg-dark,
.bg-light{
  border-radius: 4px;
  min-height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.45);
}
.bg-dark1 {
  background: #99a9bf;
  color: #fff;
}
.bg-dark {
  background: #d3dce6;
}
.bg-light {
  background: #e5e9f2;
}
</style>
```

### 分栏偏移

分栏偏移

```vue
<template>
<wd-row>
  <wd-col :span="4"><view class="bg-dark">span: 4</view></wd-col>
  <wd-col :span="8" :offset="4"><view class="bg-light">span: 8 offset: 4</view></wd-col>
</wd-row>
<wd-row>
  <wd-col :span="8" :offset="4"><view class="bg-dark">span: 8 offset: 4</view></wd-col>
  <wd-col :span="8" :offset="4"><view class="bg-dark">span: 8 offset: 4</view></wd-col>
</wd-row>
</template>

<script lang="ts" setup>
</script>
```

### 分栏间隔

分栏间隔

```vue
<template>
<wd-row gutter="20">
  <wd-col :span="8"><view class="bg-dark">span: 8</view></wd-col>
  <wd-col :span="8"><view class="bg-light">span: 8</view></wd-col>
  <wd-col :span="8"><view class="bg-dark">span: 8</view></wd-col>
</wd-row>
</template>

<script lang="ts" setup>
</script>
```

### Row 外部样式类

Row 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | Row 根节点样式 | - |

### Col 外部样式类

Col 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | Col 根节点样式 | - |

