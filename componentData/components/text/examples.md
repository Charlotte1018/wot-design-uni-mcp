## Text 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-text
  text="芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"
></wd-text>
</template>

<script lang="ts" setup>
</script>
```

### 设置主题

通过<code>type</code>参数设置文本主题，我们提供了五类属性：<code>primary</code> <code>error</code> <code>success</code> <code>warning</code> <code>default-默认</code>。

```vue
<template>
<wd-text type="primary" text="主色"></wd-text>
<wd-text type="error" text="错误"></wd-text>
<wd-text type="success" text="成功"></wd-text>
<wd-text type="warning" text="警告"></wd-text>
<wd-text text="默认"></wd-text>
</template>

<script lang="ts" setup>
</script>
```

### 自定义字体颜色

自定义字体颜色

```vue
<template>
<wd-text
  text="芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"
  color="#36B8C2"
></wd-text>
</template>

<script lang="ts" setup>
</script>
```

### 是否粗体

是否粗体

```vue
<template>
<wd-text
  text="芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"
  bold
></wd-text>
</template>

<script lang="ts" setup>
</script>
```

### 字体大小

字体大小

```vue
<template>
<wd-text
  text="芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"
  size="16px"
></wd-text>
</template>

<script lang="ts" setup>
</script>
```

### 脱敏

脱敏

```vue
<template>
<wd-text text="李四" mode="name" :format="true"></wd-text>
<wd-text text="张长三" mode="name" :format="true"></wd-text>
<wd-text text="18888888888" mode="phone" :format="true"></wd-text>
</template>

<script lang="ts" setup>
</script>
```

### lines

lines

```vue
<template>
<wd-text :text="text" :lines="2" size="16px"></wd-text>
</template>

<script lang="ts" setup>
</script>
```

### lineHeight

lineHeight

```vue
<template>
<wd-text :text="text" lineHeight="20px"></wd-text>
</template>

<script lang="ts" setup>
</script>
```

### 前后插槽

前后插槽

```vue
<template>
<wd-text text="12345678901" mode="phone" format type="primary" prefix="Prefix" suffix="Suffix" />

<wd-text text="12345678901" mode="phone" format type="primary">
  <template #prefix>
    <text>Prefix</text>
  </template>
  <template #suffix>Suffix</template>
</wd-text>
</template>

<script lang="ts" setup>
</script>
```

### 金额

金额

```vue
<template>
<wd-text text="16354.156" mode="price" type="success" decoration="line-through" prefix="￥" />
</template>

<script lang="ts" setup>
</script>
```

### 文字装饰

文字装饰

```vue
<template>
<wd-text :text="text" type="warning" decoration="underline" />
</template>

<script lang="ts" setup>
</script>
```

### 事件

事件

```vue
<template>
<wd-text
  text="芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"
  @click="clickTest"
></wd-text>
</template>

<script lang="ts" setup>
function clickTest() {
  console.log(1)
}
</script>
```

### 外部样式类

外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | 1.3.4    |
| custom-style | 根节点样式 | 1.3.4    |

