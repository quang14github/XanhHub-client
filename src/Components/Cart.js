import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Cart.module.scss";
//import { useState } from "react";
import { useSelector } from "react-redux";
import useCompany from "./useCompany";
import { useAddToCart } from "Hooks";
const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();
let isCheckoutAll = false;
export default function Cart(props) {
  const userCart = useSelector((state) => state.cart.cart);
  const companys = useCompany();
  const onAddToCart = useAddToCart();
  return (
    <div className={`${styles.container}`}>
      <div  className={`${styles.topBar} ${props.toCheckout?styles.lock:''}`}>
        <div className={styles.topBarProduct}>
          <input
            type="checkbox"
            onClick={() => {
              isCheckoutAll = !isCheckoutAll;
              userCart.forEach((e) => {
                onAddToCart({
                  count: "0",
                  id: e.id,
                  supCode: e.company,
                  img: e.img,
                  price: e.price,
                  name: e.name,
                  checkout: isCheckoutAll,
                });
              });
            }}
          />
          <p>Product</p>
        </div>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      {userCart.map((e,i) => (
        <div key={i} className={`${styles.product} ${props.toCheckout?styles.lock:''}`}>
          <div className={styles.info}>
            <input
              type="checkbox"
              onClick={() => {
                console.log(e.checkout);
                onAddToCart({
                  count: "0",
                  id: e.id,
                  supCode: e.company,
                  img: e.img,
                  price: e.price,
                  name: e.name,
                  checkout: !e.checkout,
                });
              }}
              checked={e.checkout ? true : false}
            />
            <div className={styles.image}>
              <img src={e.img} alt="product" />
            </div>
            <div className={styles.name_group}>
              <p className={styles.shop_name}>
                {entities.decode(companys[e.supCode].name)}
              </p>
              <p className={styles.product_name}>{entities.decode(e.name)}</p>
            </div>
          </div>
          <div className={styles.subInfo}>
            <div className={styles.selectQuantity}>
              <span
                onClick={() => {
                  if (e.count > 1)
                    onAddToCart({
                      count: "-1",
                      id: e.id,
                      supCode: e.company,
                      img: e.img,
                      price: e.price,
                      name: e.name,
                      checkout: e.checkout,
                    });
                }}
              >
                {"\u2212"}
              </span>
              <input
                className={styles.quantity}
                type="number"
                value={e.count}
                min="1"
                max="99"
                onChange={(event) => {
                  let newCount = event.target.value - e.count;
                  if (event.target.value > 0 && event.target.value < 100)
                    onAddToCart({
                      count: newCount,
                      id: e.id,
                      supCode: e.company,
                      img: e.img,
                      price: e.price,
                      name: e.name,
                      checkout: e.checkout,
                    });
                }}
              />
              <span
                onClick={() => {
                  if (e.count < 99)
                    onAddToCart({
                      count: "1",
                      id: e.id,
                      supCode: e.company,
                      img: e.img,
                      price: e.price,
                      name: e.name,
                      checkout: e.checkout,
                    });
                }}
              >
                +
              </span>
            </div>
            <p className={styles.subTotal}>${(e.count * e.price).toFixed(2)}</p>
            <div className={styles.buttonGroup}>
              <button
                className={styles.mainButton}
                onClick={() => {
                  onAddToCart({
                    count: false,
                    id: e.id,
                  });
                }}
              >
                Remove{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.checkoutArea}>
        <div>
          Total cost:
          <span>
            {userCart
              .reduce(function (total, current) {
                return (
                  total +
                  current.price * current.count * (current.checkout ? 1 : 0)
                );
              }, 0)
              .toFixed(2)}
          </span>
        </div>
       
        <button disabled={userCart.filter(e=>e.checkout).length<=0} onClick={() => props.checkout(!props.toCheckout)}>
          {props.toCheckout?'CANCEL':"CHECKOUT"}
        </button>
      </div>
    </div>
  );
}
