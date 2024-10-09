import React from "react";
// import MorphingScroll from "morphing-scroll";
import MorphingScroll from "../../../../morphing-scroll/src/MorphingScroll";
// import { useNexus, useNexusAll } from "nexus-state";

import {
  useDispatch,
  // selectors,
} from "../../templateComponents/GlobalStateStor";

import ItemBox from "../UIComponents/ItemBox";
// import ResCount from "../UIComponents/ResCount";
import PersonAva from "../UIComponents/PersonAva";
import girlsInfo from "../../../scripts/FapTitansScripts/date_girlsInfo";
import Chat from "../UIComponents/Chat";
import ProgressBar from "../UIComponents/ProgressBar";
import Button from "../UIComponents/Button";
import ScrollThumb from "../UIComponents/ScrollThumb";
import FraimedTitle from "../UIComponents/FraimedTitle";

export const cssFiles = [
  "dating",
  "screen-superhero",
  "screen-unipop-subscription",
  "daiting-gifts-pop",
];

export default function Dating({ pageName, children }) {
  const dispatch = useDispatch();

  // const [activePage, setActivePage] = useNexus("activePage");
  // const [increment, setIncrement] = useNexus("increment");
  // console.log("useNexusAll", useNexusAll());

  return (
    <div className="main world1">
      <div className="main-bg dating"></div>
      <div className="dating_content">
        <div className="datingBG"></div>
        <div className="dating_title">Your date</div>

        <Button className="exit" text="✖" />
        <Button
          className="info"
          text="i"
          onClick={() => {
            dispatch({
              type: "POPUP_OPEN",
              payload: {
                mpopClass: "m-popup contentOnly framedPop",
                popTit: "",
                popCont: ["InfoPopFramed"],
                props: {
                  inner:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
                  girlImg: "img/breakGirls/break-girl915.png",
                },
              },
            });
          }}
        />

        <div style={{ position: "absolute", right: "80px", top: "0px" }}>
          <Button
            className="exit"
            text
            // onClick={() => {
            //   setIncrement({
            //     type: "INCREMENT",
            //     payload: { increment: 1 },
            //   });
            // }}
          />
        </div>

        <div className="heroFigure"></div>

        <GirlDependencies girlsInfo={girlsInfo} />
      </div>

      {children}
    </div>
  );
}

const GirlDependencies = ({ girlsInfo }) => {
  const dispatch = useDispatch();

  const [girlIndex, setGirlIndex] = React.useState(0);

  return (
    <>
      <Button
        className="orange giftsBtn"
        text="Girl gifts"
        img="img/dating/giftsIcn.png"
        onClick={() => {
          dispatch({
            type: "POPUP_OPEN",
            payload: {
              mpopClass: "m-popup contentOnly framedPop",
              popTit: "",
              popCont: ["DatingGiftsPop"],
              props: {
                girleID: girlsInfo[girlIndex].id,
              },
            },
          });
        }}
      />

      <div className={`girlFigure ${girlsInfo[girlIndex].condition}`}>
        <img
          key={girlsInfo[girlIndex].id}
          src={`img/breakGirls/break-girl${girlsInfo[girlIndex].id}.png`}
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
        itemsBoxLast={[
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
          img={`img/images/superhero/suphero-${girlsInfo[girlIndex].id}/x1/avatar/sh-ava-1.jpg`}
        />
      </ProgressBar>

      <Chat girlInfo={girlsInfo[girlIndex]} />

      <div className="girlName">
        <div className="addText">with</div>
        <FraimedTitle
          className="corners"
          text={girlsInfo[girlIndex].name}
          key={girlsInfo[girlIndex].name}
        />
      </div>

      <MorphingScroll
        className="scrollAvatars"
        scrollID="datingAvatars"
        scrollXY={[104, 494]}
        objectXY={[86, 86]}
        gap={10}
        padding={[4, 10]}
        progressTrigger={["arrows", "progressElement"]}
        progressReverse
        // thumbElement={<ScrollThumb />}
        sliderType
        // progressVisibility="hover"
        // wrapAlignCenter
        // lazyRender
        // infiniteScroll
        // rootMargin={[0, 0]}
        // xDirection
        // suspending
        // fallback={<div>loading</div>}
        // contentAlignCenter
        // scrollTop={100}
        // edgeGradient="#5b2914"
        edgeGradient={{ color: "#642e16" }}
      >
        {girlsInfo.map((item, index) => (
          <PersonAva
            key={item.id}
            className={
              index === girlIndex ? item.condition + " active" : item.condition
            }
            img={`img/images/superhero/suphero-${item.id}/x1/avatar/sh-ava-1.jpg`}
            onClick={() => setGirlIndex(index)}
          />
        ))}
      </MorphingScroll>
    </>
  );
};
