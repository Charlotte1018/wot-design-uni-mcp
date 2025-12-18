## Button 组件示例

### basic

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

```vue
<template>
  <fin-row class="mb-4">
    <fin-button>Default</fin-button>
    <fin-button type="primary">Primary</fin-button>
    <fin-button type="success">Success</fin-button>
    <fin-button type="info">Info</fin-button>
    <fin-button type="warning">Warning</fin-button>
    <fin-button type="danger">Danger</fin-button>
  </fin-row>

  <fin-row class="mb-4">
    <fin-button plain>Plain</fin-button>
    <fin-button type="primary" plain>Primary</fin-button>
    <fin-button type="success" plain>Success</fin-button>
    <fin-button type="info" plain>Info</fin-button>
    <fin-button type="warning" plain>Warning</fin-button>
    <fin-button type="danger" plain>Danger</fin-button>
  </fin-row>

  <fin-row class="mb-4">
    <fin-button round>Round</fin-button>
    <fin-button type="primary" round>Primary</fin-button>
    <fin-button type="success" round>Success</fin-button>
    <fin-button type="info" round>Info</fin-button>
    <fin-button type="warning" round>Warning</fin-button>
    <fin-button type="danger" round>Danger</fin-button>
  </fin-row>

  <fin-row>
    <fin-button :icon="Search" circle />
    <fin-button type="primary" :icon="Edit" circle />
    <fin-button type="success" :icon="Check" circle />
    <fin-button type="info" :icon="Message" circle />
    <fin-button type="warning" :icon="Star" circle />
    <fin-button type="danger" :icon="Delete" circle />
  </fin-row>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@jdt/find-plus-icons-vue'
</script>
```

### disabled

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

```vue
<template>
  <fin-row class="mb-4">
    <fin-button disabled>Default</fin-button>
    <fin-button type="primary" disabled>Primary</fin-button>
    <fin-button type="success" disabled>Success</fin-button>
    <fin-button type="info" disabled>Info</fin-button>
    <fin-button type="warning" disabled>Warning</fin-button>
    <fin-button type="danger" disabled>Danger</fin-button>
  </fin-row>

  <fin-row>
    <fin-button plain disabled>Plain</fin-button>
    <fin-button type="primary" plain disabled>Primary</fin-button>
    <fin-button type="success" plain disabled>Success</fin-button>
    <fin-button type="info" plain disabled>Info</fin-button>
    <fin-button type="warning" plain disabled>Warning</fin-button>
    <fin-button type="danger" plain disabled>Danger</fin-button>
  </fin-row>
</template>
```

### icon

使用 `icon` 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 通过向右方添加`<i>`标签来添加图标， 你也可以使用自定义图标。

```vue
<template>
  <div class="flex">
    <fin-button type="primary" :icon="Edit" />
    <fin-button type="primary" :icon="Share" />
    <fin-button type="primary" :icon="Delete" />
    <fin-button type="primary" :icon="Search">Search</fin-button>
    <fin-button type="primary">
      Upload<fin-icon class="fin-icon--right"><Upload /></fin-icon>
    </fin-button>
  </div>
</template>
<script lang="ts" setup>
import { Delete, Edit, Search, Share, Upload } from '@jdt/find-plus-icons-vue'
</script>
```

### group

使用 `<fin-button-group>` 对多个按钮分组。

```vue
<template>
  <fin-button-group>
    <fin-button type="primary" :icon="ArrowLeft">Previous Page</fin-button>
    <fin-button type="primary">
      Next Page<fin-icon class="fin-icon--right"><ArrowRight /></fin-icon>
    </fin-button>
  </fin-button-group>

  <fin-button-group class="ml-4">
    <fin-button type="primary" :icon="Edit" />
    <fin-button type="primary" :icon="Share" />
    <fin-button type="primary" :icon="Delete" />
  </fin-button-group>
</template>

<script lang="ts" setup>
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  Share,
} from '@jdt/find-plus-icons-vue'
</script>
```

### loading



```vue
<template>
  <fin-button type="primary" loading>Loading</fin-button>
  <fin-button type="primary" :loading-icon="Loading" loading
    >Loading</fin-button
  >
</template>

<script lang="ts" setup>
import { Loading } from '@jdt/find-plus-icons-vue'
</script>
```

### size

使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

```vue
<template>
  <fin-row>
    <fin-button size="large">Large</fin-button>
    <fin-button>Default</fin-button>
    <fin-button size="small">Small</fin-button>
    <fin-button size="large" :icon="Search">Search</fin-button>
    <fin-button :icon="Search">Search</fin-button>
    <fin-button size="small" :icon="Search">Search</fin-button>
  </fin-row>
  <fin-row class="my-4">
    <fin-button size="large" round>Large</fin-button>
    <fin-button round>Default</fin-button>
    <fin-button size="small" round>Small</fin-button>
    <fin-button size="large" :icon="Search" round>Search</fin-button>
    <fin-button :icon="Search" round>Search</fin-button>
    <fin-button size="small" :icon="Search" round>Search</fin-button>
  </fin-row>
  <fin-row>
    <fin-button :icon="Search" size="large" circle />
    <fin-button :icon="Search" circle />
    <fin-button :icon="Search" size="small" circle />
  </fin-row>
</template>

<script lang="ts" setup>
import { Search } from '@jdt/find-plus-icons-vue'
</script>
```

### tag



```vue
<template>
  <fin-button>button</fin-button>
  <fin-button tag="div" role="button" tabindex="0">div</fin-button>
  <fin-button
    type="primary"
    tag="a"
    href="https://github.com/element-plus/element-plus"
    target="_blank"
    rel="noopener noreferrer"
  >
    a
  </fin-button>
</template>
```

### custom



```vue
<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div class="flex">
    <fin-button color="#626aef" :dark="isDark">Default</fin-button>
    <fin-button color="#626aef" :dark="isDark" plain>Plain</fin-button>

    <fin-button color="#626aef" :dark="isDark" disabled>Disabled</fin-button>
    <fin-button color="#626aef" :dark="isDark" disabled plain
      >Disabled Plain</fin-button
    >
  </div>
</template>
```

