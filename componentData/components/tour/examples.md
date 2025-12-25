## Tour 组件示例

### 基本使用

基本使用

```vue
<template>
<template>
  <view>
    <view class="tour-item" id="step1">
      <text class="tour-title">第一步</text>
      <text class="tour-content">这是引导的第一步，介绍基本功能</text>
    </view>
    
    <view class="tour-item" id="step2">
      <text class="tour-title">第二步</text>
      <text class="tour-content">这是引导的第二步，展示更多功能</text>
    </view>
    
    <wd-tour 
      :model-value="showTour" 
      :steps="steps" 
      v-model:current="current"
      @finish="onFinish"
    />
  </view>
</template>

<script lang="ts" setup>
</script>

<script lang="ts" setup>
import { ref } from 'vue'

const showTour = ref(true)
const current = ref(0)

const steps = [
  {
    element: '#step1',
    content: '这是第一步的说明'
  },
  {
    element: '#step2',
    content: '这是第二步的说明'
  }
]

function onFinish() {
  console.log('引导完成')
}
</script>

<wd-tour :model-value="showTour" :steps="steps">
  <template #content>
    <view class="custom-content">
      <wd-icon name="help-circle-filled" size="22px"></wd-icon>
      <text class="custom-text">自定义引导内容区域</text>
    </view>
  </template>
</wd-tour>

<wd-tour :model-value="showTour" :steps="steps">
  <template #highlight="{ elementInfo }">
    <view class="custom-highlight" :style="getCustomHighlightStyle(elementInfo)"></view>
  </template>
</wd-tour>

<wd-tour :model-value="showTour" :steps="steps" next-text="继续" finish-text="知道了">
  <template #next>
    <view class="custom-button custom-next">下一步</view>
  </template>
  <template #finish>
    <view class="custom-button custom-finish">完成</view>
  </template>
</wd-tour>

<wd-tour 
  :model-value="showTour" 
  :steps="steps" 
  :click-mask-next="true"
/>

<wd-tour 
  :model-value="showTour" 
  :steps="steps" 
  mask-color="rgba(255, 0, 0, 0.6)"
  :offset="40"
  :border-radius="15"
  :padding="20"
/>

<wd-tour 
  :model-value="showTour" 
  :steps="steps" 
  :mask="false"
/>

<view>
  <wd-button @click="current = 2">跳转到第三步</wd-button>
  <wd-tour 
    :model-value="showTour" 
    :steps="steps" 
    v-model:current="current"
  />
</view>
</template>
```

### attributes

Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 是否显示引导组件 | boolean | - | false |
| steps | 引导步骤列表 | array | - | [] |
| current | 当前步骤索引，支持 v-model:current 双向绑定 | number | - | 0 |
| mask | 蒙版是否显示 | boolean | - | true |
| mask-color | 蒙版颜色（支持 rgba 格式） | string | - | rgba(0, 0, 0, 0.5) |
| offset | 引导提示框与高亮框的间距 | number | - | 20 |
| duration | 动画持续时间（毫秒） | number | - | 300 |
| border-radius | 高亮区域的圆角大小 | number | - | 8 |
| padding | 高亮区域的内边距 | number | - | 8 |
| prev-text | 上一步按钮文字 | string | - | 上一步 |
| next-text | 下一步按钮文字 | string | - | 下一步 |
| skip-text | 跳过按钮文字 | string | - | 跳过 |
| finish-text | 完成按钮文字 | string | - | 完成 |
| highlight-style | 高亮区域样式 | object | - | - |
| bottom-safety-offset | 底部安全偏移量，用于滚动计算时确保元素周围有足够的空间 | number | - | 100 |
| top-safety-offset | 顶部安全偏移量，用于滚动计算时确保元素周围有足够的空间 | number | - | 0 |
| custom-nav | 是否自定义顶部导航栏 | boolean | - | false |
| click-mask-next | 点击蒙版是否可以下一步 | boolean | - | false |
| z-index | 引导组件的层级 | number | - | 999 |
| show-tour-buttons | 是否显示引导按钮 | boolean | - | true |
| scope | 查询作用域（限定选择器范围） | object | - | - |
| missing-strategy | 缺失元素处理策略 | 'skip' \| 'stop' \| 'hide' | - | stop |

### events

Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| change | 步骤改变时触发 | `{ current: number }` |
| prev | 点击上一步按钮时触发 | `{ prevCurrent: number, current: number, total: number, isElementInTop: boolean }` |
| next | 点击下一步按钮时触发 | `{ prevCurrent: number, current: number, total: number, isElementInTop: boolean }` |
| finish | 点击完成按钮时触发 | `{ current: number, total: number }` |
| skip | 点击跳过按钮时触发 | `{ current: number, total: number }` |
| error | 查找引导元素出错时触发 | `{ message: string, element: string }` |

### slots

Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| highlight | 自定义高亮区域 | elementInfo: 元素位置信息 |
| content | 自定义引导内容 | - |
| prev | 自定义上一步按钮 | - |
| next | 自定义下一步按钮 | - |
| skip | 自定义跳过按钮 | - |
| finish | 自定义完成按钮 | - |

### methods

通过 ref 可以获取到组件实例，调用组件提供的方法：

| 方法名 | 说明 | 参数 |
|--------|------|------|
| handlePrev | 切换到上一步 | - |
| handleNext | 切换到下一步 | - |
| handleSkip | 跳过引导 | - |
| handleFinish | 完成引导 | - |

### 主题定制

组件支持通过 CSS 变量定制主题，可以修改以下变量：

```vue
<template>
  <view></view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
// 蒙版颜色
--wd-tour-mask-color: rgba(0, 0, 0, 0.5);

// 引导框背景色
--wd-tour-popover-bg-color: #ffffff;

// 按钮背景色
--wd-tour-button-primary-bg-color: #007aff;

// 按钮文字颜色
--wd-tour-button-color: #ffffff;
</style>
```

