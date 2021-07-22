import React from "react";
import Nav from "Components/Nav";
import styles from "Assets/Stylesheets/SCSS/Components/Layout.module.scss";
import Footer from "./Footer";
import { useSelector,useDispatch } from "react-redux";
import TYPE from 'Store/CONSTANT'
import { useLocation } from "react-router";
import LoginPage from "Pages/LoginPage";
export default function Layout({ children ,requiredLogin=false}) {
  const userTryLogin=useSelector(state=>state.user.tryLogin)
  const url=useLocation()
  const loginStatus=useSelector(state=>state.user.logInStatus)
const  dispatch = useDispatch()
React.useEffect(()=>{
  dispatch({type:TYPE.exitLoginUser})
},[url])
    return (
      <div className={styles.container}>
        <Nav />
        <div className={styles.mainContent}>
          
          {userTryLogin || (!loginStatus && requiredLogin) ?<LoginPage canClose={!requiredLogin}/>:children}
        
        </div>
        <Footer />
      </div>
    );
  
}
