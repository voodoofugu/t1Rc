import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";

import ItemBox from "../UIComponents/ItemBox";
import elements from "./PopResValue";
import Scroll from "../../../../morphing-scroll/src/MorphingScroll";
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
            img1: "evPopArts/bat_icn_1",
            img2: "evPopArts/bat_icn_2",
            img3: "evPopArts/bat_icn_3",
            img4: "evPopArts/bat_icn_4",
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
      <div className="pop_bg framedPop">
        <img src="img/evPopArts/halloweenBg.jpg" loading="lazy" alt="bG" />
      </div>

      <Button
        className="info"
        text="i"
        onClick={() => {
          dispatch({
            type: "POPUP_OPEN",
            payload: {
              mpopClass: "m-popup contentOnly framedPop",
              popTit: "",
              popCont: ["InfoPopFramed"],
              props: {
                inner:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
                girlImg: "img/breakGirls/break-girl915.png",
              },
            },
          });
        }}
      />

      <Button
        className="exit"
        text="✖"
        onClick={() => popupState.popClose(dispatch)}
      />

      <Button
        className="blue schop"
        text="Buy Currency"
        img
        onClick={() =>
          popupState.popOpen(dispatch, {
            mpopClass: "m-popup essence-buy contentOnly framedPop",
            // popTit: "Buy Event Tokens",
            popCont: buyShopCont,
          })
        }
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
            <ItemBox
              itemClass={`cardAva`}
              itemPic="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
            />
            <ItemBox
              itemClass={`cardAva`}
              itemPic="img/images/superhero/suphero-653/x1/avatar/653sh-ava-1.jpg"
              unique={["sh"]}
            />
            <ItemBox
              itemClass={`cardAva`}
              itemPic="img/images/superhero/suphero-656/x1/avatar/656sh-ava-1.jpg"
              unique={["dh", "dark"]}
            />
            {/* <div className="hero-box">
              <div className="hero-avatar-box">
                <img
                  className="hero-avatar"
                  src="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
                  loading="lazy"
                />
              </div>
            </div> */}
          </div>
          {/* <div className="prgball-box">
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
          </div> */}
          <ProgressBar
            className="progressBarOfSympathy"
            progressSize={[600, 30]}
            currentProgress={42}
            maxProgress={100}
            text="you have"
            textIcn="img/evPopArts/bat_icn.png"
            textWithProgress="max"
          />
        </div>
        <div className="btlpass-level-box-all">
          <div className="btlpass-sim-el-box">
            <div className="btlpass-level">level</div>
            <div className="btlpass-elite">rewards</div>
            <Button className="btnGold max" text="get all" />
          </div>
          {/* <div className="btlpass-level-simple-box-scroll indiana-scroll-container">
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
          </div> */}
          <Scroll
            className="btlpass_scroll"
            scrollXY={[1000, 124]}
            objectXY={[80, 112]}
            progressTrigger={["wheel", "progressElement", "content"]}
            thumbElement={<ScrollThumb />}
            edgeGradient={{ color: "#202c38" }}
            progressBarSize={8}
            infiniteScroll
            xDirection
          >
            {elements.map((element, index) => (
              <ItemBox
                itemClass={`wh68 ${element.itemClass}`}
                itemPic={element.itemPic}
                count={element.count}
                get={element.itemClass === "get" && true}
                key={index}
                countOut={index + 1}
              />
            ))}
          </Scroll>
        </div>
      </div>
      <div className="btlpass-girl">
        {btlClass === "xmas" ? (
          <img src="img/breakGirls/break-girl901.png" loading="lazy" />
        ) : btlClass === "hw" ? (
          <img
            src="img/images/hero-all/tithero-429/icons/break-girl.png"
            loading="lazy"
          />
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
    </>
  );
}
