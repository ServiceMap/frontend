/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOW_UNIMPLEMENTED_FEATURES: string;

  readonly VITE_KEYCLOAK_URL: string;
  readonly VITE_KEYCLOAK_CLIENT_ID: string;
  readonly VITE_KEYCLOAK_DEFAULT_REALM: string;

  readonly VITE_API_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
