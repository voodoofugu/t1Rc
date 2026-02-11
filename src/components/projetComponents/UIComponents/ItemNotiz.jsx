import React, { memo } from "react";
import { createPortal } from "react-dom";

import ItemBox from "../UIComponents/ItemBox";
import MorphScroll from "../../../../morphing-scroll/src/components/MorphScroll";
import ScrollThumb from "../UIComponents/ScrollThumb";

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

              <MorphScroll
                className="itemNotiz-scroll"
                size={[164, 60]}
                objectsSize={44}
                gap={8}
                wrapperMargin={[0, 8, 0, 8]}
                edgeGradient={{ color: "#4f4f4f", size: 14 }}
                progressTrigger={{
                  wheel: true,
                  progressElement: <ScrollThumb />,
                }}
                direction="x"
                scrollBarEdge={8}
                wrapperAlign="center"
              >
                {items.map((item, index) => (
                  <ItemBox
                    key={index}
                    className="wh44"
                    itemPic={item[0]}
                    count={item[1]}
                  />
                ))}
              </MorphScroll>
            </div>
          </div>,
          document.querySelector(`#${pageName} .sAndL`),
        )}
    </>
  );
});
