import { defineConfig } from '@vue/cli-service';
import { resolve } from 'path';

export default defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'], // Including .ts explicitly
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  }
});
