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
            I am a Computer Engineering graduate from KTO Karatay University (June 2025, GPA: 3.78/4.00) with specialized expertise in Data Science and Machine Learning. Currently working as a Data Science & Software Developer Intern at Mind in Blue in Gdansk, Poland, where I develop responsive web applications and implement data-driven marketing strategies.
            <br />
            My graduation project, TYFOR (tyfor.online), is a football analytics platform that integrates AI, machine learning, and computer vision to deliver insights to 50+ clubs with 1,500+ player profiles, achieving 95% accuracy in performance analytics.
            <br />
            I have gained extensive international experience through Erasmus+ Exchange at Politechnika Bydgoska (GPA: 3.96/4.00) and internships at MetalMaker 3D and Mind in Blue in Poland, which broadened my global perspective and technical expertise.
            <br />
            <br />
            Key achievements include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Currently working as Data Science & Software Developer Intern at Mind in Blue, Gdansk, Poland
            </li>
            <li className="about-activity">
              <ImPointRight /> TEKNOFEST 2024: 2nd Place in "Smart Transportation" category with "No One Waits" project
            </li>
            <li className="about-activity">
              <ImPointRight /> TEKNOFEST 2023: 4th Place with "No Standing Passengers" project
            </li>
            <li className="about-activity">
              <ImPointRight /> Published research: "Comparative Evaluation of Deep Learning and Shadow Learning Classification Algorithms on Medical Datasets" (Under Review)
            </li>
            <li className="about-activity">
              <ImPointRight /> Google Advanced Data Analytics Certificate holder, validating expertise in data analysis and machine learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Science Intern at HAVELSAN, Turkey's leading defense industry IT company
            </li>
            <li className="about-activity">
              <ImPointRight /> Selected as Data Science Scholar by AI and Technology Academy (January 2025 – present)
            </li>
            <li className="about-activity">
              <ImPointRight /> Technology Core Team Lead at GDSC KTO Karatay University
            </li>
            <li className="about-activity">
              <ImPointRight /> Kaggle Expert with active participation in data science competitions
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            I also contributed as a member and leader of the Technology Core Team at GDSC KTO Karatay, completed a semester at TEI Aerospace Engine School, served as an Assistant Student at the Technology Transfer Office at KTO Karatay University, and worked as a Software Developer Intern at MetalMaker 3D in Poland.
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