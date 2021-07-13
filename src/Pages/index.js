import HomePage from "./HomePage";
import UserPage from "./UserPage";
import ProductPage from "./ProductPage";
import SearchPage from "./SearchPage";
const routes=[
    {link:'/',Component:HomePage},
    {link:'/search',Component:SearchPage},
    {link:'/user',Component:UserPage},
    {link:'/shop/:shopid',Component:HomePage},
    {link:'/product/:productid',Component:ProductPage}
]
const links=[
    {name:'Home',path:'/'},
    {name:'Search',path:'/search'},
    // {name:'Cart',path:'/'},
    // {name:'User',path:'/user'},
  ]
export {links}
export default routes