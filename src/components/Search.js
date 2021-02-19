import React from "react";
import Container from "./Container";

const Search = ({ searchTerm }) => {
  return (
    <div>
      {searchTerm && <h2>Topics Matching {searchTerm}</h2>}
      <Container searchTerm={searchTerm} />
    </div>
  );
};
export default Search;