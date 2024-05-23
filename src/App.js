import React from 'react';

import MainPage from './pages/Main/MainPage'

import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop';

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
