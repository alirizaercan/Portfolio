// Language (EN/TR) and theme (light/dark) preferences, shared through context.
// The initial theme is set before paint by the inline script in public/index.html.
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

const STR = {
  en: {
    nav_home: "Home", nav_about: "About", nav_projects: "Projects", nav_resume: "Resume", nav_research: "Research", nav_blog: "Blog",
    menu: "Menu", close: "Close", theme_to_dark: "Switch to dark theme", theme_to_light: "Switch to light theme", lang_label: "Language",
    skip: "Skip to content",
    hero_kicker: "R&D Engineer · Autodidactic Technologies",
    hero_title: "Data Scientist & Software Developer",
    hero_lead: "I build data products end to end: from sensor and time-series pipelines and the models on top of them to the interfaces people actually use.",
    cta_projects: "View projects", cta_cv: "Download CV", cta_contact: "Get in touch",
    based: "Konya, Türkiye",
    stat_gpa: "GPA, Computer Engineering", stat_tf: "TEKNOFEST 2024, Smart Transportation", stat_commits: "commits in the last 12 months", stat_prs: "merged pull requests", stat_kaggle: "Kaggle",
    now_title: "What I'm working on", now_sub: "Current focus areas, in industry and on my own time.",
    exp_title: "Experience", exp_all: "Full resume",
    work_title: "Selected work", work_all: "All projects",
    contact_title: "Let's build something with data.", contact_text: "I'm happy to talk about data science, time-series analytics, LLM tooling or full-stack product work.",
    copy: "Copy", copied: "Copied",
    about_title: "About", about_lead: "Data scientist and software developer with an engineer's bias for shipping.",
    competencies: "Core competencies", achievements: "Highlights", skills_title: "Skills & tools", github_title: "GitHub activity",
    github_note: "Most of my day-to-day work lives in private company repositories, so this shows only part of the picture.",
    proj_title: "Projects", proj_lead: "Industry R&D first, then personal, academic and award-winning work.",
    f_all: "All", f_industry: "Industry", f_ai: "AI & data", f_web: "Web & product",
    confidential: "Confidential", private: "Private", code: "Code", demo: "Live",
    resume_title: "Resume", view_web: "Resume", view_pdf: "PDF",
    profile: "Profile", experience: "Experience", projects: "Selected projects", education: "Education", skills: "Skills", awards: "Awards & certificates", languages: "Languages",
    research_title: "Research", research_lead: "Academic writing in progress.", in_prep: "In preparation for publication",
    footer_built: "Designed and built by Ali Rıza Ercan.",
    pdf_loading: "Loading PDF…",
  },
  tr: {
    nav_home: "Ana sayfa", nav_about: "Hakkımda", nav_projects: "Projeler", nav_resume: "Özgeçmiş", nav_research: "Araştırma", nav_blog: "Blog",
    menu: "Menü", close: "Kapat", theme_to_dark: "Koyu temaya geç", theme_to_light: "Açık temaya geç", lang_label: "Dil",
    skip: "İçeriğe geç",
    hero_kicker: "Ar-Ge Mühendisi · Autodidactic Technologies",
    hero_title: "Veri Bilimci & Yazılım Geliştirici",
    hero_lead: "Veri ürünlerini uçtan uca geliştiriyorum: sensör ve zaman serisi veri akışlarından üzerlerindeki modellere, insanların gerçekten kullandığı arayüzlere kadar.",
    cta_projects: "Projeleri gör", cta_cv: "CV'yi indir", cta_contact: "İletişime geç",
    based: "Konya, Türkiye",
    stat_gpa: "Not ortalaması, Bilgisayar Mühendisliği", stat_tf: "TEKNOFEST 2024, Akıllı Ulaşım", stat_commits: "commit, son 12 ay", stat_prs: "birleştirilmiş pull request", stat_kaggle: "Kaggle",
    now_title: "Şu an üzerinde çalıştıklarım", now_sub: "Sektörde ve kendi zamanımda odaklandığım alanlar.",
    exp_title: "Deneyim", exp_all: "Tüm özgeçmiş",
    work_title: "Öne çıkan işler", work_all: "Tüm projeler",
    contact_title: "Veriyle bir şeyler inşa edelim.", contact_text: "Veri bilimi, zaman serisi analitiği, LLM araçları ya da full-stack ürün geliştirme üzerine konuşmaktan memnuniyet duyarım.",
    copy: "Kopyala", copied: "Kopyalandı",
    about_title: "Hakkımda", about_lead: "Ürünü sahaya çıkarmayı seven bir mühendis gözüyle veri bilimci ve yazılım geliştirici.",
    competencies: "Uzmanlık alanları", achievements: "Öne çıkanlar", skills_title: "Yetenekler ve araçlar", github_title: "GitHub aktivitesi",
    github_note: "Günlük işimin çoğu şirketin özel depolarında; bu grafik tablonun yalnızca bir kısmını gösteriyor.",
    proj_title: "Projeler", proj_lead: "Önce sektördeki Ar-Ge işleri, ardından kişisel, akademik ve ödüllü projeler.",
    f_all: "Tümü", f_industry: "Sektör", f_ai: "Yapay zekâ & veri", f_web: "Web & ürün",
    confidential: "Gizli", private: "Özel", code: "Kod", demo: "Canlı",
    resume_title: "Özgeçmiş", view_web: "Özgeçmiş", view_pdf: "PDF",
    profile: "Profil", experience: "Deneyim", projects: "Seçili projeler", education: "Eğitim", skills: "Yetenekler", awards: "Ödüller ve sertifikalar", languages: "Diller",
    research_title: "Araştırma", research_lead: "Süren akademik çalışmalar.", in_prep: "Yayına hazırlanıyor",
    footer_built: "Ali Rıza Ercan tarafından tasarlandı ve geliştirildi.",
    pdf_loading: "PDF yükleniyor…",
  },
};

const read = (k, f) => { try { return localStorage.getItem(k) || f; } catch { return f; } };
const write = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

const Ctx = createContext(null);

export function PrefsProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = read("lang", "");
    if (saved === "en" || saved === "tr") return saved;
    return typeof navigator !== "undefined" && /^tr\b/i.test(navigator.language || "") ? "tr" : "en";
  });
  const [theme, setThemeState] = useState(() => document.documentElement.getAttribute("data-theme") || "dark");

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", theme === "dark" ? "#0d0f14" : "#f6f5f2");
  }, [theme]);

  const setLang = useCallback(l => { setLangState(l); write("lang", l); }, []);
  const toggleTheme = useCallback(() => setThemeState(t => { const n = t === "dark" ? "light" : "dark"; write("theme", n); return n; }), []);
  const t = useCallback(k => STR[lang][k] ?? STR.en[k] ?? k, [lang]);
  // pick a value from a { en, tr } object (or return plain values unchanged)
  const tx = useCallback(v => (v && typeof v === "object" && "en" in v ? v[lang] ?? v.en : v), [lang]);

  return <Ctx.Provider value={{ lang, setLang, theme, toggleTheme, t, tx }}>{children}</Ctx.Provider>;
}

export const usePrefs = () => useContext(Ctx);
