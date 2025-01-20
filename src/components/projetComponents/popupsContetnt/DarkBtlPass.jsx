import React from "react";
import { nexusTrigger, useNexus } from "nexus-state";

import ItemBox from "../UIComponents/ItemBox";
import elements from "../data/PopResValue";
import Scroll from "../../../../morphing-scroll/src/MorphingScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default function DarkBtlPass() {
  const popupState = useNexus("popupState");

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
                popTit: "",
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

      <FraimedTitle className="cornersTop" text="Dark World Event Pass" />

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
        className="blue schop"
        text="Buy Currency"
        img="img/ic-red-potion-1.png"
        onClick={() =>
          nexusTrigger({
            type: "handlePopup",
            payload: {
              type: "open",
              data: {
                mpopClass: "m-popup essence-buy contentOnly framedPop",
                popCont: "BuyShop",
                props: {
                  img1: "ic-red-potion-1",
                  img2: "ic-red-potion-2",
                  img3: "ic-red-potion-3",
                  img4: "ic-red-potion-4",
                },
              },
            },
          })
        }
      />

      <ImageBg
        className="girlImg btlpass-girl"
        img="img/break-girls/break-girl915.png"
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
            textIcn="img/ic-red-potion-40.png"
            textWithMaxProgress
          />
        </div>
        <div className="btlpass-level-box-all">
          <div className="btlpass-sim-el-box">
            <div className="btlpass-simple">simple</div>
            <div className="btlpass-level">level</div>
            <div className="btlpass-elite">
              elite
              <Button
                className="btnGold max"
                text="get elite<p>$19.99"
                discountSticker="-20%"
              />
            </div>
            <Button className="btnGold max" text="get all" />
          </div>
          <Scroll
            className="btlpass_scroll two"
            size={[1000, 202]}
            objectsSize={[80, 190]}
            progressTrigger={["wheel", "progressElement", "content"]}
            progressElement={<ScrollThumb />}
            edgeGradient={{ color: "#202c38" }}
            infiniteScroll
            xDirection
          >
            {elements.map((element, index) => (
              <div className="rewardsWrap" key={index}>
                <ItemBox
                  itemClass={`wh68 ${element.itemClass}`}
                  itemPic={element.itemPic}
                  count={element.count}
                  get={element.itemClass === "get" && true}
                  countOut={index + 1}
                />
                <ItemBox
                  itemClass={`wh68 ${element.itemClass}`}
                  itemPic={element.itemPic}
                  count={element.count}
                  get={element.itemClass === "get" && true}
                />
              </div>
            ))}
          </Scroll>
        </div>
      </div>
    </>
  );
}
