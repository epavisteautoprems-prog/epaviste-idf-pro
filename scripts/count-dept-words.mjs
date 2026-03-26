import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = fs.readFileSync(
  path.join(__dirname, "../src/content/geo/deptLongDescription.ts"),
  "utf8",
);
const re = /\n  "(\d{2})":\s*`([\s\S]*?)`,\s*(?=\n  |\n};)/g;
let m;
while ((m = re.exec(p))) {
  const wc = m[2].trim().split(/\s+/).filter(Boolean).length;
  console.log(`${m[1]}: ${wc}`);
}
