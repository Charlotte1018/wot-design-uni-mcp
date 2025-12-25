## PasswordInput 组件示例

### 基础用法

搭配数字键盘组件来实现密码输入功能。

```vue
<template>
<!-- 密码输入框 -->
<wd-password-input v-model="value" :focused="showKeyboard" @focus="showKeyboard = true" />
<!-- 数字键盘 -->
<wd-number-keyboard v-model="value" v-model:visible="showKeyboard" :maxlength="4" @blur="showKeyboard = false" />

<!-- 密码输入框 -->
<wd-password-input v-model="value" :length="4" :focused="showKeyboard" @focus="showKeyboard = true" />
<wd-number-keyboard v-model="value" v-model:visible="showKeyboard" :maxlength="4" @blur="showKeyboard = false"></wd-number-keyboard>

<!-- 密码输入框 -->
<wd-password-input v-model="value" :gutter="10" :focused="showKeyboard" @focus="showKeyboard = true" />

<!-- 密码输入框 -->
<wd-password-input v-model="value" :mask="false" :focused="showKeyboard" @focus="showKeyboard = true" />

<!-- 密码输入框 -->
<wd-password-input v-model="value" info="密码为 6 位数字" :error-info="errorInfo" :focused="showKeyboard" @focus="showKeyboard = true" />
<!-- 数字键盘 -->
<wd-number-keyboard v-model="value" :show="showKeyboard" :maxlength="6" @blur="showKeyboard = false" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string>('123')
const showKeyboard = ref<boolean>(true)

import { ref, watch } from 'vue'

const value = ref('123')
const errorInfo = ref('')
const showKeyboard = ref(true)

watch(value, (newVal) => {
  if (newVal.length === 6 && newVal !== '123456') {
    errorInfo.value = '密码错误'
  } else {
    errorInfo.value = ''
  }
})
</script>
```

