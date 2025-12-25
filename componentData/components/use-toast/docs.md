# useToast

用于便捷地调用 Toast 轻提示组件。

## 基本用法

需要在页面中引入 wd-toast 组件作为挂载点。

## 成功、异常、警告、常规

## 使用图标
可以使用`iconClass`指定图标，结合`classPrefix`可以使用自定义图标，参见 [Icon 自定义图标](/component/icon#自定义图标)。

## loading 提示

`loading` 开启后需要用户手动关闭，关闭可以调用 `close`，或者再调用一次 toast 提示，因为 toast 只会存在一个，新的 toast 会自动顶掉旧的 toast。

修改 loading 指示器类型：

手动关闭 loading:

