import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            <a href="mailto:alirizaercan1@gmail.com" style={{ color: "white", textDecoration: "none" }}>
              alirizaercan1@gmail.com
            </a>
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Ali Rıza Ercan</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/alirizaercan"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub Profile"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/alirizaercann/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/alirizaercn"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram Profile"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+905342402651"
                style={{ color: "white" }}
                title="Phone Number"
              >
                📱
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
