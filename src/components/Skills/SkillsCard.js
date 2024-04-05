import './Skills.css'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function SkillCard({id, logo}) {
    return (
        <Container fluid key={id} >
            <Card className='skill-card'>
                <Card.Img variant="top" src={logo} className='skill-img'/>
            </Card>
        </Container>
    )
}

/*
    <Card.Body>
        <Card.Title>
            {id}
        </Card.Title>
    </Card.Body>
*/