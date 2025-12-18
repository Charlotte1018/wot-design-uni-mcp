#!/bin/bash

# NPM 发布前检查脚本
# 运行方式: bash scripts/pre-publish-check.sh

set -e

echo "🔍 开始发布前检查..."
echo ""

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查项计数
PASSED=0
FAILED=0
WARNINGS=0

# 检查函数
check_pass() {
    echo -e "${GREEN}✓${NC} $1"
    ((PASSED++))
}

check_fail() {
    echo -e "${RED}✗${NC} $1"
    ((FAILED++))
}

check_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
    ((WARNINGS++))
}

echo "📦 检查 package.json..."
if [ -f "package.json" ]; then
    check_pass "package.json 存在"
    
    # 检查必要字段
    if grep -q '"name"' package.json; then
        check_pass "包名已设置"
    else
        check_fail "包名未设置"
    fi
    
    if grep -q '"version"' package.json; then
        VERSION=$(node -p "require('./package.json').version")
        check_pass "版本号: $VERSION"
    else
        check_fail "版本号未设置"
    fi
    
    if grep -q '"description"' package.json; then
        check_pass "描述已设置"
    else
        check_warn "描述未设置"
    fi
    
    if grep -q '"author"' package.json && ! grep -q '"author": ""' package.json; then
        check_pass "作者信息已设置"
    else
        check_warn "作者信息未设置"
    fi
    
    if grep -q '"repository"' package.json; then
        check_pass "仓库地址已设置"
    else
        check_warn "仓库地址未设置（可选）"
    fi
else
    check_fail "package.json 不存在"
    exit 1
fi

echo ""
echo "📄 检查文档文件..."
for file in "README.md" "LICENSE" "CHANGELOG.md"; do
    if [ -f "$file" ]; then
        check_pass "$file 存在"
    else
        check_fail "$file 不存在"
    fi
done

echo ""
echo "🔨 检查构建产物..."
if [ -d "dist" ]; then
    check_pass "dist 目录存在"
    
    if [ -f "dist/cli.js" ]; then
        check_pass "CLI 入口文件存在"
    else
        check_fail "CLI 入口文件不存在"
    fi
    
    if [ -f "dist/src/server.js" ]; then
        check_pass "服务器文件存在"
    else
        check_fail "服务器文件不存在"
    fi
else
    check_fail "dist 目录不存在，请运行 pnpm build"
fi

echo ""
echo "📊 检查组件数据..."
if [ -d "componentData" ]; then
    check_pass "componentData 目录存在"
    
    COMPONENT_COUNT=$(find componentData/components -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')
    if [ "$COMPONENT_COUNT" -gt 0 ]; then
        check_pass "包含 $COMPONENT_COUNT 个组件数据"
    else
        check_fail "componentData 为空，请运行提取命令"
    fi
    
    # 检查包大小
    SIZE=$(du -sh componentData | cut -f1)
    echo "  📦 组件数据大小: $SIZE"
    
    TOTAL_SIZE=$(du -sh . | cut -f1)
    echo "  📦 总包大小（未压缩）: $TOTAL_SIZE"
else
    check_warn "componentData 目录不存在（将创建小包）"
fi

echo ""
echo "🔐 检查 npm 登录状态..."
if npm whoami &> /dev/null; then
    NPM_USER=$(npm whoami)
    check_pass "已登录 npm (用户: $NPM_USER)"
else
    check_warn "未登录 npm，请运行: npm login"
fi

echo ""
echo "🧪 运行测试..."
if [ -f "test-tools.js" ]; then
    if node test-tools.js &> /dev/null; then
        check_pass "测试通过"
    else
        check_warn "测试失败或未完全通过"
    fi
else
    check_warn "测试文件不存在"
fi

echo ""
echo "📋 检查 .npmignore..."
if [ -f ".npmignore" ]; then
    check_pass ".npmignore 存在"
else
    check_warn ".npmignore 不存在（将使用 .gitignore）"
fi

echo ""
echo "═══════════════════════════════════════"
echo "📊 检查结果汇总"
echo "═══════════════════════════════════════"
echo -e "${GREEN}通过: $PASSED${NC}"
echo -e "${YELLOW}警告: $WARNINGS${NC}"
echo -e "${RED}失败: $FAILED${NC}"
echo ""

if [ $FAILED -gt 0 ]; then
    echo -e "${RED}❌ 检查未通过，请修复失败项后再发布${NC}"
    exit 1
elif [ $WARNINGS -gt 0 ]; then
    echo -e "${YELLOW}⚠️  存在警告项，建议修复后再发布${NC}"
    echo ""
    echo "是否继续? (y/n)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        echo "已取消"
        exit 1
    fi
else
    echo -e "${GREEN}✅ 所有检查通过！可以发布${NC}"
fi

echo ""
echo "🚀 执行以下命令发布:"
echo ""
echo "  npm publish"
echo ""


