import React, { createContext, useContext, useState } from "react";

const TooltipContext = createContext();

export function TooltipProvider({ children }) {
  const [tooltipData, setTooltipData] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });

  const setTooltip = (data) => {
    setTooltipData(data);
  };

  return (
    <TooltipContext.Provider value={{ tooltipData, setTooltip }}>
      {children}
    </TooltipContext.Provider>
  );
}

export function useTooltip() {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }
  return context;
}
