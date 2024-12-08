import {
  useEffect,
  useState,
  useCallback,
  useRef,
  startTransition,
  useDeferredValue,
} from "react";
import { useNexus, nexusUpdate } from "nexus-state";

import PageList from "../projetComponents/pagesComponents/a_pageList.json";

export default function SearchButton() {
  const searchText = useNexus("searchText");
  const [focus, setFocus] = useState(false);

  const clearBtnRef = useRef(null);
  const searchInputRef = useRef(null);

  const prevSearchTextRef = useRef("");
  const prevFilteredValueRef = useRef([]);
  const loadedData = useRef(PageList);

  const deferredSearchText = useDeferredValue(searchText);

  // events
  const handleSearch = useCallback(
    (text) => {
      const searchInput = text.trim().toLowerCase();
      let filteredData;

      if (searchInput === "" || loadedData.length === 0) {
        filteredData = [];
      } else {
        filteredData = PageList.filter((data) => {
          if (data.length === 0) {
            return "Page404";
          } else {
            return data.toLowerCase().includes(searchInput);
          }
        });

        if (filteredData.length === 0) {
          filteredData.push("not found");
        }
      }

      if (
        filteredData.length !== prevFilteredValueRef.current.length ||
        !filteredData.every(
          (value, index) => value === prevFilteredValueRef.current[index]
        )
      ) {
        nexusUpdate({
          searchData: filteredData.length > 0 ? filteredData : null,
        });
        prevFilteredValueRef.current = filteredData;
      }
    },
    [loadedData, PageList]
  );

  const handleFocus = () => {
    setFocus(true);
  };

  const inputFocus = () => {
    searchInputRef.current.focus();
  };

  const handleClear = () => {
    nexusUpdate({
      searchText: "",
    });
    inputFocus();
  };

  const handleOutsideClick = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target) &&
      !clearBtnRef.current.contains(event.target)
    ) {
      setFocus(false);
    }
  };

  // effects
  useEffect(() => {
    prevSearchTextRef.current = searchText;

    if (prevSearchTextRef.current === searchText) {
      handleSearch(searchText);
    }
  }, [searchText, handleSearch]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      handleOutsideClick(event);
    };

    if (focus) {
      document.addEventListener("mousedown", handleDocumentClick);
    } else {
      document.removeEventListener("mousedown", handleDocumentClick);
    }
  }, [handleOutsideClick]);

  return (
    <div
      onFocus={handleFocus}
      onClick={inputFocus}
      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-fit h-fit"
    >
      <input
        type="text"
        ref={searchInputRef}
        className={`h-0 p-16 bg-indigo-300 dark:bg-indigo-500 text-indigo-800 dark:text-indigo-950 text-sm rounded-3xl transition-width shadow-shadowColorDark7 dark:shadow-darkThemeSearchInput outline-none border-none text-shadow-tS1 dark:text-shadow-darkTS1 placeholder:text-indigo-500 dark:placeholder:text-indigo-700 font-medium${
          focus
            ? " w-184 pr-34 pointer-events-auto"
            : " w-0 pointer-events-none"
        }`}
        placeholder="Search"
        value={deferredSearchText}
        onChange={(event) =>
          startTransition(() =>
            nexusUpdate({
              searchText: event.target.value,
            })
          )
        }
        autoComplete="off"
      />
      <div
        ref={clearBtnRef}
        className="absolute w-26 h-26 cursor-pointer bg-indigo-200 dark:bg-indigo-900 rounded-3xl transition-all1 shadow-shadowColor8 dark:shadow-darkThemeClearBtn top-3 right-3 active:scale-90 hover:brightness-105"
        onMouseUp={focus ? handleClear : null}
      >
        <div
          className={`absolute w-full h-full drop-shadow-dS1 dark:drop-shadow-darkDS1 before:absolute after:absolute before:transition-all1 after:transition-all1 before:rounded-30 after:rounded-30 after:-rotate-45 ${
            focus && deferredSearchText
              ? "before:border-none before:left-50% before:top-5 before:-translate-x-1/2 before:rotate-45 before:w-3 before:h-15 before:bg-red-500 after:left-50% after:top-5 after:-translate-x-1/2 after:w-3 after:h-15 after:bg-red-500"
              : focus
              ? "before:border-none before:left-50% before:top-5 before:-translate-x-1/2 before:rotate-45 before:w-3 before:h-15 before:bg-indigo-400 after:left-50% after:top-5 after:-translate-x-1/2 after:w-3 after:h-15 after:bg-indigo-400"
              : "before:w-13 before:h-13 before:border-2 before:border-indigo-400 before:left-3 before:top-3 after:w-3 after:h-10 after:bg-indigo-400 after:left-15 after:top-12"
          }`}
        ></div>
      </div>
    </div>
  );
}
