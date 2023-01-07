import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">El abdellaoui Yassine </span>
            from <span className="purple"> Oujda, Morocco.</span>
            <br />I am a software engineering student in ensao.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching fotball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do it the best way you can!"{" "}
          </p>
          <footer className="blockquote-footer">Yassine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
