## ConfigProvider 组件示例

### 深色模式

深色模式

```vue
<template>
<wd-config-provider theme="dark">...</wd-config-provider>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.wot-theme-dark body {
  color: #f5f5f5;
  background-color: black;
}
</style>
```

### 动态切换

动态切换

```vue
<template>
<wd-config-provider :theme="theme">...</wd-config-provider>
</template>

<script lang="ts" setup>
export default {
  setup() {
    const theme = ref('light')

    setTimeout(() => {
      theme.value = 'dark'
    }, 1000)

    return { theme }
  }
}
</script>
```

### 定制主题

定制主题

```vue
<template>
<wd-config-provider :theme-vars="themeVars">
  <div style="margin: 16px">
    <wd-button round block type="primary">提交</wd-button>
  </div>
</wd-config-provider>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

export default {
  setup() {
    // themeVars 内的值会被转换成对应 CSS 变量
    // 比如 buttonPrimaryBg 会转换成 `--wot-button-primary-bg-color`
    const themeVars = reactive({
      buttonPrimaryBgColor: '#07c160',
      buttonPrimaryColor: '#07c160'
    })
    return {
      themeVars
    }
  }
}

import type { ConfigProviderThemeVars } from 'wot-design-uni';

const themeVars: ConfigProviderThemeVars = {
  colorTheme: 'red'
}
</script>

<style lang="scss">
:root,
page {
  --wot-color-success: red;
  --wot-color-warning: yellow;
}

/* 添加这段样式后，默认 Button 底色会变成绿色 */
:root,
page {
  --wot-button-normal-bg: green;
}
</style>
```

### 全局共享

> 需要配合虚拟根组件([uni-ku-root](https://github.com/uni-ku/root)) 来做全局共享

```vue
<template>




:::

### 引入

- CLI项目: 直接编辑 根目录下的 vite.config.(js|ts)
- HBuilderX项目: 需要在根目录下 创建 vite.config.(js|ts)

:::tip
若存在改变 pages.json 的插件，需要将 UniKuRoot 放置其后
:::

### 使用

1. 创建根组件并处理全局配置组件

- CLI项目: 在 **src** 目录下创建下 App.ku.vue
- HBuilderX项目: 在 **根** 目录下创建 App.ku.vue

:::tip
在 App.ku.vue 中标签 `<KuRootView />` 代表指定视图存放位置
:::

2. 编写控制主题组合式函数

3. 在任意视图文件中使用切换主题模式
</template>

<script lang="ts" setup>
</script>
```

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本         |
| ------------ | ---------- | ---------------- |
| custom-class | 根节点样式 | 1.3.9 |
| custom-style | 根节点样式 | 1.3.9 |

