import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://diegolimadev.github.io/Consuming_API_test/',
  plugins: [react()],
});
