import { nexusEffect, useNexus } from "nexus-state";

export default function DatingImgPop({ img }) {
  const popupState = useNexus("popupState");

  return (
    <>
      <div
        className="closeBG"
        onClick={() =>
          nexusEffect({
            type: "handlePopup",
            payload: { type: "close" },
          })
        }
      ></div>
      <div className="content">
        <img className="pic" src={img} loading="lazy" />
        <div
          className="btn-close-x"
          onClick={() =>
            nexusEffect({
              type: "handlePopup",
              payload: { type: "close" },
            })
          }
        />
      </div>
    </>
  );
}
