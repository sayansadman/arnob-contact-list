import React from "react";
import { Search } from "react-bootstrap-icons";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      {/* <Search /> */}
      <Search />
      <input
        name="search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
