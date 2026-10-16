// Project cards for the Projects page (and the "Selected work" strip on Home).
// Keep company-internal product names out of here (public site).
import industrial from "../Assets/Projects/industrial.png";
import llmrl from "../Assets/Projects/rl.png";
import missminutes from "../Assets/Projects/missminutes.png";
import mindinblue from "../Assets/Projects/mindinblue.png";
import tyfor from "../Assets/Projects/tyfor_main_page.png";
import noonewaits from "../Assets/Projects/noonewaits.png";
import salifort from "../Assets/Projects/coursera_google.jpeg";
import storesales from "../Assets/Projects/header.png";
import fifteen from "../Assets/Projects/15mincity.png";
import greencat from "../Assets/Projects/ecommerce_website.png";
import passo from "../Assets/Projects/passo.gif";

// cat: industry | ai | web   ·   lock: "confidential" | "private"
const projects = [
  {
    id: "industrial", cat: ["industry", "ai"], img: industrial, lock: "confidential", featured: true,
    title: { en: "Real-Time Industrial Quality Analytics", tr: "Gerçek Zamanlı Endüstriyel Kalite Analitiği" },
    badge: { en: "Autodidactic Technologies", tr: "Autodidactic Technologies" },
    text: {
      en: "Full-stack R&D on a production platform that turns live sensor data from manufacturing lines into quality insight: real-time ingestion and time-series storage, batch processing and analysis services, scalable analytics on TimescaleDB, interactive measurement dashboards and role-based access. 325 commits and 115 merged pull requests in the last 12 months.",
      tr: "Üretim hatlarından gelen canlı sensör verisini kalite içgörüsüne dönüştüren bir üretim platformunda full-stack Ar-Ge: gerçek zamanlı veri alımı ve zaman serisi depolama, toplu işleme ve analiz servisleri, TimescaleDB üzerinde ölçeklenebilir analitik, etkileşimli ölçüm panoları ve rol tabanlı erişim. Son 12 ayda 325 commit ve 115 birleştirilmiş pull request.",
    },
    tech: ["FastAPI", "PostgreSQL", "TimescaleDB", "MariaDB", "Redis", "Vue 3", "Konva", "Keycloak", "Docker"],
  },
  {
    id: "llmrl", cat: ["industry", "ai"], img: llmrl, lock: "private", featured: true,
    title: { en: "LLM-Guided Reinforcement Learning", tr: "LLM Yönlendirmeli Pekiştirmeli Öğrenme" },
    badge: { en: "TÜBİTAK-funded R&D", tr: "TÜBİTAK destekli Ar-Ge" },
    text: {
      en: "Using large language models to shape the behaviour of simulated agents: LLM-generated reward functions for BipedalWalker (Qwen 2.5 7B via Ollama), domain-specific fine-tuning of Llama 3 and Qwen 2.5 with Unsloth, and a dogfight sandbox simulation environment.",
      tr: "Simüle ajanların davranışını büyük dil modelleriyle şekillendirme: BipedalWalker için LLM ile üretilen ödül fonksiyonları (Ollama üzerinde Qwen 2.5 7B), Unsloth ile Llama 3 ve Qwen 2.5 alan ince ayarı ve bir dogfight sandbox simülasyon ortamı.",
    },
    tech: ["PyTorch", "Gymnasium", "Ollama", "Unsloth", "Qwen 2.5", "Llama 3"],
  },
  {
    id: "missminutes", cat: ["ai", "web"], img: missminutes, lock: "private", featured: true,
    title: { en: "Miss Minutes · Personal Command Center", tr: "Miss Minutes · Kişisel Komuta Merkezi" },
    badge: { en: "Personal project", tr: "Kişisel proje" },
    text: {
      en: "A voice-first Next.js app built around an animated mascot assistant: LLM tool use over my own data, streaming text-to-speech, a YouTube Music-style player with queue, lyrics and listening analytics, Google OAuth integrations (Calendar, Tasks, Gmail, YouTube, Drive), Trello sync and automatic work logging from git history.",
      tr: "Animasyonlu bir maskot asistan etrafında kurulu, sesli bir Next.js uygulaması: kendi verilerim üzerinde LLM araç kullanımı, akışlı metinden sese, sıra, şarkı sözü ve dinleme analitiğiyle YouTube Music tarzı çalar, Google OAuth entegrasyonları (Takvim, Görevler, Gmail, YouTube, Drive), Trello senkronu ve git geçmişinden otomatik iş kaydı.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind", "Gemini API", "Web Audio", "OAuth 2.0"],
  },
  {
    id: "tyfor", cat: ["ai", "web"], img: tyfor, demo: "https://tyfor.online",
    title: { en: "TYFOR · Football Analytics Platform", tr: "TYFOR · Futbol Analitiği Platformu" },
    badge: { en: "Graduation project", tr: "Bitirme projesi" },
    text: {
      en: "End-to-end football analytics platform covering 50+ clubs and 1,500+ player profiles: machine-learning performance analytics on PostgreSQL, a computer-vision (YOLOv8) scouting network, web scraping and predictive modelling to spot talent across Turkish and Polish leagues.",
      tr: "50+ kulüp ve 1.500+ oyuncu profilini kapsayan uçtan uca futbol analitiği platformu: PostgreSQL üzerinde makine öğrenmesiyle performans analitiği, bilgisayarlı görü (YOLOv8) tabanlı scouting ağı, Türk ve Polonya liglerinde yetenek keşfi için web kazıma ve tahmine dayalı modelleme.",
    },
    tech: ["React", "Flask", "PostgreSQL", "YOLOv8", "Docker"],
  },
  {
    id: "noonewaits", cat: ["ai"], img: noonewaits, award: true, demo: "https://beklemesinkimse.com", code: "https://github.com/INTELLIVISIONteam/teknofest_website",
    title: { en: "No One Waits", tr: "Beklemesin Kimse" },
    badge: { en: "TEKNOFEST 2024 · 2nd place", tr: "TEKNOFEST 2024 · İkincilik" },
    text: {
      en: "Real-time public-transport occupancy prediction with computer vision, serving occupancy data to riders across web and mobile through a Firebase-backed system.",
      tr: "Bilgisayarlı görü ile toplu taşımada gerçek zamanlı doluluk tahmini; doluluk verisini Firebase destekli bir sistemle web ve mobilde yolculara sunar.",
    },
    tech: ["Computer vision", "Python", "Firebase"],
  },
  {
    id: "mindinblue", cat: ["web"], img: mindinblue, demo: "https://mindinblue.vercel.app", code: "https://github.com/alirizaercan/MindinBlue",
    title: { en: "Mind in Blue · Practice Website", tr: "Mind in Blue · Kurumsal Web Sitesi" },
    badge: { en: "Internship · Gdańsk", tr: "Staj · Gdańsk" },
    text: {
      en: "Multilingual website for a Gdańsk-based counselling and psychotherapy practice: responsive React front end, language switching and contact flows, deployed on Vercel.",
      tr: "Gdańsk merkezli bir danışmanlık ve psikoterapi merkezi için çok dilli web sitesi: duyarlı React arayüzü, dil değiştirme ve iletişim akışları, Vercel üzerinde yayında.",
    },
    tech: ["React", "i18n", "Vercel"],
  },
  {
    id: "salifort", cat: ["ai"], img: salifort, demo: "https://kaggle.com/code/alirizaercan/salifort-motors-google-capstone-project", code: "https://github.com/alirizaercan/Data-Science-Projects/blob/main/salifort-motors-google-capstone-project.ipynb",
    title: { en: "Salifort Motors · HR Attrition", tr: "Salifort Motors · Çalışan Kaybı Analizi" },
    text: {
      en: "Random Forest model (97.8% accuracy) predicting employee turnover, identifying the key attrition drivers and turning them into actionable HR recommendations.",
      tr: "Çalışan ayrılmasını tahmin eden Random Forest modeli (%97,8 doğruluk); ayrılmanın temel etkenlerini belirleyip uygulanabilir İK önerilerine dönüştürür.",
    },
    tech: ["scikit-learn", "pandas", "Random Forest"],
  },
  {
    id: "storesales", cat: ["ai"], img: storesales, demo: "https://kaggle.com/code/alirizaercan/store-sales-time-series-data-science-technique", code: "https://github.com/alirizaercan/Data-Science-Projects/blob/main/store-sales-time-series-data-science-technique.ipynb",
    title: { en: "Store Sales Forecasting", tr: "Mağaza Satış Tahmini" },
    text: {
      en: "LightGBM time-series model (RMSLE 0.4725) forecasting sales for 54 stores from 5+ years of sales, economic and post-disaster data to support inventory planning.",
      tr: "5+ yıllık satış, ekonomik ve afet sonrası veriden 54 mağazanın satışlarını tahmin eden LightGBM zaman serisi modeli (RMSLE 0,4725); stok planlamasını destekler.",
    },
    tech: ["LightGBM", "Time series", "pandas"],
  },
  {
    id: "fifteen", cat: ["ai"], img: fifteen, code: "https://github.com/alirizaercan/15MinGreenCity-Besiktas-IBB",
    title: { en: "15-Minute Green City · Beşiktaş", tr: "15 Dakikalık Yeşil Şehir · Beşiktaş" },
    text: {
      en: "Geospatial analysis in Python to make Beşiktaş a walkable 15-minute city, with policy recommendations for the Istanbul Metropolitan Municipality.",
      tr: "Beşiktaş'ı yürünebilir bir 15 dakikalık şehre dönüştürmek için Python ile mekânsal analiz ve İstanbul Büyükşehir Belediyesi'ne politika önerileri.",
    },
    tech: ["Python", "GeoPandas", "Geospatial"],
  },
  {
    id: "passo", cat: ["ai", "web"], img: passo, code: "https://github.com/alirizaercan/PassoAssist",
    title: { en: "PassoAssist", tr: "PassoAssist" },
    text: {
      en: "Complaint analysis system: scraped customer feedback, BERT-based classification and sentiment analysis, served through a Flask interface for fast and accurate routing.",
      tr: "Şikâyet analiz sistemi: toplanan müşteri geri bildirimleri, BERT tabanlı sınıflandırma ve duygu analizi; hızlı ve doğru yönlendirme için Flask arayüzüyle sunulur.",
    },
    tech: ["BERT", "Flask", "Scraping", "NLP"],
  },
  {
    id: "greencat", cat: ["web"], img: greencat, code: "https://github.com/alirizaercan/eCommerce_Website_Greencat",
    title: { en: "GreenCat · E-commerce", tr: "GreenCat · E-ticaret" },
    text: {
      en: "E-commerce platform with a React front end and Flask back end, plus data collection, cleaning and visualisation tools for sales trends and customer behaviour.",
      tr: "React arayüzü ve Flask altyapısıyla e-ticaret platformu; satış eğilimleri ve müşteri davranışı için veri toplama, temizleme ve görselleştirme araçları.",
    },
    tech: ["React", "Flask", "Data viz"],
  },
];

export default projects;
