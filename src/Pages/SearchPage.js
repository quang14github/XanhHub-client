import React from 'react'
import Layout from 'Components/Layout'
import styles from 'Assets/Stylesheets/SCSS/Pages/SearchPage.module.scss'
import SearchBar from 'Components/SearchBar'
import SearchFilter from 'Components/SearchFilter'
export default function SearchPage() {
    return (
        <Layout>
           {/* <div> */}
           <div className={styles.searchBox}>
                <div className={styles.overlay}></div>
                <div className={styles.searchPosition}><SearchBar/></div>
            </div>
            <div className={styles.filter}><SearchFilter/></div>
           {/* </div> */}


        </Layout>
    )
}
