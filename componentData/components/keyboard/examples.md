## Keyboard 组件示例

### 基本用法

通过

```vue
<template>
<wd-cell title="默认键盘" is-link @click="showKeyBoard" />

<wd-keyboard v-model:visible="visible" @input="onInput" @delete="onDelete"></wd-keyboard>
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

<wd-keyboard v-model:visible="visible" mode="custom" extra-key="." close-text="完成" @input="onInput" @delete="onDelete"></wd-keyboard>
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

<wd-keyboard v-model:visible="visible" extra-key="X" close-text="完成" @input="onInput" @delete="onDelete" />
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

### 车牌号键盘

车牌号键盘

```vue
<template>
<wd-cell title="车牌号键盘" is-link @click="showKeyBoard" />

<wd-keyboard v-model:visible="visible" mode="car" @input="onInput" @delete="onDelete"></wd-keyboard>
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

### 车牌号键盘语言控制

车牌号键盘语言控制

```vue
<template>
<!-- 受控模式：手动控制语言切换 -->
<wd-cell title="车牌号键盘（受控）" :value="value" is-link @click="showKeyBoard" />

<wd-keyboard v-model="value" v-model:visible="visible" v-model:car-lang="lang" mode="car" @input="onInput" @delete="onDelete"></wd-keyboard>

<!-- 非受控模式：禁用自动切换 -->
<wd-cell title="车牌号键盘（非受控）" :value="value2" is-link @click="showKeyBoard2" />

<wd-keyboard v-model="value2" v-model:visible="visible2" mode="car" auto-switch-lang @input="onInput" @delete="onDelete"></wd-keyboard>
</template>

<script lang="ts" setup>
const { show: showToast } = useToast()
const visible = ref<boolean>(false)
const visible2 = ref<boolean>(false)
const value = ref<string>('')
const value2 = ref<string>('')
const lang = ref<'zh' | 'en'>('zh')

function showKeyBoard() {
  visible.value = true
}

function showKeyBoard2() {
  visible2.value = true
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

<wd-keyboard v-model:visible="visible" title="输入密码" extra-key="." close-text="完成" @input="onInput" @delete="onDelete" />
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

### 使用slot自定义标题

使用 slot 自定义标题

```vue
<template>
<wd-cell title="使用 slot 自定义标题" is-link @click="showKeyBoard" />

<wd-keyboard v-model:visible="visible" extra-key="." close-text="完成" @input="onInput" @delete="onDelete">
  <template #title>
    <text style="color: red">自定义标题</text>
  </template>
</wd-keyboard>
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

当

```vue
<template>
<wd-cell title="多个额外按键" is-link @click="showKeyBoard" />

<wd-keyboard v-model:visible="visible" mode="custom" :extra-key="['00', '.']" close-text="完成" @input="onInput" @delete="onDelete" />
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

<wd-keyboard v-model:visible="visible" random-key-order @input="onInput" @delete="onDelete" />
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

通过

```vue
<template>
<wd-cell title="双向绑定" :value="value1" is-link @click="showKeyBoard" />
<wd-keyboard
  v-model="value1"
  :maxlength="6"
  v-model:visible="visible"
  title="键盘标题"
  extra-key="."
  close-text="完成"
  @input="onInput"
  @delete="onDelete"
></wd-keyboard>
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
<wd-keyboard :modal="true" :hide-on-click-outside="true" v-model:visible="visible" @input="onInput" @delete="onDelete" />
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

### attributes

Attributes

| 参数                | 说明                                                                 | 类型                  | 可选值                     | 默认值     | 最低版本 |
| ------------------- | -------------------------------------------------------------------- | --------------------- | -------------------------- | ---------- | -------- |
| v-model:visible     | 是否展开                                                             | `boolean`             | -                          | `false`    | 1.3.10   |
| v-model             | 绑定的值                                                             | `string`              | -                          | -          | 1.3.10   |
| title               | 标题                                                                 | `string`              | -                          | -          | 1.3.10   |
| mode                | 键盘模式                                                             | `string`              | `default`, `car`, `custom` | `default`  | 1.3.10   |
| zIndex              | 层级                                                                 | `number`              | -                          | `100`      | 1.3.10   |
| maxlength           | 最大长度                                                             | `number`              | -                          | `Infinity` | 1.3.10   |
| showDeleteKey       | 是否显示删除键                                                       | `boolean`             | -                          | `true`     | 1.3.10   |
| randomKeyOrder      | 是否随机键盘按键顺序                                                 | `boolean`             | -                          | `false`    | 1.3.10   |
| closeText           | 确认按钮文本                                                         | `string`              | -                          | -          | 1.3.10   |
| deleteText          | 删除按钮文本                                                         | `string`              | -                          | -          | 1.3.10   |
| closeButtonLoading  | 关闭按钮是否显示加载状态                                             | `boolean`             | -                          | `false`    | 1.3.10   |
| modal               | 是否显示蒙层遮罩                                                     | `boolean`             | -                          | `false`    | 1.3.10   |
| hideOnClickOutside  | 是否在点击外部时收起键盘                                             | `boolean`             | -                          | `true`     | 1.3.10   |
| lockScroll          | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动                     | `boolean`             | -                          | `true`     | 1.3.10   |
| safeAreaInsetBottom | 是否在底部安全区域内                                                 | `boolean`             | -                          | `true`     | 1.3.10   |
| extraKey            | 额外按键                                                             | `string` / `string[]` | -                          | -          | 1.3.10   |
| root-portal         | 是否从页面中脱离出来，用于解决各种 fixed 失效问题                    | `boolean`             | -                          | `false`    | 1.11.0   |
| v-model:carLang    | 车牌键盘语言模式，当 mode=car 时生效                                 | `string`              | `zh`, `en`                 | -          | 1.13.0   |
| autoSwitchLang    | 是否自动切换车牌键盘语言，当 mode=car 且 car-lang 是非受控状态时生效 | `boolean`             | -                          | `false`    | 1.13.0   |

### events

Events

| 事件名称 | 说明                           | 参数        | 最低版本 |
| -------- | ------------------------------ | ----------- | -------- |
| input    | 点击按键时触发                 | key: string | -        |
| delete   | 点击删除键时触发               | -           | -        |
| close    | 点击关闭按钮或非键盘区域时触发 | -           | -        |

### 外部样式类

外部样式类

| 类名         | 说明         | 最低版本 |
| ------------ | ------------ | -------- |
| custom-class | 根节点样式类 | 1.3.10   |
| custom-style | 根节点样式   | 1.3.10   |

