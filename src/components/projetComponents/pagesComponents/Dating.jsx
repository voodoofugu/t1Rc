import React from "react";
import { useDispatch } from "../../templateComponents/GlobalStateStor";

import ItemBox from "../UIComponents/ItemBox";
import ResCount from "../UIComponents/ResCount";
import Scroll from "../UIComponents/Scroll";
import PersonAva from "../UIComponents/PersonAva";
import girlsInfo from "../../../scripts/FapTitansScripts/date_girlsInfo";
import Chat from "../UIComponents/Chat";
import ProgressBar from "../UIComponents/ProgressBar";

export const cssFiles = [
  "customScroll",
  "dating",
  "screen-superhero",
  "screen-unipop-subscription",
];

export default function Dating({ pageName, children }) {
  const dispatch = useDispatch();

  return (
    <div className="main world1">
      <div className="main-bg dating"></div>
      <div className="dating_content">
        <div className="dating_title">Your date</div>
        <div className="counterBox">
          <ResCount
            img="img/dating/datingCoin.png"
            value="234"
            plus
            onClick={() => {
              dispatch({
                type: "POPUP_OPEN",
                payload: {
                  mpopClass: "m-popup essence-buy",
                  popTit: "Buy Dices",
                  popCont: [
                    "BuyShop",
                    {
                      img1: "dating/datingCoin_1",
                      img2: "dating/datingCoin_2",
                      img3: "dating/datingCoin_3",
                      img4: "dating/datingCoin_4",
                    },
                  ],
                },
              });
            }}
          />
        </div>
        <div className="color-btn exit">
          <div className="color-btn-text"></div>
        </div>
        <div className="btnI" />

        <div className="heroFigure"></div>

        <GirlIndexDependencies girlsInfo={girlsInfo} />
      </div>
      {children}
    </div>
  );
}

const GirlIndexDependencies = ({ girlsInfo }) => {
  const [girlIndex, setGirlIndex] = React.useState(0);

  return (
    <>
      <div className="girlFigure">
        <img
          key={girlsInfo[girlIndex].id}
          src={`img/breakGirls/break-girl${girlsInfo[girlIndex].id}.png`}
          loading="lazy"
        />
      </div>

      <div className="progBar">
        <ProgressBar
          className="progresBar progressBarOfSympathy yDirection"
          progressSize={[300, 18]}
          currentProgress={2}
          maxProgress={6}
          serifsPerProgress
          itemsBoxFirst={[
            <ItemBox
              itemClass="wh44"
              itemPic="img/dating/datingCoin.png"
              count={1}
              arrow="bottom"
            />,
            <ItemBox
              itemClass="wh44"
              itemPic="img/dating/datingCoin.png"
              count={1}
              arrow="bottom"
            />,
            <ItemBox
              itemClass="wh44"
              itemPic="img/dating/datingCoin.png"
              count={1}
              arrow="bottom"
            />,
            <ItemBox
              itemClass="wh44"
              itemPic="img/dating/datingCoin.png"
              count={1}
              arrow="bottom"
            />,
            <ItemBox
              itemClass="wh44"
              itemPic="img/dating/datingCoin.png"
              count={1}
              arrow="bottom"
            />,
            <ItemBox
              itemClass="wh44"
              itemPic="img/dating/datingCoin.png"
              count={1}
              arrow="bottom"
            />,
          ]}
          itemsBoxLast={[
            <ItemBox
              itemClass="wh44"
              itemPic="img/dating/datingCoin.png"
              count={1}
              arrow="top"
            />,
          ]}
        >
          {/* <ItemBox
            itemClass="wh44"
            itemPic="img/dating/datingCoin.png"
            count={1}
          /> */}
        </ProgressBar>
      </div>

      <Chat girlIndex={girlIndex} girlsInfo={girlsInfo} />

      <div className="girlName">
        <div className="addText">with</div>
        <div className="nameWrap">
          <div className="name" key={girlsInfo[girlIndex].name}>
            {girlsInfo[girlIndex].name}
          </div>
        </div>
      </div>

      <Scroll
        className="scrollAvatars"
        scrollXY={[100, 530]}
        objectXY={[86, 86]}
        gap={10}
        padding={[4, 10]}
        scrollTrigger="←→/←O→"
        wrapAlignCenter
        scrollReverse
        scrollVisibility="↓<O>"
        // lazyRender
        // infiniteScroll
        // rootMargin={[0, 0]}
        // xDirection
        // suspending
        // fallback={<div>loading</div>}
        // contentAlignCenter
        // scrollTop={100}
      >
        {girlsInfo.map((item, index) => (
          <PersonAva
            key={item.id}
            className={index === girlIndex ? "active" : item.condition}
            img={`img/images/superhero/suphero-${item.id}/x1/avatar/sh-ava-1.jpg`}
            onClick={() => !item.condition && setGirlIndex(index)}
          />
        ))}
      </Scroll>
    </>
  );
};
