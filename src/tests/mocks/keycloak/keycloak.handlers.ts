import { HTTP_METHODS } from "@/constants/api.constants.ts";
import { API_ROUTES } from "@/constants/routes.constants.ts";
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
