import { useEffect, useRef, useState } from "react";
import { useNexus, nexusDispatch } from "nexus-state";

export default function ToggleButton() {
  const theme = useNexus("darkTheme");

  const templateMainRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const handleClick = () => {
    nexusDispatch({ type: "THEME" });
  };

  useEffect(() => {
    templateMainRef.current = document
      .getElementById("root")
      ?.querySelector("main");

    theme
      ? templateMainRef.current.classList.add("dark")
      : templateMainRef.current.classList.remove("dark");
  }, [theme]);

  return (
    <div
      className="absolute w-62 h-32 cursor-pointer bg-indigo-300 dark:bg-indigo-500 rounded-3xl shadow-shadowColorDark7 dark:shadow-darkThemeSearchInput top-50% right-10 -translate-y-1/2"
      ref={toggleButtonRef}
      onClick={handleClick}
    >
      <div
        className={`absolute w-26 h-26 cursor-pointer bg-indigo-200 dark:bg-indigo-900 rounded-3xl transition-all1 shadow-shadowColor8 dark:shadow-darkThemeClearBtn top-3 active:scale-90 hover:brightness-105${
          theme ? " left-32" : " left-3"
        }`}
      >
        <div
          className={`absolute top-0.5 left-0.5 scale-90 w-24 h-24 rounded-3xl border-transparent flex items-center justify-center drop-shadow-dS1 dark:drop-shadow-darkDS1 transition-all1${
            theme ? " shadow-shadow2 border-4" : " shadow-shadow1 border-6"
          }`}
        >
          <div
            className={`w-24 h-2 absolute border-r-4 border-l-4 border-indigo-400 flex items-center justify-center flex-col transition-all1 before:w-24 before:h-2 before:border-r-4 before:border-l-4 before:border-indigo-400 before:rotate-45${
              theme ? " " + "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-24 h-2 absolute border-r-4 border-l-4 border-indigo-400 rotate-90 flex items-center justify-center flex-col transition-all1 before:w-24 before:h-2 before:border-r-4 before:border-l-4 before:border-indigo-400 before:rotate-45${
              theme ? " " + "opacity-0" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
