import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Order.module.scss";
import { Product } from "./Processing";
export default function Canceled({cancel}) {
  return (
    <div className={styles.content}>
      {cancel.map((e,i) => (
        <Product isCancel={true} key={i} e={e}/>
      ))}
    </div>
  );
}
