import React from "react";
import ItemBox from "../../components/projetComponents/UIComponents/ItemBox";

const number = 2;
const chil = <div>test</div>;

export default React.memo(function TestCompon({
  children = chil,
  num = number,
}) {
  return (
    <div className="store-item-box">
      <div className="store-name">Item Name</div>
      <ItemBox
        itemPic="img/images/superhero/suphero-762/x2/avatar/762sh-ava-1.jpg"
        count={700}
        rare="u"
      />
      {children}
      <div className="color-btn blue">
        <div className="color-btn-text">
          buy
          <img src="img/evPopArts/potion_black.png" loading="lazy" />
          {num}
        </div>
      </div>
    </div>
  );
});
