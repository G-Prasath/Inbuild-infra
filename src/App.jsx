import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrolltoTop from './components/common/ScrolltoTop';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

import Tensile from './pages/Tensile';
import Poly from './pages/Poly';
import Shingle from './pages/Shingle';
import Reactrable from './pages/Reactrable';
import Glassroof from './pages/Glassroof';
import Puf from './pages/Puf';
import Manglore from './pages/Manglore';
import Peb from './pages/Peb';
import Facade from './pages/Facade';




const App = () => {

  return (
    <HelmetProvider>
      <Router basename="/">
        <ScrolltoTop />
        <Navbar />
        <React.Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/projects" element={<Projects />} />

            <Route path='/tensile' element={<Tensile />} />
            <Route path='/Poly' element={<Poly />} />
            <Route path='/Shingle' element={<Shingle />} />
            <Route path='/Glassroof' element={<Glassroof />} />
            <Route path='/Puf' element={<Puf />} />
            <Route path='/Peb' element={<Peb />} />
            <Route path='/Facade' element={<Facade />} />



            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App
