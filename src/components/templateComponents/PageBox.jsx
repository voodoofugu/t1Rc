import { memo, useMemo, useState, useEffect, useLayoutEffect } from "react";
import { MultiGrid, AutoSizer } from "react-virtualized";
import { useNexus } from "nexus-state";

import CellContent from "./CellContent";
import ToTopButton from "./ToTopButton";
import Page404Component from "../projetComponents/pagesComponents/Page404";
import PageList from "../projetComponents/pagesComponents/a_pageList";
import useStorage from "../hooks/useStorage";

const componentLoadStatus = {};

function Cell({
  itemsPerRow,
  columnIndex,
  rowIndex,
  style,
  usedPages,
  isScrolling,
}) {
  const index = rowIndex * itemsPerRow + columnIndex;
  if (index >= usedPages.length) {
    return null;
  }

  const pageName = usedPages[index];

  const isComponentLoaded = componentLoadStatus[pageName];
  componentLoadStatus[pageName] = false;
  if (!isScrolling) {
    componentLoadStatus[pageName] = true;
  }

  return (
    <div key={index} style={style} className="flex justify-center items-center">
      {isScrolling && !isComponentLoaded ? (
        <CellContent pageName={pageName} />
      ) : (
        <CellContent pageName={pageName} loadable />
      )}
    </div>
  );
}

export default memo(function PageBox() {
  const searchData = useNexus("searchData");

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTopValue, setScrollTopValue] = useState(0);

  const usedPages = useMemo(() => {
    if (sessionStorage.getItem("searchText")) {
      return searchData;
    } else {
      return PageList;
    }
  }, [searchData]);

  useLayoutEffect(() => {
    if (sessionStorage.getItem("scrollTop")) {
      // setScrollTopValue(Number(sessionStorage.getItem("scrollTop")));
    } else if (window.location.hash.length > 2) {
      // устанавливаем scrollTop в новом окне
      const sectionChar = window.location.hash[2];
      if (sectionChar === "&") {
        const statesNewTab = window.location.hash.substring(3);
        const hashParts = statesNewTab.split("/");
        setScrollTopValue(Number(hashParts[1]));
      }
    }
  }, []);

  useStorage([
    {
      name: "scrollTop",
      value: Math.round(scrollTopValue) || false,
    },
  ]);

  return (
    <>
      {usedPages[0] !== "not found" ? (
        <div className="h-calcScreenH-112 m-auto max-w-1186 w-calcFull-54">
          <AutoSizer>
            {({ height, width }) => {
              let itemsPerRow;
              if (width < 298 * 2) {
                itemsPerRow = 1;
              } else if (width < 298 * 3) {
                itemsPerRow = 2;
              } else {
                itemsPerRow = 3;
              }

              const rowCount = usedPages
                ? Math.ceil(usedPages.length / itemsPerRow)
                : 0;

              return (
                <MultiGrid
                  cellRenderer={(params) =>
                    Cell({
                      ...params,
                      usedPages: usedPages,
                      itemsPerRow: itemsPerRow,
                    })
                  }
                  columnCount={itemsPerRow}
                  columnWidth={298}
                  height={height}
                  rowCount={rowCount}
                  rowHeight={214}
                  width={width}
                  overscanRowCount={0}
                  scrollTop={scrollTopValue}
                  onScroll={({ scrollTop }) =>
                    !isScrolling && setScrollTopValue(Math.ceil(scrollTop))
                  }
                />
              );
            }}
          </AutoSizer>
          <ToTopButton
            usedPages={usedPages}
            scrollTopValue={scrollTopValue}
            setScrollTopValue={setScrollTopValue}
            isScrolling={isScrolling}
            setIsScrolling={setIsScrolling}
          />
        </div>
      ) : (
        <div className="animate-ident text-indigo-500 dark:text-indigo-400 rounded-18 bg-indigo-100 shadow-shadow4 hover:shadow-shadow8 w-238 h-156 overflow-hidden flex justify-center items-center active:scale-95 transition-all1 hover:bg-indigo-50 dark:bg-indigo-900 dark:hover:bg-indigo-800 dark:shadow-shadow5 dark:hover:shadow-shadow6 absolute top-calc50%-77 left-calc50%-119 rotate-6 transition-none">
          <div className="scale-[0.180134] translate-y-10 pointer-events-none absolute rounded-50 w-1200 h-640 shadow-shadow3 overflow-hidden bg-white dark:shadow-shadow7">
            <div>
              <Page404Component />
            </div>
          </div>
          <div className="absolute left-0 top-0 w-full h-full px-25 font-bold text-xs text-center leading-7 whitespace-no-wrap overflow-hidden text-ellipsis dark:text-shadow-darkTS1">
            not found
          </div>
        </div>
      )}
    </>
  );
});
