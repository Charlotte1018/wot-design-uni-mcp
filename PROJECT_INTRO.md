# Find-Plus MCP 项目介绍

## 📖 项目概述

**Find-Plus MCP** 是一个基于模型上下文协议 (Model Context Protocol, MCP) 的服务器，专门为 Claude 等大型语言模型提供 **Find-Plus (Element Plus)** Vue 3 组件库的文档访问能力。

### 什么是 MCP？

MCP (Model Context Protocol) 是 Anthropic 推出的一个开放协议，用于在 AI 应用与外部数据源之间建立标准化连接。通过 MCP，LLM 可以：
- 📚 访问本地或远程数据
- 🔧 调用专用工具
- 💾 管理上下文信息
- 🔄 实现实时数据交互

### 为什么需要 Find-Plus MCP？

在使用 AI 辅助开发时，开发者经常遇到以下问题：

❌ **传统方式的痛点：**
1. AI 不了解组件库的最新 API
2. 需要手动查阅文档再复制给 AI
3. 代码示例可能过时或不准确
4. 缺少完整的 Vue 3 上下文
5. 反复切换文档和 AI 对话窗口

✅ **使用 Find-Plus MCP 后：**
1. AI 直接访问最新的组件文档
2. 自动获取 72+ 个组件的完整信息
3. 提供 416+ 个真实的 Vue 3 代码示例
4. 生成的代码符合最佳实践
5. 一站式开发体验

---

## 🎯 核心功能

### 1. 组件文档查询

快速查询 Find-Plus 组件库中所有可用组件的详细文档。

```
用户: Find-Plus 有哪些表单组件？

AI (通过 MCP): 
- Form - 表单容器
- Input - 输入框
- InputNumber - 数字输入框
- Select - 选择器
- DatePicker - 日期选择器
- Checkbox - 多选框
- Radio - 单选框
- Switch - 开关
... (共 72 个组件)
```

### 2. API 和属性说明

获取组件的完整 API、Props、Events、Slots 等信息。

```
用户: Button 组件有哪些属性？

AI (通过 MCP): 
返回 Button 组件的完整文档，包括：
- size: 尺寸 (large/default/small)
- type: 类型 (primary/success/warning/danger/info)
- plain: 是否朴素按钮
- disabled: 是否禁用
- loading: 加载状态
... (完整属性列表)
```

### 3. Vue 3 代码示例

获取经过验证的 Vue 3 代码示例，可直接使用。

```
用户: 给我一个 Button 组件的加载状态示例

AI (通过 MCP):
返回完整的 Vue 3 代码：
<template>
  <fin-button :loading="loading" @click="handleClick">
    点击加载
  </fin-button>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(false)
const handleClick = () => {
  loading.value = true
  // ...
}
</script>
```

### 4. 智能开发助手

基于文档和示例，AI 可以生成完整的业务组件。

```
用户: 创建一个用户信息编辑表单，包含姓名、邮箱、电话验证

AI: 
分析需求 → 查询 Form、Input 组件 → 查看验证示例 
→ 生成完整的 Vue 3 代码（包含表单验证、提交逻辑等）
```

---

## 🏗️ 技术架构

### 整体架构图

```
┌─────────────────────────────────────────────────────────┐
│                    Claude Desktop                        │
│                      (AI 客户端)                         │
└────────────────────┬────────────────────────────────────┘
                     │ MCP Protocol
                     ↓
┌─────────────────────────────────────────────────────────┐
│               Find-Plus MCP Server                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │  MCP Tools (3个工具)                             │   │
│  │  • list-components                               │   │
│  │  • get-component-docs                            │   │
│  │  • list-component-examples                       │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Prompts (系统提示)                              │   │
│  │  • system-description                            │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Document Parser (文档解析器)                    │   │
│  │  • :::demo 块解析                                │   │
│  │  • Frontmatter 提取                              │   │
│  │  • Vue SFC 代码提取                              │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Cache Layer (缓存层)                            │   │
│  │  • 组件列表缓存                                   │   │
│  │  • 文档内容缓存                                   │   │
│  │  • 示例代码缓存                                   │   │
│  └─────────────────────────────────────────────────┘   │
└────────────────────┬────────────────────────────────────┘
                     │ File System
                     ↓
┌─────────────────────────────────────────────────────────┐
│              Component Data (组件数据)                   │
│  • 72 个组件的文档 (docs.md)                             │
│  • 416+ 个代码示例 (examples.md)                         │
│  • 组件索引 (components-index.json)                      │
│  • 元数据 (metadata.json)                               │
└─────────────────────────────────────────────────────────┘
```

### 核心模块

#### 1. **文档提取器 (Extract Docs)**

```typescript
// 适配 Find-Plus 特有的文档格式
extractDemoBlocks()  // 解析 :::demo 块
processComponent()   // 处理单个组件
extractAllData()     // 批量提取所有组件
```

**特点：**
- 支持 VitePress 格式的文档
- 解析 `:::demo` 标记
- 提取 Vue 3 Single File Component

#### 2. **MCP 工具层 (MCP Tools)**

```typescript
list-components          // 列出所有组件
get-component-docs       // 获取组件文档  
list-component-examples  // 获取代码示例
```

#### 3. **缓存系统 (Cache System)**

```typescript
class Cache<T> {
  componentsLis: ComponentData[]      // 组件列表
  componentsDoc: Record<string, string>  // 文档内容
  componentExample: Record<string, string> // 示例代码
}
```

**优势：**
- 减少 I/O 操作
- 提升响应速度
- 降低资源消耗

---

## 📊 数据统计

| 指标 | 数量/说明 |
|------|----------|
| **支持组件数** | 72 个 |
| **代码示例数** | 416+ 个 |
| **文档文件数** | 144 个 (72×2) |
| **数据大小** | ~3MB (未压缩) |
| **Find-Plus 版本** | v1.0.24 |
| **支持的 Vue 版本** | Vue 3.x |
| **Node 版本要求** | >= 18 |

### 组件分类

```
表单组件 (12个):
Form, Input, InputNumber, Select, Checkbox, Radio, 
DatePicker, TimePicker, Switch, Slider, Rate, Upload

数据展示 (15个):
Table, TableV2, Pagination, Tag, Badge, Card, Avatar,
Descriptions, Skeleton, Statistic, Timeline, Progress, ...

反馈组件 (8个):
Alert, Message, MessageBox, Notification, Loading,
Progress, Result, Skeleton

导航组件 (7个):
Menu, Tabs, Breadcrumb, Dropdown, Steps, PageHeader, ...

布局组件 (8个):
Layout, Container, Space, Divider, Affix, Scrollbar, ...

其他组件 (22个):
Button, Icon, Link, Dialog, Drawer, Tooltip, Popover,
Tree, Cascader, Transfer, ColorPicker, ...
```

---

## 🚀 使用方式

### 安装配置

#### 方式 1: NPM 安装（推荐）

```bash
# 从 JD 内部 npm 安装
npm install -g @jd/find-plus-mcp

# 配置 Claude Desktop
# 编辑 ~/Library/Application Support/Claude/claude_desktop_config.json
{
  "mcpServers": {
    "Find-Plus": {
      "command": "npx",
      "args": ["@jd/find-plus-mcp"]
    }
  }
}
```

#### 方式 2: 本地开发

```bash
# 克隆项目
git clone git@coding.jd.com:shichangxue/find-plus-mcp.git

# 安装依赖
cd find-plus-mcp
pnpm install

# 构建
pnpm build

# 配置 Claude Desktop（使用本地路径）
{
  "mcpServers": {
    "Find-Plus": {
      "command": "node",
      "args": ["/绝对路径/find-plus-mcp/dist/cli.js"]
    }
  }
}
```

### 使用示例

#### 场景 1: 查询组件

```
👤 用户: Find-Plus 有哪些数据展示组件？

🤖 Claude: 通过 list-components 工具查询...

Find-Plus 数据展示组件包括：
- Table: 表格组件，用于展示行列数据
- TableV2: 虚拟化表格，适合大数据量
- Pagination: 分页组件
- Tag: 标签组件
- Badge: 徽章组件
- Card: 卡片容器
...
```

#### 场景 2: 查看文档

```
👤 用户: Table 组件怎么使用？

🤖 Claude: 通过 get-component-docs 工具查询...

Table 组件用于展示行列数据，支持：
• 基础表格功能
• 排序、筛选、分页
• 自定义列模板
• 固定列和表头
• 树形数据展示
...

Props:
- data: 表格数据
- columns: 列配置
- stripe: 是否斑马纹
...
```

#### 场景 3: 获取代码示例

```
👤 用户: 给我一个带分页的 Table 示例

🤖 Claude: 通过 list-component-examples 工具查询...

<template>
  <fin-table 
    :data="tableData" 
    :columns="columns"
    @current-change="handlePageChange"
  >
    <fin-table-column prop="name" label="姓名" />
    <fin-table-column prop="email" label="邮箱" />
  </fin-table>
  <fin-pagination 
    :total="total"
    v-model:current-page="currentPage"
  />
</template>

<script setup>
// ... 完整代码
</script>
```

#### 场景 4: 开发需求

```
👤 用户: 帮我开发一个用户管理页面，要求：
1. 展示用户列表（Table）
2. 支持搜索和筛选（Input、Select）
3. 可以新增、编辑、删除用户（Button、Dialog、Form）
4. 分页显示（Pagination）

🤖 Claude: 
1. 查询 Table、Form、Dialog、Input、Select 等组件文档
2. 查看相关代码示例
3. 综合需求生成完整的 Vue 3 组件代码
4. 包含完整的数据管理、验证、交互逻辑
```

---

## 🆚 对比分析

### 与 Ant Design MCP 对比

| 特性 | Ant Design MCP | Find-Plus MCP |
|------|----------------|---------------|
| **前端框架** | React | **Vue 3** ✅ |
| **组件数量** | 60+ | **72** ✅ |
| **示例格式** | TSX | **Vue SFC** ✅ |
| **文档结构** | 分散式 | 集中式 |
| **示例引用** | `<code src="">` | `:::demo::` |
| **适用场景** | React 项目 | **Vue 3 项目** ✅ |
| **JD 内部** | ❌ | **✅** |

### 与传统方式对比

| 维度 | 传统方式 | Find-Plus MCP |
|------|---------|---------------|
| **文档查询** | 手动打开浏览器 | AI 自动查询 ✅ |
| **代码示例** | 复制粘贴 | 智能生成 ✅ |
| **实时性** | 可能过时 | 基于最新数据 ✅ |
| **效率** | 多次切换 | 一站式体验 ✅ |
| **准确性** | 依赖人工 | AI + 官方文档 ✅ |
| **学习成本** | 需要记忆 | AI 辅助理解 ✅ |

---

## 🎯 适用场景

### ✅ 推荐使用场景

1. **Vue 3 项目开发**
   - 使用 Find-Plus/Element Plus 组件库
   - 需要快速查询组件 API
   - 希望提升开发效率

2. **AI 辅助开发**
   - 使用 Claude Desktop 进行编码
   - 需要 AI 了解组件库上下文
   - 希望生成高质量的 Vue 代码

3. **团队协作**
   - 新成员快速上手 Find-Plus
   - 统一代码风格和最佳实践
   - 减少重复性文档查询

4. **代码审查**
   - 验证组件使用是否正确
   - 检查 Props 是否合法
   - 确保符合官方规范

### ❌ 不推荐场景

1. 不使用 Find-Plus/Element Plus
2. 不使用 Claude 或不支持 MCP 的工具
3. 项目使用 React/Angular 等其他框架
4. 需要离线环境（需要提前提取数据）

---

## 🔧 技术特点

### 1. 高性能

- ✅ 内存缓存机制
- ✅ 懒加载数据
- ✅ 优化的文件结构
- ✅ 快速响应（< 100ms）

### 2. 高可用

- ✅ 完整的错误处理
- ✅ 优雅的降级策略
- ✅ 详细的日志输出
- ✅ 稳定的数据源

### 3. 可扩展

- ✅ 支持自定义提取
- ✅ 可配置的工具集
- ✅ 灵活的数据格式
- ✅ 易于集成

### 4. 易维护

- ✅ TypeScript 全栈
- ✅ 模块化设计
- ✅ 清晰的代码注释
- ✅ 完整的文档

---

## 📈 未来规划

### v0.1.0 (当前版本)
- ✅ 基础 MCP 服务器
- ✅ 72 个组件文档
- ✅ 416+ 代码示例
- ✅ CLI 工具

### v0.2.0 (计划中)
- [ ] 支持组件搜索
- [ ] 添加组件依赖分析
- [ ] 提供更多 Prompt 模板
- [ ] 优化缓存策略

### v0.3.0 (规划中)
- [ ] 支持多语言文档
- [ ] 集成 TypeScript 类型定义
- [ ] 提供可视化配置工具
- [ ] 支持自定义主题文档

### v1.0.0 (长期目标)
- [ ] 完整的 CI/CD 流程
- [ ] 自动同步 Find-Plus 更新
- [ ] 提供 Web 管理界面
- [ ] 支持团队协作功能

---

## 🤝 贡献指南

欢迎参与项目贡献！

### 贡献方式

1. **报告问题**: 在 Coding 上提 Issue
2. **修复 Bug**: 提交 Pull Request
3. **新增功能**: 讨论后实现
4. **完善文档**: 更新 README 和示例

### 开发流程

```bash
# 1. Fork 项目
# 2. 创建特性分支
git checkout -b feature/your-feature

# 3. 开发和测试
pnpm dev
node test-tools.js

# 4. 提交代码
git commit -m "feat: add your feature"

# 5. 推送分支
git push origin feature/your-feature

# 6. 创建 Pull Request
```

---

## 📞 联系方式

- **作者**: shichangxue
- **邮箱**: shichangxue@jd.com
- **仓库**: git@coding.jd.com:shichangxue/find-plus-mcp.git

---

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件

---

**Find-Plus MCP - 让 AI 更懂 Vue 3 组件开发** 🚀

