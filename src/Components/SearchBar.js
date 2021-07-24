import { React, useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/SearchBar.module.scss";
import ico from "Assets/Images/search.svg";
import { useInputSearch } from "Hooks";
import { useSelector } from "react-redux";
export default function SearchBar() {
  const onInputSearch = useInputSearch();
  const searchInput = useSelector((state) => state.search.searchInput);
  const [currentInput, setCurrentInput] = useState();
  return (
    <form
      className={styles.root}
      onSubmit={(e) => {
        e.preventDefault();
        onInputSearch({
          content: searchInput,
        });
      }}
    >
      <input
        type="text"
        placeholder="search for any thing!"
        value={searchInput}
      />
      <button className="button" type="submit">
        <img alt="search" src={ico} />{" "}
      </button>
    </form>
  );
}
