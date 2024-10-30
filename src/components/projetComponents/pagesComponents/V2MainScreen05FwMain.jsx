import React from "react";

import ItemBox from "../UIComponents/ItemBox";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ResCount from "../UIComponents/ResCount";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";
import Scroll from "../../../../morphing-scroll/src/MorphingScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

import elements from "../popupsContetnt/PopResValue";

export const cssFiles = [
  "v2-screen-fw-main",
  "v2-screen-fw-map",
  "screen-unipop-subscription",
];

function ClanWarBox({ className, title, img, btnText, onClick, children }) {
  return (
    <div className={`fw-main-bl ${className}`}>
      {/* <div className="fw-main-bl-name">{title}</div> */}
      <FraimedTitle className="banner blue clanWarTit" text={title} />
      <div className="fw-main-bl-pic">
        <img src={img} loading="lazy" />
      </div>
      <Button className="clanWarBtn" text={btnText} onClick={() => onClick} />
      {children}
    </div>
  );
}

export default function V2MainScreen05FwMain() {
  return (
    <div className="main world1">
      <div
        className="main-bg"
        style={{
          backgroundImage: "url('../img/images/back/new/09-River.jpg')",
        }}
      ></div>
      <div className="left-side">
        <div className="left-panel wide">
          <div className="tab-panel-box fw-main btlpass-buy-box">
            <div className="tab-panel-box-title">fraction war</div>
            <div className="fw-main-bl-box">
              <ClanWarBox
                className="map"
                title="map of war"
                img="img/v2-fw-icon-maps.png"
                btnText="battle"
              />

              <ClanWarBox
                className="shop"
                title="fraction shop"
                img="img/v2-fw-icon-shop.png"
                btnText="clans"
              >
                <Button className="clanWarBtn shop" text="shop" />
              </ClanWarBox>

              <ClanWarBox
                className="fraction"
                title="fraction"
                img="img/v2-fw-icon-fraction.png"
                btnText="rating"
              />
            </div>
            <div className="btn-close-x"></div>

            <Scroll
              className="btlpass_scroll"
              scrollXY={[760, 202]}
              objectXY={[80, 190]}
              progressTrigger={["wheel", "progressElement", "content"]}
              thumbElement={<ScrollThumb />}
              edgeGradient={{ color: "#b7a597" }}
              progressBarSize={8}
              infiniteScroll
              xDirection
            >
              {elements.map((element, index) => (
                <div className="rewardsWrap" key={index}>
                  <ItemBox
                    itemClass={`wh68 ${element.itemClass}`}
                    itemPic={element.itemPic}
                    count={element.count}
                    get={element.itemClass === "get" && true}
                    countOut={index + 1}
                  />
                  <ItemBox
                    itemClass={`wh68 ${element.itemClass}`}
                    itemPic={element.itemPic}
                    count={element.count}
                    get={element.itemClass === "get" && true}
                  />
                </div>
              ))}
            </Scroll>

            <div className="fw-btlpass-buy-box-all">
              <div className="fw-btlpass-girl"></div>
              <div className="store-button both">
                <div className="but-price-text">become elite</div>
                <div className="but-price">$19.99</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs-all-box">
          <div className="tabs-all selected">
            <div className="tabs-name">Heroes</div>
            <div className="tabs-pic">
              <img src="img/tab-01.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all">
            <div className="tabs-name">Album</div>
            <div className="tabs-pic">
              <img src="img/tab-05.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all">
            <div className="tabs-name">Guild</div>
            <div className="tabs-pic">
              <img src="img/tab-08.png" loading="lazy" />
            </div>
          </div>
          <div className="tabs-all">
            <div className="tabs-name">Rating</div>
            <div className="tabs-pic">
              <img src="img/tab-02.png" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
