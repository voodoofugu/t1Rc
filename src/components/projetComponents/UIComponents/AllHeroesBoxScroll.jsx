import React from "react";
import { nexusTrigger } from "nexus-state";

import HeroBox from "../UIComponents/HeroBox";

import MorphScroll from "../../../../morphing-scroll/src/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

import heroBoxData from "../data/heroBoxData";

export default function AllHeroesBoxScroll({ numX }) {
  return (
    <MorphScroll
      className="heroBoxsScroll"
      size={[504, 346]}
      objectsSize={[230, 124]}
      gap={12}
      wrapperMargin={[0, 5]}
      progressTrigger={{ wheel: true, progressElement: <ScrollThumb /> }}
      edgeGradient={{ color: "#584a49" }}
      render={{ type: "virtual" }}
      progressVisibility="hover"
      wrapperAlign={["center", "start"]}
      emptyElements={{
        mode: "clear",
        clickTrigger: { selector: ".exit" },
      }}
    >
      {heroBoxData.map((item, index) => (
        <HeroBox
          key={index}
          {...item}
          btnNumX={numX}
          onClick={() => {
            nexusTrigger({
              type: "handlePopup",
              payload: {
                type: "open",
                data: {
                  mpopClass: "m-popup hero-popup",
                  popTit: "Moe Kasa",
                  popCont: "HeroPopup",
                },
              },
            });
          }}
          btnOnClick={() => {
            // index === 2 &&
            nexusTrigger({
              type: "handlePopup",
              payload: {
                type: "open",
                data: {
                  mpopClass: "m-popup contentOnly framedPop heroOfferPop",
                  popCont: "HeroOfferPop",
                  props: { ...item },
                },
              },
            });
          }}
        />
      ))}
    </MorphScroll>
  );
}
