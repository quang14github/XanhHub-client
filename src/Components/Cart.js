import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Cart.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import useCompany from "./useCompany";
const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();
export default function Cart(props) {
  const userCart = useSelector((state) => state.cart.cart);
  const companys = useCompany();
  const [Quantity, setQuantity] = useState(
    userCart.map((e) => parseInt(e.count))
  );
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.topBarProduct}>
          <input type="checkbox" />
          <p>Product</p>
        </div>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      {userCart.map((e, index) => (
        <div className={styles.product}>
          <div className={styles.info}>
            <input type="checkbox" />
            <div className={styles.image}>
              <img src={e.img} alt="product" />
            </div>
            <div className={styles.name_group}>
              <p className={styles.shop_name}>
                {entities.decode(companys[e.supCode].name)}
              </p>
              <p className={styles.product_name}>{e.name}</p>
            </div>
          </div>
          <div className={styles.subInfo}>
            <div className={styles.selectQuantity}>
              <span
                onClick={() =>
                  setQuantity(
                    Quantity.map((element, elementIndex) => {
                      if (elementIndex === index && element > 1)
                        return element - 1;
                      return element;
                    })
                  )
                }
              >
                {"\u2212"}
              </span>
              <input
                className={styles.quantity}
                type="number"
                value={Quantity[index]}
                min="1"
                max="99"
                onChange={(e) =>
                  setQuantity(
                    Quantity.map((element, elementIndex) => {
                      if (
                        elementIndex === index &&
                        e.target.value < 100 &&
                        e.target.value > 0
                      )
                        return Math.floor(e.target.value);
                      return element;
                    })
                  )
                }
              />
              <span
                onClick={() =>
                  setQuantity(
                    Quantity.map((element, elementIndex) => {
                      if (elementIndex === index && element < 99)
                        return element + 1;
                      return element;
                    })
                  )
                }
              >
                +
              </span>
            </div>
            <p className={styles.subTotal}>
              ${(Quantity[index] * e.price).toFixed(2)}
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.mainButton}>Remove </button>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.checkoutArea}>
        <div>
          Total cost:
          {Quantity.reduce(function (total, currentProduct, currentIndex) {
            return total + currentProduct * userCart[currentIndex].price;
          }, 0).toFixed(2)}
        </div>
        <button onClick={() => props.checkout(!props.toCheckout)}>
          CHECKOUT!!!
        </button>
      </div>
    </div>
  );
}
