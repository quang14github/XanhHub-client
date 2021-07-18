import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/History.module.scss";
const tabs = [
  { name: "Waiting", id: "wait" },
  { name: "Success", id: "succ" },
  { name: "Canceled", id: "canc" },
];
export default function Order() {
  const [current, SetCurrent] = React.useState(0);
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
