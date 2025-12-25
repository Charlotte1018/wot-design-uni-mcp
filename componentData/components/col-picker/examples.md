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

选择器大小

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

### Methods

Methods

| 方法名称 | 说明             | 参数 | 最低版本 |
| -------- | ---------------- | ---- | -------- |
| open     | 打开 picker 弹框 | -    |
| close    | 关闭 picker 弹框 | -    |

### 外部样式类

外部样式类

| 类名               | 说明                 | 最低版本 |
| ------------------ | -------------------- | -------- |
| custom-class       | 根节点样式           | -        |
| custom-label-class | label 外部自定义样式 | -        |
| custom-value-class | value 外部自定义样式 | -        |

