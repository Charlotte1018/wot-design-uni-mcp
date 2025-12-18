# Find-Plus MCP 快速开始指南

## ✅ 当前状态

- ✅ 项目构建成功
- ✅ 已提取 72 个 Find-Plus 组件文档
- ✅ 已提取 416+ 个 Vue 3 代码示例
- ✅ 数据验证通过

## 🚀 在 Claude Desktop 中使用

### 步骤 1: 配置 Claude Desktop

编辑配置文件：`~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "Find-Plus Components": {
      "command": "node",
      "args": [
        "/Users/shichangxue/jd-project/tiance/tiance_new/build-cli/projects/AI/MCP/find-plus-mcp/dist/cli.js"
      ]
    }
  }
}
```

### 步骤 2: 重启 Claude Desktop

完全退出并重新启动 Claude Desktop 应用。

### 步骤 3: 验证 MCP 服务器

在 Claude 中，你应该能看到以下工具：
- 🔧 list-components
- 🔧 get-component-docs
- 🔧 list-component-examples

以及 Prompt：
- 💬 system-description

## 💡 示例对话

### 查询组件列表

```
用户: Find-Plus 有哪些表单相关的组件？
```

Claude 会调用 `list-components` 工具，返回所有组件列表。

### 查看组件文档

```
用户: 显示 Button 组件的完整文档
```

Claude 会调用 `get-component-docs` 工具，返回 Button 组件的文档。

### 查看代码示例

```
用户: Button 组件有哪些示例代码？
```

Claude 会调用 `list-component-examples` 工具，返回 8 个 Button 示例。

### 开发需求

```
用户: 用 Find-Plus 创建一个登录表单，包含用户名、密码输入框和提交按钮
```

Claude 会：
1. 查询 Form、Input、Button 组件文档
2. 查看相关示例代码
3. 生成完整的 Vue 3 代码

## 🎯 可用组件（部分）

- **表单组件**: Form, Input, InputNumber, Select, Checkbox, Radio, DatePicker, Switch
- **数据展示**: Table, TableV2, Pagination, Tag, Badge, Card, Descriptions
- **反馈组件**: Alert, Message, MessageBox, Notification, Loading, Progress
- **导航组件**: Menu, Tabs, Breadcrumb, Dropdown, Steps
- **布局组件**: Layout, Container, Space, Divider
- **按钮组件**: Button, Link
- **其他**: Upload, Dialog, Drawer, Tooltip, Popover, Tree...

共 **72 个组件**！

## 🔍 高级用法

### 使用 system-description Prompt

在 Claude 对话开始时，选择 "system-description" prompt，这会让 Claude：
- 更好地理解你的 Find-Plus 开发需求
- 减少不必要的工具调用
- 生成更符合 Vue 3 最佳实践的代码

### 批量查询

```
用户: 分别显示 Button、Input、Form 三个组件的文档
```

Claude 会并行调用工具，高效获取信息。

## 📝 数据更新

如果 Find-Plus 发布了新版本，重新提取文档：

```bash
cd /Users/shichangxue/jd-project/tiance/tiance_new/build-cli/projects/AI/MCP/find-plus

# 更新 Find-Plus
git pull

# 重新提取
cd ../find-plus-mcp
node dist/cli.js extract ../find-plus
```

## 🐛 故障排除

### Claude 看不到 MCP 工具

1. 检查配置文件路径是否正确
2. 确保使用绝对路径
3. 完全退出并重启 Claude Desktop（不是最小化）
4. 查看 Claude 的 MCP 日志

### 提取失败

```bash
# 确保 Find-Plus 目录正确
ls ../find-plus/docs/zh-CN/component/

# 重新构建
pnpm build

# 重新提取
node dist/cli.js extract ../find-plus
```

### 数据不完整

```bash
# 查看元数据
cat componentData/metadata.json

# 查看组件数量
ls componentData/components/ | wc -l
```

## 🎉 开始使用

一切就绪！在 Claude 中尝试：

```
Find-Plus 有哪些可用组件？
```

祝你开发愉快！🚀

