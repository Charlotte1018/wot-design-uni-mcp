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

多级联动

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

选择器大小

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

唤起项插槽

```vue
<template>
<wd-picker :columns="columns" v-model="value" use-default-slot>
  <wd-button>插槽唤起</wd-button>
</wd-picker>
</template>

<script lang="ts" setup>
</script>
```

### Methods

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

