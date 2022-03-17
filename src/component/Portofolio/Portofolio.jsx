import React from 'react';
import './Portofolio.css';
import img1 from '../../assets/pendeteksiwajah.png'

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={img1} alt="my project" />
          </div>
          <h3>this is a portofolio item title</h3>
          <div className="portfolio_item_ctn">
            <a href="https://github.com/faisalibal33" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://pendeteksi-wajah.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live demo</a>
          </div>   
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={img1} alt="my project" />
          </div>
          <h3>this is a portofolio item title</h3>
          <div className="portfolio_item_ctn">
            <a href="https://github.com/faisalibal33" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://pendeteksi-wajah.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live demo</a>
          </div>   
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={img1} alt="my project" />
          </div>
          <h3>this is a portofolio item title</h3>
          <div className="portfolio_item_ctn">
            <a href="https://github.com/faisalibal33" className='btn' target='_blank' rel="noopener noreferrer" >Github</a>
            <a href="https://pendeteksi-wajah.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live demo</a>
          </div>   
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={img1} alt="my project" />
          </div>
          <h3>this is a portofolio item title</h3>
          <div className="portfolio_item_ctn">
            <a href="https://github.com/faisalibal33" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://pendeteksi-wajah.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live demo</a>
          </div>   
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={img1} alt="my project" />
          </div>
          <h3>this is a portofolio item title</h3>
          <div className="portfolio_item_ctn">
            <a href="https://github.com/faisalibal33" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://pendeteksi-wajah.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live demo</a>
          </div>   
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={img1} alt="my project" />
          </div>
          <h3>this is a portofolio item title</h3>
          <div className="portfolio_item_ctn">
            <a href="https://github.com/faisalibal33" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://pendeteksi-wajah.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live demo</a>
          </div>   
        </article>
      </div>
    </section>
  )
}

export default Portofolio