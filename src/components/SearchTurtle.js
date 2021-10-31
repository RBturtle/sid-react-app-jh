import React, { useState } from "react";

const SearchTurtle = (props) => {
  const [searchedName, setSearchedName] = useState("");

  const handleQueryChange = (event) => {
    setSearchedName(event.target.value);
  };

  const handleSearch = () => {
    props.onSearchQuery(searchedName);
  };

  return (
    <div>
      <input type="text"  value={searchedName} onChange={handleQueryChange} />
      <button onClick={handleSearch}>Find</button>
    </div>
  );
};

export default SearchTurtle;
