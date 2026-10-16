import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { usePrefs } from "../prefs";

export function LangSwitch() {
  const { lang, setLang, t } = usePrefs();
  return (
    <div className="seg" role="group" aria-label={t("lang_label")}>
      {["en", "tr"].map((l) => (
        <button key={l} type="button" aria-pressed={lang === l} className={lang === l ? "on" : ""} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function ThemeSwitch() {
  const { theme, toggleTheme, t } = usePrefs();
  const label = theme === "dark" ? t("theme_to_light") : t("theme_to_dark");
  return (
    <button type="button" className="icon-btn" onClick={toggleTheme} aria-label={label} title={label}>
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}

function NavBar() {
  const { t } = usePrefs();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  const links = [
    ["/", t("nav_home")],
    ["/about", t("nav_about")],
    ["/project", t("nav_projects")],
    ["/resume", t("nav_resume")],
    ["/academicjournals", t("nav_research")],
  ];

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""} ${open ? "nav-open" : ""}`}>
      <a href="#main" className="skip">{t("skip")}</a>
      <div className="wrap nav-inner">
        <Link to="/" className="brand" aria-label="Ali Rıza Ercan">
          <span className="mono-mark" aria-hidden="true">AE</span>
          <span className="brand-name">Ali Rıza Ercan</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => (isActive ? "active" : "")}>{label}</NavLink>
          ))}
          <a href="https://medium.com/@alirizaercan1" target="_blank" rel="noreferrer">
            {t("nav_blog")} <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <div className="nav-tools">
          <LangSwitch />
          <ThemeSwitch />
          <button type="button" className="icon-btn nav-burger" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t("close") : t("menu")} onClick={() => setOpen((o) => !o)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="sheet" hidden={!open}>
        <nav className="wrap sheet-links" aria-label="Mobile">
          {links.map(([to, label], i) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => (isActive ? "active" : "")}>
              <span className="sheet-n">0{i + 1}</span>{label}
            </NavLink>
          ))}
          <a href="https://medium.com/@alirizaercan1" target="_blank" rel="noreferrer">
            <span className="sheet-n">0{links.length + 1}</span>{t("nav_blog")} <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
