import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/SmallBanner.module.scss";
export default function SmallBanner({bg}) {
  return (
    <div className={styles.container} style={{backgroundImage:`url("${bg}")`}}>
     <div className={styles.content}>
     <h2>Zero-Watse</h2>
      <p>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis
        consectetur purus sit amet fermentum. Nulla vitae elit libero. Nullam
        quis risus eget urna mollis ornare vel eu leo.
      </p>
     </div>
    </div>
  );
}
