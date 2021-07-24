import { useDispatch, useSelector } from "react-redux";
import TYPE from "Store/CONSTANT";
import React from "react";
import { JwtContext } from "./Context";

export default function useSession() {
  const saveUser = (user) => {
    window.localStorage.setItem("session-user", JSON.stringify(user));
  };

  return { saveUser };
}
export function useRestore() {
    const [isLoad,setLoad]=React.useState(false)
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const ctx = React.useContext(JwtContext);
  const restoreUser = () => {
    let fromStorage = window.localStorage.getItem("session-user");
    if (fromStorage !== null) {
      fromStorage = JSON.parse(fromStorage);
      const { user, jwt } = fromStorage;

      dispatch({
        type: TYPE.loginUserOk,
        payload: { userid: user.USER_ID, role: user.USER_ROLE },
      });
      ctx.setJWT(jwt);
    }
  };

  React.useEffect(() => {
    if (isLoad===true && cart!==null) {
      window.localStorage.setItem(
        "session-cart",
        JSON.stringify({ cart: cart })
      );
    }
  }, [cart]);
React.useEffect(()=>{
    if(cart!==null && isLoad===false){
        setLoad(true)
    }
},[cart])

  const restoreCart = () => {
    let fromStorage = window.localStorage.getItem("session-cart");
    if (fromStorage !== null) {
      const { cart } = JSON.parse(fromStorage);

       dispatch({ type: TYPE.restoreCart, payload: cart });
    }else{

        dispatch({ type: TYPE.restoreCart, payload: [] });
    }
    
  };
  React.useEffect(() => {
    restoreUser();
    restoreCart();
  }, []);


  return isLoad
}
