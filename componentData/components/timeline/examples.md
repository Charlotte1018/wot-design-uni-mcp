## Timeline 组件示例

### basic



```vue
<template>
  <fin-timeline>
    <fin-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </fin-timeline-item>
  </fin-timeline>
</template>

<script lang="ts" setup>
const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]
</script>
```

### custom-node



```vue
<template>
  <fin-timeline>
    <fin-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </fin-timeline-item>
  </fin-timeline>
</template>

<script lang="ts" setup>
import { More } from '@jdt/find-plus-icons-vue'

const activities = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: More,
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]
</script>
```

### custom-timestamp



```vue
<template>
  <fin-timeline>
    <fin-timeline-item timestamp="2018/4/12" placement="top">
      <fin-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </fin-card>
    </fin-timeline-item>
    <fin-timeline-item timestamp="2018/4/3" placement="top">
      <fin-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </fin-card>
    </fin-timeline-item>
    <fin-timeline-item timestamp="2018/4/2" placement="top">
      <fin-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/2 20:46</p>
      </fin-card>
    </fin-timeline-item>
  </fin-timeline>
</template>
```

### center



```vue
<template>
  <fin-timeline>
    <fin-timeline-item center timestamp="2018/4/12" placement="top">
      <fin-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </fin-card>
    </fin-timeline-item>
    <fin-timeline-item timestamp="2018/4/3" placement="top">
      <fin-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </fin-card>
    </fin-timeline-item>
    <fin-timeline-item center timestamp="2018/4/2" placement="top">
      Event start
    </fin-timeline-item>
    <fin-timeline-item timestamp="2018/4/2" placement="top">
      Event end
    </fin-timeline-item>
  </fin-timeline>
</template>
```

