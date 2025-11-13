import { HTTP_METHODS } from "@/shared/api/consts";
import { API_ROUTES } from "@/shared/configs";
import { TEST_KEYCLOAK_URL } from "@/tests/constants.ts";
import { mockRequest } from "@/tests/mocks/mock.utils.ts";

export const keycloakHandlers = [
  mockRequest({
    baseURL: TEST_KEYCLOAK_URL,
    url: `${API_ROUTES.AUTH.REALMS}/:realm`,
    method: HTTP_METHODS.GET,
    mockData: [],
  }),
];
