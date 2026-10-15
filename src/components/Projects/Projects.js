import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import salifortmotors from "../../Assets/Projects/coursera_google.jpeg";
import storesales from "../../Assets/Projects/header.png";
import noonewaits from "../../Assets/Projects/noonewaits.png";
import greencat from "../../Assets/Projects/ecommerce_website.png";
import fifteenmincity from "../../Assets/Projects/15mincity.png";
import passoassist from "../../Assets/Projects/passo.gif";
import tyfor from "../../Assets/Projects/tyfor_main_page.png";
import industrial from "../../Assets/Projects/industrial.png";
import llmrl from "../../Assets/Projects/rl.png";
import missminutes from "../../Assets/Projects/missminutes.png";
import mindinblue from "../../Assets/Projects/mindinblue.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Industry R&amp;D at Autodidactic Technologies first, then personal and award-winning projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={industrial}
              isBlog={false}
              title="Real-Time Industrial Quality Analytics"
              badge="Industry project · Autodidactic Technologies · confidential"
              description="Full-stack R&D on a production platform that turns live sensor data from manufacturing lines into quality insight: real-time ingestion and time-series storage, batch processing and analysis services, scalable analytics on TimescaleDB, interactive measurement and quality dashboards, and secure role-based interfaces. 325 commits and 115 merged pull requests in the last 12 months."
              tech={["FastAPI", "PostgreSQL", "TimescaleDB", "MariaDB", "Redis", "Vue 3", "Konva", "Keycloak", "Docker"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llmrl}
              isBlog={false}
              title="LLM-Guided Reinforcement Learning"
              badge="R&D project · TÜBİTAK 1501 · private"
              description="Research on using large language models to shape the behaviour of simulated agents: LLM-generated reward functions for BipedalWalker (Qwen 2.5 7B via Ollama), domain-specific fine-tuning of Llama 3 and Qwen 2.5 with Unsloth, a dogfight sandbox simulation environment, and the project proposals and progress reports."
              tech={["PyTorch", "Gymnasium", "Ollama", "Unsloth", "Qwen 2.5", "Llama 3"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={missminutes}
              isBlog={false}
              title="Miss Minutes · Voice-First Personal Command Center"
              badge="Personal project · private"
              description="A Next.js app built around an animated, original mascot assistant that talks back: LLM tool use (Gemini/Claude) over my own data, streaming text-to-speech, a YouTube Music-style player with queue, lyrics and listening analytics, Google OAuth integrations (Calendar, Tasks, Gmail, YouTube, Drive), Trello sync, automatic work logging from git history, and an installable PWA with sleep mode for low CPU use."
              tech={["Next.js", "TypeScript", "Tailwind", "Motion", "Gemini API", "Web Audio", "OAuth 2.0"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindinblue}
              isBlog={false}
              title="Mind in Blue · Counselling Practice Website"
              description="Multilingual website for a Gdańsk-based counselling and psychotherapy practice, built during my internship at Mind in Blue: responsive React front end, language switching, contact and booking flows, deployed on Vercel."
              tech={["React", "i18n", "Responsive UI", "Vercel"]}
              ghLink="https://github.com/alirizaercan/MindinBlue"
              demoLink="https://mindinblue.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tyfor}
              isBlog={false}
              title="TYFOR - Technology Youth Football Optimization Research Platform"
              description="Developed end-to-end data-driven football analytics platform encompassing 50+ clubs and 1,500+ player profiles, achieving 95% accuracy in performance analytics through machine learning algorithms and real-time PostgreSQL database integration. Built comprehensive AI-powered scouting network utilizing computer vision (YOLO v8), web scraping, and predictive modeling to identify promising talents across Turkish and Polish leagues with automated transfer strategy optimization."
              demoLink="https://tyfor.online"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noonewaits}
              isBlog={false}
              title="No One Waits"
              badge="TEKNOFEST 2024 · 2nd place"
              description="Won 2nd place at TEKNOFEST 2024 with real-time transportation occupancy prediction system using computer vision algorithms. Deployed Firebase-integrated solution providing users with accessible occupancy data across web and mobile platforms."
              ghLink="https://github.com/INTELLIVISIONteam/teknofest_website"
              demoLink="https://beklemesinkimse.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salifortmotors}
              isBlog={false}
              title="Salifort Motors HR Attrition Analysis"
              description="Developed a high-accuracy Random Forest model (97.8%) to predict employee turnover, identifying key attrition factors and providing actionable HR strategies to reduce hiring costs."
              ghLink="https://github.com/alirizaercan/Data-Science-Projects/blob/main/salifort-motors-google-capstone-project.ipynb"
              demoLink="https://kaggle.com/code/alirizaercan/salifort-motors-google-capstone-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storesales}
              isBlog={false}
              title="Store Sales Forecasting with Time Series & Machine Learning"
              description="Engineered a LightGBM time series model (RMSLE: 0.47251) to forecast sales for 54 stores, optimizing inventory planning using 5+ years of economic and post-disaster data."
              ghLink="https://github.com/alirizaercan/Data-Science-Projects/blob/main/store-sales-time-series-data-science-technique.ipynb"
              demoLink="https://kaggle.com/code/alirizaercan/store-sales-time-series-data-science-technique"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fifteenmincity}
              isBlog={false}
              title="15MinGreenCity-Besiktas-IBB"
              description="Led Python-based geospatial analysis to transform Beşiktaş into a walkable 15-minute city, with policy recommendations adopted by Istanbul Municipality."
              ghLink="https://github.com/alirizaercan/15MinGreenCity-Besiktas-IBB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greencat}
              isBlog={false}
              title="eCommerce Website GreenCat"
              description="The E-Commerce Website - Greencat is a comprehensive platform built for managing e-commerce functionalities, designed with a user-friendly frontend (ReactJS) and a robust backend (Flask). It integrates data collection, cleaning, and visualization tools to provide users with insights into sales trends and customer behavior while supporting product browsing, order management, and user interactivity."
              ghLink="https://github.com/alirizaercan/eCommerce_Website_Greencat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passoassist}
              isBlog={false}
              title="PassoAssist"
              description="PassoAssist is a complaint management system designed to analyze and resolve user feedback using data science and NLP techniques. It collects data via web scraping, processes it, and provides meaningful insights through an easy-to-use interface. By implementing sentiment analysis, categorization, and real-time analysis, PassoAssist helps users receive fast and accurate solutions to their complaints."
              ghLink="https://github.com/alirizaercan/PassoAssist"
            />
          </Col>





        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
