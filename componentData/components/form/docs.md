# Form 表单

表单包含 `输入框`, `单选框`, `下拉选择`, `多选框` 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

:::tip

Form 组件已经从 2. x 的 Float 布局升级为 Flex 布局。

:::

## 典型表单

最基础的表单包括各种输入表单项，比如`input`、`select`、`radio`、`checkbox`等。

:::tip

[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) 标准定义：

> <i>当一个表单中只有一个单行文本输入字段时， 浏览器应当将在此字段中按下 <kbd>Enter</kbd> （回车键）的行为视为提交表单的请求。</i>
如果希望阻止这一默认行为，可以在 `<fin-form>` 标签上添加 `@submit.prevent`。

:::

## 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

## 对齐方式

根据你们的设计情况，来选择最佳的标签对齐方式。

## 表单校验

Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

## 自定义校验规则

这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。

:::tip

自定义的校验回调函数必须被调用。 更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)。

:::

## 添加/删除表单项

## 数字类型验证

:::tip

当一个 `fin-form-item` 嵌套在另一个 `fin-form-item`时，其标签宽度将是 `0`。 如果需要可以为 `fin-form-item` 单独设置 `label-width` 属性。

:::

## 尺寸控制

表单中的所有子组件都继承了该表单的 `size` 属性。 同样，form-item 也有一个 `size` 属性。

## 无障碍

当在 `fin-form-item` 内只有一个输入框（或相关的控制部件，如选择或复选框），表单项的标签将自动附加在那个输入框上。 然而，如果同时有多个输入框在 `fin-form-item`内， 表单项将被分配为 [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) [组](https://www.w3.org/TR/wai-aria/#group) 的角色。 在这种情况下，需要手动给每个 input 指定访问标签。

## 类型声明

<details>
  <summary>显示类型声明</summary>

```ts
type Arrayable<T> = T | T[]

type FormValidationResult = Promise<boolean>

// ValidateFieldsError: see [async-validator](https://github.com/yiminghe/async-validator/blob/master/src/interface.ts)
type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => void

// RuleItem: see [async-validator](https://github.com/yiminghe/async-validator/blob/master/src/interface.ts)
interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}

type Primitive = null | undefined | string | number | boolean | symbol | bigint
type BrowserNativeObject = Date | FileList | File | Blob | RegExp
type IsTuple<T extends ReadonlyArray<any>> = number extends T['length']
  ? false
  : true
type ArrayMethodKey = keyof any[]
type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, ArrayMethodKey>
type ArrayKey = number
type PathImpl<K extends string | number, V> = V extends
  | Primitive
  | BrowserNativeObject
  ? `${K}`
  : `${K}` | `${K}.${Path<V>}`
type Path<T> = T extends ReadonlyArray<infer V>
  ? IsTuple<T> extends true
    ? {
        [K in TupleKey<T>]-?: PathImpl<Exclude<K, symbol>, T[K]>
      }[TupleKey<T>]
    : PathImpl<ArrayKey, V>
  : {
      [K in keyof T]-?: PathImpl<Exclude<K, symbol>, T[K]>
    }[keyof T]
type FieldPath<T> = T extends object ? Path<T> : never
// MaybeRef: see [@vueuse/core](https://github.com/vueuse/vueuse/blob/main/packages/shared/utils/types.ts)
// UnwrapRef: see [vue](https://github.com/vuejs/core/blob/main/packages/reactivity/src/ref.ts)
type FormRules<T extends MaybeRef<Record<string, any> | string> = string> =
  Partial<
    Record<
      UnwrapRef<T> extends string ? UnwrapRef<T> : FieldPath<UnwrapRef<T>>,
      Arrayable<FormItemRule>
    >
  >

type FormItemValidateState = typeof formItemValidateStates[number]
type FormItemProps = ExtractPropTypes<typeof formItemProps>

type FormItemContext = FormItemProps & {
  $el: HTMLDivElement | undefined
  size: ComponentSize
  validateState: FormItemValidateState
  isGroup: boolean
  labelId: string
  inputIds: string[]
  hasLabel: boolean
  fieldValue: any
  addInputId: (id: string) => void
  removeInputId: (id: string) => void
  validate: (
    trigger: string,
    callback?: FormValidateCallback
  ) => FormValidationResult
  resetField(): void
  clearValidate(): void
}

```

</details>
