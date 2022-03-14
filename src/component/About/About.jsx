import React from 'react'
import './About.css';
import about from '../../assets/aboutfaisal.jpg';
import {BsAward, BsFolder2Open} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'


const About = () => {
  return (
    
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_img">
              <img src={about} alt="about faisal" />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <BsAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about_card'>
                <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>3</small>
              </article>

              <article className='about_card'>
                <BsFolder2Open className='about_icon'/>
                <h5>Project</h5>
                <small>5</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum blanditiis, error quisquam assumenda atque dicta, unde architecto dolores facilis alias aliquam, ipsam maxime ad placeat. Blanditiis culpa est quis.
            </p>

            <a href="#contact" className='btn btn-primary'> Lets Talk </a>
          </div>
        </div>
    </section>
  )
}

export default About