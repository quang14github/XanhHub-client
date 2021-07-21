import { React, useEffect } from "react";
import Layout from "Components/Layout";
import Information from "Components/Product/Information";
import RelatedProduct from "Components/Product/RelatedProduct";
import ListInfo from "Components/Product/ListInfo";
import AboutCompany from "Components/Product/AboutCompany";
import Review from "Components/Product/Review";
import styles from "Assets/Stylesheets/SCSS/Pages/ProductPage.module.scss";
import { useState } from "react";
export default function ProductPage(props) {
  const productid = props.match.params.productid;
  const [Product, setProduct] = useState();
  useEffect(() => {
    requestProduct();
  }, [props]);
  async function requestProduct() {
    const res = await fetch(
      `http://207.46.145.28/v1/product/byid?id=${productid}`
    );
    const json = await res.json();
    setProduct(json);
  }
  return (
    <Layout>
  {Product? <>
  <div className={styles.product}>
    <div className={styles.main}>
      <Information product={Product} />
      {console.log(Product)}
      <RelatedProduct />
    </div>
  </div>
  <ListInfo product={Product} />
  <AboutCompany product={Product} />
  <Review />
  </>:<div style={{height:'100%'}}></div>
  }
    </Layout>
  );
}

