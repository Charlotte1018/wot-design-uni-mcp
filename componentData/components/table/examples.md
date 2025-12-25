## Table 组件示例

### 基础用法

基础用法

```vue
<template>
<wd-table :data="dataList" :height="400">
  <wd-table-col prop="name" label="姓名"></wd-table-col>
  <wd-table-col prop="school" label="求学之所"></wd-table-col>
  <wd-table-col prop="major" label="专业"></wd-table-col>
</wd-table>
</template>

<script lang="ts" setup>
const dataList = reactive([
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业'
  },
  {
    name: '孔明',
    school: '武汉市阳逻卧龙学院',
    major: '计算机科学与技术专业'
  },
  {
    name: '刘备',
    school: '武汉市阳逻编织学院',
    major: '计算机科学与技术专业'
  }
])
</script>
```

### 固定列

固定列

```vue
<template>
<wd-table :data="dataList" :height="400">
  <wd-table-col prop="name" label="姓名" fixed></wd-table-col>
  <wd-table-col prop="school" label="求学之所"></wd-table-col>
  <wd-table-col prop="major" label="专业"></wd-table-col>
</wd-table>
</template>

<script lang="ts" setup>
</script>
```

### 显示索引

显示索引

```vue
<template>
<wd-table :data="dataList" height="328px" :index="true" :height="400">
  <wd-table-col prop="name" label="姓名" sortable></wd-table-col>
  <wd-table-col prop="grade" label="分数" sortable></wd-table-col>
  <wd-table-col prop="hobby" label="一言以蔽之" sortable :width="160"></wd-table-col>
</wd-table>

<wd-table :data="dataList" height="328px" :index="{ align: 'center', width: 200 }">
  <wd-table-col prop="name" label="姓名" sortable align="center"></wd-table-col>
  <wd-table-col prop="grade" label="分数" sortable align="center"></wd-table-col>
  <wd-table-col prop="hobby" label="一言以蔽之" sortable :width="160"></wd-table-col>
</wd-table>
</template>

<script lang="ts" setup>
</script>
```

### 斑马纹

斑马纹

```vue
<template>
<wd-table :data="dataList" :stripe="false" :height="400">
  <wd-table-col prop="name" label="姓名"></wd-table-col>
  <wd-table-col prop="school" label="求学之所"></wd-table-col>
  <wd-table-col prop="major" label="专业"></wd-table-col>
</wd-table>
</template>

<script lang="ts" setup>
</script>
```

### 边框

边框

```vue
<template>
<wd-table :data="dataList" :border="false" :height="400">
  <wd-table-col prop="name" label="姓名"></wd-table-col>
  <wd-table-col prop="school" label="求学之所"></wd-table-col>
  <wd-table-col prop="major" label="专业"></wd-table-col>
</wd-table>
</template>

<script lang="ts" setup>
</script>
```

### 表格高度

表格高度

```vue
<template>
<wd-table :data="dataList" :height="400">
  <wd-table-col prop="name" label="姓名"></wd-table-col>
  <wd-table-col prop="school" label="求学之所"></wd-table-col>
  <wd-table-col prop="major" label="专业"></wd-table-col>
</wd-table>
</template>

<script lang="ts" setup>
</script>
```

### 排序事件

排序事件

```vue
<template>
<wd-table :data="dataList" @sort-method="handleSort" :height="400">
  <wd-table-col prop="name" label="姓名"></wd-table-col>
  <wd-table-col prop="school" label="求学之所" sortable></wd-table-col>
  <wd-table-col prop="major" label="专业"></wd-table-col>
</wd-table>
</template>

<script lang="ts" setup>
function handleSort(e) {
  console.log('这里是排序事件')
}
</script>
```

### 自定义列模板

自定义列模板

```vue
<template>
<wd-table :data="dataList" @sort-method="handleSort" :height="400">
  <wd-table-col prop="name" label="姓名" fixed="true" width="320rpx" sortable></wd-table-col>
  <wd-table-col prop="grade" label="分数" width="220rpx" sortable>
    <template #value="{row}">
      <view class="custom-class">
        <text>{{ row.grade }}</text>
        <text>同比{{ row.compare }}</text>
      </view>
    </template>
  </wd-table-col>
  <wd-table-col prop="hobby" label="一言以蔽之" sortable></wd-table-col>
  <wd-table-col prop="school" label="求学之所"></wd-table-col>
  <wd-table-col prop="major" label="专业"></wd-table-col>
  <wd-table-col prop="gender" label="性别"></wd-table-col>
  <wd-table-col prop="graduation" label="学成时间"></wd-table-col>
</wd-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
interface TableData {
  name: string
  school: string
  major: string
  gender: string
  graduation: string
  grade: number
  compare: string
  hobby: string
}

const dataList = ref<TableData[]>([
  {
    name: '张飞',
    school: '武汉市阳逻杀猪学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 56,
    compare: '10%',
    hobby: '燕人张飞在此！'
  },
  {
    name: '关羽',
    school: '武汉市阳逻绿豆学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 66,
    compare: '11%',
    hobby: '颜良文丑，以吾观之，如土鸡瓦犬耳。'
  },
  {
    name: '刘备',
    school: '武汉市阳逻编织学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 45,
    compare: '1%',
    hobby: '我得空明，如鱼得水也'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 69,
    compare: '14%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '孔明',
    school: '武汉市阳逻卧龙学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 88,
    compare: '21%',
    hobby: '兴汉讨贼，克复中原'
  },
  {
    name: '姜维',
    school: '武汉市阳逻停水停电技术学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 87,
    compare: '32%',
    hobby: '我计不成，乃天命也！'
  }
])

/**
 * 排序
 * @param e
 */
function handleSort(e) {
  dataList.value = dataList.value.reverse()
}
</script>

<style lang="scss">
.custom-class {
  height: 80rpx;
  width: 220rpx;
  display: flex;
  flex-direction: col;
  align-items: center;
}
</style>
```

### 不固定表头结合分页器使用

不固定表头结合分页器使用

```vue
<template>
<wd-table :data="paginationData" :height="400" :fixed-header="false">
  <wd-table-col prop="name" label="姓名" fixed align="center"></wd-table-col>
  <wd-table-col prop="grade" label="分数" fixed align="center"></wd-table-col>
  <wd-table-col prop="hobby" label="一言以蔽之" :width="160"></wd-table-col>
  <wd-table-col prop="school" label="求学之所" :width="180"></wd-table-col>
  <wd-table-col prop="major" label="专业"></wd-table-col>
  <wd-table-col prop="gender" label="性别"></wd-table-col>
</wd-table>
<wd-pagination custom-style="border: 1px solid #ececec;border-top:none" v-model="page" :total="total"></wd-pagination>
</template>

<script lang="ts" setup>
interface TableData {
  name: string
  school: string
  major: string
  gender: string
  graduation: string
  grade: number
  compare: string
  hobby: string
}

const dataList = ref<TableData[]>([
  {
    name: '关羽',
    school: '武汉市阳逻绿豆学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 66,
    compare: '48%',
    hobby: '颜良文丑，以吾观之，如土鸡瓦犬耳。'
  },
  {
    name: '刘备',
    school: '武汉市阳逻编织学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 68,
    compare: '21%',
    hobby: '我得空明，如鱼得水也'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 91,
    compare: '12%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 91,
    compare: '12%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '孔明',
    school: '武汉市阳逻卧龙学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 99,
    compare: '18%',
    hobby: '兴汉讨贼，克复中原'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 36,
    compare: '48%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '关羽',
    school: '武汉市阳逻绿豆学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 66,
    compare: '48%',
    hobby: '颜良文丑，以吾观之，如土鸡瓦犬耳。'
  },
  {
    name: '刘备',
    school: '武汉市阳逻编织学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 68,
    compare: '21%',
    hobby: '我得空明，如鱼得水也'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 91,
    compare: '12%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '孔明',
    school: '武汉市阳逻卧龙学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 99,
    compare: '18%',
    hobby: '兴汉讨贼，克复中原'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 36,
    compare: '48%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '关羽',
    school: '武汉市阳逻绿豆学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 66,
    compare: '48%',
    hobby: '颜良文丑，以吾观之，如土鸡瓦犬耳。'
  },
  {
    name: '刘备',
    school: '武汉市阳逻编织学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 68,
    compare: '21%',
    hobby: '我得空明，如鱼得水也'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 91,
    compare: '12%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '孔明',
    school: '武汉市阳逻卧龙学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 99,
    compare: '18%',
    hobby: '兴汉讨贼，克复中原'
  }
])
const page = ref<number>(1)
const pageSize = ref<number>(10)

const total = ref<number>(dataList.value.length)

const paginationData = computed(() => {
  // 按页码和每页条数截取数据
  return dataList.value.slice((page.value - 1) * pageSize.value, page.value * pageSize.value)
})
</script>
```

