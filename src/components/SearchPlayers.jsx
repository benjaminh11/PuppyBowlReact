import React from "react";

function SearchPlayers({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search players..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchPlayers;
