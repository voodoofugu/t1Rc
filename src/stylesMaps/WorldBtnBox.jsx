import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const WorldBtnBox = styled.div`
//     .world-btn {
//         position: absolute;
//         top: 660px;
//         left: 50%;
//         transform: translateX(-50%);
//         font-family: "Roboto", sans-serif;
//         width: 140px;
//     }
// `;

const WorldBtnBox = ({ className }) => {
  const [isDarkWorld, setIsDarkWorld] = useState(false);

  const btnClickHandler = () => {
    setIsDarkWorld((prevIsDarkWorld) => !prevIsDarkWorld);
  };

  useEffect(() => {
    const main = document.querySelector(".main");
    const reG = document.querySelector(".resource-panel > div:nth-child(2)");
    const reI = document.querySelector(".resource-pic > img");
    const vvT = document.querySelector(".value-vip-ticket");

    const updateUI = () => {
      if (isDarkWorld) {
        main.classList.remove("world3");
        main.classList.add("world1");
        reG.classList.remove("resource-dark_gold");
        reG.classList.add("resource-gold");
        reI.src = "rc/v2-res-gold.png";
        vvT.style.display = "block";
      } else {
        main.classList.remove("world1");
        main.classList.add("world3");
        reG.classList.remove("resource-gold");
        reG.classList.add("resource-dark_gold");
        reI.src = "rc/v2-res-dark.png";
        vvT.style.display = "none";
      }
    };

    document
      .querySelector(".color-btn.green.world-btn")
      .addEventListener("click", () => {
        btnClickHandler();
      });

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
    // <WorldBtnBox>
    //     <div className={`color-btn green world-btn`}>
    //         <div className="color-btn-text"></div>
    //     </div>
    // </WorldBtnBox>
    <div className={className}>
      <div className="color-btn green world-btn">
        <div className="color-btn-text"></div>
      </div>
    </div>
  );
};

export default WorldBtnBox;
