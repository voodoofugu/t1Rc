import React, { memo } from "react";
import nexus from "nexus";

export default memo(function ChangeCollpop() {
  const popupState = nexus.use("popupState");

  return (
    <>
      <div className="color-box"></div>
      <div
        className="close-btn-box"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      >
        <div className="color-btn close">
          <div className="color-btn-text">закрыть</div>
        </div>
      </div>
      <div className="collpop-cont">
        <div className="coll-prg-box-all">
          <div className="col-prg-box-ff"></div>
          <div className="col-prg-box">
            <div className="prg-box">
              <div
                className="prgbar"
                style={{
                  width: "68%",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="box-coll-all coll5">
          <div className="box-coll one">
            <div className="openchest-in check">
              <img
                className="inchest-pic"
                src="img/photo-ic@2x.png"
                loading="lazy"
              />
              <div className="openchest-in-count">2</div>
              <div className="openchest-in-check"></div>
            </div>
            <div className="box-coll-name">
              1st
              <br />
              collection
            </div>
            <div className="change-chest open"></div>
            <div className="change-line"></div>
          </div>
          <div className="box-coll two">
            <div className="openchest-in check">
              <img
                className="inchest-pic"
                src="img/photo-ic@2x.png"
                loading="lazy"
              />
              <div className="openchest-in-count">4</div>
              <div className="openchest-in-check"></div>
            </div>
            <div className="box-coll-name">
              2nd
              <br />
              collection
            </div>
            <div className="change-chest open"></div>
            <div className="change-line"></div>
          </div>
          <div className="box-coll three">
            <div className="openchest-in check">
              <img
                className="inchest-pic"
                src="img/photo-ic@2x.png"
                loading="lazy"
              />
              <div className="openchest-in-count">6</div>
              <div className="openchest-in-check"></div>
            </div>
            <div className="box-coll-name">
              3rd
              <br />
              collection
            </div>
            <div className="change-chest open"></div>
            <div className="change-line"></div>
          </div>
          <div className="box-coll four">
            <div className="openchest-in">
              <img
                className="inchest-pic"
                src="img/photo-ic@2x.png"
                loading="lazy"
              />
              <div className="openchest-in-count">6</div>
              <div className="openchest-in-check"></div>
            </div>
            <div className="box-coll-name">
              4th
              <br />
              collection
            </div>
            <div className="change-chest close"></div>
            <div className="change-line"></div>
          </div>
          <div className="box-coll five">
            <div className="openchest-in">
              <img
                className="inchest-pic"
                src="img/photo-ic@2x.png"
                loading="lazy"
              />
              <div className="openchest-in-count">8</div>
              <div className="openchest-in-check"></div>
            </div>
            <div className="box-coll-name">
              5th
              <br />
              collection
            </div>
            <div className="change-chest close"></div>
            <div className="change-line"></div>
          </div>
        </div>
      </div>
    </>
  );
});
