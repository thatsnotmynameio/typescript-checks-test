import { describe, expect, it } from "vitest";
import { add } from "../lib/index.js";

describe("add", () => {
  it("adds", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(1, 2)).not.toBe(4);
  });
});
