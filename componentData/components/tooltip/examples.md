## Tooltip 组件示例

### 基本用法

在这里我们提供 12 种不同方向的展示方式，可以通过以下完整示例来理解。

```vue
<template>
<view @click="closeOutside">
  <wd-tooltip @change="handleChange" placement="top" content="top 提示文字">
    <wd-button>top</wd-button>
  </wd-tooltip>
</view>
</template>

<script lang="ts" setup>
import { useQueue } from '@/uni_modules/wot-design-uni'

const { closeOutside } = useQueue()

const show = ref<boolean>(false)
</script>
```

### 更多 Content

展示多行文本或者是设置文本内容的格式

```vue
<template>
<wd-tooltip placement="right" useContentSlot>
  <wd-button>多行文本</wd-button>
  <template #content>
    <view style="color: red; padding: 5px; width: 90px">
      <view>多行文本1</view>
      <view>多行文本2</view>
      <view>多行文本3</view>
    </view>
  </template>
</wd-tooltip>
</template>

<script lang="ts" setup>
import { useQueue } from '@/uni_modules/wot-design-uni'

const { closeOutside } = useQueue()
const show = ref<boolean>(false)
</script>
```

### 显示关闭按钮

显示关闭按钮

```vue
<template>
<wd-tooltip content="显示关闭按钮" show-close>
  <wd-button>显示关闭按钮</wd-button>
</wd-tooltip>
</template>

<script lang="ts" setup>
</script>
```

### 控制显隐

控制显隐

```vue
<template>
<wd-button plain @click="control" size="small" class="button-control">
  {{ show ? '关闭' : '打开' }}
</wd-button>

<wd-tooltip placement="top" content="控制显隐" v-model="show">
  <wd-button :round="false">top</wd-button>
</wd-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref<boolean>(false)

const control = () => {
  show.value = !show.value
}
</script>
```

### 高级扩展

除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：

```vue
<template>
<wd-tooltip placement="right-end" content="禁用" disabled>
  <wd-button>禁用</wd-button>
</wd-tooltip>
</template>

<script lang="ts" setup>
</script>
```

### 控制位置

**注意：由于小程序无法动态插入节点，因此文字气泡位置会根据传入定位的节点最外层位置对齐，如果文字提示位置不在您想要渲染的位置上，可以通过控制组件整体位置达到想要的效果。** 错误用法示例：

```vue
<template>
<wd-tooltip placement="top" content="top 提示文字">
  <wd-button custom-style="margin-left: 100px">top</wd-button>
</wd-tooltip>
<wd-tooltip placement="top" content="top 提示文字">
  <wd-button custom-style="position: absolute; left: 100px;">top</wd-button>
</wd-tooltip>

<wd-tooltip placement="top" content="top 提示文字" custom-style="margin-left: 100px">
  <wd-button>top</wd-button>
</wd-tooltip>
<wd-tooltip placement="top" content="top 提示文字" custom-style="position: absolute; left: 100px;">
  <wd-button>top</wd-button>
</wd-tooltip>
</template>

<script lang="ts" setup>
</script>
```

### Methods

Methods

| 方法名称 | 说明             | 参数 | 最低版本 |
| -------- | ---------------- | ---- | -------- |
| open     | 打开文字提示弹框 | -    | -        |
| close    | 关闭文字提示弹框 | -    | -        |

### Tooltip 外部样式类

Tooltip 外部样式类

| 类名         | 说明         | 最低版本 |
| ------------ | ------------ | -------- |
| custom-class | 根节点样式   | -        |
| custom-arrow | 尖角样式     | -        |
| custom-pop   | 文字提示样式 | -        |

