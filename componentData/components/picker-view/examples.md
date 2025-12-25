## PickerView 组件示例

### 基本用法

基本用法

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

禁用选项

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

多级联动

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

### Methods

Methods

| 方法名称 | 说明 | 参数 | 最低版本 |
|---------|-----|-----|---------|
| getLabels | 获取所有列选中项的文本，返回值为一个数组 | - |
| getColumnIndex | 获取某一列的选中项下标 | columnIndex | - |
| getColumnData | 获取某一列的选项 | columnIndex | - |
| setColumnData | 设置某一列的选项 | columnIndex, values | - |
| resetColumns | 重置列数据为指定列数据 | columns（类型与props中columns相同） | 1.3.9 |

### 外部样式类

外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

