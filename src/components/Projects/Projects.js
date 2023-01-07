import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import bod from "../../Assets/Projects/bod.png";
import stage from "../../Assets/Projects/stage.png";
import portfolio from "../../Assets/Projects/portfolio.jpg";
import events from "../../Assets/Projects/events.jpg";

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
              imgPath={stage }
              isBlog={false}
              title="gestion demandes de stage"
              description="creation d'une application web pour chu oujda de gestion des demandes de stages"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={events}
              isBlog={false}
              title="gest event"
              description="gestion des évenemant avec android."
              ghLink="https://github.com/yassine-ela/MyAppEventPlanner"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bod}
              isBlog={false}
              title="bureau d'ordre digital"
              description="réalisation d'une application web d'un bureau d'ordre digital avec html css php et bootstrap"
              ghLink=""
                   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="réalisation de mon portfolio avec React et css."
              ghLink=""
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Projet 5"
              description="description projet 5."
              ghLink=""
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Projet 6"
              description="description."
              ghLink=""
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
