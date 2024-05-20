import React from "react";
import ItemBox from "../../components/projetComponents/UIComponents/ItemBox";

export default React.memo(function TestCompon({ children }) {
  return (
    <div className="store-item-box">
      <div className="store-name">Item Name</div>
      {/* <ItemBox
        itemPic="img/images/superhero/suphero-762/x2/avatar/762sh-ava-1.jpg"
        count={700}
        rare="u"
      /> */}
      {children}
      <div className="color-btn blue">
        <div className="color-btn-text">
          buy
          <img src="img/evPopArts/potion_black.png" loading="lazy" />
          750
        </div>
      </div>
    </div>
  );
});
