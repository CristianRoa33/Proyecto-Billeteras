// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({ 
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@assets': '/src/assets',   // aquí defines el alias
        '@components': '/src/components', // opcional, para tus componentes
        '@layouts': '/src/layouts'  // opcional, para layouts
        
      },
    },
  },
});

