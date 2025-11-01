export const stringToBoolean = (value?: string): boolean =>
  value?.toLowerCase() === "true";

/**
 * Extracts the union type of all values from a given object type.
 *
 * @example
 * const Colors = { RED: "red", BLUE: "blue" } as const;
 * type ColorValues = ValueOf<typeof Colors>; // "red" | "blue"
 */
export type ValueOf<T> = T[keyof T];
