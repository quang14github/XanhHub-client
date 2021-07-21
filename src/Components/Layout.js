import React from "react";
import Nav from "Components/Nav";
import styles from "Assets/Stylesheets/SCSS/Components/Layout.module.scss";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import LoginPage from "Pages/LoginPage";
export default function Layout({ children }) {
  const userTryLogin=useSelector(state=>state.user.tryLogin)
  if(userTryLogin===false){
    return (
      <div className={styles.container}>
        <Nav />
        <div>{children}</div>
        <Footer />
      </div>
    );
  }
  return <LoginPage/>
}
