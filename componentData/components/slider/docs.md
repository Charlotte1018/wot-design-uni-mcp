# Slider 滑块

通过拖动滑块在一个固定区间内进行选择

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (e.g: [VitePress](https://vitepress.vuejs.org/)).

:::

## 基础用法

在拖动滑块时，显示当前值

## 离散值

选项可以是离散的

## 带有输入框的滑块

通过输入框输入来改变当前的值。

## 不同尺寸

## 位置

您可以自定义 Tooltip 提示的位置。

## 范围选择

你还可以选择一个范围值

## 垂直模式

## 显示标记

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type SliderMarks = Record<number, string | { style: CSSProperties,  label: any }>
type Arrayable<T> = T | T[]
```

</details>
