## Curtain 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-button @click="handleClick">展示幕帘</wd-button>
<wd-curtain v-model="value" :src="img" :to="link"></wd-curtain>
</template>

<script lang="ts" setup>
const value = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick() {
  value.value = true
}
</script>
```

### 设置幕帘图片宽高

设置幕帘图片宽高

```vue
<template>
<wd-button @click="handleClick">展示幕帘</wd-button>
<wd-curtain v-model="value" :src="img" :to="link" width="280"></wd-curtain>
</template>

<script lang="ts" setup>
const value = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick() {
  value.value = true
}
</script>
```

### 修改关闭按钮位置

修改关闭按钮位置

```vue
<template>
<wd-button @click="handleClick">展示幕帘</wd-button>
<wd-curtain v-model="value" :src="img" :to="link" close-position="top" width="280"></wd-curtain>
</template>

<script lang="ts" setup>
const value = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick() {
  value.value = true
}
</script>
```

### 设置遮罩点击可关闭幕帘

设置遮罩点击可关闭幕帘

```vue
<template>
<wd-button @click="handleClick">展示幕帘</wd-button>
<wd-curtain v-model="value" :src="img" :to="link" close-position="bottom-right" width="280" close-on-click-modal></wd-curtain>
</template>

<script lang="ts" setup>
const value = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick() {
  value.value = true
}
</script>
```

### attributes

Attributes

| 参数                 | 说明                                               | 类型    | 可选值                                                                   | 默认值 | 最低版本 |
|----------------------|----------------------------------------------------|---------|--------------------------------------------------------------------------|--------|----------|
| value                | 绑定值，展示/关闭幕帘（已废弃，请使用 modelValue） | boolean | -                                                                        | -      | -        |
| modelValue           | 绑定值，展示/关闭幕帘                              | boolean | -                                                                        | -      | 1.7.0   |
| src                  | 幕帘图片地址，必须使用网络地址                     | string  | -                                                                        | -      | -        |
| width                | 幕帘图片宽度，默认单位 px                          | number  | -                                                                        | -      | -        |
| to                   | 幕帘图片点击链接                                   | string  | -                                                                        | -      | -        |
| close-position       | 关闭按钮位置                                       | string  | inset / top / bottom / top-left / top-right / bottom-left / bottom-right | inset  | -        |
| close-on-click-modal | 点击遮罩是否关闭                                   | boolean | -                                                                        | false  | -        |
| hide-when-close      | 是否当关闭时将弹出层隐藏（display: none）          | boolean | -                                                                        | true   | -        |
| z-index              | 设置层级                                           | number  | -                                                                        | 10     | 1.4.0    |
| root-portal          | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 | boolean | -                                                                        | false  | 1.11.0 |
| show-menu-by-longpress          | 开启长按图片显示识别小程序码菜单，仅微信小程序支持 | boolean | -                                                                        | false  | 1.13.0 |
| close-on-click         | 是否在点击图片时关闭幕帘，默认为 true | boolean | -                                                                         | ture   | 1.13.0 |

### events

Events

| 事件名称    | 说明                                                                           | 参数 | 最低版本 |
| ----------- | ------------------------------------------------------------------------------ | ---- | -------- |
| click       | 点击幕帘时触发                                                                 | -    | -        |
| close       | 弹出层关闭时触发                                                               | -    | -        |
| click-modal | 点击遮罩时触发                                                                 | -    | -        |
| beforeenter | 进入前触发                                                                     | -    | -        |
| enter       | 进入时触发                                                                     | -    | -        |
| afterenter  | 进入后触发                                                                     | -    | -        |
| beforeleave | 离开前触发                                                                     | -    | -        |
| leave       | 离开时触发                                                                     | -    | -        |
| afterleave  | 离开后触发                                                                     | -    | -        |
| load        | 图片加载完成事件                                                               | -    | -        |
| error       | 图片加载失败事件，若图片加载失败，则不会展示幕帘组件，即使设置 `value` 为 true | -    | -        |

### slots

Slots

| name  | 说明         | 最低版本         |
| ----- | ------------ | ---------------- |
| close | 关闭按钮插槽 | 1.5.0 |

### 外部样式类

外部样式类

| 类名               | 说明           | 最低版本         |
| ------------------ | -------------- | ---------------- |
| custom-class       | 根节点样式     | -                |
| custom-close-class | 关闭按钮样式类 | 1.5.0 |
| custom-close-style | 关闭按钮样式   | 1.5.0 |

