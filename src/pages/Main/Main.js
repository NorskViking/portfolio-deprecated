import React from 'react'
import Container from 'react-bootstrap/Container'
import { Navbar, Landing, About, Education, Skills, Experience, Projects, Achievement, Testimonials, Footer } from '../../components'

export default function Main() {
    return (
        <Container>
            <Navbar />
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Testimonials />
            <Footer />
        </Container>
    )
}