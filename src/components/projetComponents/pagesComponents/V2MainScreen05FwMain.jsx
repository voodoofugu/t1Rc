import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";
import Scroll from "../../../../morphing-scroll/src/MorphingScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ResCount from "../UIComponents/ResCount";

import elements from "../data/PopResValue";

export const cssFiles = [
  "v2-screen-fw-main",
  "v2-screen-fw-map",
  "screen-unipop-subscription",
];

function ClanWarBox({ className, img, btnText, onClick, children }) {
  return (
    <div className={`fw-main-bl ${className}`}>
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
            <div className="trophy-res-box-all">
              <ResCount
                className="fw-main-btlpass"
                value="4.13K"
                img="img/ic-contrip-red.png"
              />
            </div>

            <FraimedTitle className="tabPanelTit" text="clan war" />

            <Button className="info clanWarInfo" text="i" />
            <Button className="back" text />

            <div className="fw-main-bl-box">
              <ClanWarBox
                className="map"
                img="img/v2-fw-icon-maps.png"
                btnText="to battle"
              >
                <FraimedTitle
                  className="corners blue clanWarTit"
                  text="map of war"
                />
              </ClanWarBox>

              <ClanWarBox
                className="shop"
                img="img/v2-fw-icon-shop.png"
                btnText="clans"
              >
                <div className="fw-map-name-box-all cw">
                  <div className="fw-map-time-box">
                    <div>
                      <div className="fw-map-time1">
                        clash starts in: <span className="t">00:00:00</span>
                      </div>
                      <div className="fw-map-time2">
                        Map locks 3 mins before clash
                      </div>
                    </div>
                  </div>
                  <div className="fw-map-name-box">
                    <div className="fw-map-name">day 3</div>
                    <div className="fw-map-date">Round 12/16</div>
                  </div>
                </div>

                <Button className="clanWarBtn shop" text="shop" />
              </ClanWarBox>

              <ClanWarBox
                className="fraction"
                title="fraction"
                img="img/v2-fw-icon-fraction.png"
                btnText="rating"
              >
                <FraimedTitle
                  className="corners blue clanWarTit"
                  text="fraction"
                />
              </ClanWarBox>
            </div>
            {/* <div className="btn-close-x"></div> */}
            <div className="fw-level-box-all">
              <div className="fw-sim-el-box">
                <div className="fw-simple">simple</div>
                <div className="fw-level">4.32K/4.48K</div>
                <div className="fw-elite">elite</div>
              </div>
              <Scroll
                className="btlpass_scroll two"
                size={[786, 190]}
                objectsSize={[80, 190]}
                progressTrigger={["wheel", "progressElement", "content"]}
                progressElement={<ScrollThumb />}
                edgeGradient={{ color: "#3f3c3a" }}
                progressBarSize={8}
                infiniteScroll
                direction
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
            </div>

            <ImageBg
              className="girlImg clanWarGirl"
              img="img/images/hero-all/tithero-430/icons/break-girl.png"
            >
              <Button className="info" text="i" />
              <Button
                className="btnGold max eliteBtn"
                text="become elite<p>$19.99"
              />
            </ImageBg>
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
