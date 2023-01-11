/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import path from 'path';
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
    // alias: [
    //   { find: '@/', replacement: '/src' },
    //   { find: '@/Assets', replacement: '/src/assets' },
    //   { find: '@/Components', replacement: '/src/components' },
    //   { find: '@/Context', replacement: '/src/context' },
    //   { find: '@/Constants', replacement: '/src/constants' },
    //   { find: '@/Hooks', replacement: '/src/hooks' },
    //   { find: '@/Views', replacement: '/src/views' }
    // ]
    alias: {
      '@/Assets': path.resolve(__dirname, 'src/assets/'),
      '@/Components': path.resolve(__dirname, 'src/components/'),
      '@/Context': path.resolve(__dirname, 'src/context/'),
      '@/Constants': path.resolve(__dirname, 'src/constants/'),
      '@/Hooks': path.resolve(__dirname, 'src/hooks/'),
      '@/Views': path.resolve(__dirname, 'src/views/')
    }
  },
  optimizeDeps: {}
});
