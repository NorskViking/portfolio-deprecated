import './Education.css'

import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container";

export default function EducationCard({ id, institution, course, startYear, endYear, logo }) {
    return (
        <Container fluid key={id} >
            <Card className='education-card'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>
                        {institution}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {startYear}-{endYear}
                    </Card.Subtitle>
                        {course}
                </Card.Body>
            </Card>
        </Container>
    )
}