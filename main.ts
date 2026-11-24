// One Line of Earned Pride — writes a single line to /output/entry.txt.
// A quiet, earned moment of pride: a small person doing something hard,
// a long effort finally landing. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The boy who couldn't read at eight read his little sister to sleep at ten, and didn't stumble once on the hard words.";

const length = [...LINE].length;
if (length < 1 || length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${length} code points to /output/entry.txt`);
