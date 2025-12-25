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

<style lang="scss" scoped>
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

在

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

设置

```vue
<template>
<wd-cell size="large" title="标题文字" value="内容" />
</template>

<script lang="ts" setup>
</script>
```

### 展示边框线

在

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

设置

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

设置

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

设置

```vue
<template>
<wd-cell title="标题文字" value="内容" center></wd-cell>
</template>

<script lang="ts" setup>
</script>
```

### 表单属性-必填

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

### 表单属性-上下结构

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

<style lang="scss" scoped>
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

### cellgroup-attributes

CellGroup Attributes

| 参数     | 说明           | 类型    | 可选值 | 默认值 | 最低版本 |
| -------- | -------------- | ------- | ------ | ------ | -------- |
| title    | 分组标题       | string  | -      | -      | -        |
| value    | 分组右侧内容   | string  | -      | -      | -        |
| border   | 是否展示边框线 | boolean  | -      | -      | -        |
| use-slot | 分组启用插槽   | boolean | -      | false  | -        |

### cell-attributes

Cell Attributes

| 参数        | 说明                           | 类型    | 可选值 | 默认值 | 最低版本 |
| ----------- | ------------------------------ | ------- | ------ | ------ | -------- |
| title       | 标题                           | string  | -      | -      | -        |
| value       | 右侧内容                       | string  | -      | -      | -        |
| icon        | 图标类名                       | string  | -      | -      | -        |
| icon-size   | 图标大小                       | string \| number  | -      | -      | 1.13.0 |
| label       | 描述信息                       | string  | -      | -      | -        |
| is-link     | 是否为跳转链接                 | boolean | -      | false  | -        |
| to          | 跳转地址                       | string  | -      | -      | -        |
| clickable   | 点击反馈，开启 is-link 时，默认开启此选项 | boolean | -      | false  | -        |
| replace     | 跳转时是否替换栈顶页面         | boolean | -      | false  | -        |
| size        | 设置单元格大小                 | string  | large  | -      | -        |
| title-width | 设置左侧标题宽度               | string  | -      | -      | -        |
| center      | 是否垂直居中，默认顶部居中     | boolean | -      | false  | -        |
| required    | 表单属性，必填                 | boolean | -      | false  | -        |
| marker-side | 必填标记的位置                 | string  | before / after | before | 1.12.0 |
| vertical    | 表单属性，上下结构             | boolean | -      | false  | -        |
| ellipsis    | 内容省略，右侧内容超出时会以省略号显示 | boolean | -      | false  | 1.11.0 |
| use-title-slot | 是否启用title插槽，默认启用，用来解决插槽传递时v-slot和v-if冲突问题 | boolean | -      | true  | 1.11.0 |
| prop | 表单域 `model` 字段名，在使用表单校验功能的情况下，该属性是必填的 | string | - | - | - |
| rules | 表单验证规则，结合`wd-form`组件使用	 | `FormItemRule []`	 | - | `[]` | - |
| border | 是否展示边框线，优先级高于`cell-group`的`border` | boolean | - | - | - |

### FormItemRule 数据结构

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| required | 是否为必选字段	 | `boolean` |
| message | 错误提示文案	 | `string` |
| validator | 通过函数进行校验，可以返回一个 `Promise` 来进行异步校验 | `(value, rule) => boolean \| Promise` |
| pattern | 通过正则表达式进行校验，正则无法匹配表示校验不通过 | `RegExp` |

### cell-events

Cell Events

| 事件名称 | 说明                                             | 参数 | 最低版本 |
| -------- | ------------------------------------------------ | ---- | -------- |
| click    | 当 clickable 或 is-link 为 true 时点击单元格触发 | -    | -        |

### CellGroup外部样式类

CellGroup 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

### Cell外部样式类

Cell 外部样式类

| 类名               | 说明                           | 最低版本 |
| ------------------ | ------------------------------ | -------- |
| custom-class       | 根节点样式                     | -        |
| custom-icon-class  | icon 外部自定义样式  | -        |
| custom-label-class | label 外部自定义样式 | -        |
| custom-value-class | value 外部自定义样式 | -        |
| custom-title-class | title 外部自定义样式 | -        |

