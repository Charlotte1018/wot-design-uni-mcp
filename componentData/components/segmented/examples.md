## Segmented 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-segmented :options="list" v-model:value="current"></wd-segmented>
</template>

<script lang="ts" setup>
const list = ref<string[]>(['评论', '点赞', '贡献', '打赏'])

const current = ref('点赞')
</script>
```

### 大型分段器

设置

```vue
<template>
<wd-segmented :options="list" v-model:value="current" size="large"></wd-segmented>
</template>

<script lang="ts" setup>
</script>
```

### 小型分段器

设置

```vue
<template>
<wd-segmented :options="list" v-model:value="current" size="small"></wd-segmented>
</template>

<script lang="ts" setup>
</script>
```

### 带振动效果的分段器

设置

```vue
<template>
<wd-segmented :options="list" v-model:value="current" :vibrate-short="true"></wd-segmented>
</template>

<script lang="ts" setup>
</script>
```

### 禁用分段器

设置

```vue
<template>
<wd-segmented :options="list" v-model:value="current" disabled></wd-segmented>
</template>

<script lang="ts" setup>
</script>
```

### 自定义渲染分段器标签

使用插槽

```vue
<template>
<wd-segmented :options="list" v-model:value="current" :vibrate-short="true">
  <template #label="{ option }">
    <view class="section-slot">
      <image style="border-radius: 50%; width: 32px; height: 32px" :src="option.payload.avatar" />
      <view class="name">{{ option.value }}</view>
    </view>
  </template>
</wd-segmented>
</template>

<script lang="ts" setup>
const list = ref([
  {
    value: '李雷',
    disabled: false,
    payload: {
      avatar: 'https://wot-ui.cn/assets/redpanda.jpg'
    }
  },
  {
    value: '韩梅梅',
    disabled: false,
    payload: {
      avatar: 'https://wot-ui.cn/assets/capybara.jpg'
    }
  }
])
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  padding: 0 24rpx;
  box-sizing: border-box;
  &-slot {
    padding: 4px;
  }
}
</style>
```

### 在弹出框中使用

微信小程序端，在弹出框中使用本组件时，需要调用

```vue
<template>
<wd-button @click="handleClick">打开弹窗</wd-button>
<wd-popup v-model="showPopup" position="bottom" @after-enter="handlePopupShow" closable custom-style="height: 200px;padding: 0 24rpx;">
  <view class="title">在弹出框中使用</view>
  <wd-segmented :options="list" v-model:value="current" ref="segmentedRef"></wd-segmented>
</wd-popup>
</template>

<script lang="ts" setup>
const list = ref<string[]>(['评论', '点赞', '贡献', '打赏'])
const current = ref('点赞')

const segmentedRef = ref<SegmentedInstance>() // 获取分段器实例
const showPopup = ref(false) // 控制popup显示
/**
 * 点击按钮打开popup
 */
function handleClick() {
  showPopup.value = true
}
/**
 * popup打开后更新分段器样式
 */
function handlePopupShow() {
  segmentedRef.value?.updateActiveStyle()
}
</script>

<style lang="css" scoped>
.title {
  display: flex;
  font-size: 32rpx;
  align-items: center;
  justify-content: center;
  padding: 24rpx 0;
}
</style>
```

### attributes

Attributes

| 参数                | 说明               | 类型                                        | 可选值                         | 默认值   | 最低版本 |
| ------------------- | ------------------ | ------------------------------------------- | ------------------------------ | -------- | -------- |
| value/v-model:value | 当前选中的值       | string / number                            | -                              | -        | 0.1.23   |
| disabled            | 是否禁用分段器     | boolean                                     | true / false                  | `false`  | 0.1.23   |
| size                | 控件尺寸           | string                                      | `large` / `middle` / `small` | `middle` | 0.1.23   |
| options             | 数据集合           | `string[] / number[] / SegmentedOption[]` | -                              | []       | 0.1.23   |
| vibrateShort        | 切换选项时是否振动 | boolean                                     | true / false                  | `false`  | 0.1.23   |

### SegmentedOption

| 参数     | 说明     | 类型             | 可选值        | 默认值 | 最低版本 |
| -------- | -------- | ---------------- | ------------- | ------ | -------- |
| value    | 选中值   | string / number | -             | -      | 0.1.23   |
| disabled | 是否禁用 | boolean          | true / false | -      | 0.1.23   |
| payload  | 更多数据 | any              | -             | -      | 0.1.23   |

### events

Events

| 事件名称 | 说明           | 参数              | 最低版本 |
| -------- | -------------- | ----------------- | -------- |
| change   | 选项切换时触发 | `SegmentedOption` | 0.1.23   |
| click    | 选项点击时触发 | `SegmentedOption` | 1.2.20   |

### methods

对外暴露函数

| 事件名称          | 说明                                                      | 参数                           | 最低版本 |
| ----------------- | --------------------------------------------------------- | ------------------------------ | -------- |
| updateActiveStyle | 更新滑块偏移量，参数`animation`用于是否开启动画，默认开启 | `(animation: boolean) => void` | -        |

### slots

Slots

| name  | 说明         | 参数                          | 最低版本 |
| ----- | ------------ | ----------------------------- | -------- |
| label | 选项标签内容 | `{ option: SegmentedOption }` | 0.1.23   |

### 外部样式类

外部样式类

| 类名        | 说明         | 最低版本 |
| ----------- | ------------ | -------- |
| customStyle | 自定义样式   | 0.1.23   |
| customClass | 自定义样式类 | 0.1.23   |

