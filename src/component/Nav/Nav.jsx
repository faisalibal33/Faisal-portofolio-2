import React from 'react'
import './Nav.css';
import {FiHome, FiUser} from 'react-icons/fi';
import {BsBook} from 'react-icons/bs'
import {MdHomeRepairService} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><FiHome/></a>
      <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about'? 'active' : ''}><FiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav === 'experience'? 'active' : ''}><BsBook/></a>
      <a href="#services" onClick={() => setActiveNav('services')} className={activeNav === 'services'? 'active' : ''}><MdHomeRepairService/></a>
      <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact'? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav