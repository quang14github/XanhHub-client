import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/SmallBanner.module.scss";
export default function SmallBanner({bg,name,des}) {
  return (
    <div className={styles.container} style={{backgroundImage:`url("${bg}")`}}>
     <div className={styles.content}>
     <h2>{name}</h2>
      <p>
        {des}
      </p>
     </div>
    </div>
  );
}
