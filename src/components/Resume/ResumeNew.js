import React, { useState, useEffect, useRef } from "react";
import { FiDownload, FiMail, FiPhone, FiGithub, FiLinkedin, FiGlobe, FiMapPin } from "react-icons/fi";
import { FaKaggle } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { usePrefs } from "../../prefs";
import resume from "../../data/resume";
import cvEn from "../../Assets/Ali_Riza_Ercan_Resume_2026.pdf";
import cvTr from "../../Assets/Ali_Riza_Ercan_Ozgecmis_2026.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

const ICON = { email: FiMail, phone: FiPhone, linkedin: FiLinkedin, github: FiGithub, kaggle: FaKaggle, web: FiGlobe };

function Block({ title, children }) {
  return (
    <section className="cv-block">
      <h2 className="cv-h">{title}</h2>
      {children}
    </section>
  );
}

function PdfView({ file, t }) {
  const box = useRef(null);
  const [w, setW] = useState(800);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    const f = () => box.current && setW(Math.min(860, box.current.clientWidth));
    f(); window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  return (
    <div className="cv-pdf" ref={box}>
      <Document file={file} loading={<p className="muted">{t("pdf_loading")}</p>} onLoadSuccess={({ numPages }) => setPages(numPages)}>
        {Array.from({ length: pages }, (_, i) => (
          <Page key={i} pageNumber={i + 1} width={w} renderTextLayer={false} className="cv-pdf-page" />
        ))}
      </Document>
    </div>
  );
}

function ResumeNew() {
  const { t, lang } = usePrefs();
  const r = resume[lang];
  const pdf = lang === "tr" ? cvTr : cvEn;
  const [view, setView] = useState("web");

  return (
    <main id="main" className="page">
      <div className="wrap cv">
        <header className="cv-head">
          <div>
            <p className="kicker">{t("resume_title")}</p>
            <h1 className="h1 cv-name">{r.name}</h1>
            <p className="cv-title">{r.title}</p>
            <p className="cv-loc"><FiMapPin aria-hidden="true" /> {r.location}</p>
          </div>
          <div className="cv-actions">
            <div className="seg seg-lg" role="tablist" aria-label={t("resume_title")}>
              <button role="tab" type="button" aria-selected={view === "web"} className={view === "web" ? "on" : ""} onClick={() => setView("web")}>{t("view_web")}</button>
              <button role="tab" type="button" aria-selected={view === "pdf"} className={view === "pdf" ? "on" : ""} onClick={() => setView("pdf")}>{t("view_pdf")}</button>
            </div>
            <a className="btn btn-primary" href={pdf} download={lang === "tr" ? "Ali_Riza_Ercan_Ozgecmis.pdf" : "Ali_Riza_Ercan_Resume.pdf"}><FiDownload aria-hidden="true" /> {t("cta_cv")}</a>
          </div>
          <ul className="cv-contacts">
            {r.contacts.map((c) => {
              const I = ICON[c.kind];
              return (
                <li key={c.kind}>
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><I aria-hidden="true" /> {c.label}</a>
                </li>
              );
            })}
          </ul>
        </header>

        {view === "pdf" ? (
          <PdfView file={pdf} t={t} />
        ) : (
          <div className="cv-grid">
            <div className="cv-main">
              <Block title={t("profile")}>
                <p className="cv-summary">{r.summary}</p>
              </Block>

              <Block title={t("experience")}>
                <ol className="cv-timeline">
                  {r.experience.map((x) => (
                    <li key={x.company + x.period}>
                      <div className="cv-row">
                        <div>
                          <h3 className="cv-role">{x.role}</h3>
                          <p className="cv-org">{x.company} · <span>{x.place}</span></p>
                        </div>
                        <span className="cv-period">{x.period}</span>
                      </div>
                      <ul className="cv-bullets">{x.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                    </li>
                  ))}
                </ol>
              </Block>

              <Block title={t("projects")}>
                <div className="cv-projects">
                  {r.projects.map((p) => (
                    <div key={p.name} className="cv-project">
                      <h3>{p.link ? <a href={p.link} target="_blank" rel="noreferrer">{p.name} ↗</a> : p.name}</h3>
                      <p>{p.text}</p>
                    </div>
                  ))}
                </div>
              </Block>
            </div>

            <aside className="cv-side">
              <Block title={t("education")}>
                {r.education.map((e) => (
                  <div key={e.school} className="cv-edu">
                    <h3>{e.school}</h3>
                    <p>{e.degree}</p>
                    <p className="muted">{e.place} · {e.period}</p>
                  </div>
                ))}
              </Block>
              <Block title={t("skills")}>
                {r.skills.map((s) => (
                  <div key={s.group} className="cv-skill">
                    <h4>{s.group}</h4>
                    <ul className="chips">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  </div>
                ))}
              </Block>
              <Block title={t("awards")}>
                <ul className="cv-list">{r.awards.map((a) => <li key={a}>{a}</li>)}</ul>
              </Block>
              <Block title={t("languages")}>
                {r.languages.map((l) => <div key={l.name} className="cv-lang"><b>{l.name}</b><span>{l.level}</span></div>)}
              </Block>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

export default ResumeNew;
