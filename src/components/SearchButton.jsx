import React, { useEffect, useState, useCallback } from "react";

export default function SearchButton() {
  const [searchText, setSearchText] = useState("");
  const [focus, setFocus] = useState(false);

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

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

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
    <div
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`searchWrap ${focus ? "focus" : ""}`}
    >
      <input
        type="text"
        id="searchInput"
        className={focus ? "active" : ""}
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
      />
      <button
        id="clearBtn"
        className={focus ? "active" : ""}
        onClick={handleClear}
      ></button>
    </div>
  );
}
