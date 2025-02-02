import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import JournalCards from "./JournalCards";
import Particle from "../Particle";
import journalImage from "../../Assets/Projects/journal_image.png"; // Replace with your image path

function AcademicJournals() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Academic Journal</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is my academic journal titled <strong> "Comparative Evaluation of Deep Learning and Shadow Learning Classification Algorithms on Medical Datasets" </strong>, currently in progress for publication.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <JournalCards
              imgPath={journalImage} // Replace this with the path to the image you want to use
              isBlog={false}
              title="Comparative Evaluation of Deep Learning and Shadow Learning Classification Algorithms on Medical Datasets"
              description="This academic journal explores and compares the effectiveness of deep learning and shadow learning algorithms on medical datasets. It focuses on classification tasks, highlighting performance and accuracy differences across various model types."
              //driveLink="https://drive.google.com/file/d/your_file_id_here/view" // Replace with your actual Drive link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AcademicJournals;
