# useMessage

用于便捷地调用 MessageBox 弹框组件。

## Alert 弹框

alert 弹框只有确定按钮，用于强提醒。

## Confirm 弹框

用于提示用户操作。

## Prompt 弹框

prompt 会展示一个输入框，并可以进行输入校验。

## API

### Methods

| 方法名称 | 说明           | 参数    |
|--------|----------------|---------|
| show   | 展示弹框       | options |
| alert  | 展示 Alert 弹框 | options |
| confirm| 展示 Confirm 弹框| options |
| prompt | 展示 Prompt 弹框| options |
| close  | 关闭弹框       | -       |

### Options

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|--------|--------|
| title | 标题 | string | - | - |
| msg | 消息文案 | string | - | - |
| type | 弹框类型 | string | alert / confirm / prompt | alert |
| closeOnClickModal | 是否支持点击蒙层进行关闭 | boolean | - | true |
| inputType | 当type为prompt时，输入框类型 | string | - | text |
| inputValue | 当type为prompt时，输入框初始值 | string / number | - | - |
| inputPlaceholder | 当type为prompt时，输入框placeholder | string | - | 请输入内容 |
| inputPattern | 当type为prompt时，输入框正则校验 | RegExp | - | - |
| inputValidate | 当type为prompt时，输入框校验函数 | function | - | - |
| inputError | 当type为prompt时，输入框检验不通过时的错误提示文案 | string | - | 输入的数据不合法 |
| confirmButtonText | 确定按钮文案 | string | - | 确定 |
| cancelButtonText | 取消按钮文案 | string | - | 取消 |
| zIndex | 弹窗层级 | number | - | 99 |
| selector | 指定唯一标识 | string | - | '' |
