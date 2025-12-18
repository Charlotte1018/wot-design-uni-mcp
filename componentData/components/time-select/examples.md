## TimeSelect 组件示例

### basic

使用 `fin-time-select` 标签，然后通过`start`、`end`和`step`指定起始时间，结束时间和步长。

```vue
<template>
  <fin-time-select
    v-model="value"
    start="08:30"
    step="00:15"
    end="18:30"
    placeholder="Select time"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

### time-formats



```vue
<template>
  <fin-time-select
    v-model="value"
    start="00:00"
    step="00:30"
    end="23:59"
    placeholder="Select time"
    format="hh:mm A"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

### time-range



```vue
<template>
  <div class="demo-time-range">
    <fin-time-select
      v-model="startTime"
      :max-time="endTime"
      class="mr-4"
      placeholder="Start time"
      start="08:30"
      step="00:15"
      end="18:30"
    />
    <fin-time-select
      v-model="endTime"
      :min-time="startTime"
      placeholder="End time"
      start="08:30"
      step="00:15"
      end="18:30"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startTime = ref('')
const endTime = ref('')
</script>
```

