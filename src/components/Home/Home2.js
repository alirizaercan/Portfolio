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
              Hi, I'm <b className="purple">Ali Rıza Ercan</b>, a passionate Senior Computer Engineering Student specializing in
              <i>
                <b className="purple"> Data Science and Machine Learning.</b>
              </i>
              <br />
              <br />I have hands-on experience with technologies such as
              <i>
                <b className="purple"> Python, SQL, and FastAPI. </b>
              </i>
              <br />
              <br />My interests lie in developing <b className="purple">AI-driven applications</b> and working on projects involving
              <b className="purple"> Machine Learning, Data Analytics, and Predictive Modeling.</b>
              <br />
              <br />I have gained valuable experience at
              <b className="purple"> HAVELSAN</b> as a Data Science Intern, focusing on NLP applications and building microservices for text preprocessing.
              <br />
              <br />Additionally, I have been part of international programs through
              <b className="purple"> Erasmus Mobility</b>, studying at Politechnika Bydgoska and interning at MetalMaker 3D in Poland.
              <br />
              <br />I am also active in data science competitions, holding an
              <b className="purple"> Expert status on Kaggle</b> and consistently working on impactful projects.
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
