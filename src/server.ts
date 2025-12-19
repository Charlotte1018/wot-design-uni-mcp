#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import {
  listComponents,
  getComponentDocs,
  getComponentExamples,
} from './tools/index.js';
import { SYSTEM_DESCRIPTION_PROMPT } from './prompt/index.js';

// 创建 MCP 服务器实例
const server = new Server(
  {
    name: 'find-plus-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
      prompts: {},
    },
  }
);

// 注册 prompts
server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: [
      {
        name: 'system-description',
        description: '专业的 Find-Plus 组件库专家助手',
        arguments: [],
      },
    ],
  };
});

server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  if (request.params.name === 'system-description') {
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: SYSTEM_DESCRIPTION_PROMPT,
          },
        },
      ],
    };
  }

  throw new Error(`未知的 prompt: ${request.params.name}`);
});

// 注册可用工具列表
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'list-components',
        description: '列出所有可用的 Find-Plus 组件及其描述',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'get-component-docs',
        description: '获取 Find-Plus 特定组件的详细文档，不包含代码示例',
        inputSchema: {
          type: 'object',
          properties: {
            componentName: {
              type: 'string',
              description: '组件名称（如：Button、Table、Form）',
            },
          },
          required: ['componentName'],
        },
      },
      {
        name: 'list-component-examples',
        description: '获取 Find-Plus 特定组件的代码示例',
        inputSchema: {
          type: 'object',
          properties: {
            componentName: {
              type: 'string',
              description: '组件名称（如：Button、Table、Form）',
            },
          },
          required: ['componentName'],
        },
      },
    ],
  };
});

// 处理工具调用
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    let result: string;

    switch (name) {
      case 'list-components':
        result = await listComponents();
        break;

      case 'get-component-docs':
        if (!args || typeof args.componentName !== 'string') {
          throw new Error('缺少必需参数: componentName');
        }
        result = await getComponentDocs(args.componentName);
        break;

      case 'list-component-examples':
        if (!args || typeof args.componentName !== 'string') {
          throw new Error('缺少必需参数: componentName');
        }
        result = await getComponentExamples(args.componentName);
        break;

      default:
        throw new Error(`未知工具: ${name}`);
    }

    return {
      content: [
        {
          type: 'text',
          text: result,
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `错误: ${(error as Error).message}`,
        },
      ],
      isError: true,
    };
  }
});

// 启动服务器
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Find-Plus Components MCP 服务器已启动');
}

main().catch((error) => {
  console.error('服务器启动失败:', error);
  process.exit(1);
});

