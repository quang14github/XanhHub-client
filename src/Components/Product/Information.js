import { React, useState, useEffect } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Information.module.scss";
import ReactStars from "react-rating-stars-component";
import UseCompany from "Components/UseCompany";
const iconURL = [
  "https://d13wriz42ny3t5.cloudfront.net/production/2017/06/23231934/icons_b-corp.png",
  "https://d13wriz42ny3t5.cloudfront.net/production/2017/06/23231926/icons_sustainable-lifestyle.png",
  "https://d13wriz42ny3t5.cloudfront.net/production/2017/06/23231933/icons_charitable.png",
  "https://d13wriz42ny3t5.cloudfront.net/production/2017/07/23231914/bpa_free.png",
  "https://d13wriz42ny3t5.cloudfront.net/production/2017/06/23231930/icons_made-in-the-usa.png",
];
const reactStarsValue = Math.random() * 3 + 3.5;
const totalReviewValue = Math.floor(Math.random() * 101) + 50;
const priceValue =
  `${Math.floor(Math.random() * 5) + 5}` +
  "." +
  `${Math.floor(Math.random() * 90) + 10}`;
export default function Information(props) {
  const [NumItem, setNumItem] = useState("1");
  const [Company, setCompany] = useState();
  const [ProductName, setProductName] = useState();
  const [ProductImage, setProductImage] = useState();
  const [ProductDescription, setProductDescription] = useState();
  const productid = props.productid;
  console.log(productid);
  useEffect(() => {
    requestProduct();
  }, []);
  async function requestProduct() {
    const res = await fetch(
      `http://207.46.145.28/v1/product/byid?id=${productid}`
    );
    const json = await res.json();
    console.log(res);
    setCompany("A");
    setProductName(json.NAME);
    setProductImage(json.img);
    setProductDescription(json.des);
  }
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img src={ProductImage} alt="product" />
      </div>

      <div className={styles.information}>
        <p className={styles.company}>{Company}</p>
        <h2 className={styles.name}>{ProductName}</h2>
        <div className={styles.starRating}>
          <ReactStars
            value={reactStarsValue}
            activeColor="#ecb338"
            isHalf={true}
            size={22}
            edit={false}
          />
        </div>
        <p className={styles.totalReview}>
          ({totalReviewValue} customer review)
        </p>
        <p className={styles.price}>${priceValue}</p>
        <div className={styles.addContainer}>
          <p className={styles.earnPoint}>
            EARN UP TO <span>24 XANHHUB POINTS</span> FOR THIS PURCHASE!
          </p>
          <form className={styles.form}>
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
            <div className={styles.iconImage}>
              <img src={url} alt={`icon${i}`} />
            </div>
          ))}
        </div>
        <p className={styles.description}>{ProductDescription}</p>
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
