## Picker 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-picker :columns="columns" label="单列选项" v-model="value" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
const columns = ref(['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7'])
const value = ref('选项1')

function handleConfirm({ value }) {
  value.value = value
}
</script>
```

### 禁用

禁用

```vue
<template>
<wd-picker :columns="columns" label="禁用" v-model="value" disabled />
</template>

<script lang="ts" setup>
const value = ref('选项3')

const columns = ref(['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7'])
</script>
```

### 只读

只读

```vue
<template>
<wd-picker :columns="columns" label="只读" v-model="value" readonly />
</template>

<script lang="ts" setup>
</script>
```

### 清空按钮

清空按钮

```vue
<template>
<wd-picker :columns="columns" label="清空" v-model="value" clearable />
</template>

<script lang="ts" setup>
</script>
```

### 文案标题

文案标题

```vue
<template>
<wd-picker label="标题" :columns="columns" title="文案标题"/>
</template>

<script lang="ts" setup>
</script>
```

### 加载中

加载中

```vue
<template>
<wd-picker-view :columns="columns" loading />
</template>

<script lang="ts" setup>
</script>
```

### 多列

多列

```vue
<template>
<wd-picker :columns="columns" label="多列" v-model="value" />
</template>

<script lang="ts" setup>
const value = ref(['中南大学', '软件工程'])

const columns = ref([
  ['中山大学', '中南大学', '华南理工大学'],
  ['计算机科学与技术', '软件工程', '通信工程', '法学', '经济学']
])
</script>
```

### 多级联动

传入

```vue
<template>
<wd-picker
  :columns="columns"
  label="多列联动"
  v-model="value"
  :column-change="onChangeDistrict"
  :display-format="displayFormat"
 />
</template>

<script lang="ts" setup>
const district = {
  '0': [{ label: '北京', value: '110000' }, { label: '广东省', value: '440000' }],
  '110000': [{ label: '北京', value: '110100' }],
  '440000': [{ label: '广州市', value: '440100' }, { label: '韶关市', value: '440200' }, { label: '深圳市', value: '440300' }, { label: '珠海市', value: '440400' }, { label: '汕头市', value: '440500' }],
  '110100': [{ label: '东城区', value: '110101' }, { label: '西城区', value: '110102' }, { label: '朝阳区', value: '110105' }, { label: '丰台区', value: '110106' }, { label: '石景山区', value: '110107' }],
  '440100': [{ label: '荔湾区', value: '440103' }, { label: '越秀区', value: '440104' }, { label: '海珠区', value: '440105'}],
  '440200': [{ label: '武江区', value: '440203'}],
  '440300': [{ label: '罗湖区', value: '440303' }, { label: '福田区', value: '440304' }],
  '440400': [{ label: '香洲区', value: '440402' }, { label: '斗门区', value: '440403' }, { label: '金湾区', value: '440404' }],
  '440500': [{ label: '龙湖区', value: '440507' }, { label: '金平区', value: '440511' }]
}

const value = ref(['110000', '110100', '110102'])

const columns = ref([district[0], district[district[0][0].value], district[district[district[0][0].value][0].value]])

const onChangeDistrict = (pickerView, value, columnIndex, resolve) => {
  const item = value[columnIndex]
  if (columnIndex === 0) {
    pickerView.setColumnData(1, district[item.value])
    pickerView.setColumnData(2, district[district[item.value][0].value])
  } else if (columnIndex === 1) {
    pickerView.setColumnData(2, district[item.value])
  }
  resolve()
}

const displayFormat = (items) => {
  return items
    .map((item) => {
      return item.label
    })
    .join('-')
}
</script>
```

### 选择器大小

设置

```vue
<template>
<wd-picker label="单列选项" size="large" v-model="value" :columns="columns" />
</template>

<script lang="ts" setup>
</script>
```

### 必填属性

必填属性

```vue
<template>
<wd-picker label="必填属性" error :columns="columns" v-model="value" required/>
</template>

<script lang="ts" setup>
</script>
```

### 错误状态

错误状态

```vue
<template>
<wd-picker label="单列选项" error :columns="columns" v-model="value"/>
</template>

<script lang="ts" setup>
</script>
```

### 值靠右展示

值靠右展示

```vue
<template>
<wd-picker label="单列选项" align-right :columns="columns" v-model="value"/>
</template>

<script lang="ts" setup>
</script>
```

### 确定前校验

确定前校验

```vue
<template>
<wd-toast />

<wd-picker label="before-confirm" :columns="columns" v-model="value" :before-confirm="beforeConfirm" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'

const toast = useToast()

const beforeConfirm = (value, resolve, picker) => {
  picker.setLoading(true)
  setTimeout(() => {
    picker.setLoading(false)
    if (['选项2', '选项3'].indexOf(value) > -1) {
      resolve(false)
      toast.error('选项校验不通过，请重新选择')
    } else {
      resolve(true)
    }
  }, 2000)
}

const columns = ref(['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7'])
const value = ref('')

const beforeConfirm = (value, resolve, picker) => {
  picker.setLoading(true)
  setTimeout(() => {
    picker.setLoading(false)
    if (['选项2', '选项3'].indexOf(value) > -1) {
      resolve(false)
      toast.error('选项校验不通过，请重新选择')
    } else {
      resolve(true)
    }
  }, 2000)
}

function handleConfirm({ value }) {
  value.value = value
}
</script>
```

### 唤起项插槽

开启

```vue
<template>
<wd-picker :columns="columns" v-model="value" use-default-slot>
  <wd-button>插槽唤起</wd-button>
</wd-picker>
</template>

<script lang="ts" setup>
</script>
```

### attributes

Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|------|------|------|--------|--------|----------|
| v-model | 选中项，如果为多列选择器，则其类型应为数组 | string/number/boolean/array | - | - | - |
| columns | 选择器数据，可以为字符串数组，也可以为对象数组，如果为二维数组，则为多列选择器 | array | - | - | - |
| loading | 加载中 | boolean | - | false | - |
| loading-color | 加载的颜色，只能使用十六进制的色值写法，且不能使用缩写 | string | - | #4D80F0 | - |
| columns-height | picker内部滚筒高 | number | - | 231 | - |
| value-key | 选项对象中，value对应的 key | string | - | value | - |
| label-key | 选项对象中，展示的文本对应的 key | string | - | label | - |
| title | 弹出层标题 | string | - | - | - |
| cancel-button-text | 取消按钮文案 | string | - | 取消 | - |
| confirm-button-text | 确认按钮文案 | string | - | 完成 | - |
| label | 选择器左侧文案 | string | - | - | - |
| placeholder | 选择器占位符 | string | - | 请选择 | - |
| disabled | 禁用 | boolean | - | false | - |
| readonly | 只读 | boolean | - | false | - |
| display-format | 自定义展示文案的格式化函数，返回一个字符串 | function | - | - | - |
| column-change | 接收 pickerView 实例、选中项、当前修改列的下标、resolve 作为入参，根据选中项和列下标进行判断，通过 pickerView 实例暴露出来的 `setColumnData` 方法修改其他列的数据源 | function | - | - | - |
| size | 设置选择器大小 | string | large | - | - |
| label-width | 设置左侧标题宽度 | string | - | 33% | - |
| error | 是否为错误状态，错误状态时右侧内容为红色 | boolean | - | false | - |
| required | 表单属性，必填 | boolean | - | false | - |
| marker-side | 必填标记位置 | string | before / after | before | 1.12.0 |
| align-right | 选择器的值靠右展示 | boolean | - | false | - |
| use-label-slot | label 使用插槽 | boolean | - | false | - |
| use-default-slot | 使用默认插槽 | boolean | - | false | - |
| before-confirm | 确定前校验函数，接收 (value, resolve, picker) 参数，通过 resolve 继续执行 picker，resolve 接收1个boolean参数 | function | - | - | - |
| close-on-click-modal | 点击遮罩是否关闭 | boolean | - | true | - |
| z-index | 弹窗层级 | number | - | 15 | - |
| safe-area-inset-bottom | 弹出面板是否设置底部安全距离（iphone X 类型的机型） | boolean | - | true | - |
| ellipsis | 是否超出隐藏 | boolean | - | false | - |
| prop | 表单域 `model` 字段名，在使用表单校验功能的情况下，该属性是必填的 | string | - | - | - |
| rules | 表单验证规则，结合`wd-form`组件使用 | `FormItemRule []` | - | `[]` | - |
| immediate-change | 是否在手指松开时立即触发picker-view的 change 事件。若不开启则会在滚动动画结束后触发 change 事件，1.2.25版本起提供，仅微信小程序和支付宝小程序支持 | boolean | - | false | 1.2.25 |
| clearable | 显示清空按钮 | boolean | - | false | 1.11.0 |
| root-portal | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 | boolean | - | false | 1.11.0 |

### FormItemRule 数据结构

| 键名      | 说明                                                    | 类型                                  |
| --------- | ------------------------------------------------------- | ------------------------------------- |
| required  | 是否为必选字段                                          | `boolean`                             |
| message   | 错误提示文案                                            | `string`                              |
| validator | 通过函数进行校验，可以返回一个 `Promise` 来进行异步校验 | `(value, rule) => boolean \| Promise` |
| pattern   | 通过正则表达式进行校验，正则无法匹配表示校验不通过      | `RegExp`                              |

### events

Events

| 事件名称 | 说明                   | 参数                                                                                                        | 最低版本 |
| -------- | ---------------------- | ----------------------------------------------------------------------------------------------------------- | -------- |
| confirm  | 点击右侧按钮触发       |  { value, selectedItems }， value 为选中值(多列则为数组)，selectedItems为选中项(多列则为数组) | -        |
| cancel   | 点击左侧按钮触发       | -                                                                                                           | -        |
| open     | 打开选择器弹出层时触发 | -                                                                                                           | -        |
| clear    | 点击清空按钮时触发     | -                                                                                                    | 1.11.0    |

### methods

Methods

| 方法名称 | 说明           | 参数 | 最低版本 |
| -------- | -------------- | ---- | -------- |
| open     | 打开picker弹框 | -    | -        |
| close    | 关闭picker弹框 | -    | -        |

### 外部样式类

外部样式类

| 类名               | 说明                      | 最低版本 |
| ------------------ | ------------------------- | -------- |
| custom-class       | 根节点样式                | -        |
| custom-view-class  | pickerView 外部自定义样式 | -        |
| custom-label-class | label 外部自定义样式      | -        |
| custom-value-class | value 外部自定义样式      | -        |

