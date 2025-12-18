## Layout 组件示例

### basic-layout

通过 `row` 和 `col` 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。

```vue
<template>
  <fin-row>
    <fin-col :span="24"><div class="grid-content ep-bg-purple-dark" /></fin-col>
  </fin-row>
  <fin-row>
    <fin-col :span="12"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="12"
      ><div class="grid-content ep-bg-purple-light"
    /></fin-col>
  </fin-row>
  <fin-row>
    <fin-col :span="8"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="8"><div class="grid-content ep-bg-purple-light" /></fin-col>
    <fin-col :span="8"><div class="grid-content ep-bg-purple" /></fin-col>
  </fin-row>
  <fin-row>
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple-light" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple-light" /></fin-col>
  </fin-row>
  <fin-row>
    <fin-col :span="4"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="4"><div class="grid-content ep-bg-purple-light" /></fin-col>
    <fin-col :span="4"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="4"><div class="grid-content ep-bg-purple-light" /></fin-col>
    <fin-col :span="4"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="4"><div class="grid-content ep-bg-purple-light" /></fin-col>
  </fin-row>
</template>

<style lang="scss">
.fin-row {
  margin-bottom: 20px;
}
.fin-row:last-child {
  margin-bottom: 0;
}
.fin-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

### column-spacing

行提供 `gutter` 属性来指定列之间的间距，其默认值为0。

```vue
<template>
  <fin-row :gutter="20">
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
  </fin-row>
</template>

<style>
.fin-row {
  margin-bottom: 20px;
}
.fin-row:last-child {
  margin-bottom: 0;
}
.fin-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

### hybrid-layout



```vue
<template>
  <fin-row :gutter="20">
    <fin-col :span="16"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="8"><div class="grid-content ep-bg-purple" /></fin-col>
  </fin-row>
  <fin-row :gutter="20">
    <fin-col :span="8"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="8"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="4"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="4"><div class="grid-content ep-bg-purple" /></fin-col>
  </fin-row>
  <fin-row :gutter="20">
    <fin-col :span="4"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="16"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="4"><div class="grid-content ep-bg-purple" /></fin-col>
  </fin-row>
</template>

<style>
.fin-row {
  margin-bottom: 20px;
}
.fin-row:last-child {
  margin-bottom: 0;
}
.fin-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

### column-offset

通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。

```vue
<template>
  <fin-row :gutter="20">
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></fin-col>
  </fin-row>
  <fin-row :gutter="20">
    <fin-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></fin-col>
    <fin-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></fin-col>
  </fin-row>
  <fin-row :gutter="20">
    <fin-col :span="12" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></fin-col>
  </fin-row>
</template>

<style>
.fin-row {
  margin-bottom: 20px;
}
.fin-row:last-child {
  margin-bottom: 0;
}
.fin-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

### alignment

您可以通过`justify` 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。

```vue
<template>
  <fin-row class="row-bg">
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple-light" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
  </fin-row>
  <fin-row class="row-bg" justify="center">
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple-light" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
  </fin-row>
  <fin-row class="row-bg" justify="end">
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple-light" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
  </fin-row>
  <fin-row class="row-bg" justify="space-between">
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple-light" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
  </fin-row>
  <fin-row class="row-bg" justify="space-around">
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple-light" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
  </fin-row>
  <fin-row class="row-bg" justify="space-evenly">
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple-light" /></fin-col>
    <fin-col :span="6"><div class="grid-content ep-bg-purple" /></fin-col>
  </fin-row>
</template>

<style>
.fin-row {
  margin-bottom: 20px;
}
.fin-row:last-child {
  margin-bottom: 0;
}
.fin-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

### responsive-layout



```vue
<template>
  <fin-row :gutter="10">
    <fin-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content ep-bg-purple"
    /></fin-col>
    <fin-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content ep-bg-purple-light"
    /></fin-col>
    <fin-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content ep-bg-purple"
    /></fin-col>
    <fin-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content ep-bg-purple-light"
    /></fin-col>
  </fin-row>
</template>

<style>
.fin-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

