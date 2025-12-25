# useNotify

用于便捷地调用 Notify 消息通知组件。

## 基本用法

需要在页面中引入 wd-notify 组件作为挂载点。

## 通知类型

支持 `primary`、`success`、`warning`、`danger` 四种通知类型，默认为 `danger`。

## 自定义样式

## API

### Methods

| 方法名称 | 说明 | 参数 | 
|---------|------|------|
| showNotify | 展示提示 | `NotifyOptions` / `string` |
| closeNotify | 关闭提示 | - |
| setNotifyDefaultOptions | 修改默认配置，影响所有的 `showNotify` 调用 | `NotifyOptions` |
| resetNotifyDefaultOptions | 重置默认配置，影响所有的 `showNotify` 调用 | - |

### Options

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|--------|--------|
| type | 类型 | NotifyType | `primary` `success` `warning` `danger` | `danger` |
| message | 展示文案，支持通过\n换行 | string | - | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | number | - | 3000 |
| zIndex | 层级 | number | - | 99 |
| position | 弹出位置 | NotifyPosition | `top` `bottom` | `top` |
| color | 字体颜色 | string | - | - |
| background | 背景颜色 | string | - | - |
| safeHeight | 顶部安全高度 | number / string | - | - |
| onClick | 点击时的回调函数 | (event: MouseEvent) => void | - | - |
| onClosed | 关闭时的回调函数 | () => void | - | - |
| onOpened | 展示后的回调函数 | () => void | - | - |
