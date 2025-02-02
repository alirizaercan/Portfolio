import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import santander from "../../Assets/Projects/santander.jpeg";
import spaceshiptitanic from "../../Assets/Projects/spaceshiptitanic.jpeg";
import noonewaits from "../../Assets/Projects/noonewaits.png";
import greencat from "../../Assets/Projects/ecommerce_website.png";
import transfermarkt from "../../Assets/Projects/transfermarkt.jpg";
import passoassist from "../../Assets/Projects/passo.gif";

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
              description="AI-powered solution for predicting occupancy rates in public transportation. Used SSD model and YOLOv8 algorithm for real-time passenger counting, integrated with web and Android platforms for seamless access. Analyzed historical data to help users make informed transportation choices."
              ghLink="https://github.com/INTELLIVISIONteam/teknofest_website"
              demoLink="https://beklemesinkimse.com"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={santander}
              isBlog={false}
              title="Santander - Data Science"
              description="Completed a full-cycle data science project for Santander, tackling real-world challenges through data collection, cleaning, feature engineering, and model evaluation."
              ghLink="https://github.com/alirizaercan/Data-Science-Projects/blob/main/santander-data-science-details-and-explanation.ipynb"
              demoLink="https://www.kaggle.com/code/alirizaercan/santander-data-science-details-and-explanation"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spaceshiptitanic}
              isBlog={false}
              title="Spaceship Titanic"
              description="Built a predictive model for the 'Spaceship Titanic' dataset to identify passengers transported to an alternate dimension, using data cleaning, feature engineering, and machine learning."
              ghLink="https://github.com/alirizaercan/Data-Science-Projects/blob/main/spaceship-titanic-data-science-with-details.ipynb"
              demoLink="https://www.kaggle.com/code/alirizaercan/spaceship-titanic-data-science-with-details"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transfermarkt}
              isBlog={false}
              title="Transfermarkt Süper Lig - Konyaspor Analysis"
              description="Analyzed Konyaspor's performance using Super League data, utilizing Python libraries for data processing and advanced visualizations to extract actionable insights."
              ghLink="https://github.com/alirizaercan/Transfermarkt_Super_League-Konyaspor_Analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
