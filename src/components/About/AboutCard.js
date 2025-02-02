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
            I am a Senior Computer Engineering Student with a strong passion for Data Science and Machine Learning.
            <br />
            I have gained international experience through two Erasmus Mobility Programs in Poland, studying at Politechnika Bydgoska and interning at MetalMaker 3D.
            <br />
            <br />
            Some of my achievements include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teknofest 2024: 2nd Place in "Smart Transportation" with "Beklemesin Kimse" project.
            </li>
            <li className="about-activity">
              <ImPointRight /> Published research: "Comparative Evaluation of Deep Learning and Shadow Learning Classification Algorithms on Medical Datasets"
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Science Intern at HAVELSAN, working on NLP and microservices.
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            I am also an active Kaggle Expert, constantly improving my skills in data science competitions.
            <br />
            My goals include becoming a Data Science expert, exploring new cultures, and developing impactful projects.
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