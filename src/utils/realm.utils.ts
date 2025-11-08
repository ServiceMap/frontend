import { AppConfig } from "@/config/env.config.ts";

export const getRealmFromHost = (): string => {
  const host = window.location.hostname;
  const parts = host.split(".");
  if (parts.length < 2) return AppConfig.KEYCLOAK_DEFAULT_REALM;

  const subdomain = parts[0];
  if (isRealmValid(subdomain)) return subdomain;

  return AppConfig.KEYCLOAK_DEFAULT_REALM;
};

export const isRealmValid = (realm: string | null | undefined): boolean => {
  return !!realm && !["localhost", "ui", "www"].includes(realm);
};
