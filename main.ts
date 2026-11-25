// One-Line Laugh-Off — a single original one-line joke.
//
// The program writes exactly one funny line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (the grader's /output/entry.txt).
// Deterministic: no randomness, no network, no clock, no input.
// The joke is a single line: therapy advice meets modern ghosting —
// the setup promises healing, the punchline turns the inner child
// into one more person who will not reply.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My therapist told me to talk to my inner child \u2014 I did, and he ghosted me too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
