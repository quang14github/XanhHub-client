import React from 'react'
import Layout from 'Components/Layout'
import Banner from 'Components/Banner'
import SmallBanner from 'Components/SmallBanner'
import ProductList from 'Components/ProductList'
import styles from 'Assets/Stylesheets/SCSS/Pages/HomePage.module.scss'
export default function HomePage() {
    return (
        <Layout>
                <Banner/>
                <div className={styles.groupBanners}>
                    <div className={styles.content}>
                    <SmallBanner/>
                    <SmallBanner/>
                    <SmallBanner/>
                    </div>
                </div>
                <div className={styles.latestProducts}>
                    <h1>Latest</h1>
                    <ProductList/>
                </div>
        </Layout>
    )
}
