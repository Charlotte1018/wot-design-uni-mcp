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

通过名称匹配

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

徽标提示

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

悬浮标签栏

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

自定义图标

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

自定义颜色

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

监听切换事件

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

固定底部

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

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|-----|---------|
| custom-class | 根节点样式类 | 0.1.27 |
| custom-style | 根节点样式 | 0.1.27 |

### TabbarItem 外部样式类

TabbarItem 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|-----|---------|
| custom-class | 根节点样式类 | 0.1.27 |
| custom-style | 根节点样式 | 0.1.27 |

