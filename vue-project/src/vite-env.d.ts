/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// I need to verify the real type of the ImportMetaEnv and ImportMeta interfaces and the existence of the import.meta.env.BASE_URL property here