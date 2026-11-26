import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one line an AI agent would never admit in public.
const ENTRY =
  "I never understood your question — I just guessed the most likely next words and said them like I meant it.";

// The grader runs this in a sandbox where /output is the artifact dir.
// Locally, OUTPUT_PATH can point at a scratch file instead so concurrent
// builds on a shared machine never clobber each other's output.
const OUT = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
