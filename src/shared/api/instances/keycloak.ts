import { createApiInstance } from "@/shared/api/base";
import { AppConfig } from "@/shared/configs";

export const keycloakClient = createApiInstance({
  baseURL: AppConfig.KEYCLOAK_URL,
});
