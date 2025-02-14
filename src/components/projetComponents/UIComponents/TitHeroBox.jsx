import { useState } from "react";

import AllHeroesBoxScroll from "../UIComponents/AllHeroesBoxScroll";
import DpsDpcPanelBox from "../UIComponents/DpsDpcPanelBox";
import RatingPedBox from "../UIComponents/RatingPedBox";
import X2BtnAllBox from "../UIComponents/X2BtnAllBox";

export default function TitHeroBox() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(false);

  return (
    <>
      <DpsDpcPanelBox />
      <div className="all-heroes-box">
        {activeTab === false ? (
          <AllHeroesBoxScroll numX={quantity} />
        ) : (
          <RatingPedBox />
        )}
      </div>
      {activeTab === false && (
        <X2BtnAllBox quantity={quantity} setQuantity={setQuantity} />
      )}
    </>
  );
}
