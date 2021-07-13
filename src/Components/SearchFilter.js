import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/SearchFilter.module.scss";
import SliderMenu from "./SliderMenu";
const words = [
  { name: "rau sạch", tag: "" },
  { name: "hoa quả xanh", tag: "" },
  { name: "đồ dùng tái chế", tag: "" },
  { name: "đồ giấy", tag: "" },
  { name: "rau sạch", tag: "" },
  { name: "hoa quả xanh", tag: "" },
  { name: "đồ dùng tái chế", tag: "" },
  { name: "đồ giấy", tag: "" },
  { name: "rau sạch", tag: "" },
  { name: "hoa quả xanh", tag: "" },
  { name: "đồ dùng tái chế", tag: "" },
  { name: "đồ giấy", tag: "" },
  { name: "rau sạch", tag: "" },
  { name: "hoa quả xanh", tag: "" },
  { name: "đồ dùng tái chế", tag: "" },
  { name: "đồ giấy", tag: "" },
];

const categories=[
  {name:"All",tag:'all'},
  {name:"Grocery",tag:'grocery'},
  {name:'Fruit',tag:'fruit'},
  {name:'Household appliance',tag:"household"},
  {name:'Vegetables',tag:'veget'},
  {name:'Paper stuff',tag:'paper'},
  {name:"All",tag:'all'},
  {name:"Grocery",tag:'grocery'},
  {name:'Fruit',tag:'fruit'},
  {name:'Household appliance',tag:"household"},
  {name:'Vegetables',tag:'veget'},
  {name:'Paper stuff',tag:'paper'}, {name:"All",tag:'all'},
  {name:"Grocery",tag:'grocery'},
  {name:'Fruit',tag:'fruit'},
  {name:'Household appliance',tag:"household"},
  {name:'Vegetables',tag:'veget'},
  {name:'Paper stuff',tag:'paper'}, {name:"All",tag:'all'},
  {name:"Grocery",tag:'grocery'},
  {name:'Fruit',tag:'fruit'},
  {name:'Household appliance',tag:"household"},
  {name:'Vegetables',tag:'veget'},
  {name:'Paper stuff',tag:'paper'},

  //
  
]
export default function SearchFilter({ category }) {
 

  return (
    <div className={styles.filter}>
      <div className={styles.container}>
       <SliderMenu type="small" select="one" words={words} radius={500} height={40}/>
       <SliderMenu type="medium" color="second" select="multiple" words={categories} radius={5} height={70}/>
      </div>
    </div>
  );
}
