import { expect, it } from "vitest";
import { double } from "../src/index.js";

it("doubles", () => {
  expect(double(2)).toBe(4);
});
