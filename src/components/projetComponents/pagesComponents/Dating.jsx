import React from "react";
import { useDispatch } from "../../templateComponents/GlobalStateStor";

import ItemBox from "../UIComponents/ItemBox";
import ResCount from "../UIComponents/ResCount";
import ScrollCopponent from "../UIComponents/ScrollCopponent";

export const cssFiles = [
  "scroll",
  "dating",
  "screen-superhero",
  "screen-unipop-subscription",
];

export default function Dating({ pageName, children }) {
  const dispatch = useDispatch();

  return (
    <div className="main world1">
      <div className="main-bg dating"></div>
      <div className="dating_content">
        <div className="dating_title">Your date</div>
        <div className="counterBox">
          <ResCount
            img="img/dating/datingCoin.png"
            value="234"
            plus
            onClick={() => {
              dispatch({
                type: "POPUP_OPEN",
                payload: {
                  mpopClass: "m-popup essence-buy",
                  popTit: "Buy Dices",
                  popCont: [
                    "BuyShop",
                    {
                      img1: "dating/datingCoin_1",
                      img2: "dating/datingCoin_2",
                      img3: "dating/datingCoin_3",
                      img4: "dating/datingCoin_4",
                    },
                  ],
                },
              });
            }}
          />
        </div>
        <div className="color-btn exit">
          <div className="color-btn-text"></div>
        </div>
        <div className="btnI" />

        <ScrollCopponent
          className="datingScroll"
          width={92}
          height={574}
          // width={574}
          // height={92}
          scrollObjectSize="86"
          gap={10}
          // xDirection
          scrollReverse
          draggable
        >
          <div className="ava active">
            <div className="avaWrap">
              <img
                src="img/images/goddess/goddess-13/x2/ava/goddess-ava-1.jpg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="ava">
            <div className="avaWrap">
              <img
                src="img/images/goddess/goddess-12/x2/ava/goddess-ava-1.jpg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="ava">
            <div className="avaWrap">
              <img
                src="img/images/goddess/goddess-11/x2/ava/goddess-ava-1.jpg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="ava">
            <div className="avaWrap">
              <img
                src="img/images/goddess/goddess-10/x2/ava/goddess-ava-1.jpg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="ava disabled">
            <div className="avaWrap">
              <img
                src="img/images/goddess/goddess-9/x2/ava/goddess-ava-1.jpg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="ava disabled">
            <div className="avaWrap">
              <img
                src="img/images/goddess/goddess-8/x2/ava/goddess-ava-1.jpg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="ava disabled">
            <div className="avaWrap">
              <img
                src="img/images/goddess/goddess-7/x2/ava/goddess-ava-1.jpg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="ava disabled">
            <div className="avaWrap">
              <img
                src="img/images/goddess/goddess-6/x2/ava/goddess-ava-1.jpg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="ava disabled">
            <div className="avaWrap">
              <img
                src="img/images/goddess/goddess-5/x2/ava/goddess-ava-1.jpg"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollCopponent>
      </div>
      {children}
    </div>
  );
}
