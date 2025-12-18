## Backtop 组件示例

### basic



```vue
<template>
  Scroll down to see the bottom-right button.
  <fin-backtop :right="100" :bottom="100" />
</template>
```

### custom



```vue
<template>
  Scroll down to see the bottom-right button.
  <fin-backtop :bottom="100">
    <div
      style="
        height: 100%;
        width: 100%;
        background-color: var(--fin-bg-color-overlay);
        box-shadow: var(--fin-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      UP
    </div>
  </fin-backtop>
</template>
```

