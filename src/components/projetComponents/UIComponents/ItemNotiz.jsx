import React, { memo } from "react";
import { createPortal } from "react-dom";

import ItemBox from "../UIComponents/ItemBox";

export default memo(function ItemNotiz({
  pageName,
  items,
  positiom,
  onMouseOver,
  onMouseLeave,
}) {
  return (
    <>
      {items &&
        createPortal(
          <div
            className={`itemNotiz_wrap ${
              positiom.top > 320 ? "bottClass" : ""
            }`}
            style={positiom}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          >
            <div className="itemNotiz">
              <div className="itemNotiz_bg"></div>
              <div className="itemNotiz_scrollBox">
                <div className="itemNotiz_scroll">
                  {items.map((item, index) => (
                    <ItemBox
                      key={index}
                      itemClass="wh44"
                      itemPic={item[0]}
                      count={item[1]}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.querySelector(`#${pageName} .sAndL`)
        )}
    </>
  );
});
