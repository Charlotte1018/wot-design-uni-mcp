## Button 组件示例

### 基本用法

基本按钮。

```vue
<template>
<wd-button>主要按钮</wd-button>
<wd-button type="success">成功按钮</wd-button>
<wd-button type="info">信息按钮</wd-button>
<wd-button type="warning">警告按钮</wd-button>
<wd-button type="error">危险按钮</wd-button>
</template>

<script lang="ts" setup>
</script>
```

### 禁用

禁用

```vue
<template>
<wd-button disabled>默认按钮</wd-button>
</template>

<script lang="ts" setup>
</script>
```

### 幽灵按钮

幽灵按钮

```vue
<template>
<wd-button plain>主要按钮</wd-button>
</template>

<script lang="ts" setup>
</script>
```

### 细边框幽灵按钮

细边框幽灵按钮

```vue
<template>
<wd-button plain hairline>主要按钮</wd-button>
</template>

<script lang="ts" setup>
</script>
```

### 按钮大小

按钮大小

```vue
<template>
<wd-button size="small">小号按钮</wd-button>
<wd-button size="medium">中号按钮</wd-button>
<wd-button size="large">大号按钮</wd-button>
</template>

<script lang="ts" setup>
</script>
```

### 加载中按钮

加载中按钮

```vue
<template>
<wd-button loading>加载中</wd-button>
</template>

<script lang="ts" setup>
</script>
```

### 文字按钮

文字按钮

```vue
<template>
<wd-button type="text">文字按钮</wd-button>
</template>

<script lang="ts" setup>
</script>
```

### 图标按钮

图标按钮

```vue
<template>
<wd-button type="icon" icon="picture"></wd-button>
</template>

<script lang="ts" setup>
</script>
```

### 带图标的按钮

带图标的按钮

```vue
<template>
<wd-button icon="edit-outline"></wd-button>

<wd-button classPrefix="fish" icon="kehuishouwu">可回收</wd-button>
</template>

<script lang="ts" setup>
</script>
```

### 块状按钮

块状按钮

```vue
<template>
<wd-button block>主要按钮</wd-button>
</template>

<script lang="ts" setup>
</script>
```

### 自定义样式

自定义样式

```vue
<template>
<view class="page-class">
  <wd-button custom-class="custom-shadow">主要按钮</wd-button>
  <wd-button type="success" custom-class="custom-shadow">成功按钮</wd-button>
  <wd-button type="info" custom-class="custom-shadow">信息按钮</wd-button>
  <wd-button type="warning" custom-class="custom-shadow">警告按钮</wd-button>
  <wd-button type="error" custom-class="custom-shadow">危险按钮</wd-button>
</view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.page-class {
  :deep() {
    .custom-shadow {
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    }
  }
}
</style>
```

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

