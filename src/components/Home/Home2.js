import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <b className="purple">Ali Rıza Ercan</b>, a
              <b className="purple"> Data Scientist &amp; Software Developer</b> and Computer Engineering graduate of KTO Karatay University (GPA 3.78/4.00).
              <br />
              <br />I currently work as an <b className="purple">R&amp;D engineer at Autodidactic Technologies</b>, building a real-time industrial quality-analytics platform end to end: sensor-data ingestion and time-series storage on
              <i><b className="purple"> PostgreSQL / TimescaleDB</b></i>, analysis services in
              <i><b className="purple"> FastAPI</b></i>, and interactive measurement dashboards in
              <i><b className="purple"> Vue 3</b></i>. In parallel, I work on a TÜBİTAK-funded R&amp;D project on
              <b className="purple"> LLM-guided reinforcement learning</b>, generating rewards with LLMs and fine-tuning Llama 3 and Qwen 2.5 models.
              <br />
              <br />Before that I worked as a <b className="purple">Data Science &amp; Software Developer Intern at Mind in Blue</b> in Gdańsk, a
              <b className="purple"> Data Scientist Intern at HAVELSAN</b> (Turkish NER benchmarks and FastAPI services) and a
              <b className="purple"> Software Developer Intern at MetalMaker 3D</b> in Kraków. I also studied at Politechnika Bydgoska as an
              <b className="purple"> Erasmus+</b> exchange student.
              <br />
              <br />My graduation project <b className="purple">TYFOR</b> is a football analytics platform covering 50+ clubs and 1,500+ player profiles, and our team won
              <b className="purple"> 2nd place at TEKNOFEST 2024</b> with a real-time public-transport occupancy prediction system.
              <br />
              <br />I hold the <b className="purple">Google Advanced Data Analytics Certificate</b>, was a Data Science Scholar of the AI &amp; Technology Academy, and hold
              <b className="purple"> Expert status on Kaggle</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alirizaercan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/ktokaratay/status/1842548108393119949"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alirizaercann/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/alirizaercn/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
