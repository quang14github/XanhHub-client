import React, { useState } from "react";
import icon from "Assets/Images/cart.svg";
import { Link } from "react-router-dom";
import userIcon from "Assets/Images/user.svg";
import styles from "Assets/Stylesheets/SCSS/Components/UserStatus.module.scss";
export default function UserStatus() {
  const [showCart, setShowCart] = useState(false);
  React.useEffect(() => {});
  return (
    <div className={styles.container}>
      <Link to="/cart">
        <div
          
          className={styles.group}
        >
          <img src={icon} alt="cart" width="30" />
          
        </div>
      </Link>
      <div className={styles.group}>
        <Link to="/user/order/processing">
          <img src={userIcon} width="30" alt="user" />
        </Link>
      </div>
    </div>
  );
}

