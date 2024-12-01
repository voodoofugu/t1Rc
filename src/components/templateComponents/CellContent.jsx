import { memo, Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNexus, nexusUpdate } from "nexus-state";

import transformCssFileNames from "../../scripts/templateScripts/transformCssFileNames";
import useDynamicImport from "../hooks/useDynamicImport";

import Loading from "./Loading";
import HelmetForCss from "./HelmetForCss";

import ComponToLoad from "../projetComponents/UIComponents/ComponToLoad";
import Tooltip from "./Tooltip";

export default memo(function CellContent({ pageName, loadable }) {
  const activePage = useNexus("activePage");
  const searchText = useNexus("searchText");

  const [stylesLoaded, setStylesLoaded] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [style, setStyle] = useState(false);

  const [newTabPosition, setNewTabPosition] = useState({
    scrollTop: 0,
    top: 0,
    left: 0,
  });

  const module = useDynamicImport(
    `${activePage || pageName || ""}`,
    "pagesComponents"
  );
  const DynamicComponent = module?.default;
  const cssFiles = module?.cssFiles;

  let transformedCssFiles = Array.isArray(cssFiles)
    ? transformCssFileNames(cssFiles).join(" ")
    : "";

  useEffect(() => {
    if (window.location.hash.length > 2) {
      const sectionChar = window.location.hash[2]; // выбираем разделитель &
      if (sectionChar === "&") {
        const statesNewTab = window.location.hash.substring(3);
        const hashParts = statesNewTab.split("/");

        nexusUpdate({
          pageData: {
            scrollTop: hashParts[1],
            top: hashParts[2],
            left: hashParts[3],
          },
          activePage: hashParts[0],
          searchText: hashParts[4],
        });

        setStyle(true);
      }
    }
  }, []);

  const computePositionData = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const top = Math.round(rect.top - 233);
    const left = Math.round(rect.left - 482);
    const scrollTop = Number(sessionStorage.getItem("scrollTop")) || 0;

    return { scrollTop, top, left };
  };

  const pageOpen = (event) => {
    if (!activePage) {
      const positionData = computePositionData(event);

      setPosition(positionData);

      nexusUpdate({
        pageData: positionData,
        activePage: pageName,
      });

      setTimeout(() => {
        setStyle(true);
        setPosition({ top: 0, left: 0 });
      }, 0);
    }
  };

  const pageOpenNewTab = (event) => {
    const positionData = computePositionData(event);
    setNewTabPosition(positionData);
  };

  const pageClose = () => {
    const { top, left } = JSON.parse(sessionStorage.getItem("pageData"));

    setPosition({
      top: top,
      left: left,
    });
    setStyle(false);

    setTimeout(() => {
      nexusUpdate({
        activePage: "",
        pageData: null,
      });
    }, 200);

    window.location = "#";
  };

  const loadFill = (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(4, 8, 42, 0.4)",
        position: "absolute",
      }}
    ></div>
  );

  return (
    <>
      {loadable ? (
        <div
          className={
            "animate-ident text-indigo-500 dark:text-indigo-400 rounded-18 bg-indigo-100 shadow-shadow4 hover:shadow-shadow8 w-238 h-156 relative overflow-hidden flex justify-center items-center active:scale-95 transition-all1 hover:bg-indigo-50 dark:bg-indigo-900 dark:hover:bg-indigo-800 dark:shadow-shadow5 dark:hover:shadow-shadow6"
          }
        >
          {activePage ? (
            <>
              {activePage === pageName ? (
                <>
                  {createPortal(
                    <div
                      className={`absolute overflow-hidden transition-all1 ${
                        style
                          ? "scale-1 w-full h-full bg-[#9F8978]"
                          : "scale-[0.180134] w-1200 h-640 rounded-50 shadow-shadow3 bg-white dark:shadow-shadow7"
                      }`}
                      style={{
                        top: position.top + "px",
                        left: position.left + "px",
                      }}
                    >
                      {cssFiles && (
                        <HelmetForCss
                          cssFiles={cssFiles}
                          setStylesLoaded={setStylesLoaded}
                        />
                      )}
                      <Suspense fallback={loadFill}>
                        {!stylesLoaded ? (
                          <Loading />
                        ) : (
                          <div
                            className={`likeBody ${transformedCssFiles}`}
                            id={pageName}
                          >
                            {DynamicComponent && (
                              <>
                                <DynamicComponent
                                  pageName={pageName}
                                  key={pageName}
                                >
                                  <ComponToLoad pageName={pageName} />
                                </DynamicComponent>
                              </>
                            )}
                            <a
                              className={`absolute left-50% -translate-x-50% bottom-30 w-40 h-40 cursor-pointer bg-indigo-200 dark:bg-indigo-900 rounded-3xl shadow-toTopBtn dark:shadow-darkThemeClearBtn active:scale-90 brightness-105 hover:brightness-110 transition-all1`}
                              onClick={pageClose}
                              href="#"
                            >
                              <div className="absolute w-full h-full drop-shadow-dS1 dark:drop-shadow-darkDS1 before:absolute after:absolute before:transition-all1 after:transition-all1 before:rounded-30 after:rounded-30 after:-rotate-45 before:left-50% before:top-50% before:-translate-x-50% before:-translate-y-50% before:rotate-45 before:w-3 before:h-24 before:bg-indigo-400 hover:before:bg-red-500 after:left-50% after:top-50% after:-translate-x-50% after:-translate-y-50% after:w-3 after:h-24 after:bg-indigo-400 hover:after:bg-red-500"></div>
                            </a>
                          </div>
                        )}
                      </Suspense>
                    </div>,
                    document.querySelector("#templateBody")
                  )}
                </>
              ) : (
                <div className="scale-[0.180134] translate-y-10 pointer-events-none absolute rounded-50 w-1200 h-640 shadow-shadow3 overflow-hidden bg-white dark:shadow-shadow7">
                  {loadFill}
                </div>
              )}
            </>
          ) : cssFiles ? (
            <div className="scale-[0.180134] translate-y-10 pointer-events-none absolute rounded-50 w-1200 h-640 shadow-shadow3 overflow-hidden bg-white dark:shadow-shadow7">
              <HelmetForCss
                cssFiles={cssFiles}
                setStylesLoaded={setStylesLoaded}
              />
              <Suspense fallback={loadFill}>
                {!stylesLoaded ? (
                  <Loading />
                ) : (
                  <div
                    className={`likeBody ${transformedCssFiles}`}
                    id={pageName}
                  >
                    {DynamicComponent ? (
                      <DynamicComponent pageName={pageName} key={pageName} />
                    ) : (
                      loadFill
                    )}
                  </div>
                )}
              </Suspense>
            </div>
          ) : (
            <div className="scale-[0.180134] translate-y-10 pointer-events-none absolute rounded-50 w-1200 h-640 shadow-shadow3 overflow-hidden bg-white dark:shadow-shadow7">
              {loadFill}
            </div>
          )}
          <a
            className="absolute left-0 top-0 w-full h-full px-25 font-bold text-xs text-center leading-7 whitespace-no-wrap overflow-hidden text-ellipsis dark:text-shadow-tS1Black cursor-pointer"
            href={`#/&${pageName}/${newTabPosition.scrollTop}/${newTabPosition.top}/${newTabPosition.left}/${searchText}`}
            onClick={pageOpen}
            onMouseUp={pageOpenNewTab}
          >
            {pageName}
          </a>
          <Tooltip text={pageName} position="top">
            <div className="absolute top-6 left-214 w-16 h-16 bg-indigo-200 shadow-shadowColorDark7 rounded-3xl text-indigo-500 text-base font-bold text-shadow-tS1 cursor-help transition-all1 flex justify-center items-center dark:bg-indigo-500 dark:text-indigo-900 dark:shadow-darkThemeSearchInput hover:bg-blue-200 dark:hover:bg-emerald-500">
              i
            </div>
          </Tooltip>
        </div>
      ) : (
        <div className="animate-ident text-indigo-500 dark:text-indigo-400 rounded-18 bg-indigo-100 shadow-shadow4 hover:shadow-shadow8 w-238 h-156 relative overflow-hidden flex justify-center items-center active:scale-95 transition-all1 hover:bg-indigo-50 dark:bg-indigo-900 dark:hover:bg-indigo-800 dark:shadow-shadow5 dark:hover:shadow-shadow6">
          <div className="scale-[0.180134] translate-y-10 pointer-events-none absolute rounded-50 w-1200 h-640 shadow-shadow3 overflow-hidden bg-white dark:shadow-shadow7">
            {loadFill}
          </div>
          <a className="absolute left-0 top-0 w-full h-full px-25 font-bold text-xs text-center leading-7 whitespace-no-wrap overflow-hidden text-ellipsis dark:text-shadow-tS1Black">
            {pageName}
          </a>
          <div className="absolute top-6 left-214 w-16 h-16 bg-indigo-200 shadow-shadowColorDark7 rounded-3xl text-indigo-500 text-base font-bold text-shadow-tS1 cursor-help transition-all1 flex justify-center items-center dark:bg-indigo-500 dark:text-indigo-900 dark:shadow-darkThemeSearchInput hover:bg-blue-200 dark:hover:bg-emerald-500 pointer-events-none">
            i
          </div>
        </div>
      )}
    </>
  );
});
