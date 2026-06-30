import nexus from "nexus";

import ItemBox from "../UIComponents/ItemBox";
import elements from "../data/PopResValue";
import { MorphScroll } from "morphing-scroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default function BtlPass({ event }) {
  const girlImg =
    event === "xmas"
      ? "images/hero-all/tithero-675/icons/break-girl4"
      : event === "hw"
        ? "images/hero-all/tithero-616/icons/break-girl"
        : event === "bf"
          ? "images/hero-all/tithero-429/icons/break-girl"
          : event === "vl"
            ? "images/hero-all/tithero-713/icons/break-girl"
            : event === "spring"
              ? "images/hero-all/tithero-430/icons/break-girl"
              : event === "summer"
                ? "images/hero-all/tithero-794/icons/break-girl4"
                : event === "autumn"
                  ? "images/hero-all/tithero-639/icons/break-girl"
                  : event === "sexpedition"
                    ? "images/hero-all/tithero-423/icons/break-girl4"
                    : null;

  const imgBg =
    event === "xmas"
      ? "img/bGs/roomBg1.jpg"
      : event === "hw"
        ? "img/bGs/halloweenBg2.jpg"
        : event === "bf"
          ? "img/bGs/v2-bf-pop-bg.jpg"
          : event === "vl"
            ? "img/bGs/racingGroundBg.jpg"
            : event === "spring"
              ? "img/bGs/march-pop-bg.jpg"
              : event === "summer"
                ? "img/bGs/swimmingPoolBg02.jpg"
                : event === "autumn"
                  ? "img/bGs/cityBg.jpg"
                  : event === "sexpedition"
                    ? "img/bGs/sexpeditionBg.jpg"
                    : null;

  const icon =
    event === "xmas"
      ? "evPopArts/heartEars_1"
      : event === "hw"
        ? "evPopArts/pumpkin1_icn"
        : event === "bf"
          ? "ic-tickets-bf-1"
          : event === "vl"
            ? "evPopArts/ic-bounty_heat-01"
            : event === "spring"
              ? "ic-march-flower-dark-blue"
              : event === "summer"
                ? "evPopArts/ic-bounty_heat-01"
                : event === "autumn"
                  ? "evPopArts/lipsCoin_1"
                  : event === "sexpedition"
                    ? "evPopArts/gem_icn"
                    : null;

  const buyShopCont =
    event === "xmas"
      ? [
          "BuyShop",
          {
            img1: "evPopArts/heartEars_1",
            img2: "evPopArts/heartEars_2",
            img3: "evPopArts/heartEars_3",
          },
        ]
      : event === "hw"
        ? [
            "BuyShop",
            {
              img1: "evPopArts/pumpkin1_icn_1",
              img2: "evPopArts/pumpkin1_icn_2",
              img3: "evPopArts/pumpkin1_icn_3",
              img4: "evPopArts/pumpkin1_icn_4",
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
                  img1: "evPopArts/ic-bounty_heat-01",
                  img2: "evPopArts/ic-bounty_heat-02",
                  img3: "evPopArts/ic-bounty_heat-03",
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
                      img1: "evPopArts/ic-bounty_heat-01",
                      img2: "evPopArts/ic-bounty_heat-02",
                      img3: "evPopArts/ic-bounty_heat-03",
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
                  : event === "autumn"
                    ? [
                        "BuyShop",
                        {
                          img1: "evPopArts/lipsCoin_1",
                          img2: "evPopArts/lipsCoin_2",
                          img3: "evPopArts/lipsCoin_3",
                        },
                      ]
                    : null;

  return (
    <>
      <ImageBg className="bG framedBg" img={imgBg} />

      <Button
        className="info"
        text="i"
        onClick={() => {
          nexus.acts.handlePopup({
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
          });
        }}
      />

      <FraimedTitle className="cornersTop" text={`${event} pass`} />

      <Button
        className="exit"
        text="✖"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      />

      <Button
        className="blue schop"
        text="Buy Currency"
        img={`img/${icon}.png`}
        onClick={() =>
          buyShopCont &&
          nexus.acts.handlePopup({
            type: "open",
            data: {
              mpopClass: "m-popup essence-buy contentOnly framedPop",
              popCont: buyShopCont[0],
              props: buyShopCont[1],
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
              className={`cardAva`}
              itemPic="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
            />
            <ItemBox
              className={`cardAva`}
              itemPic="img/images/superhero/suphero-653/x1/avatar/653sh-ava-1.jpg"
              cardType="s"
            />
            <ItemBox
              className={`cardAva`}
              itemPic="img/ic-vl-heart-red.png"
              count="100"
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
          >
            {elements.map((element, index) => (
              <ItemBox
                className={`wh68 ${element.className}`}
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

      {girlImg && (
        <ImageBg className="girlImg btlpass-girl" img={`img/${girlImg}.png`} />
      )}
    </>
  );
}
