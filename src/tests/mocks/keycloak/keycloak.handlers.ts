import { HTTP_METHODS } from "@/constants/api.ts";
import { API_ROUTES } from "@/constants/routes.ts";
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
