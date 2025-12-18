## Rate 组件示例

### basic-usage

评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。 三个等级所对应的颜色用 `colors` 属性设置，而它们对应的两个阈值则通过 `low-threshold` 和 `high-threshold` 设定。

```vue
<template>
  <div class="demo-rate-block">
    <span class="demonstration">Default</span>
    <fin-rate v-model="value1" />
  </div>
  <div class="demo-rate-block">
    <span class="demonstration">Color for different levels</span>
    <fin-rate v-model="value2" :colors="colors" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(null)
const value2 = ref(null)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>

<style scoped>
.demo-rate-block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--fin-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}
.demo-rate-block:last-child {
  border-right: none;
}
.demo-rate-block .demonstration {
  display: block;
  color: var(--fin-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

### sizes



```vue
<template>
  <fin-rate v-model="value" size="large" />
  <br />
  <fin-rate v-model="value" />
  <br />
  <fin-rate v-model="value" size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
</script>
```

### allow-half

属性 `allow-half` 允许出现半星

```vue
<template>
  <fin-rate v-model="value" allow-half />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
</script>
```

### text

为组件设置 `show-text` 属性会在右侧显示辅助文字。 通过设置 `texts` 可以为每一个分值指定对应的辅助文字。 `texts` 为一个数组，长度应等于最大值 `max`。

```vue
<template>
  <fin-rate
    v-model="value"
    :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
    show-text
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
</script>
```

### clearable

当你再次点击相同的值时，可以将值重置为 `0`。

```vue
<template>
  <fin-rate v-model="value" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(3)
</script>
```

### more-icons

设置`icons`属性可以自定义不同分段的图标。 若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。 本例还使用 `void-icon` 指定了未选中时的图标类名。

```vue
<template>
  <fin-rate
    v-model="value"
    :icons="icons"
    :void-icon="ChatDot"
    :colors="['#409eff', '#67c23a', '#FF9900']"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ChatDot } from '@jdt/find-plus-icons-vue'

const value = ref()
const icons = [ChatDot, ChatDot, ChatDot]
</script>
```

### readonly

为组件设置 `disabled` 属性表示组件为只读。 此时若设置 `show-score`，则会在右侧显示目前的分值。 此外，您可以使用属性 `score-template` 来提供评分模板。 模板为一个包含了 `{value}` 的字符串，`{value}` 会被替换为当前分值。

```vue
<template>
  <fin-rate
    v-model="value"
    disabled
    show-score
    text-color="#ff9900"
    score-template="{value} points"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(3.7)
</script>
```

