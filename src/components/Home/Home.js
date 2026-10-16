import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaKaggle } from "react-icons/fa";
import { usePrefs } from "../../prefs";
import resume from "../../data/resume";
import projects from "../../data/projects";
import { SectionHead, ProjectCard, CopyEmail, Signal } from "../ui";
import cvEn from "../../Assets/Ali_Riza_Ercan_Resume_2026.pdf";
import cvTr from "../../Assets/Ali_Riza_Ercan_Ozgecmis_2026.pdf";

const NOW = [
  {
    tag: { en: "Industry · Autodidactic Technologies", tr: "Sektör · Autodidactic Technologies" },
    title: { en: "Industrial quality analytics", tr: "Endüstriyel kalite analitiği" },
    text: {
      en: "Live sensor data from manufacturing lines turned into quality insight: ingestion, TimescaleDB analytics, FastAPI services and Vue 3 dashboards.",
      tr: "Üretim hatlarından gelen canlı sensör verisini kalite içgörüsüne dönüştürmek: veri alımı, TimescaleDB analitiği, FastAPI servisleri ve Vue 3 panoları.",
    },
  },
  {
    tag: { en: "R&D · TÜBİTAK-funded", tr: "Ar-Ge · TÜBİTAK destekli" },
    title: { en: "LLM-guided reinforcement learning", tr: "LLM yönlendirmeli pekiştirmeli öğrenme" },
    text: {
      en: "LLM-generated reward functions for simulated agents, domain fine-tuning of Llama 3 and Qwen 2.5, and a dogfight simulation sandbox.",
      tr: "Simüle ajanlar için LLM ile üretilen ödül fonksiyonları, Llama 3 ve Qwen 2.5 alan ince ayarı ve bir dogfight simülasyon ortamı.",
    },
  },
  {
    tag: { en: "Side project", tr: "Kişisel proje" },
    title: { en: "Miss Minutes", tr: "Miss Minutes" },
    text: {
      en: "A voice-first personal command center in Next.js with an LLM assistant that uses tools over my own data and Google integrations.",
      tr: "Kendi verilerim üzerinde araç kullanan bir LLM asistanı ve Google entegrasyonlarıyla Next.js'te sesli kişisel komuta merkezi.",
    },
  },
];

function Home() {
  const { t, tx, lang } = usePrefs();
  const r = resume[lang];
  const cv = lang === "tr" ? cvTr : cvEn;
  const featured = projects.filter((p) => p.featured);
  const stats = [
    ["3.78", t("stat_gpa")],
    ["2nd", t("stat_tf"), lang === "tr" ? "2." : "2nd"],
    ["325", t("stat_commits")],
    ["115", t("stat_prs")],
  ];

  return (
    <main id="main">
      {/* hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker"><span className="dot" aria-hidden="true" />{t("hero_kicker")}</p>
            <h1 className="display">Ali Rıza Ercan</h1>
            <p className="hero-role">{t("hero_title")}</p>
            <p className="lead">{t("hero_lead")}</p>
            <div className="cta-row">
              <Link to="/project" className="btn btn-primary">{t("cta_projects")} <FiArrowRight aria-hidden="true" /></Link>
              <a href={cv} className="btn" download={lang === "tr" ? "Ali_Riza_Ercan_Ozgecmis.pdf" : "Ali_Riza_Ercan_Resume.pdf"}><FiDownload aria-hidden="true" /> {t("cta_cv")}</a>
            </div>
            <div className="hero-meta">
              <span><FiMapPin aria-hidden="true" /> {t("based")}</span>
              <span className="hero-social">
                <a href="https://github.com/alirizaercan" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/alirizaercann/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                <a href="https://www.kaggle.com/alirizaercan" target="_blank" rel="noreferrer" aria-label="Kaggle"><FaKaggle /></a>
              </span>
            </div>
          </div>
          <figure className="hero-figure">
            <div className="fig-head">
              <span className="fig-title">stream_07 · sensor_value</span>
              <span className="fig-live"><span className="dot" aria-hidden="true" /> live</span>
            </div>
            <Signal />
          </figure>
        </div>

        <div className="wrap">
          <dl className="stats">
            {stats.map(([v, label, shown]) => (
              <div key={label} className="stat">
                <dt>{label}</dt>
                <dd>{shown || v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* now */}
      <section className="section">
        <div className="wrap">
          <SectionHead n="01" title={t("now_title")} sub={t("now_sub")} />
          <div className="now-grid">
            {NOW.map((x) => (
              <article key={x.title.en} className="now-card">
                <p className="now-tag">{tx(x.tag)}</p>
                <h3>{tx(x.title)}</h3>
                <p>{tx(x.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* experience */}
      <section className="section">
        <div className="wrap">
          <SectionHead n="02" title={t("exp_title")} action={<Link to="/resume" className="link-arrow">{t("exp_all")} <FiArrowRight aria-hidden="true" /></Link>} />
          <ol className="xp">
            {r.experience.map((x) => (
              <li key={x.company + x.period}>
                <span className="xp-when">{x.period}</span>
                <div>
                  <h3 className="xp-role">{x.role}</h3>
                  <p className="xp-org">{x.company} · {x.place}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* work */}
      <section className="section">
        <div className="wrap">
          <SectionHead n="03" title={t("work_title")} action={<Link to="/project" className="link-arrow">{t("work_all")} <FiArrowRight aria-hidden="true" /></Link>} />
          <div className="pgrid">
            {featured.map((p) => <ProjectCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="section">
        <div className="wrap">
          <div className="contact">
            <div>
              <h2 className="h2">{t("contact_title")}</h2>
              <p className="sec-sub">{t("contact_text")}</p>
            </div>
            <div className="contact-actions">
              <CopyEmail />
              <a href="https://www.linkedin.com/in/alirizaercann/" target="_blank" rel="noreferrer" className="btn"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
