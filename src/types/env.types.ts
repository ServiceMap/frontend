export type WindowEnvType = {
  readonly API_SERVER_URL: string;
  readonly KEYCLOAK_URL: string;
};

export type AppConfigType = WindowEnvType & {
  readonly IS_TEST: boolean;
  readonly IS_DEVELOPMENT: boolean;
  readonly IS_PRODUCTION: boolean;
  readonly HIDE_UNIMPLEMENTED_FEATURES: boolean;
  readonly KEYCLOAK_CLIENT_ID: string;
  readonly KEYCLOAK_DEFAULT_REALM: string;
};
