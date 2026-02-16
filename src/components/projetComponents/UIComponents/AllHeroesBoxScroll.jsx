import React from "react";
import nexus from "nexus";

import HeroBox from "../UIComponents/HeroBox";

import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

import heroBoxData from "../data/heroBoxData";

// добавить таймаут и вернуть что-то
const EmptyElement = () => {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setState(<div style={{ color: "#fff", fontSize: "20px" }}>hi</div>);
    }, 5000);

    return () => clearTimeout(timer); // безопасная очистка
  }, []);

  return state;
};

export default function AllHeroesBoxScroll({ numX }) {
  return (
    <MorphScroll
      className="heroBoxsScroll"
      size={[504, 346]}
      objectsSize={[230, 124]}
      gap={12}
      wrapperMargin={[0, 5]}
      progressTrigger={{
        wheel: true,
        progressElement: <ScrollThumb />,
        // content: true,
      }}
      edgeGradient={{ color: "#584a49" }}
      // render={{ type: "default" }}
      // render={{ type: "lazy", stopLoadOnScroll: true }}
      // render={{ type: "virtual", rootMargin: [400, 0, 0, 0] }}
      render={{ type: "virtual" }}
      scrollBarOnHover
      wrapperAlign={["center", "start"]}
      emptyElements={{
        mode: "clear",
        clickTrigger: { selector: ".exit", delay: 220 },
      }}
      // fallback={<div style={{ color: "#fff", fontSize: "20px" }}>loading</div>}
      // direction="hybrid"
      // direction="x"
      // direction="qweqwe" это показывает ошибку
      // crossCount={5}
    >
      <EmptyElement />
      <EmptyElement />
      {heroBoxData.map((item, index) => (
        <HeroBox
          key={index}
          {...item}
          btnNumX={numX}
          onClick={() => {
            nexus.acts.handlePopup({
              type: "open",
              data: {
                mpopClass: "m-popup hero-popup",
                popTit: "Moe Kasa",
                popCont: "HeroPopup",
              },
            });
          }}
          btnOnClick={() => {
            nexus.acts.handlePopup({
              type: "open",
              data: {
                mpopClass: "m-popup contentOnly framedPop heroOfferPop",
                popCont: "HeroOfferPop",
                props: { ...item },
              },
            });
          }}
        />
      ))}
      <EmptyElement />
    </MorphScroll>
  );
}
