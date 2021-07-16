import { React, useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Pages/ProductPage.module.scss";
import ReactStars from "react-rating-stars-component";
export default function ProductInformation() {
  const [NumItem, setNumItem] = useState("1");
  return (
    <>
      <div className={styles.image}>
        <img
          src="https://d13wriz42ny3t5.cloudfront.net/production/2017/08/23230751/love-bottle-power-of-words-recycled-glass-water-bottle.jpg"
          alt="product"
        />
      </div>

      <div className={styles.information}>
        <div>
          <h1 className={styles.name}>Power of Words</h1>
          <ReactStars
            value={4.5}
            activeColor="#5dc269"
            isHalf={true}
            size={22}
            edit={false}
          />
          <p className={styles.totalReview}>(142 customers review)</p>
          <div>
            <h3 className={styles.price}>$: 24.99</h3>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Inmensae
              subtilitatis, obscuris et malesuada fames. Morbi fringilla
              convallis sapien, id pulvinar odio volutpat. Ut enim ad minim
              veniam, quis nostrud exercitation. Quisque placerat facilisis
              egestas cillum dolore.
            </p>
            <p className={styles.stock}>142 in stock</p>
            <input
              type="number"
              value={NumItem}
              min="1"
              max="99"
              onChange={(e) => setNumItem(e.target.value)}
            />
            <button>Add to Cart</button>
            <div className={styles.categories}>
              Categories:
              <span> Drinkware,</span>
              <span> Travel</span>
            </div>
            <div className={styles.tags}>
              Tags:
              <span> reusable,</span>
              <span> glass</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
