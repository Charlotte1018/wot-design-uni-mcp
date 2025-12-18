## Checkbox 组件示例

### basic

`checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 `v-model` 绑定 `Array` 类型的变量即可。 只有一个选项时的默认值类型为 `Boolean`，当选中时值为`true`。 `fin-checkbox` 标签中的内容将成为复选框按钮之后的描述。

```vue
<template>
  <div>
    <fin-checkbox v-model="checked1" label="Option 1" size="large" />
    <fin-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div>
    <fin-checkbox v-model="checked3" label="Option 1" />
    <fin-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div>
    <fin-checkbox v-model="checked5" label="Option 1" size="small" />
    <fin-checkbox v-model="checked6" label="Option 2" size="small" />
  </div>
  <div>
    <fin-checkbox v-model="checked5" label="Option 1" size="small" disabled />
    <fin-checkbox v-model="checked6" label="Option 2" size="small" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
</script>
```

### disabled

设置 `disabled` 属性即可。

```vue
<template>
  <fin-checkbox v-model="checked1" disabled>Disabled</fin-checkbox>
  <fin-checkbox v-model="checked2">Not disabled</fin-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checked1 = ref(false)
const checked2 = ref(true)
</script>
```

### grouping

在 `fin-checkbox` 元素中定义 `v-model` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean`，选中为 `true`。 在 `fin-checkbox` 组件中，`label` 是选择框的值。 如果该组件下没有被传入内容，那么 `label` 将会作为 checkbox 按钮后的介绍。 `label` 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。

```vue
<template>
  <fin-checkbox-group v-model="checkList">
    <fin-checkbox label="Option A" />
    <fin-checkbox label="Option B" />
    <fin-checkbox label="Option C" />
    <fin-checkbox label="disabled" disabled />
    <fin-checkbox label="selected and disabled" disabled />
  </fin-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['selected and disabled', 'Option A'])
</script>
```

### intermediate



```vue
<template>
  <fin-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    >Check all</fin-checkbox
  >
  <fin-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <fin-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</fin-checkbox>
  </fin-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
</script>
```

### limitation



```vue
<template>
  <fin-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <fin-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</fin-checkbox>
  </fin-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>
```

### button-style

只需要把 `fin-checkbox` 元素替换为 `fin-checkbox-button` 元素即可。 此外，FinD Plus 还提供了`size`属性。

```vue
<template>
  <div>
    <fin-checkbox-group v-model="checkboxGroup1" size="large">
      <fin-checkbox-button v-for="city in cities" :key="city" :label="city">
        {{ city }}
      </fin-checkbox-button>
    </fin-checkbox-group>
  </div>
  <div class="demo-button-style">
    <fin-checkbox-group v-model="checkboxGroup2">
      <fin-checkbox-button v-for="city in cities" :key="city" :label="city">{{
        city
      }}</fin-checkbox-button>
    </fin-checkbox-group>
  </div>
  <div class="demo-button-style">
    <fin-checkbox-group v-model="checkboxGroup3" size="small">
      <fin-checkbox-button
        v-for="city in cities"
        :key="city"
        :label="city"
        :disabled="city === 'Beijing'"
        >{{ city }}</fin-checkbox-button
      >
    </fin-checkbox-group>
  </div>
  <div class="demo-button-style">
    <fin-checkbox-group v-model="checkboxGroup4" size="small" disabled>
      <fin-checkbox-button v-for="city in cities" :key="city" :label="city">{{
        city
      }}</fin-checkbox-button>
    </fin-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkboxGroup1 = ref(['Shanghai'])
const checkboxGroup2 = ref(['Shanghai'])
const checkboxGroup3 = ref(['Shanghai'])
const checkboxGroup4 = ref(['Shanghai'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>

<style scoped>
.demo-button-style {
  margin-top: 24px;
}
</style>
```

### with-border

设置`border`属性可以渲染为带有边框的多选框。

```vue
<template>
  <div>
    <fin-checkbox v-model="checked1" label="Option1" size="large" border />
    <fin-checkbox v-model="checked2" label="Option2" size="large" border />
  </div>
  <div class="mt-4">
    <fin-checkbox v-model="checked3" label="Option1" border />
    <fin-checkbox v-model="checked4" label="Option2" border />
  </div>
  <div class="mt-4">
    <fin-checkbox-group v-model="checkboxGroup1" size="small">
      <fin-checkbox label="Option1" border />
      <fin-checkbox label="Option2" border />
    </fin-checkbox-group>
  </div>
  <div class="mt-4">
    <fin-checkbox-group v-model="checkboxGroup1" size="small">
      <fin-checkbox label="Option1" border disabled />
      <fin-checkbox label="Option2" border disabled />
    </fin-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(true)
const checkboxGroup1 = ref(['Option1'])
</script>
```

