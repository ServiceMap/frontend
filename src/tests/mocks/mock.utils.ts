import { http, HttpHandler, HttpResponse, type JsonBodyType } from "msw";

export type HttpResolver = Parameters<typeof http.get>[1];

interface MockRequestOptions {
  baseURL: string;
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  mockData?: JsonBodyType;
  isError?: boolean;
  mockResolver?: HttpResolver;
  matchQueryParams?: boolean;
}

export const mockRequest = ({
  baseURL,
  url,
  method,
  mockData,
  isError = false,
  mockResolver,
}: MockRequestOptions): HttpHandler => {
  const { href: matchUrl } = new URL(url, baseURL);

  const defaultResolver = ((_) => {
    if (isError) {
      return HttpResponse.error();
    }
    return HttpResponse.json(mockData);
  }) as HttpResolver;
  const resolver = mockResolver ?? defaultResolver;

  switch (method) {
    case "GET":
      return http.get(matchUrl, resolver);
    case "POST":
      return http.post(matchUrl, () => {
        if (isError) return HttpResponse.error();

        return HttpResponse.json(mockData);
      });
    case "PUT":
      return http.put(matchUrl, resolver);
    case "DELETE":
      return http.delete(matchUrl, resolver);
  }
};
