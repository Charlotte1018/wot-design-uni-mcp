## Circle 组件示例

### 基础用法

基础用法

```vue
<template>
<wd-circle v-model="current" :text="`进度：${current}%`"></wd-circle>
</template>

<script lang="ts" setup>
const current = ref<number>(10)
</script>
```

### 宽度控制

宽度控制

```vue
<template>
<wd-circle v-model="current" :strokeWidth="15"></wd-circle>
</template>

<script lang="ts" setup>
</script>
```

### 颜色定制

颜色定制

```vue
<template>
<wd-circle v-model="current" color="#1C64FD" layer-color="#EBEEF5"></wd-circle>
</template>

<script lang="ts" setup>
</script>
```

### 渐变色

渐变色

```vue
<template>
<wd-circle v-model="current" :color="gradientColor"></wd-circle>
</template>

<script lang="ts" setup>
const gradientColor = {
  '0%': '#ffd01e',
  '100%': '#ee0a24'
}
</script>
```

### 进度条展开方向

进度条展开方向

```vue
<template>
<wd-circle v-model="current" :clockwise="false"></wd-circle>
</template>

<script lang="ts" setup>
</script>
```

### 大小定制

大小定制

```vue
<template>
<wd-circle v-model="current" :size="300"></wd-circle>
</template>

<script lang="ts" setup>
</script>
```

### attributes

Attributes

| 参数              | 说明                         | 类型                        | 可选值                                     | 默认值          | 最低版本 |
| ----------------- | ---------------------------- | --------------------------- | ------------------------------------------ | --------------- | -------- |
| `v-model` / `modelValue`     | 当前进度                     | number                      | -                                          | `0`             | 0.1.19   |
| `customClass`     | 自定义class                  | string                      | -                                          | -            | 0.1.19   |
| `customStyle`     | 自定义style                  | string                      | -                                          | -            | 0.1.19   |
| `size`            | 圆环直径，默认单位为 px     | number                      | -                                          | `100`           | 0.1.19   |
| `color`           | 进度条颜色                   | string / Record<string, string> | -                                      | `#4d80f0`     | 0.1.19   |
| `layerColor`      | 轨道颜色                     | string                      | -                                          | `#EBEEF5`     | 0.1.19   |
| `fill`            | 填充颜色                     | string                      | -                                          | `#ffffff`     | 0.1.19   |
| `speed`           | 动画速度（单位为 rate/s）    | number                      | -                                          | `50`            | 0.1.19   |
| `text`            | 文字                         | string                      | -                                          | -               | 0.1.19   |
| `strokeWidth`     | 进度条宽度，单位px           | number                      | -                                          | `10`            | 0.1.19   |
| `strokeLinecap`   | 进度条端点的形状             | string                      | `butt` / `round` / `square`             | `round`       | 0.1.19   |
| `clockwise`       | 是否顺时针增加               | boolean                     | -                                          | `true`          | 0.1.19   |

### Circle外部样式类

Circle 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

