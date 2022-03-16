import React from 'react';
import './Testimonials.css';
import avatar1 from '../../assets/aboutfaisal.jpg'
// import Swiper core and required modules
import { Pagination,Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avatar1,
    nama: 'faisal',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci accusantium quae reiciendis facilis unde recusandae. Sed aliquam iusto ipsum laboriosam, assumenda perferendis porro repudiandae a, repellendus inventore in error!"
  },
  {
    avatar: avatar1,
    nama: 'iqbal',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nulla?"
  },
  {
    avatar: avatar1,
    nama: 'herroix',
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam ipsam ipsa neque doloribus voluptatibus eius magnam repellendus asperiores rerum."
  },
  {
    avatar: avatar1,
    nama: 'sock',
    review: "Lorem ipsum dolor sit amet."
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5> Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {
          data.map(({avatar, nama, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <div>
                  <h5>{nama}</h5>
                  <small className='review'>
                    {review}
                  </small>
                </div>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials;