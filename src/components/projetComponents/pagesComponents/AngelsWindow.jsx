import { useState, useMemo, useCallback } from "react";
import { nexusTrigger } from "nexus-state";
import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";

import ItemBox from "../UIComponents/ItemBox";
// import ResCount from "../UIComponents/ResCount";
import PersonAva from "../UIComponents/PersonAva";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ScrollThumb from "../UIComponents/ScrollThumb";
import FraimedTitle from "../UIComponents/FraimedTitle";

import data_angels from "../../../scripts/FapTitansScripts/data_angels";

export const cssFiles = [
  "angels-window",
  "screen-superhero",
  "screen-unipop-subscription",
];

function AngelsWindow({ pageName, children }) {
  // state
  const [girlIndex, setGirlIndex] = useState(0);
  const [girlImgNum, setGirleImgNum] = useState(data_angels[girlIndex].level);
  const [potionImgNum, setPotionImgNum] = useState(1);

  const currentImgNum = data_angels[girlIndex].level;
  const position = 554 * (currentImgNum ? currentImgNum : 1) - 554; // для первого рендеринга

  const onScrollValueGirle = useCallback((left) => {
    setGirleImgNum(Math.round(left / 554) + 1);
  }, []);
  const onScrollValuePotion = useCallback((left) => {
    setPotionImgNum(Math.round(left / 40) + 1);
  }, []);

  const [potion, text] =
    potionImgNum === 1
      ? ["img/evPopArts/potion_yellow.png", "buff"]
      : potionImgNum === 2
      ? ["img/evPopArts/potion_green.png", "per"]
      : ["img/evPopArts/potion_blue.png", "pos"];

  // делаем массивы для картинок и заодно для иконок прогресса
  const [progElems, imgs] = useMemo(() => {
    const values = [1, 2, 3, 4, 5];
    const prog = [];
    const im = [];

    for (const v of values) {
      prog.push(
        <div key={`stage-${v}`} className={`stage-progress st-${v}`}></div>
      );
      im.push(
        <div
          key={`space-${v}`}
          className={`img-wrap ${v > girlImgNum ? "disabled" : ""}`}
        >
          <img
            src={`img/images/goddess/goddess-${data_angels[girlIndex].id}/x2/goddess-${v}.jpg`}
            loading="lazy"
            alt=""
          />
        </div>
      );
    }

    return [prog, im];
  }, [girlIndex, data_angels]);

  const scenesNodes = useMemo(() => {
    const girl = data_angels[girlIndex];
    const count = girl.scenes; // число

    return Array.from({ length: count }, (_, i) => (
      <ItemBox
        key={i}
        className="wh60 selectable"
        itemPic={`img/images/goddess/goddess-${
          girl.id
        }/comics/ava/goddess-com-ava-${i + 1}.jpg`}
        onClick={() => {
          nexusTrigger({
            type: "handlePopup",
            payload: {
              type: "open",
              data: {
                mpopClass: "m-popup contentOnly",
                popCont: "FullImgPop",
                img: `img/images/goddess/goddess-${
                  data_angels[girlIndex].id
                }/comics/goddess-com-${i + 1}.jpg`,
              },
            },
          });
        }}
      />
    ));
  }, [girlIndex]);

  const allHero = [1, 2, 3, 4, 5, 6].map((v, i) => (
    <div className="hero-box" key={i}>
      <ItemBox
        className="hero"
        heroClass="gun"
        itemPic="img/images/hero-all/tithero-515/x1/ava/tithero-ava-1.jpg"
        count={"Shiranui Kaede".split(" ")[1]} // добавлять только имя
      />
      <div className="gd-lvl-pds-box-all">
        <div className="hero-param-box yellow">
          buff<div className="value">0</div>
        </div>
        <div className="hero-param-box green">
          CW<div className="value">0%</div>
        </div>
        <div className="hero-param-box blue">
          Pos<div className="value">+0</div>
        </div>
        <div className="hero-param-box">
          dps<div className="value">3.5OD4</div>
        </div>
      </div>
      <Button
        className="green max up-btn"
        text={`up ${text}`}
        textIcn={potion}
        onClick={() => {}}
      />
      {v === 2 && (
        <div className="buy-box">
          <Button className="green" text="buy" onClick={() => {}} />
        </div>
      )}
    </div>
  ));

  return (
    <div className="main world1">
      <div className="main-bg dating"></div>
      <div className="dating_content">
        <div className="angels-window-bg"></div>
        <div className="angels-tit-wrap"></div>
        <div className="angels-tit">Angels Room</div>

        <Button className="exit" text="✖" />
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

        <Button
          className="angels-chest"
          text="Get pieces"
          img="img/darkworld-chest-agels.png"
          onClick={() => {}}
        />

        <MorphScroll
          className="scrollAvatars"
          size={[104, 494]}
          objectsSize={[86, 86]}
          gap={10}
          wrapperMargin={[0, 10]}
          progressReverse
          scrollBarOnHover
          edgeGradient={{ color: "#968d87" }}
          progressTrigger={{
            wheel: true,
            progressElement: <ScrollThumb />,
          }}
          wrapperAlign="center"
        >
          {data_angels.map((item, index) => (
            <PersonAva
              key={item.id}
              className={
                index === girlIndex
                  ? item.condition + " active"
                  : item.condition
              }
              img={`img/images/goddess/goddess-${item.id}/x1/ava/goddess-ava-1.jpg`}
              onClick={() => {
                setGirlIndex(index);
                setGirleImgNum(data_angels[index].level);
              }}
            />
          ))}
        </MorphScroll>

        <div key={data_angels[girlIndex].id}>
          <div className="stars-info-box">
            <div className="star-info">
              <div className="star-tit">Current Star</div>
              <div>Max Buff Level: 100</div>
              <div>Buff Bonus: x1</div>
            </div>
            <div className="star-info next">
              <div className="star-tit">Next Star</div>
              <div>Max Buff Level: 250</div>
              <div>Buff Bonus: x2</div>
            </div>
          </div>

          <div
            className={`girlFigure${
              data_angels[girlIndex].condition
                ? " " + data_angels[girlIndex].condition
                : ""
            }`}
          >
            <MorphScroll
              className="angelImgScroll"
              size="auto"
              objectsSize="size"
              edgeGradient={{ size: 20, color: "rgba(255,200,86,0.4)" }}
              type="slider"
              progressTrigger={{
                arrows: {
                  element: <div className="arrows"></div>,
                  contentReduce: false,
                },
                progressElement: progElems,
                content: true,
              }}
              direction="x"
              scrollPosition={position}
              onScrollValue={onScrollValueGirle}
              render="virtual"
            >
              {imgs}
            </MorphScroll>

            <div className="angels-info">
              <div
                className={`angels-stars lvl_${data_angels[girlIndex].level}`}
              ></div>
              <ProgressBar
                className="angels-prog"
                progressSize={[552, 10]}
                currentProgress={2}
                maxProgress={6}
              />
            </div>
            <FraimedTitle
              className="corners"
              text={`${data_angels[girlIndex].name} - lvl ${data_angels[girlIndex].level}`}
            />

            <div
              className={`b-fs${girlImgNum > currentImgNum ? " disabled" : ""}`}
              onClick={() => {
                if (girlImgNum > currentImgNum) return;

                nexusTrigger({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      mpopClass: "m-popup contentOnly",
                      popCont: "FullImgPop",
                      img: `img/images/goddess/goddess-${data_angels[girlIndex].id}/x2/goddess-${girlImgNum}.jpg`,
                    },
                  },
                });
              }}
            ></div>
          </div>

          <div className="additional-hero-box">
            <div className="additional-hero-header">
              <MorphScroll
                className="currency-scroll"
                size={[120, 60]}
                objectsSize={[40, 60]}
                type="slider"
                progressTrigger={{
                  arrows: {
                    element: <div className="arrows"></div>,
                    loop: true,
                  },
                }}
                direction="x"
                onScrollValue={onScrollValuePotion}
                render="virtual"
              >
                <div className="hero-box">
                  <ItemBox
                    className="wh40 simpleItem"
                    itemPic="img/evPopArts/potion_yellow.png"
                    count="21.4K"
                  />
                </div>
                <div className="hero-box">
                  <ItemBox
                    className="wh40 simpleItem"
                    itemPic="img/evPopArts/potion_green.png"
                    count="21.4K"
                  />
                </div>
                <div className="hero-box">
                  <ItemBox
                    className="wh40 simpleItem"
                    itemPic="img/evPopArts/potion_blue.png"
                    count="21.4K"
                  />
                </div>
              </MorphScroll>
            </div>

            <MorphScroll
              className="additional-scroll"
              size={[260, 400]}
              objectsSize="firstChild"
              gap={10}
              wrapperMargin={[0, 14]}
              edgeGradient={{ color: "#a18f8b", size: 20 }}
              progressTrigger={{
                wheel: true,
                progressElement: <ScrollThumb />,
              }}
              wrapperAlign="center"
            >
              {allHero}
            </MorphScroll>

            <div className="prog-bar-box">
              <ProgressBar
                className="progressBarOfSympathy framedText"
                progressSize={[260, 10]}
                currentProgress={1.5}
                maxProgress={data_angels[girlIndex].scenes}
                serifsPerProgress
                itemsBoxFirst={scenesNodes}
              />
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}

export default AngelsWindow;
