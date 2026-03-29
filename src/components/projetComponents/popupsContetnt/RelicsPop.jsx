import React, { memo } from "react";
import nexus from "nexus";

import ItemBox from "../UIComponents/ItemBox";
import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ComicsBallon from "../UIComponents/ComicsBallon";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";
import VideoTag from "../UIComponents/VideoTag";

export default memo(function RelicsPop({ event }) {
  let data = [
    {
      xmas: [
        "img/images/superhero/suphero-1000/x1/sh-6.jpg",
        "Send us to XXXMAS Orgy!",
        [
          "img/evPopArts/snowflake_blue.png",
          "img/evPopArts/snowflake_blueDark.png",
          "img/evPopArts/snowflake_violetDark.png",
          "img/evPopArts/snowflake_violet.png",
          "img/evPopArts/snowflake_redDark.png",
          "img/evPopArts/snowflake_yellow.png",
        ],
        "img/v2-xmas-chest-green.png",
        "img/bGs/roomBg.jpg",
      ],
    },
    {
      vl: [
        "img/images/superhero/suphero-1003/x2/sh-6.jpg",
        "Send us to Valentine's Day Orgy!",
        [
          "img/evPopArts/flower-blue.png",
          "img/evPopArts/flower-green.png",
          "img/evPopArts/flower-lilac.png",
          "img/evPopArts/flower-orange.png",
          "img/evPopArts/flower-pink.png",
          "img/evPopArts/flower-purple.png",
        ],
        "img/evPopArts/ic-bouquet.png",
        "img/bGs/flowerBg.jpg",
      ],
    },
    {
      march: [
        "img/images/superhero/suphero-928/x2/sh-1.jpg",
        "Send us to March's Day Orgy!",
        [
          "img/ic-march-flower-dark-blue.png",
          "img/ic-march-flower-red.png",
          "img/ic-march-flower-lilac.png",
          "img/ic-march-flower-green.png",
          "img/ic-march-flower-pink.png",
          "img/ic-march-flower-blue.png",
        ],
        "img/ic-march-bouquet.png",
        "img/bGs/mountainsBg.jpg",
      ],
    },
    {
      easter: [
        "img/images/superhero/suphero-924/x2/sh-1.jpg",
        "Send us to Easter's Day Orgy!",
        [
          "img/evPopArts/egg_1.png",
          "img/evPopArts/egg_2.png",
          "img/evPopArts/egg_3.png",
          "img/evPopArts/egg_4.png",
          "img/evPopArts/egg_5.png",
          "img/evPopArts/egg_6.png",
        ],
        "img/evPopArts/eggs_basket.png",
        "img/bGs/mountainsBg.jpg",
      ],
    },
    {
      march2: [
        "img/images/superhero/suphero-925/x2/sh-1.jpg",
        "Send us to Easter's Day Orgy!",
        [
          "img/evPopArts/thongs_1.png",
          "img/evPopArts/thongs_2.png",
          "img/evPopArts/thongs_3.png",
          "img/evPopArts/thongs_4.png",
          "img/evPopArts/thongs_5.png",
          "img/evPopArts/thongs_6.png",
        ],
        "img/evPopArts/strawberry_icn.png",
        "img/bGs/mountainsBg.jpg",
      ],
    },
    {
      hw: [
        "img/images/hero-all/tithero-617/x2/tithero-4.jpg",
        "Halloween's Day Orgy!",
        [
          "img/evPopArts/bat_icn.png",
          "img/evPopArts/pumpkin2_icn.png",
          "img/evPopArts/cat_icn.png",
          "img/evPopArts/cat_icn.png",
          "img/evPopArts/glass_icn.png",
          "img/evPopArts/greenPotion_icn.png",
        ],
        "img/evPopArts/candyBag.png",
        "img/bGs/halloweenBg.jpg",
      ],
    },
    {
      summer: [
        "img/images/hero-all/tithero-731/x2/tithero-4.jpg",
        "Velvet Wings",
        [
          "img/evPopArts/ic-butterfly-black.png",
          "img/evPopArts/ic-butterfly-blue.png",
          "img/evPopArts/ic-butterfly-darkGreen.png",
          "img/evPopArts/ic-butterfly-green.png",
          "img/evPopArts/ic-butterfly-orange.png",
          "img/evPopArts/ic-butterfly-purple.png",
        ],
        "img/evPopArts/ic-butterfly-pot.png",
        "img/bGs/natureBg7.jpg",
      ],
    },
    {
      autumn: [
        "img/images/hero-all/tithero-626/x2/tithero-1.jpg",
        "Crimson Masquerade Event",
        [
          "img/evPopArts/puzzle-black.png",
          "img/evPopArts/puzzle-darkBlue.png",
          "img/evPopArts/puzzle-darkGreen.png",
          "img/evPopArts/puzzle-gray.png",
          "img/evPopArts/puzzle-green.png",
          "img/evPopArts/puzzle-lightBlue.png",
        ],
        "img/evPopArts/puzzle-heart.png",
        "img/bGs/hallBg4.jpg",
      ],
    },
  ];

  const evData = data.find((item) => item[event]);
  const popupState = nexus.use("popupState");

  return (
    <>
      <ImageBg className="bG framedBg" img={evData?.[event][4]} />

      <FraimedTitle className="cornersTop" text={evData?.[event][1]} />

      <Button
        className="exit"
        text="✖"
        onClick={() => nexus.acts.handlePopup({ type: "close" })}
      />

      <div className="main-relics-girl-box">
        <div className="main-relics-girl-pic">
          <img src={evData?.[event][0]} loading="lazy" />
        </div>
        {/* <VideoTag
          className="relics-vidio"
          poster="img/images/superhero/suphero-965/x2/sh-6.jpg"
          source={["img/images/superhero/suphero-965/video.mp4"]}
          autoPlay
          loop
        /> */}

        <Button className="infoOnly" text="i" />

        <div className="main-relics-timer-box">
          <div className="main-relics-timer-text">осталось</div>
          <div className="main-relics-timer">3D 23:46:59</div>
        </div>

        <ComicsBallon
          text={evData?.[event][1]}
          style={{
            top: "344px",
            left: "50%",
            width: "min-content",
            transform: "translateX(-80%)",
          }}
          changeDirectionArrow
        />

        <div className="pse-count-res-box">
          <div className="pse-count-res-text">
            <span className="ic-pse-keygirl"></span>
            0/6
          </div>
        </div>
      </div>

      <MorphScroll
        scrollID="relicsScroll"
        className="main-relics-right-box-all overNone"
        size={[710, 446]}
        objectsSize={[710, 194]}
        progressTrigger={{ wheel: true, progressElement: <ScrollThumb /> }}
      >
        <div className="main-relics-bonus-box xmas">
          <ProgressBar
            className="progressBarOfSympathy"
            progressSize={[560, 28]}
            currentProgress={1}
            maxProgress={4}
            serifsPerProgress
            text="+1"
            textIcn="img/violet_piece.png"
            itemsBoxFirst={[
              <ItemBox
                className="check"
                itemPic="img/images/hero-all/tithero-349/x2/ava/tithero-349-1-ava.jpg"
                countOut={"5K"}
                arrow="bottom"
                key={1}
              />,
              <ItemBox
                itemPic={evData?.[event][3]}
                count={"10K"}
                countOut={"6K"}
                arrow="bottom"
                key={2}
              />,
              <ItemBox
                itemPic={evData?.[event][3]}
                countOut={"7K"}
                arrow="bottom"
                key={3}
              />,
              <ItemBox
                itemPic="img/images/hero-all/tithero-349/x2/ava/tithero-349-1-ava.jpg"
                countOut={"10K"}
                arrow="bottom"
                key={4}
              />,
            ]}
          >
            <ItemBox
              className="wh100"
              itemPic={evData?.[event][2][0]}
              count={"0/10K"}
            />
          </ProgressBar>
        </div>
        <div className="main-relics-bonus-box xmas">
          <ItemBox
            className="wh100"
            itemPic={evData?.[event][2][1]}
            count={"0/10K"}
          />
          <div className="relics-prg-box-all">
            <div className="relics-prg-box">
              <div className="prg-box">
                <div
                  className="prgbar"
                  style={{
                    width: "0%",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="relics-coll-box-all">
            <ItemBox
              className="check"
              itemPic="img/images/hero-all/tithero-343/x2/ava/tithero-343-1-ava.jpg"
              countOut={"5K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              count={"10K"}
              countOut={"6K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              countOut={"7K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              countOut={"8.5K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic="img/images/hero-all/tithero-343/x2/ava/tithero-343-1-ava.jpg"
              countOut={"10K"}
              arrow="bottom"
            />
          </div>
        </div>
        <div className="main-relics-bonus-box xmas">
          <ItemBox
            className="wh100"
            itemPic={evData?.[event][2][3]}
            count={"0/10K"}
          />
          <div className="relics-prg-box-all">
            <div className="relics-prg-box">
              <div className="prg-box">
                <div
                  className="prgbar"
                  style={{
                    width: "0%",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="relics-coll-box-all">
            <ItemBox
              className="check"
              itemPic="img/images/hero-all/tithero-345/x2/ava/tithero-345-1-ava.jpg"
              countOut={"5K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              count={"10K"}
              countOut={"6K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              countOut={"7K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              countOut={"8.5K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic="img/images/hero-all/tithero-345/x2/ava/tithero-345-1-ava.jpg"
              countOut={"10K"}
              arrow="bottom"
            />
          </div>
        </div>
        <div className="main-relics-bonus-box xmas">
          <ItemBox
            className="wh100"
            itemPic={evData?.[event][2][3]}
            count={"0/10K"}
          />
          <div className="relics-prg-box-all">
            <div className="relics-prg-box">
              <div className="prg-box">
                <div
                  className="prgbar"
                  style={{
                    width: "0%",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="relics-coll-box-all">
            <ItemBox
              className="check"
              itemPic="img/images/hero-all/tithero-350/x2/ava/tithero-350-1-ava.jpg"
              countOut={"5K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              count={"10K"}
              countOut={"6K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              countOut={"7K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              countOut={"8.5K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic="img/images/hero-all/tithero-350/x2/ava/tithero-350-1-ava.jpg"
              countOut={"10K"}
              arrow="bottom"
            />
          </div>
        </div>
        <div className="main-relics-bonus-box xmas">
          <ItemBox
            className="wh100"
            itemPic={evData?.[event][2][4]}
            count={"224/10K"}
          />
          <div className="relics-prg-box-all">
            <div className="relics-prg-box">
              <div className="prg-box">
                <div
                  className="prgbar"
                  style={{
                    width: "0.896%",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="relics-coll-box-all">
            <ItemBox
              className="check"
              itemPic="img/images/hero-all/tithero-348/x2/ava/tithero-348-1-ava.jpg"
              countOut={"5K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              count={"10K"}
              countOut={"6K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              countOut={"7K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              countOut={"8.5K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic="img/images/hero-all/tithero-348/x2/ava/tithero-348-1-ava.jpg"
              countOut={"10K"}
              arrow="bottom"
            />
          </div>
        </div>
        <div className="main-relics-bonus-box xmas">
          <ItemBox
            className="wh100"
            itemPic={evData?.[event][2][5]}
            count={"0/10K"}
          />
          <div className="relics-prg-box-all">
            <div className="relics-prg-box">
              <div className="prg-box">
                <div
                  className="prgbar"
                  style={{
                    width: "0%",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="relics-coll-box-all">
            <ItemBox
              className="check"
              itemPic="img/images/hero-all/tithero-344/x2/ava/tithero-344-1-ava.jpg"
              countOut={"5K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              count={"10K"}
              countOut={"6K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              countOut={"7K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic={evData?.[event][3]}
              countOut={"8.5K"}
              arrow="bottom"
            />
            <ItemBox
              itemPic="img/images/hero-all/tithero-344/x2/ava/tithero-344-1-ava.jpg"
              countOut={"10K"}
              arrow="bottom"
            />
          </div>
        </div>
      </MorphScroll>

      <div className="main-buttons">
        <Button className="green max" text="Fapopoly<p>00:00:00" />
        <Button className="green max" text="Dark Tower<p>00:00:00" />
        <Button className="green max" text="XXXMAS Pass<p>4D 03:07:21" />
      </div>
    </>
  );
});
