import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="To-do list"
              description="Created a to-do list application which allows users to add, edit, and delete tasks. It also has the ability to mark tasks as completed or incomplete.
              "
              ghLink="https://github.com/Animesh7853/To-Do-List-Application-"
              demoLink="https://animesh7853.github.io/To-Do-List-Application-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather app using Java"
              description="A Java weather app is a software program that retrieves and displays current weather conditions and forecasts for specified locations. It uses Java programming, data APIs, and GUI components to provide users with up-to-date meteorological information."
              ghLink="https://github.com/Animesh7853"
              demoLink="https://github.com/Animesh7853"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blood Bank Manegment System"
              description="Created a Blood Bank Management System for university to enable donor to register themselves, search donor on basis of various parameters
              "
              ghLink="https://github.com/Animesh7853/Blood-Bank-Manegmaent-System"
              demoLink="https://github.com/Animesh7853/Blood-Bank-Manegmaent-System"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
