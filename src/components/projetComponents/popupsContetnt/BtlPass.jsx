import { useNexus, nexusTrigger, nexusUpdate } from "nexus-state";

import ItemBox from "../UIComponents/ItemBox";
import elements from "../data/PopResValue";
import MorphScroll from "../../../../morphing-scroll/src/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default function BtlPass({ event }) {
  // const edgeGradient =
  //   event === "autumn"
  //     ? "#b01a6c"
  //     : event === "xmas"
  //     ? "#288cbe"
  //     : event === "vl"
  //     ? "#c32e76"
  //     : "#202c38";

  const girlImg =
    event === "xmas"
      ? "images/hero-all/tithero-449/icons/break-girl4"
      : event === "hw"
      ? "images/hero-all/tithero-429/icons/break-girl"
      : event === "bf"
      ? "images/hero-all/tithero-429/icons/break-girl"
      : event === "vl"
      ? "images/superhero/suphero-958/icons/break-girl4"
      : event === "spring"
      ? "images/hero-all/tithero-430/icons/break-girl"
      : event === "summer"
      ? "images/hero-all/tithero-430/icons/break-girl"
      : event === "autumn"
      ? "images/hero-all/tithero-440/icons/break-girl"
      : event === "sexpedition"
      ? "images/hero-all/tithero-423/icons/break-girl4"
      : null;

  const icon =
    event === "xmas"
      ? "ic-ny-sneg-4"
      : event === "hw"
      ? "evPopArts/bat_icn"
      : event === "bf"
      ? "ic-tickets-bf-1"
      : event === "vl"
      ? "evPopArts/ic-shoe"
      : event === "spring"
      ? "ic-march-flower-dark-blue"
      : event === "summer"
      ? "evPopArts/butterfly"
      : event === "autumn"
      ? "ic-autumn-leaf"
      : event === "sexpedition"
      ? "evPopArts/gem_icn"
      : null;

  const buyShopCont =
    event === "xmas"
      ? [
          "BuyShop",
          {
            img1: "ic-ny-sneg-4",
            img2: "ic-ny-sneg-4",
            img3: "ic-ny-sneg-4",
          },
        ]
      : event === "hw"
      ? [
          "BuyShop",
          {
            img1: "evPopArts/bat_icn_1",
            img2: "evPopArts/bat_icn_2",
            img3: "evPopArts/bat_icn_3",
            img4: "evPopArts/bat_icn_4",
          },
        ]
      : event === "bf"
      ? [
          "BuyShop",
          {
            img1: "ic-tickets-bf-1",
            img2: "ic-tickets-bf-2",
            img3: "ic-tickets-bf-3",
          },
        ]
      : event === "vl"
      ? [
          "BuyShop",
          {
            img1: "evPopArts/ic-shoe",
            img2: "evPopArts/ic-shoe",
            img3: "evPopArts/ic-shoe",
          },
        ]
      : event === "spring"
      ? [
          "BuyShop",
          {
            img1: "ic-march-flower-pink-1",
            img2: "ic-march-flower-pink-2",
            img3: "ic-march-flower-pink-3",
          },
        ]
      : event === "summer"
      ? [
          "BuyShop",
          {
            img1: "evPopArts/butterfly_1",
            img2: "evPopArts/butterfly_2",
            img3: "evPopArts/butterfly_3",
          },
        ]
      : event === "sexpedition"
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
          nexusTrigger({
            type: "handlePopup",
            payload: {
              type: "open",
              data: {
                mpopClass: "m-popup contentOnly framedPop",
                popCont: "InfoPopFramed",
                props: {
                  inner:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
                  girlImg: "img/break-girls/break-girl915.png",
                },
              },
            },
          });
        }}
      />

      <FraimedTitle className="cornersTop" text="Event Pass" />

      <Button
        className="exit"
        text="✖"
        onClick={() =>
          nexusTrigger({
            type: "handlePopup",
            payload: { type: "close" },
          })
        }
      />

      <Button
        className="lightGreen schop"
        text="Buy Currency"
        img={`img/${icon}.png`}
        onClick={() =>
          buyShopCont &&
          nexusTrigger({
            type: "handlePopup",
            payload: {
              type: "open",
              data: {
                mpopClass: "m-popup essence-buy contentOnly framedPop",
                popCont: buyShopCont[0],
                props: buyShopCont[1],
              },
            },
          })
        }
      />

      <div className="btlpass-box-all">
        <div className="btlpass-collect-box-all">
          <div className="btlpass-collect-box">
            <div className="btlpass-collect-box-text">
              Collect 0/25.2K
              <img className="ic-event" src={`img/${icon}.png`}></img>
              to get these girls!
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
            textIcn={`img/${icon}.png`}
            textWithProgress="max"
          />
        </div>
        <div className="btlpass-level-box-all">
          <div className="btlpass-sim-el-box">
            <div className="btlpass-level">level</div>
            <div className="btlpass-elite">rewards</div>
            <Button className="btnGold max" text="get all" />
          </div>
          <MorphScroll
            className="btlpass_scroll"
            size={[1000, 128]}
            objectsSize={[80, 112]}
            progressTrigger={{
              wheel: true,
              progressElement: <ScrollThumb />,
              content: true,
            }}
            edgeGradient
            render={{ type: "virtual" }}
            direction="x"
            // contentAlign={["center", "center"]}
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
                    nexusUpdate({
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

      {girlImg && (
        <ImageBg className="girlImg btlpass-girl" img={`img/${girlImg}.png`} />
      )}
    </>
  );
}
