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
import { Link } from "react-router-dom";
const small_banner=[
  {id:'recycle',name:'Recycle',des:"Our products is made with Recycle-ablility in mind",img:recycle},
  {id:"friendly",name:'Variety',des:'We have many suppliers with hundreds of products.',img:zeroWatse},
  {id:"variety",name:'Contact',des:'Contact us if you want to be a supplier.',img:friendly}
]
export default function HomePage() {
  return (
    <Layout>
      <Banner />
      <IntroductionBanner />

      <About />
      <div style={{backgroundColor:'var(--secondary-background-trans)'}} className={styles.brandName}>
            <h1>Our Products</h1>
        </div>
      <div className={styles.groupBanners}>
        {small_banner.map(e=><SmallBanner name={e.name} key={e.id} des={e.des} bg={e.img} />)}
      </div>

      <div className={styles.loginSuggest}>
          <h3>Feel Interested?</h3>
          <Link to='/search'>
          <button className={`button ${styles.buttonLogin}`}>Try IT</button>

          </Link>
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
