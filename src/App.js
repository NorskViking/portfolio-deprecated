import React from 'react';

import MainPage from './pages/Main/MainPage'
import ProjectPage from './pages/Project/ProjectPage'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import BackToTop from './components/BackToTop/BackToTop'

import Footer from './components/Footer/Footer';

import { Routes, Route } from 'react-router-dom';
import list from './assets/svg/list.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop';

console.log(list)

export default function App() {
  return (
    <Container fluid className='app'>
        <Routes>
          <Route path="/" element={<MainPage />} />  
        </Routes>
        <ScrollToTopButton/>
    </Container>
  );
}
