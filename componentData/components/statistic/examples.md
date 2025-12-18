## Statistic 组件示例

### basic

用于突出某个或某组数字时，如统计数值、金额、排名等，数值和标题前后都可以加icon、单位等元素。

```vue
<template>
  <fin-row>
    <fin-col :span="6">
      <fin-statistic title="Daily active users" :value="268500" />
    </fin-col>
    <fin-col :span="6">
      <fin-statistic :value="138">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio of men to women
          </div>
        </template>
        <template #suffix>/100</template>
      </fin-statistic>
    </fin-col>
    <fin-col :span="6">
      <fin-statistic title="Total Transactions" :value="172000" />
    </fin-col>
    <fin-col :span="6">
      <fin-statistic title="Feedback number" :value="562">
        <template #suffix>
          <fin-icon style="vertical-align: -0.125em">
            <ChatDot />
          </fin-icon>
        </template>
      </fin-statistic>
    </fin-col>
  </fin-row>
</template>

<script lang="ts" setup>
import { ChatDot } from '@jdt/find-plus-icons-vue'
</script>

<style scoped>
.fin-col {
  text-align: center;
}
</style>
```

### card

卡片式用法展示，可以自由组合

```vue
<template>
  <fin-row :gutter="16">
    <fin-col :span="8">
      <div class="statistic-card">
        <fin-statistic :value="98500">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Daily active users
              <fin-tooltip
                effect="dark"
                content="Number of users who logged into the product in one day"
                placement="top"
              >
                <fin-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </fin-icon>
              </fin-tooltip>
            </div>
          </template>
        </fin-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              24%
              <fin-icon>
                <TopSolid />
              </fin-icon>
            </span>
          </div>
        </div>
      </div>
    </fin-col>
    <fin-col :span="8">
      <div class="statistic-card">
        <fin-statistic :value="693700">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Monthly Active Users
              <fin-tooltip
                effect="dark"
                content="Number of users who logged into the product in one month"
                placement="top"
              >
                <fin-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </fin-icon>
              </fin-tooltip>
            </div>
          </template>
        </fin-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>month on month</span>
            <span class="red">
              12%
              <fin-icon>
                <BottomSolid />
              </fin-icon>
            </span>
          </div>
        </div>
      </div>
    </fin-col>
    <fin-col :span="8">
      <div class="statistic-card">
        <fin-statistic :value="72000" title="New transactions today">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              New transactions today
            </div>
          </template>
        </fin-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              16%
              <fin-icon>
                <TopSolid />
              </fin-icon>
            </span>
          </div>
          <div class="footer-item">
            <fin-icon :size="14">
              <ArrowRight />
            </fin-icon>
          </div>
        </div>
      </div>
    </fin-col>
  </fin-row>
</template>

<script lang="ts" setup>
import {
  ArrowRight,
  BottomSolid,
  TopSolid,
  Warning,
} from '@jdt/find-plus-icons-vue'
</script>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--fin-fill-color) !important;
}

.fin-statistic {
  --fin-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--fin-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--fin-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--fin-color-success);
}
.red {
  color: var(--fin-color-error);
}
</style>
```

