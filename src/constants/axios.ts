import type { ValueOf } from "@/utils/type.utils.ts";

export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;

export type HTTP_METHODS = ValueOf<typeof HTTP_METHODS>;
