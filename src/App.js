import React from 'react';

import MainPage from './pages/Main/MainPage'
import ProjectPage from './pages/Project/ProjectPage'
import ScrollToTop from './utils/ScrollToTop'
import BackToTop from './components/BackToTop/BackToTop'

import Footer from './components/Footer/Footer';

import { Routes, Route } from 'react-router-dom';
import list from './assets/svg/list.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

console.log(list)

export default function App() {
  return (
    <Container className="justify-content-end">
        <Nav className="justify-content-end">
        <Routes>
          <Route path="/" element={<MainPage />} />    
        </Routes>
          <BackToTop />
        </Nav>
        <Footer />
    </Container>
  );
}

/*
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


    <Container className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" exact component={MainPage} />
        <Route path="/projects" exact component={ProjectPage} />

      </Routes>
      <BackToTop />
    </Container>
*/