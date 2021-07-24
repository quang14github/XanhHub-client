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
const useInputSearch = () => {
  const dispatch = useDispatch();
  const onInputSearch = (newSearch) => {
    if (newSearch.content) {
      dispatch({ type: TYPE.inputSearch, payload: newSearch });
    }
  };
  return onInputSearch;
};
const useSelectCategory = () => {
  const dispatch = useDispatch();
  const onSelectCategory = (newCategory) => {
    if (newCategory.content) {
      dispatch({ type: TYPE.selectCategory, payload: newCategory });
    }
  };
  return onSelectCategory;
};
export { useAddToCart, useInputSearch, useSelectCategory };
