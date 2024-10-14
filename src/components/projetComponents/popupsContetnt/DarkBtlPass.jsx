import React from "react";
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

export default function DarkBtlPass() {
  const popupState = selectors.usePopupState();
  const dispatch = useDispatch();

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

      <Button
        className="blue schop"
        text="Buy Currency"
        img="img/ic-red-potion-1.png"
      />

      <div className="btlpass-girl">
        <img src="img/breakGirls/break-girl915.png" loading="lazy" />
      </div>

      <div className="btlpass-box-all">
        {/* <div className="btlpass-collect-box-all">
          <div className="btlpass-collect-box">
            <div className="color-btn bay-res">
              <div className="color-btn-text">Buy Red Potion</div>
            </div>
            <div className="btlpass-collect-box-text">
              Or collect
              <div className="btlpass-collect-value">0/25.2K</div>
              <span className="ic-event"></span> to get these girls!
            </div>
          </div>
          <div className="hero-box-title">
            GET the dark heroines from the NEW DARKWORLD
          </div>
          <div className="squad-holder">
            <div className="hero-box">
              <div className="hero-avatar-box">
                <div className="hero-avatar-wrap">
                  <img
                    className="hero-avatar"
                    src="img/images/hero-all/tithero-364/x1/tithero-364-1.jpg"
                    loading="lazy"
                  />
                </div>
                <div className="sh2-icon-forgirl">
                  <img src="img/cur2-ranger.png" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="hero-box">
              <div className="hero-avatar-box">
                <div className="hero-avatar-wrap">
                  <img
                    className="hero-avatar"
                    src="img/images/hero-all/tithero-363/x1/tithero-363-1.jpg"
                    loading="lazy"
                  />
                </div>
                <div className="sh2-icon-forgirl">
                  <img src="img/cur2-ranger.png" loading="lazy" />
                </div>
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
                red potion
              </span>
            </div>
          </div>
        </div> */}
        <div className="btlpass-collect-box-all">
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
          {/* <div className="btlpass-buy-box-all">
            <div className="btlpass-girl"></div>
            <div className="store-button">
              <div className="but-price-text">become elite</div>
              <div className="but-price">
                $19.99
                <div className="price-nutaku"></div>
              </div>
            </div>
          </div> */}
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
            className="btlpass_scroll"
            scrollXY={[1000, 202]}
            objectXY={[80, 190]}
            progressTrigger={["wheel", "progressElement", "content"]}
            thumbElement={<ScrollThumb />}
            edgeGradient={{ color: "#202c38" }}
            progressBarSize={8}
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
                />
                <ItemBox
                  itemClass={`wh68 ${element.itemClass}`}
                  itemPic={element.itemPic}
                  count={element.count}
                  get={element.itemClass === "get" && true}
                  countOut={index + 1}
                />
              </div>
            ))}
          </Scroll>
          {/* <div className="btlpass-level-simple-box-scroll indiana-scroll-container">
            <div className="btlpass-level-simple">
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
            <div className="btlpass-level-level">
              <div className="btlpass-level-level-prg"></div>
              <div className="btlpass-level-level-num-box">
                {elements.map((element, index) => (
                  <div className="btlpass-level-level-num" key={index}>
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
        </div>
      </div>
    </>
  );
}
