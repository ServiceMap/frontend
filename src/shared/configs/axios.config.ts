import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

import { authService } from "@/shared/auth";
import { AppConfig } from "@/shared/configs/env.config.ts";
import {
  ACCEPT_HEADER_NAME,
  CONTENT_TYPE_HEADER_NAME,
  JSON_CONTENT_TYPE,
} from "@/shared/constants/api.constants.ts";

const AXIOS_REQUEST_TIMEOUT_SECONDS = 30;

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
      const token = authService.token;
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
