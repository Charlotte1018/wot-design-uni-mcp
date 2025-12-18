## Input 组件示例

### basic



```vue
<template>
  <fin-input v-model="input" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

### disabled

通过 `disabled` 属性指定是否禁用 input 组件

```vue
<template>
  <fin-input v-model="input" disabled placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

### readonly

通过 `readonly` 属性指定 input 组件是否只读

```vue
<template>
  <fin-input
    v-model="input"
    class="w-50 m-2"
    readonly
    placeholder="Please input"
  />
  <fin-input
    v-model="input2"
    class="w-50 m-2"
    readonly
    placeholder="Please input"
  />
  <fin-input
    v-model="input"
    class="w-100 m-2"
    readonly
    type="textarea"
    placeholder="文本域"
  />
  <fin-input
    v-model="input2"
    class="w-100 m-2"
    readonly
    type="textarea"
    placeholder="文本域"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
const input2 = ref('只读内容')
</script>
```

### clearable

使用`clearable`属性即可得到一个可一键清空的输入框

```vue
<template>
  <fin-input v-model="input" placeholder="Please input" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

### formatter



```vue
<template>
  <fin-input
    v-model="input"
    placeholder="Please input"
    :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

### password

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

```vue
<template>
  <fin-input
    v-model="input"
    type="password"
    placeholder="Please input password"
    show-password
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

### with-icon

要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。 另外， `prefix` 和 `suffix` 命名的插槽也能正常工作。

```vue
<template>
  <div class="demo-input-suffix">
    <fin-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Using attributes</span
      >
      <fin-input
        v-model="input1"
        class="w-50 m-2"
        placeholder="Pick a date"
        :suffix-icon="Date"
      />
      <fin-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
    </fin-row>
  </div>
  <div class="demo-input-suffix">
    <fin-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Using slots</span
      >
      <fin-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
        <template #suffix>
          <fin-icon class="fin-input__icon"><Date /></fin-icon>
        </template>
      </fin-input>
      <fin-input v-model="input4" class="w-50 m-2" placeholder="Type something">
        <template #prefix>
          <fin-icon class="fin-input__icon"><search /></fin-icon>
        </template>
      </fin-input>
    </fin-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Date, Search } from '@jdt/find-plus-icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
```

### textarea

文本域高度可通过 `rows` 属性控制

```vue
<template>
  <fin-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('')
</script>
```

### auto-sizing-textarea



```vue
<template>
  <fin-input
    v-model="textarea1"
    autosize
    type="textarea"
    placeholder="Please input"
  />
  <div style="margin: 20px 0" />
  <fin-input
    v-model="textarea2"
    :autosize="{ minRows: 2, maxRows: 4 }"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const textarea1 = ref('')
const textarea2 = ref('')
</script>
```

### mixed-input

可通过 `slot` 来指定在 Input 中分发的前置或者后置的内容。

```vue
<template>
  <div>
    <fin-input v-model="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </fin-input>
  </div>
  <div class="mt-4">
    <fin-input v-model="input2" placeholder="Please input">
      <template #append>.com</template>
    </fin-input>
  </div>
  <div class="mt-4">
    <fin-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <fin-select v-model="select" placeholder="Select" style="width: 115px">
          <fin-option label="Restaurant" value="1" />
          <fin-option label="Order No." value="2" />
          <fin-option label="Tel" value="3" />
        </fin-select>
      </template>
      <template #append>
        <fin-button :icon="Search" />
      </template>
    </fin-input>
  </div>
  <div class="mt-4">
    <fin-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <fin-button :icon="Search" />
      </template>
      <template #append>
        <fin-select v-model="select" placeholder="Select" style="width: 115px">
          <fin-option label="Restaurant" value="1" />
          <fin-option label="Order No." value="2" />
          <fin-option label="Tel" value="3" />
        </fin-select>
      </template>
    </fin-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@jdt/find-plus-icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
</script>

<style>
.input-with-select .fin-input-group__prepend {
  background-color: var(--fin-fill-color-blank);
}
</style>
```

### various-size

使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `large`, `small`。

```vue
<template>
  <div class="demo-input-size">
    <fin-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
    />
    <fin-input v-model="input2" class="w-50 m-2" placeholder="Please Input" />
    <fin-input
      v-model="input3"
      class="w-50 m-2"
      size="small"
      placeholder="Please Input"
    />
  </div>
  <div class="demo-input-size">
    <fin-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
    <fin-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
    <fin-input
      v-model="input3"
      class="w-50 m-2"
      size="small"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
  </div>
  <div class="demo-input-size">
    <fin-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
    <fin-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
    <fin-input
      v-model="input3"
      class="w-50 m-2"
      size="small"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@jdt/find-plus-icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>
```

### length-limiting

使用 `maxlength` 和 `minlength` 属性, 来控制输入内容的最大字数和最小字数。 "字符数"使用JavaScript字符串长度来衡量。 为文本或文本输入类型设置 `maxlength` prop可以限制输入值的长度。 允许你通过设置 `show-word-limit` 到 `true` 来显示剩余字数。

```vue
<template>
  <fin-input
    v-model="text"
    maxlength="10"
    placeholder="Please input"
    show-word-limit
    type="text"
  />
  <div style="margin: 20px 0" />
  <fin-input
    v-model="textarea"
    maxlength="30"
    placeholder="Please input"
    show-word-limit
    type="textarea"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const text = ref('')
const textarea = ref('')
</script>
```

