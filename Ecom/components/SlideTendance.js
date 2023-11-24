"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import CardProducts from "./CardProducts";

const SlideTendance = ({products}) => {
    
  return (
    <section className="container-swiper">
      <Swiper
        className="swiper"
        modules={[Pagination]}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
        { products && products.slice(0,5).map((product) => (
          <SwiperSlide className="swiper-card " key={product.id} >
            <CardProducts
            product={product} 
            key={product.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SlideTendance;
