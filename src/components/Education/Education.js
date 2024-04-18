import './Education.css';
import { educationData } from '../../data/educationData';
import educationImg from '../../assets/jpg/education_img.jpg'

import EducationCard from './EducationCard';

import Container from 'react-bootstrap/Container';

export default function Education() {
    return (
        <Container fluid className='education' id='education'>
            <h1>Utdanning</h1>
            <Container fluid className='education-body'>
            
                <Container fluid className='education-description'>
                    {educationData.map(education => (
                        <EducationCard
                            key={education.id}
                            id={education.id}
                            logo={education.logo}
                            institution={education.institution}
                            course={education.course}
                            startYear={education.startYear}
                            endYear={education.endYear}
                        />
                    ))}
                </Container>
                <Container fluid className='education-img'>
                    <img src={educationImg} alt="" />
                </Container>
            </Container>
        </Container>
    )
}
