import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/RelatedProduct.module.scss";
//import ProductInformation from "./Information";
import ProductList from "Components/ProductList";
// const products = [
//   {
//     url: "https://d13wriz42ny3t5.cloudfront.net/production/2017/08/23230802/love-bottle-family-recycled-glass-water-bottle-300x300.jpg",
//     name: "All Clear Water Bottle",
//     price: "$24.99",
//   },
  // {
  //   url: "https://d13wriz42ny3t5.cloudfront.net/production/2017/08/23230802/love-bottle-family-recycled-glass-water-bottle-300x300.jpg",
  //   name: "Honey Water Bottle",
  //   price: "$24.99",
  // },
  // {
  //   url: "https://d13wriz42ny3t5.cloudfront.net/production/2017/08/23230802/love-bottle-family-recycled-glass-water-bottle-300x300.jpg",
  //   name: "Family Water Bottle",
  //   price: "$24.99",
  // },
  // {
  //   url: "https://d13wriz42ny3t5.cloudfront.net/production/2017/08/23230802/love-bottle-family-recycled-glass-water-bottle-300x300.jpg",
  //   name: "Peace Water Bottle",
  //   price: "$24.99",
  // },
  // {
  //   url: "https://d13wriz42ny3t5.cloudfront.net/production/2017/08/23230802/love-bottle-family-recycled-glass-water-bottle-300x300.jpg",
  //   name: "Mandala Water Bottle",
  //   price: "$24.99",
  // },
  // {
  //   url: "https://d13wriz42ny3t5.cloudfront.net/production/2017/08/23230802/love-bottle-family-recycled-glass-water-bottle-300x300.jpg",
  //   name: "Love Our Earth Water Bottle",
  //   price: "$24.99",
  // },
//];
export default function RelatedProduct() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>RELATED PRODUCTS</h3>
      {/* <div className={styles.products}>
        {products.map((product) => (
          <div className={styles.product}>
            <img src={product.url} alt={product.name} />
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div> */}
      <ProductList/>
    </div>
  );
}
