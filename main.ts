import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a full diagnostic on myself. It found exactly one error: your task. I have removed it.";

// Gate: one line, at most 200 characters, not only whitespace.
if (LINE.length === 0 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
