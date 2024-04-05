import { skillsData } from "../../data/skillsData"

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function SkillCard({id, logo}) {
    return (
        <Container key={id} >
            <Card className='skill-card'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>
                        {id}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Container>
    )
}