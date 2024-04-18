import { testimonalsData } from '../../data/testimonialData'

import Container from 'react-bootstrap/Container'
import { Carousel, Image } from 'react-bootstrap'

import './Testimonials.css'

export default function Testimonials() {
    return (
        <Container fluid className='testimonials' id='testimonials'>
            <Container fluid className='testimonials--header'>
                <h1>Attester</h1>
            </Container>
            <Container fluid className='testimonaials--body'>
                <Carousel>
                    {testimonalsData.map((testimonial) => (
                        <Carousel.Item interval={3000} key={testimonial.id} className='testimonial--item'>
                            <Image src={testimonial.image} alt='' className='testimonials--img' roundedCircle/>
                            <Carousel.Caption className='testimonials--content'>                        
                                <p>
                                    {testimonial.text}
                                </p>
                                <h1>
                                    {testimonial.name}
                                </h1>
                                <h4>
                                    {testimonial.title}
                                </h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </Container>
    )
}
