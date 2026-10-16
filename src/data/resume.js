// Single source for the resume: the Resume page renders it and scripts/build-resume.mjs turns it into the PDF.
// Keep company-internal product names out of here (public document).

const en = {
  name: "Ali Rıza Ercan",
  title: "Data Scientist & Software Developer",
  location: "Konya, Türkiye",
  contacts: [
    { label: "alirizaercan1@gmail.com", href: "mailto:alirizaercan1@gmail.com", kind: "email" },
    { label: "+90 534 240 2651", href: "tel:+905342402651", kind: "phone" },
    { label: "linkedin.com/in/alirizaercann", href: "https://www.linkedin.com/in/alirizaercann/", kind: "linkedin" },
    { label: "github.com/alirizaercan", href: "https://github.com/alirizaercan", kind: "github" },
    { label: "kaggle.com/alirizaercan", href: "https://www.kaggle.com/alirizaercan", kind: "kaggle" },
    { label: "alirizaercan.vercel.app", href: "https://alirizaercan.vercel.app", kind: "web" },
  ],
  summary:
    "Data Scientist and Software Developer working as an R&D engineer at Autodidactic Technologies, building real-time industrial quality analytics end to end and researching LLM-guided reinforcement learning in a TÜBİTAK-funded project. Computer Engineering graduate (GPA 3.78/4.00) with international experience in Poland and a TEKNOFEST 2024 runner-up.",
  experience: [
    {
      company: "Autodidactic Technologies",
      role: "R&D Engineer · Data Science & Software",
      place: "Konya, Türkiye",
      period: "Jan 2026 – Present",
      bullets: [
        "Build a production platform that turns live sensor data from manufacturing lines into quality insight: real-time ingestion, time-series storage on PostgreSQL/TimescaleDB, batch processing and analysis services in FastAPI, and interactive measurement dashboards in Vue 3.",
        "Designed scalable analytics on TimescaleDB continuous aggregates and secured the interfaces with Keycloak role-based access; 325 commits and 115 merged pull requests in the last 12 months.",
        "TÜBİTAK-funded R&D: LLM-generated reward functions for simulated agents (Qwen 2.5 via Ollama), domain fine-tuning of Llama 3 and Qwen 2.5 with Unsloth, and a dogfight sandbox simulation environment.",
      ],
    },
    {
      company: "Mind in Blue",
      role: "Data Science & Software Developer Intern",
      place: "Gdańsk, Poland",
      period: "Jun 2025 – Jan 2026",
      bullets: [
        "Built a responsive, multilingual React web application with RESTful APIs, improving engagement and site performance.",
        "Automated data pipelines and applied statistical and predictive models to marketing KPIs for data-driven decisions.",
      ],
    },
    {
      company: "HAVELSAN",
      role: "Data Scientist Intern",
      place: "Ankara, Türkiye",
      period: "Jul 2024 – Aug 2024",
      bullets: [
        "Benchmarked Turkish NER and NLP models with scikit-learn and Hugging Face Transformers; the report guided the next project phases.",
        "Developed a FastAPI microservice and Python dashboards for text preprocessing, model serving and visualisation.",
      ],
    },
    {
      company: "KTO Karatay University · Technology Transfer Office",
      role: "Assistant Student",
      place: "Konya, Türkiye",
      period: "Dec 2023 – Jun 2024",
      bullets: ["Analysed and reported patent and research-project data with Excel and Python to support strategic decisions."],
    },
    {
      company: "MetalMaker 3D",
      role: "Software Developer Intern",
      place: "Kraków, Poland",
      period: "Jul 2023 – Oct 2023",
      bullets: [
        "Developed Python GTK applications on Raspberry Pi for manufacturing control, working with UI/UX designers in Figma and Glade.",
        "Refactored React and Supabase modules to streamline data flow and enable scalable deployment.",
      ],
    },
  ],
  education: [
    { school: "KTO Karatay University", degree: "B.Sc. Computer Engineering · GPA 3.78/4.00", place: "Konya, Türkiye", period: "Sep 2020 – Jun 2025" },
    { school: "Politechnika Bydgoska", degree: "Erasmus+ exchange, Computer Science · GPA 3.96/4.00", place: "Bydgoszcz, Poland", period: "Oct 2022 – Mar 2023" },
    { school: "AI and Technology Academy", degree: "Data Science Scholar", place: "Online", period: "Jan 2025 – Aug 2025" },
  ],
  projects: [
    { name: "TYFOR", link: "https://tyfor.online", text: "Football analytics platform with 50+ clubs and 1,500+ player profiles; computer-vision (YOLOv8) scouting network; React, Flask, PostgreSQL, Docker." },
    { name: "No One Waits", link: "https://beklemesinkimse.com", text: "Real-time public-transport occupancy prediction with computer vision; TEKNOFEST 2024, 2nd place." },
    { name: "Miss Minutes", text: "Voice-first personal command center in Next.js: LLM tool use, streaming TTS, Google OAuth integrations, listening analytics." },
    { name: "Salifort Motors HR Attrition", link: "https://kaggle.com/code/alirizaercan/salifort-motors-google-capstone-project", text: "Random Forest model with 97.8% accuracy identifying key retention drivers." },
    { name: "Store Sales Forecasting", link: "https://kaggle.com/code/alirizaercan/store-sales-time-series-data-science-technique", text: "LightGBM forecasting over 3M+ rows for 54 stores (0.4725 RMSLE)." },
    { name: "PassoAssist", link: "https://github.com/alirizaercan/PassoAssist", text: "BERT-based complaint classification on scraped customer feedback, served with Flask." },
  ],
  skills: [
    { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "C"] },
    { group: "Data science & AI", items: ["scikit-learn", "PyTorch", "TensorFlow", "Hugging Face", "LightGBM", "YOLOv8", "Ollama", "Unsloth"] },
    { group: "Back end & data", items: ["FastAPI", "Flask", "SQLAlchemy", "PostgreSQL", "TimescaleDB", "MariaDB", "Redis", "BigQuery"] },
    { group: "Front end", items: ["Vue 3", "React", "Next.js", "Konva", "Tailwind"] },
    { group: "Tools", items: ["Docker", "Keycloak", "Git", "Linux", "Google Cloud", "Vercel"] },
  ],
  awards: [
    "TEKNOFEST 2024 Smart Transportation, 2nd place (No One Waits)",
    "TEKNOFEST 2023, 4th place (No Standing Passengers)",
    "Google Advanced Data Analytics Certificate (Coursera, 2025)",
    "Kaggle Expert · GDSC KTO Karatay Technology Core Team Lead (2024)",
  ],
  languages: [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "B2 · fluent working proficiency" },
  ],
};

const tr = {
  name: "Ali Rıza Ercan",
  title: "Veri Bilimci & Yazılım Geliştirici",
  location: "Konya, Türkiye",
  contacts: en.contacts,
  summary:
    "Autodidactic Technologies'te Ar-Ge mühendisi olarak çalışan veri bilimci ve yazılım geliştirici; gerçek zamanlı endüstriyel kalite analitiğini uçtan uca geliştiriyor ve TÜBİTAK destekli bir projede LLM yönlendirmeli pekiştirmeli öğrenme üzerine araştırma yapıyor. Bilgisayar Mühendisliği mezunu (GNO 3.78/4.00), Polonya'da uluslararası deneyim, TEKNOFEST 2024 ikincisi.",
  experience: [
    {
      company: "Autodidactic Technologies",
      role: "Ar-Ge Mühendisi · Veri Bilimi & Yazılım",
      place: "Konya, Türkiye",
      period: "Oca 2026 – Günümüz",
      bullets: [
        "Üretim hatlarından gelen canlı sensör verisini kalite içgörüsüne dönüştüren bir üretim platformu geliştiriyorum: gerçek zamanlı veri alımı, PostgreSQL/TimescaleDB üzerinde zaman serisi depolama, FastAPI ile toplu işleme ve analiz servisleri, Vue 3 ile etkileşimli ölçüm panoları.",
        "TimescaleDB continuous aggregate'leri üzerinde ölçeklenebilir analitik tasarladım ve arayüzleri Keycloak rol tabanlı erişimle güvenceye aldım; son 12 ayda 325 commit ve 115 birleştirilmiş pull request.",
        "TÜBİTAK destekli Ar-Ge: simüle ajanlar için LLM ile üretilen ödül fonksiyonları (Ollama üzerinde Qwen 2.5), Unsloth ile Llama 3 ve Qwen 2.5 alan ince ayarı, dogfight sandbox simülasyon ortamı.",
      ],
    },
    {
      company: "Mind in Blue",
      role: "Veri Bilimi & Yazılım Geliştirici Stajyeri",
      place: "Gdańsk, Polonya",
      period: "Haz 2025 – Oca 2026",
      bullets: [
        "RESTful API'lerle duyarlı, çok dilli bir React web uygulaması geliştirerek etkileşimi ve site performansını artırdım.",
        "Veri akışlarını otomatikleştirdim; pazarlama KPI'larına istatistiksel ve tahmine dayalı modeller uygulayarak veriye dayalı kararları destekledim.",
      ],
    },
    {
      company: "HAVELSAN",
      role: "Veri Bilimci Stajyeri",
      place: "Ankara, Türkiye",
      period: "Tem 2024 – Ağu 2024",
      bullets: [
        "Türkçe NER ve NLP modellerini scikit-learn ve Hugging Face Transformers ile karşılaştırdım; hazırladığım rapor projenin sonraki aşamalarına yön verdi.",
        "Metin ön işleme, model sunumu ve görselleştirme için bir FastAPI mikroservisi ve Python panoları geliştirdim.",
      ],
    },
    {
      company: "KTO Karatay Üniversitesi · Teknoloji Transfer Ofisi",
      role: "Öğrenci Asistan",
      place: "Konya, Türkiye",
      period: "Ara 2023 – Haz 2024",
      bullets: ["Stratejik kararlara destek için patent ve araştırma projesi verilerini Excel ve Python ile analiz edip raporladım."],
    },
    {
      company: "MetalMaker 3D",
      role: "Yazılım Geliştirici Stajyeri",
      place: "Kraków, Polonya",
      period: "Tem 2023 – Eki 2023",
      bullets: [
        "Üretim kontrolü için Raspberry Pi üzerinde Python GTK uygulamaları geliştirdim; UI/UX tasarımcılarıyla Figma ve Glade üzerinde çalıştım.",
        "Veri akışını sadeleştirmek ve ölçeklenebilir dağıtımı mümkün kılmak için React ve Supabase modüllerini yeniden düzenledim.",
      ],
    },
  ],
  education: [
    { school: "KTO Karatay Üniversitesi", degree: "Bilgisayar Mühendisliği Lisans · GNO 3.78/4.00", place: "Konya, Türkiye", period: "Eyl 2020 – Haz 2025" },
    { school: "Politechnika Bydgoska", degree: "Erasmus+ değişim, Bilgisayar Bilimi · GNO 3.96/4.00", place: "Bydgoszcz, Polonya", period: "Eki 2022 – Mar 2023" },
    { school: "Yapay Zekâ ve Teknoloji Akademisi", degree: "Veri Bilimi Bursiyeri", place: "Çevrim içi", period: "Oca 2025 – Ağu 2025" },
  ],
  projects: [
    { name: "TYFOR", link: "https://tyfor.online", text: "50+ kulüp ve 1.500+ oyuncu profiliyle futbol analitiği platformu; bilgisayarlı görü (YOLOv8) tabanlı scouting ağı; React, Flask, PostgreSQL, Docker." },
    { name: "Beklemesin Kimse", link: "https://beklemesinkimse.com", text: "Bilgisayarlı görü ile toplu taşımada gerçek zamanlı doluluk tahmini; TEKNOFEST 2024 ikincilik." },
    { name: "Miss Minutes", text: "Next.js ile sesli kişisel komuta merkezi: LLM araç kullanımı, akışlı TTS, Google OAuth entegrasyonları, dinleme analitiği." },
    { name: "Salifort Motors İK Kaybı", link: "https://kaggle.com/code/alirizaercan/salifort-motors-google-capstone-project", text: "Çalışan bağlılığının temel etkenlerini belirleyen, %97,8 doğruluklu Random Forest modeli." },
    { name: "Mağaza Satış Tahmini", link: "https://kaggle.com/code/alirizaercan/store-sales-time-series-data-science-technique", text: "54 mağaza için 3M+ satır üzerinde LightGBM tahmini (0,4725 RMSLE)." },
    { name: "PassoAssist", link: "https://github.com/alirizaercan/PassoAssist", text: "Toplanan müşteri geri bildirimleri üzerinde BERT tabanlı şikâyet sınıflandırma, Flask ile sunuldu." },
  ],
  skills: [
    { group: "Diller", items: en.skills[0].items },
    { group: "Veri bilimi & YZ", items: en.skills[1].items },
    { group: "Back end & veri", items: en.skills[2].items },
    { group: "Front end", items: en.skills[3].items },
    { group: "Araçlar", items: en.skills[4].items },
  ],
  awards: [
    "TEKNOFEST 2024 Akıllı Ulaşım, ikincilik (Beklemesin Kimse)",
    "TEKNOFEST 2023, dördüncülük (No Standing Passengers)",
    "Google Advanced Data Analytics Sertifikası (Coursera, 2025)",
    "Kaggle Expert · GDSC KTO Karatay Teknoloji Ekibi Lideri (2024)",
  ],
  languages: [
    { name: "Türkçe", level: "Ana dil" },
    { name: "İngilizce", level: "B2 · akıcı iş yeterliliği" },
  ],
};

// Section headings used by the PDF builder
en.labels = { profile: "Profile", experience: "Experience", education: "Education", projects: "Selected projects", skills: "Skills", awards: "Awards & certificates", languages: "Languages" };
tr.labels = { profile: "Profil", experience: "Deneyim", education: "Eğitim", projects: "Seçili projeler", skills: "Yetenekler", awards: "Ödüller ve sertifikalar", languages: "Diller" };

const resume = { en, tr };
export default resume;
