import './About.css'
import { aboutData } from '../../data/aboutData';

import Container from 'react-bootstrap/Container'

function About() {
    return (
        <Container className="about" id="about">
            <Container className='line-styling'>
                <div className='style-line'></div>
                <div className='style-circle'></div>
                <div className='style-circle'></div>
            </Container>
            <Container className='about-body'>
                <Container className='about-description'>
                    <h2>{aboutData.title}</h2>
                    <p>{aboutData.description1}</p>
                    <p>{aboutData.description2}</p>
                </Container>
            </Container>
        </Container>
    )
}

export default About;