## Affix 组件示例

### basic

通过设置 `offset` 属性来改变吸顶距离，默认值为 0。

```vue
<template>
  <fin-affix :offset="120">
    <fin-button type="primary">Offset top 120px</fin-button>
  </fin-affix>
</template>
```

### target

请注意容器避免出现滚动条。

```vue
<template>
  <div class="affix-container">
    <fin-affix target=".affix-container" :offset="80">
      <fin-button type="primary">Target container</fin-button>
    </fin-affix>
  </div>
</template>
<style scoped>
.affix-container {
  text-align: center;
  height: 400px;
  border-radius: 4px;
  background: var(--fin-color-primary-light-9);
}
</style>
```

### fixed

通过设置 `position` 属性来改变固定位置，默认值为 `top` 。

```vue
<template>
  <fin-affix position="bottom" :offset="20">
    <fin-button type="primary">Offset bottom 20px</fin-button>
  </fin-affix>
</template>
```

