import React from 'react';
import './Header.css';
import CTA from './CTA';
import faisal from '../../assets/faisal3.jpg'
import Social from './Social';

const Header = () => {
  return (
    <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Faisal Iqbal</h1>
          <h5 className="text-light">
            Fullstack Developer
          </h5>
          <CTA/>
          <Social/>

          <div className="me">
            <img src={faisal} alt="faisal photos" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>     
    </header>
  )
}

export default Header;