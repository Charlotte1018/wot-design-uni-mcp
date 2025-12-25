## Grid 组件示例

### 基础用法

基础用法

```vue
<template>
<wd-grid clickable>
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
</wd-grid>
</template>

<script lang="ts" setup>
</script>
```

### 自定义列数

自定义列数

```vue
<template>
<wd-grid :column="3">
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
</wd-grid>
</template>

<script lang="ts" setup>
</script>
```

### 自定义背景颜色

自定义背景颜色

```vue
<template>
<wd-grid bg-color="rgba(0, 0, 0, 0.02)">
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
</wd-grid>
</template>

<script lang="ts" setup>
</script>
```

### 开启边框

开启边框

```vue
<template>
<wd-grid border :column="3">
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
</wd-grid>
</template>

<script lang="ts" setup>
</script>
```

### 内容插槽

内容插槽

```vue
<template>
<wd-grid>
  <wd-grid-item>
    <image class="img" :src="joy" />
  </wd-grid-item>
  <wd-grid-item>
    <image class="img" :src="joy" />
  </wd-grid-item>
  <wd-grid-item>
    <image class="img" :src="joy" />
  </wd-grid-item>
</wd-grid>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.img {
  width: 100%;
  height: 90px;
}
</style>
```

### 单个插槽

单个插槽

```vue
<template>
<wd-grid>
  <wd-grid-item text="文字" v-for="index in 3" :key="index" icon-size="36px">
    <template #icon>
      <image class="slot-img" :src="joy" />
    </template>
  </wd-grid-item>
</wd-grid>
<wd-grid>
  <wd-grid-item icon="picture" v-for="index in 3" :key="index">
    <template #text>
      <view class="text">自定义文字插槽</view>
    </template>
  </wd-grid-item>
</wd-grid>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.slot-img {
  height: 36px;
  width: 36px;
  border-radius: 4px;
}
.text {
  color: #ffb300;
  margin-top: 8px;
}
</style>
```

### 自定义样式

自定义样式

```vue
<template>
<wd-grid>
  <wd-grid-item
    custom-class="custom-item"
    icon="search"
    text="京东JD.COM-专业的综合网上购物商城，销售超数万品牌、4020万种商品，囊括家电、手机、电脑、母婴、服装等13大品类。"
  />
  <wd-grid-item custom-class="custom-item" icon="person" text="秉承客户为先的理念，京东所售商品为正品行货、全国联保、机打发票。" />
</wd-grid>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
:deep(.custom-item) {
  height: 80px !important;
  color: #e2231a;
  padding-left: 20px;
  text-align: left !important;
}
</style>
```

### 正方形格子

正方形格子

```vue
<template>
<wd-grid square :column="3">
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
</wd-grid>
</template>

<script lang="ts" setup>
</script>
```

### 设定格间隙

设定格间隙

```vue
<template>
<wd-grid :gutter="10" :column="3">
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
  <wd-grid-item icon="picture" text="文字" />
</wd-grid>
</template>

<script lang="ts" setup>
</script>
```

### 页面导航

页面导航

```vue
<template>
<wd-grid clickable>
  <wd-grid-item link-type="redirectTo" url="/pages/button/index" @itemclick="click" icon="search" text="Redirect to ..." />
  <wd-grid-item link-type="navigateTo" url="/pages/button/index" @itemclick="click" icon="setting" text="Navigate to ..." />
</wd-grid>
</template>

<script lang="ts" setup>
</script>
```

### 提示信息

提示信息

```vue
<template>
<wd-grid>
  <wd-grid-item is-dot icon="goods" text="文字" />
  <wd-grid-item value="100" :max="99" icon="computer" text="文字" />
</wd-grid>
</template>

<script lang="ts" setup>
</script>
```

### Grid 外部样式类

Grid 外部样式类

| 类名         | 说明            | 最低版本 |
| ------------ | --------------- | -------- |
| custom-class | Grid 根节点样式 | -        |

### GridItem 外部样式类

GridItem 外部样式类

| 类名         | 说明                    | 最低版本 |
| ------------ | ----------------------- | -------- |
| custom-class | GridItem 根节点样式     | -        |
| custom-text  | GridItem 下方文字样式   | -        |
| custom-icon  | GridItem 上方 icon 样式 | -        |

