/**
 * Extracts the union type of all values from a given object type.
 *
 * @example
 * const Colors = { RED: "red", BLUE: "blue" } as const;
 * type ColorValues = ValueOf<typeof Colors>; // "red" | "blue"
 */
export type ValueOf<T> = T[keyof T];

/**
 * Creates a new type that extends the original type with optional properties.
 */
export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
