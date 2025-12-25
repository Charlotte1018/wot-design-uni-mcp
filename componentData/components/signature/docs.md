# Signature 签名

用于签名场景，基于 Canvas 实现的签名组件。提供了基础签名、历史记录、笔锋效果等功能。

:::tip 提醒
如果遇到导出图片不清晰，可以将 `exportScale` 设置为 `2` 以上。
:::

## 基础用法

基础的电子签名功能。签名完成后会使用预览组件显示签名图片。

## 历史记录

通过 `enable-history` 开启历史记录功能，可以进行撤销和恢复操作。

## 笔锋模式

通过 `pressure` 开启笔锋模式，模拟真实书写效果。笔锋模式下笔画粗细会随书写速度变化。

### 基础笔锋效果

:::tip 使用建议
1. 笔锋模式推荐参数范围：
   - min-width: 1-2
   - max-width: 4-6
   - min-speed: 1-2
2. max-width 和 min-width 的差值建议保持在 3-5 之间
3. min-speed 值越小，压感越灵敏，建议根据实际书写习惯调整
4. 对于签名场景，建议将画布高度设置在 300-400 之间
:::

### 自定义笔锋参数

可以通过以下属性精确控制笔锋效果：
- `min-width`: 最小笔画宽度，快速书写时的线条粗细
- `max-width`: 最大笔画宽度，慢速书写时的线条粗细
- `min-speed`: 速度阈值，用于调整压感灵敏度

### 笔锋模式 + 历史记录

笔锋模式可以与历史记录功能结合使用，支持对带有笔锋效果的线条进行撤销和恢复操作。

## 自定义功能

### 自定义按钮

通过 `footer` 插槽自定义底部按钮。

### 自定义画笔

可以自定义画笔的颜色和宽度。

### 弹窗中使用

结合 `wd-popup` 组件在弹窗中使用签名板。建议使用 `after-enter` 事件调用签名板的 `init` 方法以确保正确初始化。

:::tip 提示
弹窗中使用签名板时，建议：
1. 开启 `closable` 显示关闭按钮
2. 设置 `safe-area-inset-bottom` 以适配底部安全区
3. 使用 `custom-style` 调整弹窗内边距，为关闭按钮留出空间
4. 在弹窗的 `after-enter` 事件中调用签名板的 `init` 方法，确保正确初始化
:::

### 横屏签名页面

可以通过配置页面的 `pageOrientation` 来实现横屏签名页面。

:::tip 提示
横屏签名页面的建议：
1. 使用 `pageOrientation: "landscape"` 强制横屏显示
2. 动态计算画布尺寸以适配不同设备
3. 注意横屏时 windowWidth 和 windowHeight 的对调
4. 建议开启笔锋模式提供更好的签名体验
:::

### 横屏签名 

支持以下两种横屏签名实现方案：

#### 1. 通用横屏方案 (推荐)

通过自定义布局和按钮旋转实现横屏效果，适用于所有平台。

:::tip 实现说明
通用横屏方案特点：
1. 使用 fixed 布局配合旋转实现左侧垂直按钮栏
2. 通过 footer 插槽自定义操作按钮
3. 使用 transform 实现按钮的旋转效果
4. 适用于所有平台,实现方式一致
5. 建议使用 inited 变量配合延迟加载避免画布初始化问题
:::

#### 2. 原生横屏方案 (仅微信小程序)

微信小程序提供了原生的横屏支持，使用时需要注意区分平台:

:::warning 注意事项
1. `pageOrientation` 配置仅在微信小程序端生效
2. 使用条件编译区分不同平台的布局结构
3. 微信小程序页面会自动旋转，按钮布局不需要特殊处理
4. 预留底部按钮空间时需要考虑横屏布局
5. 其他平台请使用通用横屏方案
:::

## Attributes

| 参数 | 说明 | 类型 | 默认值 | 最低版本 |
|------|------|------|--------|----------|
| pen-color | 签名笔颜色 | string | #000000 | - |
| line-width | 签名笔宽度 | number | 3 | - |
| height | 画布的高度 | number | 200 | - |
| width | 画布的宽度 | number | 300 | - |
| clear-text | 清空按钮的文本 | string | - | - |
| confirm-text | 确认按钮的文本 | string | - | - |
| file-type | 导出图片类型 | string | png | - |
| quality | 导出图片质量(0-1) | number | 1 | - |
| export-scale | 导出图片的缩放比例 | number | 1 | - |
| disabled | 是否禁用签名板 | boolean | false | - |
| background-color | 画板的背景色 | string | - | - |
| disable-scroll | 是否禁用画布滚动 | boolean | true | - |
| enable-history | 是否开启历史记录 | boolean | false | 1.8.0 |
| step | 历史记录步长 | number | 1 | 1.8.0 |
| pressure | 是否启用笔锋模式 | boolean | false | 1.8.0 |
| min-width | 笔锋模式最小宽度 | number | 2 | 1.8.0 |
| max-width | 笔锋模式最大宽度 | number | 6 | 1.8.0 |
| min-speed | 笔锋模式速度阈值 | number | 1.5 | 1.8.0 |

## Events

| 事件名称 | 说明 | 参数 | 最低版本 |
|---------|------|------|----------|
| start | 开始签名时触发 | event: TouchEvent | - |
| end | 结束签名时触发 | event: TouchEvent | - |
| signing | 签名过程中触发 | event: TouchEvent | - |
| confirm | 确认签名时触发 | result: SignatureResult | - |
| clear | 清空签名时触发 | - | - |

## Methods

| 方法名 | 说明 | 参数 | 最低版本 |
|--------|------|------|----------|
| init | 初始化签名板 | forceUpdate?: boolean | - |
| confirm | 确认签名 | - | - |
| clear | 清空签名 | - | - |
| restore | 恢复上一步 | - | - |
| revoke | 撤销上一步 | - | - |

## Slots

| 名称 | 说明 | 参数 | 最低版本 |
|------|------|------|----------|
| footer | 自定义底部按钮 | `{ clear, confirm, restore, revoke, currentStep, historyList }` | - |
