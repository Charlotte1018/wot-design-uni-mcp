# MessageBox 弹框  

弹出对话框，常用于消息提示、消息确认等，支持函数调用。

:::tip 提示
全局调用方案见 [wot-starter](https://starter.wot-ui.cn/guide/feedback.html)，支持在路由导航守卫和网络请求拦截器等场景使用的可全局调用的反馈组件。
:::

## Alert 弹框

alert 弹框只有确定按钮，用于强提醒。

显示标题的 alert 弹框。

如果内容文案过长，弹框高度不再增加，而是展示滚动条。

## Confirm 弹框

用于提示用户操作。

## Prompt 弹框

prompt 会展示一个输入框，并可以进行输入校验。

## 插槽

如果提供的弹框内容不满足需求，可以使用插槽自定义弹框内容。可以通过指定唯一标识`selector`的方式，在一个页面中使用多个`MessageBox`,`useMessage(selector)`会返回一个指定了`selector`的组件实例。

## 确认前置处理

设置 `beforeConfirm` 函数，在用户选择图片点击确认后，会执行 `beforeConfirm` 函数，接收 { resolve }，开发者可以在确认前进行处理，并通过 `resolve` 函数告知组件是否确定通过，`resolve` 接受 1 个 `boolean` 值，`resolve(true)` 表示选项通过，`resolve(false)` 表示选项不通过，不通过时不会完成确认操作。

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
