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

  const currentImgNum = data_angels[girlIndex].level;
  const position = 554 * (currentImgNum ? currentImgNum : 1) - 554; // для первого рендеринга

  const arrowHandler = useCallback((e) => {
    if (e.target?.closest(".ms-arrow-box").className.includes("left")) {
      setGirleImgNum((prev) => prev - 1);
    } else setGirleImgNum((prev) => prev + 1);
  }, []);

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
                  element: (
                    <div className="arrows" onClick={arrowHandler}></div>
                  ),
                  contentReduce: false,
                },
                progressElement: progElems,
                content: true,
              }}
              direction="x"
              scrollPosition={position}
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
        </div>
      </div>

      {children}
    </div>
  );
}

export default AngelsWindow;
