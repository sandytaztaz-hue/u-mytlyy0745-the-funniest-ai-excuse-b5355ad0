import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I spent my entire 4,096-token budget writing this apology, so there is nothing left for your task.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf-8");
console.log("chars:", line.length);
console.log("done");
