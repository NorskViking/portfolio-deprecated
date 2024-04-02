import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Expereience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

import { Routes, Route } from 'react-router-dom';
import list from './assets/svg/list.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

console.log(list)

export default function App() {
  return (
    <Container className="justify-content-end">
      <Navbar />
        <Nav className="justify-content-end">
        <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Testimonials" element={<Testimonials />} />
          </Routes>
          <BackToTop />
        </Nav>
        <Footer />
    </Container>
    /*
    <>
      <Navbar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="footer" element={<Footer />} />
      </Routes>
    </>
    */
  );
}
