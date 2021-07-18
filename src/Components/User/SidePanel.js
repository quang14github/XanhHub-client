import { React, useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/SidePanel.module.scss";
import Avatar from "Components/Avatar";
import logo from "Assets/Images/XanhHub.png";
import { useHistory } from "react-router-dom";
const tabs = [
  { name: "Account details", id: "account" },
  { name: "Orders", id: "order" },
  { name: "Logout", id: "logout" },
];
export default function SidePanel(props) {
  const url = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.userInfor}>
        <Avatar
          image="https://cdn.luxe.digital/media/2020/05/18164558/best-short-haircuts-men-high-tight-2-luxe-digital.jpg"
          alt="avatar"
        />
      </div>
      <div className={styles.tabsContainer}>
        {tabs.map((e) => (
          <div key={e.id} className={styles.tabItem}>
            <p
              className={styles.mainTabs}
              onClick={() => {
                url.push(`/user/${e.id}`);
                props.changeTitle(e.name);
              }}
            >
              {e.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
