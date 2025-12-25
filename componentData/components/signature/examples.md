## Signature 组件示例

### 基础用法

基础的电子签名功能。签名完成后会使用预览组件显示签名图片。

```vue
<template>
<wd-signature @confirm="confirm" @clear="clear" :export-scale="2" background-color="#ffffff" />
</template>

<script lang="ts" setup>
const img = ref<Partial<SignatureResult>>({})

function confirm(result: SignatureResult) {
  if (result.success) {
    uni.previewImage({
      urls: [result.tempFilePath]
    })
  }
}

function clear() {
  img.value = {}
}
</script>
```

### 历史记录

历史记录

```vue
<template>
<wd-signature enable-history background-color="#f5f5f5" />
</template>

<script lang="ts" setup>
</script>
```

### 笔锋模式

笔锋模式

```vue
<template>
<wd-signature pressure :height="300" />

<wd-signature 
  pressure 
  :height="300" 
  :min-width="1" 
  :max-width="6" 
  :min-speed="1.5"
  background-color="#f5f5f5"
/>
<view class="tip-text">快速书写产生细线条，慢速书写产生粗线条</view>

<wd-signature 
  pressure 
  enable-history 
  :height="300" 
  :min-width="1" 
  :max-width="6"
  background-color="#f5f5f5" 
/>
<view class="tip-text">结合历史记录，支持笔锋效果的撤销与恢复</view>
</template>

<script lang="ts" setup>
</script>
```

### 自定义功能

### 自定义按钮

```vue
<template>
<wd-signature :disabled="disabled" enable-history :step="3">
  <template #footer="{ clear, confirm, currentStep, restore, revoke, historyList }">
    <wd-button block @click="changeDisabled" v-if="disabled">开始签名</wd-button>
    <block v-if="!disabled">
      <wd-button size="small" plain @click="revoke" :disabled="currentStep <= 0">撤回</wd-button>
      <wd-button size="small" plain @click="restore" :disabled="currentStep >= historyList.length">恢复</wd-button>
      <wd-button size="small" plain @click="clear">清除</wd-button>
      <wd-button size="small" @click="confirm">确定</wd-button>
    </block>
  </template>
</wd-signature>

<wd-signature pen-color="#0083ff" :line-width="4" />

<wd-button type="primary" @click="show = true">打开签名板</wd-button>

<wd-popup 
  v-model="show" 
  closable
  safe-area-inset-bottom
  position="bottom"
  custom-style="padding: 48px 20px 20px 20px; border-radius: 16px 16px 0 0;"
  @after-enter="signatureRef?.init()"
>
  <wd-signature 
    ref="signatureRef"
    :height="300"
    enable-history
    pressure
    background-color="#f5f5f5"
    @confirm="handleConfirm" 
  />
</wd-popup>

<wd-img v-if="img.tempFilePath" mode="widthFix" width="100%" :src="img.tempFilePath" />

<template>
  <view class="landscape-signature">
    <wd-signature
      ref="signatureRef"
      :height="height"
      :width="width"
      pressure
      enable-history
      background-color="#f5f5f5"
      @confirm="handleConfirm"
    />
  </view>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const height = ref(0)
const width = ref(0)

onMounted(() => {
  const { windowWidth, windowHeight } = uni.getSystemInfoSync()
  // 减去页面边距
  height.value = windowWidth - 40
  width.value = windowHeight - 40
})
</script>

<style>
.landscape-signature {
  padding: 20px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
</style>

<template>
  <view class="landscape-signature">
    <wd-signature
      v-if="inited"
      :height="height"
      :width="width"
      enable-history
      pressure
      background-color="#f5f5f5"
      @confirm="handleConfirm"
    >
      <template #footer="{ clear, confirm, restore, revoke, canUndo, canRedo }">
        <view class="custom-actions">
          <view class="button-group">
            <wd-button size="small" plain @click="revoke" :disabled="!canUndo">撤回</wd-button>
            <wd-button size="small" plain @click="restore" :disabled="!canRedo">恢复</wd-button>
            <wd-button size="small" plain @click="clear">清除</wd-button>
            <wd-button size="small" type="primary" @click="confirm">完成</wd-button>
          </view>
        </view>
      </template>
    </wd-signature>
  </view>
</template>

<template>
  <view class="landscape-signature">
    <wd-signature
      v-if="inited"
      ref="signatureRef"
      :height="height" 
      :width="width"
      enable-history
      pressure
      background-color="#f5f5f5"
      @confirm="handleConfirm"
    >
    </wd-signature>
  </view>
</template>
</template>

<script lang="ts" setup>
const disabled = ref(true)

function changeDisabled() {
  disabled.value = false
}

import { ref } from 'vue'
import type { SignatureInstance, SignatureResult } from '@/uni_modules/wot-design-uni/components/wd-signature/types'

const show = ref(false)
const img = ref<Partial<SignatureResult>>({})
const signatureRef = ref<SignatureInstance>()

function handleConfirm(result: SignatureResult) {
  show.value = false
  if (result.success) {
    uni.previewImage({
      urls: [result.tempFilePath]
    })
  }
}

import { pause } from '@/uni_modules/wot-design-uni/components/common/util'

const height = ref(0)
const width = ref(0)
const inited = ref(false)

onMounted(() => {
  const { windowWidth, windowHeight } = uni.getSystemInfoSync()
  width.value = windowWidth - 48
  height.value = windowHeight - 48
  
  pause(100).then(() => {
    inited.value = true
  })
})

import { pause } from '@/uni_modules/wot-design-uni/components/common/util'

const height = ref(0)
const width = ref(0)
const inited = ref(false)

onMounted(() => {
  const { windowWidth, windowHeight } = uni.getSystemInfoSync()
  width.value = windowWidth
  height.value = windowHeight - 60 // 预留底部按钮空间

  pause(100).then(() => {
    inited.value = true
  })
})
</script>

<style lang="scss" scoped>
.popup-footer {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.landscape-signature {
  height: 100vh;
  // #ifdef H5
  height: calc(100vh - 44px);
  // #endif
  background: #fff;
  position: relative;
  padding: 24px 0;
  padding-left: 48px;
  box-sizing: border-box;

  .custom-actions {
    position: fixed;
    left: 0;
    top: 50%;
    width: 48px;
    transform: translateY(-50%) rotate(90deg);
    transform-origin: center;
    z-index: 10;

    .button-group {
      display: flex;
      flex-direction: row;
      gap: 12px;
      white-space: nowrap;
      width: max-content;
      transform: translateX(-50%);
    }
  }
}

.landscape-signature {
  height: 100vh;
  background: #fff;
  position: relative;
  box-sizing: border-box;

  // #ifdef MP-WEIXIN
  padding: 0;
  display: flex;
  flex-direction: column;

  .weixin-actions {
    padding: 12px;
    background-color: #f8f8f8;
    
    .button-group {
      display: flex;
      justify-content: center;
      gap: 12px;
    }
  }
  // #endif
}
</style>
```

### attributes

Attributes

| 参数 | 说明 | 类型 | 默认值 | 最低版本 |
|------|------|------|--------|----------|
| pen-color | 签名笔颜色 | string | #000000 | - |
| line-width | 签名笔宽度 | number | 3 | - |
| height | 画布的高度 | number | 200 | - |
| width | 画布的宽度 | number | 300 | - |
| clear-text | 清空按钮的文本 | string | - | - |
| confirm-text | 确认按钮的文本 | string | - | - |
| file-type | 导出图片类型 | string | png | - |
| quality | 导出图片质量(0-1) | number | 1 | - |
| export-scale | 导出图片的缩放比例 | number | 1 | - |
| disabled | 是否禁用签名板 | boolean | false | - |
| background-color | 画板的背景色 | string | - | - |
| disable-scroll | 是否禁用画布滚动 | boolean | true | - |
| enable-history | 是否开启历史记录 | boolean | false | 1.8.0 |
| step | 历史记录步长 | number | 1 | 1.8.0 |
| pressure | 是否启用笔锋模式 | boolean | false | 1.8.0 |
| min-width | 笔锋模式最小宽度 | number | 2 | 1.8.0 |
| max-width | 笔锋模式最大宽度 | number | 6 | 1.8.0 |
| min-speed | 笔锋模式速度阈值 | number | 1.5 | 1.8.0 |

### events

Events

| 事件名称 | 说明 | 参数 | 最低版本 |
|---------|------|------|----------|
| start | 开始签名时触发 | event: TouchEvent | - |
| end | 结束签名时触发 | event: TouchEvent | - |
| signing | 签名过程中触发 | event: TouchEvent | - |
| confirm | 确认签名时触发 | result: SignatureResult | - |
| clear | 清空签名时触发 | - | - |

### methods

Methods

| 方法名 | 说明 | 参数 | 最低版本 |
|--------|------|------|----------|
| init | 初始化签名板 | forceUpdate?: boolean | - |
| confirm | 确认签名 | - | - |
| clear | 清空签名 | - | - |
| restore | 恢复上一步 | - | - |
| revoke | 撤销上一步 | - | - |

### slots

Slots

| 名称 | 说明 | 参数 | 最低版本 |
|------|------|------|----------|
| footer | 自定义底部按钮 | `{ clear, confirm, restore, revoke, currentStep, historyList }` | - |

