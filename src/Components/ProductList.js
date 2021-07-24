import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/ProductList.module.scss";
import sample from "Assets/JS/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Navigation]);
  
export default function ProductList({ rows, pagination = false ,category=null}) {
  const [product,setProducts]=React.useState(null)
  React.useEffect(async()=>{
    if(category){
      const data=await fetch('http://207.46.145.28/v1/product/all').then(res=>res.json())
      const arr=data.filter(e=>e.CATEGORY===category).filter(e=>Math.random()<.5)
      
      for(let i=0;i<arr.length;i++){
          let index=Math.floor(Math.random()*i)
          const temp=arr[i]
          arr[i]=arr[index]
          arr[index]=temp;
      }
      setProducts(arr)
      
     
    }
  },[category])
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
        {product?product.map((e) => (
          <SwiperSlide key={e.id}>
            <ProductItem data={e} />
          </SwiperSlide>
        )):sample.map((e) => (
          <SwiperSlide key={e.id}>
            <SampleProduct data={e} />
          </SwiperSlide>
        ))}
        <div class="swiper-button-next"> {">"}</div>
     <div class="swiper-button-prev">{"<"}</div>
      </Swiper>
    </div>
  );
}

const SampleProduct = ({ data }) => {
  return (
    <div title={data.post_title} className={styles.product}>
      <img src={data.thumbnail} alt={data.post_title} />
      <p className={styles.price}>$1.99</p>
      <p>{data.post_title.substring(0, 20)}</p>
    </div>
  );
};

const ProductItem = ({ data }) => {
  return (
    <div title={data.post_title} className={styles.product}>
      <img src={data.img} alt={data.NAME} />
      <p className={styles.price}>$:{parseFloat(data.PRICE).toFixed(2)}</p>
      <p>{data.NAME.substring(0, 20)}</p>
    </div>
  );
};
