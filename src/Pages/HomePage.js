import React from "react";
import Layout from "Components/Layout";
import Banner from "Components/Banner";
import SmallBanner from "Components/SmallBanner";
import styles from "Assets/Stylesheets/SCSS/Pages/HomePage.module.scss";
import IntroductionBanner from "Components/IntroductionBanner";
import friendly from "Assets/Images/friend.jpg";
import zeroWatse from "Assets/Images/zero-watse.jpg";
import recycle from "Assets/Images/recycle.jpg";
import productImg from "Assets/Images/product.png";
import shipImg from "Assets/Images/ship.png";
import recImg from "Assets/Images/recommend.png";

export default function HomePage() {
  return (
    <Layout>
      <Banner />
      <IntroductionBanner />

      <About />
      <div style={{backgroundColor:'var(--secondary-background-trans)'}} className={styles.brandName}>
            <h1>Verified Products</h1>
        </div>
      <div className={styles.groupBanners}>
        <SmallBanner bg={recycle} />
        <SmallBanner bg={zeroWatse} />
        <SmallBanner bg={friendly} />
      </div>

      <div className={styles.loginSuggest}>
          <h3>Feel Interested?</h3>
          <button className={`button ${styles.buttonLogin}`}>Try IT</button>
      </div>

      
    </Layout>
  );
}

const aboutList=[
    {
        name:"Products",
        img:productImg,
        des:["We have hundreds of products from many suppliers.","You can search for products and make orders online.","If your want to become a supplier, just contact us!"]
    },
    {
        name:"Recommendation",
        img:recImg,
        des:["Our Recommendation system make it easier than ever to shopping."," You can buy what you need with least decisions. ","The more products you buy, the more we can suggest!"]
    },
    {
        name:"Shipping",
        img:shipImg,
        des:["Once your order is made, our shipping providers will make their best to delivery to you as soon as possible.","If you are not satisfied, We are welcome to receive it back."]
    }
]
const About = () => {
    const [cur,setCur]=React.useState(0)
  return (
    <div className={styles.about}>
        <div className={styles.brandName}>
            <h1>Green Purchasing Flatform</h1>
        </div>
      <div className={styles.tech}>
       
        {aboutList.map((e,i)=>( <div onClick={()=>{setCur(i)}} key={e.name} className={`${styles.techItem} ${cur===i?styles.on:''}`}>
          <img alt={e.name} src={e.img} />
          <p>{e.name}</p>
        </div>))}
      </div>
      <div className={styles.describe} key={"des-"+cur}>
    {aboutList[cur].des.map((e,i)=><p key={i}>{e}</p>)}
      </div>
    </div>
  );
};
