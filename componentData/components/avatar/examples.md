## Avatar 组件示例

### basic



```vue
<template>
  <fin-row class="demo-avatar demo-basic">
    <fin-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block">
          <fin-avatar :size="50" :src="circleUrl" />
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <fin-avatar :size="size" :src="circleUrl" />
        </div>
      </div>
    </fin-col>
    <fin-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block">
          <fin-avatar shape="square" :size="50" :src="squareUrl" />
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <fin-avatar shape="square" :size="size" :src="squareUrl" />
        </div>
      </div>
    </fin-col>
  </fin-row>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>

<style scoped>
.demo-basic {
  text-align: center;
}
.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--fin-text-color-secondary);
}
.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demo-basic .block:not(:last-child) {
  border-right: 1px solid var(--fin-border-color);
}
.demo-basic .block {
  flex: 1;
}
.demo-basic .fin-col:not(:last-child) {
  border-right: 1px solid var(--fin-border-color);
}
</style>
```

### types



```vue
<template>
  <div class="demo-type">
    <div>
      <fin-avatar :icon="People" />
    </div>
    <div>
      <fin-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
    <div>
      <fin-avatar> user </fin-avatar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { People } from '@jdt/find-plus-icons-vue'
</script>

<style scoped>
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--fin-border-color);
}
</style>
```

### fallback



```vue
<template>
  <div class="demo-type">
    <fin-avatar :size="60" src="https://empty" @error="errorHandler">
      <img
        src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      />
    </fin-avatar>
  </div>
</template>

<script lang="ts" setup>
const errorHandler = () => true
</script>
```

### fit



```vue
<template>
  <div class="demo-fit">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="title">{{ fit }}</span>
      <fin-avatar shape="square" :size="100" :fit="fit" :src="url" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
})

const { fits, url } = toRefs(state)
</script>

<style scoped>
.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.demo-fit .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}

.demo-fit .title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--fin-text-color-secondary);
}
</style>
```

