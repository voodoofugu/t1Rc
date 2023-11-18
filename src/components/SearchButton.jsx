import React, { useEffect, useState, useCallback, useRef, useTransition } from "react";

export default function SearchButton() {
  const [isPending, startTransition] = useTransition();
  const [searchText, setSearchText] = useState("");
  const [focus, setFocus] = useState(false);
  const searchInputRef = useRef(null);
  const refSetTimeout = useRef(null);

  const handleSearch = useCallback((text) => {
    const searchInput = text.toLowerCase();
    const pageBoxes = document.querySelectorAll(".pageBox");
  
    pageBoxes.forEach((pageBox) => {
      const pageBoxId = pageBox.getAttribute("id");
      if (searchInput === "" || (pageBoxId && pageBoxId.toLowerCase().includes(searchInput))) {
        pageBox.classList.remove("disabled");
        refSetTimeout.current = setTimeout(() => {
          pageBox.firstChild.style.display = "block";
          refSetTimeout.current = setTimeout(() => {
            pageBox.firstChild.classList.remove("hidden");
          }, 10);
        }, 500);
      } else {
        pageBox.classList.add("disabled");
        pageBox.firstChild.style.display = "none";
        pageBox.firstChild.classList.add("hidden");
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
    startTransition(() => {
      setSearchText(event.target.value);
      handleSearch(event.target.value);
    });
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
