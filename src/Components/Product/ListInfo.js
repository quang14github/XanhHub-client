import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/ListInfo.module.scss";
const features = [
  {
    icon: "https://earthhero.com/wp-content/themes/earthhero/images/feature-icons/origin.png",
    title: "ORIGIN",
    list: ["Made in Viet Nam"],
  },
  {
    icon: "https://earthhero.com/wp-content/themes/earthhero/images/feature-icons/3.png",
    title: "EARTH FRIENDLY FEATURES",
    list: [
      "Love Bottle donates 5% of every purchase to Global Water, which helps bring safe drinking water to those who need it",
    ],
  },
  {
    icon: "https://earthhero.com/wp-content/themes/earthhero/images/feature-icons/origin.png",
    title: "ORIGIN",
    list: ["Made in Viet Nam"],
  },
  {
    icon: "https://earthhero.com/wp-content/themes/earthhero/images/feature-icons/origin.png",
    title: "ORIGIN",
    list: ["Made in Viet Nam"],
  },
];
const specs = [
  {
    icon: "	https://earthhero.com/wp-content/themes/earthhero/images/feature-icons/5.png",
    title: "PRODUCT CARE",
    list: [
      "Do not freeze",
      "Do not fill with hot liquid",
      "May break when dropped",
    ],
  },
  {
    icon: "	https://earthhero.com/wp-content/themes/earthhero/images/feature-icons/5.png",
    title: "PRODUCT CARE",
    list: [
      "Do not freeze",
      "Do not fill with hot liquid",
      "May break when dropped",
    ],
  },
  {
    icon: "	https://earthhero.com/wp-content/themes/earthhero/images/feature-icons/5.png",
    title: "PRODUCT CARE",
    list: [
      "Do not freeze",
      "Do not fill with hot liquid",
      "May break when dropped",
    ],
  },
  {
    icon: "	https://earthhero.com/wp-content/themes/earthhero/images/feature-icons/5.png",
    title: "PRODUCT CARE",
    list: [
      "Unused, undamaged items in their original packaging can be returned within 30 days",
    ],
  },
];
export default function ListInfo() {
  return (
    <>
      <section className={styles.section}>
        <div className={`${styles.bar} ${styles.featureBar}`}>
          <h1>SUSTAINABILITY FEATURES</h1>
        </div>
        <div className={styles.container}>
          {features.map((obj) => (
            <div className={styles.subContainer}>
              <img src={obj.icon} alt="feature-icon" />
              <div className={styles.text}>
                <header>{obj.title}</header>
                <ul>
                  {obj.list.map((content) => (
                    <li>{content}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <div className={`${styles.bar} ${styles.specBar}`}>
          <h1>PRODUCT SPECIFICATIONS</h1>
        </div>
        <div className={styles.container}>
          {specs.map((obj) => (
            <div className={styles.subContainer}>
              <img src={obj.icon} alt="feature-icon" />
              <div className={styles.text}>
                <header>{obj.title}</header>
                <ul>
                  {obj.list.map((content) => (
                    <li>{content}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
