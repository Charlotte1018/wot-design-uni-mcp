## Popover 组件示例

### 基本用法

Popover 的属性与 [Tooltip](/component/tooltip.html) 很类似，因此对于重复属性，请参考 [Tooltip](/component/tooltip.html) 的文档，在此文档中不做详尽解释。

```vue
<template>
<view @click="closeOutside">
  <wd-popover content="这是一段信息。" @change="handleChange">
    <wd-button>点击展示</wd-button>
  </wd-popover>
</view>
</template>

<script lang="ts" setup>
import { useQueue } from '@/uni_modules/wot-design-uni'

const { closeOutside } = useQueue()
function handleChange({ show }) {
  console.log(show)
}
</script>
```

### 模式 mode

模式 mode

```vue
<template>
<wd-popover mode="menu" :content="menu" @menuclick="link" @change="handleChange">
  <wd-button>列表</wd-button>
</wd-popover>
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'

const toast = useToast()

const menu = ref<Array<Record<string, any>>>([
  {
    iconClass: 'read',
    content: '全部标记已读'
  },
  {
    iconClass: 'delete',
    content: '清空最近会话'
  },
  {
    iconClass: 'detection',
    content: '消息订阅设置'
  },
  {
    iconClass: 'subscribe',
    content: '消息异常检测'
  }
])

function link(e) {
  toast.show('选择了' + e.item.content)
}
</script>
```

### 嵌套信息

嵌套信息

```vue
<template>
<wd-popover use-content-slot>
  <template #content>
    <view class="pop-content">这是一段自定义样式的内容。</view>
  </template>
  <wd-button>点击展示</wd-button>
</wd-popover>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.pop-content {
  /* 必填 开始 */
  position: relative;
  z-index: 500;
  border-radius: 4px;
  /* 必填 结束 */
  background: #fff;
  color: #8268de;
  font-weight: bolder;
  padding: 10px;
  width: 150px;
}
</style>
```

### Methods

Methods

| 方法名称 | 说明             | 参数 | 最低版本 |
| -------- | ---------------- | ---- | -------- |
| open     | 打开文字提示弹框 | -    | -        |
| close    | 关闭文字提示弹框 | -    | -        |

### Popover 外部样式类

Popover 外部样式类

| 类名         | 说明         | 最低版本 |
| ------------ | ------------ | -------- |
| custom-class | 根节点样式   | -        |
| custom-arrow | 尖角样式     | -        |
| custom-pop   | 文字提示样式 | -        |

