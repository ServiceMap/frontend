import { TEST_KEYCLOAK_URL } from "@/tests/constants.ts";
import { mockRequest } from "@/tests/mocks/mock.utils.ts";

export const keycloakHandlers = [
  mockRequest({
    baseURL: TEST_KEYCLOAK_URL,
    url: "/auth/realms/:realm",
    method: "GET",
    mockData: [],
  }),
];
