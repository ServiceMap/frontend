import { AppConfig } from "@/config/env.ts";

export const getTenantFromHost = (): string => {
  const host = window.location.hostname;
  const parts = host.split(".");
  if (parts.length < 2) return AppConfig.KEYCLOAK_DEFAULT_REALM;

  const subdomain = parts[0];
  if (["localhost", "ui", "www"].includes(subdomain))
    return AppConfig.KEYCLOAK_DEFAULT_REALM;
  return subdomain;
};
