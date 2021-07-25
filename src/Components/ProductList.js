import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/ProductList.module.scss";
import sample from "Assets/JS/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function ProductList({
  SID,
  USER_ID,
  pagination = false,
  category = null,
  type = null,
  limit = null,
}) {
  const [product, setProducts] = React.useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    if (type === "CS") {
      const data = await fetch(
        `http://207.46.145.28/v1/recommend/product?TYPE=${type}&LIMIT=${limit}&PRODUCT_ID=${SID}`
      ).then((res) => res.json());
      const products = [];
      for (let i = 0; i < data.CS.length; i++) {
        let newProduct = fetch(
          `http://207.46.145.28/v1/product/byid?id=${data.CS[i]}`
        ).then((res) => res.json());
        products.push(newProduct);
      }
      for (let i = 0; i < products.length; i++) {
        products[i] = await products[i];
      }
      setProducts(products);
    } else if (type === "CF") {
      const data = await fetch(
        `http://207.46.145.28/v1/recommend/product?TYPE=${type}&USER_ID=${USER_ID}`
      ).then((res) => res.json());
      const products = [];
      const minNumberOfProduct = Math.min(data.CF.length, parseInt(limit));
      console.log(minNumberOfProduct);
      for (let i = 0; i < minNumberOfProduct; i++) {
        let newProduct = fetch(
          `http://207.46.145.28/v1/product/byid?id=${data.CF[i]}`
        ).then((res) => res.json());
        products.push(newProduct);
      }
      for (let i = 0; i < products.length; i++) {
        products[i] = await products[i];
      }
      setProducts(products);
    } else if (category) {
      const data = await fetch("http://207.46.145.28/v1/product/all").then(
        (res) => res.json()
      );
      const arr = data
        .filter((e) => e.CATEGORY === category)
        .filter((e) => Math.random() < 0.5);

      for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * i);
        const temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
      }
      setProducts(arr);
    }
  }, [category, SID]);
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={5}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={"auto"}
        className={styles.Swiper}
      >
        {product
          ? product.map((e) => (
              <SwiperSlide key={e.id}>
                <ProductItem data={e} />
              </SwiperSlide>
            ))
          : sample.map((e) => (
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
    <Link to={`/product/${data.SID}`}>
      <div title={data.post_title} className={styles.product}>
        <img src={data.img} alt={data.NAME} />
        <p className={styles.price}>$:{parseFloat(data.PRICE).toFixed(2)}</p>
        <p>{data.NAME.substring(0, 20)}</p>
      </div>
    </Link>
  );
};
