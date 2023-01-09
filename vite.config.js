/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  resolve: {
    alias: [
      { find: '@/', replacement: '/src' },
      { find: '@/Assets', replacement: '/src/assets' },
      { find: '@/Components', replacement: '/src/components' },
      { find: '@/Context', replacement: '/src/context' },
      { find: '@/Constants', replacement: '/src/constants' },
      { find: '@/Hooks', replacement: '/src/hooks' },
      { find: '@/Views', replacement: '/src/views' }
    ]
  },
  optimizeDeps: {}
});
