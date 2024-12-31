import { assertEquals } from "jsr:@std/assert";
import { extractDigits } from "./03_extract_digits.js";

Deno.test("extract digits of positive number", () => {
  assertEquals(extractDigits(123), [1, 2, 3]);
});

Deno.test("extract digits of number ends with zero", () => {
  assertEquals(extractDigits(120), [1, 2, 0]);
});

Deno.test("extract digits of negative number", () => {
  assertEquals(extractDigits(-123), [1, 2, 3]);
});

Deno.test("extract digits of number which is zero", () => {
  assertEquals(extractDigits(0), [0]);
});
