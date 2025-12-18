## Progress 组件示例

### linear-progress-bar

Progress 组件设置 `percentage` 属性即可，表示进度条对应的百分比。 该属性**必填**，并且必须在 `0-100` 的范围内。 你可以通过设置 `format` 来自定义文字显示的格式。

```vue
<template>
  <div class="demo-progress">
    <fin-progress :percentage="50" />
    <fin-progress :percentage="100" :format="format" />
    <fin-progress :percentage="100" status="success" />
    <fin-progress :percentage="100" status="warning" />
    <fin-progress :percentage="50" status="exception" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped>
.demo-progress .fin-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
```

### internal-percentage

Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来改变进度条内部的文字。

```vue
<template>
  <div class="demo-progress">
    <fin-progress :text-inside="true" :stroke-width="26" :percentage="70" />
    <fin-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    />
    <fin-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    />
    <fin-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    />
  </div>
</template>

<style scoped>
.demo-progress .fin-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
```

### custom-color



```vue
<template>
  <div class="demo-progress">
    <fin-progress :percentage="percentage" :color="customColor" />

    <fin-progress :percentage="percentage" :color="customColorMethod" />

    <fin-progress :percentage="percentage" :color="customColors" />
    <fin-progress :percentage="percentage" :color="customColors" />
    <div>
      <fin-button-group>
        <fin-button :icon="Minus" @click="decrease" />
        <fin-button :icon="Plus" @click="increase" />
      </fin-button-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Minus, Plus } from '@jdt/find-plus-icons-vue'

const percentage = ref(20)
const customColor = ref('#409eff')

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const customColorMethod = (percentage: number) => {
  if (percentage < 30) {
    return '#909399'
  }
  if (percentage < 70) {
    return '#e6a23c'
  }
  return '#67c23a'
}
const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
</script>
<style scoped>
.demo-progress .fin-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
```

### circular-progress-bar

Progress 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。

```vue
<template>
  <div class="demo-progress">
    <fin-progress type="circle" :percentage="0" />
    <fin-progress type="circle" :percentage="25" />
    <fin-progress type="circle" :percentage="100" status="success" />
    <fin-progress type="circle" :percentage="70" status="warning" />
    <fin-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>
<style scoped>
.demo-progress .fin-progress--circle {
  margin-right: 15px;
}
</style>
```

### dashboard-progress-bar



```vue
<template>
  <div class="demo-progress">
    <fin-progress type="dashboard" :percentage="percentage" :color="colors" />
    <fin-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <div>
      <fin-button-group>
        <fin-button :icon="Minus" @click="decrease" />
        <fin-button :icon="Plus" @click="increase" />
      </fin-button-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Minus, Plus } from '@jdt/find-plus-icons-vue'

const percentage = ref(10)
const percentage2 = ref(0)

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10
  }, 500)
})
</script>
<style scoped>
.demo-progress .fin-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .fin-progress--circle {
  margin-right: 15px;
}
</style>
```

### customized-content

通过默认插槽添加自定义内容。

```vue
<template>
  <div class="demo-progress">
    <fin-progress :percentage="50">
      <fin-button text>Content</fin-button>
    </fin-progress>
    <fin-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </fin-progress>
    <fin-progress type="circle" :percentage="100" status="success">
      <fin-button type="success" :icon="Check" circle />
    </fin-progress>
    <fin-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </fin-progress>
  </div>
</template>

<script lang="ts" setup>
import { Check } from '@jdt/find-plus-icons-vue'
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .fin-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .fin-progress--circle {
  margin-right: 15px;
}
</style>
```

### indeterminate-progress

使用 `intermediate` 属性来设置不确定的进度， `duration` 来控制动画持续时间。

```vue
<template>
  <div class="demo-progress">
    <fin-progress :percentage="50" :indeterminate="true" />
    <fin-progress :percentage="100" :format="format" :indeterminate="true" />
    <fin-progress
      :percentage="100"
      status="success"
      :indeterminate="true"
      :duration="5"
    />
    <fin-progress
      :percentage="100"
      status="warning"
      :indeterminate="true"
      :duration="1"
    />
    <fin-progress :percentage="50" status="exception" :indeterminate="true" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>
<style scoped>
.demo-progress .fin-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
```

### striped-progress

通过设置 `striped` 属性获取条纹进度条。 也可以使用 `striped-flow` 属性来使条纹流动起来。 使用`duration` 属性来控制条纹流动的速度。

```vue
<template>
  <div class="demo-progress">
    <fin-progress :percentage="50" :stroke-width="15" striped />
    <fin-progress
      :percentage="30"
      :stroke-width="15"
      status="warning"
      striped
      striped-flow
    />
    <fin-progress
      :percentage="100"
      :stroke-width="15"
      status="success"
      striped
      striped-flow
      :duration="10"
    />
    <fin-progress
      :percentage="percentage"
      :stroke-width="15"
      status="exception"
      striped
      striped-flow
      :duration="duration"
    />
    <fin-button-group>
      <fin-button :icon="Minus" @click="decrease" />
      <fin-button :icon="Plus" @click="increase" />
    </fin-button-group>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Minus, Plus } from '@jdt/find-plus-icons-vue'

const percentage = ref<number>(70)
const duration = computed(() => Math.floor(percentage.value / 10))

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
</script>

<style scoped>
.demo-progress .fin-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
```

