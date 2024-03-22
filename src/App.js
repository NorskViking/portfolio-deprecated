import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Expereince';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Footer />
    </main>
    /*
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="skills" element={<Skills />} />
      <Route path="experience" element={<Experience />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="footer" element={<Footer />} />
    </Routes>
    */
  );
}
