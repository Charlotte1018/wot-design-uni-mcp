## Typography 组件示例

### font



```vue
<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div v-if="!isDark" class="demo-term-box">
    <img src="/images/typography/term-pingfang.png" alt="" />
    <img src="/images/typography/term-hiragino.png" alt="" />
    <img src="/images/typography/term-microsoft.png" alt="" />
    <img src="/images/typography/term-helvetica.png" alt="" />
    <img src="/images/typography/term-arial.png" alt="" />
  </div>
  <div v-else class="demo-term-box">
    <img src="/images/typography/term-pingfang-dark.png" alt="" />
    <img src="/images/typography/term-hiragino-dark.png" alt="" />
    <img src="/images/typography/term-microsoft-dark.png" alt="" />
    <img src="/images/typography/term-helvetica-dark.png" alt="" />
    <img src="/images/typography/term-arial-dark.png" alt="" />
  </div>
</template>

<style scoped>
img {
  width: 220px;
  height: 174px;
  margin: 0 24px 24px 0;
}
img:nth-of-type(3) {
  margin-right: 0;
}
</style>
```

### convention



```vue
<template>
  <table class="demo-typo-size">
    <tbody>
      <tr>
        <td>Level</td>
        <td>Font Size</td>
        <td class="color-dark-light">Demo</td>
      </tr>
      <tr
        v-for="(fontSize, i) in fontSizes"
        :key="i"
        :style="`font-size: var(--fin-font-size-${fontSize.type})`"
      >
        <td>{{ fontSize.level }}</td>
        <td>
          {{
            useCssVar(`--fin-font-size-${fontSize.type}`).value +
            ' ' +
            formatType(fontSize.type)
          }}
        </td>
        <td>Build with FinD</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { useCssVar } from '@vueuse/core'

const fontSizes = [
  {
    level: 'Supplementary text',
    type: 'extra-small',
  },
  {
    level: 'Body (small)',
    type: 'small',
  },
  {
    level: 'Body',
    type: 'base',
  },
  {
    level: 'Small Title',
    type: 'medium',
  },
  {
    level: 'Title',
    type: 'large',
  },
  {
    level: 'Main Title',
    type: 'extra-large',
  },
]

function formatType(type: string) {
  return type
    .split('-')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ')
}
</script>
```

### line-height



```vue
<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div>
    <img
      v-if="isDark"
      class="lineH-left"
      src="/images/typography/line-height-dark.png"
    />
    <img v-else class="lineH-left" src="/images/typography/line-height.png" />
    <ul class="lineH-right">
      <li>line-height:1 <span>No line height</span></li>
      <li>line-height:1.3 <span>Compact</span></li>
      <li>line-height:1.5 <span>Regular</span></li>
      <li>line-height:1.7 <span>Loose</span></li>
    </ul>
  </div>
</template>
```

