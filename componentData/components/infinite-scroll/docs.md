# Infinite Scroll 无限滚动

滚动至底部时，加载更多数据。

## 基础用法

在要实现滚动加载的列表上添加`v-infinite-scroll`，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。

## 禁用加载

## 指令

| 属性                        | 说明                          | 类型          | 默认    |
| ------------------------- | --------------------------- | ----------- | ----- |
| v-infinite-scroll         | 滚动到底部时，加载更多数据               | ^[Function] | —     |
| infinite-scroll-disabled  | 是否禁用                        | ^[boolean]  | false |
| infinite-scroll-delay     | 节流时延，单位为ms                  | ^[number]   | 200   |
| infinite-scroll-distance  | 触发加载的距离阈值，单位为px             | ^[number]   | 0     |
| infinite-scroll-immediate | 是否立即执行加载方法，以防初始状态下内容无法撑满容器。 | ^[boolean]  | true  |
