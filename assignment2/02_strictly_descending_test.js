import { assertFalse, assert } from "jsr:@std/assert";
import { isStrictlyDescending } from "./02_strictly_descending.js";

Deno.test("should be true when array in descending order", () => {
  assert(isStrictlyDescending([5, 4, 3, 2, 1]));
});

Deno.test("should be true when array is empty", () => {
  assert(isStrictlyDescending([]));
});

Deno.test("should be false when array in not descending order", () => {
  assertFalse(isStrictlyDescending([1, 3, 4, 5, 2]));
});

Deno.test("should be false when array contains same elements", () => {
  assertFalse(isStrictlyDescending([5, 4, 3, 3, 1]));
});
