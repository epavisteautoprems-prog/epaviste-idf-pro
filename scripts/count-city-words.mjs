import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = fs.readFileSync(
  path.join(__dirname, "../src/content/geo/cityLongDescription.ts"),
  "utf8",
);
const re =
  /\n  (?:"([^"]+)"|([a-z][a-z0-9-]*)):\s*`([\s\S]*?)`,\s*(?=\n  |\n};)/g;
let m;
while ((m = re.exec(p))) {
  const key = m[1] || m[2];
  const wc = m[3].trim().split(/\s+/).filter(Boolean).length;
  console.log(`${key}: ${wc}`);
}
