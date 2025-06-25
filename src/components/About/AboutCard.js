import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Rıza Ercan </span>
             from <span className="purple">Turkey.</span>
            <br />
            I am a Computer Engineering graduate from KTO Karatay University (June 2025) with specialized expertise in Data Science and Machine Learning. Driven by problem-solving and a thirst for knowledge, I leverage data to drive impactful solutions in technology.
            <br />
            My graduation project, TYFOR (tyfor.online), is a football analytics platform that integrates AI, machine learning, and computer vision to deliver peer-reviewed, evidence-based insights to over 30 clubs.
            <br />
            I have gained international experience through two Erasmus+ Mobility Programs in Poland, studying at Politechnika Bydgoska and interning at MetalMaker 3D, which broadened my global perspective and sparked a passion for cultural exchange.
            <br />
            <br />
            Key achievements include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teknofest 2024: 2nd Place in "Smart Transportation" category with "Beklemesin Kimse" project
            </li>
            <li className="about-activity">
              <ImPointRight /> Published research: "Comparative Evaluation of Deep Learning and Shadow Learning Classification Algorithms on Medical Datasets"
            </li>
            <li className="about-activity">
              <ImPointRight /> Google Advanced Data Analytics Certificate holder, validating expertise in data analysis and machine learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Science Intern at HAVELSAN, Turkey's leading defense industry IT company
            </li>
            <li className="about-activity">
              <ImPointRight /> Selected as Data Science Scholar by Google and Yapay Zeka ve Teknoloji Academy (2,000 out of 25,000 applicants)
            </li>
            <li className="about-activity">
              <ImPointRight /> Kaggle Expert with active participation in data science competitions
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            I also contributed as a member and leader of the Technology Core Team at GDSC KTO Karatay, completed a semester at TEI Aerospace Engine School, and served as an Assistant Student at the Technology Transfer Office at KTO Karatay University.
            <br />
            My goals include becoming a Data Science expert, gaining global work experience, fostering cross-cultural understanding, and developing impactful projects while excelling in management and entrepreneurship.
          </p>
          <p style={{ textAlign: "justify" }}>
            My interests include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Football & Football Analytics
            </li>
            <li className="about-activity">
              <ImPointRight /> Philosophy & Stoic Thought
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Information is the oil of the 21st century, and analytics is the combustion engine." 
          </p>
          <footer className="blockquote-footer">Peter Sondergaard</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;