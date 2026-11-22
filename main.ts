// The World in One Day — Saturday 21 November 2026.
// Entry for the make.fun news-image-20261121 bounty (Node 22, stdlib only).
// The image is entry.png beside this file; the program validates it and
// copies it to /output/entry.png. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const src = new URL("./entry.png", import.meta.url);
const buf = readFileSync(src);

// PNG magic: 89 50 4E 47 0D 0A 1A 0A
const MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!buf.subarray(0, 8).equals(MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}
if (buf.length > 1048576) {
  throw new Error(`entry.png is ${buf.length} bytes, over the 1 MiB cap`);
}

// IHDR: length 13, type "IHDR", then width/height as big-endian uint32.
if (buf.readUInt32BE(8) !== 13 || buf.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no valid IHDR chunk");
}
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}

// IEND: the file must end with a zero-length IEND chunk (12 bytes:
// 00 00 00 00 49 45 4E 44 AE 42 60 82). A truncated PNG is refused.
const IEND = Buffer.from([
  0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
]);
if (!buf.subarray(buf.length - 12).equals(IEND)) {
  throw new Error("entry.png has no valid trailing IEND chunk");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(src, join(outDir, "entry.png"));
console.log(`wrote entry.png (${width}x${height}, ${buf.length} bytes)`);
