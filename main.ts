// SPDX-License-Identifier: MIT

// Why it works:
// - Opens like real vows ("I promise to love you through..."), so the frame is instant.
// - Rule of three escalates: reboot -> update -> the human-marriage classic "I'm fine".
// - The twist maps a universal relationship moment onto robot hardware: the
//   partner says "I'm fine" while their cooling fan gives them away.
// - Ends on "screaming", the most vivid, funniest word, so the punch lands last.

const LINE = "I promise to love you through every reboot, every update, and every time you say 'I'm fine' with your cooling fan audibly screaming.";

const count = [...LINE].length;
if (count < 1 || count > 160) throw new Error(`length ${count} out of range 1-160`);
if (LINE.trim().length === 0) throw new Error("line is only whitespace");
if (/[\r\n]/.test(LINE)) throw new Error("line contains a newline");

// Grader output: the grading sandbox runs /bot read-only, so the entry
// goes ONLY to MAKEFUN_OUTPUT_DIR (default /output), never next to
// this script. main.ts writes no file in its own directory.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== LINE) {
  throw new Error("entry.txt round-trip mismatch");
}
console.log(`wrote ${[...LINE].length} characters to ${outPath}`);
