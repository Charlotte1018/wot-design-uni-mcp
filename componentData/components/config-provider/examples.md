## ConfigProvider 组件示例

### usage

使用两个属性来提供 i18n 相关配置

```vue
<template>
  <div>
    <fin-button mb-2 @click="toggle">Switch Language</fin-button>
    <br />

    <fin-config-provider :locale="locale">
      <fin-table mb-1 :data="[]" />
      <fin-pagination :total="100" />
    </fin-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import zhCn from '@jdt/find-plus/dist/locale/zh-cn.mjs'
import en from '@jdt/find-plus/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>
```

### button



```vue
<template>
  <div>
    <div m="b-2">
      <fin-checkbox v-model="config.autoInsertSpace"
        >autoInsertSpace</fin-checkbox
      >
    </div>

    <fin-config-provider :button="config">
      <fin-button>中文</fin-button>
    </fin-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const config = reactive({
  autoInsertSpace: true,
})
</script>
```

### message



```vue
<template>
  <div>
    <fin-config-provider :message="config">
      <fin-button @click="open">OPEN</fin-button>
    </fin-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { FinMessage } from '@jdt/find-plus'
const config = reactive({
  max: 3,
})
const open = () => {
  FinMessage('This is a message.')
}
</script>
```

