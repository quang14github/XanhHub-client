import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Cart.module.scss";
import { useState } from "react";
const order = [
  // {
  //   shop: "3ccases.vn",
  //   product: [
  //     {
  //       image: "https://cf.shopee.vn/file/0d8e38c9ba0da4b2ff60a6a51f6bd737",
  //       name: "Vỏ bảo vệ hộp sạc tai nghe silicon mềm họa tiết gấu hoạt hình Hàn Quốc 2020 kèm dây treo cho Samsung Galaxy Buds +",
  //       price: "$58.000",
  //       quantity: "1",
  //     },
  //     {
  //       image: "https://cf.shopee.vn/file/0d8e38c9ba0da4b2ff60a6a51f6bd737",
  //       name: "Vỏ bảo vệ hộp sạc tai nghe silicon mềm họa tiết gấu hoạt hình Hàn Quốc 2020 kèm dây treo cho Samsung Galaxy Buds +",
  //       price: "$58.000",
  //       quantity: "1",
  //     },
  //   ],
  // },
];
export default function Cart(props) {
  const [quantity, setQuantity] = useState(
    [[1, 1]],
    (shopNumber, productNumber, change) => {
      quantity[shopNumber][productNumber] =
        parseInt(quantity[shopNumber][productNumber]) + change;
    }
  );
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.topBarProduct}>
          <input type="checkbox" />
          <p>Product</p>
        </div>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      {order.map((e, shopNumber) => (
        <div className={styles.order}>
          <div className={styles.shop}>
            <input type="checkbox" />
            <p>{e.shop}</p>
            <div className={styles.barButtonGroup}>
              <button className={styles.chat}>Chat</button>
              <button className={styles.viewShop}>View Shop</button>
            </div>
          </div>
          {e.product.map((product, productNumber) => (
            <>
              <div className={styles.product}>
                <div className={styles.info}>
                  <input type="checkbox" />
                  <div className={styles.image}>
                    <img src={product.image} alt="product" />
                  </div>
                  <p className={styles.name}>{product.name}</p>
                </div>
                <div className={styles.subInfo}>
                  <p className={styles.price}>{product.price}</p>
                  <div className={styles.selectQuantity}>
                    <span
                      onClick={() => {
                        setQuantity(shopNumber, productNumber, -1);
                      }}
                    >
                      {"\u2212"}
                    </span>
                    <input
                      className={styles.quantity}
                      type="number"
                      value={product.quantity}
                      min="1"
                      max="99"
                    />
                    <span
                      onClick={() => {
                        setQuantity(shopNumber, productNumber, 1);
                      }}
                    >
                      +
                    </span>
                  </div>
                  <p className={styles.subTotal}>$58.000</p>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.mainButton}>Remove </button>
              </div>
            </>
          ))}
        </div>
      ))}
      <button onClick={() => props.checkout(!props.toCheckout)}>
        CHECKOUT!!!
      </button>
    </div>
  );
}
