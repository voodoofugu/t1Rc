import React from "react";

import nexus from "nexus";

import Button from "../UIComponents/Button";
import PersonAva from "../UIComponents/PersonAva";
import Tooltip from "../UIComponents/Tooltip";
import FraimedTitle from "../UIComponents/FraimedTitle";
import VideoTag from "../UIComponents/VideoTag";

const Collection = ({ name, text, girlsData, onClick, tooltipData }) => {
  let bgId = "";
  const avatars = girlsData.girls.map((item, index) => {
    if (index === 0) {
      bgId = item.img.split("/")[3];
    }

    return (
      <PersonAva
        key={index}
        className={item.className}
        img={item.img}
        onClick={
          item.className === "closed"
            ? null
            : () => {
                nexus.acts.handlePopup({
                  type: "open",
                  data: {
                    mpopClass: "m-popup contentOnly framedPop videoPop",
                    popCont: "VideoPop",
                    props: {
                      content: (
                        <VideoTag
                          className="videoGallery"
                          poster={`img/images/superhero/${
                            item.img.split("/")[3]
                          }/x2/sh-6.jpg`}
                          source={[
                            `img/images/superhero/${
                              item.img.split("/")[3]
                            }/video.mp4`,
                          ]}
                          autoPlay
                          loop
                        />
                      ),
                    },
                  },
                });
              }
        }
      />
    );
  });

  // !!! стейт только для теста кнопки
  const [get, setGet] = React.useState(false);
  const handleClick = () => {
    setGet(true);
  };
  // !!!

  const activeCards = girlsData.girls.filter(
    (item) => item.className === "active",
  ).length;

  const allAvaIsActive = girlsData.girls.length === activeCards;
  const status = girlsData.get || get;

  const chest = (
    <div
      className={`collection-chest ${
        status ? "check" : allAvaIsActive ? "open" : ""
      }`.trim()}
    ></div>
  );
  const chestWithTooltip =
    tooltipData && !status ? (
      <Tooltip
        position={["top", "center"]}
        targetContent={
          <div className="achiev-hint default">
            <div className="tooltip">{tooltipData}</div>
          </div>
        }
      >
        {chest}
      </Tooltip>
    ) : (
      chest
    );

  return (
    <div
      className={`collectionBox${
        status ? " down" : allAvaIsActive ? " active" : ""
      }${allAvaIsActive ? "" : " disabled"}`.trim()}
    >
      {chestWithTooltip}
      <Button
        className={`${status ? "green check" : "btnGold"} get-collection`}
        text={`${status ? "COLLECTED" : "COLLECT"}`}
        onClick={handleClick}
        // {allAvaIsActive && onClick ? onClick : undefined}
      />
      <div className="collectionWrap">
        <div className="collectionBg">
          <div className="imgBg">
            <img src={`img/images/superhero/${bgId}/x2/sh-1.jpg`}></img>
          </div>
        </div>
        <div className="collection-valueBox">
          <div className="value">{`${activeCards}/${girlsData.girls.length}`}</div>
        </div>
        <div className="characterWrap">{avatars}</div>
        <FraimedTitle className="cornersTop collectionTit" text={name} />
        <div className="collectionText">{text}</div>
      </div>
    </div>
  );
};

export default Collection;
