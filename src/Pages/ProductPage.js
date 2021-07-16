import { React, useState } from "react";
import Layout from "Components/Layout";
import Information from "Components/Product/Information";
import SideInformation from "Components/Product/SideInformation";
import styles from "Assets/Stylesheets/SCSS/Pages/ProductPage.module.scss";
import ReactStars from "react-rating-stars-component";
export default function ProductPage() {
  return (
    <Layout>
      <div className={styles.product}>
        <div className={styles.main}>
          <Information />
          <SideInformation />
        </div>
      </div>
    </Layout>
  );
}
