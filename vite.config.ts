import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Build version — timestamp of the build.
 * Injected as `import.meta.env.VITE_BUILD_VERSION` so we can append
 * `?v=<version>` to /assets/ URLs and force the browser to re-download
 * images whenever a new build is deployed.
 */
const BUILD_VERSION = String(Date.now());

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_BUILD_VERSION': JSON.stringify(BUILD_VERSION),
  },
  server: {
    port: 5173,
    open: true,
  },
});
