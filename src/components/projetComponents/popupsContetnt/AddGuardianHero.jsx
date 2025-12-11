import React from "react";
import { nexusTrigger } from "nexus-state";

import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ImageBg from "../UIComponents/ImageBg";
import Button from "../UIComponents/Button";
import ItemBox from "../UIComponents/ItemBox";
import ResCount from "../UIComponents/ResCount";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default function AddGuardianHero({ girlImg }) {
  const [count, setCount] = React.useState(0);

  const allHero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v, i) => (
    <div
      className={`hero-box${v === 2 ? " disabled" : ""} selectable`}
      key={i}
      onClick={(e) => {
        const el = e.target.closest(".hero-box");

        [el, el.querySelector(".itemBox")].map((elem) => {
          elem.classList.toggle("check");
        });

        setCount(
          el.closest(".ms-objects-wrapper").querySelectorAll(".hero-box .check")
            .length * 200
        );
      }}
    >
      <ItemBox
        heroClass="gun"
        itemPic="img/images/hero-all/tithero-515/x1/ava/tithero-ava-1.jpg"
        count={"Shiranui Kaede".split(" ")[1]} // добавлять только имя
      />
      <div className="gd-lvl-pds-box-all">
        <div className="hero-param-box">
          dps<div className="value">3.5OD4</div>
        </div>
      </div>
    </div>
  ));

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
        <div className="popupFrame">
          <div className="frame top"></div>
          <div className="frame bottom"></div>
        </div>

        <ResCount
          className="spirit-count"
          img="img/evPopArts/angel_spirit_1.png"
          value="234"
          plus
          onClick={() => {
            nexusTrigger({
              type: "handlePopup",
              payload: {
                type: "open",
                data: {
                  mpopClass: "m-popup  contentOnly framedPop essence-buy",
                  popCont: "BuyShop",
                  props: {
                    img1: "evPopArts/angel_spirit_1",
                    img2: "evPopArts/angel_spirit_2",
                    img3: "evPopArts/angel_spirit_3",
                    img4: "evPopArts/angel_spirit_4",
                  },
                },
              },
            });
          }}
        />

        <FraimedTitle
          className="corners addHeroTit"
          text="Choose and Add Hero"
        />

        <MorphScroll
          size={[700, 342]}
          objectsSize="firstChild"
          wrapperMargin={[0, 4]}
          gap={14}
          progressTrigger={{ wheel: true, progressElement: <ScrollThumb /> }}
          wrapperAlign="center"
          elementsAlign="center"
          edgeGradient={true}
        >
          {allHero}
        </MorphScroll>

        <Button
          className="btnGold max get-btn"
          text={`${count} - pay`}
          textIcn="img/evPopArts/angel_spirit_1.png"
          onClick={() =>
            nexusTrigger({
              type: "handlePopup",
              payload: { type: "close" },
            })
          }
        />

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
      </div>

      {girlImg && <ImageBg className="girlImg infoGirl" img={girlImg} />}
    </>
  );
}
