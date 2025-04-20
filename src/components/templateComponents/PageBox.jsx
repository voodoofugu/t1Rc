import {
  memo,
  useMemo,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import { useNexus } from "nexus-state";
// import { MorphScroll } from "morphing-scroll";

import MorphScroll from "../../../morphing-scroll/src/MorphScroll";

import Cell from "./CellContent";
import ToTopButton from "./ToTopButton";
import Page404Component from "../projetComponents/pagesComponents/Page404";
import PageList from "../projetComponents/pagesComponents/a_pageList";
import useStorage from "../hooks/useStorage";

export default function PageBox() {
  const searchData = useNexus("searchData");

  const [isScrolling, setIsScrolling] = useState();
  const [scrollTopValue, setScrollTopValue] = useState(0);
  const [scrollNew, setScrollNew] = useState({
    value: 0,
    updater: false,
  });

  const usedPages = useMemo(() => {
    if (searchData) {
      return searchData;
    } else {
      return PageList;
    }
  }, [searchData]);

  const components = useCallback(
    usedPages.map((pageName, index) => (
      <Cell key={`${index}`} pageName={pageName} isScrolling={isScrolling} />
    )),
    [usedPages, isScrolling]
  );

  useStorage([
    {
      name: "scrollTop",
      value: Math.round(scrollTopValue) || false,
      onLoad: (value) => setScrollNew((prev) => ({ ...prev, value: value })),
    },
  ]);

  useLayoutEffect(() => {
    if (window.location.hash.length > 2) {
      // устанавливаем scrollTop в новом окне
      const sectionChar = window.location.hash[2];
      if (sectionChar === "&") {
        const statesNewTab = window.location.hash.substring(3);
        const hashParts = statesNewTab.split("/");
        setScrollTopValue(Number(hashParts[1]));
        setScrollNew((prev) => ({
          ...prev,
          value: Number(hashParts[1]),
          duration: 0,
        }));
      }
    }
  }, []);

  const onClickHandler = () => {
    setScrollNew((prev) => ({ ...prev, value: 0, updater: !prev.updater }));
  };

  return usedPages[0] !== "not found" ? (
    <div className="h-calcScreenH-112 m-auto  w-calcFull-80">
      <MorphScroll
        className="templateScroll"
        objectsSize={[238, 156]}
        gap={60}
        wrapper={{
          margin: [0, 14],
        }}
        progressTrigger={{
          wheel: true,
          progressElement: true,
        }}
        edgeGradient={{ color: "rgb(199, 210, 254)" }}
        // elementsAlign="center"
        contentAlign={["center", "start"]}
        render={{ type: "virtual" }}
        scrollPosition={scrollNew}
        onScrollValue={(_, t) => setScrollTopValue(t)}
        isScrolling={(v) => setIsScrolling(v)}
        crossCount={3}
      >
        {components}
      </MorphScroll>
      <ToTopButton
        scrollTopValue={scrollTopValue}
        isScrolling={isScrolling}
        onClick={onClickHandler}
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
  );
}
