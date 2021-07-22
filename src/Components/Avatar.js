import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Avatar.module.scss";
export default function Avatar({ image, alt }) {
  return (
    <div className={styles.container}>
      <div style={{backgroundImage:`url('${image}')`}} alt={alt} />
      <p>NguyenVanA</p>
    </div>
  );
}
