## Steps 组件示例

### 基本用法

基本用法

```vue
<template>
<wd-steps :active="active">
  <wd-step />
  <wd-step />
  <wd-step />
</wd-steps>
</template>

<script lang="ts" setup>
const active = ref<number>(0)

function nextStep() {
  active.value = active.value + 1
}
</script>
```

### 水平居中

水平居中

```vue
<template>
<wd-steps :active="0" align-center>
  <wd-step />
  <wd-step />
  <wd-step />
</wd-steps>
</template>

<script lang="ts" setup>
</script>
```

### 设置标题和描述信息

设置标题和描述信息

```vue
<template>
<wd-steps :active="active" align-center>
  <wd-step title="步骤1" description="注册1个账号" />
  <wd-step title="步骤2" description="登录账号并绑定手机" />
  <wd-step title="步骤3" description="完善个人信息" />
</wd-steps>
<wd-button size="small" @click="nextStep">下一步</wd-button>
</template>

<script lang="ts" setup>
const active = ref<number>(0)

function nextStep() {
  active.value = active.value + 1
}
</script>
```

### 修改图标

修改图标

```vue
<template>
<wd-steps :active="1" align-center>
  <wd-step icon="invite" />
  <wd-step icon="link" />
  <wd-step icon="clock" />
</wd-steps>
</template>

<script lang="ts" setup>
</script>
```

### 竖向步骤条

竖向步骤条

```vue
<template>
<wd-steps :active="1" vertical>
  <wd-step description="注册1个账号" />
  <wd-step description="登录账号并绑定手机" />
  <wd-step description="完善个人信息" />
</wd-steps>
</template>

<script lang="ts" setup>
</script>
```

### 点状步骤

点状步骤

```vue
<template>
<wd-steps :active="1" vertical dot>
  <wd-step description="注册1个账号" />
  <wd-step description="登录账号并绑定手机" />
  <wd-step description="完善个人信息" />
</wd-steps>
</template>

<script lang="ts" setup>
</script>
```

### 修改状态

修改状态

```vue
<template>
<wd-steps :active="1" align-center>
  <wd-step title="绑定手机" status="error" />
  <wd-step title="重新绑定手机" />
  <wd-step title="步骤3" />
</wd-steps>
</template>

<script lang="ts" setup>
</script>
```

### Steps 外部样式类

Steps 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|-----|---------|
| custom-class | 根节点样式 | - |

### Step 外部样式类

Step 外部样式类

| 类名 | 说明 | 最低版本 |
|-----|------|--------|
| custom-class | 根节点样式 | - |

