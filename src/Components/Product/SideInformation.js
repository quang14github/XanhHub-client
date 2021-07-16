import { React, useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/SideInformation.module.scss";
const tabs = [
  { name: "Description", id: "desc" },
  { name: "Additional information", id: "addinfo" },
  { name: "Reviews", id: "review" },
];
export default function SideInformation() {
  const [current, SetCurrent] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        {tabs.map((e, i) => (
          <div
            onClick={() => {
              SetCurrent(i);
            }}
            key={e.id}
            className={`${styles.tabItem} ${
              i === current ? styles.selected : ""
            }`}
          >
            {e.name}
          </div>
        ))}
      </div>
      <div className={styles.content}></div>
    </div>
  );
}
