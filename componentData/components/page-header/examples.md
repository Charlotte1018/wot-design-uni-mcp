## PageHeader 组件示例

### complete



```vue
<template>
  <div aria-label="A complete example of page header">
    <fin-page-header @back="onBack">
      <template #breadcrumb>
        <fin-breadcrumb separator="/">
          <fin-breadcrumb-item :to="{ path: './page-header.html' }">
            homepage
          </fin-breadcrumb-item>
          <fin-breadcrumb-item
            ><a href="./page-header.html">route 1</a></fin-breadcrumb-item
          >
          <fin-breadcrumb-item>route 2</fin-breadcrumb-item>
        </fin-breadcrumb>
      </template>
      <template #content>
        <div class="flex items-center">
          <fin-avatar
            class="mr-3"
            :size="32"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="text-large font-600 mr-3"> Title </span>
          <span
            class="text-sm mr-2"
            style="color: var(--fin-text-color-regular)"
          >
            Sub title
          </span>
          <fin-tag>Default</fin-tag>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <fin-button>Print</fin-button>
          <fin-button type="primary" class="ml-2">Edit</fin-button>
        </div>
      </template>

      <fin-descriptions :column="3" size="small" class="mt-4">
        <fin-descriptions-item label="Username"
          >kooriookami</fin-descriptions-item
        >
        <fin-descriptions-item label="Telephone"
          >18100000000</fin-descriptions-item
        >
        <fin-descriptions-item label="Place">Suzhou</fin-descriptions-item>
        <fin-descriptions-item label="Remarks">
          <fin-tag size="small">School</fin-tag>
        </fin-descriptions-item>
        <fin-descriptions-item label="Address"
          >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </fin-descriptions-item>
      </fin-descriptions>
      <p class="mt-4 text-sm">
        Plus team uses <b>weekly</b> release strategy under normal circumstance,
        but critical bug fixes would require hotfix so the actual release number
        <b>could be</b> more than 1 per week.
      </p>
    </fin-page-header>
  </div>
</template>

<script setup lang="ts">
import { FinNotification as notify } from '@jdt/find-plus'

const onBack = () => {
  notify('Back')
}
</script>
```

### basic



```vue
<template>
  <fin-page-header @back="goBack">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </fin-page-header>
</template>
<script lang="ts" setup>
const goBack = () => {
  console.log('go back')
}
</script>
```

### custom-icon



```vue
<template>
  <fin-page-header :icon="ArrowLeft">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </fin-page-header>
</template>

<script lang="ts" setup>
import { ArrowLeft } from '@jdt/find-plus-icons-vue'
</script>
```

### no-icon



```vue
<template>
  <fin-page-header :icon="null">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </fin-page-header>
</template>
```

### breadcrumb



```vue
<template>
  <fin-page-header>
    <template #breadcrumb>
      <fin-breadcrumb separator="/">
        <fin-breadcrumb-item :to="{ path: './page-header.html' }">
          homepage
        </fin-breadcrumb-item>
        <fin-breadcrumb-item
          ><a href="./page-header.html">route 1</a></fin-breadcrumb-item
        >
        <fin-breadcrumb-item>route 2</fin-breadcrumb-item>
      </fin-breadcrumb>
    </template>
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </fin-page-header>
</template>
```

### additional-sections



```vue
<template>
  <fin-page-header :icon="null">
    <template #content>
      <div class="flex items-center">
        <fin-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="text-large font-600 mr-3"> Title </span>
        <span class="text-sm mr-2" style="color: var(--fin-text-color-regular)">
          Sub title
        </span>
        <fin-tag>Default</fin-tag>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <fin-button>Print</fin-button>
        <fin-button type="primary" class="ml-2">Edit</fin-button>
      </div>
    </template>
  </fin-page-header>
</template>
```

### main-content



```vue
<template>
  <fin-page-header>
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
    <div class="mt-4 text-sm font-bold">
      Your additional content can be added with default slot, You may put as
      many content as you want here.
    </div>
  </fin-page-header>
</template>
```

