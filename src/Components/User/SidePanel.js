import { React, useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/SidePanel.module.scss";
import Avatar from "Components/Avatar";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import TYPE from "Store/CONSTANT";
const tabs = [
  { name: "Account details", id: "account/me" },
  { name: "Orders", id: "order/processing" },
  { name: "Logout", id: "logout" },
];
export default function SidePanel() {
  const url = useHistory();
  const dispatch = useDispatch();
  const [Active, setActive] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <Avatar
          image="https://cdn.luxe.digital/media/2020/05/18164558/best-short-haircuts-men-high-tight-2-luxe-digital.jpg"
          alt="avatar"
        />
      </div>
      <div className={styles.tabsContainer}>
        {tabs.map((e) => (
          <div key={e.id} className={styles.tabItem}>
            <p
              className={
                Active === e.id
                  ? `${styles.mainTabActive} ${styles.mainTab}`
                  : styles.mainTab
              }
              onClick={() => {
                if (e.id === "logout") {
                  window.localStorage.removeItem('session-user')
                  dispatch({ type: TYPE.logOutUser });
                  return;
                }

                url.push(`/user/${e.id}`);
                setActive(e.id);
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
