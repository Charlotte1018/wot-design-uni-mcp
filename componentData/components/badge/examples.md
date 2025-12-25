## Badge 组件示例

### 基础用法

展示新消息数量。

```vue
<template>
<wd-badge modelValue="12">
  <wd-button size="small">评论</wd-button>
</wd-badge>

<wd-badge modelValue="12px">
  <wd-button size="small">评论</wd-button>
</wd-badge>
</template>

<script lang="ts" setup>
</script>
```

### 修改背景色

修改背景色

```vue
<template>
<wd-badge custom-class="badge" modelValue="3" bg-color="pink">
  <wd-button size="small">回复</wd-button>
</wd-badge>
<wd-badge custom-class="badge" modelValue="1" type="primary">
  <wd-button size="small">评论</wd-button>
</wd-badge>
<wd-badge custom-class="badge" modelValue="2" type="warning">
  <wd-button size="small">回复</wd-button>
</wd-badge>
<wd-badge custom-class="badge" modelValue="1" type="success">
  <wd-button size="small">评论</wd-button>
</wd-badge>
<wd-badge custom-class="badge" modelValue="2" type="info">
  <wd-button size="small">回复</wd-button>
</wd-badge>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
:deep(.badge) {
    margin: 0 30px 20px 0;
    display: inline-block;
}
</style>
```

### 最大值

可自定义最大值。

```vue
<template>
<wd-badge modelValue="200" max="99">
  <wd-button size="small">评论</wd-button>
</wd-badge>
<wd-badge modelValue="100" max="10">
  <wd-button size="small">回复</wd-button>
</wd-badge>
</template>

<script lang="ts" setup>
</script>
```

### 展示 0 值

展示 0 值

```vue
<template>
<wd-badge modelValue="0" max="99" show-zero>
  <wd-button size="small">评论</wd-button>
</wd-badge>
<wd-badge modelValue="0" max="10">
  <wd-button size="small">回复</wd-button>
</wd-badge>
</template>

<script lang="ts" setup>
</script>
```

### 自定义内容

可以显示数字以外的文本内容。

```vue
<template>
<wd-badge modelValue="new">
  <wd-button size="small">评论</wd-button>
</wd-badge>
<wd-badge modelValue="hot">
  <wd-button size="small">回复</wd-button>
</wd-badge>
</template>

<script lang="ts" setup>
</script>
```

### 点状标注

以红点的形式标注需要关注的内容。

```vue
<template>
<wd-badge is-dot>数据查询</wd-badge>
<wd-badge is-dot>
  <wd-button class="share-button" ></wd-button>
</wd-badge>
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

