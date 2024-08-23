import { useDispatch } from "../../templateComponents/GlobalStateStor";

import ItemBox from "../UIComponents/ItemBox";
import Button from "../UIComponents/Button";
import ResCount from "../UIComponents/ResCount";

export default function DaitingGiftsPop({ girleID }) {
  const dispatch = useDispatch();

  return (
    <>
      <ResCount
        img="img/dating/giftsIcn.png"
        value="234"
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

      <div className="offer-card-box">
        <div className="card-content">
          <div className="card-title">Any Pack</div>
          <div className="reward-card-box">
            <ItemBox
              itemClass="cardAvaX2"
              itemPic={`img/images/superhero/suphero-${girleID}/x2/avatar/sh-ava-1.jpg`}
              count="+1000 Coins"
            />
          </div>
          <div className="reward-box">
            <ItemBox
              itemClass="wh60"
              itemPic="img/v2-res-diamond.png"
              count="1000"
            />
            <ItemBox
              itemClass="wh60"
              itemPic="img/v2-res-diamond.png"
              count="1000"
            />
            <ItemBox
              itemClass="wh60"
              itemPic="img/v2-res-diamond.png"
              count="1000"
            />
          </div>
          <div className="btn-bay-wrap">
            <div className="color-btn green">
              <div className="color-btn-text">
                <div className="price-nutaku"></div>
                49.90$
                <div className="old-price">
                  <div className="price-nutaku"></div>
                  99.90$
                </div>
              </div>
            </div>
            <div className="sale-banner">-50%</div>
            {/* <Button className="green big" text="49.90$" onClick={() => {}} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
