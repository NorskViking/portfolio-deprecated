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
                <Carousel fade>
                    {testimonalsData.map((testimonial) => (
                        <Carousel.Item interval={5000} key={testimonial.id} className='testimonial--item'>
                            <Container fluid className='testimonials--container'>
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
                            </Container>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </Container>
    )
}
