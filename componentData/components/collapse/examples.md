## Collapse 组件示例

### 基本使用

基本使用

```vue
<template>
<wd-collapse v-model="value">
  <wd-collapse-item title="标签1" name="item1">这是一条简单的示例文字。</wd-collapse-item>
  <wd-collapse-item title="标签2" name="item2">这是一条简单的示例文字。</wd-collapse-item>
  <wd-collapse-item name="item3">
    <template #title="{ expanded, disabled, isFirst }">
      <view class="header">
        <text style="color: red">通过 slot 自定义标题</text>
        <text>{{ expanded ? '我展开了' : '我已收起' }}</text>
      </view>
    </template>
    这是一条简单的示例文字。
  </wd-collapse-item>
</wd-collapse>
</template>

<script lang="ts" setup>
const value = ref<string[]>(['item1'])
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
```

### 手风琴

手风琴

```vue
<template>
<wd-collapse v-model="value" accordion>
  <wd-collapse-item title="标签1" name="item1">这是一条简单的示例文字。</wd-collapse-item>
  <wd-collapse-item title="标签2" name="item2">这是一条简单的示例文字。</wd-collapse-item>
  <wd-collapse-item title="标签3" name="item3">这是一条简单的示例文字。</wd-collapse-item>
</wd-collapse>
</template>

<script lang="ts" setup>
</script>
```

### 禁用

禁用

```vue
<template>
<wd-collapse v-model="value">
  <wd-collapse-item title="标签1" name="item1">这是一条简单的示例文字。</wd-collapse-item>
  <wd-collapse-item title="标签2" name="item2" disabled>这是一条简单的示例文字。</wd-collapse-item>
  <wd-collapse-item title="标签3" name="item3">这是一条简单的示例文字。</wd-collapse-item>
</wd-collapse>
</template>

<script lang="ts" setup>
</script>
```

### 异步更新

异步更新

```vue
<template>
<wd-collapse v-model="value">
  <wd-collapse-item v-for="(item, index) in itemList" :before-expend="beforeExpend" :key="index" :title="item.title" :name="item.name">
    {{ item.body }}
  </wd-collapse-item>
</wd-collapse>
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'
const toast = useToast()
const value = ref<string[]>(['item1'])

const itemList = ref<Record<string, any>[]>([
  {
    title: '标签1',
    name: 'item1',
    body: '如订单处于暂停状态，进入“我的订单”页面，找到要取消的订单，点击“取消订单”按钮；选择订单取消原因后，点击“下一步”提交申请即可。'
  },
  {
    title: '标签1',
    name: 'item2',
    body: '一般情况下，买家只能向商户申请退款，商户确认可以退款后，可以通过接口或者商户平台向微信支付发起退款申请。'
  },
  {
    title: '标签1',
    name: 'item3',
    body: '将收到的有质量问题的商品照片或者订单截图上传到微信公众账号（微信关注联华华商公众号），我们的工作人员会尽快帮您处理。'
  },
  {
    title: '标签1',
    name: 'item4',
    body: '七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。'
  },
  {
    title: '标签1',
    name: 'item5',
    body: 'Q1:优惠券使用详情？详情页面【我的】-【我的优惠】-【优惠券规则说明】。'
  }
])

/**
 * 折叠面板展开前回调方法
 * @param e
 */
function beforeExpend(name) {
  const index = itemList.value.findIndex((item) => {
    return item.name === name
  })
  if (index > -1) {
    itemList.value[index].body =
      'Q1:七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。'
  }

  return new Promise((reslove, reject) => {
    toast.loading('加载中')
    setTimeout(() => {
      toast.close()
      reslove(true)
    }, 500)
  })
}
</script>
```

### 查看更多

查看更多

```vue
<template>
<wd-collapse viewmore v-model="value">
  这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。
</wd-collapse>
</template>

<script lang="ts" setup>
</script>
```

### 查看更多-使用插槽

查看更多-使用插槽

```vue
<template>
<wd-collapse viewmore v-model="value" @change="handleChange" use-more-slot custom-more-slot-class="more-slot">
  具名插槽：这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。
  <template #more>
    <view>显示全部</view>
  </template>
</wd-collapse>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
:deep(.more-slot) {
  color: red;
}
</style>
```

### 嵌套使用

嵌套使用

```vue
<template>
<view class="collapse">
  <wd-collapse v-model="collapseRoot">
    <wd-collapse-item custom-body-style="padding:0 0 0 14px" v-for="item in 5" :key="item" :title="`标签${item}`" :name="`${item}`">
      <wd-collapse v-model="collapseList[item - 1]">
        <wd-collapse-item
          v-for="(item, index) in itemList"
          :custom-class="index === 0 ? 'no-border' : ''"
          :key="index"
          :title="item.title"
          :name="item.name"
        >
          {{ item.body }}
        </wd-collapse-item>
      </wd-collapse>
    </wd-collapse-item>
  </wd-collapse>
</view>
</template>

<script lang="ts" setup>
const collapseRoot = ref<string[]>(['0'])
const collapseList = ref<Array<string[]>>([['item1'], ['item2'], ['item3'], ['item4'], ['item5']])
</script>

<style lang="scss">
.collapse {
  :deep() {
    .no-border {
      &::after {
        display: none;
      }
    }
  }
}
</style>
```

### Methods

Methods

| 方法名    | 说明                                                                             | 参数                                 | 最低版本 |
| --------- | -------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| toggleAll | 切换所有面板展开状态，传 `true` 为全部展开，`false` 为全部收起，不传参为全部切换 | `options?: CollapseToggleAllOptions` | 0.2.6    |

### CollapseItem 外部样式类

CollapseItem 外部样式类

| 类名              | 说明                           | 最低版本         |
| ----------------- | ------------------------------ | ---------------- |
| custom-class      | collapseItem 根节点样式        | -                |
| custom-body-style | 自定义折叠面板内容容器的样式   | 1.4.0 |
| custom-body-class | 自定义折叠面板内容容器的样式类 | 1.4.0 |

### Collapse 外部样式类

Collapse 外部样式类

| 类名                   | 说明                               | 最低版本 |
| ---------------------- | ---------------------------------- | -------- |
| custom-class           | collapse 根节点样式                | -        |
| custom-more-slot-class | 查看更多模式下的插槽外部自定义样式 | -        |

