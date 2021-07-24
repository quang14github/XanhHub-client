import TYPE from "../CONSTANT";
const defaultState = {
  searchInput: "",
  category: "",
};
const search = (state = defaultState, action) => {
  if (action.type === TYPE.inputSearch) {
    return {
      ...state,
      searchInput: action.payload.content,
    };
  }
  if (action.type === TYPE.selectCategory) {
    return { ...state, category: action.payload.content };
  }
  return state;
};
export default search;
