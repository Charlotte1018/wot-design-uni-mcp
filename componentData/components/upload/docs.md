# Upload 上传

通过点击或者拖拽上传文件。

## 基础用法

## 覆盖前一个文件

## 用户头像

在 `before-upload` 钩子中限制用户上传文件的格式和大小。

## 照片墙

使用 `list-type` 属性来设定文件列表的样式。

## 自定义缩略图

使用 `scoped-slot` 属性来改变默认的缩略图模板样式。

## 图片列表缩略图

## 上传文件列表控制

通过 `on-change` 钩子函数来对上传文件的列表进行控制。

## 拖拽上传

你可以将文件拖拽到特定区域以进行上传。

## 手动上传

## 类型声明

<details>
  <summary>显示类型声明</summary>

```ts

type UploadFiles = UploadFile[]

type UploadUserFile = Omit<UploadFile, 'status' | 'uid'> &
  Partial<Pick<UploadFile, 'status' | 'uid'>>

type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail'

type Awaitable<T> = Promise<T> | T

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

interface UploadFile {
  name: string
  percentage?: number
  status: UploadStatus
  size?: number
  response?: unknown
  uid: number
  url?: string
  raw?: UploadRawFile
}

interface UploadProgressEvent extends ProgressEvent {
  percent: number
}

interface UploadRawFile extends File {
  uid: number
}

interface UploadRequestOptions {
  action: string
  method: string
  data: Record<string, string | Blob | [string | Blob, string]>
  filename: string
  file: File
  headers: Headers | Record<string, string | number | null | undefined>
  onError: (evt: UploadAjaxError) => void
  onProgress: (evt: UploadProgressEvent) => void
  onSuccess: (response: any) => void
  withCredentials: boolean
}
```

</details>
