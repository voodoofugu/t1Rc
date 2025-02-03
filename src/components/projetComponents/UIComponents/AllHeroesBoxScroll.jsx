import { nexusTrigger } from "nexus-state";

import HeroBox from "../UIComponents/HeroBox";

import MorphScroll from "../../../../morphing-scroll/src/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

import heroBoxData from "../data/heroBoxData";

function FakeComponent() {
  return null;
}

export default function AllHeroesBoxScroll({ numX }) {
  return (
    <MorphScroll
      className="heroBoxsScroll"
      size={[504, 346]}
      objectsSize={[230, 124]}
      gap={12}
      padding={[0, 5]}
      progressTrigger={{ wheel: true, progressElement: <ScrollThumb /> }}
      progressElement={<ScrollThumb />}
      edgeGradient={{ color: "#584a49" }}
      render={{ type: "virtual" }}
      progressVisibility="hover"
      contentAlign={["center", "center"]}
      emptyElements={{ mode: "clear" }}
      // direction
    >
      <>
        <FakeComponent />
        {heroBoxData.map((item, index) => (
          <HeroBox
            key={index}
            {...item}
            btnNumX={numX}
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
      </>
    </MorphScroll>
  );
}
