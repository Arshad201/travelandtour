// import React, { useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './Testimonial.css'

// import required modules
import { Pagination } from "swiper";

import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonial = () => {

const data = [1,2,3,4,5,6,7,8,9,10]



  return (
    <div className="testimonal-container">
      <div className="header-container">
        <h2 className="testimonal-heading"> TESTIMONIALS</h2>
        <div className="heaidng-underline"></div>
      </div>
      <div className="testimonal-swiper">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="Testi-Slider">
          {
           data.map((testimonial,index)=>(
            <SwiperSlide>
                <TestimonialCard key={index} ></TestimonialCard>
            </SwiperSlide>
           ))
          }
          </div>
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>

    </div>
  );
};

export default Testimonial;
