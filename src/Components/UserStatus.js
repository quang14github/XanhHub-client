import React,{useState} from 'react'
import icon from 'Assets/Images/cart.svg'
import {Link} from 'react-router-dom'
import userIcon from 'Assets/Images/user.svg'
import styles from 'Assets/Stylesheets/SCSS/Components/UserStatus.module.scss'
export default function UserStatus() {
    const [showCart,setShowCart]=useState(false)
    React.useEffect(()=>{

    },)
    return (
        <div className={styles.container}>
            <div onMouseEnter={()=>{setShowCart(true)}} 
            onMouseLeave={()=>{setShowCart(false)}}
            
            className={styles.group}>
            <img src={icon} alt="cart" width="30"/>
            {showCart&&<CartPreview/>}
            </div>
            
            <div 
            className={styles.group}>
            <Link to="/user">
            <img src={userIcon} width="30" alt="user"/>
                </Link>
            </div>
        </div>
    )
}

const CartPreview=()=>{
return <div className={styles.previewContainer}>
    cart
</div>
}
