import './About.css';
import { aboutData } from '../../data/aboutData';
import aboutImg from '../../assets/png/about_img.png';

import Container from 'react-bootstrap/Container';

function About() {
    return (
        <Container fluid className="about" id="about">
            <Container fluid className='line-styling'>
                <div className='style-line'></div>
                <div className='style-circle'></div>
                <div className='style-circle'></div>
            </Container>
            <Container fluid className='about-body'>
                <Container fluid className='about-description'>
                    <h2>{aboutData.title}</h2>
                    <p>{aboutData.description1}</p>
                    <p>{aboutData.description2}</p>
                </Container>
                <Container fluid className='about-img'>
                    <img alt="" src={aboutImg}/>
                </Container>
            </Container>
        </Container>
    )
}

export default About;