import React from "react";
import "../styles/search.css";
const Search = () => {
  return (
      <div className="search">
        <div className="search_wrap">
          <div className="search_box">
            <input type="text" className="input" placeholder="Search..." />
            <div className="btn btn_common">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Search;
