import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaKaggle, FaMedium } from "react-icons/fa";
import { usePrefs } from "../prefs";
import { CopyEmail } from "./ui";
import bitmojiMark from "../Assets/bitmoji-mark.png";

function Footer() {
  const { t } = usePrefs();
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <p className="footer-name"><img className="mono-mark sm moji-mark" src={bitmojiMark} alt="" aria-hidden="true" width="64" height="64" /> Ali Rıza Ercan</p>
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
