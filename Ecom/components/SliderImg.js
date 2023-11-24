"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import CardImage from "./CardImage";
import chemise from '@/public/images/chemisecolection.png';
import sacmain from '@/public/images/sacmain.png'
import sacvuiton from '@/public/images/sacmainvuiton.jpg'
import tallon from '@/public/images/talloncolect.jpg'

const SliderImg = () => {
    const clients = [
        {id:'1',img:chemise},
        {id:'2',img:sacmain},
        {id:'3',img:sacvuiton},
        {id:'4',img:tallon},
        {id:'5',img:sacmain}
    ]

  return (
    <section className="container-swiper">
      <Swiper
        className="swiper"
        modules={[Pagination]}
        slidesPerView={4}
        pagination={{ clickable: true }}
        
      >
      {clients.map((item) => 
        (
        <SwiperSlide className="swiper-card " key={item.id}>
          <CardImage item={item} key={item.id} />
        </SwiperSlide>
        ))
      }
      </Swiper>
      
    </section>
  );
};

export default SliderImg;
