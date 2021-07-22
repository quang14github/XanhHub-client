import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/AboutCompany.module.scss";
import useCompany from "Components/useCompany";
const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();
export default function AboutCompany(props) {
  const companys = useCompany();
  const thisCompany = companys[props.product.company];
  const backgroundImageURL = thisCompany.img.slice(
    18,
    thisCompany.img.length - 1
  );
  return (
    <section className={styles.section} id="company">
      <div className={`${styles.bar}`}>
        <h1>ABOUT THE COMPANY</h1>
      </div>
      <div className={styles.container}>
        <div
          className={styles.image}
          style={{ backgroundImage: `${backgroundImageURL}` }}
        ></div>
        <div className={styles.content}>
          <h1>{entities.decode(thisCompany.name)}</h1>
          <p className={styles.description}>
            {entities.decode(thisCompany.des)}
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}
