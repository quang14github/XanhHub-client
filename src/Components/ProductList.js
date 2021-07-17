import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/ProductList.module.scss";
import products from "Assets/JS/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Navigation]);
  
export default function ProductList({ rows, pagination = false }) {
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={5}
        navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev'
        }}
        slidesPerView={"auto"}
        className={styles.Swiper}
        
      >
        {products.map((e) => (
          <SwiperSlide key={e.id}>
            <ProductItem data={e} />
          </SwiperSlide>
        ))}
        <div class="swiper-button-next"> {">"}</div>
     <div class="swiper-button-prev">{"<"}</div>
      </Swiper>
    </div>
  );
}

const ProductItem = ({ data }) => {
  return (
    <div title={data.post_title} className={styles.product}>
      <img src={data.thumbnail} alt={data.post_title} />
      <p className={styles.price}>$1.99</p>
      <p>{data.post_title.substring(0, 20)}</p>
    </div>
  );
};
