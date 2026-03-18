import { defineConfig } from 'vitest/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  // Ensure TSX is transformed for tests regardless of tsconfig's `jsx: "preserve"`.
  esbuild: {
    jsx: 'automatic',
  },
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

