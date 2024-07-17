import React from "react";
import {
  selectors,
  useDispatch,
} from "../../templateComponents/GlobalStateStor";

import ItemBox from "../UIComponents/ItemBox";
import ResCount from "../UIComponents/ResCount";
import Scroll from "../UIComponents/Scroll";
import PersonAva from "../UIComponents/PersonAva";
import girlsInfo from "../../../scripts/FapTitansScripts/date_girlsInfo";

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

        {/* <GirlIndexDependencies girlsInfo={girlsInfo} /> */}
        <GirlsMenu girlsInfo={girlsInfo} />
      </div>
      {children}
    </div>
  );
}

const GirlIndexDependencies = ({ girlsInfo }) => {
  const dateGirlIndex = selectors.useDateGirlIndex();

  return (
    <>
      <div className="girlFigure">
        <img
          key={girlsInfo[dateGirlIndex].id}
          src={`img/breakGirls/break-girl${girlsInfo[dateGirlIndex].id}.png`}
          loading="lazy"
        />
      </div>

      <div className="progBar"></div>

      <Scroll
        className="scrollChat"
        scrollXY={[500, 520]}
        objectXY={[86, 86]}
        gap={10}
        padding={10}
        scrollTrigger="←→/←O→"
      ></Scroll>
    </>
  );
};

const GirlsMenu = ({ girlsInfo }) => {
  const dispatch = useDispatch();

  return (
    <Scroll
      className="scrollAvatars"
      scrollXY={[92, 526]}
      objectXY={[86, 86]}
      gap={10}
      padding={[4, 10]}
      scrollTrigger="←→/←O→"
      // scrollVisibility="↓<O>"
      // lazyRender
      // infiniteScroll
      // rootMargin={[0, 0]}
      // xDirection
      // suspending
      // fallback={<div>loading</div>}
      // contentAlignCenter
    >
      {girlsInfo.map((item, index) => (
        <PersonAva
          key={item.id}
          condition={item.condition}
          img={`img/images/${item.type}/suphero-${item.id}/x1/avatar/sh-ava-1.jpg`}
          index={index}
          onClick={() =>
            !item.condition &&
            dispatch({
              type: "DATE_GIRL_INDEX",
              payload: index,
            })
          }
        />
      ))}
    </Scroll>
  );
};
