import HomePage from "./HomePage";
import UserPage from "./UserPage";
import ProductPage from "./ProductPage";
import SearchPage from "./SearchPage";
import CartPage from "./CartPage";
const routes = [
  { link: "/", Component: HomePage, isExact: true },
  { link: "/search", Component: SearchPage, isExact: true },
  { link: "/user/:tab", Component: UserPage, isExact: false },
  { link: "/shop/:shopid", Component: HomePage, isExact: true },
  { link: "/product/:productid", Component: ProductPage, isExact: true },
  { link: "/cart", Component: CartPage, isExact: true },
];
const links = [
  { name: "Home", path: "/" },
  { name: "Discovery", path: "/search" },
  
  
];
export { links };
export default routes;
