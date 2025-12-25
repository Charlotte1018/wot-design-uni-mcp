## PickerView 组件示例

### 基本用法

单列选择器，给

```vue
<template>
<wd-picker-view :columns="columns" v-model="value" @change="onChange" />
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'
const toast = useToast()
const columns = ref(['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7'])
const value3 = ref<string>('')
function onChange({picker, value, index}) {
  toast.show(`当前选中项: ${value}, 下标: ${index}`)
}
</script>
```

### 禁用选项

选项可以为对象，设置

```vue
<template>
<wd-picker-view :columns="columns" v-model="value" disabled />
</template>

<script lang="ts" setup>
const columns = ref(['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7'])
const value = ref('选项3')
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
<wd-picker-view :columns="columns" v-model="value" />
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
<wd-picker-view :columns="columns" v-model="value" :column-change="onChangeDistrict" />
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
</script>
```

### attributes

Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
|-----|------|-----|-------|-------|---------|
| v-model | 选中项，如果为多列选择器，则其类型应为数组 | string / number / boolean / array | - | - | - |
| columns | 选择器数据，可以为字符串数组，也可以为对象数组，如果为二维数组，则为多列选择器 | array | - | - | - |
| loading | 加载中 | boolean | - | false | - |
| loading-color | 加载的颜色，只能使用十六进制的色值写法，且不能使用缩写 | string | - | #4D80F0 | - |
| columns-height | picker内部滚筒高 | number | - | 231 | - |
| item-height | picker item的高度 | number | - | 35 | 1.13.0 |
| value-key | 选项对象中，value对应的 key | string | - | value | - |
| label-key | 选项对象中，展示的文本对应的 key | string | - | label | - |
| column-change | 接收 pickerView 实例、选中项、当前修改列的下标、resolve 作为入参，根据选中项和列下标进行判断，通过 pickerView 实例暴露出来的 `setColumnData` 方法修改其他列的数据源。 | function | - | - | - |
| immediate-change | 是否在手指松开时立即触发picker-view的 change 事件。若不开启则会在滚动动画结束后触发 change 事件，1.2.25版本起提供，仅微信小程序和支付宝小程序支持。 | boolean | - | false | 1.2.25 |

### methods

Methods

| 方法名称 | 说明 | 参数 | 最低版本 |
|---------|-----|-----|---------|
| getLabels | 获取所有列选中项的文本，返回值为一个数组 | - |
| getColumnIndex | 获取某一列的选中项下标 | columnIndex | - |
| getColumnData | 获取某一列的选项 | columnIndex | - |
| setColumnData | 设置某一列的选项 | columnIndex, values | - |
| resetColumns | 重置列数据为指定列数据 | columns（类型与props中columns相同） | 1.3.9 |

### events

Events

| 事件名称 | 说明 | 参数 | 最低版本 |
|--------|------|------|--------|
| change | 选项值修改时触发 | event = { value, picker, index }, 单列: picker实例, 选中项值, 选中项下标; 多列: picker实例, 所有列选中项值, 当前列的下标 | - |
| pickstart | 当滚动选择开始时候触发事件 | - | - |
| pickend | 当滚动选择结束时候触发事件 | - | - |

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

