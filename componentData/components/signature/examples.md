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



:::tip 提示
横屏签名页面的建议：
1. 使用 `pageOrientation: "landscape"` 强制横屏显示
2. 动态计算画布尺寸以适配不同设备
3. 注意横屏时 windowWidth 和 windowHeight 的对调
4. 建议开启笔锋模式提供更好的签名体验
:::

### 横屏签名 

支持以下两种横屏签名实现方案：

#### 1. 通用横屏方案 (推荐)

通过自定义布局和按钮旋转实现横屏效果，适用于所有平台。





:::tip 实现说明
通用横屏方案特点：
1. 使用 fixed 布局配合旋转实现左侧垂直按钮栏
2. 通过 footer 插槽自定义操作按钮
3. 使用 transform 实现按钮的旋转效果
4. 适用于所有平台,实现方式一致
5. 建议使用 inited 变量配合延迟加载避免画布初始化问题
:::

#### 2. 原生横屏方案 (仅微信小程序)

微信小程序提供了原生的横屏支持，使用时需要注意区分平台:






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
</script>

<style lang="scss">
.popup-footer {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
```

### Methods

Methods

| 方法名 | 说明 | 参数 | 最低版本 |
|--------|------|------|----------|
| init | 初始化签名板 | forceUpdate?: boolean | - |
| confirm | 确认签名 | - | - |
| clear | 清空签名 | - | - |
| restore | 恢复上一步 | - | - |
| revoke | 撤销上一步 | - | - |

