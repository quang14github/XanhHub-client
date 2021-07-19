import HomePage from "./HomePage";
import UserPage from "./UserPage";
import ProductPage from "./ProductPage";
import SearchPage from "./SearchPage";
const routes=[
    {link:'/',Component:HomePage,isExact:true},
    {link:'/search',Component:SearchPage,isExact:true},
    {link:'/user/:tab',Component:UserPage,isExact:false},
    {link:'/shop/:shopid',Component:HomePage,isExact:true},
    {link:'/product/:productid',Component:ProductPage,isExact:true}
]
const links=[
    {name:'Home',path:'/'},
    {name:'Discovery',path:'/search'},
    {name:'Blog',path:'/'},
    // {name:'Cart',path:'/'},
    // {name:'User',path:'/user'},
  ]
export {links}
export default routes