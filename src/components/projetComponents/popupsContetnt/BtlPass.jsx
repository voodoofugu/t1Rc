import { useNexus, nexusDispatch } from "nexus-state";

import ItemBox from "../UIComponents/ItemBox";
import elements from "../data/PopResValue";
import Scroll from "../../../../morphing-scroll/src/MorphingScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default function BtlPass({ btlClass }) {
  const popupState = useNexus("popupState");

  const edgeGradient =
    btlClass === "autumn"
      ? "#b01a6c"
      : btlClass === "xmas"
      ? "#288cbe"
      : "#202c38";

  const girlImg =
    btlClass === "xmas"
      ? "images/hero-all/tithero-430/icons/break-girl"
      : btlClass === "hw"
      ? "images/hero-all/tithero-429/icons/break-girl"
      : btlClass === "bf"
      ? "images/hero-all/tithero-429/icons/break-girl"
      : btlClass === "vl"
      ? "images/hero-all/tithero-430/icons/break-girl"
      : btlClass === "spring"
      ? "images/hero-all/tithero-430/icons/break-girl"
      : btlClass === "summer"
      ? "images/hero-all/tithero-430/icons/break-girl"
      : btlClass === "autumn"
      ? "images/hero-all/tithero-440/icons/break-girl"
      : btlClass === "sexpedition"
      ? "images/hero-all/tithero-423/icons/break-girl4"
      : null;

  const buyShopCont =
    btlClass === "xmas"
      ? [
          "BuyShop",
          {
            img1: "evPopArts/ic-tickets-xmas-1",
            img2: "evPopArts/ic-tickets-xmas-2",
            img3: "evPopArts/ic-tickets-xmas-3",
            img4: "evPopArts/ic-tickets-xmas-4",
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
      : btlClass === "sexpedition"
      ? [
          "BuyShop",
          {
            img1: "evPopArts/gem_icn1",
            img2: "evPopArts/gem_icn2",
            img3: "evPopArts/gem_icn3",
            img4: "evPopArts/gem_icn4",
          },
        ]
      : null;

  return (
    <>
      <ImageBg className="bG framedBg" img />

      <Button
        className="info"
        text="i"
        onClick={() => {
          nexusDispatch({
            type: "POPUP_OPEN",
            payload: {
              mpopClass: "m-popup contentOnly framedPop",
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

      <FraimedTitle className="cornersTop" text="Event Pass" />

      <Button
        className="exit"
        text="✖"
        onClick={() => popupState.popClose(nexusDispatch)}
      />

      <Button
        className="lightGreen schop"
        text="Buy Currency"
        img
        onClick={() =>
          popupState.popOpen(nexusDispatch, {
            mpopClass: "m-popup essence-buy contentOnly framedPop",
            popCont: buyShopCont,
          })
        }
      />

      <div className="btlpass-box-all">
        <div className="btlpass-collect-box-all">
          <div className="btlpass-collect-box">
            <div className="btlpass-collect-box-text">
              Collect 0/25.2K
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
          </div>
          <ProgressBar
            className="progressBarOfSympathy"
            progressSize={[600, 30]}
            currentProgress={42}
            maxProgress={100}
            text="you have"
            textIcn
            textWithProgress="max"
          />
        </div>
        <div className="btlpass-level-box-all">
          <div className="btlpass-sim-el-box">
            <div className="btlpass-level">level</div>
            <div className="btlpass-elite">rewards</div>
            <Button className="btnGold max" text="get all" />
          </div>
          <Scroll
            className="btlpass_scroll"
            scrollXY={[1000, 128]}
            objectXY={[80, 112]}
            progressTrigger={["wheel", "progressElement", "content"]}
            thumbElement={<ScrollThumb />}
            edgeGradient={{ color: edgeGradient }}
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
                onClick={() => {
                  element.itemClass === "get" &&
                    nexusDispatch({
                      type: "NOTIF_VIEW",
                      payload: {
                        view: true,
                        img: element.itemPic,
                        text: `You got ${element.count}`,
                      },
                    });
                }}
              />
            ))}
          </Scroll>
        </div>
      </div>

      <ImageBg className="girlImg btlpass-girl" img={`img/${girlImg}.png`} />
    </>
  );
}
