## Image 组件示例

### basic-usage

可通过`fit`确定图片如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

```vue
<template>
  <div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="demonstration">{{ fit }}</span>
      <fin-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<style scoped>
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### placeholder

可通过`slot = placeholder`可自定义占位内容

```vue
<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <span class="demonstration">Default</span>
      <fin-image />
    </div>
    <div class="block">
      <span class="demonstration">Custom</span>
      <fin-image>
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </fin-image>
    </div>
  </div>
</template>

<style scoped>
.demo-image__placeholder .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image__placeholder .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.demo-image__placeholder .fin-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
}

.demo-image__placeholder.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--fin-fill-color-light);
  color: var(--fin-text-color-secondary);
  font-size: 14px;
}
.demo-image__placeholder .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}
</style>
```

### load-failed

可通过`slot = error`可自定义加载失败内容

```vue
<template>
  <div class="demo-image__error">
    <div class="block">
      <span class="demonstration">Default</span>
      <fin-image />
    </div>
    <div class="block">
      <span class="demonstration">Custom</span>
      <fin-image>
        <template #error>
          <div class="image-slot">
            <fin-icon><icon-picture /></fin-icon>
          </div>
        </template>
      </fin-image>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Picture as IconPicture } from '@jdt/find-plus-icons-vue'
</script>

<style scoped>
.demo-image__error .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image__error .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.demo-image__error .fin-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
  width: 100%;
  height: 200px;
}

.demo-image__error .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--fin-fill-color-light);
  color: var(--fin-text-color-secondary);
  font-size: 30px;
}
.demo-image__error .image-slot .fin-icon {
  font-size: 30px;
}
</style>
```

### lazy-load

可通过`lazy`开启懒加载功能， 当图片滚动到可视范围内才会加载。 可通过 `scroll-container` 来设置滚动容器， 若未定义，则为最近一个 overflow 值为 auto 或 scroll 的父元素。

```vue
<template>
  <div class="demo-image__lazy">
    <fin-image v-for="url in urls" :key="url" :src="url" lazy />
  </div>
</template>

<script lang="ts" setup>
const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
</script>

<style scoped>
.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}
.demo-image__lazy .fin-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .fin-image:last-child {
  margin-bottom: 0;
}
</style>
```

### image-preview

可通过 `previewSrcList` 开启预览大图的功能。 你可以通过 `initial-index` 初始化第一张预览图片的位置。 默认初始位置为 0。

```vue
<template>
  <div class="demo-image__preview">
    <fin-image
      style="width: 100px; height: 100px"
      :src="url"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :preview-src-list="srcList"
      :initial-index="4"
      fit="cover"
    />
  </div>
</template>

<script lang="ts" setup>
const url =
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
</script>

<style scoped>
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .fin-icon {
  font-size: 30px;
}
.demo-image__error .fin-image {
  width: 100%;
  height: 200px;
}
</style>
```

