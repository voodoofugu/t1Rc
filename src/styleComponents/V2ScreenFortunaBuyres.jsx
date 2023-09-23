import React, { useEffect } from "react";
import { css } from "@emotion/react";

const dynamicClassName = css`
  ${V2ScreenFortunaBuyresStyles}
`;

const V2ScreenFortunaBuyresStyles = (className) => css`
  .${className} {
    .popup-layer .m-popup.bf-event__buy-keys-pop {
      width: 1000px;
      height: 472px;
      left: 100px;
      top: 84px;
      &:before {
        content: "";
        background-color: #b7a497;
      }
      .keys-card-box {
        width: 230px;
        height: 380px;
        position: relative;
        display: inline-block;
        top: 62px;
        border-radius: 10px;
        margin: 10px 5px 10px 5px;
        box-shadow: 0 0 10px #332821;
        background: linear-gradient(
          0deg,
          #8e7453 0%,
          #e3c7a3 50%,
          #8f7553 70%,
          #ae916a 85%,
          #8e7453 100%
        );
        &:before {
          content: "";
          width: 224px;
          height: 374px;
          position: absolute;
          top: 3px;
          margin-left: -112px;
          border-radius: 8px;
          background: linear-gradient(
            0deg,
            #af946f 0%,
            #dbbf9c 31%,
            #8f7553 100%
          );
          box-shadow: inset 0 0 6px #5a472f;
        }
        .keys-but-box {
          width: 180px;
          height: 180px;
          position: absolute;
          top: 15px;
          left: 25px;
          img {
            width: 100%;
          }
        }
        .keys-price,
        .keys-bonus {
          width: 200px;
          height: 50px;
          position: absolute;
          top: 210px;
          margin-left: 15px;
          font-size: 40px;
          color: #50402a;
          text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
          font-weight: bold;
          line-height: 50px;
          text-transform: uppercase;
        }
        .keys-bonus {
          height: 32px;
          top: 246px;
          font-size: 18px;
          color: #b51212;
          text-shadow: 0 1px 2px #fff;
          line-height: 32px;
          text-transform: uppercase;
        }
        .keybtn-box {
          width: 174px;
          height: 56px;
          background: linear-gradient(0deg, #917858 0%, #c8ac88 100%);
          border-radius: 12px;
          position: absolute;
          top: 294px;
          margin-left: 28px;
          box-shadow: inset 0 0 4px #907654;
          .keybtn {
            width: 160px;
            height: 42px;
            position: relative;
            text-align: center;
            top: 7px;
            background: linear-gradient(
              45deg,
              #e8c34e,
              #f1da7c,
              #cfa831,
              #fbf1d8
            );
            border-radius: 8px;
            box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
              inset 0 -3px 0px #c87725, 0 0 3px #3d3737, inset 0 0 3px #603806;
            cursor: pointer;
            text-transform: uppercase;
            font-size: 20px;
            font-weight: bold;
            color: #4a3a08;
            text-shadow: 0 0 1px #0d0a01, 0 2px 1px #fff;
            line-height: 42px;
            margin: auto;
            &:active {
              top: 8px;
            }
            &:hover {
              box-shadow: inset 0 -20px 5px rgba(200, 119, 37, 0.59),
                inset 0 -3px 0 #c87725, 0 0 12px #ff0, 0 0 5px #ffc,
                inset 0 0 10px #ffc, inset 0 0 3px #603806;
            }
          }
        }
      }
    }
  }
`;

const V2ScreenFortunaBuyres = ({ children }) => {
  const className = dynamicClassName.name;

  useEffect(() => {
    // Проверяем, существует ли уже тег style с таким классом
    if (!document.querySelector(`style.${className}`)) {
      const styleElement = document.createElement("style");
      styleElement.textContent = V2ScreenFortunaBuyresStyles(className).styles;
      styleElement.classList.add(className);
      document.head.appendChild(styleElement);
    }

    return () => {
      // Если компонент размонтируется, то стили можно удалить
      const styleElement = document.querySelector(`style.${className}`);
      const elementsWithClassName = document.querySelectorAll(`.${className}`);
      if (elementsWithClassName.length < 2) {
        styleElement.remove();
      }
    };
  }, [className]);

  return <div className={className}>{children}</div>;
};

export default dynamicClassName;
