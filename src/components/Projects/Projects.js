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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noonewaits}
              isBlog={false}
              title="No One Waits"
              description="Won 2nd place at TEKNOFEST 2024 with real-time transportation occupancy prediction system using computer vision algorithms. Deployed Firebase-integrated solution providing users with accessible occupancy data across web and mobile platforms."
              ghLink="https://github.com/INTELLIVISIONteam/teknofest_website"
              demoLink="https://beklemesinkimse.com"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
