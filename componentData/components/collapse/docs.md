# Collapse 折叠面板

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

## 基本使用

`v-model` 为绑定值，可以为 array 类型（普通折叠）、 string 类型（手风琴）和 boolean 类型（收起展开查看更多）。CollapseItem 的 `name` 为必填, `title` 选填且可通过 `slot` 自定义。`name` 用于标识该折叠栏。

## 手风琴

设置 `accordion` 属性。

## 禁用

给 CollapseItem 设置 `disabled` 属性，禁用某个折叠栏。

## 异步更新

通过给`wd-collapse-item`组件传入 `beforeExpend` 函数可以在打开面板前进行校验和处理，返回 true 表示允许打开，返回 false 表示禁止打开。支持返回 Promise 进行例如调用接口获取面板数据的操作。

## 查看更多

Collapse 可以单独使用，通过设置 `viewmore` 属性，将其转化为查看更多的折叠类型，同时可以设置 `line-num` 修改收起时的显示行数。这时候的 `value` 为 boolean 类型。

## 查看更多-使用插槽

Collapse 查看更多的模式下，可以使用插槽定义自己想要的折叠处样式，使用 `use-more-slot` 设置插槽开启。并且可以使用外部样式类 `custom-more-slot-class` 为自定义插槽设置样式。

## 嵌套使用

`collapse`可以嵌套使用，同时由于`collapse-item`的内容容器存在默认的`padding`，所以嵌套的`collapse`需要设置`custom-body-style`或者`custom-body-class`来覆盖默认样式。

**_以下为示例，也可以自行调整样式。_**

:::tip 注意
`custom-body-style`和`custom-body-class`在`1.4.0`及以上版本支持。
:::

## Methods

| 方法名    | 说明                                                                             | 参数                                 | 最低版本 |
| --------- | -------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| toggleAll | 切换所有面板展开状态，传 `true` 为全部展开，`false` 为全部收起，不传参为全部切换 | `options?: CollapseToggleAllOptions` | 0.2.6    |

### CollapseToggleAllOptions 参数说明

| 参数名       | 说明                                | 类型    | 默认值 |
| ------------ | ----------------------------------- | ------- | ------ |
| expanded     | 是否展开，true 为展开，false 为收起 | boolean | -      |
| skipDisabled | 是否跳过禁用项                      | boolean | false  |

### toggleAll 方法示例

## Collapse Slot

| name  | 说明                                                 | 最低版本 |
| ----- | ---------------------------------------------------- | -------- |
| title | 标题，便于开发者自定义标题（非 viewmore 使用）       | 1.2.27   |
| more  | 查看更多，便于开发者自定义查看更多类型的展开收起样式 | -        |

## CollapseItem 外部样式类

| 类名              | 说明                           | 最低版本         |
| ----------------- | ------------------------------ | ---------------- |
| custom-class      | collapseItem 根节点样式        | -                |
| custom-body-style | 自定义折叠面板内容容器的样式   | 1.4.0 |
| custom-body-class | 自定义折叠面板内容容器的样式类 | 1.4.0 |

## Collapse 外部样式类

| 类名                   | 说明                               | 最低版本 |
| ---------------------- | ---------------------------------- | -------- |
| custom-class           | collapse 根节点样式                | -        |
| custom-more-slot-class | 查看更多模式下的插槽外部自定义样式 | -        |
