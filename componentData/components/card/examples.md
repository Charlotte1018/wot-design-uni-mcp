## Card 组件示例

### basic

Card 组件由 `header` `body` 和 `footer`组成。 `header` 和 `footer`是可选的，其内容取决于一个具名的 slot。

```vue
<template>
  <fin-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <fin-button class="button" text>Operation button</fin-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    <template #footer>Footer content</template>
  </fin-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
```

### simple



```vue
<template>
  <fin-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </fin-card>
</template>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>
```

### with-images

配置 `body-style` 属性来自定义 `body` 部分的样式。 在这个例子中我们还使用了 `fin-col` 组件来布局。

```vue
<template>
  <fin-row>
    <fin-col
      v-for="(o, index) in 2"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    >
      <fin-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <fin-button text class="button">Operating</fin-button>
          </div>
        </div>
      </fin-card>
    </fin-col>
  </fin-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
```

### shadow

通过 `shadow` 属性设置卡片阴影出现的时机。 该属性的值可以是：`always`、`hover` 或 `never`。

```vue
<template>
  <fin-row :gutter="12">
    <fin-col :span="8">
      <fin-card shadow="always"> Always </fin-card>
    </fin-col>
    <fin-col :span="8">
      <fin-card shadow="hover"> Hover </fin-card>
    </fin-col>
    <fin-col :span="8">
      <fin-card shadow="never"> Never </fin-card>
    </fin-col>
  </fin-row>
</template>
```

