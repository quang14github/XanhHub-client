import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Order.module.scss";
const order = [
  {
    shop: "innisfreevietnam_officialstore",
    status: "RATED",
    image: "https://cf.shopee.vn/file/d90c7a2604ed3e5908a81639a6c6d543",
    name: "[Mã FMCGMALL giảm 8% đơn 250K] Sữa rửa mặt làm sạch innisfree Green Tea Foam Cleanser 150ml",
    price: "$220.000",
    num: "2",
    total: "$460.000",
    button: "BUY AGAIN",
  },
  {
    shop: "innisfreevietnam_officialstore",
    status: "UNRATED",
    image: "https://cf.shopee.vn/file/d90c7a2604ed3e5908a81639a6c6d543",
    name: "[Mã FMCGMALL giảm 8% đơn 250K] Sữa rửa mặt làm sạch innisfree Green Tea Foam Cleanser 150ml",
    price: "$220.000",
    num: "2",
    total: "$460.000",
    button: "BUY AGAIN",
  },
];
export default function Completed() {
  return (
    <div className={styles.content}>
      {order.map((e) => (
        <div className={styles.order}>
          <div className={styles.bar}>
            <div>
              <p className={styles.shop}>{e.shop}</p>
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
              <div className={styles.nameAndNum}>
                <p className={styles.name}>{e.name}</p>
                <p className={styles.num}>{e.num}</p>
              </div>
              <p className={styles.price}>{e.price}</p>
            </div>
          </div>
          <div>
            <p className={styles.total}>
              <span>Total cost:</span>
              {e.total}
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
