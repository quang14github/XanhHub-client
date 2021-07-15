import React from 'react'
import Layout from 'Components/Layout'
import styles from 'Assets/Stylesheets/SCSS/Pages/ProductPage.module.scss'
export default function ProductPage() {
    return (
        <Layout>
            <div className={styles.product}>
            <div className={styles.main}>
                <div className={styles.image}>

                    <img src="https://d13wriz42ny3t5.cloudfront.net/production/2019/10/25122944/tree-free-greetings-meowy-christmas-cards-1-600x600.jpg" alt="product"/>

                </div>
                
                
                <div className={styles.information}>
                <div>
                <h1>Meowy Christmas Cards (10 Pk)</h1>
                <h2>Ratings: </h2>
                </div>
                {/* divider */}
                <div></div>
                {/* divider */}
                <div>
                <h3>$: 14.99</h3>
                <button>Add to Cart</button>
                </div>
                </div>      
                </div>        





            </div>
            
        </Layout>
    )
}
