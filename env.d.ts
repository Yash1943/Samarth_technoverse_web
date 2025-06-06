/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_USERNAME: string
    readonly VITE_PASSWORD: string
    readonly VITE_API_BASE_URL: string
    readonly NEXT_PUBLIC_VITE_USERNAME: string
    readonly NEXT_PUBLIC_VITE_PASSWORD: string
    readonly NEXT_PUBLIC_VITE_API_BASE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
} 