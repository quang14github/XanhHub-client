import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/SearchFilter.module.scss";
import SliderMenu from "./SliderMenu";
const words = [
  { name: "rau sạch", tag: "" },
  { name: "hoa quả xanh", tag: "" },
  { name: "đồ dùng tái chế", tag: "" },
  { name: "đồ giấy", tag: "" },
];

const categories = [
  { name: "All", tag: "all" },
  { name: "Beauty And Care", tag: "beautyandcare" },
  { name: "Clothing", tag: "clothing" },
  { name: "Lunchtime", tag: "lunchtime" },
  { name: "Audio Tech", tag: "audio_tech" },
  { name: "Toys", tag: "toys" },

  //
];
export default function SearchFilter(props) {
  return (
    <div className={styles.filter}>
      <div className={styles.container}>
        <p>Popular</p>
        <SliderMenu
          type="small"
          select="one"
          words={words}
          radius={500}
          height={40}
          insert={(word) => props.insert(word)}
        />
        <p>All category</p>
        <SliderMenu
          type="medium"
          color="second"
          select="multiple"
          words={categories}
          radius={5}
          height={70}
          insert={(word) => props.insert(word)}
        />
      </div>
    </div>
  );
}
