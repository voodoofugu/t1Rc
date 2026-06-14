import React from "react";
import nexus from "nexus";

import ItemBox from "../UIComponents/ItemBox";
import elements from "../data/PopResValue";
import { MorphScroll } from "morphing-scroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default function DarkBtlPass() {
  const popupState = nexus.use("popupState");

  return (
    <>
      <ImageBg className="bG framedBg" img />

      <Button
        className="info"
        text="i"
        onClick={() => {
          nexus.acts.handlePopup({
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
          });
        }}
      />

      <FraimedTitle className="cornersTop" text="Dark World Event Pass" />

      <Button
        className="exit"
        text="✖"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      />

      <Button
        className="blue schop"
        text="Buy Currency"
        img="img/ic-red-potion-1.png"
        onClick={() =>
          nexus.acts.handlePopup({
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
              className={`cardAva`}
              itemPic="img/images/hero-all/tithero-00/x2/ava/tithero-ava-1.jpg"
            />
            <ItemBox
              className={`cardAva`}
              itemPic="img/images/superhero/suphero-653/x1/avatar/653sh-ava-1.jpg"
              unique={["sh"]}
            />
            <ItemBox
              className={`cardAva`}
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
          <MorphScroll
            className="btlpass_scroll two"
            size={[1000, 202]}
            objectsSize={[80, 190]}
            progressTrigger={{
              wheel: true,
              progressElement: <ScrollThumb />,
              content: true,
            }}
            edgeGradient={{ color: "#202c38" }}
            render={{ type: "virtual" }}
            direction="x"
          >
            {elements.map((element, index) => (
              <div className="rewardsWrap" key={index}>
                <ItemBox
                  className={`wh68 ${element.className}`}
                  itemPic={element.itemPic}
                  count={element.count}
                  get={element.className === "get" && true}
                  countOut={index + 1}
                />
                <ItemBox
                  className={`wh68 ${element.className}`}
                  itemPic={element.itemPic}
                  count={element.count}
                  get={element.className === "get" && true}
                />
              </div>
            ))}
          </MorphScroll>
        </div>
      </div>
    </>
  );
}
