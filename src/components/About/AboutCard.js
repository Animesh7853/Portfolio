import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Animesh Jha </span>
            from <span className="purple"> Ranchi, India.</span>
            <br /> I am a second year student pursuing an Bachelor of Technology (B.Tech)
            in Computer science and engineering at SRMIST.
            <br />
            
            
            <br />
            Certification and Badges I have earned 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> AWS Cloud Architecture
            </li>
            <li className="about-activity">
              <ImPointRight /> AWS Cloud Foundation
            </li>
            <li className="about-activity">
              <ImPointRight /> Hackerrank Gold Badges In C / C++ / Python / Java
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't underestimate yourself"{" "}
          </p>
          <footer className="blockquote-footer">Animesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
