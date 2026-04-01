import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";
import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ResCount from "../UIComponents/ResCount";

import elements from "../data/PopResValue";

export const cssFiles = ["v2-screen-fw-main", "v2-screen-fw-map"];

export default function V2MainScreen15CwMain3() {
  return (
    <div className="main lang-ru world1">
      <div
        className="main-bg"
        style={{
          backgroundImage: "url('../img/images/back/new/02-Forest-2.jpg')",
        }}
      ></div>
      <div className="left-side false false">
        <div className="left-panel wide false false">
          <div className="">
            <div className="tab-panel-box fw-main">
              <div className="trophy-res-box-all">
                <ResCount
                  className="fw-main-btlpass"
                  value="4.13K"
                  img="img/ic-contrip.png"
                />
              </div>

              <FraimedTitle className="tabPanelTit" text="Faption Wars" />

              <Button className="info clanWarInfo" text="i" />
              <Button className="back" text />

              <div className="fw-main-bl-box">
                <div className="fw-main-bl map">
                  <div className="fw-main-bl-name">map of war</div>
                  <div className="fw-main-bl-pic">
                    <img src="img/v2-fw-icon-maps.png" loading="lazy" />
                  </div>
                  <div
                    className="color-btn"
                    style={{
                      filter: "grayscale(1)",
                    }}
                  >
                    <div className="color-btn-text">
                      <div className="t">00:00:00</div>
                    </div>
                  </div>
                </div>
                <div className="fw-main-bl shop">
                  <div className="fw-main-bl-pic" style={{ top: "75px" }}>
                    <img src="img/v2-fw-icon-shop.png" loading="lazy" />
                  </div>
                  <div className="color-btn shop">
                    <div className="color-btn-text">Shop</div>
                  </div>
                  <div
                    className="color-btn"
                    style={{
                      filter: "grayscale(1)",
                    }}
                  >
                    <div className="color-btn-text">Clans</div>
                  </div>
                  <div className="fw-map-name-box-all cw">
                    <div className="fw-map-time-box">
                      <div>
                        <div className="fw-map-time1">
                          clash starts in:
                          <span className="t">17:25:18</span>
                        </div>
                        <div className="fw-map-time2">
                          Map locks 3 mins before clash
                        </div>
                      </div>
                    </div>
                    <div className="fw-map-name-box">
                      <div className="fw-map-name">day 0</div>
                      <div className="fw-map-date">Round 0/16</div>
                    </div>
                  </div>
                </div>
                <div className="fw-main-bl fraction">
                  <div className="fw-main-bl-name">rating</div>
                  <div className="fw-main-bl-pic">
                    <img src="img/v2-fw-icon-fraction.png" loading="lazy" />
                  </div>
                  <div
                    className="color-btn"
                    style={{
                      filter: "grayscale(1)",
                    }}
                  >
                    <div className="color-btn-text">rating</div>
                  </div>
                </div>
              </div>

              <div className="fw-level-box-all">
                <div className="fw-sim-el-box">
                  <div className="fw-simple">simple</div>
                  <div className="fw-level">4.32K/4.48K</div>
                  <div className="fw-elite">elite</div>
                </div>
                <MorphScroll
                  className="btlpass_scroll two"
                  size={[786, 190]}
                  objectsSize={[80, 190]}
                  progressTrigger={{
                    wheel: true,
                    progressElement: <ScrollThumb />,
                    content: true,
                  }}
                  edgeGradient={{ color: "#3f3c3a" }}
                  render={{ type: "virtual" }}
                  direction="x"
                >
                  {elements.map((element, index) => (
                    <div className="rewardsWrap" key={index}>
                      <ItemBox
                        className={`wh68 ${element.className}`}
                        itemPic={element.itemPic}
                        count={element.count}
                        get={element.className === "get" && true}
                        countOut={index + 1}
                      />
                      <ItemBox
                        className={`wh68 ${element.className}`}
                        itemPic={element.itemPic}
                        count={element.count}
                        get={element.className === "get" && true}
                      />
                    </div>
                  ))}
                </MorphScroll>
              </div>

              <ImageBg
                className="girlImg clanWarGirl"
                img="img/images/hero-all/tithero-719/icons/break-girl.png"
              >
                <Button
                  className="btnGold max eliteBtn"
                  text="become elite<p>$19.99"
                />
              </ImageBg>
            </div>
          </div>
        </div>
        <div className="tabs-all-box">
          <a className="tabs-all heroes" href="#/">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Heroes</div>
              <div className="tabs-pic">
                <img src="img/tab-01.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a
            className="tabs-all guild selected"
            aria-current="page"
            href="#/guild"
          >
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Guild base</div>
              <div className="tabs-pic">
                <img src="img/tab-08.png" loading="lazy" />
              </div>
            </div>
            <div className="v2-tab-notif notif notif20"></div>
          </a>
          <a className="tabs-all album" href="#/galery/pictures">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Gallery</div>
              <div className="tabs-pic">
                <img src="img/tab-05.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all rating" href="#/rating/jewerly">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="tabs-name">Rating Tab</div>
              <div className="tabs-pic">
                <img src="img/tab-02.png" loading="lazy" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
