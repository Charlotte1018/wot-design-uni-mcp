## Cell 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-cell title="标题文字" value="内容" />

<wd-cell-group>
  <wd-cell title="标题文字" value="内容" />
  <wd-cell title="标题文字" label="描述信息" value="内容" />
</wd-cell-group>
</template>

<script lang="ts" setup>
</script>
```

### 图标设置

图标设置

```vue
<template>
<wd-cell-group>
  <wd-cell title="标题文字" value="内容" icon="setting" />
  <wd-cell title="标题文字" value="内容">
    <template #icon>
      <view class="cell-icon"></view>
    </template>
  </wd-cell>
</wd-cell-group>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.cell-icon {
  display: block;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  background: url('https://img10.360buyimg.com/jmadvertisement/jfs/t1/71075/7/3762/1820/5d1f26d1E0d600b9e/a264c901943080ac.png') no-repeat;
  background-size: cover;
}
</style>
```

### 分组标题

分组标题

```vue
<template>
<wd-cell-group title="交易管理" value="内容">
  <wd-cell title="标题文字" value="内容" />
  <wd-cell title="标题文字" label="描述信息" value="内容" />
</wd-cell-group>
</template>

<script lang="ts" setup>
</script>
```

### 单元格大小

单元格大小

```vue
<template>
<wd-cell size="large" title="标题文字" value="内容" />
</template>

<script lang="ts" setup>
</script>
```

### 展示边框线

展示边框线

```vue
<template>
<wd-cell-group title="交易管理" border>
  <wd-cell title="标题文字" value="内容" />
  <wd-cell :border="false" title="标题文字" label="这一个cell不想要边框" value="内容" />
  <wd-cell title="标题文字" label="描述信息" value="内容"></wd-cell>
</wd-cell-group>
</template>

<script lang="ts" setup>
</script>
```

### 点击反馈

点击反馈

```vue
<template>
<wd-toast />
<wd-cell title="标题文字" value="内容" clickable @click="toast" />
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'
const toast = useToast()

function showToast() {
  toast.show('点击')
}
</script>
```

### 页面跳转

页面跳转

```vue
<template>
<wd-cell title="帮助与反馈" is-link to="/pages/index/index" />
<wd-cell title="设置" value="内容" is-link to="/pages/button/index" replace></wd-cell>

<wd-cell title="帮助与反馈" is-link></wd-cell>
</template>

<script lang="ts" setup>
</script>
```

### 垂直居中

垂直居中

```vue
<template>
<wd-cell title="标题文字" value="内容" center></wd-cell>
</template>

<script lang="ts" setup>
</script>
```

### 表单属性 - 必填

表单属性 - 必填

```vue
<template>
<wd-cell title="必填" required>
  <wd-rate v-model="rate" change="handleRateChange"></wd-rate>
</wd-cell>
</template>

<script lang="ts" setup>
const rate = ref(0)

function handleRateChange({ value }) {
  console.log(value)
}
</script>
```

### 表单属性 - 上下结构

表单属性 - 上下结构

```vue
<template>
<wd-cell title="上下结构" vertical>
  <wd-slider v-model="slider" change="handleSliderChange"></wd-slider>
</wd-cell>
</template>

<script lang="ts" setup>
const slider = ref('')
function handleSliderChange({ value }) {
  console.log(value)
}
</script>
```

### 设置左侧宽度

设置左侧宽度

```vue
<template>
<wd-cell title="标题文字" label="这里是文字描述这里是文字描述这里是文字描述" title-width="200px" value="内容" />
</template>

<script lang="ts" setup>
</script>
```

### 内容省略

内容省略

```vue
<template>
<wd-cell title="标题文字" value="这是一段很长很长很长很长很长很长的内容" ellipsis />
</template>

<script lang="ts" setup>
</script>
```

### 自定义内容

自定义内容

```vue
<template>
<wd-cell-group>
  <wd-cell title="标题文字" center>
    <wd-button custom-class="custom-value" size="small" plain>按钮</wd-button>
  </wd-cell>
  <wd-cell title="标题文字" center>
    <view class="custom-value" style="height: 32px;">
      <wd-switch v-model="switchValue" change="handleSwitchChange" />
    </view>
  </wd-cell>
  <wd-cell title="标题文字" is-link to="/pages/index/index">
    <view class="custom-text">订购</view>
  </wd-cell>
  <wd-cell>
    <template #title>
      <view>
        <view style="display: inline-block">标题文字</view>
        <view class="end-time">25天后到期</view>
      </view>
    </template>
  </wd-cell>
</wd-cell-group>
</template>

<script lang="ts" setup>
const switchValue = ref('')
function handleSwitchChange({ value }) {
  console.log(value)
}
</script>

<style lang="scss">
.cell-icon {
  display: block;
  box-sizing: border-box;
  padding: 4px 0;
  width: 16px;
  height: 24px;
  margin-right: 4px;
  background: url('https://img10.360buyimg.com/jmadvertisement/jfs/t1/71075/7/3762/1820/5d1f26d1E0d600b9e/a264c901943080ac.png') no-repeat;
  background-size: cover;
}
:deep(.custom-value) {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  white-space: nowrap;
}
.custom-text {
  color: #f0883a;
}
.end-time {
  display: inline-block;
  margin-left: 8px;
  border: 1px solid #faa21e;
  padding: 0 4px;
  font-size: 10px;
  color: #faa21e;
}
</style>
```

### CellGroup 外部样式类

CellGroup 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

### Cell 外部样式类

Cell 外部样式类

| 类名               | 说明                           | 最低版本 |
| ------------------ | ------------------------------ | -------- |
| custom-class       | 根节点样式                     | -        |
| custom-icon-class  | icon 外部自定义样式  | -        |
| custom-label-class | label 外部自定义样式 | -        |
| custom-value-class | value 外部自定义样式 | -        |
| custom-title-class | title 外部自定义样式 | -        |

