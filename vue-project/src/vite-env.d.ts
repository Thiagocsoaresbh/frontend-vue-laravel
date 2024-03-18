/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MY_APP_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
