import { React, useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Information.module.scss";
import ReactStars from "react-rating-stars-component";
import useCompany from "Components/useCompany";
import { useAddToCart } from "Hooks";
const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const iconURL = [
  "https://d13wriz42ny3t5.cloudfront.net/production/2017/06/23231934/icons_b-corp.png",
  "https://d13wriz42ny3t5.cloudfront.net/production/2017/06/23231926/icons_sustainable-lifestyle.png",
  "https://d13wriz42ny3t5.cloudfront.net/production/2017/06/23231933/icons_charitable.png",
  "https://d13wriz42ny3t5.cloudfront.net/production/2017/07/23231914/bpa_free.png",
  "https://d13wriz42ny3t5.cloudfront.net/production/2017/06/23231930/icons_made-in-the-usa.png",
];

export default function Information({ product }) {
  const onAddToCart = useAddToCart();

  const [NumItem, setNumItem] = useState("1");
  const companys = useCompany();
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img src={product.img} alt="product" />
      </div>

      <div className={styles.information}>
        <p className={styles.company}>
          {entities.decode(companys[product.company].name)}
        </p>
        <h2 className={styles.name}>{entities.decode(product.NAME)}</h2>
        <div className={styles.starRating}>
          <ReactStars
            value={product.AVG_RATING}
            activeColor="#ecb338"
            isHalf={true}
            size={22}
            edit={false}
          />
        </div>
        <p className={styles.totalReview}>
          ({product.RATE_COUNTS} customer review)
        </p>
        <p className={styles.price}>${product.PRICE.toFixed(2)}</p>
        <div className={styles.addContainer}>
          <p className={styles.earnPoint}>
            EARN UP TO <span>24 XANHHUB POINTS</span> FOR THIS PURCHASE!
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onAddToCart({
                count: NumItem,
                id: product.SID,
                supCode: product.company,
                img: product.img,
                price: product.PRICE.toFixed(2),
                name: product.NAME,
                checkout: false,
              });
              alert(`ADDED ${NumItem} x ${product.NAME}!`);
            }}
            className={styles.form}
          >
            <input
              className={styles.num}
              type="number"
              value={NumItem}
              min="1"
              max="99"
              pattern="[1-9]{1}[0-9]{1}"
              onChange={(e) => setNumItem(e.target.value)}
            />
            <button className={styles.addToCart}>ADD TO CART</button>
          </form>
          <p className={styles.freeShip}>FREE SHIPPING $50+ | FREE RETURNS</p>
        </div>
        <div className={styles.icon}>
          {iconURL.map((url, i) => (
            <div key={"icon-" + i} className={styles.iconImage}>
              <img src={url} alt={`icon${i}`} />
            </div>
          ))}
        </div>
        <p className={styles.description}>
          {entities.decode(product.des.replace(/\\r\\n/g, ""))}
        </p>
        <div className={styles.jump}>
          <p className={styles.goTo}>GO TO:</p>
          <a href="#feature">Sustainability Features</a>
          <a href="#spec">Product Specifications</a>
          <a href="#company">Learn More About Love Bottle</a>
        </div>
      </div>
    </div>
  );
}
