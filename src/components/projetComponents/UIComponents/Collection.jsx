import React from "react";

import Button from "../UIComponents/Button";
import PersonAva from "../UIComponents/PersonAva";
import Tooltip from "../UIComponents/Tooltip";

const Collection = ({ collectionData, onClick, tooltipData }) => {
  const avatars = collectionData.girls.map((item, index) => {
    return <PersonAva key={index} className={item.className} img={item.img} />;
  });

  // !!! стейт только для теста кнопки
  const [get, setGet] = React.useState(false);
  const handleClick = () => {
    setGet(true);
  };
  // !!!

  const activeCards = collectionData.girls.filter(
    (item) => item.className === "active"
  ).length;

  const allAvaIsActive = collectionData.girls.length === activeCards;
  const status = collectionData.get || get;

  const chest = (
    <div
      className={`collection-chest ${
        status ? "check" : allAvaIsActive ? "open" : ""
      }`.trim()}
    ></div>
  );
  const chestWithTooltip = tooltipData ? (
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
          <div className="collection-valueBox">
            <div className="value">{`${activeCards}/${collectionData.girls.length}`}</div>
          </div>
        </div>
        {avatars}
      </div>
    </div>
  );
};

export default Collection;
