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

选择器大小

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

### Methods

Methods

| 方法名称 | 说明     | 参数 | 最低版本 |
| -------- | -------- | ---- | -------- |
| open     | 打开弹窗 | -    | -        |
| close    | 关闭弹窗 | -    | -        |

### 外部样式类

外部样式类

| 类名                 | 说明                     | 最低版本 |
| -------------------- | ------------------------ | -------- |
| custom-class         | 根节点样式               | -        |
| custom-label-class   | label 外部自定义样式     | -        |
| custom-value-class   | value 外部自定义样式     | -        |
| custom-content-class | 弹出层内容区域自定义样式 | -        |

