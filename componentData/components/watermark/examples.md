## Watermark 组件示例

### basic



```vue
<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { isDark } from '~/composables/dark'

const font = reactive({
  color: 'rgba(0, 0, 0, .15)',
})

watch(
  isDark,
  () => {
    font.color = isDark.value
      ? 'rgba(255, 255, 255, .15)'
      : 'rgba(0, 0, 0, .15)'
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <fin-watermark :font="font">
    <div style="height: 500px" />
  </fin-watermark>
</template>
```

### multi-line



```vue
<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { isDark } from '~/composables/dark'

const font = reactive({
  color: 'rgba(0, 0, 0, .15)',
})

watch(
  isDark,
  () => {
    font.color = isDark.value
      ? 'rgba(255, 255, 255, .15)'
      : 'rgba(0, 0, 0, .15)'
  },
  {
    immediate: true,
  }
)
</script>
<template>
  <fin-watermark :font="font" :content="['FinD+', '企业金融']">
    <div style="height: 500px" />
  </fin-watermark>
</template>
```

### image



```vue
<template>
  <fin-watermark
    :width="130"
    :height="30"
    image="https://find-plus/images/find-plus-logo.png"
  >
    <div style="height: 500px" />
  </fin-watermark>
</template>
```

### custom



```vue
<script lang="ts" setup>
import { reactive } from 'vue'

const config = reactive({
  content: '企业金融',
  font: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.15)',
  },
  zIndex: -1,
  rotate: -22,
  gap: [100, 100] as [number, number],
  offset: [] as unknown as [number, number],
})
</script>

<template>
  <div class="wrapper">
    <fin-watermark
      class="watermark"
      :content="config.content"
      :font="config.font"
      :z-index="config.zIndex"
      :rotate="config.rotate"
      :gap="config.gap"
      :offset="config.offset"
    >
      <div class="demo">
        <h1>企业金融</h1>
        <h2>金融科技Vue3组件库</h2>
        <img src="/images/hamburger.png" alt="示例图片" />
      </div>
    </fin-watermark>
    <fin-form
      class="form"
      :model="config"
      label-position="top"
      label-width="50px"
    >
      <fin-form-item label="Content">
        <fin-input v-model="config.content" />
      </fin-form-item>
      <fin-form-item label="Color">
        <fin-color-picker v-model="config.font.color" show-alpha />
      </fin-form-item>
      <fin-form-item label="FontSize">
        <fin-slider v-model="config.font.fontSize" />
      </fin-form-item>
      <fin-form-item label="zIndex">
        <fin-slider v-model="config.zIndex" />
      </fin-form-item>
      <fin-form-item label="Rotate">
        <fin-slider v-model="config.rotate" :min="-180" :max="180" />
      </fin-form-item>
      <fin-form-item label="Gap">
        <fin-space>
          <fin-input-number v-model="config.gap[0]" controls-position="right" />
          <fin-input-number v-model="config.gap[1]" controls-position="right" />
        </fin-space>
      </fin-form-item>
      <fin-form-item label="Offset">
        <fin-space>
          <fin-input-number
            v-model="config.offset[0]"
            placeholder="offsetLeft"
            controls-position="right"
          />
          <fin-input-number
            v-model="config.offset[1]"
            placeholder="offsetTop"
            controls-position="right"
          />
        </fin-space>
      </fin-form-item>
    </fin-form>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}
.watermark {
  display: flex;
  flex: auto;
}
.demo {
  flex: auto;
}
.form {
  width: 330px;
  margin-left: 20px;
  border-left: 1px solid #eee;
  padding-left: 20px;
}

img {
  z-index: 10;
  width: 100%;
  max-width: 300px;
  position: relative;
}
</style>
```

