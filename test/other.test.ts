import { describe, expect, it } from "vitest";
import { wait } from "../src/index.js";
import { untested } from "../src/other.js";

describe("other", () => {
  it("covers everything", () => {
    expect(untested(2)).toBe(4);
    expect(untested(-3)).toBe(3);
    expect(wait("1s")).toBe(1000);
  });
});
