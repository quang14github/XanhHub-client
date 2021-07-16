import React from "react";
import Layout from "Components/Layout";
import styles from "Assets/Stylesheets/SCSS/Pages/ProductPage.module.scss";
export default function ProductPage() {
  return (
    <Layout>
      <div className={styles.product}>
        <div className={styles.main}>
          <div className={styles.image}>
            <img
              src="https://d13wriz42ny3t5.cloudfront.net/production/2017/08/23230805/love-bottle-city-love-recycled-glass-water-bottle.jpg"
              alt="product"
            />
          </div>

          <div className={styles.information}>
            <div>
              <h1>City Love Water Bottle</h1>
              <h2>Ratings: </h2>
            </div>
            {/* divider */}
            <div></div>
            {/* divider */}
            <div>
              <h3>$: 14.99</h3>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
