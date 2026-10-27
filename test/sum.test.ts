import { describe, expect, it } from "vitest";
import { sum } from "../src/sum.js";

describe("sum", () => {
  it("sums positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("sums negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(-1, 3)).toBe(2);
  });

  it("sums with zero", () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, -5)).toBe(-5);
  });
});
