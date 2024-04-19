import './Education.css'
import Card from 'react-bootstrap/Card'

export default function EducationCard({ id, institution, course, startYear, endYear, logo }) {
    return (
        <Card key={id} className='educationCard'>
            <Card.Img src={logo} alt='' className='educationCard--img' />
            <Card.Body className='educationCard--body'>
                <Card.Title className='educationCard--header'>
                        {institution}
                </Card.Title>
                <Card.Subtitle className='educationCard--subtitle'>
                    {startYear}-{endYear}
                </Card.Subtitle>
                <Card.Text className='educationCard--text'>
                    {course}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}