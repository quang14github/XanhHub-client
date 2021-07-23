import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import TYPE from "Store/CONSTANT";
const useAddToCart = () => {
  const isLogged = useSelector((state) => state.user.logInStatus);
  const dispatch = useDispatch();
  const onAddtoCart = useCallback(
    (newItem) => {
      if (!isLogged) {
        dispatch({ type: TYPE.tryLoginUser });
        return;
      }
      if (newItem.id) {
        if (newItem.count) dispatch({ type: TYPE.addToCart, payload: newItem });
        else dispatch({ type: TYPE.removeFromCart, payload: newItem });
      }
    },
    [isLogged]
  );

  return onAddtoCart;
};

export { useAddToCart };
