import { memo } from "react";
import { nexusTrigger, useNexus } from "nexus-state";

export default memo(function ChangeGivepic() {
  const popupState = useNexus("popupState");

  return (
    <>
      <div className="color-box"></div>
      <div className="change-gp-box-all">
        <div className="change-pic-box">
          <div className="change-pic">
            <img
              className="pic"
              src="https://cdn.faptitans.com/thb/2/3/1/o231f56a131ef2248aa8efb3133a380eb.jpg"
              style={{
                left: "33.3333px",
                top: "0px",
                width: "533.333px",
                height: "400px",
              }}
              loading="lazy"
            />
          </div>
          <div className="change-info-box">
            <div className="btn-fullscr"></div>
            <div className="picture-author">Художник: thequeenzelda</div>
            <div className="change-pic-star">
              <div className="star2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="change-main-counter-box">
        <div className="change-main-counter-collection-all">
          <div className="tag-name">blonde</div>
          <div
            className="change-btn-info"
            onClick={() =>
              nexusTrigger({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup change-collpop",
                    popTit: "collection",
                    popCont: "ChangeCollpop",
                  },
                },
              })
            }
          >
            info
          </div>
          <div className="change-prgbar-box">
            <div className="prgbar-box">
              <div
                className="prgbar"
                style={{
                  width: "40%",
                }}
              ></div>
            </div>
            <div className="prgbar-text">2/5</div>
          </div>
          <div className="change-take-all">
            <div className="change-chest-box"></div>
            <div className="change-chest-text">
              Collect pictures to receive this reward!
            </div>
            <div className="color-btn take green disable">
              <div className="color-btn-text">take</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="color-btn okgoit green"
        onClick={() =>
          nexusTrigger({
            type: "handlePopup",
            payload: { type: "close" },
          })
        }
      >
        <div className="color-btn-text">ок</div>
      </div>
    </>
  );
});
