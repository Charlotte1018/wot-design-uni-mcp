## Skeleton 组件示例

### basic-usage



```vue
<template>
  <fin-skeleton />
  <br />
  <fin-skeleton style="--fin-skeleton-circle-size: 100px">
    <template #template>
      <fin-skeleton-item variant="circle" />
    </template>
  </fin-skeleton>
</template>
```

### configurable-rows



```vue
<template>
  <fin-skeleton :rows="5" />
</template>
```

### animation



```vue
<template>
  <fin-skeleton :rows="5" animated />
</template>
```

### loading-state



```vue
<template>
  <fin-space direction="vertical" alignment="flex-start">
    <div>
      <label style="margin-right: 16px">Switch Loading</label>
      <fin-switch v-model="loading" />
    </div>
    <fin-skeleton style="width: 240px" :loading="loading" animated>
      <template #template>
        <fin-skeleton-item
          variant="image"
          style="width: 240px; height: 240px"
        />
        <div style="padding: 14px">
          <fin-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <fin-skeleton-item variant="text" style="margin-right: 16px" />
            <fin-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <fin-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Delicious hamburger</span>
            <div class="bottom card-header">
              <div class="time">{{ currentDate }}</div>
              <fin-button text class="button">Operation button</fin-button>
            </div>
          </div>
        </fin-card>
      </template>
    </fin-skeleton>
  </fin-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)
const currentDate = new Date().toDateString()
</script>
```

### rendering-with-data



```vue
<template>
  <fin-space direction="vertical" alignment="flex-start">
    <fin-button @click="setLoading">Click me to reload</fin-button>
    <fin-skeleton style="width: 240px" :loading="loading" animated :count="3">
      <template #template>
        <fin-skeleton-item
          variant="image"
          style="width: 400px; height: 267px"
        />
        <div style="padding: 14px">
          <fin-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <fin-skeleton-item variant="text" style="margin-right: 16px" />
            <fin-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <fin-card
          v-for="item in lists"
          :key="item.name"
          :body-style="{ padding: '0px', marginBottom: '1px' }"
        >
          <img :src="item.imgUrl" class="image multi-content" />
          <div style="padding: 14px">
            <span>{{ item.name }}</span>
            <div class="bottom card-header">
              <div class="time">{{ currentDate }}</div>
              <fin-button text class="button">Operation button</fin-button>
            </div>
          </div>
        </fin-card>
      </template>
    </fin-skeleton>
  </fin-space>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface ListItem {
  imgUrl: string
  name: string
}

const loading = ref(true)
const lists = ref<ListItem[]>([])
const currentDate = new Date().toDateString()

const setLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

onMounted(() => {
  loading.value = false
  lists.value = [
    {
      imgUrl:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      name: 'Deer',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      name: 'Horse',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: 'Mountain Lion',
    },
  ]
})
</script>
```

### avoiding-rendering-bouncing



```vue
<template>
  <fin-space direction="vertical" alignment="flex-start">
    <div>
      <label style="margin-right: 16px">Switch Loading</label>
      <fin-switch v-model="loading" />
    </div>
    <fin-skeleton
      style="width: 240px"
      :loading="loading"
      animated
      :throttle="500"
    >
      <template #template>
        <fin-skeleton-item
          variant="image"
          style="width: 240px; height: 240px"
        />
        <div style="padding: 14px">
          <fin-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <fin-skeleton-item variant="text" style="margin-right: 16px" />
            <fin-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <fin-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Delicious hamburger</span>
            <div class="bottom card-header">
              <div class="time">{{ currentDate }}</div>
              <fin-button text class="button">operation button</fin-button>
            </div>
          </div>
        </fin-card>
      </template>
    </fin-skeleton>
  </fin-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(false)
const currentDate = new Date().toDateString()
</script>
```

