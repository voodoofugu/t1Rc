import React, { useEffect, useRef, useState } from "react";

export default function ToggleButton() {
  const templateMainRef = useRef(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const handleThemeToggle = () => {
      templateMainRef.current.classList.toggle("dark");
      setIsDarkTheme((prevTheme) => !prevTheme);
      saveThemePreference(!isDarkTheme);
    };

    const saveThemePreference = (theme) => {
      try {
        localStorage.setItem("theme", theme ? "dark" : "light");
      } catch (error) {
        console.error("Error saving theme preference:", error);
      }
    };

    const loadThemePreference = () => {
      try {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
          templateMainRef.current.classList.add("dark");
          setIsDarkTheme(true);
        }
      } catch (error) {
        console.error("Error loading theme preference:", error);
      }
    };

    templateMainRef.current = document
      .getElementById("root")
      ?.querySelector("main");

    const themeToggleElement = document.getElementById("theme-toggle");
    if (themeToggleElement) {
      themeToggleElement.addEventListener("click", handleThemeToggle);
    }

    loadThemePreference();

    return () => {
      if (themeToggleElement) {
        themeToggleElement.removeEventListener("click", handleThemeToggle);
      }
    };
  }, [isDarkTheme]);

  return (
    <div
      className="absolute w-62 h-32 cursor-pointer bg-indigo-300 dark:bg-indigo-500 rounded-3xl shadow-shadowColorDark7 dark:shadow-darkThemeSearchInput top-50% right-10 -translate-y-1/2"
      id="theme-toggle"
    >
      <div
        className={`absolute w-26 h-26 cursor-pointer bg-indigo-200 dark:bg-indigo-900 rounded-3xl transition-all1 shadow-shadowColor8 dark:shadow-darkThemeClearBtn top-3 active:scale-90 hover:brightness-105${
          isDarkTheme ? " left-32" : " left-3"
        }`}
      >
        <div
          className={`absolute top-0.5 left-0.5 scale-90 w-24 h-24 rounded-3xl border-transparent flex items-center justify-center drop-shadow-dS1 dark:drop-shadow-darkDS1 transition-all1${
            isDarkTheme
              ? " shadow-shadow2 border-4"
              : " shadow-shadow1 border-6"
          }`}
        >
          <div
            className={`w-24 h-2 absolute border-r-4 border-l-4 border-indigo-400 flex items-center justify-center flex-col transition-all1 before:w-24 before:h-2 before:border-r-4 before:border-l-4 before:border-indigo-400 before:rotate-45${
              isDarkTheme ? " " + "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-24 h-2 absolute border-r-4 border-l-4 border-indigo-400 rotate-90 flex items-center justify-center flex-col transition-all1 before:w-24 before:h-2 before:border-r-4 before:border-l-4 before:border-indigo-400 before:rotate-45${
              isDarkTheme ? " " + "opacity-0" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
