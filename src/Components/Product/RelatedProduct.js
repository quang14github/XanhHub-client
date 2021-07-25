import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/RelatedProduct.module.scss";
//import ProductInformation from "./Information";
import ProductList from "Components/ProductList";
export default function RelatedProduct({ cat, SID }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>RELATED PRODUCTS</h3>

      <ProductList SID={SID} type="CS" limit="10" />
    </div>
  );
}
