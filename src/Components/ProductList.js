import React from 'react'
import styles from 'Assets/Stylesheets/SCSS/Components/ProductList.module.scss'
import products from 'Assets/JS/products'
export default function ProductList({rows,pagination=false}) {
    return (
        <div className={styles.container}>
            {products.map(e=><div key={e.id}>
                <ProductItem data={e}/>
                
            </div>)}
        </div>
    )
}


const ProductItem=({data})=>{
    const [img,setImg]=React.useState('')
    
    return <div >
        
    </div>
}
