import React from "react";
import styles from 'Assets/Stylesheets/SCSS/Components/Nav.module.scss'
import logo from 'Assets/Images/logo.png'
import menu from 'Assets/Images/menu.svg'
const links=[
  {name:'Home',path:'/'},
  {name:'Shop',path:'/shop'},
  {name:'Home',path:'/product'},
  {name:'User',path:'/user'},
  {name:'Cart',path:'/cart'},
]
export default function Nav() {
  const [isShown,setShown]=React.useState(false)
  return <div className={styles.container}>
    <div className={styles.content}>
        <div className={styles.logoContainer}>
          
          <img alt="logo" src={logo} height="45"/>
        <button onClick={()=>{setShown(c=>!c)}} className={styles.navToggle}> <img alt="toggle" src={menu}/></button>
        </div>
        <div className={`${styles.linksContainer}`} style={{maxHeight:isShown?"100vh":0}}>

        {links.map((e)=>(<div className={styles.linkItem} key={"item-"+e.name}>
          <p>{e.name}</p>
        </div>))}
        </div>
    </div>

  </div>;
}
