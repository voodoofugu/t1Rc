import React, { useEffect, useRef, useState } from "react";

export default function ToggleButton() {
  const templateMainRef = useRef(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const handleThemeToggle = () => {
      templateMainRef.current.classList.toggle("dark-theme");
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
          templateMainRef.current.classList.add("dark-theme");
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
    <div className={`toggle-btn ${isDarkTheme ? "on" : ""}`} id="theme-toggle">
      <div className="btnIcn"></div>
    </div>
  );
}
