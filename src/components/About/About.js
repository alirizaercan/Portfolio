import React from "react";
import GitHubCalendar from "react-github-calendar";
import { usePrefs } from "../../prefs";
import resume from "../../data/resume";
import { SectionHead } from "../ui";
import askMoji from "../../Assets/knowhoim-removebg-preview.png";

const BIO = {
  en: [
    "I'm a Data Scientist and Software Developer, and a Computer Engineering graduate of KTO Karatay University (GPA 3.78/4.00).",
    "I work as an R&D engineer at Autodidactic Technologies, where I build a real-time industrial quality-analytics platform end to end: sensor-data ingestion and time-series storage on PostgreSQL / TimescaleDB, analysis services in FastAPI and interactive measurement dashboards in Vue 3. In parallel I work on a TÜBİTAK-funded project on LLM-guided reinforcement learning, generating rewards with LLMs and fine-tuning Llama 3 and Qwen 2.5.",
    "Before that I was a Data Science & Software Developer intern at Mind in Blue in Gdańsk, a Data Scientist intern at HAVELSAN working on Turkish NER and FastAPI services, and a Software Developer intern at MetalMaker 3D in Kraków. I also spent a semester at Politechnika Bydgoska as an Erasmus+ student.",
    "My graduation project TYFOR is a football analytics platform covering 50+ clubs and 1,500+ player profiles, and our team took 2nd place at TEKNOFEST 2024 with a real-time public-transport occupancy prediction system.",
  ],
  tr: [
    "Veri bilimci ve yazılım geliştiriciyim; KTO Karatay Üniversitesi Bilgisayar Mühendisliği bölümünden 3.78/4.00 ortalamayla mezun oldum.",
    "Autodidactic Technologies'te Ar-Ge mühendisi olarak gerçek zamanlı bir endüstriyel kalite analitiği platformunu uçtan uca geliştiriyorum: PostgreSQL / TimescaleDB üzerinde sensör verisi alımı ve zaman serisi depolama, FastAPI ile analiz servisleri ve Vue 3 ile etkileşimli ölçüm panoları. Paralelde TÜBİTAK destekli bir projede LLM yönlendirmeli pekiştirmeli öğrenme üzerine çalışıyor, LLM'lerle ödül üretiyor ve Llama 3 ile Qwen 2.5'e ince ayar yapıyorum.",
    "Öncesinde Gdańsk'ta Mind in Blue'da veri bilimi ve yazılım geliştirici stajyeri, HAVELSAN'da Türkçe NER ve FastAPI servisleri üzerinde veri bilimci stajyeri ve Kraków'da MetalMaker 3D'de yazılım geliştirici stajyeri olarak çalıştım. Erasmus+ ile bir dönem Politechnika Bydgoska'da okudum.",
    "Bitirme projem TYFOR, 50+ kulüp ve 1.500+ oyuncu profilini kapsayan bir futbol analitiği platformu; ekibimizle gerçek zamanlı toplu taşıma doluluk tahmini sistemiyle TEKNOFEST 2024'te ikinci olduk.",
  ],
};

const COMPETENCIES = [
  { en: ["Data science & ML", "Predictive modelling, time-series forecasting, NLP; scikit-learn, PyTorch, TensorFlow, Hugging Face."], tr: ["Veri bilimi & ML", "Tahmine dayalı modelleme, zaman serisi tahmini, NLP; scikit-learn, PyTorch, TensorFlow, Hugging Face."] },
  { en: ["Time-series & sensor analytics", "TimescaleDB continuous aggregates, streaming and batch processing, quality analytics."], tr: ["Zaman serisi & sensör analitiği", "TimescaleDB continuous aggregate'leri, akış ve toplu işleme, kalite analitiği."] },
  { en: ["LLMs & reinforcement learning", "Reward generation with LLMs, fine-tuning with Unsloth (Llama 3, Qwen 2.5), Ollama, Gymnasium."], tr: ["LLM & pekiştirmeli öğrenme", "LLM ile ödül üretimi, Unsloth ile ince ayar (Llama 3, Qwen 2.5), Ollama, Gymnasium."] },
  { en: ["Full-stack development", "FastAPI, Flask, Vue 3, React, Next.js, Konva, Keycloak, Redis, Docker."], tr: ["Full-stack geliştirme", "FastAPI, Flask, Vue 3, React, Next.js, Konva, Keycloak, Redis, Docker."] },
  { en: ["Computer vision", "YOLOv8, object detection, real-time occupancy prediction."], tr: ["Bilgisayarlı görü", "YOLOv8, nesne tespiti, gerçek zamanlı doluluk tahmini."] },
];

function About() {
  const { t, tx, lang, theme } = usePrefs();
  const r = resume[lang];
  return (
    <main id="main" className="page">
      <div className="wrap">
        <header className="page-head page-head--art">
          <div>
            <p className="kicker">{t("about_title")}</p>
            <h1 className="h1">{t("about_lead")}</h1>
          </div>
          <div className="about-moji" aria-hidden="true">
            <img className="moji" src={askMoji} alt="" width="398" height="398" />
          </div>
        </header>

        <div className="about-grid">
          <div className="prose">
            {BIO[lang].map((p) => <p key={p}>{p}</p>)}
          </div>
          <aside className="facts">
            <dl>
              <div><dt>{lang === "tr" ? "Şu an" : "Now"}</dt><dd>{r.experience[0].role}<br /><span className="muted">{r.experience[0].company}</span></dd></div>
              <div><dt>{t("education")}</dt><dd>{r.education[0].degree}<br /><span className="muted">{r.education[0].school}</span></dd></div>
              <div><dt>{t("languages")}</dt><dd>{r.languages.map((l) => `${l.name} · ${l.level}`).join(" — ")}</dd></div>
              <div><dt>{lang === "tr" ? "Konum" : "Location"}</dt><dd>{r.location}</dd></div>
            </dl>
          </aside>
        </div>

        <section className="section">
          <SectionHead n="01" title={t("competencies")} />
          <div className="comp-grid">
            {COMPETENCIES.map((c) => {
              const [h, d] = tx(c);
              return <article key={c.en[0]} className="comp"><h3>{h}</h3><p>{d}</p></article>;
            })}
          </div>
        </section>

        <section className="section">
          <SectionHead n="02" title={t("achievements")} />
          <ul className="awards">
            {r.awards.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </section>

        <section className="section">
          <SectionHead n="03" title={t("skills_title")} />
          <div className="skill-table">
            {r.skills.map((s) => (
              <div key={s.group} className="skill-row">
                <h3>{s.group}</h3>
                <ul className="chips">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHead n="04" title={t("github_title")} sub={t("github_note")} />
          <div className="gh-cal">
            <GitHubCalendar
              username="alirizaercan"
              key={theme}
              theme={theme === "dark"
                ? { level0: "#1c1f29", level1: "#3b2f6b", level2: "#5b46a3", level3: "#8467d8", level4: "#b9a2ff" }
                : { level0: "#ebe8f1", level1: "#cbbcf2", level2: "#a68bec", level3: "#7c5cd6", level4: "#5b3cb4" }}
              blockSize={12}
              blockMargin={4}
              fontSize={13}
              labels={lang === "tr" ? {
                months: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                totalCount: "{{year}} yılında {{count}} katkı",
                legend: { less: "Az", more: "Çok" },
              } : undefined}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
