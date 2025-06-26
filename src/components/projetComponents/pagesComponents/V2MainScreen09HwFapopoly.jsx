import { nexusTrigger } from "nexus-state";
import ItemBox from "../UIComponents/ItemBox";

export const cssFiles = [
  "screen-fapopoly-main",
  "v2-screen-hw-btlpass",
  "v2-screen-events-btlpass",
  // "v2-screen-tower",
  "screen-fapopoly-rating",
  "screen-superhero",
  "screen-unipop-subscription",
  "screen-fapopoly-shop",
];

export default function V2MainScreen09HwFapopoly({ pageName, children }) {
  return (
    <div className="main world1">
      <div
        className="main-bg"
        style={{
          backgroundImage: "url('../img/v2-fapop-hw1.jpg')",
        }}
      ></div>
      <div className="fapop-content-all">
        <div>
          <div
            style={{
              width: "1200px",
              height: "640px",
              position: "absolute",
              top: "0px",
              left: "0px",
            }}
          >
            <div className="fp-portal disabled">
              <div item="[object Object]" top_offset="100">
                <img
                  className="fp-portal-img"
                  src="img/v2-portal1.png"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "150px",
                width: "100px",
                left: "429px",
                top: "328px",
                zIndex: "11",
              }}
            >
              <div
                className="fapop-player"
                style={{ width: "100%", height: "100%" }}
              >
                <div className="fapop-player-name">guest24783</div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "389.5px",
                top: "346px",
                zIndex: "10",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic10.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "331.5px",
                top: "374px",
                zIndex: "11",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic03.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "273.5px",
                top: "346px",
                zIndex: "10",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic11.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "216.5px",
                top: "317px",
                zIndex: "9",
              }}
            >
              <div>
                <img
                  src="img/fapop-ic02.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "272.5px",
                top: "288px",
                zIndex: "8",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic08.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "215.5px",
                top: "261px",
                zIndex: "7",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "160.5px",
                top: "234px",
                zIndex: "6",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic10.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "218.5px",
                top: "207px",
                zIndex: "5",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic13.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "271.5px",
                top: "179px",
                zIndex: "4",
              }}
            >
              <div top_offset="50">
                <img
                  src="img/fapop-ic12.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "330.5px",
                top: "206px",
                zIndex: "5",
              }}
            >
              <div>
                <img
                  src="img/fapop-ic02.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "388.5px",
                top: "173px",
                zIndex: "4",
              }}
            >
              <div top_offset="50">
                <img
                  src="img/fapop-ic06.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "445.5px",
                top: "202px",
                zIndex: "5",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic11.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "501.5px",
                top: "174px",
                zIndex: "4",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic08.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "558.5px",
                top: "146px",
                zIndex: "3",
              }}
            >
              <div>
                <img
                  src="img/fapop-ic02.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "613.5px",
                top: "119px",
                zIndex: "2",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic07.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "667.5px",
                top: "91px",
                zIndex: "1",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic13.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "723.5px",
                top: "117px",
                zIndex: "2",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic07.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "779.5px",
                top: "147px",
                zIndex: "3",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic03.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "838.5px",
                top: "172px",
                zIndex: "4",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic10.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "895.5px",
                top: "194px",
                zIndex: "5",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic09.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "951.5px",
                top: "224px",
                zIndex: "6",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic05.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "1010.5px",
                top: "252px",
                zIndex: "7",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic07.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "953.5px",
                top: "280px",
                zIndex: "8",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic05.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "1010.5px",
                top: "308px",
                zIndex: "9",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "954.5px",
                top: "336px",
                zIndex: "10",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic09.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "898.5px",
                top: "366px",
                zIndex: "11",
              }}
            >
              <div>
                <img
                  src="img/fapop-ic02.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "842.5px",
                top: "335px",
                zIndex: "10",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic09.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "783.5px",
                top: "311px",
                zIndex: "9",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic11.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "728.5px",
                top: "330px",
                zIndex: "10",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "672.5px",
                top: "366px",
                zIndex: "11",
              }}
            >
              <div top_offset="50">
                <img
                  src="img/fapop-ic12.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "727.5px",
                top: "393px",
                zIndex: "12",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic03.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "672.5px",
                top: "419px",
                zIndex: "13",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic05.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "618.5px",
                top: "449px",
                zIndex: "14",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic09.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "558.5px",
                top: "421px",
                zIndex: "13",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic08.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                height: "100px",
                width: "67px",
                left: "505.5px",
                top: "398px",
                zIndex: "12",
              }}
            >
              <div item="[object Object]" top_offset="50">
                <img
                  src="img/fapop-ic13.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="fapop-exit-box">
            <a className="color-btn active0" aria-current="page" href="#/">
              <div className="color-btn-text">exit</div>
            </a>
          </div>
          <div
            className="bfIcon"
            onClick={() => {
              nexusTrigger({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup events-btlpass-pop hw",
                    popTit: "HALLOWEEN EVENT PASS",
                    popCont: "BtlPass",
                  },
                },
              });
            }}
          >
            <img className="icon" src="img/ic-hw.png" loading="lazy" />
          </div>
          <div
            className="bfIcon second"
            onClick={() => {
              nexusTrigger({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup essence-buy",
                    popTit: "Buy Event Tokens",
                    popCont: [
                      "BuyShop",
                      {
                        img1: "heartCoin-1",
                        img2: "heartCoin-2",
                        img3: "heartCoin-3",
                      },
                    ],
                  },
                },
              });
            }}
          >
            <img className="icon" src="img/heartCoin-ic.png" loading="lazy" />
          </div>
          <div className="fapop-rating-tokens-box">
            <div
              className="color-btn rating"
              onClick={() => {
                nexusTrigger({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      mpopClass: "m-popup fapop-rating",
                      popTit: "rating",
                      popCont: "FapopRating",
                    },
                  },
                });
              }}
            >
              <div className="color-btn-text">
                <img
                  className="domik"
                  src="img/sAndL/ratingIcn.png"
                  loading="lazy"
                />
                rating
              </div>
            </div>
            <div
              className="color-btn token"
              onClick={() => {
                nexusTrigger({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      mpopClass: "m-popup fapop-shop buyed",
                      popTit: "tokens",
                      popCont: "FapopShopBuyed",
                    },
                  },
                });
              }}
            >
              <div className="color-btn-text">
                <img
                  className="domik"
                  src="img/evPopArts/fapop-token-ic.png"
                  loading="lazy"
                />
                tokens
              </div>
            </div>
            <div className="color-btn gblue">
              <div className="color-btn-text">
                <img className="domik" src="img/pse-epic3.png" loading="lazy" />
                shop
              </div>
            </div>
            <div className="color-btn bordo">
              <div className="color-btn-text">
                <img
                  className="domik"
                  src="img/pse-keygirl.png"
                  loading="lazy"
                />
                Collections
              </div>
            </div>
            <div className="color-btn bordo magic">
              <div className="color-btn-text">
                <img
                  className="domik"
                  src="img/icn-dual-ball.png"
                  loading="lazy"
                />
                Dual Pack
              </div>
            </div>
            <div className="color-btn gblue">
              <div className="color-btn-text">
                <img
                  className="domik"
                  src="img/val2021_res1.png"
                  loading="lazy"
                />
                Craftery
              </div>
            </div>
          </div>
          <div>
            <div className="fapop-times-around-box">
              <div className="fapop-times-around-prgbar">
                <div
                  className="fapop-times-around-prgbar-full"
                  style={{ height: "17%" }}
                ></div>
                <div className="fapop-times-around-text">
                  Floor 1/13
                  <br />
                  Trips 0/13
                </div>
              </div>
            </div>
            <div className="fapop-rewards-box-all">
              <div className="fapop-rewards-text">rewards</div>

              <div className="fapop-rewards-box">
                <ItemBox
                  itemClass="wh68"
                  itemPic="img/images/superhero/suphero-08/x1/avatar/08sh-ava-1.jpg"
                  countOut="75"
                />
                <ItemBox
                  itemClass="wh68"
                  itemPic="img/ic-abil-dps-plus@2x.png"
                  count="x2"
                  countOut="50"
                />
                <ItemBox
                  itemClass="wh68"
                  itemPic="img/arrow_up1.png"
                  count="15"
                  countOut="35"
                />
                <ItemBox
                  itemClass="wh68"
                  itemPic="img/sh-icon-chest-128.png"
                  count="35"
                  countOut="20"
                />
                <ItemBox
                  itemClass="wh68"
                  itemPic="img/ic-abil-gold-up.png"
                  count="10K%"
                  countOut="10"
                  get={true}
                />
                <ItemBox
                  itemClass="wh68 check"
                  itemPic="img/sh-icon-chest-128.png"
                  count="1"
                  countOut="3"
                />
              </div>
            </div>
          </div>
          <div
            position="bottom"
            topdistance="75"
            tagname="div"
            tooltiptext="Daily quests reset every 24h!"
            className="fapop-prgbar-box-all"
          >
            <ItemBox
              itemClass="wh60"
              itemPic="img/evPopArts/fapop-token-ic.png"
              count={1}
            />
            <div className="fapop-prgbar-box">
              <div className="fapop-prgbar-full" style={{ width: "40%" }}></div>
              <div className="fapop-prgbar-text">Kill 50 minions</div>
              <div className="fapop-prgbar-text-count">0/50</div>
            </div>
            <div className="fapop-noquest-box">
              <div className="fapop-noquest-text">
                Quests completed. You'll get new quests with next event.
              </div>
            </div>
          </div>
          <div className="fapop-rolldice-box-all">
            <div className="fapop-dice-2"></div>
            <div className="fapop-dice-1"></div>
            <div className="color-btn green">
              <div className="color-btn-text">roll dice</div>
              <div className="token-count-box">
                <div className="token-count">
                  10/0<span className="f-token"></span>
                </div>
              </div>
            </div>
            <div className="color-btn green ten">
              <div className="color-btn-text">roll dice</div>
              <div className="token-count-box">
                <div className="token-count">
                  10/0<span className="f-token"></span>
                </div>
              </div>
            </div>
            <div className="fapop-dice-end-1">
              <img src="img/fapop-dice-end1.png" loading="lazy" />
            </div>
            <div className="fapop-dice-end-2">
              <img src="img/fapop-dice-end1.png" loading="lazy" />
            </div>
            <div className="fapop-dice-end-rolled">
              <div className="fapop-dice-rolled-text">you rolled</div>
            </div>
          </div>
          <div className="fapop-info-btn">?</div>
          <div className="fapop-rewardx2">
            <div className="fapop-rewardx2-text">double reward</div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
