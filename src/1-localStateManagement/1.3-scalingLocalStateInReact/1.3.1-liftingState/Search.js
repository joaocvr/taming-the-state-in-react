import React from "react";

const Search = ({ query, handleOnChange, children }) => {
  return (
    <div>
      {children}
      <input type="text" value={query} onChange={handleOnChange} />
    </div>
  );
};

export default Search;
