// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({ 
  output: 'static',
  site: 'https://cristianroa.github.io',
  base: '/Proyecto-Billeteras/',
  vite: {
    resolve: {
      alias: {
        '@images': '/src/assets/images',   // aquí defines el alias
        '@components': '/src/components', // opcional, para tus componentes
        '@layouts': '/src/layouts'  // opcional, para layouts
        
      },
    },
  },
});

