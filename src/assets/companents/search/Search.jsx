import React from "react";
import style from "./Search.module.css";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Search = ({ close, closeSearch }) => {
  return (
    <>
      <div className={`${style.searchOpen} ${close && style.searchClose}`}>
        <div className={style.search_input}>
          <button>
            <CiSearch />
          </button>
          <input type="text" placeholder="SEARCH OUR STORE" />
          <button>
            <IoCloseOutline onClick={closeSearch} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
