import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrolltoTop from "./components/common/ScrolltoTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

import Tensile from "./pages/Tensile";
import Poly from "./pages/Poly";
import Shingle from "./pages/Shingle";
import Reactrable from "./pages/Reactrable";
import Glassroof from "./pages/Glassroof";
import Puf from "./pages/Puf";
import Manglore from "./pages/Manglore";
import Peb from "./pages/Peb";
import Facade from "./pages/Facade";
import { ScrollProvider } from "./hooks/ScrollContext";
import Dummy from "./pages/Dummy";

const App = () => {
  return (
    <ScrollProvider>
      <HelmetProvider>
        <Router basename="/">
          <ScrolltoTop />
          <Navbar />
          <React.Suspense fallback={<div />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/projects" element={<Projects />} />

              <Route path="/tensile" element={<Tensile />} />
              <Route path="/polycarbonate" element={<Poly />} />
              <Route path="/shingles" element={<Shingle />} />
              <Route path="/glass-roof" element={<Glassroof />} />
              <Route path="/puff-sheet" element={<Puf />} />
              <Route path="/pre-engineered-building" element={<Peb />} />
              <Route path="/facade" element={<Facade />} />
              <Route path="/retractable" element={<Reactrable />} />
              <Route path="/mangalore-tile" element={<Manglore />} />

              <Route path="/careers" element={<Careers />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/dummys" element={<Dummy/>}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
          <Footer />
        </Router>
      </HelmetProvider>
    </ScrollProvider>
  );
};

export default App;
