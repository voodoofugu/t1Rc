import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const StyledWorldBtnBox = styled.div`
  position: absolute;
  top: 660px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Roboto", sans-serif;
  width: 140px;
`;

const WorldBtnBox = () => {
  const [isDarkWorld, setIsDarkWorld] = useState(false);

  const btnClickHandler = () => {
    setIsDarkWorld((prevIsDarkWorld) => !prevIsDarkWorld);
  };

  useEffect(() => {
    const main = document.querySelector(".main");
    const reG = document.querySelector(".resource-panel > div:nth-of-type(2)");
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
    worldBtn.addEventListener("click", btnClickHandler);

    // Обновление UI при изменении isDarkWorld
    updateUI();

    // Очистка слушателя события при размонтировании компонента
    return () => {
      document
        .querySelector(".color-btn.green.world-btn")
        .removeEventListener("click", btnClickHandler);
    };
  }, [isDarkWorld]);

  return (
    <StyledWorldBtnBox>
      <div className="color-btn green world-btn">
        <div className="color-btn-text"></div>
      </div>
    </StyledWorldBtnBox>
  );
};

export default WorldBtnBox;
