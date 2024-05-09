import { memo } from "react";

import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";

export default memo(function ChestsShop() {
  const popupState = selectors.usePopupState();
  const dispatch = useDispatch();

  return (
    <div className="content">
      <div className="content-header">
        <div
          className="trophy-res-box diamonds"
          onClick={() =>
            popupState.popOpen(dispatch, {
              mpopClass: "m-popup diamond-buy",
              popTit: "Buy Diamonds!",
              popCont: ["DiamondBuy"],
            })
          }
        >
          <div className="trophy-value">1000</div>
          <div className="trophy-value-btn-add"></div>
        </div>
        <div
          className="trophy-res-box oil"
          onClick={() =>
            popupState.popOpen(dispatch, {
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
            })
          }
        >
          <div className="trophy-value">1000</div>
          <div className="trophy-value-btn-add"></div>
        </div>
        <div
          className="trophy-res-box spirit"
          onClick={() =>
            popupState.popOpen(dispatch, {
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
            })
          }
        >
          <div className="trophy-value">1000</div>
          <div className="trophy-value-btn-add"></div>
        </div>
        <div
          className="color-btn info"
          onClick={() =>
            popupState.popOpen(dispatch, {
              mpopClass: "m-popup info-pop",
              popTit: "Chest Shop Info",
              popCont: [
                "InfoPop",
                {
                  text: "HTML_CHEST",
                  btnText1: "Close",
                },
              ],
            })
          }
        >
          i
        </div>
      </div>
      <div className="item-box">
        <div className="store-item-box">
          <div className="store-name">Boss Chest</div>
          <div className="item">
            <img src="img/change-sun1.png" loading="lazy" />
            <div className="reward-value">100</div>
          </div>
          <div className="chest-currency"></div>
          <div className="color-btn gold">
            <div
              className="color-btn-text"
              onClick={() =>
                popupState.popOpen(dispatch, {
                  mpopClass: "m-popup openchest",
                  popTit: "open the chest",
                  popCont: ["OpenChest"],
                })
              }
            >
              Open
            </div>
          </div>
        </div>
        <div className="store-item-box orange">
          <div className="store-name">Superhero Chest</div>
          <div className="item">
            <img
              className="winner-prize"
              src="img/sh-icon-chest-128.png"
              loading="lazy"
            />
            <div className="reward-value">100</div>
          </div>
          <div className="chest-currency"></div>
          <div className="color-btn gold">
            <div
              className="color-btn-text"
              onClick={() =>
                popupState.popOpen(dispatch, {
                  mpopClass: "m-popup sh2-openchest2",
                  popTit: "open the chest",
                  popCont: ["Sh2Openchest", { shClass: "sh2" }],
                })
              }
            >
              Open
            </div>
          </div>
        </div>
        <div className="store-item-box blue">
          <div className="store-name">Superhero Chest</div>
          <div className="item">
            <img src="img/sh-icon-chest-dark.png" loading="lazy" />
            <div className="reward-value">100</div>
          </div>
          <div className="chest-currency"></div>
          <div className="color-btn gold">
            <div
              className="color-btn-text"
              onClick={() =>
                popupState.popOpen(dispatch, {
                  mpopClass: "m-popup sh2-openchest2",
                  popTit: "open the chest",
                  popCont: ["Sh2Openchest", { shClass: "sh2", dark: true }],
                })
              }
            >
              Open
            </div>
          </div>
        </div>
        <div className="store-item-box gold">
          <div className="store-name">Angel Chest</div>
          <div className="item">
            <img src="img/darkworld-chest-agels.png" loading="lazy" />
            <div className="reward-value">100</div>
          </div>
          <div className="chest-currency"></div>
          <div className="color-btn gold">
            <div className="color-btn-text">Open</div>
          </div>
        </div>
      </div>
    </div>
  );
});
