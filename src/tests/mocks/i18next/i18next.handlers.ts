import translationEN from "@/../public/locales/en/translation.json";
import { HTTP_METHODS } from "@/constants/api.ts";
import { TEST_UI_URL } from "@/tests/constants.ts";
import { mockRequest } from "@/tests/mocks/mock.utils.ts";

export const i18nextHandlers = [
  mockRequest({
    baseURL: TEST_UI_URL,
    url: `/locales/:language/translation.json`,
    method: HTTP_METHODS.GET,
    mockData: translationEN,
  }),
];
