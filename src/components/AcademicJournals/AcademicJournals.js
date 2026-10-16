import React from "react";
import { FiFileText } from "react-icons/fi";
import { usePrefs } from "../../prefs";
import journalImage from "../../Assets/Projects/journal_image.png";

const PAPER = {
  title: {
    en: "Comparative Evaluation of Deep Learning and Shallow Learning Classification Algorithms on Medical Datasets",
    tr: "Tıbbi Veri Setlerinde Derin Öğrenme ve Sığ Öğrenme Sınıflandırma Algoritmalarının Karşılaştırmalı Değerlendirmesi",
  },
  text: {
    en: "Compares the effectiveness of deep learning and classical (shallow) machine-learning classifiers on medical datasets, focusing on accuracy and performance differences across model families.",
    tr: "Tıbbi veri setlerinde derin öğrenme ile klasik (sığ) makine öğrenmesi sınıflandırıcılarının etkinliğini karşılaştırır; model aileleri arasındaki doğruluk ve performans farklarına odaklanır.",
  },
  tags: ["Deep learning", "Classification", "Medical data"],
};

function AcademicJournals() {
  const { t, tx } = usePrefs();
  return (
    <main id="main" className="page">
      <div className="wrap">
        <header className="page-head">
          <p className="kicker">{t("research_title")}</p>
          <h1 className="h1">{t("research_lead")}</h1>
        </header>
        <article className="paper">
          <img src={journalImage} alt="" loading="lazy" />
          <div>
            <p className="pcard-badge"><FiFileText aria-hidden="true" /> {t("in_prep")}</p>
            <h2 className="paper-title">{tx(PAPER.title)}</h2>
            <p className="pcard-text">{tx(PAPER.text)}</p>
            <ul className="chips">{PAPER.tags.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </article>
      </div>
    </main>
  );
}

export default AcademicJournals;
