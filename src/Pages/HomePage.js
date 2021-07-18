import React from 'react'
import Layout from 'Components/Layout'
import Banner from 'Components/Banner'
import SmallBanner from 'Components/SmallBanner'
import ProductList from 'Components/ProductList'
import styles from 'Assets/Stylesheets/SCSS/Pages/HomePage.module.scss'
import IntroductionBanner from 'Components/IntroductionBanner'
export default function HomePage() {
    return (
        <Layout>
                <Banner/>
                <IntroductionBanner/>
                
                <div className={styles.groupBanners}>
                    <div className={styles.content}>
                    <SmallBanner/>
                    <SmallBanner/>
                    <SmallBanner/>
                    </div>
                </div>
                <div className={styles.groupProducts}>
                    <h1 className={styles.title}>Our Products</h1>
                   
                    
                   
                </div>
        </Layout>
    )
}
