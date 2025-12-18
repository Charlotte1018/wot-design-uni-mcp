## Scrollbar 组件示例

### basic-usage

通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。

```vue
<template>
  <fin-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </fin-scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fin-color-primary-light-9);
  color: var(--fin-color-primary);
}
</style>
```

### horizontal-scroll

当元素宽度大于滚动条宽度时，会显示横向滚动条。

```vue
<template>
  <fin-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </fin-scrollbar>
</template>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fin-color-danger-light-9);
  color: var(--fin-color-danger);
}
</style>
```

### max-height

当元素高度超过最大高度，才会显示滚动条。

```vue
<template>
  <fin-button @click="add">Add Item</fin-button>
  <fin-button @click="onDelete">Delete Item</fin-button>
  <fin-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </fin-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fin-color-primary-light-9);
  color: var(--fin-color-primary);
}
</style>
```

### manual-scroll

通过使用 `setScrollTop` 与 `setScrollLeft` 方法，可以手动控制滚动条滚动。

```vue
<template>
  <fin-scrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">
    <div ref="innerRef">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </fin-scrollbar>

  <fin-slider
    v-model="value"
    :max="max"
    :format-tooltip="formatTooltip"
    @input="inputSlider"
  />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { FinScrollbar } from '@jdt/find-plus'

const max = ref(0)
const value = ref(0)
const innerRef = ref<HTMLDivElement>()
const scrollbarRef = ref<InstanceType<typeof FinScrollbar>>()

onMounted(() => {
  max.value = innerRef.value!.clientHeight - 380
})

const inputSlider = (value: number) => {
  scrollbarRef.value!.setScrollTop(value)
}
const scroll = ({ scrollTop }) => {
  value.value = scrollTop
}
const formatTooltip = (value: number) => {
  return `${value} px`
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fin-color-primary-light-9);
  color: var(--fin-color-primary);
}
.fin-slider {
  margin-top: 20px;
}
</style>
```

