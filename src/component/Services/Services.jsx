import React from 'react';
import './Services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services' className='services_block'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='services'>
          <div className='services_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className='services_head'>
            <h3>Web development</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className='services_head'>
            <h3>Content creator</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services