/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'node:path';

// additional config to direct the vite build to src directory
// https://vitejs.dev/config/#conditional-config
// https://vitejs.dev/config/shared-options.html#root

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      plugins: [
        viteStaticCopy({
          targets: [
            {
              src: normalizePath(path.join(__dirname, 'src', 'Img')),
              dest: normalizePath(path.join(__dirname, 'dist')),
            }
          ]
        })
      ],
      root: 'src',
      // para hacer un deploy en github pages, configura propiedad base con el
      // nombre/url de tu repo
      // para fazer uma implantação github pages, defina a propriedade base
      // para o nome/url do seu repositório
      // https://vitejs.dev/guide/static-deploy.html#github-pages
      // ejemplo base: '/social-network/',
      build: {
        minify: false,
        rollupOptions: {
          output: {
            dir: './dist',
          },
        },
      },
    };
  }
  return {};
});
