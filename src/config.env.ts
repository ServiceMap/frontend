import { stringToBoolean } from "./utils/Type.utils.ts";

type WindowEnvType = {
  readonly API_SERVER_URL: string;
  readonly KEYCLOAK_URL: string;
};

declare global {
  interface Window {
    env: WindowEnvType;
  }
}

type AppConfigType = WindowEnvType & {
  readonly HIDE_UNIMPLEMENTED_FEATURES: boolean;
  readonly KEYCLOAK_CLIENT_ID: string;
  readonly KEYCLOAK_DEFAULT_REALM: string;
};

export const AppConfig: AppConfigType = (() => {
  return {
    HIDE_UNIMPLEMENTED_FEATURES: stringToBoolean(
      import.meta.env.VITE_HIDE_UNIMPLEMENTED_FEATURES,
    ),
    API_SERVER_URL:
      import.meta.env.VITE_API_SERVER_URL || window.env.API_SERVER_URL,
    KEYCLOAK_URL: import.meta.env.VITE_KEYCLOAK_URL || window.env.KEYCLOAK_URL,
    KEYCLOAK_CLIENT_ID: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
    KEYCLOAK_DEFAULT_REALM: import.meta.env.VITE_KEYCLOAK_DEFAULT_REALM,
  };
})();
