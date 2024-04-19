import React from 'react';

import Container from 'react-bootstrap/Container';
/** 
 * import Navbar from '../../components/Navbar/Navbar'
*/

import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';
import Projects from '../../components/Projects/Projects';
/** import Achievement from '../../components/Achievement/Achievement'; */
import Testimonials from '../../components/Testimonials/Testimonials';
/** import Footer from '../../components/Footer/Footer'; */

export default function Main() {
    return (
        <Container fluid style={{ padding: 0, margin: 0 }}>
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Testimonials />
        </Container>
    )
}

/**
 * <Achievement />
 * <Footer />
 */