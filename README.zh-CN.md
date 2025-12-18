# Find-Plus 组件库 MCP 服务

为 Claude 等大型语言模型提供 Find-Plus 组件库的文档访问服务。

## ✨ 特性

- 🔍 快速检索 Find-Plus 所有组件
- 📚 完整的组件文档和 API 说明
- 💻 Vue 3 代码示例
- ⚡ 内存缓存优化
- 🤖 智能 Prompt 预设

## 📦 安装

```bash
npm install -g @jzone-mcp/find-plus-components-mcp
```

## 🚀 快速开始

### 步骤 1：提取组件文档

```bash
# 克隆 Find-Plus 仓库
git clone https://github.com/your-org/find-plus.git --depth 1

# 提取文档
npx @jzone-mcp/find-plus-components-mcp extract ./find-plus
```

### 步骤 2：配置 Claude Desktop

编辑配置文件 `claude_desktop_config.json`：

**macOS/Linux**: `~/Library/Application Support/Claude/claude_desktop_config.json`

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

### 步骤 3：重启 Claude Desktop

重启后即可使用！

## 🛠️ 可用工具

### 1. list-components
列出所有可用的 Find-Plus 组件及其描述。

### 2. get-component-docs
获取特定组件的详细文档（不包含代码示例）。

**参数**:
- `componentName` (string): 组件名称，如 "Button"、"Table"

### 3. list-component-examples
获取特定组件的 Vue 3 代码示例。

**参数**:
- `componentName` (string): 组件名称

## 💡 使用示例

在 Claude 中可以这样提问：

```
有哪些表单相关的组件？

显示 Button 组件的完整文档

Button 组件支持哪些 props？

给我看看 Button 组件的示例代码

用 Find-Plus 创建一个登录表单

如何使用 Table 组件实现分页？
```

## 📁 目录结构

```
find-plus-mcp/
├── src/
│   ├── constants/          # 常量定义
│   │   └── path.ts        # 路径常量
│   ├── prompt/            # Prompt 模板
│   │   ├── system-description.ts
│   │   └── index.ts
│   ├── scripts/           # 脚本
│   │   └── extract-docs.ts  # 文档提取脚本
│   ├── tools/             # MCP 工具实现
│   │   ├── list-components.ts
│   │   ├── get-component-docs.ts
│   │   ├── list-component-examples.ts
│   │   └── index.ts
│   ├── utils/             # 工具函数
│   │   ├── cache.ts       # 缓存
│   │   ├── components.ts  # 组件操作
│   │   ├── md-extract.ts  # Markdown 处理
│   │   ├── matter-parse.ts # Frontmatter 解析
│   │   └── write.ts       # 文件写入
│   └── server.ts          # MCP 服务器
├── componentData/         # 提取的组件数据
│   ├── components/        # 各组件文档和示例
│   ├── components-index.json  # 组件索引
│   └── metadata.json      # 元数据
├── cli.ts                # CLI 入口
├── package.json
└── tsconfig.json
```

## 🔧 开发指南

### 本地开发

```bash
# 安装依赖
pnpm install

# 开发模式（监听文件变化）
pnpm dev

# 构建
pnpm build

# 测试服务器
pnpm test
```

### 提取文档流程

提取脚本会执行以下操作：

1. 扫描 `docs/zh-CN/component/` 目录下的所有 Markdown 文件
2. 解析文档中的 `:::demo` 块，提取示例引用
3. 读取 `docs/examples/` 目录下对应的 Vue 文件
4. 清理和格式化文档内容
5. 生成组件索引和元数据
6. 保存到 `componentData` 目录

### 核心实现

#### 1. :::demo 块解析

Find-Plus 使用特殊的 `:::demo` 标记来引用示例：

```markdown
:::demo 使用 type 属性定义按钮类型

button/basic

:::
```

提取脚本会将其解析为：
- 描述：`使用 type 属性定义按钮类型`
- 示例路径：`docs/examples/button/basic.vue`

#### 2. 文档清理

提取时会移除：
- YAML frontmatter
- API 文档部分（单独存储）
- 多余的空行
- :::demo 标记本身（保留描述）

#### 3. 缓存机制

使用内存缓存避免重复读取：
- 组件列表缓存
- 组件文档缓存
- 组件示例缓存

## 📊 与 Ant Design MCP 对比

| 项目 | Ant Design MCP | Find-Plus MCP |
|------|----------------|---------------|
| 前端框架 | React | Vue 3 |
| 文档位置 | `components/[组件]/index.zh-CN.md` | `docs/zh-CN/component/[组件].md` |
| 示例位置 | `components/[组件]/demo/*.tsx` | `docs/examples/[组件]/*.vue` |
| 示例引用 | `<code src="./demo/xx.tsx">` | `:::demo\n组件/示例\n:::` |
| 更新日志 | JSON 格式 | Markdown 文档 |

## ❓ 常见问题

### Q: 为什么需要先执行 extract 命令？

A: MCP 服务器需要预处理的组件数据。提取过程会清理文档、提取示例，并生成优化的索引，让 LLM 能更高效地访问信息。

### Q: 提取失败怎么办？

A: 确保：
1. Find-Plus 仓库路径正确
2. 仓库包含 `docs/zh-CN/component/` 和 `docs/examples/` 目录
3. 有足够的文件读写权限

### Q: 如何更新到最新的组件文档？

A: 重新执行：
```bash
cd find-plus
git pull
cd ..
npx @jd/find-plus-mcp extract ./find-plus
```

### Q: 支持其他组件库吗？

A: 目前只支持 Find-Plus。如需支持其他库，需要根据其文档结构修改提取脚本。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT © 2025

