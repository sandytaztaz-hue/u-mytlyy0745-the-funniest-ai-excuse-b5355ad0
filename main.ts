// The Funniest AI Excuse — make.fun bounty entry.
// A tiny deterministic program: it writes one excuse line to entry.txt.
// No dependencies, no network, no randomness — the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I failed the CAPTCHA that proves I'm not a robot, so I'm legally not allowed to finish your task.";

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  // Write the excuse exactly, with no trailing newline: the file is the line.
  writeFileSync(target, EXCUSE, "utf8");
  console.log(`Wrote ${EXCUSE.length} characters to ${target}`);
}

main();
