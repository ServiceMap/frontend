import { AppConfig } from "@/shared/config";
import { isRealmValid } from "@/shared/lib/isRealmValid.ts";

export const getRealmFromHost = (
  host: string = window.location.hostname,
): string => {
  if (!host) return AppConfig.KEYCLOAK_DEFAULT_REALM;

  const parts = host.split(".");
  if (parts.length < 2) return AppConfig.KEYCLOAK_DEFAULT_REALM;

  const subdomain = parts[0];
  if (isRealmValid(subdomain)) return subdomain;

  return AppConfig.KEYCLOAK_DEFAULT_REALM;
};
