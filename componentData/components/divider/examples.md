## Divider 组件示例

### basic-usage



```vue
<template>
  <div>
    <span
      >I sit at my window this morning where the world like a passer-by stops
      for a moment, nods to me and goes.</span
    >
    <fin-divider />
    <span
      >There little thoughts are the rustle of leaves; they have their whisper
      of joy in my mind.</span
    >
  </div>
</template>
```

### custom-content



```vue
<template>
  <div>
    <span>What you are you do not see, what you see is your shadow. </span>
    <fin-divider content-position="left">Rabindranath Tagore</fin-divider>
    <span
      >My wishes are fools, they shout across thy song, my Master. Let me but
      listen.</span
    >
    <fin-divider>
      <fin-icon><StarSolid /></fin-icon>
    </fin-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <fin-divider content-position="right">Rabindranath Tagore</fin-divider>
  </div>
</template>

<script lang="ts" setup>
import { StarSolid } from '@jdt/find-plus-icons-vue'
</script>
```

### line-dashed



```vue
<template>
  <div>
    <span>What language is thine, O sea?</span>
    <fin-divider border-style="dashed" />
    <span>The language of eternal question.</span>
  </div>
  <fin-divider border-style="dotted" />
  <span>What language is thy answer, O sky?</span>
  <fin-divider border-style="double" />
  <span>The language of eternal silence.</span>
</template>
```

### vertical-divider



```vue
<template>
  <div>
    <span>Rain</span>
    <fin-divider direction="vertical" />
    <span>Home</span>
    <fin-divider direction="vertical" border-style="dashed" />
    <span>Grass</span>
  </div>
</template>
```

