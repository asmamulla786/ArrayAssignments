import { assertEquals } from "jsr:@std/assert";
import { isStrictlyAscending } from "./01_strictly_ascending.js";

Deno.test("strictly ascending array is in strictly ascending order", () => {
  assertEquals(isStrictlyAscending([1, 3, 4, 5, 16]), true);
});

Deno.test("strictly ascending of empty array", () => {
  assertEquals(isStrictlyAscending([]), true);
});

Deno.test("strictly ascending array is not in strictly ascending order", () => {
  assertEquals(isStrictlyAscending([1, 3, 4, 5, 2]), false);
});

Deno.test("strictly ascending of array which contains same elements", () => {
  assertEquals(isStrictlyAscending([1, 3, 3, 4]), false);
});
