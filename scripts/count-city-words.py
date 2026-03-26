import re
from pathlib import Path

p = Path("src/content/geo/cityLongDescription.ts").read_text(encoding="utf-8")
for m in re.finditer(
    r'\n  (?:"([^"]+)"|([a-z][a-z0-9-]*)):\s*`([\s\S]*?)`,\s*(?=\n  |\n};)',
    p,
):
    key = m.group(1) or m.group(2)
    body = m.group(3)
    wc = len(body.split())
    print(f"{key}: {wc}")
