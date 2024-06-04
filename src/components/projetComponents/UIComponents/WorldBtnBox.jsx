import React, { useState, useEffect } from "react";

const inlineStyles = {
  position: "absolute",
  top: "660px",
  left: "50%",
  transform: "translateX(-50%)",
  fontFamily: "Roboto, sans-serif",
  width: "140px",
};

export default function WorldBtnBox({ pageName }) {
  const currentPath = window.location.hash.substring(3).split("/")[0];
  const [isDarkWorld, setIsDarkWorld] = useState(false);
  const btnClickHandler = () => {
    setIsDarkWorld((prevIsDarkWorld) => !prevIsDarkWorld);
  };

  useEffect(() => {
    if (pageName === currentPath) {
      const main = document.querySelector(".main");
      const reG = document.querySelector(
        ".resource-panel > div:nth-of-type(2)"
      );
      const reI = document.querySelector(".resource-pic > img");
      const vvT = document.querySelector(".value-vip-ticket");

      const updateUI = () => {
        main.classList.toggle("world1", !isDarkWorld);
        main.classList.toggle("world3", isDarkWorld);
        reG.classList.toggle("resource-gold", !isDarkWorld);
        reG.classList.toggle("resource-dark_gold", isDarkWorld);
        reI.src = isDarkWorld ? "rc/v2-res-gold.png" : "img/v2-res-dark.png";
        vvT.style.display = isDarkWorld ? "block" : "none";
      };

      const worldBtn = document.querySelector(".color-btn.green.world-btn");
      if (worldBtn) {
        worldBtn.addEventListener("click", btnClickHandler);
      }

      updateUI();

      return () => {
        const worldBtn = document.querySelector(".color-btn.green.world-btn");
        if (worldBtn) {
          worldBtn.removeEventListener("click", btnClickHandler);
        }
      };
    }
  }, [isDarkWorld, pageName, currentPath]);

  return (
    <div style={inlineStyles}>
      <div className="color-btn green world-btn">
        <div className="color-btn-text">
          {isDarkWorld ? "To Light" : "To Dark"}
        </div>
      </div>
    </div>
  );
}
