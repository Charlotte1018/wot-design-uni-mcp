## Carousel 组件示例

### basic

结合使用 `fin-carousel` 和 `fin-carousel-item` 标签就得到了一个走马灯。 每一个页面的内容是完全可定制的，把你想要展示的内容放在 `fin-carousel-item` 标签内。 默认情况下，在鼠标 hover 底部的指示器时就会触发切换。 通过设置 `trigger` 属性为 `click`，可以达到点击触发的效果。

```vue
<template>
  <div class="block text-center">
    <span class="demonstration"
      >Switch when indicator is hovered (default)</span
    >
    <fin-carousel height="150px">
      <fin-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </fin-carousel-item>
    </fin-carousel>
  </div>
  <div class="block text-center" m="t-4">
    <span class="demonstration">Switch when indicator is clicked</span>
    <fin-carousel trigger="click" height="150px">
      <fin-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </fin-carousel-item>
    </fin-carousel>
  </div>
</template>

<style scoped>
.demonstration {
  color: var(--fin-text-color-secondary);
}

.fin-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.fin-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.fin-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
```

### indicator

`indicator-position` 属性定义了指示器的位置。 默认情况下，它会显示在走马灯内部，设置为 `outside` 则会显示在外部；设置为 `none` 则不会显示指示器。

```vue
<template>
  <fin-carousel indicator-position="outside">
    <fin-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </fin-carousel-item>
  </fin-carousel>
</template>

<style scoped>
.fin-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.fin-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.fin-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
```

### arrows

`arrow` 属性定义了切换箭头的显示时机。 默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示。 若将 `arrow` 设置为 `always`，则会一直显示；设置为 `never`，则会一直隐藏。

```vue
<template>
  <fin-carousel :interval="5000" arrow="always">
    <fin-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </fin-carousel-item>
  </fin-carousel>
</template>

<style scoped>
.fin-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.fin-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.fin-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
```

### auto-height



```vue
<template>
  <div class="block text-center" style="height: 300px">
    <span class="demonstration">each carousel-item has a different height</span>
    <fin-carousel height="auto" autoplay>
      <fin-carousel-item style="height: 100px">
        <h3 class="small justify-center" text="2xl">height 100px</h3>
      </fin-carousel-item>
      <fin-carousel-item style="height: 200px">
        <h3 class="small justify-center" text="2xl">height 200px</h3>
      </fin-carousel-item>
      <fin-carousel-item style="height: 300px">
        <h3 class="small justify-center" text="2xl">height 300px</h3>
      </fin-carousel-item>
    </fin-carousel>
  </div>
</template>

<style scoped>
.carousel-item {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.fin-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  display: flex;
  align-items: center;
  margin: 0;
  text-align: center;
  height: 100%;
}

.fin-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.fin-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
```

### card

将 `type` 属性设置为 `card` 即可启用卡片模式。 从交互上来说，卡片模式和一般模式的最大区别在于，卡片模式可以通过直接点击两侧的幻灯片进行切换。

```vue
<template>
  <fin-carousel :interval="4000" type="card" height="200px">
    <fin-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </fin-carousel-item>
  </fin-carousel>
</template>

<style scoped>
.fin-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.fin-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.fin-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
```

### vertical



```vue
<template>
  <p class="text-center demonstration">normal vertical layout</p>
  <fin-carousel height="200px" direction="vertical" :autoplay="false">
    <fin-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </fin-carousel-item>
  </fin-carousel>
  <p class="text-center demonstration">card vertical layout</p>
  <fin-carousel
    height="400px"
    direction="vertical"
    type="card"
    :autoplay="false"
  >
    <fin-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </fin-carousel-item>
  </fin-carousel>
</template>

<style scoped>
.fin-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.fin-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.fin-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
```

