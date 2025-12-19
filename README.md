# Find-Plus MCP

[![npm version](https://img.shields.io/npm/v/@jd/find-plus-mcp.svg)](http://registry.m.jd.com/-/web/detail/@jd/find-plus-mcp)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)
[![Vue Version](https://img.shields.io/badge/vue-3.x-brightgreen)](https://vuejs.org/)

> 为 Claude 等 LLM 提供 Find-Plus 组件库文档的 MCP 服务器

[English](./README.md) | [中文文档](./README.zh-CN.md) | [项目介绍](./PROJECT_INTRO.md)

## ✨ 特性

- 🚀 **开箱即用** - 预提取 72 个组件的完整文档
- 📚 **丰富示例** - 包含 416+ 个 Vue 3 代码示例
- ⚡ **高性能** - 内存缓存优化，快速响应
- 🎯 **智能提示** - 内置专业 Prompt 模板
- 🔧 **灵活扩展** - 支持自定义提取最新文档

## 📦 安装

```bash
# 从 JD 内部 npm 安装
npm install -g @jd/find-plus-mcp
```

## 🚀 快速开始

### 1. 配置 Claude Desktop

编辑配置文件 `~/Library/Application Support/Claude/claude_desktop_config.json`：

```json
{
  "mcpServers": {
    "find-plus-mcp": {
      "command": "npx",
      "args": ["@charlotte-zone/find-plus-mcp"]
    },
    "find-plus-mcp": {
      "command": "node",
      "args": ["/Users/shichangxue/jd-project/tiance/tiance_new/build-cli/projects/AI/MCP/find-plus-mcp/dist/src/server.js"],
      "env": {}
    }
  }
}
```

### 2. 重启 Claude Desktop

完全退出并重新启动 Claude Desktop。

### 3. 开始使用

在 Claude 中尝试：

```
Find-Plus 有哪些组件？
显示 Button 组件的文档
给我一个 Table 分页的示例代码
```

## 🛠️ MCP 工具

| 工具 | 说明 |
|------|------|
| `list-components` | 列出所有可用的 Find-Plus 组件 |
| `get-component-docs` | 获取特定组件的详细文档 |
| `list-component-examples` | 获取特定组件的 Vue 3 代码示例 |

## 💡 使用示例

### 查询组件列表

```
用户: Find-Plus 有哪些表单组件？
```

### 查看组件文档

```
用户: Button 组件有哪些属性？
```

### 获取代码示例

```
用户: 显示一个带加载状态的 Button 示例
```

### 开发需求

```
用户: 用 Find-Plus 创建一个用户信息编辑表单，
包含姓名、邮箱、电话字段，需要表单验证
```

## 📊 数据统计

- **组件数量**: 72 个
- **代码示例**: 416+ 个
- **文档版本**: Find-Plus v1.0.24
- **支持框架**: Vue 3.x

## 🔧 命令行工具

### 提取最新文档

```bash
# 克隆 Find-Plus 仓库
git clone https://github.com/your-org/find-plus.git

# 提取文档
npx @jd/find-plus-mcp extract ./find-plus
```

## 📚 文档

- [完整文档](./README.zh-CN.md)
- [项目介绍](./PROJECT_INTRO.md)
- [快速开始](./QUICKSTART.md)
- [更新日志](./CHANGELOG.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT © 2024 shichangxue

---

**让 AI 更懂 Find-Plus 组件开发** 🚀
