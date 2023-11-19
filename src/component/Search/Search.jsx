import React from "react";

const Search = ({ searchQuery, handleSearch }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search products"
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};

export default Search;
