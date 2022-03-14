import React from 'react';
import './Experience.css';
import {BsBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience_container">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsBookmarkCheckFill className='experience_details_icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text_light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsBookmarkCheckFill className='experience_details_icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text_light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsBookmarkCheckFill className='experience_details_icon'/>
                <div>
                  <h4>Javascript</h4>
                  <small className='text_light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsBookmarkCheckFill className='experience_details_icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text_light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsBookmarkCheckFill className='experience_details_icon'/>
                <div>
                  <h4>Tailwind</h4>
                  <small className='text_light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsBookmarkCheckFill className='experience_details_icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text_light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience_backend">
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsBookmarkCheckFill className='experience_details_icon'/>
                <div>
                  <h4>Postgresql</h4>
                  <small className='text_light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsBookmarkCheckFill className='experience_details_icon'/>
                <div>
                  <h4>Node.js</h4>
                  <small className='text_light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsBookmarkCheckFill className='experience_details_icon'/>
                <div>
                  <h4>Express.js</h4>
                  <small className='text_light'>Intermdeiate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsBookmarkCheckFill className='experience_details_icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text_light'>Basic</small>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience