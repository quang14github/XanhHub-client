import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Review.module.scss";
import { useState } from "react";
import useCompany from "Components/useCompany";
const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();
export default function Review(props) {
  const [Review, setReview] = useState(false);
  const companys = useCompany();
  const reviews = [
    {
      title: entities.decode(companys[props.product.company].name),
      name: "Reviewer " + Math.floor(Math.random() * 101),
      date: "July 24, 2021",
      comment: "My heart has been filled with love",
    },
    {
      title: entities.decode(props.product.NAME),
      name: "Reviewer " + Math.floor(Math.random() * 101),
      date: "July 24, 2021",
      comment: "Best choice!",
    },
    {
      title: props.product.CATEGORY,
      name: "Reviewer " + Math.floor(Math.random() * 101),
      date: "July 24, 2021",
      comment: "I will recommend this to my friends.",
    },
  ];
  return (
    <section className={styles.section}>
      <div className={`${styles.bar}`}>
        <h1>REVIEWS</h1>
      </div>
      <div className={styles.container}>
        <p className={styles.shareYourThought}>Share your thoughts!</p>
        <button onClick={() => setReview(!Review)}>LEAVE A REVIEW</button>
        <form
          className={Review ? styles.form : styles.hidden}
          onSubmit={(e) => {
            e.preventDefault();
            setReview(false);
            alert("Your review has been added!");
          }}
        >
          <label htmlFor="title">Title (optional)</label>
          <input type="text" placeholder="What is your title of your review?" />
          <label htmlFor="comment">Add a Comment</label>
          <textarea
            id="comment"
            placeholder="Tell us what you think of this product"
            rows="4"
            cols="50"
            required
          />
          <label htmlFor="name" required>
            Name
          </label>
          <input type="text" />
          <label htmlFor="email" required>
            Email
          </label>
          <input type="email" />
          <button className={styles.saveReview}>SAVE REVIEW</button>
        </form>
        <div className={styles.reviewSection}>
          <p className={styles.others}>What others are saying</p>
          <div className={styles.reviewContainer}>
            {reviews.map((obj) => (
              <div className={styles.review}>
                <p className={styles.title}>{obj.title}</p>
                <span className={styles.name}>{obj.name + " - "}</span>
                <span className={styles.date}>{obj.date}</span>
                <p className={styles.comment}>{obj.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
