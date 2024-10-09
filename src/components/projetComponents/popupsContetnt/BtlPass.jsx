import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";

import ItemBox from "../UIComponents/ItemBox";
import elements from "./PopResValue";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";

export default function BtlPass({ btlClass }) {
  const popupState = selectors.usePopupState();
  const dispatch = useDispatch();

  const buyShopCont =
    btlClass === "xmas"
      ? [
          "BuyShop",
          {
            img1: "ic-tickets-xmas-1",
            img2: "ic-tickets-xmas-2",
            img3: "ic-tickets-xmas-3",
          },
        ]
      : btlClass === "hw"
      ? [
          "BuyShop",
          {
            img1: "ic-pumpkins-150-1",
            img2: "ic-pumpkins-150-2",
            img3: "ic-pumpkins-150-3",
          },
        ]
      : btlClass === "bf"
      ? [
          "BuyShop",
          {
            img1: "ic-tickets-bf-1",
            img2: "ic-tickets-bf-2",
            img3: "ic-tickets-bf-3",
          },
        ]
      : btlClass === "vl"
      ? [
          "BuyShop",
          {
            img1: "ic-tickets-vl-1",
            img2: "ic-tickets-vl-2",
            img3: "ic-tickets-vl-3",
          },
        ]
      : btlClass === "spring"
      ? [
          "BuyShop",
          {
            img1: "ic-march-flower-pink-1",
            img2: "ic-march-flower-pink-2",
            img3: "ic-march-flower-pink-3",
          },
        ]
      : btlClass === "summer"
      ? [
          "BuyShop",
          {
            img1: "evPopArts/butterfly_1",
            img2: "evPopArts/butterfly_2",
            img3: "evPopArts/butterfly_3",
          },
        ]
      : btlClass === "autumn"
      ? [
          "BuyShop",
          {
            img1: "ic-autumn-leaf-1",
            img2: "ic-autumn-leaf-2",
            img3: "ic-autumn-leaf-3",
          },
        ]
      : null;

  return (
    <>
      <Button
        className="info"
        text="i"
        onClick={() =>
          popupState.popOpen(dispatch, {
            mpopClass: "m-popup fapop-rules btlpass-info",
            popTit: "правила",
            popCont: ["FapopRules"],
          })
        }
      />

      <Button
        className="exit"
        text="✖"
        onClick={() => popupState.popClose(dispatch)}
      />

      <div className="btlpass-box-all">
        <div className="btlpass-collect-box-all">
          {/* <div
            className="bp-info-btn"
            onClick={() =>
              popupState.popOpen(dispatch, {
                mpopClass: "m-popup fapop-rules btlpass-info",
                popTit: "правила",
                popCont: ["FapopRules"],
              })
            }
          >
            ?
          </div> */}
          <div className="btlpass-collect-box">
            <div className="btlpass-collect-box-text">
              Get 0/25.2K
              <span className="ic-event"></span> to get these girls!
            </div>
          </div>
          <div className="squad-holder">
            <div className="hero-box">
              <div className="hero-avatar-box">
                <img
                  className="hero-avatar"
                  src="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="hero-box">
              <div className="hero-avatar-box">
                <img
                  className="hero-avatar"
                  src="img/images/superhero/suphero-653/x1/avatar/653sh-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="hero-box">
              <div className="hero-avatar-box">
                <img
                  className="hero-avatar"
                  src="img/images/superhero/suphero-656/x1/avatar/656sh-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="prgball-box">
            <div className="prgall-prom">
              <div
                className="prg-all-bar"
                style={{
                  width: "20%",
                }}
              ></div>
            </div>
            <div className="prg-all-text">
              <span>
                you have 0/28
                <span className="ic-event"></span>
                currency
              </span>
            </div>
          </div>
        </div>
        <div className="btlpass-level-box-all">
          <div className="btlpass-sim-el-box">
            <div className="btlpass-level">level</div>
            <div className="btlpass-elite">rewards</div>
          </div>
          <div className="btlpass-level-simple-box-scroll indiana-scroll-container">
            <div className="btlpass-level-level">
              <div className="btlpass-level-level-prg"></div>
              <div className="btlpass-level-level-num-box">
                {elements.map((element, index) => (
                  <div key={index} className="btlpass-level-level-num">
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="btlpass-level-elite">
              {elements.map((element, index) => (
                <ItemBox
                  itemClass={`wh60 ${element.itemClass}`}
                  itemPic={element.itemPic}
                  count={element.count}
                  get={element.itemClass === "get" && true}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="btlpass-girl">
        {btlClass === "xmas" ? (
          <img src="img/breakGirls/break-girl901.png" loading="lazy" />
        ) : btlClass === "hw" ? (
          <img src="img/breakGirls/break-girl915.png" loading="lazy" />
        ) : btlClass === "bf" ? (
          <img
            src="img/breakGirls/break-girl761-event-pass.png"
            loading="lazy"
          />
        ) : btlClass === "vl" ? (
          <img src="img/breakGirls/break-girl798-vd.png" loading="lazy" />
        ) : btlClass === "spring" ? (
          <img src="img/breakGirls/break-girl842.png" loading="lazy" />
        ) : btlClass === "autumn" ? (
          <img src="img/breakGirls/break-girl890.png" loading="lazy" />
        ) : btlClass === "summer" ? (
          <img src="img/breakGirls/break-girl955.png" loading="lazy" />
        ) : null}
      </div>
      {/* <div className="btlpass-btn-box">
        <div className="color-btn">
          <div
            className="color-btn-text"
            onClick={() => popupState.popClose(dispatch)}
          >
            close
          </div>
        </div>
        <div className="color-btn" style={{ left: "552px" }}>
          <div
            className="color-btn-text"
            onClick={() =>
              popupState.popOpen(dispatch, {
                mpopClass: "m-popup essence-buy",
                popTit: "Buy Event Tokens",
                popCont: buyShopCont,
              })
            }
          >
            Buy Currency
          </div>
        </div>

      </div> */}
      {/* <Button onClick={() => popupState.popClose(dispatch)} text="close" /> */}
      <Button
        className="orange schop"
        text="Buy Currency"
        img
        onClick={() =>
          popupState.popOpen(dispatch, {
            mpopClass: "m-popup essence-buy",
            popTit: "Buy Event Tokens",
            popCont: buyShopCont,
          })
        }
      />
    </>
  );
}
