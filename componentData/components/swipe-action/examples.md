## SwipeAction 组件示例

### 基本用法

基本用法

```vue
<template>
<view @click.stop="closeOutside">
  <wd-swipe-action>
    <wd-cell title="标题文字" value="内容"/>
    <template #right>
      <view class="action">
        <view class="button" style="background: #C8C7CD;" @click="handleAction('操作1')">操作1</view>
        <view class="button" style="background: #FFB300;" @click="handleAction('操作2')">操作2</view>
        <view class="button" style="background: #E2231A;" @click="handleAction('操作3')">操作3</view>
      </view>
    </template>

  </wd-swipe-action>
</view>
</template>

<script lang="ts" setup>
import { useToast, useQueue } from '@/uni_modules/wot-design-uni'


const { closeOutside } = useQueue()

const toast = useToast()

function handleAction(action: string) {
  toast.show(`点击了${action}`)
}
</script>

<style lang="scss">
.action {
  height: 100%;
}
.button {
  display: inline-block;
  padding: 0 11px;
  height: 100%;
  color: white;
  line-height: 42px;
}
</style>
```

### 左右滑动

左右滑动

```vue
<template>
<wd-swipe-action>
  <template #left>
    <view class="action">
      <view class="button" style="background: #C8C7CD;">操作1</view>
      <view class="button" style="background: #FFB300;">操作2</view>
      <view class="button" style="background: #E2231A;">操作3</view>
    </view>
  </template>
  <wd-cell title="标题文字" value="内容" />
  <template #right>
    <view class="action">
      <view class="button" style="background: #cdb86e;">操作4</view>
      <view class="button" style="background: #42ffd1;">操作5</view>
      <view class="button" style="background: #383fe2;">操作6</view>
    </view>
  </template>
</wd-swipe-action>
</template>

<script lang="ts" setup>
</script>
```

### 切换按钮

切换按钮

```vue
<template>
<wd-swipe-action v-model="value">
  <template #left>
    <view class="action">
      <view class="button" style="background: #C8C7CD;">操作1</view>
      <view class="button" style="background: #FFB300;">操作2</view>
      <view class="button" style="background: #E2231A;">操作3</view>
    </view>
  </template>
  <wd-cell title="标题文字" value="内容" />
  <template #right>
    <view class="action">
      <view class="button" style="background: #cdb86e;">操作4</view>
      <view class="button" style="background: #42ffd1;">操作5</view>
      <view class="button" style="background: #383fe2;">操作6</view>
    </view>
  </template>
</wd-swipe-action>

<view class="button-group">
  <wd-button @click="changeState('left')">打开左边</wd-button>
  <wd-button @click="changeState('close')">关闭所有</wd-button>
  <wd-button @click="changeState('right')">打开右边</wd-button>
</view>
</template>

<script lang="ts" setup>
const value = ref<string>('close')
function changeState(position: string) {
  value.value = position
}
</script>
```

### 按钮关闭前的钩子函数

按钮关闭前的钩子函数

```vue
<template>
<demo-block transparent title="切换按钮">
  <wd-swipe-action v-model="value" :before-close="beforeClose">
    <template #left>
      <view class="action">
        <view class="button" style="background: #C8C7CD;">操作1</view>
        <view class="button" style="background: #FFB300;">操作2</view>
        <view class="button" style="background: #E2231A;">操作3</view>
      </view>
    </template>
    <wd-cell title="标题文字" value="内容" />
    <template #right>
      <view class="action">
        <view class="button" style="background: #cdb86e;">操作4</view>
        <view class="button" style="background: #42ffd1;">操作5</view>
        <view class="button" style="background: #383fe2;">操作6</view>
      </view>
    </template>
  </wd-swipe-action>

  <view class="button-group">
    <wd-button @click="changeState('left')">打开左边</wd-button>
    <wd-button @click="changeState('close')">关闭所有</wd-button>
    <wd-button @click="changeState('right')">打开右边</wd-button>
  </view>
</demo-block>
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'

const toast = useToast()

const value = ref<string>('close')
function changeState(position: string) {
  value.value = position
}

const beforeClose = (reason, position) => {
  if (reason === 'click') {
    toast.show(`${reason} ${position}导致滑动按钮关闭`)
  } else {
    toast.show(`${reason}导致${position}滑动按钮关闭`)
  }
}
</script>
```

### 点击事件

点击事件

```vue
<template>
<wd-swipe-action @click="handleClick">
  <wd-cell title="标题文字" value="内容" />
  <template #right>
    <view class="action">
      <view class="button" style="background: #C8C7CD;">操作1</view>
      <view class="button" style="background: #FFB300;">操作2</view>
      <view class="button" style="background: #E2231A;">操作3</view>
    </view>
  </template>
</wd-swipe-action>
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'

const toast = useToast()

function handleClick({ value }) {
  toast.show(`点击${value}关闭操作按钮`)
}
</script>
```

### 禁用滑动按钮

禁用滑动按钮

```vue
<template>
<wd-swipe-action disabled>
  <wd-cell title="标题文字" value="内容" />
  <template #right>
    <view class="action">
      <view class="button" style="background: #C8C7CD;">操作1</view>
      <view class="button" style="background: #FFB300;">操作2</view>
      <view class="button" style="background: #E2231A;">操作3</view>
    </view>
  </template>
</wd-swipe-action>
</template>

<script lang="ts" setup>
</script>
```

### Cell 外部样式类

Cell 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

