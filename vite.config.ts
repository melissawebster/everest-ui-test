/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    typecheck: {
      tsconfig: './tsconfig.vitest.json'
    }
  },
} as any) 