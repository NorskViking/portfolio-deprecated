import './Experience.css'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

export default function ExperienceCard({ id, company, jobtitle, website, logo, description, startYear, endYear}) {
    return (
        <Container fluid key={id}>
            <Card className='experienceCard'>
                <Card.Img className='experienceCard--img' src={logo} href={website} alt="Company logo with weblink to company website, if available." />
                <Card.Body className='experienceCard--body'>
                    <Card.Title className='experienceCard--header'>
                        {company}
                    </Card.Title>
                    <Card.Subtitle className='experienceCard--subtitle'>
                        {startYear}-{endYear}
                    </Card.Subtitle>
                    <Card.Subtitle className='experienceCard--subtitle'>
                        {jobtitle}
                    </Card.Subtitle>
                    <Card.Text className='experienceCard--text'>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
