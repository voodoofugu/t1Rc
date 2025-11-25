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
  "guardian-window",
  "screen-superhero",
  "screen-unipop-subscription",
];

function GuardianWindow({ pageName, children }) {
  // state
  const [girlIndex, setGirlIndex] = useState(0);
  const [girlImgNum, setGirleImgNum] = useState(data_angels[girlIndex].level);
  const [potionImgNum, setPotionImgNum] = useState(1);

  const guardianImgWidth = 554;

  const currentImgNum = data_angels[girlIndex].level;
  const position =
    guardianImgWidth * (currentImgNum ? currentImgNum : 1) - guardianImgWidth; // для первого рендеринга

  const onScrollValueGirle = useCallback((left) => {
    setGirleImgNum(Math.round(left / guardianImgWidth) + 1);
  }, []);
  const onScrollValuePotion = useCallback((left) => {
    setPotionImgNum(Math.round(left / 40) + 1);
  }, []);

  const potion =
    potionImgNum === 1
      ? "img/evPopArts/potion_yellow.png"
      : potionImgNum === 2
      ? "img/evPopArts/potion_green.png"
      : "img/evPopArts/potion_blue.png";

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

  const currentPrgHero = 1.5; // заглушка
  const scenesNodes = useMemo(() => {
    const girl = data_angels[girlIndex];
    const count = girl.scenes; // число
    const max = 4;
    const rest = max - count;
    const normalizedIndex = (index) => index + 1 - rest;

    return Array.from({ length: max }, (_, i) =>
      i + 1 <= max - count ? (
        <div key={i} className="fallback"></div>
      ) : (
        <ItemBox
          key={i}
          className={`wh60 selectable${
            normalizedIndex(i) > currentPrgHero ? " disabled" : ""
          }`}
          itemPic={`img/images/goddess/goddess-${
            girl.id
          }/comics/ava/goddess-com-ava-${normalizedIndex(i)}.jpg`}
          onClick={() => {
            normalizedIndex(i) <= currentPrgHero &&
              nexusTrigger({
                type: "handlePopup",
                payload: {
                  type: "open",
                  data: {
                    mpopClass: "m-popup contentOnly",
                    popCont: "FullImgPop",
                    img: `img/images/goddess/goddess-${
                      data_angels[girlIndex].id
                    }/comics/goddess-com-${normalizedIndex(i)}.jpg`,
                  },
                },
              });
          }}
        />
      )
    );
  }, [girlIndex]);

  const allHero = [1, 2, 3, 4, 5, 6].map((v, i) => (
    <div className={`hero-box${v === 2 ? " disabled" : ""}`} key={i}>
      <ItemBox
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
        className="green max"
        text="253 up"
        textIcn={potion}
        onClick={() => {}}
      />
      {v === 2 && (
        <div className="buy-box">
          <Button className="lightBlue" text="buy" onClick={() => {}} />
        </div>
      )}
    </div>
  ));

  return (
    <div className="main world1">
      <div className="main-bg dating"></div>
      <div className="dating_content">
        <div className="guardian-window-bg"></div>
        <div className="guardian-tit-wrap"></div>
        <div className="guardian-tit">Guardians Room</div>

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
          className="guardian-chest"
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
              <div className="star-text-box">
                <div>Max Buff Level: 100</div>
                <div>Buff Bonus: x1</div>
              </div>
            </div>
            <div className="star-info next">
              <div className="star-tit">Next Star</div>
              <div className="star-text-box">
                <div>Max Buff Level: 250</div>
                <div>Buff Bonus: x2</div>
              </div>
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
              size={[guardianImgWidth, 500]}
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

            <div className="guardian-info">
              <div
                className={`guardian-stars lvl_${data_angels[girlIndex].level}`}
              ></div>
              <ProgressBar
                className="guardian-prog"
                progressSize={[552, 12]}
                currentProgress={2}
                maxProgress={6}
                textWithProgress={"max"}
                textIcn={true}
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
              <Button
                className="btnGold add-btn"
                text="+"
                onClick={() => {
                  nexusTrigger({
                    type: "handlePopup",
                    payload: {
                      type: "open",
                      data: {
                        mpopClass:
                          "m-popup contentOnly framedPop addGuardianHeroPop",
                        popCont: "AddGuardianHero",
                        props: {
                          girlImg:
                            "img/images/hero-all/tithero-636/icons/break-girl.png",
                        },
                      },
                    },
                  });
                }}
              />
              <Button
                className="green quant-btn"
                text="x1"
                onClick={() => {}}
              />

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
                <ItemBox
                  className="wh40 simpleItem"
                  itemPic="img/evPopArts/potion_yellow.png"
                  count="21.4K"
                />
                <ItemBox
                  className="wh40 simpleItem"
                  itemPic="img/evPopArts/potion_green.png"
                  count="21.4K"
                />
                <ItemBox
                  className="wh40 simpleItem"
                  itemPic="img/evPopArts/potion_blue.png"
                  count="21.4K"
                />
              </MorphScroll>
            </div>

            <MorphScroll
              className="additional-scroll"
              size={[264, 338]}
              objectsSize="firstChild"
              gap={12}
              wrapperMargin={[0, 4]}
              edgeGradient={{ color: "#584a49", size: 20 }}
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
                progressSize={[250, 10]}
                currentProgress={currentPrgHero}
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

export default GuardianWindow;
