# Img 图片

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载完成、加载失败。

## 基本用法

基础用法与原生 image 标签一致，可以设置 `src` 、 `width` 、`height` 等原生属性。

原生属性，参考[uni-app image 官方文档](https://uniapp.dcloud.net.cn/component/image.html#image)。

此处需要注意的是 src 属性：

使用 `相对路径`，需要注意 `src` 需要以组件存放位置相对图片位置为相对路径。

使用 `文件导入` ，需要注意的是微信小程序 image 标签路径接受二进制数据以及 base64 编码。单独使用 import 图片路径无法访问。

:::tip 提示
可以配置 `transformAssetUrls` 使 `src` 属性获得与原生 `image` 一致的体验。

修改完成后重启开发服务即可生效，查看 [uni-app issue#4997](https://github.com/dcloudio/uni-app/issues/4997#issuecomment-2456851123) 了解更多。
:::

## 插槽

使用`loading` `error`插槽设置在图片加载时、加载失败后的展示内容

## 填充模式

通过 `mode` 属性可以设置图片填充模式，可选值见下方表格。

mode 为小程序原生属性，参考[微信小程序 image 官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)。

## 圆形设置

通过 `round` 属性可以设置以圆形展示。

## 可预览

通过设置`enable-preview`属性可以支持点击预览，底层调用 uni.previewImage 来实现预览效果

也可以传入 `preview-src` 属性来预览另外的图片

## 外部样式类

| 类名         | 说明                 | 最低版本 |
| ------------ | -------------------- | -------- |
| custom-class | 根节点样式           | -        |
| custom-image | image 外部自定义样式 | -        |
