import React, { createContext, useContext, useState } from "react";

const StylesLoadedContext = createContext({
  stylesLoaded: false,
  setStylesLoaded: () => {},
});

export function useStylesLoaded() {
  return useContext(StylesLoadedContext);
}

export function StylesLoadedProvider({ children }) {
  const [stylesLoaded, setStylesLoaded] = useState(false);

  return (
    <StylesLoadedContext.Provider value={{ stylesLoaded, setStylesLoaded }}>
      {children}
    </StylesLoadedContext.Provider>
  );
}
