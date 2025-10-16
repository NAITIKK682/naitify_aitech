import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Small plugin to add security and caching headers for vite preview
function previewHeadersPlugin() {
  return {
    name: 'preview-headers',
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        // Security headers
        res.setHeader('Content-Security-Policy', "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; frame-ancestors 'none';");
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        res.setHeader('Permissions-Policy', 'geolocation=(), microphone=()');

        // Caching for static assets
        if (req.url && (req.url.endsWith('.js') || req.url.endsWith('.css') || req.url.match(/\.(png|jpg|jpeg|svg|webp|avif)$/))) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }

        // Ensure UTF-8 charset
        const ct = res.getHeader('Content-Type');
        if (!ct) res.setHeader('Content-Type', 'text/html; charset=utf-8');

        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), previewHeadersPlugin()],
});
