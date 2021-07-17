import { React, useState } from "react";
import Layout from "Components/Layout";
import Information from "Components/Product/Information";
import RelatedProduct from "Components/Product/RelatedProduct";
import ListInfo from "Components/Product/ListInfo";
import AboutCompany from "Components/Product/AboutCompany";
import Review from "Components/Product/Review";
import styles from "Assets/Stylesheets/SCSS/Pages/ProductPage.module.scss";
export default function ProductPage() {
  return (
    <Layout>
      <div className={styles.product}>
        <div className={styles.main}>
          <Information />
          <RelatedProduct />
        </div>
      </div>
      <ListInfo />
      <AboutCompany />
      <Review />
    </Layout>
  );
}
