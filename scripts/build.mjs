// Checks the proposed constitution against the form's word-for-word statements,
// writes the proposed documents as Markdown, and builds a standalone viewer.
// Usage: node scripts/build.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "content.js"), "utf8"), sandbox);
const D = sandbox.window.MITOC;

// Statements the re-registration form (p. 5) requires exactly as written.
const REQUIRED = [
  "All MIT students are eligible for membership in the organization.",
  "The organization’s membership will at all times consist of at least 10 MIT students.",
  "The organization shall not discriminate based on any characteristic listed in the MIT Nondiscrimination Policy for membership, officer position, or in any other aspect.",
  "The Executive Board reserves the right to revoke the membership or officer position of any member, by a two-thirds majority vote, for non-conduct related reasons. All conduct-related complaints should be referred to the appropriate channel(s) for resolution, including, without limitation, the Institute Discrimination & Harassment Response (IDHR) Office, the Committee on Discipline (COD), and the Student Organizations, Leadership and Engagement (SOLE) Office.",
  "Only MIT students are eligible to serve as officers in the organization.",
  "The executive board of the organization must include at least one president and one treasurer (or corresponding positions) and each officer role must be held by a distinct MIT student, meaning one student cannot serve as both president and treasurer simultaneously.",
  "In no event shall any proposed amendment conflict with ASA guidelines, policies, or other MIT policies.",
  "The MIT Outing Club agrees to abide by the policies and guidelines of the Association of Student Activities (ASA), its Executive Board, as well as the MIT Mind and Hand Book and the MIT Student Organization Handbook, all as may be subject to change from time to time. This Constitution, amendments to it, and the Bylaws of this organization shall be subject to review by the ASA Executive Board, to ensure that they are in accordance with the aforementioned policies and guidelines."
];

const flat = text => text.replace(/__/g, "").split("\n").map(l => l.trim()).join(" ");
const docText = (key, side) => D.docs[key].blocks.map(b => b[side] || "").map(flat).join(" ");

let failed = false;
for (const side of ["old", "new"]) {
  const text = docText("constitution", side);
  REQUIRED.forEach((s, i) => {
    const ok = text.includes(s);
    if (side === "new" && !ok) failed = true;
    console.log(`${side.padEnd(3)} statement ${i + 1}: ${ok ? "exact" : "MISSING OR ALTERED"}`);
  });
}
for (const key of Object.keys(D.docs)) {
  if (/[​-‍﻿]/.test(docText(key, "new"))) { failed = true; console.log(`${key}: hidden zero-width characters found`); }
}
const ids = new Set(D.issues.map(i => i.id));
for (const key of Object.keys(D.docs)) for (const b of D.docs[key].blocks) for (const n of b.notes)
  if (!ids.has(n)) { failed = true; console.log(`${b.id}: unknown issue ${n}`); }
for (const i of D.issues) if (!i.cites.some(c => c.src === "Form" || c.src === "Handbook")) console.log(`note: ${i.id} (${i.title}) has no citation`);

// Markdown, matching the viewer's export.
const ITEM_RE = /^([A-Z]|\d+)\.\s/;
function toMarkdown(key) {
  const out = [];
  for (const b of D.docs[key].blocks) {
    if (b.new == null) continue;
    let prev = null;
    for (const raw of b.new.replace(/__(.+?)__/g, "<u>$1</u>").split("\n")) {
      if (!raw.trim()) continue;
      const lv = Math.floor((raw.length - raw.trimStart().length) / 4);
      const t = raw.trim();
      const isBullet = t.startsWith("- ");
      const isNested = (lv > 0 && ITEM_RE.test(t)) || isBullet;
      if (!isNested && out.length && /^\s*- /.test(out[out.length - 1])) out.push("");
      if (raw.startsWith("# ")) out.push(raw);
      else if (raw.startsWith("## ") || raw.startsWith("### ")) out.push(raw);
      else if (prev && prev.startsWith("# ")) out.push(`*${t}*`);
      else if (isBullet) { out.push("  ".repeat(lv) + t); prev = raw; continue; }
      else if (ITEM_RE.test(t)) {
        const m = t.match(ITEM_RE);
        const body = `**${m[1]}.** ${t.slice(m[0].length)}`;
        if (lv === 0) out.push(body);
        else { out.push("  ".repeat(lv - 1) + "- " + body); prev = raw; continue; }
      } else out.push(t);
      out.push("");
      prev = raw;
    }
    out.push("");
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
fs.mkdirSync(path.join(root, "proposed"), { recursive: true });
for (const key of Object.keys(D.docs)) {
  const file = path.join(root, "proposed", D.docs[key].file + ".md");
  fs.writeFileSync(file, toMarkdown(key));
  console.log("wrote", path.relative(root, file));
}

// Standalone viewer for opening from disk (the published page gets its skeleton at publish time).
const page = fs.readFileSync(path.join(root, "index.html"), "utf8")
  .replace('<script src="content.js"></script>', () => `<script>\n${fs.readFileSync(path.join(root, "content.js"), "utf8")}\n</script>`);
const standalone = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<style>body{margin:0}[hidden]{display:none!important}img{max-width:100%}</style>\n</head>\n<body>\n${page}\n</body>\n</html>\n`;
fs.writeFileSync(path.join(root, "proposed", "MITOC_Review_viewer.html"), standalone);
console.log("wrote proposed/MITOC_Review_viewer.html");

if (failed) { console.error("Checks failed."); process.exit(1); }
console.log("All checks passed.");
