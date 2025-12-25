# DropMenu 下拉菜单

向下或向上弹出的菜单列表。

## 基础用法

基础用法需要绑定 `v-model` 值以及 `options` 属性。

`options` 属性是一个一维对象数组，数组项的数据结构为：label（选项文本），value（选项值），tip（选项说明）。

因为`uni-app`组件无法监听点击自己以外的地方，为了在点击页面其他地方时，可以自动关闭 `dropmenu` ，建议使用组件库的 `useQueue` hook（会关闭所有 dropmenu、popover、toast、swipeAction、fab），在页面的根元素上监听点击事件的冒泡。

:::warning
如果存在用户手动点击 `dropmenu` 以外某个地方如按钮弹出 `dropmenu` 的场景，则需要在点击的元素（在这里上按钮）加上 @click 阻止事件冒泡到根元素上，避免触发 `closeOutside` 把要手动打开的 `dropmenu` 关闭了。
:::

## 自定义菜单内容

通过插槽 `default` 可以自定义 `DropMenuItem` 的内容，此时需要使用实例上的 `close` 方法手动控制菜单的关闭。

可以通过 `title` 设置菜单标题。

> 这时候不要传入 options 和 value

## 自定义菜单选项

自己通过 flex 布局做自定义筛选展示。

## 自定义菜单图标<el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.3.7</el-tag>

可以通过 `icon` 设置菜单右侧图标，等同于 `<wd-icon />` 的 `name` 属性。通过 `icon-size` 设置图标尺寸，等同于 `<wd-icon />` 的 `size` 属性。

## 异步打开/关闭<el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">1.3.7</el-tag>

设置 `before-toggle` 函数，在下拉菜单打开或者关闭前执行特定的逻辑，实现状态变更前校验、异步打开/关闭的目的，`before-toggle`接收 { status: 当前操作类型：true 打开下拉菜单，false 关闭下拉菜单, resolve }，可以对操作进行校验，并通过 resolve 函数告知组件是否确定通过，resolve 接受 1 个 boolean 值，resolve(true) 表示选项通过，resolve(false) 表示选项不通过，不通过时不会执行关闭或展开操作。

:::warning 提示
`before-toggle` 函数无法阻止其他`drop-menu`或其他`drop-menu-item`的展开/关闭操作，仅限当前`drop-menu-item`的展开/关闭操作。
:::

## 向上展开

将 `direction` 属性值设置为 `up`，菜单即可向上展开

## 禁用菜单

## DropdownItem Methods

通过设置 `ref` 可以获取到 DropdownItem 实例并调用实例方法

| 方法名 | 说明     | 参数 | 返回值 | 最低版本 |
| ------ | -------- | ---- | ------ | -------- |
| close  | 关闭菜单 | -    | -      | -        |
| open   | 展开菜单 | -    | -      | -        |

## DropMenu Slot

| name    | 说明     | 最低版本 |
| ------- | -------- | -------- |
| default | 菜单内容 | -        |

## DropMenuItem Slot

| name    | 说明               | 最低版本 |
| ------- | ------------------ | -------- |
| default | 菜单自定义内部内容 | -        |

## DropMenu 外部样式类

| 类名         | 说明                | 最低版本 |
| ------------ | ------------------- | -------- |
| custom-class | DropMenu 根节点样式 | -        |

## DropMenuItem 外部样式类

| 类名               | 说明                        | 最低版本         |
| ------------------ | --------------------------- | ---------------- |
| custom-class       | DropMenuItem 根节点样式     | -                |
| custom-title       | DropMenuItem 左侧文字样式   | -                |
| custom-icon        | DropMenuItem 右侧 icon 样式 | -                |
| custom-popup-class | 自定义下拉菜单 popup 样式类 | 1.5.0 |
| custom-popup-style | 自定义下拉菜单 popup 样式   | 1.5.0 |
