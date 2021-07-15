import React from 'react'
import Nav from 'Components/Nav'
import styles from 'Assets/Stylesheets/SCSS/Components/Layout.module.scss'
export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Nav/>
           <div>
           {children}
           </div>
        </div>
    )
}
