import { stringToBoolean } from "../utils/type.utils.ts";

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
  readonly IS_TEST: boolean;
  readonly IS_DEVELOPMENT: boolean;
  readonly IS_PRODUCTION: boolean;
  readonly HIDE_UNIMPLEMENTED_FEATURES: boolean;
  readonly KEYCLOAK_CLIENT_ID: string;
  readonly KEYCLOAK_DEFAULT_REALM: string;
};

export const AppConfig: AppConfigType = (() => {
  return {
    IS_TEST: import.meta.env.MODE === "test",
    IS_DEVELOPMENT: import.meta.env.DEV,
    IS_PRODUCTION: import.meta.env.PROD,
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
