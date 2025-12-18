## Space 组件示例

### basic

通过间距组件来给多个组件之间提供间距

```vue
<template>
  <fin-space wrap>
    <fin-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <fin-button class="button" text>Operation button</fin-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </fin-card>
  </fin-space>
</template>
```

### vertical-layout

我们也提供垂直布局方式。

```vue
<template>
  <fin-space direction="vertical">
    <fin-card v-for="i in 2" :key="i" class="box-card" style="width: 250px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <fin-button class="button" text>Operation button</fin-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </fin-card>
  </fin-space>
</template>
```

### control-size



```vue
<template>
  <fin-space direction="vertical" alignment="start" :size="30">
    <fin-radio-group v-model="size">
      <fin-radio :label="'large'">large</fin-radio>
      <fin-radio :label="'default'">default</fin-radio>
      <fin-radio :label="'small'">small</fin-radio>
    </fin-radio-group>

    <fin-space wrap :size="size">
      <fin-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <fin-button class="button" text>Operation button</fin-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </fin-card>
    </fin-space>
  </fin-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const size = ref('default')
</script>
```

### customized-size



```vue
<template>
  <fin-slider v-model="size" />
  <fin-space wrap :size="size">
    <fin-card v-for="i in 2" :key="i" class="box-card" style="width: 250px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <fin-button class="button" text>Operation button</fin-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </fin-card>
  </fin-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(20)
</script>
```

### auto-wrapping

利用 `wrap` 属性控制换行

```vue
<template>
  <fin-space wrap>
    <div v-for="i in 20" :key="i">
      <fin-button text> Text button </fin-button>
    </div>
  </fin-space>
</template>
```

### literal-type-spacer



```vue
<template>
  <fin-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <fin-button> button {{ i }} </fin-button>
    </div>
  </fin-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(10)
</script>
```

### vnode-type-spacer



```vue
<template>
  <fin-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <fin-button> button {{ i }} </fin-button>
    </div>
  </fin-space>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { FinDivider } from '@jdt/find-plus'

const size = ref(10)
const spacer = h(FinDivider, { direction: 'vertical' })
</script>
```

### alignment

使用 `alignment` 属性来对齐

```vue
<template>
  <div class="alignment-container">
    <fin-space>
      string
      <fin-button> button </fin-button>
      <fin-card>
        <template #header> header </template>
        body
      </fin-card>
    </fin-space>
  </div>
  <div class="alignment-container">
    <fin-space alignment="flex-start">
      string
      <fin-button> button </fin-button>
      <fin-card>
        <template #header> header </template>
        body
      </fin-card>
    </fin-space>
  </div>
  <div class="alignment-container">
    <fin-space alignment="flex-end">
      string
      <fin-button> button </fin-button>
      <fin-card>
        <template #header> header </template>
        body
      </fin-card>
    </fin-space>
  </div>
</template>

<style>
.alignment-container {
  width: 240px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid var(--fin-border-color);
}
</style>
```

### fill

用 fill 属性让子节点自动填充容器

```vue
<template>
  <div>
    <div style="margin-bottom: 15px">fill: <fin-switch v-model="fill" /></div>
    <fin-space :fill="fill" wrap>
      <fin-card v-for="i in 3" :key="i" class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <fin-button class="button" text>Operation button</fin-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </fin-card>
    </fin-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fill = ref(true)
</script>
```

### fill-ratio

用 fillRatio 自定义填充比例

```vue
<template>
  <div>
    <div style="margin-bottom: 15px">
      direction:
      <fin-radio v-model="direction" label="horizontal">horizontal</fin-radio>
      <fin-radio v-model="direction" label="vertical">vertical</fin-radio>
    </div>
    <div style="margin-bottom: 15px">
      fillRatio:<fin-slider v-model="fillRatio" />
    </div>
    <fin-space
      fill
      wrap
      :fill-ratio="fillRatio"
      :direction="direction"
      style="width: 100%"
    >
      <fin-card v-for="i in 5" :key="i" class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <fin-button class="button" text>Operation button</fin-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </fin-card>
    </fin-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const direction = ref('horizontal')
const fillRatio = ref(30)
</script>
```

