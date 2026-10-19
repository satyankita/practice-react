import React, { useRef, useState } from "react";

function Search() {

  const [search, setSearch] = useState("");

  const timerRef = useRef(null);

  const handleSearch = (e) => {

    const value = e.target.value;

    setSearch(value);

    // Clear old timer
    clearTimeout(timerRef.current);

    // Create new timer
    timerRef.current = setTimeout(() => {

      console.log("API Call:", value);

    }, 1000);
  };

  return (
    <div>

      <h1>Debouncing Example</h1>

      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={handleSearch}
      />

    </div>
  );
}

export default Search;