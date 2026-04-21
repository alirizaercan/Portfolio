import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", marginBottom: "15px" }}>
            <span className="purple">Data Science & AI Developer</span> with 2+ years of hands-on experience building production-grade LLMs, ML pipelines, and full-stack AI solutions. Currently at <span className="purple">Autodidactic Technologies</span> developing LLM-powered reinforcement learning systems. Computer Engineering graduate (GPA: 3.78/4.00) with proven track record delivering high-impact projects: 50+ enterprise integrations, 97.8% ML accuracy, TEKNOFEST 2024 2nd place awards.
          </p>

          <h5 style={{ marginTop: "20px", marginBottom: "10px" }} className="purple">
            Core Competencies
          </h5>
          <ul style={{ marginBottom: "15px" }}>
            <li className="about-activity">
              <ImPointRight /> <strong>AI/ML Development:</strong> LLMs (prompt engineering, fine-tuning), RL pipelines, deep learning (TensorFlow, PyTorch, Keras)
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Data Engineering:</strong> PostgreSQL, data pipelines, ETL automation, real-time processing
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Computer Vision:</strong> YOLO v8, object detection, image classification, automated scouting systems
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Full-Stack Development:</strong> React.js, Flask, FastAPI, Docker, microservices architecture
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Technical Leadership:</strong> Team lead, workshop facilitation, architecture design
            </li>
          </ul>

          <h5 style={{ marginTop: "20px", marginBottom: "10px" }} className="purple">
            Key Achievements
          </h5>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong>TYFOR Platform:</strong> Built end-to-end AI analytics system for 50+ clubs, 1,500+ player profiles, 95% accuracy
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>LLM Development:</strong> Engineered domain-specific models with HITL feedback loops for military simulations
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>TEKNOFEST 2024 Winner:</strong> 2nd place - Real-time public transport occupancy prediction system
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>ML Model Performance:</strong> HR Attrition (97.8% accuracy), Sales Forecasting (0.47 RMSLE), NLP-based complaint classification
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>International Experience:</strong> Erasmus+ Exchange, 6+ months tech roles in Poland, cross-functional team leadership
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Certifications:</strong> Google Advanced Data Analytics (Coursera 2025), Data Science Scholar (AI & Tech Academy)
            </li>
          </ul>

          <h5 style={{ marginTop: "20px", marginBottom: "10px" }} className="purple">
            Tech Stack
          </h5>
          <p style={{ marginBottom: "0" }}>
            <strong>Languages:</strong> Python, JavaScript, C | <strong>Frameworks:</strong> React.js, Flask, FastAPI | <strong>ML/AI:</strong> scikit-learn, TensorFlow, PyTorch, Hugging Face | <strong>Data:</strong> PostgreSQL, BigQuery, Supabase | <strong>Tools:</strong> Docker, Git, Linux, VS Code
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;