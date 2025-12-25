# Notify 消息通知

通知类组件，用于在页面顶部展示通知信息。

## 基本用法

需要在页面中引入该组件，作为挂载点。

## 通知类型
支持 `primary`、`success`、`warning`、`danger` 四种通知类型，默认为 `danger`。

## 自定义通知

## 使用 Notify 组件
如果需要在 Notify 内嵌入组件或其他自定义内容，可以直接使用 Notify 组件，并使用默认插槽进行定制。

## 进阶`demo`

## Attributes
| 参数         | 说明                                                             | 类型    | 可选值                    | 默认值       | 最低版本 |
| ------------ | ----------------------------------------------------------------| ------- | ------------------------- | ------------ | -------- |
| type         | 类型                                                             | NotifyType | `primary` `success` `warning` `danger` | `danger` | -        |
| message      | 展示文案，支持通过`\n`换行                                          | string | -                         | -            | -        |
| duration     | 展示时长(ms)，值为 0 时，notify 不会消失                             | number | -                         | `3000`            | -        |
| zIndex     | 层级                                                               | number | -                          | `99`            | -        |
| position   | 弹出位置                                                            | NotifyPosition | `top` `bottom`     | `top`            | -        |
| color     | 字体颜色                                                             | string | -     | -            | -        |
| background   | 背景颜色                                                          | string | -     | -            | -        |
| safeHeight   | 顶部安全高度                                                       | number / string | -     | -            | -        |
| selector   | 指定唯一标识                                                       | number | -     | -            | -        |
| root-portal | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 | boolean | - | false | 1.11.0 |

## Events
| 事件名 | 说明                                      | 参数    | 最低版本 |
| -------- | ----------------------------------------- | ------- | -------- |
| click  | 点击时的回调函数                                  | (event: MouseEvent) => void | -        |
| closed    | 关闭时的回调函数                                  | () => void | -        |
| opened     | 展示后的回调函数                                 | () => void | -        |

## Methods

| 方法名称 | 说明                                      | 参数    | 最低版本 |
| -------- | ----------------------------------------- | ------- | -------- |
| showNotify  | 展示提示                                  | `NotifyOptions` / `string` | -        |
| closeNotify    | 关闭提示                                  | - | -        |
| setNotifyDefaultOptions     | 修改默认配置，影响所有的 `showNotify` 调用                                  | `NotifyOptions` | -        |
| resetNotifyDefaultOptions  | 重置默认配置，影响所有的 `showNotify` 调用                                  | - | -        |

## Options
调用 `showNotify`、 `setNotifyDefaultOptions` 等方法时，支持传入以下选项：
| 参数         | 说明                                                             | 类型    | 可选值                    | 默认值       | 最低版本 |
| ------------ | ----------------------------------------------------------------| ------- | ------------------------- | ------------ | -------- |
| type         | 类型                                                             | NotifyType | `primary` `success` `warning` `danger` | `danger` | -        |
| message      | 展示文案，支持通过`\n`换行                                          | string | -                         | -            | -        |
| duration     | 展示时长(ms)，值为 0 时，notify 不会消失                             | number | -                         | `3000`            | -        |
| zIndex     | 层级                                                               | number | -                          | `99`            | -        |
| position   | 弹出位置                                                            | NotifyPosition | `top` `bottom`     | `top`            | -        |
| color     | 字体颜色                                                             | string | -     | -            | -        |
| background   | 背景颜色                                                          | string | -     | -            | -        |
| safeHeight   | 顶部安全高度                                                       | number / string | -     | -            | -        |
| onClick   | 点击时的回调函数                                                       | (event: MouseEvent) => void | -     | -            | -        |
| onClosed   | 关闭时的回调函数                                                       | () => void | -     | -            | -        |
| onOpened   | 展示后的回调函数                                                       | () => void | -     | -            | -        |