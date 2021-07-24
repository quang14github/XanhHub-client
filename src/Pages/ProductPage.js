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
  const [thisProduct, setThisProduct] = useState();
  useEffect(() => {
    requestProduct();
  }, [props]);
  async function requestProduct() {
    const res = await fetch(
      `http://207.46.145.28/v1/product/byid?id=${productid}`
    );
    const json = await res.json();
    setThisProduct(json);
  }
  return (
    <Layout>
      {thisProduct && !thisProduct.err ? (
        <>
          <div className={styles.product}>
            <div className={styles.main}>
              <Information product={thisProduct} />
              <RelatedProduct SID={thisProduct.SID} cat={thisProduct.CATEGORY}/>
            </div>
          </div>
          <ListInfo product={thisProduct} />
          <AboutCompany product={thisProduct} />
          <Review product={thisProduct} />
        </>
      ) : (
        <div style={{ height: "100%" }}></div>
      )}
    </Layout>
  );
}
