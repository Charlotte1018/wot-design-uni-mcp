# loadmore 加载更多

用于在列表底部展示加载状态。

## 基本用法

在需要进行加载的列表的底部引入该组件即可。当滑动到列表底部时，通过设置`state`展示不同的文案。

## 自定义文案

通过设置`loading-text`、`finished-text`、`error-text`配合`state`展示不同状态时的文案

## 点击继续加载

当 state 为 error 时，点击文案，组件会触发`loadmore`事件

## 应用实现

配合`onReachBottom`事件实现滚动到底部加载更多

## Attributes

| 参数          | 说明                 | 类型   | 可选值                 | 默认值             | 最低版本 |
| ------------- | -------------------- | ------ | ---------------------- | ------------------ | -------- |
| state         | 加载状态             | string | loading/finished/error | -                  | -        |
| loading-text  | 加载提示文案         | string | -                      | 加载中...          | -        |
| finished-text | 全部加载完的提示文案 | string | -                      | 没有更多了         | -        |
| error-text    | 加载失败的提示文案   | string | -                      | 加载失败，点击重试 | -        |
| loading-props  | loading加载组件属性| `Partial<LoadingProps>` | -         | -       | 1.3.14        |

#### LoadingProps
参见[LoadingProps](/component/loading.html#attributes)

## Events

| 事件名称 | 说明                                                | 参数 | 最低版本 |
| -------- | --------------------------------------------------- | ---- | -------- |
| reload   | state 为 error 加载错误时，点击文案触发 reload 事件 | -    | -        |

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
