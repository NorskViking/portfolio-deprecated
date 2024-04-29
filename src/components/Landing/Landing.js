import "./Landing.css";

import github from "../../assets/svg/github.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import profile from "../../assets/jpg/profile.jpg";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"

import { landingData } from "../../data/landingData";
import { socialsData } from "../../data/socialsData";

export default function Landing() {
    return (
        <Container fluid className="landing" id="landing">
            <Container fluid className="landing--container">
                <Container fluid className="landing--container-left">
                    <Container fluid className="lcl--content">
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
                    </Container>
                    <Image src={profile} alt="" className="landing--img" roundedCircle />
                </Container>
                <Container fluid className="landing--container-right">
                    <Container fluid className="lcr--content">
                        <h6>{landingData.title}</h6>
                        <h1>{landingData.name}</h1>
                        <p>{landingData.poem1}</p>
                        <p>{landingData.poem2}</p>
                        <p>{landingData.poem3}</p>
                        <p>{landingData.poem4}</p>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}