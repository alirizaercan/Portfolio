import React, { useState } from "react";
import { usePrefs } from "../../prefs";
import projects from "../../data/projects";
import { ProjectCard } from "../ui";

const FILTERS = ["all", "industry", "ai", "web"];

function Projects() {
  const { t } = usePrefs();
  const [f, setF] = useState("all");
  const list = f === "all" ? projects : projects.filter((p) => p.cat.includes(f));
  const count = (k) => (k === "all" ? projects.length : projects.filter((p) => p.cat.includes(k)).length);

  return (
    <main id="main" className="page">
      <div className="wrap">
        <header className="page-head">
          <p className="kicker">{t("proj_title")}</p>
          <h1 className="h1">{t("proj_lead")}</h1>
        </header>

        <div className="filters" role="tablist" aria-label={t("proj_title")}>
          {FILTERS.map((k) => (
            <button key={k} role="tab" type="button" aria-selected={f === k} className={f === k ? "on" : ""} onClick={() => setF(k)}>
              {t(`f_${k}`)} <span className="filters-n">{count(k)}</span>
            </button>
          ))}
        </div>

        <div className="pgrid">
          {list.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </main>
  );
}

export default Projects;
