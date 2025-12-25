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

<script lang="ts" setup>
</script>
```

### Methods

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
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
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

