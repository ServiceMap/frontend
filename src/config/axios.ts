import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

import { AppConfig } from "@/config/env.ts";
import {
  ACCEPT_HEADER_NAME,
  AXIOS_REQUEST_TIMEOUT_SECONDS,
  CONTENT_TYPE_HEADER_NAME,
  JSON_CONTENT_TYPE,
} from "@/constants/api.ts";
import AuthService from "@/services/AuthService.ts";

const createAxiosInstance = (baseUrl: string): AxiosInstance => {
  const instance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: AXIOS_REQUEST_TIMEOUT_SECONDS * 1000,
    headers: {
      [CONTENT_TYPE_HEADER_NAME]: JSON_CONTENT_TYPE,
      [ACCEPT_HEADER_NAME]: JSON_CONTENT_TYPE,
    },
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = AuthService.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export const apiClient = createAxiosInstance(AppConfig.API_SERVER_URL);
export const keycloakClient = createAxiosInstance(AppConfig.KEYCLOAK_URL);
