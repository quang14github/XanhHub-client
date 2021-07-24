import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Order.module.scss";
import {Product} from './Processing'
export default function Completed({success}) {
  return (
    <div className={styles.content}>
      {success.map((e,i) => (
        <Product isSuccess={true} key={i} e={e}/>
      ))}
    </div>
  );
}
