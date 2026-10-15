import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Ali_Riza_Ercan_Resume_2026.pdf";
import resume from "../../data/resume";
import { AiOutlineDownload, AiOutlineMail, AiOutlinePhone, AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import { FaLinkedinIn, FaKaggle } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFileEarmarkPdf, BsPersonVcard } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const ICON = { email: AiOutlineMail, phone: AiOutlinePhone, linkedin: FaLinkedinIn, github: AiFillGithub, kaggle: FaKaggle, web: AiOutlineGlobal };

function Section({ title, children }) {
  return (
    <section className="rz-section">
      <h2 className="rz-h2">{title}</h2>
      {children}
    </section>
  );
}

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [view, setView] = useState("web");

  useEffect(() => {
    const f = () => setWidth(window.innerWidth);
    f(); window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);

  return (
    <Container fluid className="resume-section rz">
      <Particle />
      <Container className="rz-wrap">
        {/* header */}
        <header className="rz-head">
          <div className="rz-id">
            <h1 className="rz-name">{resume.name}</h1>
            <p className="rz-title">{resume.title}</p>
            <p className="rz-loc"><HiOutlineLocationMarker /> {resume.location}</p>
          </div>
          <div className="rz-actions">
            <a className="rz-btn rz-btn-primary" href={pdf} download="Ali_Riza_Ercan_Resume.pdf"><AiOutlineDownload /> Download PDF</a>
            <div className="rz-tabs" role="tablist" aria-label="Resume view">
              <button role="tab" aria-selected={view === "web"} className={view === "web" ? "on" : ""} onClick={() => setView("web")}><BsPersonVcard /> Resume</button>
              <button role="tab" aria-selected={view === "pdf"} className={view === "pdf" ? "on" : ""} onClick={() => setView("pdf")}><BsFileEarmarkPdf /> PDF</button>
            </div>
          </div>
          <ul className="rz-contacts">
            {resume.contacts.map((c) => {
              const I = ICON[c.kind];
              return (
                <li key={c.kind}>
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><I /> {c.label}</a>
                </li>
              );
            })}
          </ul>
        </header>

        {view === "pdf" ? (
          <div className="rz-pdf">
            <Document file={pdf} className="d-flex flex-column align-items-center" onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
              {[...Array(numPages).keys()].map((page) => (
                <Page key={page} pageNumber={page + 1} width={Math.min(900, width - 48)} renderTextLayer={false} className="rz-pdf-page" />
              ))}
            </Document>
          </div>
        ) : (
          <div className="rz-grid">
            <main>
              <Section title="Profile">
                <p className="rz-summary">{resume.summary}</p>
              </Section>

              <Section title="Experience">
                <ol className="rz-timeline">
                  {resume.experience.map((x) => (
                    <li key={x.company + x.period}>
                      <div className="rz-row">
                        <div>
                          <h3 className="rz-role">{x.role}</h3>
                          <p className="rz-org">{x.company} · <span>{x.place}</span></p>
                        </div>
                        <span className="rz-period">{x.period}</span>
                      </div>
                      <ul className="rz-bullets">
                        {x.bullets.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    </li>
                  ))}
                </ol>
              </Section>

              <Section title="Selected projects">
                <div className="rz-projects">
                  {resume.projects.map((p) => (
                    <div key={p.name} className="rz-project">
                      <h3>{p.link ? <a href={p.link} target="_blank" rel="noreferrer">{p.name} ↗</a> : p.name}</h3>
                      <p>{p.text}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </main>

            <aside>
              <Section title="Education">
                {resume.education.map((e) => (
                  <div key={e.school} className="rz-edu">
                    <h3>{e.school}</h3>
                    <p>{e.degree}</p>
                    <p className="rz-muted">{e.place} · {e.period}</p>
                  </div>
                ))}
              </Section>

              <Section title="Skills">
                {resume.skills.map((s) => (
                  <div key={s.group} className="rz-skill">
                    <h4>{s.group}</h4>
                    <div className="rz-chips">{s.items.map((i) => <span key={i}>{i}</span>)}</div>
                  </div>
                ))}
              </Section>

              <Section title="Awards & certificates">
                <ul className="rz-list">{resume.awards.map((a) => <li key={a}>{a}</li>)}</ul>
              </Section>

              <Section title="Languages">
                {resume.languages.map((l) => (
                  <div key={l.name} className="rz-lang"><b>{l.name}</b><span>{l.level}</span></div>
                ))}
              </Section>
            </aside>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default ResumeNew;
