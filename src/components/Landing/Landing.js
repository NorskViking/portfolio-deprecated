import "./Landing.css";

import github from "../../assets/svg/github.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import profile from "../../assets/jpg/profile.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { aboutData } from "../../data/aboutData";
import { socialsData } from "../../data/socialsData";

export default function Landing() {
    return (
        <Container className="landing">
            <Row className="landing--container">
                <Col className="landing--container-left">
                    <div className="lcl--content">
                        {socialsData.linkedin && (
                            <a
                                href={socialsData.linkedin}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={linkedin} alt="" className="landing--social" />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={github} alt="" className="landing--social" />
                            </a>
                        )}
                    </div>
                    <img src={profile} alt="" className="landing--img" />
                </Col>
                <Col className="landing--container-right">
                    <Row className="lcr--content">
                        <h6>{aboutData.title}</h6>
                        <h1>{aboutData.name}</h1>
                        <p>{aboutData.description}</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}