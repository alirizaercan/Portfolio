import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", marginBottom: "15px" }}>
            <span className="purple">Data Scientist &amp; Software Developer</span> working as an R&amp;D engineer at <span className="purple">Autodidactic Technologies</span>. I build time-series analytics and full-stack tools for industrial quality measurement and research LLM-guided reinforcement learning in a TÜBİTAK-funded project. Computer Engineering graduate (GPA 3.78/4.00), Erasmus+ alumnus in Poland and TEKNOFEST 2024 runner-up.
          </p>

          <h5 style={{ marginTop: "20px", marginBottom: "10px" }} className="purple">
            Core Competencies
          </h5>
          <ul style={{ marginBottom: "15px" }}>
            <li className="about-activity">
              <ImPointRight /> <strong>Data Science &amp; ML:</strong> predictive modelling, time-series forecasting, NLP, scikit-learn, PyTorch, TensorFlow, Hugging Face
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Time-Series &amp; Sensor Analytics:</strong> PostgreSQL / TimescaleDB continuous aggregates, streaming and batch processing, quality analytics
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>LLMs &amp; Reinforcement Learning:</strong> reward generation with LLMs, fine-tuning (Unsloth, Llama 3, Qwen 2.5), Ollama, Gymnasium
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Full-Stack Development:</strong> FastAPI, Flask, Vue 3, React, Next.js, Konva, Keycloak, Redis, Docker
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Computer Vision:</strong> YOLOv8, object detection, real-time occupancy prediction
            </li>
          </ul>

          <h5 style={{ marginTop: "20px", marginBottom: "10px" }} className="purple">
            Key Achievements
          </h5>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong>Industrial R&amp;D:</strong> built most of a production sensor-data flow end to end; 325 commits and 115 merged PRs in the last 12 months
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>TEKNOFEST:</strong> 2nd place 2024 (No One Waits) and 4th place 2023 (No Standing Passengers), Smart Transportation
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>TYFOR:</strong> football analytics platform with 50+ clubs, 1,500+ player profiles and a computer-vision scouting network
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Machine Learning:</strong> HR attrition (97.8% accuracy), store sales forecasting (0.47 RMSLE), Turkish NER benchmarks at HAVELSAN
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>International Experience:</strong> Erasmus+ at Politechnika Bydgoska (GPA 3.96), internships in Kraków and Gdańsk
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Community &amp; Certificates:</strong> GDSC Technology Core Team Lead, Google Advanced Data Analytics, Kaggle Expert
            </li>
          </ul>

          <h5 style={{ marginTop: "20px", marginBottom: "10px" }} className="purple">
            Tech Stack
          </h5>
          <p style={{ marginBottom: "0" }}>
            <strong>Languages:</strong> Python, TypeScript, JavaScript, SQL, C | <strong>Back end:</strong> FastAPI, Flask, SQLAlchemy | <strong>Front end:</strong> Vue 3, React, Next.js, Konva | <strong>Data:</strong> PostgreSQL, TimescaleDB, MariaDB, Redis, BigQuery | <strong>ML/AI:</strong> PyTorch, TensorFlow, scikit-learn, Hugging Face, Ollama, Unsloth | <strong>Tools:</strong> Docker, Keycloak, Git, Linux
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;