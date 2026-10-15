import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: { include: ["src/index.ts"], exclude: ["src/extra.ts"], thresholds: { lines: 0 } },
  },
});
