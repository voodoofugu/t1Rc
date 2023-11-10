import React, { useState } from "react";

export default function TooltipTemplate({ text, x, y }) {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="tooltip"
      style={{
        // display: visible ? "block" : "none",
        position: "absolute",
        top: y,
        left: x,
        border: "1px solid #ccc",
        padding: "8px",
        background: "#fff",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
      }}
    >
      {text}
    </div>
  );
}
