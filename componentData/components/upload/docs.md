# Upload 上传

图片、视频和文件上传组件

::: tip 提示
目前组件库已兼容的平台，都支持上传视频，使用`video`组件实现的视频封面在`H5`、`微信小程序`和`支付宝小程序`平台得到支持，而在`钉钉小程序`和`App`平台则受限于`video`标签在这两个平台的能力无法用做视频封面。故推荐在`change`事件中获取视频封面并给`fileList`对应视频添加封面：`thumb`（上传至各种云服务器时，各厂商应该都提供了视频封面的功能）。
:::

::: warning 关于微信小程序隐私协议
`upload`在微信小程序平台使用了`wx.chooseImage`、`wx.chooseMedia`、`wx.chooseVideo`三个隐私接口需要配置微信隐私协议，可以参考[小程序隐私协议开发指南](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html)进行相关配置和开发，否则会导致上传功能无法使用。推荐使用[微信小程序隐私保护弹出框](https://ext.dcloud.net.cn/plugin?id=14346)或者组件库演示用的[微信隐私协议弹框](https://github.com/Moonofweisheng/wot-design-uni/tree/master/src/components/wd-privacy-popup)。
:::

## 基本用法

`file-list` 设置上传列表，数据类型为数组；

数据更改后通过绑定 `change` 事件给 fileList 赋值。

`action` 设置上传的地址；

## 双向绑定 `1.3.8`

`file-list` 支持用 `v-model` 进行双向绑定。

上传、删除等操作会都会同步数据，不需要通过 `change` 事件进行绑定

## 禁用

设置 `disabled` 开启禁用上传

## 多选上传

通过设置 `multiple` 开启文件多选上传。

## 最大上传数限制

上传组件可通过设置 `limit` 来限制上传文件的个数。

## 覆盖上传

上传组件可通过设置 `reupload` 来实现在选中时自动替换上一个文件。

## 拦截预览图片操作

设置 `before-preview` 函数，在用户点击图片进行预览时，会执行 `before-preview` 函数，接收 { file: 预览文件, index: 当前预览的下标, imgList: 所有图片地址列表, resolve }，通过 `resolve` 函数告知组件是否确定通过，`resolve` 接受 1 个 boolean 值，`resolve(true)` 表示选项通过，`resolve(false)` 表示选项不通过，不通过时不会执行预览图片操作。

## 上传前置处理

设置 `before-upload` 函数，弹出图片选择界面，在用户选择图片点击确认后，会执行 `before-upload` 函数，接收 { files: 当前上传的文件, fileList: 文件列表, resolve }，可以对 `file` 进行处理，并通过 `resolve` 函数告知组件是否确定通过，`resolve` 接受 1 个 boolean 值，`resolve(true)` 表示选项通过，`resolve(false)` 表示选项不通过，不通过时不会执行上传操作。

## 移除图片前置处理

设置 `before-remove` 函数，在用户点击关闭按钮时，会执行 `before-remove` 函数，接收 { file: 移除的文件, index: 移除文件的下标, fileList: 文件列表, resolve }，可以对 `file` 进行处理，并通过 `resolve` 函数告知组件是否确定通过，`resolve` 接受 1 个 boolean 值，`resolve(true)` 表示选项通过，`resolve(false)` 表示选项不通过，不通过时不会执行移除图片操作。

## 选择文件前置处理

设置 `before-choose` 函数，在用户点击唤起项时，会执行 `before-choose` 函数，接收 { fileList: 文件列表, resolve }，通过 `resolve` 函数告知组件是否确定通过，`resolve` 接受 1 个 boolean 值，`resolve(true)` 表示选项通过，`resolve(false)` 表示选项不通过，不通过时不会执行选择文件操作。

## 上传至云存储

设置 `buildFormData` 函数，在用户点击上传时，会执行 `buildFormData` 函数，接收 `{ file, formData, resolve }`

- `file` 当前上传的文件
- `formData` 待处理的`formData`
- `resolve` 函数，用于告知组件是否组装`formData`成功，`resolve(formData)` 表示组装成功。

:::tip 参考

- 上传至阿里云 OSS 的示例，参考[地址](https://help.aliyun.com/zh/oss/use-cases/use-wechat-mini-programs-to-upload-objects)
- 上传至腾讯云 COS 的示例，参考[地址](https://cloud.tencent.com/document/product/436/34929)
- 上传至华为云 OBS 的示例，参考[地址](https://support.huaweicloud.com/bestpractice-obs/obs_05_2000.html)
  :::

::: code-group

:::

## 自定义唤起上传样式

使用默认插槽可以修改唤起上传的样式。

## 上传视频

将`accept`设置为`video`可以用于上传视频类型的文件。

## 同时上传视频和图片

将`accept`设置为`media`可以用于同时上传视频和图片。仅微信小程序支持。

## 仅上传文件

将`accept`设置为`file`可以用于上传除图片和视频以外类型的文件。仅微信小程序支持。

## 上传视频图片和文件

将`accept`设置为`all`可以用于上传视频图片和文件。仅微信小程序和 H5 支持。微信小程序使用`chooseMessageFile`实现，H5 使用`chooseFile`实现。

## 手动触发上传

设置 `auto-upload` 为 `false` 后，选择文件后不会自动开始上传。调用 `submit` 方法会把未上传的所有文件进行上传。

## 自定义上传方法

使用 `upload-method` 调用自定义的方法来上传文件。

## 自定义预览样式

使用 `preview-cover` 插槽可以自定义覆盖在预览区域上方的内容

## 根据文件拓展名过滤

通过设置 `extension` 可以限制选择文件的格式。以下示例限制只能选择 jpg 和 png 格式的图片:

## accept 的合法值

| name  | 说明                                                                                   | 最低版本 |
| ----- | -------------------------------------------------------------------------------------- | -------- |
| image | 图片，全平台支持，微信支持平台使用`chooseMedia`实现                                              | -        |
| video | 视频，全平台支持，微信支持平台使用`chooseMedia`实现                                          | 1.3.0    |
| media | 图片和视频，仅微信支持，使用`chooseMedia`实现                                          | 1.3.0    |
| file  | 从客户端会话选择图片和视频以外的文件，仅微信支持，使用`chooseMessageFile`实现          | 1.3.0    |
| all   | 全部类型的文件，仅微信和 H5 支持，微信使用`chooseMessageFile`，H5 使用`chooseFile`实现 | 1.3.0    |

## file 数据结构

| 键名     | 类型            | 说明                                                  | 最低版本 |
| -------- | --------------- | ----------------------------------------------------- | -------- |
| uid      | number          | 当前上传文件在列表中的唯一标识                        | -        |
| url      | string          | 上传图片地址                                          | -        |
| action   | string          | 上传的地址                                            | -        |
| percent  | number          | 上传进度                                              | -        |
| size     | number          | 响文件尺寸应码                                        | -        |
| status   | string          | 当前图片上传状态。若自定义了 status-key，应取对应字段 | -        |
| response | string / object | 后端返回的内容，可能是对象，也可能是字符串            | -        |

## Slot

| name    | 说明             | 最低版本 |
| ------- | ---------------- | -------- |
| default | 上传唤起插槽样式 | -        |
| preview-cover | 自定义覆盖在预览区域上方的内容 |   1.3.12   |

## Methods

| 方法名称 | 说明         | 参数 | 最低版本         |
| -------- | ------------ | ---- | ---------------- |
| submit   | 手动开始上传 | -    | 1.3.8 |

## Upload 外部样式类

| 类名                 | 说明                     | 最低版本 |
| -------------------- | ------------------------ | -------- |
| custom-class         | 根节点样式类             | -        |
| custom-evoke-class   | 自定义上传按钮样式类     | -        |
| custom-preview-class | 自定义预览图片列表样式类 | -        |

