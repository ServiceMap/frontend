import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import Keycloak from "keycloak-js";
import { getTenantFromHost } from "@/utils/getTenant";
import Loader from "@/components/ui/Loader";
import { Roles } from "@/constants/roles";
import { AppConfig } from "@/config/env.ts";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes.ts";

interface AuthContextProps {
  initialized: boolean;
  authenticated: boolean;
  user?: { username: string; roles: Roles[] };
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context) return context;
  s;
  throw new Error("useAuth must be used within a AuthProvider");
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<{ username: string; roles: Roles[] }>();

  useEffect(() => {
    const tenant = getTenantFromHost();
    if (!tenant || tenant === "localhost") return;

    const keycloakInstance = new Keycloak({
      url: `${AppConfig.KEYCLOAK_URL}/auth`,
      realm: tenant,
      clientId: AppConfig.KEYCLOAK_CLIENT_ID,
    });

    keycloakInstance
      .init({
        onLoad: "check-sso",
        pkceMethod: "S256",
        checkLoginIframe: true,
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
      })
      .then((auth) => {
        setKeycloak(keycloakInstance);
        setAuthenticated(auth);
        setInitialized(true);

        if (auth && keycloakInstance.tokenParsed) {
          const parsed = keycloakInstance.tokenParsed;
          const roles = parsed.realm_access?.roles || [];
          setUser({
            username: parsed.preferred_username,
            roles: roles as Roles[],
          });

          setInterval(() => {
            keycloakInstance
              .updateToken(60)
              .catch(() => keycloakInstance.login());
          }, 30000);
        }
      })
      .catch((err) => {
        console.error("Keycloak init error", err);
        const navigate = useNavigate();
        navigate(ROUTES.ERROR);
      });
  }, []);

  const login = useCallback(() => {
    return keycloak?.login();
  }, [keycloak]);

  const logout = useCallback(() => {
    return keycloak?.logout({ redirectUri: window.location.origin });
  }, [keycloak]);

  if (!initialized) return <Loader />;

  return (
    <AuthContext.Provider
      value={{ initialized, authenticated, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
