# Message 消息提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

从顶部出现，3 秒后自动消失。

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

## 深色模式

## 可关闭的消息提示

可以添加关闭按钮。

## 文字居中

使用 `center` 属性让文字水平居中。

## 使用 HTML 片段作为正文内容

`message` 还支持使用 HTML 字符串作为正文内容。

:::warning

`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。

:::

## 分组消息合并

合并相同内容的消息。

## 全局方法

FinD Plus 为 `app.config.globalProperties` 添加了全局方法 `$message`。 因此在 vue 实例中你可以使用当前页面中的调用方式调用 `Message`

## 单独引用

```ts
import { FinMessage } from '@jdt/find-plus'
```

此时调用方法为 `FinMessage(options)`。 我们也为每个 type 定义了各自的方法，如 `FinMessage.success(options)`。 并且可以调用 `FinMessage.closeAll()` 手动关闭所有实例。

## 应用程序上下文继承

现在 Message 接受一条 `context` 作为消息构造器的第二个参数，允许你将当前应用的上下文注入到 Message 中，这将允许你继承应用程序的所有属性。

你可以像这样使用它：

:::tip

如果您全局注册了 FinMessage 组件，它将自动继承应用的上下文环境。

:::

```ts
import { getCurrentInstance } from 'vue'
import { FinMessage } from '@jdt/find-plus'

// 在你的 setup 方法中
const { appContext } = getCurrentInstance()!
FinMessage({}, appContext)
```
