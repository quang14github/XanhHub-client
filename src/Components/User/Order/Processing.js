import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Order.module.scss";
const order = [
  {
    shop: "3ccases.vn",
    status: "PENDING",
    image: "https://cf.shopee.vn/file/0d8e38c9ba0da4b2ff60a6a51f6bd737",
    name: "Vỏ bảo vệ hộp sạc tai nghe silicon mềm họa tiết gấu hoạt hình Hàn Quốc 2020 kèm dây treo cho Samsung Galaxy Buds +",
    price: "$58.000",
    num: "1",
    total: "$55.000",
    button: "RECEIVED",
  },
  {
    shop: "3ccases.vn",
    status: "PENDING",
    image: "https://cf.shopee.vn/file/0d8e38c9ba0da4b2ff60a6a51f6bd737",
    name: "Vỏ bảo vệ hộp sạc tai nghe silicon mềm họa tiết gấu hoạt hình Hàn Quốc 2020 kèm dây treo cho Samsung Galaxy Buds +",
    price: "$58.000",
    num: "1",
    total: "$55.000",
    button: "RECEIVED",
  },
];
export default function Processing() {
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
