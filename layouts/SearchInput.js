import React from "react";
import styles from "../styles/layouts/appinput.module.css";
import { CiSearch } from "react-icons/ci";

function SearchInput() {
  return (
    <div className={styles.topp}>
      <div className={styles.searchstyles}>
        <CiSearch size={20} />
        <input type="text" placeholder="Search for products...." />
      </div>
    </div>
  );
}

export default SearchInput;
