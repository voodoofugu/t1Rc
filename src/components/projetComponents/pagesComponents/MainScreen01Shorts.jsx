import React from "react";

import { nexusTrigger } from "nexus-state";

import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
import Button from "../UIComponents/Button";
import FraimedTitle from "../UIComponents/FraimedTitle";
import Collection from "../UIComponents/Collection";
import ScrollThumb from "../UIComponents/ScrollThumb";
import ItemBox from "../UIComponents/ItemBox";
import VideoTag from "../UIComponents/VideoTag";

import useGoogleDocs from "../../hooks/useGoogleDocs";

// import ColorPickerPop from "../UIComponents/ColorPickerPop";

import collectionData from "../data/collectionData";

export const cssFiles = [
  "shorts-gallery",
  "dating",
  // "color-picker", // styles for ColorPickerPop
];

const sheetId = "1FwL6TJLN5XoEAuAxj8cdZoeD55eWX2NJYpXUCZFL3bI";
const gid = "551457807";

const girlClass = [
  "sword", // warrior
  "quitar", // bard
  "cleric",
  "druid",
  "barbarian",
  "ranger", // archer
  "wizard",
  "gun", // gunner
];

export default function MainScreen01Shorts({ pageName, children }) {
  const { data, loading } = useGoogleDocs(sheetId, gid);
  // const character = data.find((d) => d.id === "967");
  // const character = data[954];
  const lastIndex = 954;
  const totalItems = 19;
  const startIndex = lastIndex - totalItems + 1;

  const girlsCards = data
    .slice(startIndex, lastIndex + 1)
    .map((item, index) => {
      return (
        <ItemBox
          key={item.id}
          itemClass={`videoCard ${index === 0 ? "close" : "selectable"}`}
          heroClass={girlClass[item.class_type - 1]}
          cardType="superhero"
          rare={item.rare[0]}
          itemPic={`img/images/superhero/suphero-${item.id}/x2/sh-6.jpg`}
          count={
            <>
              {item.name.split(" ")[0]} <br />
              {item.name.split(" ")[1]}
            </>
          }
          onClick={
            index === 0
              ? null
              : () => {
                  nexusTrigger({
                    type: "handlePopup",
                    payload: {
                      type: "open",
                      data: {
                        mpopClass: "m-popup contentOnly framedPop videoPop",
                        popCont: "VideoPop",
                        props: {
                          content: (
                            <VideoTag
                              className="videoGallery"
                              poster={`img/images/superhero/suphero-${item.id}/x2/sh-6.jpg`}
                              source={[
                                `img/images/superhero/suphero-${item.id}/video.mp4`,
                              ]}
                              autoPlay
                              loop
                            />
                          ),
                        },
                      },
                    },
                  });
                }
          }
        />
      );
    });

  const collections = collectionData.map((item, index) => {
    return (
      <Collection
        key={index}
        name="Name of Collection"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
        girlsData={item}
        tooltipData={<div>your rewards</div>}
      />
    );
  });

  const scroll = loading ? (
    <MorphScroll
      className="shortsGallery"
      size={[1098, 497]}
      objectsSize="size"
      progressTrigger={{
        progressElement: [
          <FraimedTitle
            key="1"
            className="titBtn corners"
            text="COLLECTIONS"
          />,
          <FraimedTitle key="2" className="titBtn corners" text="CHARACTERS" />,
        ],
      }}
      render={{ type: "virtual" }}
      direction="x"
      type="sliderMenu"
      progressReverse
      wrapperMargin={[22, 0]}
    >
      <MorphScroll
        key={"collectionTab"}
        className="collectionTab"
        size={[1056, 448]}
        objectsSize={[300, 380]}
        gap={44}
        wrapperMargin={[40, 0]}
        edgeGradient={{ color: "#342A33" }}
        progressTrigger={{
          wheel: true,
          progressElement: <ScrollThumb />,
        }}
        direction="x"
        wrapperAlign={"center"}
      >
        {collections}
      </MorphScroll>
      <MorphScroll
        key={"charactersTab"}
        className="charactersTab"
        size={[1056, 448]}
        objectsSize={[162, 192]}
        gap={28}
        wrapperMargin={[0, 20]}
        edgeGradient={{ color: "#342A33" }}
        progressTrigger={{
          wheel: true,
          progressElement: <ScrollThumb />,
        }}
        wrapperAlign={["center", "start"]}
      >
        {girlsCards}
      </MorphScroll>
    </MorphScroll>
  ) : null;

  return (
    <div className="main world1">
      <div
        className="main-bg"
        style={{
          backgroundImage: "url('../img/images/back/new/09-River.jpg')",
        }}
      ></div>

      <div className="header">
        <div className="resource-panel">
          <div className="avatar-box-all">
            <div className="avatar-box-pic">
              <img src="img/v2-master-pic1.png" />
            </div>
            <div className="avatar-box-name">Rank 31</div>
          </div>

          <div className="resource-gold">
            <div className="value">6969K</div>
            <div className="value-bonus">+6969K%</div>
            <div className="resource-btn-add"></div>
            <div className="resource-pic">
              <img src="img/v2-res-gold.png" loading="lazy" />
            </div>
          </div>
          <div className="resource-vip lvl5">
            <div className="value-vip-diamond">6969K</div>
            <div className="value-vip-ticket">6969K</div>
            <div className="resource-btn-add"></div>
            <div className="resource-pic-vip">
              <div className="viplvl">VIP</div>
            </div>
          </div>
        </div>
        <div className="shop-chest-box-all">
          <div className="res-tavern-btn">
            <div className="res-shop-btn-text">tavern</div>
          </div>
          <div className="res-shop-btn">
            <div className="res-shop-btn-text">shop</div>
          </div>
          <div className="res-chest-btn">
            <div className="res-chest-btn-text">chests</div>
          </div>
        </div>
        <div className="btn signinout-btn out">
          <div className="icon-reg"></div>
          <div className="icon-reg2"></div>
        </div>
      </div>

      <div className="quest-box-all">
        <div className="quest-box-scroll">
          <div
            className="quest-box"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <li
              className="quest"
              onClick={() => {
                nexusTrigger({
                  type: "handlePopup",
                  payload: {
                    type: "open",
                    data: {
                      mpopClass: "m-popup contentOnly framedPop heroRewardPop",
                      popCont: "CongraPop",
                      props: {
                        titleText: "You got a new Short!",
                        rewardsData: [
                          {
                            itemClass: "shortCard",
                            heroClass: "wizard",
                            cardType: "superhero",
                            itemPic:
                              "img/images/superhero/suphero-952/x1/avatar/sh-ava-1.jpg",
                          },
                        ],
                      },
                    },
                  },
                });
              }}
            >
              <img className="icon" loading="lazy" src="img/tab-13.png" />
              <div className="timerbox">
                <div className="timer">GET SHORT</div>
              </div>
            </li>
          </div>
        </div>
        <div className="opt-panel-box">
          <div className="color-bg" />
          <div className="btn feedback" />
          <div className="btn statistic" />
          <div className="btn settings" />
          <div className="btn ru" />
        </div>
        <div className="btn-discord" />
      </div>

      <div className="right-side"></div>
      <div className="left-side">
        <div className="left-panel wide">
          <div className="heroes-list-all-box">
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
            {scroll}
          </div>
        </div>
        <div className="tabs-all-box">
          <a className="tabs-all heroes" href="#/">
            <div>
              <div className="tabs-name">Heroes</div>
              <div className="tabs-pic">
                <img src="img/tab-01.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all guild" href="#/guild">
            <div>
              <div className="tabs-name">Guild base</div>
              <div className="tabs-pic">
                <img src="img/tab-08.png" loading="lazy" />
              </div>
            </div>
            <div className="v2-tab-notif notif notif20"></div>
          </a>
          <a className="tabs-all album" href="#/galery/pictures">
            <div>
              <div className="tabs-name">Gallery</div>
              <div className="tabs-pic">
                <img src="img/tab-05.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all rating" href="#/rating/jewerly">
            <div>
              <div className="tabs-name">Rating Tab</div>
              <div className="tabs-pic">
                <img src="img/tab-02.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all squests" href="#/quests">
            <div>
              <div className="tabs-name">Quests</div>
              <div className="tabs-pic">
                <img src="img/tab-10.png" loading="lazy" />
              </div>
            </div>
          </a>
          <a className="tabs-all gallery selected" href="#/shorts">
            <div>
              <div className="tabs-name">Shorts</div>
              <div className="tabs-pic">
                <img src="img/tab-13.png" loading="lazy" />
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* <ColorPickerPop /> */}
      {children}
    </div>
  );
}
