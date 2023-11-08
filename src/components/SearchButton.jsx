import React, { useEffect, useState, useCallback, useRef } from "react";

export default function SearchButton() {
  const [searchText, setSearchText] = useState("");
  const [focus, setFocus] = useState(false);
  const searchInputRef = useRef(null);

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

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  useEffect(() => {
    const searchInput = document.getElementById("searchInput");
    searchInput.value = searchText;
    handleSearch(searchText);
  }, [searchText, handleSearch]);

  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  function inputFocus() {
    searchInputRef.current.focus();
  }

  function handleClear() {
    setSearchText("");
    inputFocus();
  }

  return (
    <div
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={inputFocus}
      className={`searchWrap ${focus ? "focus" : ""}`}
    >
      <input
        type="text"
        id="searchInput"
        ref={searchInputRef}
        className={focus ? "active" : ""}
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <button
        id="clearBtn"
        className={focus ? "active" : ""}
        onClick={handleClear}
      >
        <div className={`btnIcn ${searchText !== "" ? "defined" : ""}`}></div>
      </button>
    </div>
  );
}
