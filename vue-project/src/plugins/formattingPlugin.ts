import type { App } from 'vue';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $formatDate(value: string): string;
      $formatCurrency(value: number): string;
    }
  }
  
  export default {
    install(app: App) {
      app.config.globalProperties.$formatDate = (value: string): string => {
        if (value) {
          return new Date(value).toLocaleDateString(undefined, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });
        }
        return '';
      };
  
      app.config.globalProperties.$formatCurrency = (value: number): string => {
        if (value) {
          return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        }
        return '';
      };
    },
  };
  