## Slider 组件示例

### basic-usage

通过设置绑定值自定义滑块的初始值

```vue
<template>
  <div class="slider-demo-block">
    <span class="demonstration">Default value</span>
    <fin-slider v-model="value1" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Customized initial value</span>
    <fin-slider v-model="value2" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Hide Tooltip</span>
    <fin-slider v-model="value3" :show-tooltip="false" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Format Tooltip</span>
    <fin-slider v-model="value4" :format-tooltip="formatTooltip" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Disabled</span>
    <fin-slider v-model="value5" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
const value5 = ref(0)

const formatTooltip = (val: number) => {
  return val / 100
}
</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .fin-slider {
  margin-top: 0;
  margin-left: 12px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--fin-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .fin-slider {
  flex: 0 0 70%;
}
</style>
```

### discrete-values

改变`step`的值可以改变步长， 通过设置 `show-stops` 属性可以显示间断点

```vue
<template>
  <div class="slider-demo-block">
    <span class="demonstration">Breakpoints not displayed</span>
    <fin-slider v-model="value1" :step="10" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Breakpoints displayed</span>
    <fin-slider v-model="value2" :step="10" show-stops />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .fin-slider {
  margin-top: 0;
  margin-left: 12px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--fin-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .fin-slider {
  flex: 0 0 70%;
}
</style>
```

### slider-with-input-box

设置 `show-input` 属性会在右侧显示一个输入框

```vue
<template>
  <div class="slider-demo-block">
    <fin-slider v-model="value" show-input />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .fin-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
```

### sizes



```vue
<template>
  <fin-slider v-model="value" show-input size="large" />
  <fin-slider v-model="value" show-input />
  <fin-slider v-model="value" show-input size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<style scoped>
.fin-slider {
  margin-top: 20px;
}

.fin-slider:first-child {
  margin-top: 0;
}
</style>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .fin-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
```

### placement



```vue
<template>
  <div class="slider-demo-block">
    <fin-slider v-model="value1" />
  </div>
  <div class="slider-demo-block">
    <fin-slider v-model="value2" placement="bottom" />
  </div>
  <div class="slider-demo-block">
    <fin-slider v-model="value3" placement="right" />
  </div>
  <div class="slider-demo-block">
    <fin-slider v-model="value4" placement="left" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .fin-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
```

### range-selection

配置 `range` 属性以激活范围选择模式，该属性的绑定值是一个数组，由最小边界值和最大边界值组成。

```vue
<template>
  <div class="slider-demo-block">
    <fin-slider v-model="value" range show-stops :max="10" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([4, 8])
</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .fin-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
```

### vertical-mode

配置 `vertical` 属性为 `true` 启用垂直模式。 在垂直模式下，必须设置 `height` 属性。

```vue
<template>
  <div class="slider-demo-block">
    <fin-slider v-model="value" vertical height="200px" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .fin-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
```

### show-marks

设置 `marks` 属性可以在滑块上显示标记。

```vue
<template>
  <div class="slider-demo-block">
    <fin-slider v-model="value" range :marks="marks" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { CSSProperties } from 'vue'

interface Mark {
  style: CSSProperties
  label: string
}

type Marks = Record<number, Mark | string>

const value = ref([30, 60])
const marks = reactive<Marks>({
  0: '0°C',
  8: '8°C',
  37: '37°C',
  50: {
    style: {
      color: '#1989FA',
    },
    label: '50%',
  },
})
</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .fin-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
```

