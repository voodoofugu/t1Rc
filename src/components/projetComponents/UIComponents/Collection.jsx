import React from "react";

import Button from "../UIComponents/Button";
import PersonAva from "../UIComponents/PersonAva";

const Collection = ({ collectionData, onClick }) => {
  const avatars = collectionData.girls.map((item, index) => {
    return <PersonAva key={index} className={item.className} img={item.img} />;
  });

  const activeCards = collectionData.girls.filter(
    (item) => item.className === "active"
  ).length;

  const allAvaIsActive = collectionData.girls.length === activeCards;
  const status = collectionData.get;

  return (
    <div
      className={`collectionBox ${allAvaIsActive ? "active" : ""} ${
        collectionData.get ? "down" : ""
      }`.trim()}
    >
      <div className={`btnWrap ${allAvaIsActive ? "" : "disabled"}`.trim()}>
        <div
          className={`collection-chest ${
            collectionData.get ? "check" : allAvaIsActive ? "open" : ""
          }`.trim()}
        ></div>
        <Button
          className={`${status ? "green check" : "btnGold"} get-collection`}
          text={`${status ? "COLLECTED" : "COLLECT"}`}
          onClick={allAvaIsActive && onClick ? onClick : undefined}
        />
      </div>
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
