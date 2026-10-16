import React, { useMemo, useState } from "react";
import { FiArrowUpRight, FiCopy, FiCheck, FiLock, FiGithub } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";
import { usePrefs } from "../prefs";

export const EMAIL = "alirizaercan1@gmail.com";

export function SectionHead({ n, title, sub, action }) {
  return (
    <div className="sec-head">
      <div>
        {n && <p className="kicker"><span className="kicker-n">{n}</span></p>}
        <h2 className="h2">{title}</h2>
        {sub && <p className="sec-sub">{sub}</p>}
      </div>
      {action}
    </div>
  );
}

export function CopyEmail({ className = "" }) {
  const { t } = usePrefs();
  const [done, setDone] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setDone(true); setTimeout(() => setDone(false), 1600); } catch {}
  };
  return (
    <span className={`copy ${className}`}>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <button type="button" onClick={copy} aria-label={done ? t("copied") : t("copy")} title={done ? t("copied") : t("copy")}>
        {done ? <FiCheck /> : <FiCopy />}
      </button>
    </span>
  );
}

export function ProjectCard({ p, compact = false }) {
  const { t, tx } = usePrefs();
  return (
    <article className={`pcard ${compact ? "pcard-compact" : ""}`}>
      <div className="pcard-img">
        <img src={p.img} alt="" loading="lazy" />
        {p.lock && <span className="pill pill-lock"><FiLock aria-hidden="true" /> {t(p.lock)}</span>}
      </div>
      <div className="pcard-body">
        {p.badge && (
          <p className={`pcard-badge ${p.award ? "award" : ""}`}>
            {p.award && <BsTrophy aria-hidden="true" />} {tx(p.badge)}
          </p>
        )}
        <h3 className="pcard-title">{tx(p.title)}</h3>
        {!compact && <p className="pcard-text">{tx(p.text)}</p>}
        <ul className="chips" aria-label="Stack">
          {(compact ? p.tech.slice(0, 4) : p.tech).map((x) => <li key={x}>{x}</li>)}
        </ul>
        {(p.code || p.demo) && (
          <div className="pcard-links">
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">{t("demo")} <FiArrowUpRight aria-hidden="true" /></a>}
            {p.code && <a href={p.code} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> {t("code")}</a>}
          </div>
        )}
      </div>
    </article>
  );
}

/** Hero illustration: a sensor-style signal with a tolerance band and a flagged outlier,
 *  a nod to the quality-analytics work. Deterministic, so it renders the same every time. */
export function Signal() {
  const { pts, band, out } = useMemo(() => {
    let s = 7;
    const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
    const n = 64, W = 560, H = 300;
    const pts = [];
    for (let i = 0; i < n; i++) {
      const x = 20 + (i * (W - 40)) / (n - 1);
      let y = 150 + Math.sin(i / 5) * 34 + Math.sin(i / 1.7) * 9 + (rnd() - 0.5) * 18;
      if (i === 41) y = 52;
      pts.push([x, y]);
    }
    return { pts, band: [96, 206], out: pts[41], W, H };
  }, []);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  return (
    <svg className="signal" viewBox="0 0 560 300" role="img" aria-label="Time-series signal with tolerance band and a flagged outlier">
      <defs>
        <linearGradient id="sg-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity=".22" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[60, 120, 180, 240].map((y) => <line key={y} x1="20" x2="540" y1={y} y2={y} className="sg-grid" />)}
      <rect x="20" y={band[0]} width="520" height={band[1] - band[0]} className="sg-band" />
      <text x="26" y={band[0] - 8} className="sg-label">UCL</text>
      <text x="26" y={band[1] + 16} className="sg-label">LCL</text>
      <path d={`${d} L540 300 L20 300 Z`} fill="url(#sg-fill)" />
      <path d={d} className="sg-line" />
      <circle cx={out[0]} cy={out[1]} r="12" className="sg-ring" />
      <circle cx={out[0]} cy={out[1]} r="4.5" className="sg-dot" />
      <text x={out[0] + 16} y={out[1] - 8} className="sg-tag">+3.1σ</text>
    </svg>
  );
}
