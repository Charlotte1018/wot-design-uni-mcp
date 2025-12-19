# Find-Plus MCP NPM 发布指南

完整的 npm 发布流程和最佳实践（发布到 npmjs.org 公共仓库）。

---

## 📋 目录

- [发布前准备](#发布前准备)
- [发布流程](#发布流程)
- [版本管理](#版本管理)
- [发布验证](#发布验证)
- [常见问题](#常见问题)
- [最佳实践](#最佳实践)

---

## 📦 发布前准备

### 1. 环境检查

#### 检查 Node.js 版本

```bash
node --version
# 应该 >= 18.0.0
```

#### 检查 pnpm 版本

```bash
pnpm --version
# 推荐使用 >= 7.x
```

#### 检查 npm 登录状态

```bash
# 查看当前登录用户
npm whoami

# 如果未登录，执行登录
npm login
```

**⚠️ 重要：npmjs.org 发布要求**

发布到 npmjs.org 公共仓库需要：
1. **双因素认证（2FA）** 或
2. **Granular Access Token（需勾选 Bypass 2FA）**

**配置 Access Token（推荐）：**

1. 访问 https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. 点击 "Generate New Token" → 选择 "Granular Access Token"
3. 配置：
   - Token Name: `charlotte-zone-publish`
   - Expiration: 选择过期时间
   - Packages and scopes: Read and write
   - Organizations: 选择 `charlotte-zone`
   - ✅ Allow to publish
   - ✅ **Bypass 2FA requirement**（必须勾选！）
4. 生成后复制 token

**配置 Token 到项目：**

创建 `.npmrc` 文件（已在项目中）：

```bash
//registry.npmjs.org/:_authToken=YOUR_TOKEN_HERE
```

或使用环境变量（更安全）：

```bash
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

然后发布时：

```bash
export NPM_TOKEN=your_token_here
npm publish
```

### 2. 代码质量检查

#### 运行构建

```bash
cd /path/to/find-plus-mcp
pnpm build
```

**预期输出：**

```
CLI Building entry: cli.ts, src/server.ts
ESM Build start
ESM dist/cli.js            8.72 KB
ESM dist/src/server.js     11.12 KB
ESM ⚡️ Build success in 12ms
DTS ⚡️ Build success in 713ms
```

#### 验证构建产物

```bash
ls -la dist/
# 应包含：
# - cli.js, cli.d.ts
# - src/server.js, src/server.d.ts
```

#### 运行测试

```bash
node test-tools.js
```

**预期输出：**

```
🧪 开始测试 Find-Plus MCP 工具...
✅ 成功读取 72 个组件
✅ 提取时间: 2024-12-18T10:49:27.439Z
✅ 版本: Find-Plus 1.0.24
✅ 组件数: 72
🎉 测试完成！
```

### 3. 文档完整性检查

**必需文件清单：**

- [x] `README.md` - 项目说明（英文）
- [x] `README.zh-CN.md` - 项目说明（中文）
- [x] `LICENSE` - 开源协议
- [x] `CHANGELOG.md` - 更新日志
- [x] `package.json` - 包配置
- [x] `QUICKSTART.md` - 快速开始
- [x] `PROJECT_INTRO.md` - 项目介绍

**检查命令：**

```bash
for file in README.md README.zh-CN.md LICENSE CHANGELOG.md; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ $file 缺失"
  fi
done
```

### 4. package.json 配置检查

#### 必填字段

```json
{
  "name": "@charlotte-zone/find-plus-mcp",  // ✅ 包名（组织包）
  "version": "0.0.1",                        // ✅ 版本号
  "description": "...",                      // ✅ 描述
  "author": {                                // ✅ 作者
    "name": "shichangxue",
    "email": "shichangxue@jd.com"
  },
  "license": "MIT",                          // ✅ 协议
  "repository": {                            // ✅ 仓库
    "type": "git",
    "url": "git@coding.jd.com:shichangxue/find-plus-mcp.git"
  }
}
```

#### 关键配置

```json
{
  "main": "./dist/src/server.js",        // 主入口
  "types": "./dist/src/server.d.ts",     // 类型定义
  "bin": {                                // CLI 命令
    "find-plus-mcp": "./dist/cli.js"
  },
  "files": [                              // 发布文件
    "dist",
    "componentData",
    "LICENSE",
    "README.md",
    "README.zh-CN.md",
    "QUICKSTART.md",
    "CHANGELOG.md"
  ],
  "publishConfig": {                      // 发布配置
    "access": "public",                   // 组织包必须设置为 public
    "registry": "https://registry.npmjs.org/"
  }
}
```

### 5. 使用发布检查脚本

```bash
# 运行自动检查脚本
bash scripts/pre-publish-check.sh
```

**检查项包括：**

- ✅ package.json 配置
- ✅ 必需文档文件
- ✅ 构建产物完整性
- ✅ 组件数据完整性
- ✅ npm 登录状态
- ✅ 测试通过情况

---

## 🚀 发布流程

### 方案 A：标准发布（推荐首次发布）

#### Step 1: 最终代码检查

```bash
# 确保在正确的分支
git branch
# * main

# 确保代码已提交
git status
# nothing to commit, working tree clean
```

#### Step 2: 更新版本号

```bash
# 首次发布，确认版本号
cat package.json | grep version
# "version": "0.0.1"

# 或者更新版本（后续发布）
npm version patch  # 0.0.1 -> 0.0.2
npm version minor  # 0.0.1 -> 0.1.0
npm version major  # 0.0.1 -> 1.0.0
```

#### Step 3: 更新 CHANGELOG

编辑 `CHANGELOG.md`，添加新版本信息：

```markdown
## [0.0.1] - 2024-12-18

### Added
- 🎉 初始版本发布
- ✨ 支持 72 个 Find-Plus 组件
- 📦 包含 416+ 代码示例
- 🔧 提供 3 个 MCP 工具
```

#### Step 4: 构建项目

```bash
pnpm build
```

#### Step 5: 本地测试（可选但推荐）

```bash
# 打包成 tgz 文件
npm pack

# 查看文件列表
tar -tzf jd-find-plus-mcp-0.0.1.tgz | head -20

# 本地安装测试
npm install -g ./charlotte-zone-find-plus-mcp-0.0.1.tgz

# 验证 CLI 可用
find-plus-mcp --help

# 卸载测试包
npm uninstall -g @charlotte-zone/find-plus-mcp
```

#### Step 6: 发布到 npm

```bash
# 确保已配置 token（见上面的环境检查）
# 方式1: 使用 .npmrc 文件中的 token
npm publish

# 方式2: 使用环境变量
export NPM_TOKEN=your_token_here
npm publish
```

**⚠️ 重要提示：**
- 确保 token 已配置且有 `Bypass 2FA` 权限
- 确保您是 `charlotte-zone` 组织的成员
- 确保在组织中有发布权限

**预期输出：**

```
npm notice 📦  @charlotte-zone/find-plus-mcp@0.0.1
npm notice === Tarball Contents ===
npm notice 1.5kB   LICENSE
npm notice 3.2kB   README.md
npm notice 12.5kB  README.zh-CN.md
npm notice 156kB   componentData/...
npm notice 45.3kB  dist/...
npm notice 2.8kB   package.json
npm notice === Tarball Details ===
npm notice name:          @charlotte-zone/find-plus-mcp
npm notice version:       0.0.1
npm notice package size:  156.2 kB
npm notice unpacked size: 771.7 kB
npm notice shasum:        ...
npm notice integrity:     ...
npm notice total files:   157
npm notice
+ @charlotte-zone/find-plus-mcp@0.0.1
```

#### Step 7: 创建 Git Tag

```bash
# 创建标签
git tag v0.0.1
git tag -a v0.0.1 -m "Release v0.0.1"

# 推送标签
git push origin v0.0.1

# 推送所有改动
git push
```

### 方案 B：预发布版本（测试用）

用于发布测试版本，不影响正式版本。

```bash
# 发布 beta 版本
npm version prerelease --preid=beta
# 0.0.1 -> 0.0.2-beta.0

npm publish --tag beta

# 用户安装 beta 版本
npm install @charlotte-zone/find-plus-mcp@beta
```

**其他预发布标签：**

```bash
npm version prerelease --preid=alpha  # alpha 版本
npm version prerelease --preid=rc     # rc 版本
```

### 方案 C：快速补丁发布

用于紧急 bug 修复。

```bash
# 修复代码
# ...

# 自动升级 patch 版本并发布
npm version patch
pnpm build
npm publish

# 推送代码和标签
git push && git push --tags
```

---

## 📊 版本管理

### 语义化版本规则（SemVer）

版本格式：`MAJOR.MINOR.PATCH`

```
0.0.1
│ │ │
│ │ └─ PATCH: 补丁版本（bug 修复）
│ └─── MINOR: 次版本（新功能，向后兼容）
└───── MAJOR: 主版本（破坏性更改）
```

### 版本升级场景

#### PATCH 版本（0.0.1 → 0.0.2）

**适用场景：**

- 🐛 修复 bug
- 📝 更新文档
- ⚡ 性能优化（不影响 API）
- 🎨 代码格式化
- 🔧 内部重构（不影响外部）

**示例：**

```bash
npm version patch
# 0.0.1 -> 0.0.2
```

#### MINOR 版本（0.0.1 → 0.1.0）

**适用场景：**

- ✨ 添加新功能（向后兼容）
- 🔧 添加新的 MCP 工具
- 📦 升级 Find-Plus 组件数据
- 🎯 添加新的 Prompt 模板
- ⚠️ 标记功能为废弃（但保留）

**示例：**

```bash
npm version minor
# 0.0.1 -> 0.1.0
```

#### MAJOR 版本（0.0.1 → 1.0.0）

**适用场景：**

- 💥 破坏性 API 更改
- 🔄 MCP 协议重大升级
- ❌ 移除已废弃功能
- 🏗️ 架构重大调整
- 📦 Node.js 版本要求变更

**示例：**

```bash
npm version major
# 0.0.1 -> 1.0.0
```

### 预发布版本

```bash
# Alpha 版本（内部测试）
npm version prerelease --preid=alpha
# 0.0.1 -> 0.0.2-alpha.0

# Beta 版本（公开测试）
npm version prerelease --preid=beta
# 0.0.1 -> 0.0.2-beta.0

# RC 版本（候选版本）
npm version prerelease --preid=rc
# 0.0.1 -> 0.0.2-rc.0
```

### 版本与 Find-Plus 对应关系

建议在 README 中维护版本对应表：

| MCP 包版本 | Find-Plus 版本 | 发布日期 | 说明 |
|-----------|---------------|----------|------|
| 0.0.1     | 1.0.24        | 2024-12-18 | 初始版本 |
| 0.1.0     | 1.1.x         | TBD | 计划中 |

---

## ✅ 发布验证

### 1. NPM 仓库检查

#### 访问包页面

```bash
# 打开 npmjs.org 包页面
open "https://www.npmjs.com/package/@charlotte-zone/find-plus-mcp"
```

**检查项：**

- [x] 包名显示正确
- [x] 版本号正确
- [x] README 渲染正常
- [x] 作者信息正确
- [x] 关键字标签完整
- [x] 组织名称正确（charlotte-zone）

#### 查看包信息

```bash
npm view @charlotte-zone/find-plus-mcp

# 查看特定字段
npm view @charlotte-zone/find-plus-mcp version
npm view @charlotte-zone/find-plus-mcp description
npm view @charlotte-zone/find-plus-mcp dist-tags
```

### 2. 安装测试

#### 全局安装测试

```bash
# 卸载旧版本（如有）
npm uninstall -g @charlotte-zone/find-plus-mcp

# 安装新版本
npm install -g @charlotte-zone/find-plus-mcp

# 查看安装位置
which find-plus-mcp

# 验证版本
find-plus-mcp --version
```

#### CLI 功能测试

```bash
# 测试帮助信息
find-plus-mcp --help

# 测试提取功能（如果有 find-plus 仓库）
find-plus-mcp extract /path/to/find-plus

# 验证数据生成
ls ~/.npm/_npx/*/node_modules/@charlotte-zone/find-plus-mcp/componentData/
```

#### 项目中安装测试

```bash
# 创建测试目录
mkdir test-find-plus-mcp
cd test-find-plus-mcp
npm init -y

# 安装包
npm install @charlotte-zone/find-plus-mcp

# 检查安装
ls node_modules/@charlotte-zone/find-plus-mcp/
```

### 3. Claude Desktop 集成测试

#### 配置 MCP

编辑 `~/Library/Application Support/Claude/claude_desktop_config.json`：

```json
{
  "mcpServers": {
    "Find-Plus": {
      "command": "npx",
      "args": ["-y", "@charlotte-zone/find-plus-mcp"]
    }
  }
}
```

**注意**：`-y` 参数表示自动确认 npx 的提示。

#### 重启 Claude Desktop

```bash
# macOS: 完全退出
killall Claude

# 重新启动 Claude Desktop
```

#### 功能验证清单

在 Claude 中测试以下功能：

- [ ] 看到 Find-Plus MCP 工具
- [ ] `list-components` 返回 72 个组件
- [ ] `get-component-docs` 返回正确文档
- [ ] `list-component-examples` 显示代码示例
- [ ] 代码示例格式正确（Vue 3 SFC）
- [ ] 没有错误或警告信息

**测试对话：**

```
用户: Find-Plus 有哪些组件？
Claude: [应调用 list-components 工具并返回组件列表]

用户: 显示 Button 组件的文档
Claude: [应调用 get-component-docs 并返回文档]

用户: Button 组件有哪些示例？
Claude: [应调用 list-component-examples 并显示代码]
```

### 4. 包大小检查

```bash
# 查看包大小
npm pack --dry-run

# 实际打包
npm pack

# 查看文件大小
ls -lh *.tgz

# 解压查看内容
tar -tzf charlotte-zone-find-plus-mcp-0.0.1.tgz | head -50
```

**大小参考：**

- 理想大小：< 1MB
- 当前大小：~156KB（包含 componentData）
- 核心代码：~100KB

---

## 🐛 常见问题

### Q1: 发布失败 - 401 Unauthorized / 403 Forbidden

**问题：**

```
npm ERR! code E403
npm ERR! 403 Forbidden - Two-factor authentication or granular access token required
```

**解决方案：**

```bash
# 方案1：使用 Granular Access Token（推荐）
# 1. 访问 https://www.npmjs.com/settings/YOUR_USERNAME/tokens
# 2. 创建新的 Granular Access Token
# 3. 必须勾选 "Bypass 2FA requirement"
# 4. 配置到 .npmrc 文件：
echo "//registry.npmjs.org/:_authToken=YOUR_TOKEN" > .npmrc

# 方案2：启用 2FA 后发布
npm publish --otp=123456  # 使用认证器中的 6 位验证码
```

### Q2: 发布失败 - 包名已存在或权限不足

**问题：**

```
npm ERR! code E404
npm ERR! 404 Not Found - @charlotte-zone/find-plus-mcp is not in this registry
```

**解决方案：**

```bash
# 1. 确认您是 charlotte-zone 组织的成员
npm org ls charlotte-zone

# 2. 如果不是成员，需要：
#    - 联系组织管理员邀请您加入
#    - 或者发布到个人账户：修改 package.json 中的 name 为 "find-plus-mcp"

# 3. 确认包名是否正确
npm view @charlotte-zone/find-plus-mcp

# 4. 如果包已存在，更新版本号
npm version patch
```

### Q3: 包太大，上传超时

**问题：**

```
npm ERR! network timeout
```

**解决方案：**

**方案 1：优化包大小**

```bash
# 检查哪些文件被包含
npm pack --dry-run

# 编辑 .npmignore，排除不必要的文件
echo "test-tools.js" >> .npmignore
echo "*.log" >> .npmignore

# 重新打包
npm pack
```

**方案 2：增加超时时间**

```bash
npm publish --timeout=300000
```

**方案 3：使用轻量版**

移除 componentData，让用户自行提取：

```json
{
  "files": [
    "dist",
    "LICENSE",
    "README.md"
  ]
}
```

### Q4: CLI 命令找不到

**问题：**

```bash
find-plus-mcp: command not found
```

**解决方案：**

```bash
# 1. 确认全局安装
npm list -g @charlotte-zone/find-plus-mcp

# 2. 检查 PATH
echo $PATH | grep npm

# 3. 使用 npx（推荐）
npx -y @charlotte-zone/find-plus-mcp

# 4. 重新安装
npm uninstall -g @charlotte-zone/find-plus-mcp
npm install -g @charlotte-zone/find-plus-mcp
```

### Q5: Claude Desktop 看不到 MCP 工具

**问题：**

Claude Desktop 中没有显示 Find-Plus MCP 工具。

**解决方案：**

```bash
# 1. 检查配置文件
cat ~/Library/Application\ Support/Claude/claude_desktop_config.json

# 2. 确认路径正确（使用 npx 或绝对路径）
{
  "mcpServers": {
    "Find-Plus": {
      "command": "npx",
      "args": ["-y", "@charlotte-zone/find-plus-mcp"]
    }
  }
}

# 3. 完全退出并重启 Claude Desktop
killall Claude

# 4. 查看 Claude 日志（macOS）
tail -f ~/Library/Logs/Claude/mcp*.log
```

### Q6: 数据不完整或过期

**问题：**

组件数据不是最新的或缺失。

**解决方案：**

```bash
# 重新提取最新数据
cd find-plus
git pull

cd ../find-plus-mcp
pnpm build
node dist/cli.js extract ../find-plus

# 验证数据
cat componentData/metadata.json

# 重新发布
npm version patch
npm publish
```

---

## 💡 最佳实践

### 1. 发布前清单

**每次发布前必查：**

```bash
#!/bin/bash
# pre-publish-checklist.sh

echo "📋 发布前检查清单"
echo ""

# 1. 代码已提交
if [[ -n $(git status -s) ]]; then
  echo "❌ 有未提交的代码"
  exit 1
else
  echo "✅ 代码已提交"
fi

# 2. 构建成功
if pnpm build; then
  echo "✅ 构建成功"
else
  echo "❌ 构建失败"
  exit 1
fi

# 3. 测试通过
if node test-tools.js > /dev/null 2>&1; then
  echo "✅ 测试通过"
else
  echo "⚠️  测试失败"
fi

# 4. CHANGELOG 已更新
if git log -1 --pretty=%B | grep -q "CHANGELOG"; then
  echo "✅ CHANGELOG 已更新"
else
  echo "⚠️  CHANGELOG 未更新"
fi

# 5. npm 已登录
if npm whoami > /dev/null 2>&1; then
  echo "✅ npm 已登录 ($(npm whoami))"
else
  echo "❌ npm 未登录"
  exit 1
fi

echo ""
echo "🎉 检查完成，可以发布！"
```

### 2. 版本发布工作流

```bash
# 标准发布流程（推荐）

# Step 1: 确认当前状态
git status
pnpm build
node test-tools.js

# Step 2: 更新版本和文档
npm version patch
# 编辑 CHANGELOG.md

# Step 3: 提交版本更新
git add .
git commit -m "chore: release v0.0.2"

# Step 4: 发布
npm publish

# Step 5: 推送代码和标签
git push
git push --tags

# Step 6: 验证
npm view @charlotte-zone/find-plus-mcp
```

### 3. CHANGELOG 维护规范

使用 [Keep a Changelog](https://keepachangelog.com/) 格式：

```markdown
# Changelog

## [Unreleased]
### Added
- 新增的功能

### Changed
- 改变的功能

### Deprecated
- 即将废弃的功能

### Removed
- 已移除的功能

### Fixed
- 修复的 bug

### Security
- 安全相关的修复

## [0.0.2] - 2024-12-19
### Fixed
- 修复 Button 组件文档缺失问题

## [0.0.1] - 2024-12-18
### Added
- 初始版本发布
```

### 4. Git Tag 规范

```bash
# 创建带注释的标签（推荐）
git tag -a v0.0.1 -m "Release v0.0.1: 初始版本"

# 推送标签
git push origin v0.0.1

# 查看标签信息
git show v0.0.1

# 列出所有标签
git tag -l

# 删除错误的标签（本地）
git tag -d v0.0.1

# 删除远程标签
git push origin :refs/tags/v0.0.1
```

### 5. 包大小优化

```bash
# 分析包内容
npm pack --dry-run

# 查看各目录大小
du -sh dist/
du -sh componentData/

# 优化策略
# 1. 排除开发文件
echo "src/" >> .npmignore
echo "*.ts" >> .npmignore
echo "!*.d.ts" >> .npmignore

# 2. 压缩组件数据（可选）
# 使用 tar.gz 压缩 componentData

# 3. 提供轻量版本
# 发布不含数据的版本
```

### 6. 持续集成建议

```yaml
# .github/workflows/publish.yml
name: Publish to npm

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Test
        run: node test-tools.js
        
      - name: Publish
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## 📈 发布后工作

### 1. 验证发布

```bash
# 等待 1-2 分钟后验证
npm view @charlotte-zone/find-plus-mcp

# 安装测试
npm install -g @charlotte-zone/find-plus-mcp@latest

# Claude Desktop 测试
# 重启 Claude 并测试功能
```

### 2. 创建 Release（GitHub/Coding）

在代码仓库创建 Release：

```markdown
## v0.0.1 - 2024-12-18

### ✨ 新功能
- 🎉 初始版本发布
- 📦 支持 72 个 Find-Plus 组件
- 💻 包含 416+ Vue 3 代码示例

### 🛠️ 工具
- list-components
- get-component-docs
- list-component-examples

### 📚 文档
- 完整的中英文文档
- 快速开始指南
- 项目介绍

### 🔗 链接
- [NPM 包](https://www.npmjs.com/package/@charlotte-zone/find-plus-mcp)
- [使用文档](./README.zh-CN.md)
```

### 3. 通知用户

**内部通知：**

- 📧 发送邮件给团队
- 💬 在内部群组分享
- 📝 更新团队文档

**示例通知：**

```markdown
【新工具发布】Find-Plus MCP v0.0.1

大家好！

很高兴宣布 Find-Plus MCP 首个版本发布！

这是一个基于 MCP 协议的工具，让 Claude AI 能够直接访问
Find-Plus 组件库的完整文档和代码示例。

🎯 主要功能：
• 72 个组件的完整文档
• 416+ Vue 3 代码示例
• 智能代码生成

🚀 快速开始：
npm install -g @charlotte-zone/find-plus-mcp

📚 文档：https://www.npmjs.com/package/@charlotte-zone/find-plus-mcp

欢迎试用和反馈！
```

### 4. 收集反馈

- 👂 监控使用情况
- 🐛 处理 Issue
- 💡 收集改进建议
- 📊 统计下载量

---

## 🎯 版本规划

### 当前版本：v0.0.1

- ✅ 基础 MCP 功能
- ✅ 72 个组件文档
- ✅ CLI 工具

### 下一版本：v0.1.0

**计划功能：**

- [ ] 组件搜索功能
- [ ] 更多 Prompt 模板
- [ ] 性能优化
- [ ] 文档增强

### 长期规划：v1.0.0

**目标：**

- [ ] 生产级稳定性
- [ ] 完整的测试覆盖
- [ ] CI/CD 自动化
- [ ] 团队协作功能

---

## 📞 获取帮助

如有问题，请联系：

- **作者**: shichangxue
- **邮箱**: shichangxue@jd.com
- **仓库**: git@coding.jd.com:shichangxue/find-plus-mcp.git

---

**祝发布顺利！** 🚀

