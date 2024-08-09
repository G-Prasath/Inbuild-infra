import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { HomePageData as metaTags } from '../data/Metatag';

// Lazy load components
const Banner = lazy(() => import("../components/Home/Banner"));
const About = lazy(() => import("../components/Home/About"));
const Cta = lazy(() => import("../components/Home/Cta"));
const Faq = lazy(() => import("../components/Home/Faq"));
const Services = lazy(() => import("../components/Home/Services"));
const Gallery = lazy(() => import("../components/Home/Gallery"));
const Whychoose = lazy(() => import("../components/Home/Whychoose"));
const HomeForm = lazy(() => import("../components/Home/HomeForm"));
const Brands = lazy(() => import("../components/Home/Brands"));
const Blog = lazy(() => import("../components/Home/Blog"));

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <link rel="preload" href="/Banners/homeBanner_1.avif" as="image" />
        <link rel="preload" href="/Banners/homeBanner_2.avif" as="image" />
        <link rel="preload" href="/Banners/homeBanner_3.avif" as="image" />
        <link rel="preload" href="/Banners/homeBanner_4.avif" as="image" />

      </Helmet>
      <Suspense fallback={<div/>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<div/>}>
        <About />
      </Suspense>
      <Suspense fallback={<div/>}>
        <Brands />
      </Suspense>
      <Suspense fallback={<div/>}>
        <Whychoose />
      </Suspense>
      <Suspense fallback={<div/>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div/>}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<div/>}>
        <Blog />
      </Suspense>
      <Suspense fallback={<div/>}>
        <Faq />
      </Suspense>
      <Suspense fallback={<div/>}>
        <HomeForm />
      </Suspense>
      <Suspense fallback={<div/>}>
        <Cta />
      </Suspense>
    </div>
  );
};

export default Home;
