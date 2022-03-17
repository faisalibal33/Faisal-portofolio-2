import React from 'react';
import './Footer.css';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer_logo'>Faisal</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portofolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://web.facebook.com/swaeipers/"><BsFacebook/></a>
        <a href="https://www.instagram.com/faisalibal/"><BsInstagram/></a>
        <a href="https://twitter.com/faisalibal"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Faisal</small>
      </div>
    </footer>
  )
}

export default Footer;