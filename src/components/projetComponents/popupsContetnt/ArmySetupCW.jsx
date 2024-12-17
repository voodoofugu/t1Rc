import React from "react";
import { nexusTrigger, useNexus } from "nexus-state";

import Button from "../UIComponents/Button";
import ItemBox from "../UIComponents/ItemBox";
import ImageBg from "../UIComponents/ImageBg";
import FraimedTitle from "../UIComponents/FraimedTitle";
import ResCount from "../UIComponents/ResCount";
import HeroMenuBox from "../UIComponents/HeroMenuBox";
import Info from "../UIComponents/Info";

import Scroll from "../../../../morphing-scroll/src/MorphingScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

import girleCards from "../data/girleCards";
import { heroClassesImg, heroClasses } from "../data/heroClasses";

const filteredData = (heroType) => {
  if (!heroType) {
    return girleCards;
  }
  return girleCards.filter((item) => item.itemPic.includes(heroType));
};

const extractKey = (itemPic) => {
  const heroMatch = itemPic.match(/hero-all\/tithero-(\d+)\//);
  const superHeroMatch = itemPic.match(/superhero\/suphero-(\d+)\//);

  if (heroMatch) {
    return `h${heroMatch[1]}`;
  } else if (superHeroMatch) {
    return `sh${superHeroMatch[1]}`;
  }

  return "unknown";
};

export default function ArmySetupCW() {
  const [activeKeys, setActiveKeys] = React.useState(new Set());
  const [activeMenu, setActiveMenu] = React.useState("girlsBtn");
  const [selectAll, setSelectAll] = React.useState(false);
  const [heroClass, setHeroClass] = React.useState("");

  const toggleActive = (key) => {
    setActiveKeys((prevKeys) => {
      const newKeys = new Set(prevKeys);
      if (newKeys.has(key)) {
        newKeys.delete(key);
      } else {
        newKeys.add(key);
      }
      return newKeys;
    });
  };

  const toggleSelect = () => {
    setActiveKeys(() => {
      if (selectAll) {
        return new Set();
      } else {
        return new Set(
          getHeroData()
            .filter((item) => !item.itemClass?.includes("block"))
            .map((item) => extractKey(item.itemPic))
        );
      }
    });
    setSelectAll((prev) => !prev);
  };

  const getHeroData = () => {
    switch (activeMenu) {
      case "heroBtn":
        return filteredData("hero-all");
      case "supHeroBtn":
        return filteredData("superhero");
      default:
        return filteredData();
    }
  };
  return (
    <>
      <ImageBg className="bG framedBg" img />

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

      <FraimedTitle className="cornersTop" text="Army Setup" />

      <Button
        className="exit"
        text="✖"
        onClick={() =>
          nexusTrigger({
            type: "handlePopup",
            payload: { type: "close" },
          })
        }
      />

      <div className="armySetupCont">
        <HeroMenuBox
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          tab1={["girlsBtn", "All Hero"]}
          tab2={["heroBtn", "Hero"]}
          tab3={["supHeroBtn", "Super Hero"]}
        />

        <Scroll
          className="armySetupScroll"
          scrollXY={[1100, 436]}
          objectXY={[94, 107]}
          padding={[6, 0]}
          gap={12}
          progressTrigger={["wheel", "progressElement"]}
          thumbElement={<ScrollThumb />}
          edgeGradient={{ color: "#52413f" }}
          progressBarSize={8}
          infiniteScroll
          contentAlignCenter
          wrapAlignCenter
          rootMargin={[0, 100]}
        >
          {getHeroData()
            .filter((item) => !heroClass || item.heroClass === heroClass) // Фильтрация по heroClass
            .map(
              (item) => (
                console.log("item", item),
                (
                  <ItemBox
                    key={extractKey(item.itemPic)}
                    {...item}
                    itemClass={`${item.itemClass || ""} ${
                      activeKeys.has(extractKey(item.itemPic)) ? "check" : ""
                    }`}
                    onClick={() => toggleActive(extractKey(item.itemPic))}
                  />
                )
              )
            )}
        </Scroll>

        <Button
          className="green max selectBtn"
          text={`${selectAll ? "Remove" : "Select All"}`}
          onClick={() => toggleSelect()}
        />
        <ResCount className="max armyPower" value="POWER 234" />

        <Info className="powerInfo" text="power needed 10" />
        <Info className="powerInfoClan" text="clan power 1000" />
      </div>

      <div className="armySetupFilter">
        {heroClassesImg.map((iconPath, index) => {
          const className = heroClasses[index];
          return (
            <Button
              key={className}
              className={`filterBtn${
                heroClass === className ? "" : " disabled"
              }`}
              textIcn={iconPath}
              onClick={() =>
                setHeroClass((prev) => (prev === className ? "" : className))
              }
            />
          );
        })}
      </div>

      <Button
        className="lightGreen attackBtn disabled"
        text="Attack"
        onClick={() =>
          nexusTrigger({
            type: "handlePopup",
            payload: { type: "close" },
          })
        }
      />
    </>
  );
}
