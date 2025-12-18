# Find-Plus Components MCP 服务器

一个模型上下文协议(MCP)服务器，用于向 Claude 等大型语言模型提供 Find-Plus (Element Plus) 组件文档。

## 功能特性

- 🚀 快速访问 Find-Plus 组件文档
- 📃 查看特定组件文档和 API 定义
- 📃 查看组件代码示例（Vue 3）
- 💪 内存缓存机制，高效访问
- ⚙️ 提供预置 prompt，减少重复工具调用

## 安装

```bash
npm install -g @jzone-mcp/find-plus-components-mcp
# 或
pnpm add -g @jzone-mcp/find-plus-components-mcp
```

## 使用方法

### 1. 提取组件文档

首先需要从 Find-Plus 仓库提取组件文档：

```bash
# 克隆 Find-Plus 仓库
git clone https://github.com/your-org/find-plus.git --depth 1

# 提取文档（在当前目录执行）
npx @jzone-mcp/find-plus-components-mcp extract ./find-plus
```

这将创建一个 `componentData` 目录，包含所有提取的组件文档。

### 2. 在 Claude Desktop 中配置

编辑 Claude Desktop 配置文件 `claude_desktop_config.json`：

```json
{
  "mcpServers": {
    "Find-Plus Components": {
      "command": "npx",
      "args": ["@jzone-mcp/find-plus-components-mcp"]
    }
  }
}
```

配置文件位置：
- macOS/Linux: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `$env:AppData\Claude\claude_desktop_config.json`

## MCP Tools

服务器提供以下工具：

- `list-components` - 列出所有可用的 Find-Plus 组件
- `get-component-docs` - 获取特定组件的详细文档
- `list-component-examples` - 获取特定组件的代码示例

## MCP Prompts

- `system-description` - 专业的 Find-Plus 组件库专家助手

## 示例查询

可以在 Claude 中尝试：

```text
Find-Plus 有哪些可用组件？

显示 Button 组件的文档。

Button 组件有哪些属性？

显示 Button 组件的代码示例。

用 Find-Plus 创建一个带分页的表格。
```

## 项目结构

```
find-plus-mcp/
├── src/
│   ├── constants/      # 路径常量
│   ├── prompt/         # MCP prompts
│   ├── scripts/        # 提取脚本
│   ├── tools/          # MCP 工具
│   ├── utils/          # 工具函数
│   └── server.ts       # MCP 服务器
├── componentData/      # 提取的组件数据（需要先执行 extract）
├── cli.ts             # CLI 入口
└── package.json
```

## Find-Plus vs Ant Design 差异

| 特性 | Ant Design | Find-Plus |
|------|------------|-----------|
| 框架 | React | Vue 3 |
| 文档格式 | 独立 MD 文件 | 集中式 MD 文件 |
| 示例引用 | `<code src="">` | `:::demo:::` |
| 示例文件 | `.tsx` | `.vue` |

## 开发

```bash
# 安装依赖
pnpm install

# 构建
pnpm build

# 开发模式
pnpm dev

# 测试服务器
pnpm test
```

## License

MIT

