import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts', 'cli.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  shims: true,
  outDir: 'dist',
  external: ['@modelcontextprotocol/sdk'],
});

