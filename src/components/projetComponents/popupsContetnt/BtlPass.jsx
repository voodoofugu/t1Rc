import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";

import ItemBox from "../UIComponents/ItemBox";
import elements from "./PopResValue";

export default function BtlPass({ btlClass }) {
  const popupState = selectors.usePopupState();
  const dispatch = useDispatch();

  const buyShopCont =
    btlClass === "xmas"
      ? [
          "BuyShop",
          {
            img: "ic-tickets-xmas-1",
            img2: "ic-tickets-xmas-2",
            img3: "ic-tickets-xmas-3",
          },
        ]
      : btlClass === "hw"
      ? [
          "BuyShop",
          {
            img: "ic-pumpkins-150-1",
            img2: "ic-pumpkins-150-2",
            img3: "ic-pumpkins-150-3",
          },
        ]
      : btlClass === "bf"
      ? [
          "BuyShop",
          {
            img: "ic-tickets-bf-1",
            img2: "ic-tickets-bf-2",
            img3: "ic-tickets-bf-3",
          },
        ]
      : btlClass === "vl"
      ? [
          "BuyShop",
          {
            img: "ic-tickets-vl-1",
            img2: "ic-tickets-vl-2",
            img3: "ic-tickets-vl-3",
          },
        ]
      : btlClass === "spring"
      ? [
          "BuyShop",
          {
            img: "ic-march-flower-pink-1",
            img2: "ic-march-flower-pink-2",
            img3: "ic-march-flower-pink-3",
          },
        ]
      : btlClass === "autumn"
      ? [
          "BuyShop",
          {
            img: "ic-autumn-leaf-1",
            img2: "ic-autumn-leaf-2",
            img3: "ic-autumn-leaf-3",
          },
        ]
      : null;

  return (
    <>
      <div className="btlpass-box-all">
        <div className="btlpass-collect-box-all">
          <div
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
          </div>
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
                  src="img/unknown-hero-ava.jpg"
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
                  <div className="btlpass-level-level-num">{index + 1}</div>
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
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="btlpass-girl">
        {btlClass === "xmas" ? (
          <img src="img/break-girl901.png" loading="lazy" />
        ) : btlClass === "hw" ? (
          <img src="img/break-girl331.png" loading="lazy" />
        ) : btlClass === "bf" ? (
          <img src="img/break-girl761-event-pass.png" loading="lazy" />
        ) : btlClass === "vl" ? (
          <img src="img/break-girl798-vd.png" loading="lazy" />
        ) : btlClass === "spring" ? (
          <img src="img/break-girl842.png" loading="lazy" />
        ) : btlClass === "autumn" ? (
          <img src="img/break-girl848.png" loading="lazy" />
        ) : null}
      </div>
      <div className="btlpass-btn-box">
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
      </div>
    </>
  );
}
