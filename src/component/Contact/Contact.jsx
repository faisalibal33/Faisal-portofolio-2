import React from 'react';
import './Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger, BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>faisaliqbal030397@gmail.com</h5>
            <a href="mailto:faisaliqbal030397@gmail.com" target='_blank' rel="noreferrer">Send a messages</a>
          </article>
          <article className='contact_option'>
            <BsMessenger className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>Faisal Iqbal</h5>
            <a href="https://m.me/swaeipers" target='_blank' rel="noreferrer">Send a messages</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <h5>+62859106712867</h5>
            <a href="https://api.whatsapp.com/send?phone=+62859106712867" rel="noreferrer" target='_blank'>Send a messages</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Messages' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact