import { React, useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/DashBoard.module.scss";
import SidePanel from "./User/SidePanel";
import MainPanel from "./User/MainPanel";
export default function DashBoard() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SidePanel />
        <MainPanel />
      </div>
    </div>
  );
}
