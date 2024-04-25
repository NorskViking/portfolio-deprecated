import './Experience.css'

import Card from 'react-bootstrap/Card'

export default function ExperienceCard({ id, company, jobtitle, website, logo, description, startYear, endYear}) {
    return (
        <Card key={id} className='experienceCard'>
            <Card.Img className='experienceCard--img' src={logo} href={website} alt="Company logo with weblink to company website, if available." />
            <Card.Body className='experienceCard--body'>
                <Card.Title className='experienceCard--header'>
                    {company}
                </Card.Title>
                <Card.Subtitle className='experienceCard--subtitle text-muted'>
                    {startYear} - {endYear}
                </Card.Subtitle>
                <Card.Subtitle className='experienceCard--subtitle text-bold'>
                    {jobtitle}
                </Card.Subtitle>
                <Card.Text className='experienceCard--text'>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
