import React from "react";

export default function Monster() {
  return (
    <div className="monster">
      <canvas
        width="491"
        height="540"
        style={{
          touchAction: "none",
          width: "491px",
          height: "540px",
          cursor: "inherit",
        }}
      ></canvas>
    </div>
  );
}
