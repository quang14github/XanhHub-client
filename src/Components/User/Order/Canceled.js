import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Order.module.scss";
const order = [
  {
    shop: "moony_officialstore",
    status: "CANCELED",
    image: "https://cf.shopee.vn/file/e44b73b6a3528b90bb3a2203cd056cea",
    name: "[Mã FMCGMALL giảm 8% đơn 250K] Tã quần Moony Natural siêu cao cấp M46/L36/Xl32",
    price: "$299.000",
    quantity: "1",
    total: "$343.000",
    button: "BUY AGAIN",
  },
  {
    shop: "innisfreevietnam_officialstore",
    status: "CANCELED",
    image: "https://cf.shopee.vn/file/e44b73b6a3528b90bb3a2203cd056cea",
    name: "[Mã FMCGMALL giảm 8% đơn 250K] Tã quần Moony Natural siêu cao cấp M46/L36/Xl32",
    price: "$299.000",
    quantity: "1",
    total: "$343.000",
    button: "BUY AGAIN",
  },
];
export default function Canceled() {
  return (
    <div className={styles.content}>
      {order.map((e) => (
        <div className={styles.order}>
          <div className={styles.bar}>
            <div className={styles.shop}>
              <p>{e.shop}</p>
              <button className={styles.chat}>Chat</button>
              <button className={styles.viewShop}>View Shop</button>
            </div>
            <div className={styles.status}>{e.status}</div>
          </div>
          <div className={styles.product}>
            <div className={styles.image}>
              <img src={e.image} alt="product" />
            </div>
            <div className={styles.info}>
              <div className={styles.nameAndQuantity}>
                <p className={styles.name}>{e.name}</p>
                <p className={styles.quantity}>X{e.quantity}</p>
              </div>
              <p className={styles.price}>{e.price}</p>
            </div>
          </div>
          <div>
            <p className={styles.total}>
              Total cost:
              <span>{e.total}</span>
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.mainButton}>{e.button}</button>
              <button className={styles.sideButton}>CONTACT SELLER</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
