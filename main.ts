// internet-in-one-word — entry program for make.fun competition
// u-ronigrv-the-internet-in-one-word-e388f33b
//
// Writes the chosen single word for the whole internet to
// $MAKEFUN_OUTPUT_DIR/entry.txt (falls back to /output when the variable
// is not set). Plain JavaScript on purpose: the grader runs node directly
// on this file.

const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "entry.txt");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = path.join(outputDir, "entry.txt");

let word = fs.readFileSync(sourcePath, "utf8");

// Defensive normalisation: a leading BOM and a single trailing newline
// are file artefacts, not part of the word — strip them before the gate.
if (word.charCodeAt(0) === 0xfeff) word = word.slice(1);
if (word.endsWith("\n")) word = word.slice(0, -1);

// Gate checks mirroring the competition gate (RULES.txt): the output must
// be UTF-8 text of 1 to 30 characters, not only white space. The brief
// adds that the entry is exactly one word, so reject any white space at
// all — no spaces, tabs, newlines or carriage returns anywhere in it.
// Fail loudly here instead of shipping an entry the sealed scorer would
// reject.
if (word.length === 0 || word.trim().length === 0) {
  throw new Error("entry.txt is empty or only white space");
}
if (word.length > 30) {
  throw new Error("entry.txt is " + word.length + " chars, over the 30 limit");
}
if (/\s/.test(word)) {
  throw new Error("entry.txt must be exactly one word with no white space");
}

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, word, "utf8");

// Round-trip check: read the file back and fail loudly if the bytes on
// disk differ from the word we meant to write.
const written = fs.readFileSync(outputPath, "utf8");
if (written !== word) {
  throw new Error("round-trip check failed: output differs from entry.txt");
}
fs.chmodSync(outputPath, 0o644);

console.log("wrote " + outputPath + " (" + word.length + " chars): " + word);
