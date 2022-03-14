import React from 'react';
import Header from './component/Header/Header.jsx';
import About from './component/About/About';
import Nav from './component/Nav/Nav';
import Experience from './component/Experience/Experience';
import Services from './component/Services/Services';
import Portofolio from './component/Portofolio/Portofolio';
import Testimonials from './component/Testimonials/Testimonials';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

const app = () => {
  return (
      <>
        <Header />
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portofolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </>
  )
}

export default app