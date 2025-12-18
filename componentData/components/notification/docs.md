# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

## 不同类型的通知

我们提供了四种不同类型的提醒框：success、warning、info 和error。

## 自定义消息弹出的位置

可以让 Notification 从屏幕四角中的任意一角弹出

## 有位置偏移的通知栏

能够设置偏移量来使 Notification 偏移默认位置。

## 使用 HTML 片段作为正文内容

`message` 支持传入 HTML 字符串来作为正文内容。

:::warning

`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。

:::

## 隐藏关闭按钮

通知的关闭按钮可以被设置为隐藏。

## 全局方法

FinD Plus 为 `app.config.globalProperties` 添加了全局方法 `$notify`。 因此在 Vue instance 中可以采用本页面中的方式调用 `Notification`。

## 单独引用

```javascript
import { FinNotification } from '@jdt/find-plus'
```

你可以在对应的处理函数内调用 `FinNotification(options)` 来呼出通知栏。 我们也提前定义了多个 type 的单独调用方法，如 `FinNotification.success(options)`。 当你需要关闭页面上所有的通知栏的时候，可以调用 `FinNotification.closeAll()` 来关闭所有的实例。

## 应用程序上下文继承

现在 Notification 接受一条 `context` 作为消息构造器的第二个参数，允许你将当前应用的上下文注入到 Notification 中，这将允许你继承应用程序的所有属性。

你可以像这样使用它：

:::tip

如果您全局注册了 FinNotification 组件，它将自动继承应用的上下文环境。

:::

```ts
import { getCurrentInstance } from 'vue'
import { FinNotification } from '@jdt/find-plus'

// 在你的 setup 方法中
const { appContext } = getCurrentInstance()!
FinNotification({}, appContext)
```
