## Radio 组件示例

### 基本用法

基本用法

```vue
<template>
<demo-block title="基本用法">
  <wd-radio-group v-model="value">
    <wd-radio :value="1">单选框1</wd-radio>
    <wd-radio :value="2">单选框2</wd-radio>
  </wd-radio-group>
  <view>当前选中的值为:{{value}}</view>
</demo-block>
</template>

<script lang="ts" setup>
const value = ref<number>(1)
</script>
```

### 修改图标形状

修改图标形状

```vue
<template>
<!-- button 按钮式单选 -->
<wd-radio-group v-model="value" shape="button" @change="change">
  <wd-radio :value="1">沃特</wd-radio>
  <wd-radio :value="2">商家后台</wd-radio>
</wd-radio-group>

<!-- dot 点状单选 -->
<wd-radio-group v-model="value" shape="dot" @change="change">
  <wd-radio :value="1">沃特</wd-radio>
  <wd-radio :value="2">商家后台</wd-radio>
</wd-radio-group>
</template>

<script lang="ts" setup>
const value = ref<number>(1)

function change(e) {
  console.log(e)
}

const value = ref<number>(1)

function change(e) {
  console.log(e)
}
</script>
```

### 表单模式

表单模式

```vue
<template>
<wd-radio-group v-model="value" cell>
  <wd-radio value="1">选项一</wd-radio>
  <wd-radio value="2">选项二</wd-radio>
  <wd-radio value="3">选项三</wd-radio>
  <wd-radio value="4">选项四</wd-radio>
  <wd-radio value="5">选项五</wd-radio>
  <wd-radio value="6">选项六</wd-radio>
  <wd-radio value="7">选项七</wd-radio>
</wd-radio-group>
</template>

<script lang="ts" setup>
</script>
```

### 同行展示

同行展示

```vue
<template>
<wd-radio-group v-model="value" inline>
  <wd-radio value="1">单选框1</wd-radio>
  <wd-radio value="2">单选框2</wd-radio>
</wd-radio-group>
</template>

<script lang="ts" setup>
</script>
```

### 修改选中的颜色

修改选中的颜色

```vue
<template>
<wd-radio-group v-model="value" checked-color="#fa4350">
  <wd-radio value="1">沃特</wd-radio>
  <wd-radio value="2">商家后台</wd-radio>
</wd-radio-group>
</template>

<script lang="ts" setup>
</script>
```

### 禁用

禁用

```vue
<template>
<wd-radio-group v-model="value" disabled>
  <wd-radio value="1">沃特</wd-radio>
  <wd-radio value="2">商家后台</wd-radio>
</wd-radio-group>
</template>

<script lang="ts" setup>
</script>
```

### 尺寸

尺寸

```vue
<template>
<wd-radio-group v-model="value" size="large">
  <wd-radio value="1">沃特</wd-radio>
  <wd-radio value="2">商家后台</wd-radio>
</wd-radio-group>
</template>

<script lang="ts" setup>
</script>
```

### Props优先级

radio设置的props优先级比radioGroup上设置的props优先级更高

```vue
<template>
<wd-radio-group v-model="value" shape="button" disabled checked-color="#f00">
    <wd-radio value="1" :disabled="false" checked-color="#000">商家后台</wd-radio>
    <wd-radio value="2" :disabled="false">沃特</wd-radio>
    <wd-radio value="3">商家智能</wd-radio>
  </wd-radio-group>
</template>

<script lang="ts" setup>
</script>
```

