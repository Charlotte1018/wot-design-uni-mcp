## Descriptions 组件示例

### basic-usage



```vue
<template>
  <fin-descriptions title="User Info">
    <fin-descriptions-item label="Username">kooriookami</fin-descriptions-item>
    <fin-descriptions-item label="Telephone">18100000000</fin-descriptions-item>
    <fin-descriptions-item label="Place">Suzhou</fin-descriptions-item>
    <fin-descriptions-item label="Remarks">
      <fin-tag size="small">School</fin-tag>
    </fin-descriptions-item>
    <fin-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</fin-descriptions-item
    >
  </fin-descriptions>
</template>
```

### sizes



```vue
<template>
  <fin-radio-group v-model="size">
    <fin-radio label="large">Large</fin-radio>
    <fin-radio>Default</fin-radio>
    <fin-radio label="small">Small</fin-radio>
  </fin-radio-group>

  <fin-descriptions
    class="margin-top"
    title="With border"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
      <fin-button type="primary">Operation</fin-button>
    </template>
    <fin-descriptions-item>
      <template #label>
        <div class="cell-item">
          <fin-icon :style="iconStyle">
            <People />
          </fin-icon>
          Username
        </div>
      </template>
      kooriookami
    </fin-descriptions-item>
    <fin-descriptions-item>
      <template #label>
        <div class="cell-item">
          <fin-icon :style="iconStyle">
            <MobilePhone />
          </fin-icon>
          Telephone
        </div>
      </template>
      18100000000
    </fin-descriptions-item>
    <fin-descriptions-item>
      <template #label>
        <div class="cell-item">
          <fin-icon :style="iconStyle">
            <location />
          </fin-icon>
          Place
        </div>
      </template>
      Suzhou
    </fin-descriptions-item>
    <fin-descriptions-item>
      <template #label>
        <div class="cell-item">
          <fin-icon :style="iconStyle">
            <Scene />
          </fin-icon>
          Remarks
        </div>
      </template>
      <fin-tag size="small">School</fin-tag>
    </fin-descriptions-item>
    <fin-descriptions-item>
      <template #label>
        <div class="cell-item">
          <fin-icon :style="iconStyle">
            <Enterprise />
          </fin-icon>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </fin-descriptions-item>
  </fin-descriptions>

  <fin-descriptions
    class="margin-top"
    title="Without border"
    :column="3"
    :size="size"
    :style="blockMargin"
  >
    <template #extra>
      <fin-button type="primary">Operation</fin-button>
    </template>
    <fin-descriptions-item label="Username">kooriookami</fin-descriptions-item>
    <fin-descriptions-item label="Telephone">18100000000</fin-descriptions-item>
    <fin-descriptions-item label="Place">Suzhou</fin-descriptions-item>
    <fin-descriptions-item label="Remarks">
      <fin-tag size="small">School</fin-tag>
    </fin-descriptions-item>
    <fin-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </fin-descriptions-item>
  </fin-descriptions>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Enterprise,
  Location,
  MobilePhone,
  People,
  Scene,
} from '@jdt/find-plus-icons-vue'

const size = ref('')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
</script>

<style scoped>
.fin-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>
```

### vertical-list



```vue
<template>
  <fin-radio-group v-model="size">
    <fin-radio label="large">Large</fin-radio>
    <fin-radio>Default</fin-radio>
    <fin-radio label="small">Small</fin-radio>
  </fin-radio-group>

  <fin-descriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
    :size="size"
    border
  >
    <fin-descriptions-item label="Username">kooriookami</fin-descriptions-item>
    <fin-descriptions-item label="Telephone">18100000000</fin-descriptions-item>
    <fin-descriptions-item label="Place" :span="2"
      >Suzhou</fin-descriptions-item
    >
    <fin-descriptions-item label="Remarks">
      <fin-tag size="small">School</fin-tag>
    </fin-descriptions-item>
    <fin-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </fin-descriptions-item>
  </fin-descriptions>

  <fin-descriptions
    title="Vertical list without border"
    :column="4"
    :size="size"
    direction="vertical"
    :style="blockMargin"
  >
    <fin-descriptions-item label="Username">kooriookami</fin-descriptions-item>
    <fin-descriptions-item label="Telephone">18100000000</fin-descriptions-item>
    <fin-descriptions-item label="Place" :span="2"
      >Suzhou</fin-descriptions-item
    >
    <fin-descriptions-item label="Remarks">
      <fin-tag size="small">School</fin-tag>
    </fin-descriptions-item>
    <fin-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </fin-descriptions-item>
  </fin-descriptions>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const size = ref('')
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
</script>

<style scoped>
.fin-descriptions {
  margin-top: 20px;
}
</style>
```

### customized-style



```vue
<template>
  <fin-descriptions title="Customized style list" :column="3" border>
    <fin-descriptions-item
      label="Username"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      width="150px"
      >kooriookami</fin-descriptions-item
    >
    <fin-descriptions-item label="Telephone" label-align="right" align="center"
      >18100000000</fin-descriptions-item
    >
    <fin-descriptions-item label="Place" label-align="right" align="center"
      >Suzhou</fin-descriptions-item
    >
    <fin-descriptions-item label="Remarks" label-align="right" align="center">
      <fin-tag size="small">School</fin-tag>
    </fin-descriptions-item>
    <fin-descriptions-item label="Address" label-align="right" align="center"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</fin-descriptions-item
    >
  </fin-descriptions>
</template>
<style scoped>
:deep(.my-label) {
  background: var(--fin-color-success-light-9) !important;
}
:deep(.my-content) {
  background: var(--fin-color-danger-light-9);
}
</style>
```

