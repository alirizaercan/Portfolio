#!/usr/bin/env node
/**
 * CV PDF'ini src/data/resume.js'ten üretir (sitedeki Özgeçmiş sayfasıyla aynı içerik).
 * Tek sütun, metin tabanlı, ATS dostu A4. Yerelde çalıştırılır; çıktı src/Assets'e yazılır ve commit'lenir.
 *   PUPPETEER=/path/to/puppeteer-core CHROME=/usr/bin/google-chrome-stable node scripts/build-resume.mjs
 */
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const tmp = mkdtempSync(path.join(tmpdir(), "cv-"));
writeFileSync(path.join(tmp, "resume.mjs"), readFileSync(path.join(ROOT, "src/data/resume.js"), "utf8"));
const all = (await import(path.join(tmp, "resume.mjs"))).default;
const { default: puppeteer } = await import(process.env.PUPPETEER || "puppeteer-core");

for (const [lang, file] of [["en", "Ali_Riza_Ercan_Resume_2026.pdf"], ["tr", "Ali_Riza_Ercan_Ozgecmis_2026.pdf"]]) {
const r = all[lang]; const L = r.labels;
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const link = c => `<a href="${c.href}">${esc(c.label)}</a>`;
const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 14mm 15mm 13mm; }
  * { box-sizing: border-box; }
  body { font-family: Inter, Arial, sans-serif; color: #1c1a24; font-size: 9.6pt; line-height: 1.42; margin: 0; }
  a { color: inherit; text-decoration: none; }
  header { border-bottom: 2px solid #7b2cbf; padding-bottom: 8px; margin-bottom: 10px; }
  h1 { font-size: 22pt; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
  .title { font-size: 11.5pt; font-weight: 600; color: #7b2cbf; margin: 2px 0 6px; }
  .contacts { font-size: 8.6pt; color: #4a4558; display: flex; flex-wrap: wrap; gap: 3px 12px; }
  h2 { font-size: 9pt; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #7b2cbf; margin: 12px 0 6px; border-bottom: 1px solid #e3dbef; padding-bottom: 3px; }
  .summary { margin: 0; }
  .item { margin-bottom: 7px; break-inside: avoid; }
  .head { display: flex; justify-content: space-between; gap: 10px; }
  .head b { font-weight: 700; }
  .head .when { color: #4a4558; font-size: 8.8pt; white-space: nowrap; font-variant-numeric: tabular-nums; }
  .sub { color: #4a4558; font-size: 8.9pt; }
  ul { margin: 3px 0 0; padding-left: 14px; }
  li { margin: 1.5px 0; }
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 18px; }
  .proj b { font-weight: 700; }
  .skills div { margin: 2px 0; } .skills b { font-weight: 700; }
</style></head><body>
<header>
  <h1>${esc(r.name)}</h1>
  <div class="title">${esc(r.title)}</div>
  <div class="contacts"><span>${esc(r.location)}</span>${r.contacts.map(c => `<span>${link(c)}</span>`).join("")}</div>
</header>
<h2>${L.profile}</h2><p class="summary">${esc(r.summary)}</p>
<h2>${L.experience}</h2>
${r.experience.map(x => `<div class="item"><div class="head"><span><b>${esc(x.role)}</b> · ${esc(x.company)}</span><span class="when">${esc(x.period)}</span></div><div class="sub">${esc(x.place)}</div><ul>${x.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul></div>`).join("")}
<h2>${L.education}</h2>
${r.education.map(e => `<div class="item"><div class="head"><span><b>${esc(e.school)}</b> · ${esc(e.degree)}</span><span class="when">${esc(e.period)}</span></div><div class="sub">${esc(e.place)}</div></div>`).join("")}
<h2>${L.projects}</h2>
<div>${r.projects.map(p => `<div class="item proj"><b>${p.link ? `<a href="${p.link}">${esc(p.name)}</a>` : esc(p.name)}</b> — ${esc(p.text)}</div>`).join("")}</div>
<h2>${L.skills}</h2>
<div class="skills">${r.skills.map(s => `<div><b>${esc(s.group)}:</b> ${s.items.map(esc).join(", ")}</div>`).join("")}</div>
<div class="two">
  <div><h2>${esc(L.awards)}</h2><ul>${r.awards.map(a => `<li>${esc(a)}</li>`).join("")}</ul></div>
  <div><h2>${L.languages}</h2>${r.languages.map(l => `<div><b>${esc(l.name)}</b>: ${esc(l.level)}</div>`).join("")}</div>
</div>
</body></html>`;

const b = await puppeteer.launch({ executablePath: process.env.CHROME || "/usr/bin/google-chrome-stable", headless: true, args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setContent(html, { waitUntil: "networkidle0" });
const out = path.join(ROOT, "src/Assets", file);
await p.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
await b.close();
console.log("CV yazıldı:", out);
}
