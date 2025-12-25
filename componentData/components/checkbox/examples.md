## Checkbox 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-checkbox v-model="value" @change="handleChange">单选框1</wd-checkbox>
</template>

<script lang="ts" setup>
const value = ref<boolean>(true)

function handleChange({ value }) {
  console.log(value)
}
</script>
```

### 修改图标形状

修改图标形状

```vue
<template>
<wd-checkbox :modelValue="true" shape="square">沃特</wd-checkbox>
<wd-checkbox :modelValue="true" shape="button">沃特</wd-checkbox>
</template>

<script lang="ts" setup>
</script>
```

### 修改选中的颜色

修改选中的颜色

```vue
<template>
<wd-checkbox v-model="value" checked-color="#f00">沃特</wd-checkbox>
</template>

<script lang="ts" setup>
const value = ref<boolean>(true)
</script>
```

### 修改选中和非选中的值

修改选中和非选中的值

```vue
<template>
<wd-checkbox :modelValue="true" true-value="沃特" false-value="商家后台">复选框</wd-checkbox>
</template>

<script lang="ts" setup>
</script>
```

### 复选框组

复选框组

```vue
<template>
<wd-checkbox-group v-model="value">
  <wd-checkbox modelValue="jingmai">沃特</wd-checkbox>
  <wd-checkbox modelValue="shop">商家后台</wd-checkbox>
</wd-checkbox-group>

<wd-checkbox-group v-model="value1" cell>
  <wd-checkbox modelValue="jingmai">沃特</wd-checkbox>
  <wd-checkbox modelValue="shop">商家后台</wd-checkbox>
</wd-checkbox-group>

<wd-checkbox-group v-model="value2" cell shape="button">
  <wd-checkbox modelValue="1" disabled>选项一</wd-checkbox>
  <wd-checkbox modelValue="2">选项二</wd-checkbox>
  <wd-checkbox modelValue="3">选项三</wd-checkbox>
  <wd-checkbox modelValue="4">选项四</wd-checkbox>
  <wd-checkbox modelValue="5">选项五</wd-checkbox>
  <wd-checkbox modelValue="6">选项六</wd-checkbox>
  <wd-checkbox modelValue="7">选项七</wd-checkbox>
</wd-checkbox-group>
</template>

<script lang="ts" setup>
const value = ref<number[]>([])

const value = ref(['jingmai'])
const value1 = ref(['jingmai'])
const value2 = ref(['1'])
</script>
```

### 同行展示

同行展示

```vue
<template>
<wd-checkbox-group v-model="value" inline>
  <wd-checkbox modelValue="jingmai">沃特</wd-checkbox>
  <wd-checkbox modelValue="shop">商家后台</wd-checkbox>
</wd-checkbox-group>
</template>

<script lang="ts" setup>
const value = ref(['jingmai'])
</script>
```

### 禁用

禁用

```vue
<template>
<wd-checkbox-group v-model="value" disabled>
  <wd-checkbox modelValue="jingmai">沃特</wd-checkbox>
  <wd-checkbox modelValue="shop">商家后台</wd-checkbox>
</wd-checkbox-group>
</template>

<script lang="ts" setup>
const value = ref(['jingmai'])
</script>
```

### 设置选中数量的上限和下限

设置选中数量的上限和下限

```vue
<template>
<wd-checkbox-group v-model="value" :min="1" :max="3">
  <wd-checkbox modelValue="jd">京东</wd-checkbox>
  <wd-checkbox modelValue="jingmai">沃特</wd-checkbox>
  <wd-checkbox modelValue="shop">商家后台</wd-checkbox>
  <wd-checkbox modelValue="market">营销中心</wd-checkbox>
</wd-checkbox-group>
</template>

<script lang="ts" setup>
const value = ref(['jd'])
</script>
```

### 尺寸

尺寸

```vue
<template>
<wd-checkbox-group v-model="value" size="large">
  <wd-checkbox modelValue="1">沃特</wd-checkbox>
  <wd-checkbox modelValue="2">商家后台</wd-checkbox>
</wd-checkbox-group>
</template>

<script lang="ts" setup>
</script>
```

### 结合 Cell 使用

结合 Cell 使用

```vue
<template>
<wd-cell-group border>
  <wd-checkbox-group v-model="value" size="large">
    <wd-cell title="点赞" center clickable @click="handleCheck1">
      <view @click.stop="noop">
        <wd-checkbox model-value="1" ref="checkBox1" custom-style="margin:0;"></wd-checkbox>
      </view>
    </wd-cell>
    <wd-cell title="投币" center clickable @click="handleCheck2">
      <view @click.stop="noop">
        <wd-checkbox model-value="2" ref="checkBox2" custom-style="margin:0;"></wd-checkbox>
      </view>
    </wd-cell>
    <wd-cell title="一键三连" center clickable @click="handleCheck3">
      <view @click.stop="noop">
        <wd-checkbox model-value="3" ref="checkBox3" custom-style="margin:0;"></wd-checkbox>
      </view>
    </wd-cell>
  </wd-checkbox-group>
</wd-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref<string[]>([])
const checkBox1 = ref<CheckboxInstance>()
const checkBox2 = ref<CheckboxInstance>()
const checkBox3 = ref<CheckboxInstance>()

function handleCheck1() {
  checkBox1.value && checkBox1.value.toggle()
}

function handleCheck2() {
  checkBox2.value && checkBox2.value.toggle()
}
function handleCheck3() {
  checkBox3.value && checkBox3.value.toggle()
}

function noop() {}
</script>
```

### Checkbox Methods

Checkbox Methods

| 方法名称 | 说明                                  | 参数 | 最低版本 |
| -------- | ------------------------------------- | ---- | -------- |
| toggle   | 切换当前选中状态,同时触发 change 事件 | -    | 1.2.16   |

### Checkbox 外部样式类

Checkbox 外部样式类

| 类名               | 说明             | 最低版本 |
| ------------------ | ---------------- | -------- |
| custom-class       | 根节点样式       | -        |
| custom-label-class | 文字结点样式     | -        |
| custom-shape-class | 单选图标结点样式 | -        |

### CheckboxGroup 外部样式类

CheckboxGroup 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

