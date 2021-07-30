import { React, useState, useEffect } from "react";
import Layout from "Components/Layout";
import styles from "Assets/Stylesheets/SCSS/Pages/SearchPage.module.scss";
import SearchBar from "Components/SearchBar";
import SearchFilter from "Components/SearchFilter";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import ProductList from "Components/ProductList";
import useProduct from "Hooks/useProduct";
const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
export default function SearchPage() {
  const productArray = useProduct();
  // const searchInput = useSelector((state) => state.search.searchInput);
  // const [productArray, setProductArray] = useState();
  // const category = useSelector((state) => state.search.category);
  const userId = useSelector((state) => state.user.userid);
  // useEffect(() => {
  //   requestProduct();
  // }, [searchInput, category]);
  // async function requestProduct() {
  //   const res = await fetch(
  //     searchInput
  //       ? `http://207.46.145.28/v1/product/search?keyword=${searchInput}`
  //       : `http://207.46.145.28/v1/product/all`
  //   );
  //   const json = await res.json();
  //   setProductArray(() => {
  //     if (category && searchInput)
  //       return json
  //         .filter((e) => e.item.CATEGORY === category || category === "all")
  //         .map((e) => e.item);
  //     if (category && !searchInput)
  //       return json.filter(
  //         (e) => e.CATEGORY === category || category === "all"
  //       );
  //     if (!category && searchInput) return json.map((e) => e.item);
  //     return "";
  //   });
  // }
  return (
    <Layout>
      {/* <div> */}
      <div className={styles.searchBox}>
        <div className={styles.overlay}></div>
        <div className={styles.searchPosition}>
          <SearchBar />
        </div>
      </div>
      <div className={styles.filter}>
        <SearchFilter />
      </div>
      {productArray ? (
        <div className={styles.background}>
          <div className={styles.productViewArea}>
            {productArray.map((e) => (
              <Link to={`/product/${e.SID}`}>
                <div className={styles.productContainer}>
                  <div className={styles.image}>
                    <img src={e.img} alt="product" />
                  </div>
                  <p className={styles.productName}>
                    {entities.decode(e.NAME)}
                  </p>
                  <p className={styles.productPrice}>${e.PRICE.toFixed(2)}</p>
                  <ReactStars
                    value={e.AVG_RATING}
                    activeColor="#ecb338"
                    isHalf={true}
                    size={15}
                    edit={false}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.initialView}>
          <div>
            <h1>Recommend For You</h1>
            <ProductList type="CF" USER_ID={userId} limit="10" />
          </div>
          <div>
            <h1>Hot Deals</h1>
            <ProductList category="toy" />
          </div>
          <div>
            <h1>New Arrivals</h1>
            <ProductList category="lunchtime" />
          </div>
        </div>
      )}
      {/* </div> */}
    </Layout>
  );
}
