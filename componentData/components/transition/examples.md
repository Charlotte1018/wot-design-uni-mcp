## Transition 组件示例

### 基本用法

元素包裹在

```vue
<template>
<wd-transition :show="show" name="fade">内容</wd-transition>
</template>

<script lang="ts" setup>
</script>
```

### 动画类型

动画类型

```vue
<template>
<wd-transition :show="show" name="slide">内容</wd-transition>
</template>

<script lang="ts" setup>
</script>
```

### 自定义动画

通过

```vue
<template>
<wd-transition
  :show="customShow"
  :duration="{ enter: 700, leave: 1000 }"
  enter-class="custom-enter"
  enter-active-class="custom-enter-active"
  enter-to-class="custom-enter-to"
  leave-class="custom-leave"
  leave-active-class="custom-leave-active"
  leave-to-class="custom-leave-to"
  custom-class="block"
/>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
:deep(button) {
  margin: 0 10px 10px 0;
}
:deep(.block) {
  position: fixed;
  left: 50%;
  top: 50%;
  margin: -50px 0 0 -50px;
  width: 100px;
  height: 100px;
  background: #0083ff;
}

:deep(.custom-enter-active),
:deep(.custom-leave-active) {
  transition-property: background, transform;
}
:deep(.custom-enter) {
  transform: translate3d(-100px, -100px, 0) rotate(-180deg);
  background: #ff0000;
}
:deep(.custom-leave-to) {
  transform: translate3d(100px, 100px, 0) rotate(180deg);
  background: #ff0000;
}
</style>
```

### attributes

Attributes

| 参数         | 说明         | 类型             | 可选值         | 默认值  | 最低版本 |
|--------------|--------------|------------------|----------------|---------|----------|
| show         | 是否展示组件 | boolean          | -              | -       | -        |
| name         | 动画类型     | string / array   | `TransitionName` | -       | -        |
| duration     | 动画执行时间 | number / object / boolean | -              | 300(ms) | -        |
| custom-style | 自定义样式   | string           | -              | -       | -        |
| custom-class | 自定义根节点样式类 | string     | -              | -       | -        |
| lazy-render  | 弹层内容懒渲染 | boolean        | -              | false   | -        |
| destroy      | 是否在动画结束时销毁子节点 | boolean | -              | true    | -        |
| enter-class  | 进入过渡的开始状态 | string     | -              | -       | -        |
| enter-active-class | 进入过渡的激活状态 | string | -              | -       | -        |
| enter-to-class | 进入过渡的结束状态 | string   | -              | -       | -        |
| leave-class  | 离开过渡的开始状态 | string     | -              | -       | -        |
| leave-active-class | 离开过渡的激活状态 | string | -              | -       | -        |
| leave-to-class | 离开过渡的结束状态 | string   | -              | -       | -        |
| disable-touch-move | 是否阻止触摸滚动 | boolean | -              | false   | 1.11.0 |

### TransitionName 动画类型

| 名称        | 说明         | 最低版本 |
|-------------|--------------|----------|
| fade        | 淡入淡出     | -        |
| fade-down   | 向下淡入淡出 | -        |
| fade-left   | 向左淡入淡出 | -        |
| fade-right  | 向右淡入淡出 | -        |
| fade-up     | 向上淡入淡出 | -        |
| slide-down  | 向下滑动     | -        |
| slide-left  | 向左滑动     | -        |
| slide-right | 向右滑动     | -        |
| slide-up    | 向上滑动     | -        |
| zoom-in     | 缩放进入     | -        |
| zoom-out    | 缩放离开     | -        |

### events

Events

| 事件名称         | 说明       | 参数 | 最低版本 |
| ---------------- | ---------- | ---- | -------- |
| before-enter | 进入前触发 | -    | -        |
| enter       | 进入时触发 | -    | -        |
| after-enter  | 进入后触发 | -    | -        |
| before-leave | 离开前触发 | -    | -        |
| leave       | 离开时触发 | -    | -        |
| after-leave  | 离开后触发 | -    | -        |
| click       | 点击时触发 | -    | -        |

### slots

Slots

| 插槽名称 | 说明 | 最低版本 |
|---------|------|---------|
| default | 需要应用动画效果的内容 | - |

### 外部样式类

外部样式类

| 类名               | 说明                                                                                                                   | 最低版本 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| custom-class       | 根节点样式                                                                                                             | -        |
| enter-class        | 定义进入过渡的开始状态，在元素被插入前生效，在插入的下一帧移除                                                         | -        |
| enter-active-class | 定义动画执行期间的状态，在整个进入动画中应用；在元素被插入前生效，在动画结束后移除；可以定义 transition 相关属性       | -        |
| enter-to-class     | 定义进入过渡的结束状态，在元素被插入的下一帧生效，在动画结束后移除                                                     | -        |
| leave-class        | 定义离开过渡的开始状态，在离开动画触发时立即生效，在下一帧移除                                                         | -        |
| leave-active-class | 定义动画执行期间的状态，在整个离开动画中应用；在离开动画触发时立即生效，在动画结束后移除；可以定义 transition 相关属性 | -        |
| leave-to-class     | 定义离开过渡的结束状态，在离开动画触发时的下一帧生效，在动画结束后移除                                                 | -        |

