import React, { useEffect, useState } from 'react';
import './testimonials.css';
import axios from 'axios';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/testimonials');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  
  return (
    <section id="testimonials">
      

     
      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map(({ avatar, name, review }, index) => (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={`http://localhost:5000/${avatar}`} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  );
}

export default Testimonials;
