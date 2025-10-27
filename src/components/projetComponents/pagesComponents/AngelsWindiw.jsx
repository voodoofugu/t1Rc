import React from "react";
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
        <div className="datingBG"></div>
        <div className="angels-tit-wrap">
          <div className="angels-tit">Angels Room</div>
        </div>

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
  const [girlIndex, setGirlIndex] = React.useState(0);
  console.log("girlIndex", girlIndex);

  const imgNum =
    data_angels[girlIndex].level > 10
      ? 2
      : data_angels[girlIndex].level > 20
      ? 3
      : data_angels[girlIndex].level > 30
      ? 4
      : data_angels[girlIndex].level > 40
      ? 5
      : 1;

  return (
    <>
      <Button
        className="orange giftsBtn"
        text="Girl gifts"
        img="img/dating/giftsIcn.png"
        onClick={() => {}}
      />

      <div className={`girlFigure ${data_angels[girlIndex].condition}`}>
        <img
          key={data_angels[girlIndex].id}
          src={`img/images/goddess/goddess-${data_angels[girlIndex].id}/x2/goddess-${imgNum}.jpg`}
          loading="lazy"
        />
      </div>

      <ProgressBar
        className="progressBarOfSympathy framedText"
        progressSize={[10, 400]}
        currentProgress={2}
        maxProgress={6}
        serifsPerProgress
        yDirection
        // text
        itemsBoxFirst={[
          <ItemBox
            itemClass="wh44"
            itemPic="img/dating/datingCoin.png"
            count={1}
            key={1}
          />,
          <ItemBox
            itemClass="wh44"
            itemPic="img/dating/datingCoin.png"
            count={1}
            key={2}
          />,
          <ItemBox
            itemClass="wh44"
            itemPic="img/dating/datingCoin.png"
            count={1}
            key={3}
          />,
          <ItemBox
            itemClass="wh44"
            itemPic="img/dating/datingCoin.png"
            count={1}
            key={4}
          />,
          <ItemBox
            itemClass="wh44"
            itemPic="img/dating/datingCoin.png"
            count={1}
            key={5}
          />,
          <ItemBox
            itemClass="wh44"
            itemPic="img/dating/datingCoin.png"
            count={1}
            key={6}
          />,
        ]}
      >
        <PersonAva
          img={`img/images/superhero/suphero-${data_angels[girlIndex].id}/x1/avatar/sh-ava-1.jpg`}
        />
      </ProgressBar>

      <div className="girlName">
        <FraimedTitle
          className="corners"
          text={data_angels[girlIndex].name}
          key={data_angels[girlIndex].name}
        />
      </div>

      <MorphScroll
        className="scrollAvatars"
        size={[104, 494]}
        objectsSize={[86, 86]}
        gap={10}
        wrapperMargin={[0, 10]}
        progressReverse
        scrollBarOnHover
        edgeGradient={{ color: "#572e19" }}
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
