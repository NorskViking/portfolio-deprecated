import { educationData } from '../../data/educationData'
import './Education.css'
import EducationCard from './EducationCard'

import Container from 'react-bootstrap/Container'

export default function Education() {
    return (
        <Container className='education' id='education'>
            <Container className='education-body'>
                <Container className='education-description'>
                    <h1>Education</h1>
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
            </Container>
        </Container>
    )
}
