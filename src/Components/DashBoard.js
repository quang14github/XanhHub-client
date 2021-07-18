import { React, useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/DashBoard.module.scss";
import SidePanel from "./User/SidePanel";
import MainPanel from "./User/MainPanel";
export default function DashBoard() {
  const [Title, setTitle] = useState("MY ACCOUNT");
  return (
    <>
      <header className={styles.header}>
        <h1>{Title}</h1>
      </header>
      <div className={styles.container}>
        <div className={styles.content}>
          <SidePanel changeTitle={(word) => setTitle(word)} />
          <MainPanel />
        </div>
      </div>
    </>
  );
}
