import './Experience.css'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

export default function ExperienceCard({ id, company, jobtitle, logo, description, startYear, endYear}) {
    return (
        <Container fluid key={id}>
            <Card className='experience-card'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>
                        {company}
                    </Card.Title>
                    <Card.Subtitle>
                        {startYear}-{endYear}
                    </Card.Subtitle>
                    <Card.Subtitle>
                        {jobtitle}
                    </Card.Subtitle>
                    {description}
                </Card.Body>
            </Card>
        </Container>
    )
}
