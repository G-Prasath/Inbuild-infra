import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from './components/common/Loading';
import ScrolltoTop from './components/common/ScrolltoTop';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';


const App = () => {

  return (
    <HelmetProvider>
      <Router basename="/">
        <ScrolltoTop />
        <Navbar />
        <React.Suspense fallback={<div/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/projects" element={<Projects />} />
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
