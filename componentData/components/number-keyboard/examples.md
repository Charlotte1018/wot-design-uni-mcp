## NumberKeyboard 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-cell title="默认键盘" is-link @click="showKeyBoard" />

<wd-number-keyboard v-model:visible="visible" @input="onInput" @delete="onDelete"></wd-number-keyboard>
</template>

<script lang="ts" setup>
const { show: showToast } = useToast()
const visible = ref<boolean>(false)

function showKeyBoard() {
  visible.value = true
}

const onInput = (value) => showToast(`${value}`)
const onDelete = () => showToast('删除')
</script>
```

### 带右侧栏的键盘

带右侧栏的键盘

```vue
<template>
<wd-cell title="带右侧栏的键盘" is-link @click="showKeyBoard" />

<wd-number-keyboard v-model:visible="visible" mode="custom" extra-key="." close-text="完成" @input="onInput" @delete="onDelete"></wd-number-keyboard>
</template>

<script lang="ts" setup>
const { show: showToast } = useToast()
const visible = ref<boolean>(false)

function showKeyBoard() {
  visible.value = true
}

const onInput = (value) => showToast(`${value}`)
const onDelete = () => showToast('删除')
</script>
```

### 身份证键盘

身份证键盘

```vue
<template>
<wd-cell title="身份证键盘" is-link @click="showKeyBoard" />

<wd-number-keyboard v-model:visible="visible" extra-key="X" close-text="完成" @input="onInput" @delete="onDelete" />
</template>

<script lang="ts" setup>
const { show: showToast } = useToast()
const visible = ref<boolean>(false)

function showKeyBoard() {
  visible.value = true
}

const onInput = (value) => showToast(`${value}`)
const onDelete = () => showToast('删除')
</script>
```

### 带标题的键盘

带标题的键盘

```vue
<template>
<wd-cell title="带标题的键盘" is-link @click="showKeyBoard" />

<wd-number-keyboard v-model:visible="visible" title="输入密码" extra-key="." close-text="完成" @input="onInput" @delete="onDelete" />
</template>

<script lang="ts" setup>
const { show: showToast } = useToast()
const visible = ref<boolean>(false)

function showKeyBoard() {
  visible.value = true
}

const onInput = (value) => showToast(`${value}`)
const onDelete = () => showToast('删除')
</script>
```

### 使用 slot 自定义标题

使用 slot 自定义标题

```vue
<template>
<wd-cell title="使用 slot 自定义标题" is-link @click="showKeyBoard" />

<wd-number-keyboard v-model:visible="visible" extra-key="." close-text="完成" @input="onInput" @delete="onDelete">
  <template #title>
    <text style="color: red">自定义标题</text>
  </template>
</wd-number-keyboard>
</template>

<script lang="ts" setup>
const { show: showToast } = useToast()
const visible = ref<boolean>(false)

function showKeyBoard() {
  visible.value = true
}

const onInput = (value) => showToast(`${value}`)
const onDelete = () => showToast('删除')
</script>
```

### 多个额外按键

多个额外按键

```vue
<template>
<wd-cell title="多个额外按键" is-link @click="showKeyBoard" />

<wd-number-keyboard v-model:visible="visible" mode="custom" :extra-key="['00', '.']" close-text="完成" @input="onInput" @delete="onDelete" />
</template>

<script lang="ts" setup>
const { show: showToast } = useToast()
const visible = ref<boolean>(false)

function showKeyBoard() {
  visible.value = true
}

const onInput = (value) => showToast(`${value}`)
const onDelete = () => showToast('删除')
</script>
```

### 随机数字键盘

随机数字键盘

```vue
<template>
<wd-cell title="随机数字键盘" is-link @click="showKeyBoard" />

<wd-number-keyboard v-model:visible="visible" random-key-order @input="onInput" @delete="onDelete" />
</template>

<script lang="ts" setup>
const { show: showToast } = useToast()
const visible = ref<boolean>(false)

function showKeyBoard() {
  visible.value = true
}

const onInput = (value) => showToast(`${value}`)
const onDelete = () => showToast('删除')
</script>
```

### 双向绑定

双向绑定

```vue
<template>
<wd-cell title="双向绑定" :value="value1" is-link @click="showKeyBoard" />
<wd-number-keyboard
  v-model="value1"
  :maxlength="6"
  v-model:visible="visible"
  title="键盘标题"
  extra-key="."
  close-text="完成"
  @input="onInput"
  @delete="onDelete"
></wd-number-keyboard>
</template>

<script lang="ts" setup>
const { show: showToast } = useToast()
const visible = ref<boolean>(false)
const value1 = ref<string>('')

function showKeyBoard() {
  visible.value = true
}

const onInput = (value) => showToast(`${value}`)
const onDelete = () => showToast('删除')
</script>
```

### 展示蒙层遮罩

展示蒙层遮罩

```vue
<template>
<wd-cell title="双向绑定" :value="value1" is-link @click="showKeyBoard" />
<wd-number-keyboard :modal="true" :hide-on-click-outside="true" v-model:visible="visible" @input="onInput" @delete="onDelete" />
</template>

<script lang="ts" setup>
const { show: showToast } = useToast()
const visible = ref<boolean>(false)
const value1 = ref<string>('')

function showKeyBoard() {
  visible.value = true
}

const onInput = (value) => showToast(`${value}`)
const onDelete = () => showToast('删除')
</script>
```

### 外部样式类

外部样式类

| 类名         | 说明         | 最低版本 |
| ------------ | ------------ | -------- |
| custom-class | 根节点样式类 | 0.1.65   |
| custom-style | 根节点样式   | 0.1.65   |

