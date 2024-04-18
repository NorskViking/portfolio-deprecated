import './Experience.css'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

export default function ExperienceCard({ id, company, jobtitle, website, logo, description, startYear, endYear}) {
    return (
        <Container fluid key={id}>
            <Card className='experience-card'>
                <Card.Img variant="top" src={logo} href={website} alt="Company logo with weblink to company website, if available." />
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
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
