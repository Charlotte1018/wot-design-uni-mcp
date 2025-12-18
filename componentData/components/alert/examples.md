## Alert 组件示例

### basic

Alert 组件提供四种类型，由 `type` 属性指定，默认值为 `info`。

```vue
<template>
  <fin-alert title="primary alert" type="primary" />
  <fin-alert title="success alert" type="success" />
  <fin-alert title="info alert" type="info" />
  <fin-alert title="warning alert" type="warning" />
  <fin-alert title="error alert" type="error" />
</template>

<style scoped>
.fin-alert {
  margin: 20px 0 0;
}
.fin-alert:first-child {
  margin: 0;
}
</style>
```

### theme

通过设置 `effect` 属性来改变主题，默认为 `light`。

```vue
<template>
  <fin-alert title="primary alert" type="primary" effect="dark" />
  <fin-alert title="success alert" type="success" effect="dark" />
  <fin-alert title="info alert" type="info" effect="dark" />
  <fin-alert title="warning alert" type="warning" effect="dark" />
  <fin-alert title="error alert" type="error" effect="dark" />
</template>
<style scoped>
.fin-alert {
  margin: 20px 0 0;
}
.fin-alert:first-child {
  margin: 0;
}
</style>
```

### close-button

你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 `closable` 属性决定 Alert 组件是否可关闭， 该属性接受一个 `Boolean`，默认为 `false`。 你可以设置 `close-text` 属性来代替右侧的关闭图标， 需要注意的是 `close-text` 必须是一个字符串。 当 Alert 组件被关闭时会触发 `close` 事件。

```vue
<template>
  <fin-alert title="unclosable alert" type="success" :closable="false" />
  <fin-alert title="customized close-text" type="info" close-text="Gotcha" />
  <fin-alert title="alert with callback" type="warning" @close="hello" />
</template>

<script lang="ts" setup>
const hello = () => {
  // eslint-disable-next-line no-alert
  alert('Hello World!')
}
</script>
<style scoped>
.fin-alert {
  margin: 20px 0 0;
}
.fin-alert:first-child {
  margin: 0;
}
</style>
```

### icon

通过设置 `show-icon` 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。

```vue
<template>
  <fin-alert title="primary alert" type="primary" show-icon />
  <fin-alert title="success alert" type="success" show-icon />
  <fin-alert title="info alert" type="info" show-icon />
  <fin-alert title="warning alert" type="warning" show-icon />
  <fin-alert title="error alert" type="error" show-icon />
</template>
<style scoped>
.fin-alert {
  margin: 20px 0 0;
}
.fin-alert:first-child {
  margin: 0;
}
</style>
```

### center



```vue
<template>
  <fin-alert title="primary alert" type="primary" center show-icon />
  <fin-alert title="success alert" type="success" center show-icon />
  <fin-alert title="info alert" type="info" center show-icon />
  <fin-alert title="warning alert" type="warning" center show-icon />
  <fin-alert title="error alert" type="error" center show-icon />
</template>
<style scoped>
.fin-alert {
  margin: 20px 0 0;
}
.fin-alert:first-child {
  margin: 0;
}
</style>
```

### description

除了必填的 `title` 属性外，你可以设置 `description` 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。

```vue
<template>
  <fin-alert
    title="with description"
    type="success"
    description="This is a description."
  />
</template>
```

### icon-description

在最后, 这是一个带有图标和描述的例子。

```vue
<template>
  <fin-alert
    title="primary alert"
    type="primary"
    description="more text description"
    show-icon
  />
  <fin-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon
  />
  <fin-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon
  />
  <fin-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon
  />
  <fin-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon
  />
</template>
<style scoped>
.fin-alert {
  margin: 20px 0 0;
}
.fin-alert:first-child {
  margin: 0;
}
</style>
```

