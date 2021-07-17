import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/AboutCompany.module.scss";
export default function AboutCompany() {
  return (
    <section className={styles.section} id="company">
      <div className={`${styles.bar}`}>
        <h1>ABOUT THE COMPANY</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            src="https://d13wriz42ny3t5.cloudfront.net/production/2017/08/11111910/LoveBottle_New_Logo_RGB-e1599848373661.png"
            alt="company-logo"
          />
        </div>
        <div className={styles.content}>
          <h1>Love Bottle</h1>
          <p className={styles.description}>
            Founded by Minna Yoo, a neuroscientist, nutritionist, and avid
            environmentalist, Love Bottle aims to change the way you think about
            drinking water. Not only is Love Bottle focused on reducing plastic
            disposable water bottle use, but the company also puts massive
            attention on social responsibility. They are a registered B Corp,
            and they donate five percent of their profits towards helping
            provide access to clean, safe drinking water to people in need.
            Their past initiative was providing clean water to Guatemalan
            school, and they’re currently working to provide water to people in
            Syria. By manufacturing all of their products in the United States,
            Love Bottle reduces the amount their products travel before reaching
            their destination. Minna and the Love Bottle team want you to feel
            the love every time you take a sip from their bottles, and radiate
            that love to all those around you.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}
