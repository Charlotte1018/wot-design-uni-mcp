## Text 组件示例

### basic

由 `type` 属性来选择 Text 的类型。

```vue
<template>
  <fin-text class="mx-1">Default</fin-text>
  <fin-text class="mx-1" type="primary">Primary</fin-text>
  <fin-text class="mx-1" type="success">Success</fin-text>
  <fin-text class="mx-1" type="info">Info</fin-text>
  <fin-text class="mx-1" type="warning">Warning</fin-text>
  <fin-text class="mx-1" type="danger">Danger</fin-text>
</template>
```

### sizes

使用 `size` 属性配置尺寸，可选的尺寸大小有: `large`, `default` 或 `small`

```vue
<template>
  <fin-text class="mx-1" size="large">Large</fin-text>
  <fin-text class="mx-1">Default</fin-text>
  <fin-text class="mx-1" size="small">Small</fin-text>
</template>
```

### truncated

通过 ` truncated ` 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 `line-clamp` 属性控制多行的样式

```vue
<template>
  <fin-text class="w-150px mb-2" truncated>
    Self element set width 100px
  </fin-text>
  <fin-row class="w-150px mb-2">
    <fin-text truncated>Squeezed by parent element</fin-text>
  </fin-row>
  <fin-text line-clamp="2">
    The -webkit-line-clamp CSS property<br />
    allows limiting of the contents of<br />
    a block to the specified number of lines.
  </fin-text>
</template>
```

### override

使用属性 `tag` 覆盖元素

```vue
<template>
  <fin-space direction="vertical">
    <fin-text>span</fin-text>
    <fin-text tag="p">This is a paragraph.</fin-text>
    <fin-text tag="b">Bold</fin-text>
    <fin-text tag="i">Italic</fin-text>
    <fin-text>
      This is
      <fin-text tag="sub" size="small">subscript</fin-text>
    </fin-text>
    <fin-text>
      This is
      <fin-text tag="sup" size="small">superscript</fin-text>
    </fin-text>
    <fin-text tag="ins">Inserted</fin-text>
    <fin-text tag="del">Deleted</fin-text>
    <fin-text tag="mark">Marked</fin-text>
  </fin-space>
</template>
```

### mixed

混合使用 Text 组件

```vue
<template>
  <fin-space direction="vertical">
    <fin-row>
      <fin-text>Rate</fin-text>
      <fin-rate class="ml-1" />
    </fin-row>
    <fin-text>
      This is text mixed icon
      <fin-icon>
        <Notice />
      </fin-icon>
      and component
      <fin-button>Button</fin-button>
    </fin-text>
  </fin-space>
</template>

<script lang="ts" setup>
import { Notice } from '@jdt/find-plus-icons-vue'
</script>
```

