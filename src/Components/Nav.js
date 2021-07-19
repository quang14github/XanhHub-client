import React from "react";
import styles from 'Assets/Stylesheets/SCSS/Components/Nav.module.scss'
import logo from 'Assets/Images/XanhHub.png'
import menu from 'Assets/Images/menu.svg'
import UserStatus from "Components/UserStatus";
import { Link } from "react-router-dom";
import {links} from 'Pages'
import { useSelector } from "react-redux";
export default function Nav() {
  const [isShown,setShown]=React.useState(false)
  const isLoggedIn=useSelector(state=>state.user.logInStatus)
  return <div className={styles.container}>
    <div className={styles.content}>
        <div className={styles.logoContainer}>
          
          <img className={styles.logo} alt="logo" src={logo}/>
        <button onClick={()=>{setShown(c=>!c)}} className={styles.navToggle}> <img alt="toggle" src={menu}/></button>
        </div>
        <div className={`${styles.linksContainer} ${isShown?styles.visible:''}`} >

        {links.map((e)=>(
          <Link to={e.path}>
        <div className={styles.linkItem} key={"item-"+e.name}>
          <p>{e.name}</p>
        </div>
          </Link>

        ))}
       
          {isLoggedIn&&<UserStatus/>}
       
        </div>
    </div>

  </div>;
}
