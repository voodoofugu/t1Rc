import React, { memo } from "react";
import { nexusDispatch, useNexus } from "nexus-state";

import ItemBox from "../UIComponents/ItemBox";
import Scroll from "../../../../morphing-scroll/src/MorphingScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ComicsBallon from "../UIComponents/ComicsBallon";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";

export default memo(function RelicsPop({ event }) {
  let data = [
    {
      xmas: [
        "img/images/hero-all/tithero-350/x2/tithero-350-1.jpg",
        "Send us to XXXMAS Orgy!",
        [
          "img/ic-ny-sneg-0.png",
          "img/ic-ny-sneg-1.png",
          "img/ic-ny-sneg-2.png",
          "img/ic-ny-sneg-3.png",
          "img/ic-ny-sneg-4.png",
          "img/ic-ny-sneg-5.png",
        ],
        "img/v2-xmas-chest-green.png",
      ],
    },
    {
      vl: [
        "img/images/superhero/suphero-922/x2/sh-1.jpg",
        "Send us to Valentine's Day Orgy!",
        [
          "img/ic-vl-heart-dark-blue.png",
          "img/ic-vl-heart-red.png",
          "img/ic-vl-heart-dark-lilac.png",
          "img/ic-vl-heart-green.png",
          "img/ic-vl-heart-pink.png",
          "img/ic-vl-heart-blue.png",
        ],
        "img/v2-vl-candys-box.png",
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
      ],
    },
    {
      hw: [
        "img/images/superhero/suphero-890/x2/sh-1.jpg",
        "Halloween's Day Orgy!",
        [
          "img/evPopArts/pumpkin1_icn.png",
          "img/evPopArts/pumpkin2_icn.png",
          "img/evPopArts/cat_icn.png",
          "img/evPopArts/cat_icn.png",
          "img/evPopArts/glass_icn.png",
          "img/evPopArts/greenPotion_icn.png",
        ],
        "img/evPopArts/candyBag.png",
      ],
    },
  ];

  const bg =
    event === "xmas" ? "img/bGs/xmasBg.jpg" : "img/bGs/halloweenBg.jpg";

  const evData = data.find((item) => item[event]);
  const popupState = useNexus("popupState");

  return (
    <>
      <ImageBg className="bG framedBg" img={bg} />

      <FraimedTitle className="cornersTop" text="Orgy Event" />

      <Button
        className="exit"
        text="✖"
        onClick={() => popupState.popClose(nexusDispatch)}
      />

      <div className="main-relics-girl-box">
        <div className="main-relics-girl-pic">
          <img src={evData?.[event][0]} loading="lazy" />
        </div>
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

      <Scroll
        className="main-relics-right-box-all overNone"
        scrollXY={[710, 446]}
        progressTrigger={["wheel", "progressElement"]}
        thumbElement={<ScrollThumb />}
        progressBarSize={8}
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
                itemClass="check"
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
              itemClass="wh100"
              itemPic={evData?.[event][2][0]}
              count={"0/10K"}
            />
          </ProgressBar>
        </div>
        <div className="main-relics-bonus-box xmas">
          <ItemBox
            itemClass="wh100"
            itemPic={evData?.[event][2][0]}
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
              itemClass="check"
              itemPic="img/images/hero-all/tithero-349/x2/ava/tithero-349-1-ava.jpg"
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
              itemPic="img/images/hero-all/tithero-349/x2/ava/tithero-349-1-ava.jpg"
              countOut={"10K"}
              arrow="bottom"
            />
          </div>
        </div>
        <div className="main-relics-bonus-box xmas">
          <ItemBox
            itemClass="wh100"
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
              itemClass="check"
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
            itemClass="wh100"
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
              itemClass="check"
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
            itemClass="wh100"
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
              itemClass="check"
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
            itemClass="wh100"
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
              itemClass="check"
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
            itemClass="wh100"
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
              itemClass="check"
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
      </Scroll>

      <div className="main-buttons">
        <Button className="green max" text="Fapopoly<p>00:00:00" />
        <Button className="green max" text="Dark Tower<p>00:00:00" />
        <Button className="green max" text="XXXMAS Pass<p>4D 03:07:21" />
      </div>
    </>
  );
});
