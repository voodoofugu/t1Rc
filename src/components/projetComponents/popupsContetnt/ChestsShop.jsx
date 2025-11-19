import { memo } from "react";
import { nexusTrigger, useNexus } from "nexus-state";

import ItemBox from "../UIComponents/ItemBox";

export default memo(function ChestsShop() {
  const popupState = useNexus("popupState");

  return (
    <>
      <div
        className="closeBG"
        onClick={() =>
          nexusTrigger({
            type: "handlePopup",
            payload: { type: "close" },
          })
        }
      ></div>

      <div className="content">
        <div className="content-header">
          <div
            className="trophy-res-box diamonds"
            onClick={() =>
              nexusTrigger({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup diamond-buy",
                    popTit: "Buy Diamonds!",
                    popCont: "DiamondBuy",
                  },
                },
              })
            }
          >
            <div className="trophy-value">1000</div>
            <div className="trophy-value-btn-add"></div>
          </div>
          <div
            className="trophy-res-box oil"
            onClick={() =>
              nexusTrigger({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup essence-buy",
                    popTit: "Buy Oil",
                    popCont: [
                      "BuyShop",
                      {
                        img1: "evPopArts/potion_black_1",
                        img2: "evPopArts/potion_black_2",
                        img3: "evPopArts/potion_black_3",
                        img4: "evPopArts/potion_black_4",
                      },
                    ],
                  },
                },
              })
            }
          >
            <div className="trophy-value">1000</div>
            <div className="trophy-value-btn-add"></div>
          </div>
          <div
            className="trophy-res-box spirit"
            onClick={() =>
              nexusTrigger({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup essence-buy",
                    popTit: "Buy Angel Spirit",
                    popCont: [
                      "BuyShop",
                      {
                        img1: "evPopArts/angel_spirit_1",
                        img2: "evPopArts/angel_spirit_2",
                        img3: "evPopArts/angel_spirit_3",
                        img4: "evPopArts/angel_spirit_4",
                      },
                    ],
                  },
                },
              })
            }
          >
            <div className="trophy-value">1000</div>
            <div className="trophy-value-btn-add"></div>
          </div>
          <div
            className="color-btn info"
            onClick={() =>
              nexusTrigger({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup info-pop",
                    popTit: "Chest Shop Info",
                    popCont: [
                      "InfoPop",
                      {
                        text: "HTML_CHEST",
                        btnText1: "Close",
                      },
                    ],
                  },
                },
              })
            }
          >
            i
          </div>
        </div>
        <div className="item-box">
          <div className="store-item-box">
            <div className="store-name">Boss Chest</div>
            <ItemBox
              className="wh94"
              itemPic="img/change-sun1.png"
              count={100}
            />
            <div className="chest-currency"></div>
            <div className="color-btn gold">
              <div
                className="color-btn-text"
                onClick={() =>
                  nexusTrigger({
                    type: "handlePopup",
                    payload: {
                      type: "open",
                      data: {
                        mpopClass: "m-popup openchest",
                        popTit: "open the chest",
                        popCont: "OpenChest",
                      },
                    },
                  })
                }
              >
                Open
              </div>
            </div>
          </div>
          <div className="store-item-box orange">
            <div className="store-name">Superhero Chest</div>
            <ItemBox
              className="wh94"
              itemPic="img/sh-icon-chest-128.png"
              count={100}
            />
            <div className="chest-currency"></div>
            <div className="color-btn gold">
              <div
                className="color-btn-text"
                onClick={() =>
                  nexusTrigger({
                    type: "handlePopup",
                    payload: {
                      type: "open",
                      data: {
                        mpopClass: "m-popup sh2-openchest2",
                        popTit: "open the chest",
                        popCont: ["Sh2Openchest", { shClass: "sh2" }],
                      },
                    },
                  })
                }
              >
                Open
              </div>
            </div>
          </div>
          <div className="store-item-box blue">
            <div className="store-name">Superhero Chest</div>
            <ItemBox
              className="wh94"
              itemPic="img/sh-icon-chest-dark.png"
              count={100}
            />
            <div className="chest-currency"></div>
            <div className="color-btn gold">
              <div
                className="color-btn-text"
                onClick={() =>
                  nexusTrigger({
                    type: "handlePopup",
                    payload: {
                      type: "open",
                      data: {
                        mpopClass: "m-popup sh2-openchest2",
                        popTit: "open the chest",
                        popCont: [
                          "Sh2Openchest",
                          { shClass: "sh2", dark: true },
                        ],
                      },
                    },
                  })
                }
              >
                Open
              </div>
            </div>
          </div>
          <div className="store-item-box gold">
            <div className="store-name">Angel Chest</div>
            <ItemBox className="wh94" itemPic="img/darkworld-chest-agels.png" />
            <div className="chest-currency"></div>
            <div className="color-btn gold">
              <div className="color-btn-text">Open</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
