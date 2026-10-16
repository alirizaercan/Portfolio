import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaKaggle, FaMedium } from "react-icons/fa";
import { usePrefs } from "../prefs";
import { CopyEmail } from "./ui";

function Footer() {
  const { t } = usePrefs();
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <p className="footer-name"><span className="mono-mark sm" aria-hidden="true">AE</span> Ali Rıza Ercan</p>
          <p className="muted">© {new Date().getFullYear()} · {t("footer_built")}</p>
        </div>
        <CopyEmail />
        <ul className="footer-social">
          <li><a href="https://github.com/alirizaercan" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/alirizaercann/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a></li>
          <li><a href="https://www.kaggle.com/alirizaercan" target="_blank" rel="noreferrer" aria-label="Kaggle"><FaKaggle /></a></li>
          <li><a href="https://medium.com/@alirizaercan1" target="_blank" rel="noreferrer" aria-label="Medium"><FaMedium /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
