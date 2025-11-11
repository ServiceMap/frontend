import { useNavigate } from "react-router-dom";
import Keycloak from "keycloak-js";

import { ROLES } from "@/constants/roles.constants.ts";
import { API_ROUTES, ROUTES } from "@/constants/routes.constants.ts";
import { keycloakClient } from "@/shared/configs/axios.config.ts";
import { AppConfig } from "@/shared/configs/env.config.ts";
import type { User } from "@/types/user.types.ts";
import { getRealmFromHost, isRealmValid } from "@/utils/realm.utils.ts";

export const AUTH_EVENT_NAME = "auth_event";

const KEYCLOAK_UPDATE_TOKEN_INTERVAL_SECONDS = 30;
const KEYCLOAK_TOKEN_MIN_VALIDITY_SECONDS = 60;

class AuthService extends EventTarget {
  private static _instance: AuthService;

  private _isInitiated = false;
  private currentRealm: string | undefined;
  private keycloak: Keycloak | undefined;

  constructor() {
    if (AuthService._instance) return AuthService._instance;

    super();
    AuthService._instance = this;

    const realm = getRealmFromHost();
    if (!isRealmValid(realm)) throw new Error("Invalid realm");

    this.currentRealm = realm;

    this.keycloak = new Keycloak({
      url: `${AppConfig.KEYCLOAK_URL}${API_ROUTES.AUTH.BASE}`,
      realm: this.currentRealm,
      clientId: AppConfig.KEYCLOAK_CLIENT_ID,
    });

    this.keycloak.onAuthSuccess = () => this.emitAuthEvent();
    this.keycloak.onReady = (authenticated) => {
      this._isInitiated = true;
      this.emitAuthEvent();

      if (!authenticated) return;

      setInterval(() => {
        this.keycloak!.updateToken(KEYCLOAK_TOKEN_MIN_VALIDITY_SECONDS).catch(
          (error) => {
            console.error("Keycloak update token error", error);
            this.logout();
          },
        );
      }, KEYCLOAK_UPDATE_TOKEN_INTERVAL_SECONDS * 1000);
    };
    this.keycloak.onAuthLogout = () => this.emitAuthEvent();
    this.keycloak.onAuthRefreshError = () => this.emitAuthEvent();
    this.keycloak.onTokenExpired = () => {
      this.logout();
      this.emitAuthEvent();
    };
  }

  private emitAuthEvent() {
    this.emit(AUTH_EVENT_NAME);
  }

  private emit(eventName: string) {
    this.dispatchEvent(new Event(eventName));
  }

  async init() {
    if (this._isInitiated) return;

    const isRealmValid = await this.validateRealm(this.currentRealm);
    if (!isRealmValid) {
      throw new Error("Invalid realm. Please check the URL and try again.");
    }

    await this.keycloak!.init({
      onLoad: "check-sso",
      pkceMethod: "S256",
      checkLoginIframe: true,
      silentCheckSsoRedirectUri: `${window.location.origin}/auth/silent-check-sso.html`,
    }).catch((err) => {
      console.error("Keycloak init error", err);
      const navigate = useNavigate();
      void navigate(ROUTES.ERROR);
    });
  }

  async validateRealm(realm?: string) {
    if (!realm || !isRealmValid(realm)) return false;

    let response;
    try {
      response = await keycloakClient.get(
        `${API_ROUTES.AUTH.REALMS}/${encodeURIComponent(realm)}`,
      );
    } catch (error) {
      console.error("Keycloak validate realm error", error);
      return false;
    }

    return response.status === 200;
  }

  get isInitiated() {
    return this._isInitiated;
  }

  get isLoggedIn() {
    return !!this.keycloak!.token;
  }

  get token() {
    return this.keycloak!.token;
  }

  get user(): User | undefined {
    const tokenParsed = this.keycloak!.tokenParsed;
    if (!tokenParsed) return;

    const fullNameArr: string[] = [];
    const givenName = tokenParsed?.given_name as string;
    if (givenName) fullNameArr.push(givenName);

    const familyName = tokenParsed?.family_name as string;
    if (familyName) fullNameArr.push(familyName);

    const roles = tokenParsed.realm_access?.roles || [];
    return {
      id: tokenParsed.sub as string,
      username: tokenParsed.name as string,
      preferredName: tokenParsed.preferred_username as string,
      email: tokenParsed.email as string,
      roles: roles as ROLES[],
    };
  }

  login = (): Promise<void> =>
    this.keycloak!.login().catch((error) => {
      console.error("Keycloak login error", error);
    });

  logout = (): Promise<void> =>
    this.keycloak!.logout({ redirectUri: window.location.origin }).catch(
      (error) => {
        console.error("Keycloak logout error", error);
      },
    );

  hasRole = (roles: ROLES[]): boolean =>
    !roles.length || roles.some((role) => this.keycloak!.hasRealmRole(role));

  isSuperAdmin = () => this.hasRole([ROLES.SUPER_ADMIN]);

  isCompanyAdmin = () => this.hasRole([ROLES.COMPANY_ADMIN]);

  isMaster = () => this.hasRole([ROLES.MASTER]);
}

const authService = new AuthService();
export default authService;
