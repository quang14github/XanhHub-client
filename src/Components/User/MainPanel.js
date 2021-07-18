import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/MainPanel.module.scss";
import Profile from "./Profile";
import Logout from "./Logout";
import Order from "./Order";
import { Switch, Route } from "react-router-dom";
export default function MainPanel() {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/user/account">
          <Profile />
        </Route>
        <Route exact path="/user/order">
          <Order />
        </Route>
        <Route exact path="/user/logout">
          <Logout />
        </Route>
      </Switch>
    </div>
  );
}
