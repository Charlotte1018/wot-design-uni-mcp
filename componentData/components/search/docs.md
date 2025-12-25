# Search 搜索框

搜索框组件，支持输入框聚焦、失焦、输入、搜索、取消、清空事件。

## 基本用法

`v-model`设置输入框绑定值、`focus`绑定聚焦事件、`change` 绑定输入事件，`blur`绑定失焦事件，`search` 绑定搜索事件，`cancel` 绑定取消事件，`clear` 绑定清空事件。

## 浅色主题

设置 `light` 属性，将组件背景色和输入框背景色反转。

## 输入框提示文案靠左

设置 `placeholder-left` 属性。

## 隐藏取消按钮

设置 `hide-cancel` 属性。

## 禁用

设置 `disabled` 属性。

可以和 `hide-cancel` 结合使用，用于在本页只展示搜索框，当点击搜索框时，将页面路由切换进搜索页，在搜索页中再使用搜索功能。

## 自定义左侧插槽

通过使用 `prefix` 插槽自定义搜索框左侧内容。

## 自定义文案

通过设置 `placeholder` 修改输入框提示文案，`cancel-txt` 修改取消按钮文案。

## Attributes

| 参数                | 说明                                                                                      | 类型            | 可选值 | 默认值 | 最低版本 |
| ------------------- | ----------------------------------------------------------------------------------------- | --------------- | ------ | ------ | -------- |
| placeholder         | 搜索框占位文本                                                                            | string          | -      | 搜索   | -        |
| placeholder-left    | placeholder 居左边                                                                        | boolean         | -      | false  | -        |
| cancel-txt          | 搜索框右侧文本                                                                            | string          | -      | 取消   | -        |
| light               | 搜索框亮色（白色）                                                                        | boolean         | -      | false  | -        |
| hide-cancel         | 是否隐藏右侧文本                                                                          | boolean         | -      | false  | -        |
| disabled            | 是否禁用搜索框                                                                            | boolean         | -      | false  | -        |
| maxlength           | 原生属性，设置最大长度。-1 表示无限制                                                     | string / number | -      | -1     | -        |
| v-model             | 输入框内容，双向绑定                                                                      | string          | -      | -      | -        |
| ~~use-suffix-slot~~ | ~~是否使用输入框右侧插槽~~**（已废弃，将在下一个 minor 版本被移除，直接使用插槽即可）** | boolean         | -      | false  | -        |
| focus               | 是否自动聚焦                                                                              | boolean         | -      | false  | 0.1.63   |
| focusWhenClear      | 是否在点击清除按钮时聚焦输入框                                                            | boolean         | -      | false  | 0.1.63   |
| placeholderStyle    | 原生属性，指定 placeholder 的样式，目前仅支持color,font-size和font-weight | string | - | - | 1.6.0 |
| placeholderClass    | 原生属性，指定 placeholder 的样式类 | string | - | - | 1.6.0 |

## Events

| 事件名称 | 说明                       | 参数        | 最低版本 |
| -------- | -------------------------- | ----------- | -------- |
| focus    | 输入框聚焦事件             | `{ value }` | -        |
| blur     | 监听输入框失焦事件         | `{ value }` | -        |
| search   | 监听输入框搜索事件         | `{ value }` | -        |
| clear    | 监听输入框清空按钮事件     | -           | -        |
| cancel   | 监听输入框右侧文本点击事件 | `{ value }` | -        |
| change   | 监听输入框内容变化事件     | `{ value }` | -        |

## Slots

| name   | 说明                 | 最低版本 |
| ------ | -------------------- | -------- |
| prefix | 输入框左侧自定义内容 | -        |
| suffix | 输入框右侧自定义内容 | -        |

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
| custom-input-class | input 外部自定义样式 | 1.6.0 |
