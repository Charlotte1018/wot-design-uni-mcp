# Loading 加载

加载数据时显示动效。

## 区域加载

在需要的时候展示加载动画，防止页面失去响应提高用户体验（例如表格）。

## 自定义加载中组件内容

你可以自定义加载中组件的文字，图标，以及背景颜色。

:::warning

虽然 `element-loading-spinner / element-loading-svg` 属性支持传入的 HTML 片段，但是动态在网站上渲染任意的 HTML 是非常危险的，因为很容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 请确保 `element-loading-spinner / element-loading-svg`的内容是可信的， **不要**将用户提交的内容赋值给 `element-loading-spinner / element-loading-svg` 属性。

:::

## 让加载组件铺满整个屏幕

加载数据时显示全屏动画。

## 以服务的方式来调用

Loading 还可以以服务的方式调用。 你可以像这样引入 Loading 服务：

```ts
import { FinLoading } from '@jdt/find-plus'
```

在你需要的时候通过下面的方式调用：

```ts
FinLoading.service(options)
```

其中`options`参数为 Loading 的配置项，具体见下表。 `LoadingService` 会返回一个 Loading 实例，可通过调用该实例的 `close` 方法来关闭它：

```ts
const loadingInstance = FinLoading.service(options)
nextTick(() => {
  // Loading should be closed asynchronously
  loadingInstance.close()
})
```

需要注意的是，以服务的方式调用的全屏 Loading 是单例的。 若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：

```ts
const loadingInstance1 = FinLoading.service({ fullscreen: true })
const loadingInstance2 = FinLoading.service({ fullscreen: true })
console.log(loadingInstance1 === loadingInstance2) // true
```

此时调用它们中任意一个的 `close` 方法都能关闭这个全屏 Loading。

如果完整引入了 FinD Plus，那么 `app.config.globalProperties` 上会有一个全局方法`$loading`， 它的调用方式为：`this.$loading(options)`，同样会返回一个 Loading 实例。
