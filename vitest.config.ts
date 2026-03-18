import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  // Vitest's `esbuild` config typing doesn't include `jsx`, but Vite/rolldown
  // still needs it for correct TSX handling in this repo.
  esbuild: { jsx: 'automatic' } as any,
  // Vitest 4 may default to OXC transforms, which respect tsconfig `jsx: "preserve"`
  // and leave JSX untransformed for Vite import-analysis. For this repo we want
  // esbuild's TSX transform behavior in tests.
  oxc: false,
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    globals: true,
    include: ['**/*.test.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': projectRoot,
    },
  },
})

