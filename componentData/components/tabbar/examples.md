## Tabbar 组件示例

### 基础用法

基础用法

```vue
<template>
<wd-tabbar v-model="tabbar">
  <wd-tabbar-item title="首页" icon="home"></wd-tabbar-item>
  <wd-tabbar-item title="分类" icon="cart"></wd-tabbar-item>
  <wd-tabbar-item title="我的" icon="user"></wd-tabbar-item>
</wd-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabbar = ref(1)
</script>
```

### 通过名称匹配

设置

```vue
<template>
<wd-tabbar v-model="tabbar">
  <wd-tabbar-item name="home" title="首页" icon="home"></wd-tabbar-item>
  <wd-tabbar-item name="cart" title="分类" icon="cart"></wd-tabbar-item>
  <wd-tabbar-item name="setting" title="设置" icon="setting"></wd-tabbar-item>
  <wd-tabbar-item name="user" title="我的" icon="user"></wd-tabbar-item>
</wd-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabbar = ref('home')
</script>
```

### 徽标提示

设置

```vue
<template>
<wd-tabbar v-model="tabbar">
  <wd-tabbar-item is-dot :value="2" title="点状" icon="home"></wd-tabbar-item>
  <wd-tabbar-item :value="2" icon="cart" title="分类"></wd-tabbar-item>
  <wd-tabbar-item :value="30" title="我的" icon="user"></wd-tabbar-item>
  <wd-tabbar-item :value="200" title="最大值" icon="user"></wd-tabbar-item>
</wd-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabbar = ref(1)
</script>
```

### 悬浮标签栏

设置

```vue
<template>
<wd-tabbar shape="round" v-model="tabbar">
  <wd-tabbar-item title="首页" is-dot :value="2" icon="home"></wd-tabbar-item>
  <wd-tabbar-item title="分类" :value="2" icon="cart"></wd-tabbar-item>
  <wd-tabbar-item title="相册" :value="30" icon="photo"></wd-tabbar-item>
  <wd-tabbar-item title="我的" :value="200" icon="user"></wd-tabbar-item>
</wd-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabbar = ref(1)
</script>
```

### 自定义图标

使用

```vue
<template>
<wd-tabbar v-model="tabbar">
  <wd-tabbar-item :value="2" title="首页" icon="home"></wd-tabbar-item>
  <wd-tabbar-item :value="2" icon="cart" title="分类">
    <template #icon>
      <wd-img round height="40rpx" width="40rpx" src="https://wot-ui.cn/assets/panda.jpg"></wd-img>
    </template>
  </wd-tabbar-item>
  <wd-tabbar-item :value="3" title="我的" icon="user"></wd-tabbar-item>
</wd-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabbar = ref(1)
</script>
```

### 自定义颜色

设置

```vue
<template>
<wd-tabbar v-model="tabbar" active-color="#ee0a24" inactive-color="#7d7e80">
  <wd-tabbar-item is-dot :value="2" title="点状" icon="home"></wd-tabbar-item>
  <wd-tabbar-item :value="2" icon="cart" title="分类"></wd-tabbar-item>
  <wd-tabbar-item :value="30" title="我的" icon="user"></wd-tabbar-item>
  <wd-tabbar-item :value="200" title="最大值" icon="photo"></wd-tabbar-item>
  <wd-tabbar-item :value="10" title="客服" icon="chat"></wd-tabbar-item>
</wd-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabbar = ref(1)
</script>
```

### 监听切换事件

监听

```vue
<template>
<wd-tabbar v-model="tabbar" @change="handleChange" active-color="#ee0a24" inactive-color="#7d7e80">
  <wd-tabbar-item title="首页" icon="home"></wd-tabbar-item>
  <wd-tabbar-item title="分类" icon="cart"></wd-tabbar-item>
  <wd-tabbar-item title="我的" icon="user"></wd-tabbar-item>
  <wd-tabbar-item title="相册" icon="photo"></wd-tabbar-item>
  <wd-tabbar-item title="客服" icon="chat"></wd-tabbar-item>
</wd-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabbar = ref(1)

function handleChange({ value }: { value: string }) {
  show(`选中标签:${value}`)
}
</script>
```

### 固定底部

设置

```vue
<template>
<wd-tabbar fixed v-model="tabbar" bordered safeAreaInsetBottom placeholder>
  <wd-tabbar-item :value="2" is-dot title="首页" icon="home"></wd-tabbar-item>
  <wd-tabbar-item title="分类" icon="cart"></wd-tabbar-item>
  <wd-tabbar-item title="我的" icon="user"></wd-tabbar-item>
  <wd-tabbar-item :value="200" title="相册" icon="photo"></wd-tabbar-item>
  <wd-tabbar-item :value="10" title="客服" icon="chat"></wd-tabbar-item>
</wd-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabbar = ref(1)
</script>
```

### attributes

Attributes

| 参数                  | 说明                                       | 类型                        | 可选值                               | 默认值            | 最低版本   |
|-----------------------|--------------------------------------------|-----------------------------|--------------------------------------|-------------------|------------|
| model-value / v-model    | 选中标签的索引值或者名称                   | number / string             | -                                    | 0                 | 0.1.27     |
| fixed                | 是否固定在底部                             | boolean                     | -                                    | false             | 0.1.27     |
| safeAreaInsetBottom   | 是否设置底部安全距离（iPhone X 类型的机型） | boolean                     | -                                    | false                 | 0.1.27     |
| bordered              | 是否显示顶部边框                           | boolean                     | -                                    | true              | 0.1.27     |
| shape                | 标签栏的形状                               | TabbarShape                 | 'default' / 'round'                  | 'default'         | 0.1.27     |
| activeColor           | 激活标签的颜色                             | string                      | -                                    | -                | 0.1.27     |
| inactiveColor         | 未激活标签的颜色                         | string                      | -                                    | -                | 0.1.27     |
| placeholder           | 固定在底部时，是否在标签位置生成一个等高的占位元素 | boolean              | -                                    | false             | 0.1.27     |
| zIndex                | tabbar组件的层级                          | number                      | -                                    | 500               | 0.1.27     |

### events

Events

| 事件名称 | 说明                       | 参数        | 最低版本 |
| -------- | -------------------------- | ----------- | -------- |
| change   | tabbar标签切换时触发             | `{ value }` | 0.1.27   |

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|-----|---------|
| custom-class | 根节点样式类 | 0.1.27 |
| custom-style | 根节点样式 | 0.1.27 |

### tabbaritem-attributes

TabbarItem Attributes

| 参数          | 说明           | 类型                    | 可选值           | 默认值   | 最低版本   |
|--------------|----------------|-------------------------|----------------|----------|------------|
| title        | 标签页的标题   | string                  | -              | -        | 0.1.27     |
| name         | 唯一标识符     | string / number         | -              | -        | 0.1.27     |
| icon         | 图标           | string                  | -              | -        | 0.1.27     |
| value        | 徽标显示值     | number / string         | -              | -        | 0.1.27     |
| isDot        | 是否点状徽标   | boolean                 | -              | false    | 0.1.27     |
| max          | 徽标最大值     | number                  | -              | 99       | 0.1.27     |
| badge-props | 自定义徽标的属性，传入的对象会被透传给 [Badge 组件的 props](/component/badge#attributes)	| BadgeProps    | -      | -  | 0.1.50   |

### tabbaritem-slots

TabbarItem Slots

| name   | 说明                 | 参数                    | 最低版本 |
| ------ | -------------------- | ----------------------- | -------- |
| icon  | 	自定义图标         | `active: boolean` | 0.1.27   |

### TabbarItem外部样式类

TabbarItem 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|-----|---------|
| custom-class | 根节点样式类 | 0.1.27 |
| custom-style | 根节点样式 | 0.1.27 |

