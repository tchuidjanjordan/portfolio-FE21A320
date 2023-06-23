import React, { useEffect, useState } from 'react';
import './testimonials.css';
import axios from 'axios';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const  Testimonials=() =>{
 
  const [data, setData] = useState([{}]);
  useEffect(() => {
    axios
      .get('https://jolly-tights-hen.cyclic.app/api/testimonial')
      .then(response => {
        const formattedData =response.data.data.map(item =>({
          id:item._id,
          avatar:item.avatar,
          name:item.name,
          review:item.review,
          
        }));
        setData(formattedData)
      }).catch(error=>{console.log("error fetching testimonials data",error);})
    },[])
      
  
  return (
      <section id='portfolio'>
      <h5>My Recent Review</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        { (
          data.map(({ avatar, name, review }, index) => (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
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
