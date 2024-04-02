import './About.css'

import github from '../../assets/svg/github.svg'
import linkedin from '../../assets/svg/linkedin.svg'
import profile from '../../assets/jpg/profile.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { aboutData } from '../../data/aboutData'
import { socialsData } from '../../data/socialsData'

export default function About() {
    return (
        <Container fluid="xl">
            <Row className="about" id="about">
                <div className="about--container">
                    <Col className="about--container-left">
                        <img 
                            src={profile}
                            alt=""
                            className='about--img'
                        />
                        <Col>
                            <Row className='about--content-social'>
                                {socialsData.linkedin && (
                                    <a
                                        href={socialsData.linkedin}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={linkedin}
                                            alt="" 
                                        />
                                    </a>
                                )}
                            </Row>
                            <Row className='about--content-social'>
                                {socialsData.github && (
                                    <a
                                        href={socialsData.github}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={github}
                                            alt="" 
                                        />
                                    </a>
                                )}
                            </Row>
                        </Col>
                    </Col>
                    
                    <Col className="about--container-right">
                        <Row className='acr--content'>
                            <h6>{aboutData.title}</h6>
                            <h1>{aboutData.name}</h1>
                            <p>{aboutData.description}</p>
                        </Row>
                    </Col>
                </div>
            </Row>
        </Container>
    )
}