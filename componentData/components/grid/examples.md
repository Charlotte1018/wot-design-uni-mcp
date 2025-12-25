## Grid 组件示例

### 基础用法

基础用法需要绑定

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

默认插槽可以自定义

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

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 90px;
}
</style>
```

### 单个插槽

插槽

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

<style lang="scss" scoped>
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

设置

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

<style lang="scss" scoped>
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

### grid-attributes

Grid Attributes

| 参数        | 说明                           | 类型    | 可选值 | 默认值                       | 最低版本         |
| ----------- | ------------------------------ | ------- | ------ | ---------------------------- | ---------------- |
| column      | 列数                           | number  | -      | -                            | -                |
| border      | 是否显示边框                   | boolean | -      | false                        | -                |
| gutter      | 格子之间的间距，默认单位为`px` | number  | -      | -                            | -                |
| square      | 是否将格子固定为正方形         | boolean | -      | false                        | -                |
| clickable   | 是否开启格子点击反馈           | boolean | -      | false                        | -                |
| bg-color    | 背景颜色设置                   | string  | -      | #ffffff                      | -                |
| hover-class | 指定grid-item按下去的样式类    | string  | -      | wd-grid-item__content--hover | 1.9.0 |

### griditem-attributes

GridItem Attributes

| 参数          | 说明                                                                                                                      | 类型           | 可选值                                      | 默认值 | 最低版本 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------- | ------ | -------- |
| text          | 文字 value                                                                                                                | string         | -                                           | -      | -        |
| icon          | 图标名称，可选值见 `wd-icon` 组件                                                                                         | string         | -                                           | -      | -        |
| is-dot        | 是否显示图标右上角小红点                                                                                                  | boolean        | -                                           | false  | -        |
| type          | 图标右上角显示的 `badge` 类型                                                                                             | string         | primary / success / warning / danger / info | -      | -        |
| value         | 图标右上角 `badge` 显示值                                                                                                 | string, number | -                                           | -      | -        |
| max           | 图标右上角 `badge` 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型                                           | number         | -                                           | -      | -        |
| url           | 点击后跳转的链接地址                                                                                                      | string         | -                                           | -      | -        |
| link-type     | 页面跳转方式, 参考[微信小程序路由文档](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html) | string         | navigateTo / switchTab / reLaunch           | -      | -        |
| <s>use-slot</s> | 是否开启 `GridItem` 内容插槽 **（1.12.0已废弃，直接使用默认插槽即可）**                                                          | boolean        | -                                           | false  | -        |
| <s>use-icon-slot</s> | 是否开启 `GridItem` icon 插槽 **（1.12.0已废弃，组件会自动检测icon插槽的存在）**                                                | boolean        | -                                           | false  | -        |
| <s>use-text-slot</s> | 是否开启 `GridItem` text 内容插槽 **（1.12.0已废弃，组件会自动检测text插槽的存在）**                                            | boolean        | -                                           | false  | -        |
| icon-size     | 图标大小                                                                                                                  | string         | -                                           | 26px   | -        |
| badge-props   | 自定义徽标的属性，传入的对象会被透传给 [Badge 组件的 props](/component/badge#attributes)                                  | BadgeProps     | -                                           | -      | 0.1.50   |

### griditem-events

GridItem Events

| 方法名    | 说明           | 参数  | 返回值 | 最低版本 |
| --------- | -------------- | ----- | ------ | -------- |
| itemclick | 点击(跳转)事件 | event | -      | -        |

### Grid外部样式类

Grid 外部样式类

| 类名         | 说明            | 最低版本 |
| ------------ | --------------- | -------- |
| custom-class | Grid 根节点样式 | -        |

### GridItem外部样式类

GridItem 外部样式类

| 类名         | 说明                    | 最低版本 |
| ------------ | ----------------------- | -------- |
| custom-class | GridItem 根节点样式     | -        |
| custom-text  | GridItem 下方文字样式   | -        |
| custom-icon  | GridItem 上方 icon 样式 | -        |

