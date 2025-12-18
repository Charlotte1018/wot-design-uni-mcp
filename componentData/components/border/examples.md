## Border 组件示例

### border



```vue
<template>
  <table class="demo-border">
    <tbody>
      <tr>
        <td class="text">Name</td>
        <td class="text">Thickness</td>
        <td class="line">Demo</td>
      </tr>
      <tr>
        <td class="text">Solid</td>
        <td class="text">1px</td>
        <td class="line">
          <div />
        </td>
      </tr>
      <tr>
        <td class="text">Dashed</td>
        <td class="text">2px</td>
        <td class="line">
          <div class="dashed" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
.demo-border .text {
  width: 15%;
}
.demo-border .line {
  width: 70%;
}
.demo-border .line div {
  width: 100%;
  height: 0;
  border-top: 1px solid var(--fin-border-color);
}
.demo-border .line .dashed {
  border-top: 2px dashed var(--fin-border-color);
}
</style>
```

### radius



```vue
<template>
  <fin-row :gutter="12" class="demo-radius">
    <fin-col
      v-for="(radius, i) in radiusGroup"
      :key="i"
      :span="6"
      :xs="{ span: 12 }"
    >
      <div class="title">{{ radius.name }}</div>
      <div class="value">
        <code>border-radius: {{ getValue(radius.type) || '0px' }}</code>
      </div>
      <div
        class="radius"
        :style="{
          borderRadius: radius.type
            ? `var(--fin-border-radius-${radius.type})`
            : '',
        }"
      />
    </fin-col>
  </fin-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radiusGroup = ref([
  {
    name: 'No Radius',
    type: '',
  },
  {
    name: 'Small Radius',
    type: 'small',
  },
  {
    name: 'Large Radius',
    type: 'base',
  },
  {
    name: 'Round Radius',
    type: 'round',
  },
])

const getValue = (type: string) => {
  const getCssVarValue = (prefix, type) =>
    getComputedStyle(document.documentElement).getPropertyValue(
      `--fin-${prefix}-${type}`
    )
  return getCssVarValue('border-radius', type)
}
</script>
<style scoped>
.demo-radius .title {
  color: var(--fin-text-color-regular);
  font-size: 18px;
  margin: 10px 0;
}
.demo-radius .value {
  color: var(--fin-text-color-primary);
  font-size: 16px;
  margin: 10px 0;
}
.demo-radius .radius {
  height: 40px;
  width: 70%;
  border: 1px solid var(--fin-border-color);
  border-radius: 0;
  margin-top: 20px;
}
</style>
```

### shadow



```vue
<template>
  <div class="flex justify-between items-center flex-wrap">
    <div
      v-for="(shadow, i) in shadowGroup"
      :key="i"
      class="flex flex-col justify-center items-center"
      m="auto"
      w="46"
    >
      <div
        class="inline-flex"
        h="30"
        w="30"
        m="2"
        :style="{
          boxShadow: `var(${getCssVarName(shadow.type)})`,
        }"
      />
      <span p="y-4" class="demo-shadow-text" text="sm">
        {{ shadow.name }}
      </span>
      <code text="xs">
        {{ getCssVarName(shadow.type) }}
      </code>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const shadowGroup = ref([
  {
    name: 'Basic Shadow',
    type: '',
  },
  {
    name: 'Light Shadow',
    type: 'light',
  },
  {
    name: 'Lighter Shadow',
    type: 'lighter',
  },
  {
    name: 'Dark Shadow',
    type: 'dark',
  },
])

const getCssVarName = (type: string) => {
  return `--fin-box-shadow${type ? '-' : ''}${type}`
}
</script>
```

