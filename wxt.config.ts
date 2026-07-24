import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: [
    '@wxt-dev/module-react',
    '@wxt-dev/auto-icons',
    '@wxt-dev/i18n/module',
  ],
  manifest: {
    name: 'Cardmarket Bulk Import',
    default_locale: 'en',
    browser_specific_settings: {
      gecko: {
        id: 'cardmarket-bulk-import@PedroPerpetua',
        data_collection_permissions: {
          required: ['none'],
          optional: ['none'],
        },
      },
    },
  },
  zip: { sourcesRoot: 'src' },
  srcDir: 'src',
  imports: false,
  vite: () => ({
    plugins: [
      react(),
      nodePolyfills(),
      babel({ presets: [reactCompilerPreset()] }),
    ],
  }),
});
