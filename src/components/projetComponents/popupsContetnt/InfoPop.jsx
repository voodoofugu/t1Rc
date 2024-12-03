import { useState, useEffect } from "react";
import { nexusEffect, useNexus } from "nexus-state";

export default function InfoPop({
  colorBox,
  text,
  textExtra,
  btnText1,
  btnText2,
  btnClass1,
  btnClass2,
  btn2curency,
  btn2State,
}) {
  const popupState = useNexus("popupState");

  const [textExtraState, setTextExtraState] = useState(false);
  const [htmlText, setHtmlText] = useState(null);

  const handleTextExtraClick = () => {
    setTextExtraState(!textExtraState);
  };

  useEffect(() => {
    if (text && text.substring(0, 4) === "HTML") {
      setHtmlText(text.substring(5));
    }
  }, [text]);

  return (
    <>
      {colorBox ? <div className="color-box"></div> : ""}
      <div className="content">
        {textExtra ? (
          <div
            className={`color-btn-info${textExtraState ? " back" : ""}`}
            onClick={handleTextExtraClick}
          ></div>
        ) : (
          ""
        )}
        <div className="text-box">
          {textExtraState ? (
            <div key={1} className="text">
              {textExtra}
            </div>
          ) : (
            <div key={2} className="text"></div>
          )}
        </div>
        {btnText1 ? (
          <div className={`color-btn ${btnClass1 ? btnClass1 : ""}`}>
            <div
              className="color-btn-text"
              onClick={() =>
                nexusEffect({
                  type: "handlePopup",
                  payload: { type: "close" },
                })
              }
            >
              {btnText1}
            </div>
          </div>
        ) : (
          ""
        )}
        {btnText2 ? (
          <div
            className={`color-btn ${btnClass2 ? btnClass2 : ""}`}
            onClick={() => {
              nexusEffect({
                type: "handlePopup",
                payload: { type: "close" },
              });
              // btn2State;
            }}
          >
            <div className="color-btn-text">
              {btnText2}
              {btn2curency && (
                <>
                  <img src={btn2curency[0]} loading="lazy" />
                  {btn2curency[1]}
                </>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
