import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrolltoTop from "./components/common/ScrolltoTop";
import { ScrollProvider } from "./hooks/ScrollContext";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const Careers = lazy(() => import("./pages/Careers"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Tensile = lazy(() => import("./pages/Tensile"));
const Poly = lazy(() => import("./pages/Poly"));
const Shingle = lazy(() => import("./pages/Shingle"));
const Reactrable = lazy(() => import("./pages/Reactrable"));
const Glassroof = lazy(() => import("./pages/Glassroof"));
const Puf = lazy(() => import("./pages/Puf"));
const Manglore = lazy(() => import("./pages/Manglore"));
const Peb = lazy(() => import("./pages/Peb"));
const Facade = lazy(() => import("./pages/Facade"));

const MainLayout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
    <ScrolltoTop />
  </div>
);

const NoNavbarLayout = () => (
  <div>
    <Outlet />
  </div>
);

const SkeletonLoader = () => (
  <div>
    <Skeleton height={40} width={300} style={{ marginBottom: 20 }} />
    <Skeleton height={20} count={20} />
  </div>
);

const App = () => {

  return (
    <ScrollProvider>
      <HelmetProvider>
        <Router basename="/">
          <Suspense fallback={<SkeletonLoader />}>
            <Routes>
              <Route element={<MainLayout />}>
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
              </Route>
              <Route element={<NoNavbarLayout />}>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </ScrollProvider>
  );
};

export default App;
