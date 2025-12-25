## Transition 组件示例

### 基本用法

基本用法

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

自定义动画

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

<style lang="scss">
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

