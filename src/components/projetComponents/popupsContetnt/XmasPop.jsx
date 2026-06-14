import { useState, useLayoutEffect } from "react";
import nexus from "nexus";

import ItemBox from "../UIComponents/ItemBox";
import StoreItemBox from "../UIComponents/StoreItemBox";
import ImageBg from "../UIComponents/ImageBg";
import { MorphScroll } from "morphing-scroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

import elements from "../data/PopResValue";

const girlImg = "images/hero-all/tithero-760/icons/break-girl";

function XmasPop1({ setNewPopClass }) {
  return (
    <>
      <div className="color-box"></div>
      <ImageBg className="girlImg xmas-girl" img={`img/${girlImg}.png`} />

      <div className="xmas-box-all">
        <div className="xmas-collect-box-all">
          <div className="xmas-collect-box">
            <div className="xmas-collect-box-text">SIREN STRINGS PASS</div>
          </div>
          <div className="xmas-squad-holder">
            <ItemBox
              className="cardAva"
              itemPic="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
            />

            <ItemBox
              className="cardAva"
              itemPic="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
            />

            <ItemBox
              className="cardAva"
              itemPic="img/images/superhero/suphero-771/x1/avatar/771sh-ava-1.jpg"
              unique={["sh"]}
            />

            <ItemBox
              className="cardAva"
              itemPic="img/images/superhero/suphero-777/x1/avatar/777sh-ava-1.jpg"
              unique={["sh"]}
            />
          </div>
          <div className="prgball-box">
            <div className="prgall-prom">
              <div
                className="prg-all-bar"
                style={{
                  width: "25%",
                }}
              ></div>
            </div>
            <div className="prg-all-text">
              you have 0/9.63K
              <span className="ic-dildo"></span>
              dildos
            </div>
          </div>
          <div className="xmas-info-btn"></div>
        </div>
        <div className="xmas-level-box-all">
          <div className="xmas-sim-el-box">
            <div className="xmas-level">level</div>
            <div className="xmas-reward">reward</div>
          </div>

          <MorphScroll
            className="btlpass_scroll xmas-scroll"
            size={[534, 112]}
            objectsSize={[70, 114]}
            progressTrigger={{
              wheel: true,
              progressElement: <ScrollThumb />,
              content: true,
            }}
            edgeGradient
            render={{ type: "virtual" }}
            direction="x"
            wrapperMargin={[2, 0]}
          >
            {elements.map((element, index) => (
              <ItemBox
                className={`wh60 ${element.className}`}
                itemPic={element.itemPic}
                count={element.count}
                get={element.className === "get" && true}
                key={index}
                countOut={index + 1}
                onClick={() => {
                  element.className === "get" &&
                    nexus.set({
                      notif: {
                        view: true,
                        img: element.itemPic,
                        text: `You got ${element.count}`,
                      },
                    });
                }}
              />
            ))}
          </MorphScroll>
        </div>
      </div>
      <div className="xmas-btn-box">
        <div className="color-btn quest">
          <div
            className="color-btn-text"
            onClick={() => setNewPopClass("xmas-pop3")}
          >
            quest
          </div>
        </div>
        <div
          className="color-btn green"
          onClick={() => nexus.acts.handlePopup({ type: "close" })}
        >
          <div className="color-btn-text">close</div>
        </div>
        <div className="color-btn shop">
          <div
            className="color-btn-text"
            onClick={() => {
              setNewPopClass("xmas-pop2");
            }}
          >
            shop
          </div>
        </div>
      </div>
    </>
  );
}

function XmasPop2({ setNewPopClass }) {
  return (
    <>
      <div className="color-box"></div>
      <ImageBg className="girlImg xmas-girl" img={`img/${girlImg}.png`} />

      <div className="xmas-box-all">
        <div className="xmas-collect-box-all">
          <div className="xmas-collect-box">
            <div className="xmas-collect-box-text">
              collect dildos to get xxxmas girls!
            </div>
          </div>
          <div className="prgball-box">
            <div className="prgall-prom">
              <div
                className="prg-all-bar"
                style={{
                  width: "25%",
                }}
              ></div>
            </div>
            <div className="prg-all-text">
              you have 0/9.63K
              <span className="ic-dildo"></span>
              dildos
            </div>
          </div>
          <div className="xmas-info-btn"></div>
        </div>
        <div className="store-item-all">
          <div className="store-item-all-name">x-mas chests</div>
          <StoreItemBox
            storeItemName="1 XMas Chest"
            currencyIcon="img/ic-diamond.png"
            buyValue="18"
          >
            <ItemBox itemPic="img/v2-xmas-chest-red.png" />
          </StoreItemBox>

          <StoreItemBox
            storeItemName="3 XMas Chest"
            currencyIcon="img/ic-diamond.png"
            buyValue="43"
          >
            <ItemBox itemPic="img/v2-xmas-chest-red.png" />
          </StoreItemBox>

          <StoreItemBox
            storeItemName="5 XMas Chest"
            currencyIcon="img/ic-diamond.png"
            buyValue="63"
          >
            <ItemBox itemPic="img/v2-xmas-chest-red.png" />
          </StoreItemBox>

          <StoreItemBox
            storeItemName="10 XMas Chest"
            currencyIcon="img/ic-diamond.png"
            buyValue="sold"
            check
          >
            <ItemBox itemPic="img/v2-xmas-chest-red.png" />
          </StoreItemBox>
        </div>
      </div>
      <div className="xmas-btn-box">
        <div className="color-btn">
          <div
            className="color-btn-text"
            onClick={() => setNewPopClass("xmas-pop1")}
          >
            back
          </div>
        </div>
      </div>
    </>
  );
}

function XmasPop3({ setNewPopClass }) {
  return (
    <>
      <div className="color-box"></div>
      <ImageBg className="girlImg xmas-girl" img={`img/${girlImg}.png`} />

      <div className="xmas-daily-prg-box-all">
        <div className="xmas-prg-bar-box">
          <div className="xmas-prg-name-pic">0</div>
          <div className="xmas-prg-bar">
            <div
              className="xmas-prg"
              style={{
                width: "25%",
              }}
            ></div>
          </div>
        </div>
        <div className="xmas-reward-chest-box undefined undefined undefined">
          <div className="xmas-prg-bar-num-line">
            <div className="xmas-prg-bar-num">30</div>
          </div>
          <div className="xmas-level-rew-pic">
            <img src="img/v2-xmas-chest-red.png" loading="lazy" />
          </div>
          <div className="xmas-level-rew-num-check"></div>
          <div className="color-btn green">
            <div className="color-btn-text">collect</div>
          </div>
          <div className="xmas-level-rew-num-block"></div>
        </div>
        <div className="xmas-reward-chest-box v2 undefined undefined">
          <div className="xmas-prg-bar-num-line">
            <div className="xmas-prg-bar-num">70</div>
          </div>
          <div className="xmas-level-rew-pic">
            <img src="img/v2-xmas-chest-red.png" loading="lazy" />
          </div>
          <div className="xmas-level-rew-num-check"></div>
          <div className="color-btn green">
            <div className="color-btn-text">collect</div>
          </div>
          <div className="xmas-level-rew-num-block"></div>
        </div>
        <div className="xmas-reward-chest-box v3 undefined undefined">
          <div className="xmas-prg-bar-num-line">
            <div className="xmas-prg-bar-num">100</div>
          </div>
          <div className="xmas-level-rew-pic">
            <img src="img/v2-xmas-chest-red.png" loading="lazy" />
          </div>
          <div className="xmas-level-rew-num-check"></div>
          <div className="color-btn green">
            <div className="color-btn-text">collect</div>
          </div>
          <div className="xmas-level-rew-num-block"></div>
        </div>
      </div>
      <div className="xmas-daily-box-all xmas">
        <div className="xmas-daily-box">
          <div className="daily-parth-box">
            <div className="daily-parth-text">Hunt 3 bosses</div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/3</div>
            </div>
            <div className="daily-parth-claim-box">
              {/* <div className="daily-reward">
                <div className="daily-reward-pic">
                  <img src="img/ic-dildo-gold100.png" loading="lazy" />
                </div>
                <div className="daily-reward-count">20</div>
              </div> */}
              <ItemBox
                className="wh68 dailyReward"
                itemPic="img/ic-dildo-gold100.png"
                count={20}
              />
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
          <div className="daily-parth-box">
            <div className="daily-parth-text">Use 1 boss chests.</div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/1</div>
            </div>
            <div className="daily-parth-claim-box">
              <ItemBox
                className="wh68 dailyReward"
                itemPic="img/ic-dildo-gold100.png"
                count={1}
              />
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
          <div className="daily-parth-box">
            <div className="daily-parth-text">
              Level up any heroine by 10 levels.
            </div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/10</div>
            </div>
            <div className="daily-parth-claim-box">
              <ItemBox
                className="wh68 dailyReward"
                itemPic="img/ic-dildo-gold100.png"
                count={10}
              />
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
          <div className="daily-parth-box">
            <div className="daily-parth-text">
              Increase any master stat by 5 levels.
            </div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/5</div>
            </div>
            <div className="daily-parth-claim-box">
              <ItemBox
                className="wh68 dailyReward"
                itemPic="img/ic-dildo-gold100.png"
                count={5}
              />
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
          <div className="daily-parth-box">
            <div className="daily-parth-text">
              Level up any trophy by 10 levels.
            </div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/10</div>
            </div>
            <div className="daily-parth-claim-box">
              <ItemBox
                className="wh68 dailyReward"
                itemPic="img/ic-dildo-gold100.png"
                count={10}
              />
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
          <div className="daily-parth-box">
            <div className="daily-parth-text">
              Level up any trophy by 15 levels.
            </div>
            <div className="daily-prgbar-all">
              <div
                className="daily-prgbar"
                style={{
                  width: "0%",
                }}
              ></div>
              <div className="daily-prgbar-text">0/15</div>
            </div>
            <div className="daily-parth-claim-box">
              <ItemBox
                className="wh68 dailyReward"
                itemPic="img/ic-dildo-gold100.png"
                count={15}
              />
              <div className="color-btn disabled">
                <div className="color-btn-text">
                  <span>claim reward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xmas-btn-box">
        <div className="color-btn">
          <div
            className="color-btn-text"
            onClick={() => setNewPopClass("xmas-pop1")}
          >
            back
          </div>
        </div>
      </div>
    </>
  );
}

export default function XmasPop({ event }) {
  const setNewPopClass = (classN) =>
    nexus.set((prev) => ({
      popupState: {
        ...prev.popupState,
        mpopClass: `m-popup ${classN ? classN : "xmas-pop1"} xmas`,
      },
    }));

  useLayoutEffect(() => setNewPopClass(), []);

  const mpopClass = nexus.get("popupState").mpopClass;

  return mpopClass?.includes("xmas-pop1") ? (
    <XmasPop1 setNewPopClass={setNewPopClass} />
  ) : mpopClass?.includes("xmas-pop2") ? (
    <XmasPop2 setNewPopClass={setNewPopClass} />
  ) : mpopClass?.includes("xmas-pop3") ? (
    <XmasPop3 setNewPopClass={setNewPopClass} />
  ) : (
    ""
  );
}
