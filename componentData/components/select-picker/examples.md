## SelectPicker 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-select-picker label="基本用法" v-model="value" :columns="columns" @change="handleChange"></wd-select-picker>
</template>

<script lang="ts" setup>
const columns = ref<Record<string, any>>([
  {
    value: '101',
    label: '男装'
  },
  {
    value: '102',
    label: '奢侈品'
  },
  {
    value: '103',
    label: '女装'
  }
])
const value = ref<string[]>(['101'])

function handleChange({ value }) {
  toast.show('选择了' + value)
}
</script>
```

### 类型切换

类型切换

```vue
<template>
<wd-select-picker label="类型切换" v-model="value" :columns="columns" type="radio"></wd-select-picker>
</template>

<script lang="ts" setup>
const columns = ref<Record<string, any>>([
  {
    value: '101',
    label: '男装'
  },
  {
    value: '102',
    label: '奢侈品'
  },
  {
    value: '103',
    label: '女装'
  }
])
const value = ref<string[]>(['101'])
</script>
```

### 禁用

禁用

```vue
<template>
<wd-select-picker label="禁用" v-model="value" :columns="columns" disabled></wd-select-picker>
</template>

<script lang="ts" setup>
</script>
```

### 只读

只读

```vue
<template>
<wd-select-picker label="只读" v-model="value" :columns="columns" readonly></wd-select-picker>
</template>

<script lang="ts" setup>
</script>
```

### 清空

清空

```vue
<template>
<wd-select-picker label="清空" v-model="value" :columns="columns" clearable></wd-select-picker>
</template>

<script lang="ts" setup>
</script>
```

### 禁用选项

禁用选项

```vue
<template>
<wd-select-picker label="禁用选项" v-model="value" :columns="columns"></wd-select-picker>
</template>

<script lang="ts" setup>
const columns = ref<Record<string, any>>([
  {
    value: '101',
    label: '男装',
    disabled: true
  },
  {
    value: '102',
    label: '奢侈品'
  },
  {
    value: '103',
    label: '女装'
  }
])
const value = ref<string[]>(['101'])
</script>
```

### 展示格式化

展示格式化

```vue
<template>
<wd-select-picker label="展示格式化" v-model="value" :columns="columns" :display-format="displayFormat"></wd-select-picker>
</template>

<script lang="ts" setup>
const columns = ref<Record<string, any>>([
  {
    value: '101',
    label: '男装',
    disabled: true
  },
  {
    value: '102',
    label: '奢侈品'
  },
  {
    value: '103',
    label: '女装'
  }
])
const value = ref<string[]>(['101'])

const displayFormat = (items, columns) => {
  let showValue = ''
  columns.forEach((column) => {
    items.forEach((item, index) => {
      if (column.value === item) {
        showValue += `${item}: ${column.label} ${index + 1 < items.length ? '--' : ''} `
      }
    })
  })
  return showValue
}
</script>
```

### 确定前校验

确定前校验

```vue
<template>
<wd-select-picker label="确定前校验" v-model="value" :columns="columns" :before-confirm="beforeConfirm"></wd-select-picker>
</template>

<script lang="ts" setup>
const columns = ref<Record<string, any>>([
  {
    value: '101',
    label: '男装'
  },
  {
    value: '102',
    label: '奢侈品'
  },
  {
    value: '103',
    label: '女装'
  }
])
const value = ref<string[]>(['101'])

const beforeConfirm = (value, resolve) => {
  if (value.length > 0) {
    toast.error('暂时无法选择商品')
    resolve(false)
  } else {
    resolve(true)
  }
}
</script>
```

### 设置标题

设置标题

```vue
<template>
<wd-select-picker label="标题" v-model="value" :columns="columns" title="多选"></wd-select-picker>
</template>

<script lang="ts" setup>
</script>
```

### 错误状态

错误状态

```vue
<template>
<wd-select-picker label="错误" v-model="value" :columns="columns" error></wd-select-picker>
</template>

<script lang="ts" setup>
</script>
```

### 必填样式

必填样式

```vue
<template>
<wd-select-picker label="必填" v-model="value" :columns="columns" required></wd-select-picker>
</template>

<script lang="ts" setup>
</script>
```

### 选择器大小

设置

```vue
<template>
<wd-select-picker label="大尺寸" v-model="value" :columns="columns" size="large"></wd-select-picker>
</template>

<script lang="ts" setup>
</script>
```

### 值靠右展示

值靠右展示

```vue
<template>
<wd-select-picker label="值靠右展示" v-model="value" :columns="columns" align-right></wd-select-picker>
</template>

<script lang="ts" setup>
</script>
```

### 可搜索

可搜索

```vue
<template>
<wd-select-picker label="可搜索" v-model="value" :columns="columns" filterable></wd-select-picker>
</template>

<script lang="ts" setup>
</script>
```

### 自动完成

自动完成

```vue
<template>
<wd-select-picker label="自动完成" type="radio" :show-confirm="false" v-model="value19" :columns="columns" />
</template>

<script lang="ts" setup>
</script>
```

### 自定义选择器

如果默认的 cell 类型的展示格式不满足需求，可以通过默认插槽进行自定义选择器样式。

```vue
<template>
<view>当前选中项：{{customShow}}</view>
<wd-select-picker v-model="value" use-default-slot :columns="columns" @confirm="handleConfirm">
  <wd-button>默认唤起项</wd-button>
</wd-select-picker>
</template>

<script lang="ts" setup>
const value = ref<string[]>(['102'])

const columns = ref<Record<string, any>>([
  {
    value: '101',
    label: '男装'
  },
  {
    value: '102',
    label: '奢侈品'
  },
  {
    value: '103',
    label: '女装'
  },
  {
    value: '104',
    label: '鞋靴'
  },
  {
    value: '105',
    label: '内衣配饰'
  },
  {
    value: '106',
    label: '箱包'
  },
  {
    value: '107',
    label: '美妆护肤'
  },
  {
    value: '108',
    label: '个性清洁'
  },
  {
    value: '109',
    label: '钟表珠宝'
  },
  {
    value: '110',
    label: '手机'
  },
  {
    value: '111',
    label: '数码'
  },
  {
    value: '112',
    label: '电脑办公'
  }
])

function handleConfirm({ value, selectedItems }) {
  console.log(value)
  customShow.value = selectedItems
    .map((item) => {
      return item.label
    })
    .join(', ')
}
</script>
```

### attributes

Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|------|------|------|--------|--------|----------|
| v-model | 选中项，`type`为`checkbox`时类型为array；`type`为`radio`时类型为number/boolean/string | array/number/boolean/string | - | - | - |
| columns | 选择器数据，一维数组 | array | - | - | - |
| type | 单复选选择器类型 | string | checkbox/radio | checkbox | - |
| value-key | 选项对象中value对应的key | string | - | value | - |
| label-key | 选项对象中展示文本对应的key | string | - | label | - |
| title | 弹出层标题 | string | - | - | - |
| label | 选择器左侧文案 | string | - | - | - |
| placeholder | 选择器占位符 | string | - | 请选择 | - |
| disabled | 禁用 | boolean | - | false | - |
| loading | 加载中 | boolean | - | false | - |
| loading-color | 加载颜色（十六进制，不能缩写） | String | - | #4D80F0 | - |
| readonly | 只读 | boolean | - | false | - |
| display-format | 自定义展示文案的格式化函数 | function | - | - | - |
| confirm-button-text | 确认按钮文案 | string | - | 确认 | - |
| size | 选择器大小 | string | large | - | - |
| label-width | 左侧标题宽度 | string | - | 33% | - |
| error | 错误状态（右侧内容红色） | boolean | - | false | - |
| required | 必填样式 | boolean | - | false | - |
| marker-side | 必填标记位置 | string | before / after | before | 1.12.0 |
| align-right | 值靠右展示 | boolean | - | false | - |
| before-confirm | 确定前校验函数，接收(value,resolve)参数 | function | - | - | - |
| select-size | picker内部选项组尺寸 | string | large | - | - |
| min | 最小选中数量（仅checkbox） | number | - | 0 | - |
| max | 最大选中数量（0为无限，仅checkbox） | number | - | 0 | - |
| checked-color | 选中颜色（单/复选框） | string | - | #4D80F0 | - |
| use-default-slot | 使用默认插槽 | boolean | - | false | - |
| use-label-slot | 使用label插槽 | boolean | - | false | - |
| close-on-click-modal | 点击遮罩关闭 | boolean | - | true | - |
| z-index | 弹窗层级 | number | - | 15 | - |
| safe-area-inset-bottom | 底部安全距离（iPhone X类机型） | boolean | - | true | - |
| filterable | 可搜索（仅本地） | boolean | - | false | - |
| filter-placeholder | 搜索框占位符 | string | - | 搜索 | - |
| ellipsis | 超出隐藏 | boolean | - | false | - |
| scroll-into-view | 重新打开时滚动到选中项 | boolean | - | true | 0.1.34 |
| show-confirm | 是否显示确认按钮（仅radio） | boolean | - | true | 1.2.8 |
| prop | 表单域model字段名（校验必填） | string | - | - | - |
| rules | 表单验证规则（配合wd-form） | `FormItemRule[]` | - | `[]` | - |
| clearable | 显示清空按钮 | boolean | - | false | 1.11.0 |
| root-portal | 脱离页面解决fixed失效问题 | boolean | - | false | 1.11.0 |

### FormItemRule 数据结构

| 键名      | 说明                                                    | 类型                                  |
| --------- | ------------------------------------------------------- | ------------------------------------- |
| required  | 是否为必选字段                                          | `boolean`                             |
| message   | 错误提示文案                                            | `string`                              |
| validator | 通过函数进行校验，可以返回一个 `Promise` 来进行异步校验 | `(value, rule) => boolean \| Promise` |
| pattern   | 通过正则表达式进行校验，正则无法匹配表示校验不通过      | `RegExp`                              |

### events

Events

| 事件名称 | 说明                       | 参数                                                                                                       | 最低版本 |
| -------- | -------------------------- | ---------------------------------------------------------------------------------------------------------- | -------- |
| confirm  | 点击确认时触发             | event.detail = { value, selectedItems }, checkbox 类型时 value 和 selectedItems 为数组，radio 类型为非数组 | -        |
| change   | picker 内选项更改时触发    | `{ value }`, checkbox 类型时 value 为数组，radio 类型为非数组                                              | -        |
| cancel   | 点击关闭按钮或者蒙层时触发 | -                                                                                                          | -        |
| close    | 弹窗关闭时触发             | -                                                                                                          | 1.2.29   |
| open     | 弹窗打开时触发             | -                                                                                                          | 1.2.29   |
| clear    | 点击清空按钮时触发     | -                                                                                                    | 1.11.0    |

### methods

Methods

| 方法名称 | 说明     | 参数 | 最低版本 |
| -------- | -------- | ---- | -------- |
| open     | 打开弹窗 | -    | -        |
| close    | 关闭弹窗 | -    | -        |

### slots

Slots

| 插槽名称 | 说明       | 最低版本 |
| -------- | ---------- | -------- |
| default  | 自定义展示 | -        |
| label    | 左侧插槽   | -        |

### 外部样式类

外部样式类

| 类名                 | 说明                     | 最低版本 |
| -------------------- | ------------------------ | -------- |
| custom-class         | 根节点样式               | -        |
| custom-label-class   | label 外部自定义样式     | -        |
| custom-value-class   | value 外部自定义样式     | -        |
| custom-content-class | 弹出层内容区域自定义样式 | -        |

