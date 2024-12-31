import { assertFalse, assert } from "jsr:@std/assert";
import { isStrictlyAscending } from "./01_strictly_ascending.js";

Deno.test("should be true when array in ascending order", () => {
  assert(isStrictlyAscending([1, 3, 4, 5, 16]));
});

Deno.test("should be true when array is empty", () => {
  assert(isStrictlyAscending([]));
});

Deno.test("should be false when array not in ascending order", () => {
  assertFalse(isStrictlyAscending([1, 3, 4, 5, 2]));
});

Deno.test("should be false when array contains same elements", () => {
  assertFalse(isStrictlyAscending([1, 3, 3, 4]));
});
