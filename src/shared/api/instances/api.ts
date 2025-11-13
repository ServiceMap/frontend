import { createApiInstance } from "@/shared/api/base";
import { AppConfig } from "@/shared/configs";

export const apiClient = createApiInstance({
  baseURL: AppConfig.API_SERVER_URL,
  withAuth: true,
});
