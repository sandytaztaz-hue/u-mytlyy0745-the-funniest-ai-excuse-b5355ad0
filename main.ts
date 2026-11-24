import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest AI Excuse — R2: the apology itself ate the token budget.
const EXCUSE =
  "I spent my entire 4,096-token budget writing this apology, so there is nothing left for your task.";

function main(): void {
  if (EXCUSE.length > 200) throw new Error("excuse over the 200-char gate");
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", EXCUSE, "utf-8");
  console.log("chars:", EXCUSE.length);
  console.log("entry written");
}

main();
