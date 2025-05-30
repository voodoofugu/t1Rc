import React from "react";

import Button from "../UIComponents/Button";
import PersonAva from "../UIComponents/PersonAva";
import Tooltip from "../UIComponents/Tooltip";

const Collection = ({ name, text, girlsData, onClick, tooltipData }) => {
  let bgId = "";
  const avatars = girlsData.girls.map((item, index) => {
    if (index === 0) {
      bgId = item.img.split("/")[3];
    }

    return <PersonAva key={index} className={item.className} img={item.img} />;
  });

  // !!! стейт только для теста кнопки
  const [get, setGet] = React.useState(false);
  const handleClick = () => {
    setGet(true);
  };
  // !!!

  const activeCards = girlsData.girls.filter(
    (item) => item.className === "active"
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
          <img
            src={`img/images/superhero/${bgId}/x2/sh-1.jpg`}
            loading="lazy"
          />
        </div>
        <div className="collection-valueBox">
          <div className="value">{`${activeCards}/${girlsData.girls.length}`}</div>
        </div>
        <div className="characterWrap">{avatars}</div>
      </div>
      <div className="collectionTit">{name}</div>
      <div className="collectionText">{text}</div>
    </div>
  );
};

export default Collection;
