import React, { useEffect, useState, useCallback } from "react";

export default function SearchButton() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = useCallback((text) => {
    const searchInput = text.toLowerCase();
    const pageBoxes = document.querySelectorAll(".pageBox");

    pageBoxes.forEach((pageBox) => {
      const link = pageBox.querySelector("a");
      if (link) {
        const href = link.getAttribute("href");
        if (href && href.toLowerCase().includes(searchInput)) {
          pageBox.classList.remove("disabled");
        } else {
          pageBox.classList.add("disabled");
        }
      }
    });
  }, []);

  useEffect(() => {
    const searchInput = document.getElementById("searchInput");
    searchInput.value = searchText;
    handleSearch(searchText);
  }, [searchText, handleSearch]);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <div className="searchWrap">
      <input
        type="text"
        id="searchInput"
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={handleClear}>X</button>
    </div>
  );
}
