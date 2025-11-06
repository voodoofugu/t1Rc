import { useState, useMemo } from "react";
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

export default function Dating({ pageName, children }) {
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

        <GirlDependencies data_angels={data_angels} />
      </div>

      {children}
    </div>
  );
}

const GirlDependencies = ({ data_angels }) => {
  // state
  const [girlIndex, setGirlIndex] = useState(0);

  const imgNum = data_angels[girlIndex].level;
  const position = 554 * (imgNum ? imgNum : 1) - 554;

  const [progElems, imgs] = useMemo(() => {
    const values = [1, 2, 3, 4, 5];
    const prog = [];
    const im = [];

    for (const v of values) {
      prog.push(
        <div key={`stage-${v}`} className={`stage-progress st-${v}`}></div>
      );
      im.push(
        <img
          key={`img-${v}`}
          src={`img/images/goddess/goddess-${data_angels[girlIndex].id}/x2/goddess-${v}.jpg`}
          loading="lazy"
          alt=""
        />
      );
    }

    return [prog, im];
  }, [girlIndex, data_angels]);

  return (
    <>
      <Button
        className="angels-chest"
        text="Get pieces"
        img="img/darkworld-chest-agels.png"
        onClick={() => {}}
      />

      <div
        className={`girlFigure${
          data_angels[girlIndex].condition
            ? " " + data_angels[girlIndex].condition
            : ""
        }`}
        key={data_angels[girlIndex].id}
      >
        <div className="content-wrap">
          <div className="b-fs"></div>

          <MorphScroll
            className="angelImgScroll"
            size="auto"
            objectsSize={[554, 500]} // попробовать починить "size"
            edgeGradient={{ size: 20, color: "rgba(255,200,86,0.4)" }}
            type="slider"
            progressTrigger={{
              arrows: { contentReduce: false },
              progressElement: progElems,
            }}
            direction="x"
            scrollPosition={position}
          >
            {imgs}
          </MorphScroll>
          <div className="angels-info">
            <div
              className={`angels-stars lvl_${data_angels[girlIndex].level}`}
            ></div>
            <ProgressBar
              className="angels-prog"
              progressSize={[580, 10]}
              currentProgress={2}
              maxProgress={6}
            />
          </div>
        </div>
        <FraimedTitle
          className="corners"
          text={`${data_angels[girlIndex].name} - lvl ${data_angels[girlIndex].level}`}
        />
      </div>

      <div className="figure-stages-box"></div>

      <MorphScroll
        className="scrollAvatars"
        size={[104, 494]}
        objectsSize={[86, 86]}
        gap={10}
        wrapperMargin={[0, 10]}
        progressReverse
        scrollBarOnHover
        edgeGradient={{ color: "#877875" }}
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
              index === girlIndex ? item.condition + " active" : item.condition
            }
            img={`img/images/goddess/goddess-${item.id}/x1/ava/goddess-ava-1.jpg`}
            onClick={() => setGirlIndex(index)}
          />
        ))}
      </MorphScroll>
    </>
  );
};
