import { assertEquals } from "jsr:@std/assert";
import { isStrictlyDescending } from "./02_strictly_descending.js";

Deno.test("strictly descending array is in descending order", () => {
  assertEquals(isStrictlyDescending([5, 4, 3, 2, 1]), true);
});

Deno.test("strictly descending with empty array", () => {
  assertEquals(isStrictlyDescending([]), true);
});

Deno.test("strictly descending array not in descending order", () => {
  assertEquals(isStrictlyDescending([1, 3, 4, 5, 2]), false);
});

Deno.test("strictly descending array which contains same elements", () => {
  assertEquals(isStrictlyDescending([4, 3, 3, 1]), false);
});

// testStrictlyDescending([1, 3, 4, 5, 2], false);
// testStrictlyDescending([4, 3, 3, 1], false);
