## ColPicker 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-col-picker label="选择地址" v-model="value" :columns="area" :column-change="columnChange" @confirm="handleConfirm"></wd-col-picker>
</template>

<script lang="ts" setup>
// useColPickerData可以参考本章节顶部的介绍
// 导入路径根据自己实际情况调整，万不可一贴了之
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()

const value = ref<string[]>([])

const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  })
])

const columnChange = ({ selectedItem, resolve, finish }) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text
        }
      })
    )
  } else {
    finish()
  }
}

function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### 异步加载

一般 column-change 是个异步获取数据的操作，触发 column-change 组件会有默认 loading，数据响应后关闭 loading。

```vue
<template>
<wd-col-picker label="选择地址" v-model="value" :columns="area" :column-change="columnChange" @confirm="handleConfirm"></wd-col-picker>
</template>

<script lang="ts" setup>
// useColPickerData可以参考本章节顶部的介绍
// 导入路径根据自己实际情况调整，万不可一贴了之
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()

const value = ref<string[]>([])
const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  })
])

const columnChange = ({ selectedItem, resolve, finish }) => {
  // 模拟异步请求
  setTimeout(() => {
    // 模拟请求失败
    if (Math.random() > 0.7) {
      finish(false)
      toast.error.error('数据请求失败，请重试')
      return
    }
    // 这里为什么用selectedItem.value作为code呢？是因为area构造的时候就是将标识放到了value字段上，同理你也可以改为其他字段，只要和area的字段对应即可
    const areaData = findChildrenByCode(colPickerData, selectedItem.value)
    if (areaData && areaData.length) {
      resolve(
        areaData.map((item) => {
          return {
            value: item.value,
            label: item.text
          }
        })
      )
    } else {
      // 没有下一项时，执行完成
      finish()
    }
  }, 300)
}

function handleConfirm({ value }) {
  console.log(value)
}
</script>
```

### 初始选项

初始选项有两种方式：

```vue
<template>
<wd-col-picker label="选择地址" v-model="value" :columns="area" :column-change="columnChange"></wd-col-picker>

<wd-col-picker label="选择地址" v-model="value" :columns="area" :column-change="columnChange" auto-complete></wd-col-picker>
</template>

<script lang="ts" setup>
// useColPickerData可以参考本章节顶部的介绍
// 导入路径根据自己实际情况调整，万不可一贴了之
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()

const value = ref<string[]>(['150000', '150100', '150121'])

const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  }),
  findChildrenByCode(colPickerData, '150000')!.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  }),
  findChildrenByCode(colPickerData, '150100')!.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  })
])

const columnChange = ({ selectedItem, resolve, finish }) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text
        }
      })
    )
  } else {
    finish()
  }
}

function handleConfirm({ value }) {
  console.log(value)
}

// useColPickerData可以参考本章节顶部的介绍
// 导入路径根据自己实际情况调整，万不可一贴了之
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()
import { useToast } from '@/uni_modules/wot-design-uni'

const toast = useToast()

const value = ref<string[]>([])

const area = ref<any[]>([])

onMounted(async () => {
  toast.loading('数据加载中')
  // 模拟异步请求
  await sleep()
  toast.close()
  value.value = ['150000', '150100', '150121']
})

const columnChange: ColPickerColumnChange = async ({ selectedItem, resolve, finish }) => {
  // 模拟异步请求

  await sleep(0.3)
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text
        }
      })
    )
  } else {
    finish()
  }
}

function sleep(second: number = 1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 1000 * second)
  })
}
</script>
```

### 禁用

禁用

```vue
<template>
<wd-col-picker label="禁用" disabled v-model="value" :columns="area" :column-change="columnChange" @confirm="handleConfirm"></wd-col-picker>
</template>

<script lang="ts" setup>
</script>
```

### 只读

只读

```vue
<template>
<wd-col-picker label="禁用" readonly v-model="value" :columns="area" :column-change="columnChange" @confirm="handleConfirm"></wd-col-picker>
</template>

<script lang="ts" setup>
</script>
```

### 禁用选项

禁用选项

```vue
<template>
<wd-col-picker label="选择地址" v-model="value" :columns="area" :column-change="columnChange" @confirm="handleConfirm"></wd-col-picker>
</template>

<script lang="ts" setup>
// useColPickerData可以参考本章节顶部的介绍
// 导入路径根据自己实际情况调整，万不可一贴了之
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()

const value = ref<string[]>([])

const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text,
      disabled: item.value === '140000'
    }
  })
])
const columnChange = ({ selectedItem, resolve, finish }) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text
        }
      })
    )
  } else {
    finish()
  }
}
</script>
```

### 选项提示信息

选项提示信息

```vue
<template>
<wd-col-picker label="选择地址" v-model="value" :columns="area" :column-change="columnChange" @confirm="handleConfirm"></wd-col-picker>
</template>

<script lang="ts" setup>
// useColPickerData可以参考本章节顶部的介绍
// 导入路径根据自己实际情况调整，万不可一贴了之
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()

const value = ref<string[]>([])

const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text,
      disabled: item.value === '140000',
      tip: item.value === '140000' ? '该地区无货，暂时无法选择' : item.value === '150000' ? '该地区配送时间可能较长' : ''
    }
  })
])
const columnChange = ({ selectedItem, resolve, finish }) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text
        }
      })
    )
  } else {
    finish()
  }
}
</script>
```

### 展示格式化

展示格式化

```vue
<template>
<wd-col-picker
  label="展示格式化"
  v-model="value"
  :columns="area"
  :column-change="columnChange"
  :display-format="displayFormat"
  @confirm="handleConfirm"
></wd-col-picker>
</template>

<script lang="ts" setup>
// useColPickerData可以参考本章节顶部的介绍
// 导入路径根据自己实际情况调整，万不可一贴了之
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()

const value = ref<string[]>(['130000', '130200', '130204'])

const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  }),
  findChildrenByCode(colPickerData, '130000')!.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  }),
  findChildrenByCode(colPickerData, '130200')!.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  })
])

const columnChange = ({ selectedItem, resolve, finish }) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text
        }
      })
    )
  } else {
    finish()
  }
}
// 格式化方法
const displayFormat = (selectedItems: Record<string, any>[]) => {
  return selectedItems[selectedItems.length - 2].label + '-' + selectedItems[selectedItems.length - 1].label
}
</script>
```

### 设置标题

设置标题

```vue
<template>
<wd-col-picker label="标题" v-model="value" title="选择地址" :columns="area" :column-change="columnChange" @confirm="handleConfirm"></wd-col-picker>
</template>

<script lang="ts" setup>
</script>
```

### 确定前校验

确定前校验

```vue
<template>
<wd-col-picker
  label="before-confirm"
  v-model="value"
  :columns="area"
  :column-change="columnChange"
  :before-confirm="beforeConfirm"
  @confirm="handleConfirm"
></wd-col-picker>
</template>

<script lang="ts" setup>
// useColPickerData可以参考本章节顶部的介绍
// 导入路径根据自己实际情况调整，万不可一贴了之
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()

const value = ref<string[]>([])
const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  })
])

const columnChange = ({ selectedItem, resolve, finish }) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text
        }
      })
    )
  } else {
    finish()
  }
}
const beforeConfirm = (value: (string | number)[], selectedItems: Record<string, any>[], resolve: (isPass: boolean) => void) => {
  if (parseInt(String(value[2])) > 120000) {
    toast.error('该地区库存不足')
    resolve(false)
  } else {
    resolve(true)
  }
}

function handleConfirm({ selectedItems }: any) {
  displayValue.value = selectedItems
    .map((item: any) => {
      return item.label
    })
    .join('')
}
</script>
```

### 错误状态

错误状态

```vue
<template>
<wd-col-picker label="选择地址" v-model="value" error :columns="area" :column-change="columnChange" @confirm="handleConfirm"></wd-col-picker>
</template>

<script lang="ts" setup>
</script>
```

### 必填样式

必填样式

```vue
<template>
<wd-col-picker label="选择地址" v-model="value" required :columns="area" :column-change="columnChange" @confirm="handleConfirm"></wd-col-picker>
</template>

<script lang="ts" setup>
</script>
```

### 选择器大小

设置

```vue
<template>
<wd-col-picker label="选择地址" v-model="value" size="large" :columns="area" :column-change="columnChange" @confirm="handleConfirm"></wd-col-picker>
</template>

<script lang="ts" setup>
</script>
```

### 值靠右展示

值靠右展示

```vue
<template>
<wd-col-picker label="选择地址" align-right v-model="value" :columns="area" :column-change="columnChange" @confirm="handleConfirm"></wd-col-picker>
</template>

<script lang="ts" setup>
</script>
```

### 自定义选择器

如果默认的 cell 类型的展示格式不满足需求，可以通过默认插槽进行自定义选择器样式。在标签上添加 use-default-slot 属性并设置为 true。

```vue
<template>
<view style="margin-bottom: 10px;">当前选中项: {{ displayValue }}</view>
<wd-col-picker :use-default-slot="true" v-model="value" :columns="area" :column-change="columnChange" @confirm="handleConfirm">
  <wd-button>选择地址</wd-button>
</wd-col-picker>
</template>

<script lang="ts" setup>
// useColPickerData可以参考本章节顶部的介绍
// 导入路径根据自己实际情况调整，万不可一贴了之
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()

const value = ref<string[]>([])
const displayValue = ref('')

const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  })
])

const columnChange = ({ selectedItem, resolve, finish }) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text
        }
      })
    )
  } else {
    finish()
  }
}
</script>
```

### attributes

Attributes

| 参数                   | 说明                                                                                                                           | 类型              | 可选值 | 默认值  | 最低版本 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------- | ------ | ------- | -------- |
| v-model                | 选中项                                                                                                                         | array             | -      | -       | -        |
| columns                | 选择器数据，二维数组                                                                                                           | array             | -      | -       | -        |
| value-key              | 选项对象中，value 对应的 key                                                                                                   | string            | -      | value   | -        |
| label-key              | 选项对象中，展示的文本对应的 key                                                                                               | string            | -      | label   | -        |
| tip-key                | 选项对象中，提示文案对应的 key                                                                                                 | string            | -      | tip     | -        |
| title                  | 弹出层标题                                                                                                                     | string            | -      | -       | -        |
| label                  | 选择器左侧文案                                                                                                                 | string            | -      | -       | -        |
| placeholder            | 选择器占位符                                                                                                                   | string            | -      | 请选择  | -        |
| disabled               | 禁用                                                                                                                           | boolean           | -      | false   | -        |
| readonly               | 只读                                                                                                                           | boolean           | -      | false   | -        |
| display-format         | 自定义展示文案的格式化函数，返回一个字符串                                                                                     | function          | -      | -       | -        |
| column-change          | 接收当前列的选中项 item、当前列下标、当前列选中项下标下一列数据处理函数 resolve、结束选择 finish                               | function          | -      | -       | -        |
| size                   | 设置选择器大小                                                                                                                 | string            | large  | -       | -        |
| label-width            | 设置左侧标题宽度                                                                                                               | string            | -      | 33%     | -        |
| error                  | 是否为错误状态，错误状态时右侧内容为红色                                                                                       | boolean           | -      | false   | -        |
| required               | 必填样式                                                                                                                       | boolean           | -      | false   | -        |
| marker-side            | 必填标记位置                                                                                                                   | string            | before / after | before  | 1.12.0 |
| align-right            | 选择器的值靠右展示                                                                                                             | boolean           | -      | false   | -        |
| before-confirm         | 确定前校验函数，接收 (value, resolve) 参数，通过 resolve 继续执行 picker，resolve 接收 1 个 boolean 参数                       | function          | -      | -       | -        |
| loading-color          | loading 图标的颜色                                                                                                             | string            | -      | #4D80F0 | -        |
| use-default-slot       | 使用默认插槽时设置该选项                                                                                                       | boolean           | -      | false   | -        |
| use-label-slot         | 使用 label 插槽时设置该选项                                                                                                    | boolean           | -      | false   | -        |
| close-on-click-modal   | 点击遮罩是否关闭                                                                                                               | boolean           | -      | true    | -        |
| auto-complete          | 自动触发 column-change 事件来补全数据，当 columns 为空数组或者 columns 数组长度小于 value 数组长度时，会自动触发 column-change | -                 | false  | -       |
| z-index                | 弹窗层级                                                                                                                       | number            | -      | 15      | -        |
| safe-area-inset-bottom | 弹出面板是否设置底部安全距离（iphone X 类型的机型）                                                                            | boolean           | -      | true    | -        |
| ellipsis               | 是否超出隐藏                                                                                                                   | boolean           | -      | false   | -        |
| prop                   | 表单域 `model` 字段名，在使用表单校验功能的情况下，该属性是必填的                                                              | string            | -      | -       | -        |
| rules                  | 表单验证规则，结合`wd-form`组件使用                                                                                            | `FormItemRule []` | -      | `[]`    | -        |
| lineWidth              | 底部条宽度，单位像素                                                                                                           | number            | -      | -       | 1.3.7    |
| lineHeight             | 底部条高度，单位像素                                                                                                           | number            | -      | -       | 1.3.7    |
| root-portal            | 是否从页面中脱离出来，用于解决各种 fixed 失效问题                                                                             | boolean           | -      | false   | 1.11.0 |

### FormItemRule 数据结构

| 键名      | 说明                                                    | 类型                                  |
| --------- | ------------------------------------------------------- | ------------------------------------- |
| required  | 是否为必选字段                                          | `boolean`                             |
| message   | 错误提示文案                                            | `string`                              |
| validator | 通过函数进行校验，可以返回一个 `Promise` 来进行异步校验 | `(value, rule) => boolean \| Promise` |
| pattern   | 通过正则表达式进行校验，正则无法匹配表示校验不通过      | `RegExp`                              |

### events

Events

| 事件名称 | 说明                       | 参数                                             | 最低版本 |
| -------- | -------------------------- | ------------------------------------------------ | -------- |
| confirm  | 最后一列选项选中时触发     | `{ value(选项值数组), selectedItems(选项数组) }` | -        |
| close    | 点击关闭按钮或者蒙层时触发 | -                                                | -        |

### methods

Methods

| 方法名称 | 说明             | 参数 | 最低版本 |
| -------- | ---------------- | ---- | -------- |
| open     | 打开 picker 弹框 | -    |
| close    | 关闭 picker 弹框 | -    |

### slots

Slots

| name    | 说明       | 最低版本 |
| ------- | ---------- | -------- |
| default | 自定义展示 | -        |
| label   | 左侧插槽   | -        |

### 外部样式类

外部样式类

| 类名               | 说明                 | 最低版本 |
| ------------------ | -------------------- | -------- |
| custom-class       | 根节点样式           | -        |
| custom-label-class | label 外部自定义样式 | -        |
| custom-value-class | value 外部自定义样式 | -        |

