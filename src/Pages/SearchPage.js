import { React, useState, useEffect } from "react";
import Layout from "Components/Layout";
import styles from "Assets/Stylesheets/SCSS/Pages/SearchPage.module.scss";
import SearchBar from "Components/SearchBar";
import SearchFilter from "Components/SearchFilter";
import { Link } from "react-router-dom";
const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
export default function SearchPage() {
  const [searchInput, setSearchInput] = useState();
  const [productArray, setProductArray] = useState();
  const [category, setCategory] = useState();
  useEffect(() => {
    requestProduct();
  }, [searchInput, category]);
  async function requestProduct() {
    const res = await fetch(
      searchInput
        ? `http://207.46.145.28/v1/product/search?keyword=${searchInput}`
        : `http://207.46.145.28/v1/product/all`
    );
    const json = await res.json();
    setProductArray(() => {
      if (category && searchInput)
        return json
          .filter((e) => e.item.CATEGORY === category || category === "all")
          .map((e) => e.item);
      if (category && !searchInput)
        return json.filter(
          (e) => e.CATEGORY === category || category === "all"
        );
      if (!category && searchInput) return json.map((e) => e.item);
      return "";
    });
  }
  return (
    <Layout>
      {/* <div> */}
      <div className={styles.searchBox}>
        <div className={styles.overlay}></div>
        <div className={styles.searchPosition}>
          <SearchBar insert={(keyword) => setSearchInput(keyword)} />
        </div>
      </div>
      <div className={styles.filter}>
        <SearchFilter insert={(word) => setCategory(word)} />
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {/* </div> */}
    </Layout>
  );
}
