import { React, useState } from "react";
import styles from "Assets/Stylesheets/SCSS/Components/SearchBar.module.scss";
import ico from "Assets/Images/search.svg";
export default function SearchBar(props) {
  const [searchInput, setSearchInput] = useState();
  return (
    <form
      className={styles.root}
      onSubmit={(e) => {
        e.preventDefault();
        props.insert(searchInput);
      }}
    >
      <input
        type="text"
        placeholder="search for any thing!"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="button" type="submit">
        <img alt="search" src={ico} />{" "}
      </button>
    </form>
  );
}
