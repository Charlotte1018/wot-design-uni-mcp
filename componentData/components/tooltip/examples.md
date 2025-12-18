## Tooltip 组件示例

### basic

使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示效果： `placement`属性值为：`[方向]-[对齐位置]`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

```vue
<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <fin-button>top-start</fin-button>
      </fin-tooltip>
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <fin-button>top</fin-button>
      </fin-tooltip>
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <fin-button>top-end</fin-button>
      </fin-tooltip>
    </div>
    <div class="row">
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <fin-button>left-start</fin-button>
      </fin-tooltip>
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <fin-button>right-start</fin-button>
      </fin-tooltip>
    </div>
    <div class="row">
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <fin-button class="mt-3 mb-3">left</fin-button>
      </fin-tooltip>
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <fin-button>right</fin-button>
      </fin-tooltip>
    </div>
    <div class="row">
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <fin-button>left-end</fin-button>
      </fin-tooltip>
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <fin-button>right-end</fin-button>
      </fin-tooltip>
    </div>
    <div class="row center">
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <fin-button>bottom-start</fin-button>
      </fin-tooltip>
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <fin-button>bottom</fin-button>
      </fin-tooltip>
      <fin-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <fin-button>bottom-end</fin-button>
      </fin-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
```

### theme

通过设置 `effect` 来修改主题，默认值为 `dark`.

```vue
<template>
  <fin-tooltip content="Top center" placement="top">
    <fin-button>Dark</fin-button>
  </fin-tooltip>
  <fin-tooltip content="Bottom center" placement="bottom" effect="light">
    <fin-button>Light</fin-button>
  </fin-tooltip>

  <fin-tooltip content="Bottom center" effect="customized">
    <fin-button>Customized theme</fin-button>
  </fin-tooltip>
</template>

<style>
.fin-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.fin-popper.is-customized .fin-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
```

### rich-content

用具名 slot `content`，替代`tooltip`中的`content`属性。

```vue
<template>
  <fin-tooltip placement="top">
    <template #content> multiple lines<br />second line </template>
    <fin-button>Top center</fin-button>
  </fin-tooltip>
</template>
```

### html-content



```vue
<template>
  <fin-tooltip
    content="<span>The content can be <strong>HTML</strong></span>"
    raw-content
  >
    <fin-button>hover me</fin-button>
  </fin-tooltip>
</template>
```

### virtual-trigger



```vue
<template>
  <fin-tooltip
    v-model:visible="visible"
    content="Bottom center"
    placement="bottom"
    effect="light"
    trigger="click"
    virtual-triggering
    :virtual-ref="triggerRef"
  />
  <fin-button @click="visible = !visible">test</fin-button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const visible = ref(false)
const triggerRef = ref({
  getBoundingClientRect() {
    return position.value
  },
})

const position = ref({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
})

const mousemoveHandler = (e) => {
  position.value = DOMRect.fromRect({
    width: 0,
    height: 0,
    x: e.clientX,
    y: e.clientY,
  })
}
onMounted(() => {
  document.addEventListener('mousemove', mousemoveHandler)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', mousemoveHandler)
})
</script>
```

### singleton



```vue
<template>
  <div>
    <fin-button
      v-for="i in 3"
      :key="i"
      @mouseover="(e) => (buttonRef = e.currentTarget)"
      @click="visible = !visible"
      >Click to open tooltip</fin-button
    >
  </div>

  <fin-tooltip
    ref="tooltipRef"
    :visible="visible"
    :popper-options="{
      modifiers: [
        {
          name: 'computeStyles',
          options: {
            adaptive: false,
            enabled: false,
          },
        },
      ],
    }"
    :virtual-ref="buttonRef"
    virtual-triggering
    popper-class="singleton-tooltip"
  >
    <template #content>
      <span> Some content </span>
    </template>
  </fin-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const buttonRef = ref()
const tooltipRef = ref()

const visible = ref(false)
</script>

<style>
.singleton-tooltip {
  transition: transform 0.3s var(--fin-transition-function-fast-bezier);
}
</style>
```

### controlled



```vue
<template>
  <fin-tooltip :visible="visible">
    <template #content>
      <span>Content</span>
    </template>
    <fin-button @mouseenter="visible = true" @mouseleave="visible = false">
      Hover me
    </fin-button>
  </fin-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>
```

### animations



```vue
<template>
  <fin-tooltip content="I am an fin-tooltip">
    <fin-button>trigger me</fin-button>
  </fin-tooltip>
</template>

<script lang="ts" setup></script>
```

